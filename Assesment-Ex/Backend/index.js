import express  from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authorRouter from './routes/author.js';
import bookRouter from './routes/book.js';


dotenv.config();

await connectDB();

const PORT = process.env.PORT || 5000;

const app = new express();


if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}
app.use(express.json());

app.use('/api/author', authorRouter);
app.use('/api/book', bookRouter);

app.get('/',(req, res) => {
    res.send("API is running...");
})


app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
