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
      console.log(`File uploaded to GCS: ${file.originalname}`);
  } catch (error) {
      console.error('Error uploading file to GCS:', error);
      throw error;
  }
};


const getFilesList = async () => {
  try {
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
} catch (error) {
  console.error('Error retrieving files list from GCS:', error);
  throw error;

}
const uploadUrlToGCS = async (url) => {

  try {
      
      const fileName = url{Date.now()}.txt; // Unique file name for the URL
      const file = bucket.file(__filename);

      await file.save(url, {

          metadata: {

              contentType: 'text/plain',

          },

      });

      console.log(URL uploaded to GCS as ${__filename});

  } catch (error) {

      console.error('Error uploading URL to GCS:', error);

      throw error;

  }

};

};

export default {
  uploadToGCS,
  getFilesList

};