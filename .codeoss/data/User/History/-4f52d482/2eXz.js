import bucket from '../configs/gcsConfig.js';
const storage = new Storage(); 
const bucketName = process.env.GCP_BUCKET_NAME;
const bucket = storage.bucket(bucketName);

/**
 * Upload files to Google Cloud Storage
 * @param {Array} files - Array of files from Multerdocker
 * @returns {Promise<Array>} - Array of uploaded file information
 */
const uploadFilesToGCP = async (files) => {
  const uploadedFiles = [];
  console.log("file received in services,files);
  for (const file of files) {
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream({
      metadata: {
          contentType: file.mimetype,
      },
    });

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