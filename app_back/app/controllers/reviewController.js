const {Review} = require('../models');

const reviewController = {
  // les cards d'une liste
  allReviews: async (req, res) => {
      const reviews = await Review.findAll({
  
      });
      // on renvoie les cartes
      res.json(reviews);

  },
};

module.exports = reviewController;
