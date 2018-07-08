/**
 * Module dependencies.
 */
import * as express from "express";
import * as helmet from "helmet";
const cfenv: any = require("cfenv"); // cloud foundry environment variables
import forceHttpsMiddleware from "../middleware/forceHttps";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import Auth from "./Auth";
import "./orm";

/**
 * Adds Sync support to express routers & needs to be above import of routes
 */
require("express-async-errors");
import routes from "../routes";

/**
 * Create Express server.
 */
const server = express();

/**
 * Force https when not localhost
 */
if (!cfenv.getAppEnv().isLocal) {
  server.use(forceHttpsMiddleware);
}

/**
 * Use helmet for security
 */
server.use(helmet());

/**
 * Body parser
 */
server.use(bodyParser.urlencoded({ extended: false })); // application/x-www-form-urlencoded
server.use(bodyParser.json()); // parse application/json

/**
 * Express Validator.
 * Must be set directly after body parser
 */
//server.use(expressValidator());

// prevents express setting x-powered-by header
server.disable("x-powered-by");

/**
 * Initialize passport
 */
server.use(Auth.initialize());

/**
 * use compression
 */
server.use(compression());

// Data API routes
server.use("/api", routes);

export default server;
