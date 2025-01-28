import express from 'express';
import cors from 'cors';
import cookieParse from 'cookie-parser';
import uploadRoutes from './src/routes/fileUploadRoutes.js';
import apiRoutes from './src/routes/apiRoutes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ['https://frontend-966109477011.us-central1.run.app','*'], // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'modelid', 'dimension', 'max_results', 'distance'],
}));
app.use(cookieParse());


app.use('/api', uploadRoutes);
app.use('/',(apiRoutes));




export default app;
