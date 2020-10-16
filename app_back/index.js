require('dotenv').config()
const express = require('express')
const app = express();
const sanitizeHtml = require('sanitize-html');
const cors = require('cors');
const router = require('./app/router');


// middleware CORS authorize API access from anywhere
app.use(cors());

// for handling post encoded data
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000; 
const server = process.env.SERVER || 'google.com'; 
console.log(process.env.SERVER)


// use package sanitize-html to escape all html to avoid malicious code injection
app.use((req, res, next) => {
    // je vais modifier tout ce qu'il pourrait y avoir dans req.body
    if (req.body) {
        for (const property in req.body) {
            req.body[property] = sanitizeHtml(req.body[property]);
        }
    }
    // puis passer au middleware suivant
    next();
});


app.use(router);

  
app.listen(port, () => {
  console.log(`Example app listening at http://${server}:${port}`)
})