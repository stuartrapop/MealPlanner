const { Review, User, Recipe } = require('../models');

const reviewController = {
  // les cards d'une liste
  allReviews: async (req, res) => {
    try {
      const reviews = await Review.findAll();
      // on renvoie les cartes
      res.json(reviews);
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  oneReview: async (req, res) => {
    try {
      const reviewId = parseInt(req.params.id, 10);
      const review = await Review.findByPk(reviewId, {

      });
      // send the details or not found
      if (review) {
        res.json(review);
      }
      else {
        res.status(404).json({ error: 'review not found' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  createReview: async (req, res) => {
    try {
      const { comment } = req.body;
      const grade = parseInt(req.body.grade, 10);
      const userId = parseInt(req.body.userId, 10);
      const recipeId = parseInt(req.body.recipeId, 10);
      const user = await User.findByPk(userId);
      if (!user) {
        res.json({ error: 'user does not exist' });
      }
      const recipe = await Recipe.findByPk(recipeId);
      if (!recipe) {
        res.json({ error: 'recipe does not exist' });
      }
      const review = await Review.findOne({
        where: {
          userId,
          recipeId,
        },
      });
      // send the details or not found
      if (review) {
        res.json({ error: 'you have already reviewed this recipe' });
      }
      else {
        const review = await Review.create({
          comment,
          grade,
          userId,
          recipeId,
        });
        res.json({ message: review });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  updateReview: async (req, res) => {
    try {
      const reviewId = parseInt(req.params.id, 10);
      const review = await Review.findByPk(reviewId);
      const { comment } = req.body;
      const grade = parseInt(req.body.grade, 10);

      // send the details or not found
      if (!review) {
        res.json({ error: 'review does not exist' });
      }
      else {
        await review.update({
          comment,
          grade,
        });

        res.json({ message: 'review updated' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  deleteReview: async (req, res) => {
    try {
      const reviewId = parseInt(req.params.id, 10);
      const review = await Review.findByPk(reviewId, {

      });
      if (!review) {
        res.json({ error: 'review does not exist' });
      }
      else {
        await review.destroy();
        res.json({ message: 'review deleted' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

};

module.exports = reviewController;
