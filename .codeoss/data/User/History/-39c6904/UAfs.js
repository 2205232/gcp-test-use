import express from 'express';
import axios from 'axios';
const apiRoutes = express.Router();

apiRoutes.post('/', async (req, res) => {
    console.log('Request received at /api'); // Debug log
    console.log('Request body:', req.body); // Debug log

    try {
        const response = await axios.post(apiUrl, requestBody, {
            headers: {
                'modelid': 'text-embedding-005',
                'dimension': '768',
                'max_results': '2',
                'distance': 'COSINE',
                'Content-Type': 'application/json'
            }
        });

        // Send back the API response
        res.json(apiResponse.data);
    } catch (error) {
        console.error('Error in API call:', error.message);
        res.status(error.response?.status || 500).send(error.message);
    }
});
export default apiRoutes;

