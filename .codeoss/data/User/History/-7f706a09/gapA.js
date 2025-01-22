import {Storage} from '@google-cloud/storage';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

//const credentials = JSON.parse(process.env.GCP_CREDENTIALS);

// Initialize Google Cloud Storage

const storage = new Storage();
const bucketName = process.env.GCP_BUCKET_NAME;
if(!bucketName){
    throw new error('Bucket name is not in env file');
}
const bucket = storage.bucket(bucketName);



export default bucket;

const storage = new Storage();

const bucketName = 'your-bucket-name'; // Replace with your bucket name

const bucket = storage.bucket(bucketName);