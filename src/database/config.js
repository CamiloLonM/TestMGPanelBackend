import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log('Online Database ');
  } catch (error) {
    throw new Error('Error initializing database');
  }
};

export default dbConnection;
