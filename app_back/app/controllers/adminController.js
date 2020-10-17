const {User} = require('../models');

const adminController = {

  notFound: async (req, res) => {
  
    res.status = 404;
    res.json({error : 'page not found'});

},

oldLogin: (req, res, next) => {
  

    console.log(req.query.email)
    res.json({message : req.body});

  

},

login: async (req, res) => {
  try {
  const email = req.body.email;
  const password = req.body.password;

  const emailCheck = await User.findOne({
    where : {email : `${email}`}
  });
  if(!emailCheck){
    res.status(404).json({error: "email not found"});
  }
  const user = await User.findOne({
    where : {email : `${email}`,
            password : password}
});
// send the details or not found
  if(user){
    res.json(user);
  } else {
    res.status(404).json({error: "wrong password"});
  }
} catch(error) {
console.log(error);
res.status(500).json({error});
}
  

},
};

module.exports = adminController;
