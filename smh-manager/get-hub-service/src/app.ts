import express from 'express';
import dotenv from 'dotenv';
import getHubRoutes from './routes/getHubRoutes';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', getHubRoutes);

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Get Hub Service running on port ${port}`);
});
