import express from 'express';
import dbConnection from './database/config.js';

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
    this.app.use(express.json());
    this.app.use(express.static('src/public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.send('hola soy camilo ');
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port:`, this.port);
    });
  }
}

export default Server;
