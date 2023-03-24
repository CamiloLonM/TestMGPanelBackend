import { check } from 'express-validator';
import { emailExists } from '../helpers/emailExists.js';
import { existsUserId, isValidRole } from '../helpers/db-validator.js';
import { validateResult } from '../middlewares/index.js';

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

const validateModify = [
  check('id', 'not a MongoId').isMongoId(),
  //check('id').custom(existsUserId),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateDelete = [
  check('id', 'not a MongoId').isMongoId(),
  //check('id').custom(existsUserId),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
export { validateCreate, validateModify, validateDelete };
