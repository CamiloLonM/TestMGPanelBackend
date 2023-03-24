import encryptPassword from '../helpers/encryptPassword.js';
import Subscriber from '../models/suscriber.js';

const getById = async (req, res) => {
  const { id } = req.params;
  const subscriberId = await Subscriber.findById(id);
  res.json({
    subscriberId,
  });
};

const get = async (req, res) => {
  const { limit = 5, since = 0 } = req.query;
  const query = { status: true };
  const [total, subscriber] = await Promise.all([
    Subscriber.countDocuments(query),
    Subscriber.find(query).skip(Number(since)).limit(Number(limit)),
  ]);
  res.json({
    total,
    subscriber,
  });
};

const create = async (req, res) => {
  const { name, email, password, role } = req.body;
  const subscriber = new Subscriber({ name, email, password, role });
  subscriber.password = encryptPassword(password);
  await subscriber.save();
  res.status(201).json(subscriber);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { _id, password, email, ...rest } = req.body;
  rest.password = encryptPassword(password);
  const subscriberDb = await Subscriber.findByIdAndUpdate(id, rest);
  res.json({
    subscriberDb,
  });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const subscriber = await Subscriber.findByIdAndDelete({ _id: id });
  return res.json(subscriber);
};

const changeStatus = async (req, res) => {
  const { id } = req.params;
  const subscriber = await Subscriber.findById({ _id: id });
  if (!subscriber) {
    return res.status(400).json({ msg: 'Subscriber does not exist' });
  }
  const subscriberModify = await Subscriber.findByIdAndUpdate(
    { _id: id },
    { status: !user.status },
    { new: true }
  );
  return res.status(200).json(subscriberModify);
};

export { getById, get, create, update, deleteById, changeStatus };
