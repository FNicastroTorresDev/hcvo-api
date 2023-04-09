import { Router } from "express";
import {
  getAllMedicalData,
  getOneMedicalData,
  createMedicalData,
  updateMedicalData,
  deleteMedicalData
} from '../controllers/petMedicalData.controllers.js'

const router = Router()

router
  .get('/', getAllMedicalData)
  .get('/:medDataId', getOneMedicalData)
  .post('/', createMedicalData)
  .patch('/:medDataId', updateMedicalData)
  .delete('/:medDataId', deleteMedicalData)

export default router