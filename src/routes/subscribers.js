import Router from 'express';
import subscriberPost from '../controllers/subscribers.js';
import validateSubscriber from '../validator/subscriber.js';

const router = Router();

router.post('/subscriber', validateSubscriber, subscriberPost);

export default router;
