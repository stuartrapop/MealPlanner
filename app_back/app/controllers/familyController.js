const { Family } = require('../models');

const familyController = {
  // les cards d'une liste
  allFamilies: async (req, res) => {
    const families = await Family.findAll({
      include: 'ingredients',
    });
      // on renvoie les cartes
    res.json(families);
  },
};

module.exports = familyController;
