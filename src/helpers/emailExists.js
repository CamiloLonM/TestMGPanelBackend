import Subscriber from '../models/suscriber.js';

const emailExists = async (email = '') => {
  const existEmail = await Subscriber.findOne({ email });
  if (existEmail) {
    throw new Error(`Email ${email} is registered`);
  }
};

export default emailExists;
