import express from 'express'
import { 
  userRoutes, 
  ownerRoutes, 
  loginRoutes,
  petRoutes,
  medicalDataRoutes
} from './routes/index.js'
import cors from 'cors'
import { dbConnection } from './db/config.js'

export class Server {
  // constructor
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    this.connectionDb()
  }
  // métodos
async connectionDb() {
  await dbConnection()
}

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }
  routes() {
    this.app.use('/api/login', loginRoutes)
    this.app.use('/api/users', userRoutes)
    this.app.use('/api/owner', ownerRoutes)
    this.app.use('/api/pet', petRoutes)
    this.app.use('/api/medicalData', medicalDataRoutes)
  }
  listen(port) {
    this.app.listen(port, () => {
      console.log(`🚀 Servidor en puerto ${port}`)
    })
  }
}
