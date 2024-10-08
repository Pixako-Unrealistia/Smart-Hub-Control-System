import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.route';
import { pool } from './db';  // Make sure you have your Postgres connection



const app = express();
const PORT = process.env.PORT || 3001;

// console.log(process.env.DATABASE_URL)

app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend URL
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Auth service is running on port ${PORT}`);
});
