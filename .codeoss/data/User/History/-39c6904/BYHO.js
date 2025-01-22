import express from 'express';
import axios from 'axios';
const apiRoutes = express.Router();

apiRoutes.post('/', async (req, res) => {
    console.log("hi");
    try {
        console.log( req.body);
        const apiResponse = await axios.post(
            'https://dgsahayak-dev.gcpwkshpdev.com/search/genie/search',
            req.body,
            {
                
            }
        );
        console.log(res);
        // Send back the API response
        res.json(apiResponse.data);
    } catch (error) {
        console.error('Error in API call:', error.message);
        res.status(error.response?.status || 500).send(error.message);
    }
});
export default apiRoutes;

