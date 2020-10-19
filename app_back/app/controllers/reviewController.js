const {Review, User, Recipe} = require('../models');

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
},
createReview: async (req, res) => {
  try {
    const comment = req.body.comment;
    const grade = parseInt(req.body.grade);
    const userId = parseInt(req.body.userId);
    const recipeId = parseInt(req.body.recipeId);
const user = await User.findByPk( userId);
if(!user){
  res.json({error: "user does not exist"});
}
const recipe = await Recipe.findByPk( recipeId);
if(!recipe){
  res.json({error: "recipe does not exist"});
}
const review = await Review.findOne({
  where : {
    userId : userId,
    recipeId : recipeId
  }
});
// send the details or not found
  if(review){
    res.json({error: "you have already reviewed this recipe"});
  } else {
    const review = await Review.create({
        comment : comment,
        grade: grade,
        userId : userId,
        recipeId : recipeId
      }
    );
    res.json({message: review});
  }
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},
updateReview: async (req, res) => {
  try {

    const reviewId = parseInt(req.params.id);
    const review = await Review.findByPk(reviewId);
    const comment = req.body.comment;
    const grade = parseInt(req.body.grade);

// send the details or not found
  if(!review){
    res.json({error: "review does not exist"});
  } else {
     await review.update({
        comment : comment,
        grade: grade,
     });

    res.json({message: "review updated"});
  }
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},

deleteReview: async (req, res) => {
  try {
    const reviewId = parseInt(req.params.id);
    const review = await Review.findByPk(reviewId,{

  });
  if(!review){
    res.json({error: "review does not exist"});
  } else {
     await review.destroy();
    res.json({message: "review deleted"});
  }
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},

};

module.exports = reviewController;
