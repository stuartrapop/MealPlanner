const {Group, User} = require('../models');


const groupController = {


  // les cards d'une liste
  allGroups: async (req, res) => {
      const groups = await Group.findAll({
        include: [
            "members",
            {
             association  : "meals",
             include : [            
              {
                association  : "recipes",
                include : "ingredients" 
              }
            ]}
            
        ]

    });
      // on renvoie les cartes
      res.json(groups);

  },
 // les cards d'une liste
createGroup: async (req, res) => {
  try {
    const name = req.body.name;
    const userId = parseInt(req.body.userId);
    const user = await User.findByPk( userId, {
      include: "groups"});
    if(!user){
      res.json({error: "user does not exist"});
    }

    const group = await Group.create({name : name});

    await group.setMembers(user, {through : {user_role : "créature"}});

console.log(group.id);
/*
Group.findByPk(group.id).then( async(group) => {
  try{
      await Group.addMembers(userId); // 3 relationship are in db postId: 1 with userId: 1,2,3 
  
  }catch(e){
      console.error(e);
  }
});*/


// send the details or not found
  if(group){
    res.json({message: group});
  } 
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},

updateGroup: async (req, res) => {
  try {

    const name = req.body.name;
    const groupId = parseInt(req.params.id);
    const group = await Group.findByPk(groupId);

// send the details or not found
  if(!group){
    res.json({error: "group does not exist"});
  } else {
     await group.update({
        name :name
     });

    res.json({message: "group name updated"});
  }
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},


  oneGroup: async (req, res) => {
    try {
    const groupId = parseInt(req.params.id);
    const group = await Group.findByPk(groupId,{
      include: [
        "members",
        {
         association  : "meals",
         include : [            
          {
            association  : "recipes",
            include : "ingredients" 
          }
        ]}
        
    ]
  });
// send the details or not found
    if(group){
      res.json(group);
    } else {
      res.status(404).json({error: "group not found"});
    }
} catch(error) {
  console.log(error);
  res.status(500).json({error});
}
},
deleteGroup: async (req, res) => {
  try {
    const groupId = parseInt(req.params.id);
    const group = await Group.findByPk(groupId,{

  });
  if(!group){
    res.json({error: "group does not exist"});
  } else {
     await group.destroy();
    res.json({message: "group deleted"});
  }
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},
}

module.exports = groupController;
