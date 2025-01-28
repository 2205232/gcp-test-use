import {Storage} from '@google-cloud/storage';
const storage = new Storage();
const bucketName = 'uploadfiles-digisahayak-091220241130';

async function uploadTestFile() {
  try {
    await storage.bucket(bucketName).upload('./ima.txt', {
      destination: 'test-file.txt',
    });
    console.log('File uploaded successfully.');
      } catch (err) {
        console.error('Error during test upload:', err);
      }
}
    
uploadTestFile();