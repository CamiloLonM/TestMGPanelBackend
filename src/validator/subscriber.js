import { validateResult } from '../middlewares/index.js';
import { ROLES } from '../models/suscriber.js';
import { name, email, password } from '../validator/fields.js';

const validatePublicSubscriber = [
  name,
  email,
  (req, res, next) => {
    req.body.role = ROLES[1];
    validateResult(req, res, next);
  },
];

const validatePrivateBodySubscriber = [
  name,
  password,
  email,
  (req, res, next) => {
    req.body.role = ROLES[0];
    validateResult(req, res, next);
  },
];
export { validatePublicSubscriber, validatePrivateBodySubscriber };
