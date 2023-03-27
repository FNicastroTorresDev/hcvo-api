import { Router } from 'express'
// import { getUsers, createUsers } from '../controllers/users.controllers.js'
import { 
  getUsers, 
  createUsers, 
  updateUsers, 
  deleteUsers,
  getOneUser
 } from '../controllers/users.controllers.js'

export const router = Router()

router
  .get('/', getUsers)
  .get('/:userId', getOneUser)
  .post('/', createUsers)
  .patch('/:userId', updateUsers)
  .delete('/:userId', deleteUsers)

export default router
