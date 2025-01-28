import express from 'express';
import multer from 'multer';
import FileuploadController from '../controllers/FileuploadController.js';

const uploadRoutes = express.Router();

// Multer setup
const upload = multer({
  storage: multer.memoryStorage(),
});
console.log (array('files'));
// Routes
uploadRoutes.post('/upload-to-gcp', upload.array('files'), FileuploadController.uploadFiles);
uploadRoutes.post('/process-files', FileuploadController.processFiles);

export default uploadRoutes;