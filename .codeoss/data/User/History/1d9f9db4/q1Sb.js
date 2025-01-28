const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const bucketName = 'your-bucket-name';

async function uploadTestFile() {
  try {
    await storage.bucket(bucketName).upload('./test-file.txt', {
      destination: 'test-file.txt',
    })
    console.log('File uploaded successfully.');
      } catch (err) {
        console.error('Error during test upload:', err);
      }
}
    
uploadTestFile();