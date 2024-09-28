import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import meterRoutes from './routes/meterRoutes';

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',  // Allow only your frontend
    credentials: true  // Enable credentials (e.g., cookies, authorization headers)
  }));
app.use(express.json());  // For parsing application/json

// Use meter routes
app.use('/api', meterRoutes);
const port = process.env.PORT || 3003;  // You can set this in your .env
app.listen(port, () => {
  console.log(`Meter Manager service running on port ${port}`);
});
