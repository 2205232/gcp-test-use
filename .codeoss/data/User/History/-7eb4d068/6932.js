import {Storage} from '@google-cloud/storage';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Google Cloud Storage client
const storage = new Storage(); 
const bucketName = process.env.GCP_BUCKET_NAME;
const bucket = storage.bucket(bucketName);
console.log (bucket ,"configfile");
export default bucket;
