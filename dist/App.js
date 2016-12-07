"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// creates and configures an ExpressJS web server
class App {
    // run configuration methonds on the express instance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // configure express middleware
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
/*
  The App.express field holds a reference to Express. This makes it easier to access App methods for configuration and simplifies exporting the configured instance to index.ts.

  App.middleware configures our Express middleware. Right now we’re using the morgan logger and body-parser.

  App.routes will be used to link up our API endpoints and route handlers.
*/ 
