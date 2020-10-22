require('dotenv').config();
const express = require('express');
const session = require('express-session');

const bodyParser = require('body-parser');

const app = express();
const sanitizeHtml = require('sanitize-html');
const cors = require('cors');
const router = require('./app/router');

app.use(bodyParser.json());

app.use(session(
  {
    secret: 'g5g48er7gergGER',
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: 'none',
      httpOnly: true, // stops access to cookies from the client
      secure: false, // HTTPS is not required with false
      maxAge: 1000 * 60 * 60 * 24, // cookie life in seconds. This maxAge is 1 day.
    },
  },
));

// middleware CORS authorize API access from anywhere
 app.use(cors({ origin: ['http://localhost:8080', 'http://192.168.95.145:8080', 'http://192.168.95.179:8080', 'http://90.114.25.203:8080', 'http://90.93.86.61:8080'], credentials: true }));





// for handling post encoded data
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const server = process.env.SERVER || 'google.com';
console.log(process.env.SERVER);

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
  console.log(`Example app listening at http://${server}:${port}`);
});
