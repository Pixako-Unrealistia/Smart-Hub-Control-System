import express from 'express';
import getMeterRoutes from './routes/getMeterRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3004',
  credentials: true
}));

app.use(express.json());
app.use('/api', getMeterRoutes);

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Get Meter Service running on port ${port}`);
});
