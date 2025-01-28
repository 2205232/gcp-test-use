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
      await Promise.all(req.files.map(async (file) => {
        return new Promise((resolve, reject) => {
            const blob = bucket.file(file.originalname);
            const blobStream = blob.createWriteStream({
                metadata: { contentType: file.mimetype },
            });

            blobStream.on('error', (err) => {
                console.error('Upload Error:', err);
                reject(err);
            });

            blobStream.on('finish', async () => {
                console.log(`${file.originalname} uploaded`);
                resolve();
            });

            blobStream.end(file.buffer);
        });
    }));

    res.status(200).json({
        message: 'Files uploaded successfully',
        files: uploadedFiles,
    });
    } catch (error) {
      console.error('Detailed Error:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }

    uploadedFiles.push({ name: files.originalname });
  }

  return uploadedFiles;
};

export default {
  uploadFilesToGCP,
};