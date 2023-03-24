import User from '../models/user.js';

const emailExists = async (email = '') => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`Email ${email} is registered`);
  }
};

export default emailExists;
