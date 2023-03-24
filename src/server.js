import express from 'express';
import cors from 'cors';
import dbConnection from './database/config.js';
import routeSubscriber from './routes/private.js';
import routePublic from './routes/public.js';
import isAdmi from './middlewares/validateRole.js';
import validateJwt from './middlewares/validateJwt.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectDB();
    this.middlewares();
    this.routes();
  }
  getApp() {
    return this.app;
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('src/public'));
  }

  routes() {
    this.app.use('/public', routePublic);
    this.app.use(validateJwt, isAdmi);
    this.app.use('/subscribers', routeSubscriber);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port:`, this.port);
    });
  }
}

export default Server;
