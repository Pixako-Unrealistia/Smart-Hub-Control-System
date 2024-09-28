import express from 'express';
import createMeterRoutes from './routes/createMeterRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', createMeterRoutes);

const port = process.env.PORT || 3006;
app.listen(port, () => {
  console.log(`Create Meter Service running on port ${port}`);
});
