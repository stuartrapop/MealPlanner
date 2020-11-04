const bcrypt = require('bcrypt');

const { User, Group } = require('../models');
const groupController = require('./groupController');
const mealController = require('./mealController');

// used for bcrypt -- salt rounds linked to complexity and time to generate password
const saltRounds = 10;

const adminController = {

  notFound: async (req, res) => {
    res.status = 404;
    res.json({ error: ['page not found'] });
  },

  // checks if active session put in place by express-session
  isLogged: (req, res) => {
    console.log('>> POST /isLogged', req.session.user);
    if (req.session.user) {
      res.json({
        isLogged: true,
        pseudo: req.session.user.userName,
        userId: req.session.user.id,
      });
    }
    else {
      res.json({ isLogged: false });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.json({ isLogged: false });
  },

  // check in user table for matching password
  login: async (req, res) => {
    try {
      const { email } = req.body;
      const { password } = req.body;

      const user = await User.findOne({
        where: { email: `${email}` },
      });
      if (!user) {
        res.status(401).json({ error: 'email not found' });
      }

      console.log('password', password, 'user.password', user.password);

      await bcrypt.compare(password, user.password).then((result) => {
        console.log('in compare result', result);
        // this is where express session is set
        if (result) {
          req.session.user = user;
          console.log('<< 200 OK', user);
          res.json({ isLogged: true, pseudo: user.userName, userId: user.id });
        }
        else {
          res.status(401).json({ error: 'wrong password' });
        }
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  updateAccount: async (req, res) => {
  // currently cannot change email address, just firstName, lastName, userName
    try {
      const userDetails = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
      };

      const userId = parseInt(req.params.id, 10);
      const user = await User.findByPk(userId, {

      });
      // send the details or not found
      if (user) {
        await user.update(
          {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            userName: userDetails.userName,
          },
        ).then((updatedUser) => {
        // send the details or not found
          if (updatedUser) {
            res.json({
              userId: updatedUser.id,
              firstName: updatedUser.firstName,
              lastName: updatedUser.lastName,
              pseudo: updatedUser.userName,
              email: updatedUser.email,
            });
          }
        }).catch((error) => {
          console.log(error);
          res.status(500).json({ error });
        });
      }
      else {
        res.status(404).json({ error: 'user not found' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  // create account if unique email need to require unique username as well later
  createAccount: async (req, res) => {
    try {
      const userDetails = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        accountRole: req.body.accountRole || 'user',
        password: req.body.password,
      };

      const emailTest = await User.findOne({
        where: { email: `${userDetails.email}` },
      });

      const userNameTest = await User.findOne({
        where: { userName: `${userDetails.userName}` },
      });

      console.log('will create', (!emailTest && !userNameTest));

      if (!emailTest && !userNameTest) {
        await bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(userDetails.password, salt, (err, hash) => {
            userDetails.password = hash;

            User.create(
              userDetails,
            ).then((createdUser) => {
            // send the details or not found
              if (createdUser) {
                res.json({
                  isLogged: false,
                  pseudo: createdUser.userName,
                  userId: createdUser.id,
                });
                // all users get a default group. And can never be owners of less than one group
                Group.create({ name: `Chez ${createdUser.userName}` })
                  .then((newGroup) => {
                    groupController.associateUser(createdUser.id, newGroup.id, 'Propriétaire');
                  });
              }
              else {
                res.status(401).json({ error: 'creation error' });
              }
            }).catch((error) => {
              console.log(error);
              res.status(500).json({ error });
            });
          });
        });
      }
      else {
        if (emailTest) {
          res.status(401).json({
            error: {
              details: [{ message: 'cet email existe déjà' }],
            },
          });
        }

        if (userNameTest) {
          res.status(401).json({
            error: {
              details: [{ message: 'Le pseudo proposé est déja pris' }],
            },
          });
        }
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  // to delete account need to remove all groups first
  deleteAccount: async (req, res) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await User.findByPk(userId, {
        include: ['favorites', {
          association: 'groups',
          include: 'members',
        }],
      });
      // send the details or not found
      if (user) {
        const ownerGroupList = user.groups.filter((group) => group.UserBelongsGroup.user_role === 'Propriétaire');
        const nonOwnerGroupList = user.groups.filter((group) => group.UserBelongsGroup.user_role !== 'Propriétaire');
        for (const favorite of user.favorites) {
          await user.removeFavorites(favorite.id);
        }

        for (const groupElement of ownerGroupList) {
          const group = await Group.findByPk(groupElement.id, {
            include: ['members', 'meals'],
          });

          for (const element of group.members) {
            await groupController.removeUser(element.id, group.id);
          }
          for (const meal of group.meals) {
            await mealController.deleteMealUtil(meal.id);
          }
          await group.destroy();
        }

        for (const groupElement of nonOwnerGroupList) {
          const group = await Group.findByPk(groupElement.id, {
            include: 'members',
          });
          await groupController.removeUser(user.id, group.id);
        }
        await user.destroy();

        res.json({ message: 'user successfuly destroyed' });
        return;
        res.json({
          user,
          ownerGroupList,
          nonOwnerGroupList,
        });
      }

      res.status(401).json({ error: 'user not found' });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  changePassword: async (req, res) => {
    try {
      const userDetails = {
        email: req.body.email,
        oldPassword: req.body.oldPassword,
        newPassword: req.body.newPassword,
      };

      const user = await User.findOne({
        where: { email: `${userDetails.email}` },
      });
      if (!user) {
        res.status(401).json({ error: 'email not in database' });
      }

      await bcrypt.compare(userDetails.oldPassword, user.password).then((result) => {
        console.log('in compare result', result);

        if (result) {
          bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(userDetails.newPassword, salt, (err, hash) => {
              userDetails.password = hash;
              user.update(
                { password: `${userDetails.password}` },
              ).then((updatedUser) => {
                // send the details or not found
                if (updatedUser) {
                  res.json(updatedUser);
                }
              }).catch((error) => {
                console.log(error);
                res.status(500).json({ error });
              });
            });
          });
        }
        else {
          res.status(401).json({ error: 'wrong password' });
        }
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};

module.exports = adminController;
