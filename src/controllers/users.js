import encryptPassword from '../helpers/encryptPassword.js';
import User from '../models/user.js';

const userGetId = async (req, res) => {
  const { id } = req.params;
  const userId = await User.findById(id).populate('user', 'name');
  res.json({
    userId,
  });
};

const userGet = async (req, res) => {
  const { limit = 5, since = 0 } = req.query;
  const query = { status: true };
  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(since)).limit(Number(limit)),
  ]);
  res.json({
    total,
    users,
  });
};

const userPost = async (req, res) => {
  const { name, email, password, rol } = req.body;
  const user = new User({ name, email, password, rol });
  const existsEmail = await User.findOne({ email });
  if (existsEmail) {
    return res.status(400).json({
      msg: `This Email ${email} is already registered`,
    });
  }
  user.password = encryptPassword(password);
  await user.save();
  res.status(201).json(user);
};

const userPut = async (req, res) => {
  const { id } = req.params;
  const { _id, email, ...rest } = req.body;
  const userDB = await User.findByIdAndUpdate(id, rest);
  res.json({
    userDB,
  });
};

const userDelete = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, { status: false });
  res.json(user);
};

export { userGet, userGetId, userPost, userPut, userDelete };
