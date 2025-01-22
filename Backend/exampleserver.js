const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/proxy-api', async (req, res) => {
    try {
        const apiResponse = await axios.post('https://dgsahayak-dev.gcpwkshpdev.com/search/genie/search', req.body, {
            headers: {
                'modelid': 'text-embedding-005',
                'dimension': '768',
                'max_results': '2',
                'distance': 'COSINE',
                'Content-Type': 'application/json',
            },
        });
        res.json(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(error.response?.status || 500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});