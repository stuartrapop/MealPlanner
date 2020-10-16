  
const express = require('express');
const userController = require('./controllers/userController');



const router = express.Router();

// On rend le choix de l'entité paramétrable
router.get('/', (req, res) => {
    res.send('Hello World!')
  });
router.get('/users', userController.allUsers);


module.exports = router;
