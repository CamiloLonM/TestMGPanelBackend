import jwt from 'jsonwebtoken';
import Subscriber from '../models/suscriber.js';

const validateJwt = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      msg: 'There is no token in the request',
    });
  }
  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const subscriber = await Subscriber.findById(uid);
    if (!subscriber) {
      return res.status(401).json({
        msg: 'Subscriber does not exist on DB',
      });
    }
    if (!subscriber.status) {
      return res.status(401).json({ msg: 'Subscriber with false status' });
    }
    req.subscriber = subscriber;
    next();
  } catch (error) {
    res.status(401).json({
      msg: 'Invalid token',
    });
  }
};

export default validateJwt;
