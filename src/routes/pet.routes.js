import { Router } from 'express'
import {
  getPets,
  getPet,
  createPet,
  updatePet,
  deletePet
} from '../controllers/pet.controllers.js'

const router = Router()

router
  .get('/', getPets)
  .get('/:petId', getPet)
  .post('/', createPet)
  .patch('/:petId', updatePet)
  .delete('/:ownerId', deletePet)

export default router