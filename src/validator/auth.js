import { check } from 'express-validator';
import validateResult from '../middlewares/validateFields.js';

const validateLogin = [
  check('email', 'Email is required').isEmail(),
  check('password', 'Password is required').not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export default validateLogin;
