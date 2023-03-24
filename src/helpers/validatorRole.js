import Role from '../models/role.js';

const isValidRole = async (role = '') => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`The role ${role}is not registered`);
  }
};

export default isValidRole;
