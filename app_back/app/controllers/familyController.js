const { Family } = require('../models');
// just used for debug
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
