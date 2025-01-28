import {Storage} from '@google-cloud/storage';

// Initialize Google Cloud Storage client
const storage = new Storage(); 
const bucketName = "uploadfiles-digisahayak-091220241130;"
console.log(bucketName);
if (bucketName){
    const bucket = storage.bucket(bucketName);
}


export default bucket;
