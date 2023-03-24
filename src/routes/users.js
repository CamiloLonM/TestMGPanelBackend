import Router from 'express';
import { isAdmi, validateJwt } from '../middlewares/index.js';
import {
  validateModify,
  validateCreate,
  validateDelete,
} from '../validator/user.js';
import {
  userGet,
  userGetId,
  userPost,
  userPut,
  userDelete,
} from '../controllers/users.js';

const router = Router();

router.get('/', validateJwt, isAdmi, userGet);
router.get('/:id', validateJwt, isAdmi, userGetId);
router.post('/', validateJwt, isAdmi, validateCreate, userPost);
router.put(
  '/:id',
  validateJwt,
  isAdmi,
  validateModify,
  validateCreate,
  userPut
);
router.delete('/:id', validateJwt, isAdmi, validateDelete, userDelete);

export default router;
