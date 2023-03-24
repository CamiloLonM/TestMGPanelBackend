import { Schema, model } from 'mongoose';

const SubscriberSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    require: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Password is required'],
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
