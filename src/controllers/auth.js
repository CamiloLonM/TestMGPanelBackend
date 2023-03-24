import bcrypt from 'bcrypt';
import Subscribers from '../models/suscriber.js';
import generateJwt from '../helpers/jwt.js';

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const subscriber = await Subscribers.findOne({ email, status: true });
    if (!subscriber) {
      return res.status(400).json({
        msg: 'Email or password incorrect',
      });
    }
    const validPassword = bcrypt.compareSync(password, subscriber.password);
    if (!validPassword) {
      return res.status(400).json({ msg: 'Email or password incorrect' });
    }
    const token = await generateJwt(subscriber.id);
    return res.json({
      subscriber,
      token,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Contact administrator' });
  }
};

export { signIn };
