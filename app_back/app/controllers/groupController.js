const {Group} = require('../models');

const groupController = {
  // les cards d'une liste
  allGroups: async (req, res) => {
      const groups = await Group.findAll({
  
      });
      // on renvoie les cartes
      res.json(groups);

  },
};

module.exports = groupController;
