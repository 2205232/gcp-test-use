import bucket from '../configs/gcsConfig.js';
import {Storage} from '@google-cloud/storage';
const storage = new Storage(); 
const bucketName ='uploadfiles-digisahayak-091220241130';
const bucket = storage.bucket(bucketName);
PROJECT_ID='digisahayak-091220241130';
/**
 * Upload files to Google Cloud Storage
 * @param {Array} files - Array of files from Multer
 * @returns {Promise<Array>} - Array of uploaded file information
 */
const uploadFilesToGCP = async (files) => {
  const uploadedFiles = [];
  
  for (const file of files) {
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream();

    // Handle errors and upload events
    await new Promise((resolve, reject) => {
      blobStream.on('error', (err) => {
        console.error(`Error uploading ${file.originalname}:, err`);
        reject(err);
      });

      blobStream.on('finish', () => {
        console.log(`${file.originalname} uploaded`);
        resolve();
      });

      blobStream.end(file.buffer);
    });

    uploadedFiles.push({ name: file.originalname });
  }

  return uploadedFiles;
};

export default {
  uploadFilesToGCP,
};