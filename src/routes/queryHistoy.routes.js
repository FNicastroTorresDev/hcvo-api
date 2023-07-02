import { Router } from "express";
import { 
  createQuery, 
  deleteQuery, 
  getQueries, 
  getQuery, 
  updateQuery 
} from "../controllers/queryHistory.controllers.js";


const router = Router()

router
  .get('/', getQueries)
  .get('/:queryId', getQuery)
  .post('/', createQuery)
  .patch('/:queryId', updateQuery)
  .delete('/:queryId', deleteQuery)

export default router