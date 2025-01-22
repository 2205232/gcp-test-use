import uploadService from '../services/uploadService.js';
import downloadUtil from '../utils/downloadUtil.js';
import fs from 'fs';

// Handle file upload request
const uploadFiles = async (req, res) => {
  try {
    const files = req.files;
    for (const file of files) {
      await uploadService.uploadToGCS(file);
      fs.unlinkSync(file.path); // Cleanup temp file
    }
    res.status(200).send('Files uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('File upload failed');
  }
};

// Handle URL upload request
// const uploadFromUrl = async (req, res) => {
//   const { url } = req.body;
  
//   try {
//     const tempFilePath = await downloadUtil.downloadFileFromUrl(url);
//     await uploadService.uploadToGCS({
//       path: tempFilePath,
//       originalname: require('path').basename(url)
//     });
//     fs.unlinkSync(tempFilePath); 
//     res.status(200).send('File from URL uploaded successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Failed to upload file from URL');
//   }
// };
const uploadFromUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) {
      return res.status(400).send('URL is required');
  }
  try {
      await uploadService.uploadUrlToGCS(url);
      res.status(200).send('URL uploaded successfully');
  } catch (error) {
      console.error('Error uploading URL:', error);
      res.status(500).send('Failed to upload URL');
  }

};

 const getFileList = async (req, res) => {
  try {
    const fileList = await uploadService.getFilesList();
    res.status(200).send(fileList);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving file list');
  }
};



export default {
  uploadFiles,
  uploadFromUrl,
  getFileList
  

};