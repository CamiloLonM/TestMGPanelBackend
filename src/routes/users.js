import Router from 'express';

const router = Router();

import {
  userGet,
  userGetId,
  userPost,
  userPut,
  userDelete,
} from '../controllers/users.js';

router.get('/', userGet);
router.get('/id', userGetId);
router.post('/', userPost);
router.put('/id', userPut);
router.delete('/id', userDelete);

export default router;
