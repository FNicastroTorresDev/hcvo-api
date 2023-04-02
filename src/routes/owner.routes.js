import { Router } from 'express'
import { 
  getOwners, 
  getOneOwner, 
  createOwner, 
  updateOwner, 
  deleteOwner 
} from '../controllers/owner.controllers.js'

const router = Router()
  
router
  .get('/', getOwners)
  .get('/:ownerId', getOneOwner)
  .post('/', createOwner)
  .patch('/:ownerId', updateOwner)
  .delete('/:ownerId', deleteOwner)

export default router