import { check } from 'express-validator';

export const email = check('email', 'Email is required').exists().isEmail();

export const password = check(
  'password',
  'Password is required and more Six characters'
).isLength({ min: 6, max: 50 });

export const name = check('name', 'Name is required ')
  .exists()
  .isLength({ min: 5, max: 100 })
  .not()
  .isEmpty();

export const id = check('id', 'not a MongoId').isMongoId();
