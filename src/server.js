import express from 'express';
import cors from 'cors';
import dbConnection from './database/config.js';
import routeUser from './routes/users.js';
import routeAuth from './routes/auth.js';
import routeSubscriber from './routes/subscribers.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectDB();
    this.middlewares();
    this.routes();
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
    this.app.use('/auth', routeAuth);
    this.app.use('/users', routeUser);
    this.app.use('/users', routeSubscriber);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port:`, this.port);
    });
  }
}

export default Server;
