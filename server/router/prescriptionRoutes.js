import express from 'express';
import prescriptionController from '../controller/prescriptionController.js';

const router = express.Router();

router.post('/', prescriptionController.createPrescription);

router.post('/send', prescriptionController.sendPrescription);

export default router;
