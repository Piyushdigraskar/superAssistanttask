import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Mongo is also connected');
}).catch((err)=>{
    console.log(err);
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`The server is connected on ${port}`);
})