import express from 'express';
import deleteConfigRoute from './routes/deleteConfigRoute';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', deleteConfigRoute);

const port = process.env.PORT || 3014;
app.listen(port, () => {
  console.log(`Delete Config Service running on port ${port}`);
});
