const express = require('express');
const fs = require('fs');
const https = require('https');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

dotenv.config();

const app = express();
const router = express.Router();

const port = 8000 || process.env.PORT;

// middlewares
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get("/", (req, res) => {
  res.send("Hello rest")
});

app.use(router);

const httpsOptions = {
  cert: fs.readFileSync("server.cert"),
  key: fs.readFileSync("server.key")
};

https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running on port ' + port);
});







