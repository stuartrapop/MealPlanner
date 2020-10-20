const {User} = require('../models');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const adminController = {

  notFound: async (req, res) => {
  
    res.status = 404;
    res.json({error : 'page not found'});

},
login: async (req, res) => {
  try {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    where : {email : `${email}`}
  });
  if(!user){
    res.status(404).json({error: "email not found"});
  }

  console.log("password" , password, "user.password",user.password);

  await bcrypt.compare(password, user.password).then(result =>  {
       console.log("in compare result", result)

          if(result){
            res.json(user);
          } else {
            res.status(404).json({error: "wrong password"});
          }
  })
 


} catch(error) {
console.log(error);
res.status(500).json({error});
}
},

updateAccount: async (req, res) => {

  //currently cannot change email address, just firstName, lastName, userName
  try { 
    const userDetails ={
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      userName : req.body.userName,
      email : req.body.email,
      password : req.body.password,
     }

  const user = await User.findOne({
    where : {email : `${userDetails.email}`}
  });
  if(!user){
    res.status(404).json({error: "email not in database"});
  }

  await bcrypt.compare(userDetails.password, user.password).then(result =>  {
    console.log("in compare result", result)

       if(result){
              user.update(
                {  firstName : userDetails.firstName,
                  lastName : userDetails.lastName,
                  userName : userDetails.userName,}
            ).then (user => {
            // send the details or not found
              if(user){
                res.json(user);
              }                  
              }).catch(error => {
                console.log(error);
                res.status(500).json({error});;
            });
       } else {
         res.status(404).json({error: "wrong password"});
       }
})
  
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},

createAccount: async (req, res) => {
  try {
  
  const userDetails ={
   firstName : req.body.firstName,
   lastName : req.body.lastName,
   userName : req.body.userName,
   email : req.body.email,
   password : req.body.password,
  }

  const emailCheck = await User.findOne({
    where : {email : `${userDetails.email}`}
  });
  if(emailCheck){
    res.status(404).json({error: "email already in database"});
  }

  

  

await bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(userDetails.password, salt, function(err, hash) {
      
      userDetails.password = hash;
      
      const user =  User.create(
        userDetails
    ).then (user => {
    // send the details or not found
      if(user){
        res.json(user);
      } else {
        res.status(404).json({error: "wrong password"});
      }
      
      }).catch(error => {
        console.log(error);
        res.status(500).json({error});;
    });

  });
});


} catch(error) {
console.log(error);
res.status(500).json({error});
}
},

deleteAccount: async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.findByPk(userId,{

  });
// send the details or not found
    if(user){
      user.destroy();
      res.json({message : "user successfuly destroied"});
    } else {
      res.status(404).json({error: "user not found"});
    }
} catch(error) {
  console.log(error);
  res.status(500).json({error});
}
},

changePassword: async (req, res) => {
  try { 
  const userDetails ={
   email : req.body.email,
   oldPassword : req.body.oldPassword,
   newPassword : req.body.newPassword,
  }

  const user = await User.findOne({
    where : {email : `${userDetails.email}`}
  });
  if(!user){
    res.status(404).json({error: "email not in database"});
  }

  await bcrypt.compare(userDetails.oldPassword, user.password).then(result =>  {
    console.log("in compare result", result)

       if(result){
                 bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(userDetails.newPassword, salt, function(err, hash) {    
                  userDetails.password = hash;     
                  user.update(
                    {password : `${userDetails.password}`}
                ).then (user => {
                // send the details or not found
                  if(user){
                    res.json(user);
                  }                  
                  }).catch(error => {
                    console.log(error);
                    res.status(500).json({error});;
                });
              });
            });
       } else {
         res.status(404).json({error: "wrong password"});
       }
})
  
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},
};

module.exports = adminController;
