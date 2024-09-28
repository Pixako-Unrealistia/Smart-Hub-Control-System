import express from 'express';
import dotenv from 'dotenv';
import updateHubRoutes from './routes/updateHubRoutes';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api', updateHubRoutes);

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Update Hub Service running on port ${port}`);
});
