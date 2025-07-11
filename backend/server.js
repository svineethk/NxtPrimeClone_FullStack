import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(express.json())

const startServer = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("MongoDB Connected Successfully");

        const PORT = process.env.PORT || 5000
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }catch(error){
        console.error(`MongoDB Connection Failed: ${error.message}`);
        process.exit(1);
    }
}

startServer()