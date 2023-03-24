const isAdmi = (req, res, next) => {
  const { role, name } = req.user;
  if (!req.user) {
    return res.status(500).json({ msg: 'Check role' });
  }
  if (role !== 'ADMIN_ROLE') {
    return res.status(401).json({
      msg: `${name} not Administrator`,
    });
  }
  next();
};

export default isAdmi;
