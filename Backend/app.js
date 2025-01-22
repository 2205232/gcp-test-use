import express from 'express';
import cors from 'cors';
import cookieParse from 'cookie-parser';

//import uploadRoutes from './src/routes/fileUploadRoutes.js';
import apiRoutes from './src/routes/apiRoutes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: 'https://4000-cs-7914574848-default.cs-asia-southeast1-seal.cloudshell.dev/', // Replace with your Angular app's origin
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
      }
));
app.use(cookieParse());


//app.use('/api', uploadRoutes);
app.use('/api', apiRoutes);




export default app;
