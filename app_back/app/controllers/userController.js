const { User } = require('../models');

const userController = {
  // les cards d'une liste
  allUsers: async (req, res) => {
    try {
      if (req.session.user) {
        if (req.session.user.accountRole !== 'admin') {
          res.status(401).json({ error: 'you are not authorized to see this page' });
        }
      }
      else {
        res.status(401).json({ error: 'you must be connected and authorized to see this page' });
      }

      const users = await User.findAll();
      // on renvoie les cartes
      res.json(users);
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  getPseudos: async (req, res) => {
    try {
      if (!req.session.user) {
        res.status(401).json({ error: 'you must be connected to see this page' });
      }

      const users = await User.findAll({

      });
      const pseudoArray = users.map((user) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        pseudo: user.userName,
        userId: user.id,
      }));

      // on renvoie les cartes
      res.json({
        pseudoArray,
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  oneUser: async (req, res) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await User.findByPk(userId, {
        include: [ // include groups then meals then recipes then ingredients
          {
            association: 'groups',
            include: [
              {
                association: 'meals',
                include: {
                  association: 'recipes',
                  include: [{
                    association: 'ingredients',
                    include: 'families',
                  }, 'types'],
                },
              },
            ],
          }],

      });
      // send the details or not found
      if (user) {
        res.json({
          userId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          groups: user.groups,
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
};

module.exports = userController;
