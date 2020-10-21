const { Group, User } = require('../models');
const mealController = require('./mealController');

const groupController = {

  // les cards d'une liste
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

    await group.addMembers(user, { through: { user_role: userRole } });
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
      if (foundUser.UserBelongsGroup.user_role === 'créateur') {
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
  // les cards d'une liste
  createGroup: async (req, res) => {
    try {
      const { name } = req.body;
      const userId = parseInt(req.body.userId, 10);
      const user = await User.findByPk(userId, { include: 'groups' });
      if (!user) {
        res.json({ error: 'user does not exist' });
      }

      const group = await Group.create({ name });
      await groupController.associateUser(userId, group.id, 'créateur');

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

  // les cards d'une liste
  addMember: async (req, res) => {
    try {
      const groupId = parseInt(req.body.groupId, 10);
      const userId = parseInt(req.body.userId, 10);
      const { userRole } = req.body;
      const user = await User.findByPk(userId);
      if (!user) {
        res.json({ error: 'user does not exist' });
      }
      let group = await Group.findByPk(groupId, {
        include: 'members',
      });
      if (!group) {
        res.json({ error: 'group does not exist' });
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

  oneGroup: async (req, res) => {
    try {
      const groupId = parseInt(req.params.id, 10);
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
      // send the details or not found
      if (group) {
        res.json(group);
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
  deleteGroup: async (req, res) => {
    try {
      const groupId = parseInt(req.params.id, 10);
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
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};

module.exports = groupController;
