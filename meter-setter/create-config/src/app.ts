import express from 'express';
import createConfigRoute from './routes/createConfigRoute';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', createConfigRoute);

const port = process.env.PORT || 3013;
app.listen(port, () => {
  console.log(`Create Config Service running on port ${port}`);
});
