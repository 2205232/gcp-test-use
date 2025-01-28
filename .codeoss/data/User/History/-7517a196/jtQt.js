import gcpfileuploadService from '../services/gcpfileuploadService.js';

// Controller for uploading files to GCP
export const uploadFiles = async (req, res) => {
  console.log(req.files,"testfiles in controler ");
  try {
    if (req.files || req.files.length  0) {
      const uploadedFiles = await gcpfileuploadService.uploadFilesToGCP(req.files);
      res.json({ files: uploadedFiles });

    }else{
      return res.status(400).json({ message: 'No files uploaded.' });
      console.log("No file found");
    }
    
  } catch (error) {
    console.error('Error in uploadFiles controller:', error);
    res.status(500).send('Failed to upload files');
  }
};

// Controller for processing files
export const processFiles = (req, res) => {
  const fileNames = req.body.fileNames;
  const processedFiles = fileNames.map((name) => ({
    name,
    status: 'Processed',
  }));
  res.json({ files: processedFiles });
};

export default {
    uploadFiles,
    processFiles,
    
   // getFileList
    
  
  };