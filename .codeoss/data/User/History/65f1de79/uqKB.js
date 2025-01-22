import bucket from '../configs/gcsConfig.js';


// Function to upload file to GCS
const uploadToGCS = async (file) => {
  try {
      await bucket.upload(file.path, {
          destination: file.originalname,
          metadata: {
              contentType: file.mimetype,
          },
      });
      console.log(File uploaded to GCS:` ${file.originalname}`);
  } catch (error) {
      console.error('Error uploading file to GCS:', error);

      throw error;

  }

};


const getFilesList = async () => {
  const [files] = await bucket.getFiles();

  const fileList = await Promise.all(
    files.map(async (file) => {
      const [metadata] = await file.getMetadata();
      return {
        name: file.name,
        size: metadata.size,
        type: metadata.contentType,
        url: `https://storage.googleapis.com/${bucket.name}/${file.name}`,
      };
    })
  );

  return fileList;
};

export default {
  uploadToGCS,
  getFilesList

};