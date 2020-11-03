const { Group, User } = require('../models');
const mealController = require('./mealController');

const groupController = {
// used for debug - gets all group info with recipes and ingredients and members
  allGroups: async (req, res) => {
    const groups = await Group.findAll({
      include: [
        'members',
        {
          association: 'meals',
          include: [
            {
              association: 'recipes',
              include: 'ingredients',
            },
          ],
        },
      ],
    });
      // on renvoie les cartes
    res.json(groups);
  },
  // function to associate a user to a group
  associateUser: async (userId, groupId, userRole) => {
    const group = await Group.findByPk(groupId);

    const user = await User.findByPk(userId);

    await group.addMember(user, { through: { user_role: userRole } });
  },
  // function to remove a user from a group
  removeUser: async (userId, groupId) => {
    const group = await Group.findByPk(groupId);

    const user = await User.findByPk(userId);

    // on renvoie les cartes
    await group.removeMembers(user);
  },

  // function to remove a non Owner member
  removeMember: async (req, res) => {
    try {
      console.log('arrived in removeMember');
      const groupId = parseInt(req.body.groupId, 10);
      const userId = parseInt(req.body.userId, 10);

      const group = await Group.findByPk(groupId, {
        include: 'members',
      });
      if (!group) {
        res.json({ error: 'group does not exist' });
      }
      const user = await User.findByPk(userId);
      if (!user) {
        res.json({ error: 'user does not exist' });
      }
      const foundUser = group.members.find((member) => member.id === userId);
      if (!foundUser) {
        res.json({ error: 'this user is not a member of the group' });
      }
      if (foundUser.UserBelongsGroup.user_role === 'Propriétaire') {
        res.json({ error: 'cannot delete the group owner' });
      }
      else {
        await group.removeMembers(user);
        res.json({ message: 'member deleted' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  // create a new group
  createGroup: async (req, res) => {
    try {
      const { name } = req.body;
      const userId = parseInt(req.body.userId, 10);
      const user = await User.findByPk(userId, { include: 'groups' });
      if (!user) {
        res.json({ error: 'user does not exist' });
      }

      const group = await Group.create({ name });
      await groupController.associateUser(userId, group.id, 'Propriétaire');

      // send the details or not found
      if (group) {
        res.json({ message: group });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  // add a member to a group
  addMember: async (req, res) => {
    try {
      const groupId = parseInt(req.body.groupId, 10);
      const userId = parseInt(req.body.userId, 10);
      const { userRole } = req.body;
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(403).json({ error: 'user does not exist' });
      }
      let group = await Group.findByPk(groupId, {
        include: 'members',
      });
      if (!group) {
        res.status(403).json({ error: 'group does not exist' });
      }
      await groupController.associateUser(userId, groupId, userRole);

      group = await Group.findByPk(groupId, {
        include: 'members',
      });
      // send the details or not found
      if (group) {
        res.json({ message: group });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  // change a non owner member to/from readonly to manage role
  changeMemberRole: async (req, res) => {
    try {
      const groupId = parseInt(req.body.groupId, 10);
      const userId = parseInt(req.body.userId, 10);
      const { userRole } = req.body;

      console.log('change Member Role', groupId, userId, userRole);
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(403).json({ error: 'user does not exist' });
      }
      let group = await Group.findByPk(groupId, {
        include: 'members',
      });
      if (!group) {
        res.status(403).json({ error: 'group does not exist' });
      }
      await group.addMembers(user, { through: { user_role: userRole } });

      group = await Group.findByPk(groupId, {
        include: 'members',
      });
      // send the details or not found
      if (group) {
        res.json({ message: group });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  // change group name
  updateGroup: async (req, res) => {
    try {
      const { name } = req.body;
      const groupId = parseInt(req.params.id, 10);
      const group = await Group.findByPk(groupId);

      // send the details or not found
      if (!group) {
        res.json({ error: 'group does not exist' });
      }
      else {
        await group.update({
          name,
        });

        res.json({ message: 'group name updated' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  // view one group with all members
  oneGroup: async (req, res) => {
    try {
      const groupId = parseInt(req.params.id, 10);
      const group = await Group.findByPk(groupId, {
        include: 'members',
      });

      console.log(group);

      if (group) {
      // send the details or not found
        const groupMemberArray = group.members.map((user) => ({
          firstName: user.firstName,
          lastName: user.lastName,
          pseudo: user.userName,
          userId: user.id,
          userRole: user.UserBelongsGroup.user_role,
        }));

        // on renvoie les cartes
        res.json({
          groupId: group.id,
          groupName: group.name,
          groupMemberArray,
        });
      }
      else {
        res.status(404).json({ error: 'group not found' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

 
  // delete a group
  deleteGroup: async (req, res) => {
    try {
      const groupId = parseInt(req.params.groupId, 10);
      const userId = parseInt(req.params.userId, 10);

      console.log('req params', req.params);
      console.log('userId', userId);
      console.log('groupId', groupId);

      const user = await User.findByPk(userId, {
        include: 'groups',
      });

      const ownerGroupList = user.groups.filter((group) => group.UserBelongsGroup.user_role === 'Propriétaire');
      const checkOwner = user.groups.find((group) => (group.UserBelongsGroup.user_role === 'Propriétaire') && (group.id = groupId));

      console.log('checkowner', checkOwner, 'number of groups', ownerGroupList.length);

      if (!checkOwner) {
        res.status(400).json({ error: 'Vous ne pouvez pas éffacer une groupe qui ne vous appartient pas' });
      }
      else
      if (ownerGroupList.length < 2) {
        res.status(400).json({ error: 'Vous ne pouvez pas éffacer votre derniere groupe' });
      }

      else {
        const group = await Group.findByPk(groupId, {
          include: [
            'members',
            {
              association: 'meals',
              include: [
                {
                  association: 'recipes',
                  include: 'ingredients',
                },
              ],
            },
          ],
        });

        if (!group) {
          res.json({ error: 'group does not exist' });
        }
        else {
          for (const element of group.members) {
            await groupController.removeUser(element.id, groupId);
          }
          for (const meal of group.meals) {
            await mealController.deleteMealUtil(meal.id);
          }
          await group.destroy();
          res.json({ message: 'group deleted' });
        }
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};

module.exports = groupController;
