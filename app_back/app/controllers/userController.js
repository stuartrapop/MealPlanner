const { User } = require('../models');

const userController = {
  // les cards d'une liste
  allUsers: async (req, res) => {
    const users = await User.findAll({
      include: ['recipes', 'favorites'],

    });
      // on renvoie les cartes
    res.json(users);
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
                  include: 'ingredients',
                },
              },
            ],
          }],

      });
      // send the details or not found
      if (user) {
        res.json(user);
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
