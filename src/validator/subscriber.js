import { check } from 'express-validator';
import { emailSubscribers } from '../helpers/emailExists.js';
import { validateResult } from '../middlewares/index.js';

const validateSubscriber = [
  check('name', 'Name is required ').exists().not().isEmpty(),
  check('email', 'Email is required')
    .custom(emailSubscribers)
    .exists()
    .isEmail(),
  check('password', 'Password is required and more Six characters').isLength({
    min: 6,
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
export default validateSubscriber;
