import express from 'express';
import hubRoutes from './routes/hubRoutes';
import cors from 'cors';  // Import cors middleware

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from your frontend (localhost:3000)
  credentials: true                 // Allow credentials (cookies, etc.)
}));

app.use(express.json());

app.use('/api', hubRoutes);  // Register your routes

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
