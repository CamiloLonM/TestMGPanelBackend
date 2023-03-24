import Router from 'express';

import { validateId } from '../validator/common.js';
import { validatePrivateBodySubscriber } from '../validator/subscriber.js';
import {
  get,
  create,
  deleteById,
  getById,
  update,
  changeStatus,
} from '../controllers/subscribers.js';
import validateJwt from '../middlewares/validateJwt.js';
import isAdmi from '../middlewares/validateRole.js';

isAdmi;

const router = Router();
router.get('/', get);
router.post('/', validatePrivateBodySubscriber, create);
router.get('/:id', validateId, getById);
router.patch('/:id', validateId, changeStatus);
router.put('/:id', validateId, validatePrivateBodySubscriber, update);
router.delete('/:id', validateId, deleteById);

export default router;
