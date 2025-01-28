import {Storage} from '@google-cloud/storage';

// Initialize Google Cloud Storage client
const storage = new Storage(); 
const bucket = process.env.GCP_BUCKET_NAME;
console.log(bucket);
//const bucket = storage.bucket(bucketName);

export default bucket;
