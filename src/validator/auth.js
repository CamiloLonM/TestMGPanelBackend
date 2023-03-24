import validateResult from '../middlewares/validateFields.js';
import { password, email } from '../validator/fields.js';

const validateBodyLogin = [
  password,
  email,
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateBodyLogin };
