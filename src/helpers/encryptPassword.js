import bcrypt from 'bcrypt';

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export default encryptPassword;
