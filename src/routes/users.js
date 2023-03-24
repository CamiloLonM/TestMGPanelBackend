import Router from 'express';
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

router.get('/', userGet);
router.get('/:id', userGetId);
router.post('/', validateCreate, userPost);
router.put('/:id', validateModify, validateCreate, userPut);
router.delete('/:id', validateDelete, userDelete);

export default router;
