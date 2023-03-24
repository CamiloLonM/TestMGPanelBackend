import { validateResult } from '../middlewares/index.js';
import { id } from './fields.js';

const validateId = [
  id,
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
export { validateId };
