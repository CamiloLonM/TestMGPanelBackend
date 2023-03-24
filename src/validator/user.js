import { check } from 'express-validator';
import emailExists from '../helpers/emailExists.js';
import isValidRole from '../helpers/validatorRole.js';
import validateResult from '../middlewares/validateFields.js';

const validateCreate = [
  check('name', 'Name is required ').exists().not().isEmpty(),
  check('email', 'Email is required').custom(emailExists).exists().isEmail(),
  check('password', 'Password is required and more Six characters').isLength({
    min: 6,
  }),
  check('role').custom(isValidRole),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export default validateCreate;
