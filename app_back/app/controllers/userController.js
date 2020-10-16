const {User} = require('../models');

const userController = {
  // les cards d'une liste
  allUsers: async (req, res) => {
      const users = await User.findAll({
  
      });
      // on renvoie les cartes
      res.json(users);

  },
};

module.exports = userController;
