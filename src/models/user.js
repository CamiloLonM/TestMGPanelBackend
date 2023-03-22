import { Schema, model } from 'mongoose';

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    require: [true, 'Email is required'],
  },
  password: {
    type: String,
    require: [true, 'Password is required'],
  },
  rol: {
    type: String,
    require: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  Status: {
    type: Boolean,
    default: true,
  },
});

export default model('User', UserSchema);
