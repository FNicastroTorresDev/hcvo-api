import { Router } from 'express'
import { getOwner, getOneOwner, createOwner, updateOneOwner, deleteOneOwner } from '../controllers/owner.controllers.js'

const router = Router()
  
router
  .get('/', getOwner)
  .get('/:ownerId', getOneOwner)
  .post('/', createOwner)
  .patch('/:ownerId', updateOneOwner)
  .delete('/:ownerId', deleteOneOwner)

export default router