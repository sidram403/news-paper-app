import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import listingRouter from './routes/listing.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to DB')
}).catch((err) =>{
    console.log(err);
})

const app= express()

app.use(cors())

app.use(express.json());


app.use(cookieParser());

app.use('/server/auth', authRouter)
app.use('/server/user', userRouter)
app.use('/server/listing', listingRouter)

app.listen(3000, () =>{
    console.log('Server is running on port 3000!');
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });