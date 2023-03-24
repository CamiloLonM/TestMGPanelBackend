import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const validateJwt = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      msg: 'There is no token in the request',
    });
  }
  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const user = await User.findById(uid);
    if (!user) {
      return res.status(401).json({
        msg: 'User does not exist on DB',
      });
    }
    if (!user.status) {
      return res.status(401).json({ msg: 'User with false status' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      msg: 'Invalid token',
    });
  }
};

export default validateJwt;
