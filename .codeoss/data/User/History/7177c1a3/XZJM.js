import dotenv from 'dotenv';
//import app from './app.js';
dotenv.config();
let enviroment = process.env.NODE_ENV;

const apiRoutes = express.Router();
apiRoutes.post('/', async (req, res) => {
  console.log('Request received at /api'); // Debug log
  console.log('Request body from frontend:', req.body); // Debug log
  
  const apiUrl = 'https://dgsahayak-dev.gcpwkshpdev.com/search/genie/search';
  console.log(req.body);
  try {
      const apiResponse = await axios.post(apiUrl, req.body,
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
      console.log('Response from external API:', apiResponse.data); // Debug log
      res.json(apiResponse.data);
  } catch (error) {
      console.error('Error in API call:', error.message);
      res.status(error.response?.status || 500).send(error.message);
  }
});
const port = process.env.PORT || 5000 ;
app.listen(port, '0.0.0.0', () => {
    console.log(` server is running on ${port}`,"hii");
});


