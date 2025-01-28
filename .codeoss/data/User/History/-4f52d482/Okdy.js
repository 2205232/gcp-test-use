import bucket from '../configs/gcsConfig.js';


/**
 * Upload files to Google Cloud Storage
 * @param {Array} files - Array of files from Multerdocker
 * @returns {Promise<Array>} - Array of uploaded file information
 */
const uploadFilesToGCP = async (files) => {
  const uploadedFiles = [];
  console.log("file received in services files");
   
  for (const file of files) {
    try {
      await bucket.upload(file.path, {
        destination: file.originalname,
        metadata: {
          contentType: file.mimetype,
        },
      });
      console.log('File uploaded successfully.');
    } catch (err) {
          console.error('Error during test upload:', err);
    }

    uploadedFiles.push({ name: file.originalname });
  }

  return uploadedFiles;
};

export default {
  uploadFilesToGCP,
};