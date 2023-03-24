import encryptPassword from '../helpers/encryptPassword.js';
import Subscriber from '../models/subscriber.js';

const subscriberPost = async (req, res) => {
  const { name, email, password } = req.body;
  const subscriber = new Subscriber({ name, email, password });
  subscriber.password = encryptPassword(password);
  await subscriber.save();
  res.status(201).json(subscriber);
};

export default subscriberPost;
