import Router from 'express';
import { signIn } from '../controllers/auth.js';
import validateLogin from '../validator/auth.js';

const router = Router();

router.post('/login', validateLogin, signIn);

export default router;
