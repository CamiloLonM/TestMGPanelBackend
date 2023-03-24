import { check } from 'express-validator';
import validateResult from '../helpers/validateFields.js';

const validateCreate = [
  check('name', 'Name is required ').exists().not().isEmpty(),
  check('email', 'Email is required').exists().isEmail(),
  check('password', 'Password is required and more Six characters').isLength({
    min: 6,
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export default validateCreate;
