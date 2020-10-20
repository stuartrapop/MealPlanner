const {Review} = require('../models');

const reviewController = {
  // les cards d'une liste
  allReviews: async (req, res) => {
      const reviews = await Review.findAll({
  
      });
      // on renvoie les cartes
      res.json(reviews);

  },
  oneReview: async (req, res) => {
    try {
    const reviewId = parseInt(req.params.id);
    const review = await Review.findByPk(reviewId,{

  });
// send the details or not found
    if(review){
      res.json(review);
    } else {
      res.status(404).json({error: "review not found"});
    }
} catch(error) {
  console.log(error);
  res.status(500).json({error});
}
}
};

module.exports = reviewController;
