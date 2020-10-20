const { Type } = require('../models');

const typeController = {
  // les cards d'une liste
  allTypes: async (req, res) => {
    const types = await Type.findAll({
      include: 'recipes',
    });
      // on renvoie les cartes
    res.json(types);
  },
};

module.exports = typeController;
