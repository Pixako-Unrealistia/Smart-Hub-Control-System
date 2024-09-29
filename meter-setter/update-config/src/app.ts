import express from 'express';
import updateConfigRoute from './routes/updateConfigRoute';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', updateConfigRoute);

const port = process.env.PORT || 3016;
app.listen(port, () => {
  console.log(`Update Config Service running on port ${port}`);
});
