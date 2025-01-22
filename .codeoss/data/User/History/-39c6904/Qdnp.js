import express from 'express';
const apiRoutes = express.Router();

router.post('/', async (req, res) => {
    try {
        const apiResponse = await axios.post(
            'https://dgsahayak-dev.gcpwkshpdev.com/search/genie/search',
            req.body,
            {
                headers: {
                    modelid: 'text-embedding-005',
                    dimension: '768',
                    max_results: '2',
                    distance: 'COSINE',
                    'Content-Type': 'application/json',
                },
            }
        );

        // Send back the API response
        res.json(apiResponse.data);
    } catch (error) {
        console.error('Error in API call:', error.message);
        res.status(error.response?.status || 500).send(error.message);
    }
});
export default apiRoutes;

const express = require('express');
const axios = require('axios');
const router = express.Router();



module.exports = router;