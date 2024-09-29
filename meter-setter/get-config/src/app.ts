import express from 'express';
import getConfigRoute from './routes/getConfigRoute';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', getConfigRoute);

const port = process.env.PORT || 3015;
app.listen(port, () => {
  console.log(`Get Config Service running on port ${port}`);
});
