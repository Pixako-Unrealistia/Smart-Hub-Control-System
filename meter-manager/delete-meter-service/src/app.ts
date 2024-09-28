import express from 'express';
import deleteMeterRoutes from '../src/routes/deleteMeterRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3003',
  credentials: true
}));

app.use(express.json());
app.use('/api', deleteMeterRoutes);

const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log(`Delete Meter Service running on port ${port}`);
});
