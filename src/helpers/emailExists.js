import User from '../models/user.js';
import Subscriber from '../models/subscriber.js';

const emailExists = async (email = '') => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`Email ${email} is registered`);
  }
};

const emailSubscribers = async (email = '') => {
  const existEmail = await Subscriber.findOne({ email });
  if (existEmail) {
    throw new Error(`Email ${email} is registered`);
  }
};

export { emailExists, emailSubscribers };
