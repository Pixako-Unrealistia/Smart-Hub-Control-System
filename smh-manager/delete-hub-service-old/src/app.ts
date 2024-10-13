import express from 'express';
import dotenv from 'dotenv';
import deleteHubRoutes from './routes/deleteHubRoutes';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', deleteHubRoutes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Delete Hub Service running on port ${port}`);
});
