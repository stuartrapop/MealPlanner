require('dotenv').config(); // used for .env file.
const express = require('express');
const session = require('express-session'); // for cookies
const path = require('path');

const bodyParser = require('body-parser');

// experiment with http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

// create the proxy (without context)

const app = express();
const sanitizeHtml = require('sanitize-html');

const cors = require('cors');

app.get('/ping', (req, res) => res.send('pong'));

app.use(express.static(path.join(__dirname, '../app_front/dist/')));
app.use(express.static(path.join(__dirname, './uploads/')));

app.use('/api', createProxyMiddleware({ target: 'http://amanger.com', changeOrigin: true }));
const router = require('./app/router');

app.use(bodyParser.json());

// the set of instructions for cookies and cors which both works for secure and non secure
// must change chrome://flags samesite settings to have localhost for front and aws for back
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
  // Authorize mutiple urls for cors. Cors now down with out cors package

  const allowedOrigins = ['http:amanger.com', 'http://3.127.235.222', 'https:amanger.com', 'http://localhost:8080', 'http://192.168.95.145:8080', 'http://192.168.95.179:8080', 'http://90.114.25.203:8080', 'http://90.93.86.61:8080'];
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // old line whch only allowed one url
  // res.header('Access-Control-Allow-Origin', 'http://3.127.235.222/');

  res.header('Access-Control-Allow-Credentials', true);
  // on autorise le partage de ressources entre origines
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

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
