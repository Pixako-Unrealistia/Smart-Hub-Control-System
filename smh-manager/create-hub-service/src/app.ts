import express from 'express';
import dotenv from 'dotenv';
import createHubRoutes from './routes/createHubRoutes';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', createHubRoutes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Create Hub Service running on port ${port}`);
});
