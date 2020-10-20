const {Group} = require('../models');

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
}
}

module.exports = groupController;
