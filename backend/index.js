import express from 'express';
import mongoose from 'mongoose';
import User from './userModel.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully.');
    app.listen(port, () => {
      console.log(`Server is running at Port ${port}`);
    });
    app.get('/', (req, res) => {
      res.send('Hello from the server');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  async function insert() {
    const userExists = await User.findOne({ email: 'vineethkumar.nature@gmail.com' });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash('1234567890', 10);
      await User.create({
        name: 'Vineeth',
        email: 'vineethkumar.nature@gmail.com',
        password: hashedPassword
      });
      console.log('User inserted');
    } else {
      console.log('User already exists');
    }
  }

  insert();

  app.get('/', (req, res) => {
    res.send('Hello from the server');
  });