import {Router, Request, Response, NextFunction} from 'express';
const Heroes = require('../data');

export class HeroRouter {
  router: Router

  // initialize the HeroRouter

  constructor() {
    this.router = Router();
    this.init();
  }

  // get all heroes
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes);
  }

  // take each handler and attach to one of the express.router endpoints
  init() {
    this.router.get('/', this.getAll);
  }

}

// create the HeroRouter and export its configured express.router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;
