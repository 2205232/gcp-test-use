import {Storage} from '@google-cloud/storage';
const storage = new Storage();
const bucketName = 'uploadfiles-digisahayak-091220241130';
const bucket=storage.bucket(bucketName);

async function uploadTestFile() {
  try {
    await bucket.upload('./image.png', {
      destination: 'image.png',
    });
    console.log('File uploaded successfully.');
      } catch (err) {
        console.error('Error during test upload:', err);
      }
}
    
uploadTestFile();