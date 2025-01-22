import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();
let enviroment = process.env.NODE_ENV;
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(` server is running on ${port}`,"test");
});


