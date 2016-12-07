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

  // get one hero by id
  public getOne(req: Request, res: Response, next: NextFunction) {
    let query = parseInt(req.params.id);
    let hero = Heroes.find(hero => hero.id === query);
    if (hero) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          hero
        });
    } else {
      res.status(404)
        .send({
          message: 'No hero found with the given id.',
          status: res.status
        });
    }
  }

  // take each handler and attach to one of the express.router endpoints
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
  }

}

// create the HeroRouter and export its configured express.router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;
