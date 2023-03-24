import { Schema, model } from 'mongoose';

export const ROLES = ['ADMIN', 'SUBSCRIPTED'];

const SubscriberSchema = Schema({
  name: {
    type: String,
    min: [5],
    max: [100],
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    require: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    min: [6],
    max: [50],
    require: [true, 'Password is required'],
  },
  role: {
    type: String,
    require: true,
    enum: ROLES,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

SubscriberSchema.methods.toJSON = function () {
  const { __v, password, _id, ...subscriber } = this.toObject();
  subscriber.uid = _id;
  return subscriber;
};

export default model('Subscriber', SubscriberSchema);
