require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const bodyParser = require('body-parser');

// experiment with http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

// create the proxy (without context)

const app = express();
const sanitizeHtml = require('sanitize-html');
const cors = require('cors');

// app.use('/api', exampleProxy);

app.get('/ping', (req, res) => res.send('pong'));

app.use(express.static(path.join(__dirname, '../app_front/dist/')));

app.use('/api', createProxyMiddleware({ target: 'http://amanger.com', changeOrigin: true }));
const router = require('./app/router');

app.use(bodyParser.json());
/*
app.use(session(
  {
    secret: 'g5g48er7gergGER',
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24, // cookie life in seconds. This maxAge is 1 day.
    },
  },
));

// middleware CORS authorize API access from anywhere
app.use(cors({ origin: ['http:amanger.com', 'http://3.127.235.222', 'https:amanger.com', 'http://localhost:8080', 'http://192.168.95.145:8080', 'http://192.168.95.179:8080', 'http://90.114.25.203:8080', 'http://90.93.86.61:8080'], credentials: true }));

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, OPTIONS, PUT, DELETE');
  next();
});
*/

Object.defineProperty(session.Cookie.prototype, 'sameSite', {
  // sameSite cannot be set to `None` if cookie is not marked secure
  get() {
    return this._sameSite === 'none' && !this.secure ? 'lax' : this._sameSite;
  },
  set(value) {
    this._sameSite = value;
  },
});

// Session
app.use(session({
  secret: 'g5g48er7gergGER',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // empêche l'accès au cookie depuis du javascript côté front
    secure: false, // HTTPS est nécessaire si l'on veut passer l'option à true
    maxAge: 1000 * 60 * 60 * 24, // durée de vie du cookie en milliseconds, ici ça donne 1 jour
  },
}));

// CORS
app.use((req, res, next) => {
  // on autorise explicitement le domaine du front

  const allowedOrigins = ['http:amanger.com', 'http://3.127.235.222', 'https:amanger.com', 'http://localhost:8080', 'http://192.168.95.145:8080', 'http://192.168.95.179:8080', 'http://90.114.25.203:8080', 'http://90.93.86.61:8080'];
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.header('Access-Control-Allow-Origin', 'http://3.127.235.222/');
  // on autorise le partage du cookie
  res.header('Access-Control-Allow-Credentials', true);
  // on autorise le partage de ressources entre origines
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});

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
