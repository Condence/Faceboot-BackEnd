const express = require("express");
const morgan = require("morgan");
const loger = require("./utils/logger");

const app = express();
require("./core/persistence/connection/connection");
const tokensMiddleware = require("./middleware/tokens");
const middlewares = require("./middleware/middlewares");