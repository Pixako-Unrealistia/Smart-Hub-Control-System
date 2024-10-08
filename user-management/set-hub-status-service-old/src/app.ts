import express from 'express';
import cors from 'cors';
import setHubStatusRoutes from './routes/setHubStatusRoutes';


const app = express();

app.use(cors());
app.use(express.json()); // For parsing JSON bodies

app.use('/api', setHubStatusRoutes); // Register the route for setting hub status

const port = process.env.PORT || 3012; // Use a dedicated port for this service
app.listen(port, () => {
    console.log(`Set Hub Status service running on port ${port}`);
});
