import Router from 'express';

import { create } from '../controllers/subscribers.js';
import { signIn } from '../controllers/auth.js';
import { validateBodyLogin } from '../validator/auth.js';
import { validatePublicSubscriber } from '../validator/subscriber.js';

const router = Router();

router.post('/login', validateBodyLogin, signIn);

router.post('/public', validatePublicSubscriber, create);

export default router;
