import Role from '../models/role.js';
import User from '../models/user.js';

const isValidRole = async (role = '') => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`The role ${role}is not registered`);
  }
};

const existsUserId = async (id) => {
  const existsUser = await User.findById({ id });
  if (!existsUser) {
    throw new Error(`The id: ${id} does not exists`);
  }
};

export { isValidRole, existsUserId };
