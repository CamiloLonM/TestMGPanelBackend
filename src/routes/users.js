import Router from 'express';
import validateCreate from '../validator/user.js';
import {
  userGet,
  userGetId,
  userPost,
  userPut,
  userDelete,
} from '../controllers/users.js';

const router = Router();

router.get('/', userGet);
router.get('/id', userGetId);
router.post('/', validateCreate, userPost);
router.put('/id', userPut);
router.delete('/id', userDelete);

export default router;
