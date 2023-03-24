import bcrypt from 'bcrypt';
import User from '../models/user.js';
import generateJwt from '../helpers/jwt.js';

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'Incorrect email',
      });
    }
    if (!user.status) {
      return res.status(400).json({
        msg: 'Inactive user',
      });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ msg: 'Incorrect password' });
    }
    const token = await generateJwt(user.id);
    res.json({
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Contact administrator' });
  }
};

const signUp = () => {};

export { signUp, signIn };
