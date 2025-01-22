import {Storage} from '@google-cloud/storage';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

//const credentials = JSON.parse(process.env.GCP_CREDENTIALS);

// Initialize Google Cloud Storage
const bucketName = process.env.GCP_BUCKET_NAME;
if(!bucketName){
    thro new error('Bucket name is not in env file');
}
const storage = new Storage();
const bucket = storage.bucket(bucketName);



export default bucket;