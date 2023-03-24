const isAdmi = (req, res, next) => {
  const { role, name } = req.subscriber;
  if (!req.subscriber) {
    return res.status(500).json({ msg: 'Check role' });
  }
  if (role !== 'ADMI') {
    return res.status(401).json({
      msg: `${name} not Administrator`,
    });
  }
  next();
};

export default isAdmi;
