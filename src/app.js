const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);

  return next();
});

app.use(router);

module.exports = app;
