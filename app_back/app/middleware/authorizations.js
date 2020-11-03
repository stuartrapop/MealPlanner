const { Group } = require('../models');

// check right for changing personal info

const checkUserOrAdmin = () => (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  console.log('userId', userId);

  if (!req.session.user) {
    res.status(401).json({ error: 'not authorized for action' });
  }
  else if (req.session.user.id !== userId && req.session.user.accountRole !== 'admin') {
    res.status(401).json({ error: 'not authorized for action' });
  }
  else {
    next();
  }
};

// for admin reserved areas
const checkAdmin = () => (req, res, next) => {
  if (!req.session.user) {
    res.status(401).json({ error: 'must be logged in and admin' });
  }
  else if (req.session.user.accountRole !== 'admin') {
    res.status(401).json({ error: 'must be an admin for this action' });
  }
  else {
    next();
  }
};

// only group owners or admin can make these changes
const groupOwner = () => (req, res, next) => {
  if (!req.session.user) {
    res.status(401).json({ error: 'must be logged in and group owner or admin to perform this action ' });
  }
  else if (req.session.user.accountRole === 'admin') {
    next();
  }
  else {
    const groupId = parseInt(req.params.id, 10);
    console.log('userId', groupId);
    const userId = req.session.user.id;

    Group.findByPk(groupId, { include: 'members' })
      .then((group) => {
        console.log('group members', group.members);
        const checkUser = group.members.find((member) => member.id === userId);
        console.log('checkUser', checkUser);

        if (checkUser.UserBelongsGroup.user_role === 'Propriétaire') {
          next();
        }
        else {
          res.status(401).json({ error: 'Il faut être propriétaire du groupe pour faire cette action' });
        }
      });
  }
};
module.exports = {
  checkUserOrAdmin,
  checkAdmin,
  groupOwner,
};
