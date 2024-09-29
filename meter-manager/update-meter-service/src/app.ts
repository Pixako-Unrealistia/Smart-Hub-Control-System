import express from 'express';
import updateMeterRoutes from './routes/updateMeterRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3005',
  credentials: true
}));

app.use(express.json());
app.use('/api', updateMeterRoutes);

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`Update Meter Service running on port ${port}`);
});
