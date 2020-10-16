const {Family} = require('../models');

const familyController = {
  // les cards d'une liste
  allFamilies: async (req, res) => {
      const families = await Family.findAll({
  
      });
      // on renvoie les cartes
      res.json(families);

  },
};

module.exports = familyController;
