import express from 'express';
import setMeterByIdRoutes from './routes/setMeterByIdRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', setMeterByIdRoutes);

const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`Set Meter By ID service running on port ${port}`);
});
