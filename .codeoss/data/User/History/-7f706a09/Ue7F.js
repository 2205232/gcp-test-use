import {Storage} from '@google-cloud/storage';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const credentials = JSON.parse(process.env.GCP_CREDENTIALS);

// Initialize Google Cloud Storage
const storage = new Storage({ credentials });
const bucketName = process.env.GCP_BUCKET_NAME;
const bucket = storage.bucket(bucketName);



export default bucket;