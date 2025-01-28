import axios from 'axios';

// Function to call the external API
async function callApi() {
    const apiUrl = 'https://dgsahayak-dev.gcpwkshpdev.com/search/genie/search';
    const requestBody = {
        query: "what is ondc" // Replace with your query
    };

    try {
        console.log('Sending request to API...');
        
        const response = await axios.post(apiUrl, requestBody, {
            headers: {
                'modelid': 'text-embedding-005',
                'dimension': '768',
                'max_results': '2',
                'distance': 'COSINE',
                'Content-Type': 'application/json'
            }
        });

        console.log('API Response:', response.data);
    } catch (error) {
        console.error('Error calling API:', error.response?.data || error.message);
    }
}

// Call the API function
callApi();