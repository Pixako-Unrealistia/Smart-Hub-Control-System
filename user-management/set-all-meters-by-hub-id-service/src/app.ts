import express from 'express';
import setAllMetersByHubIdRoutes from './routes/setAllMetersByHubIdRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', setAllMetersByHubIdRoutes);

const port = process.env.PORT || 3011;
app.listen(port, () => {
  console.log(`Set All Meter By Hub ID service running on port ${port}`);
});
