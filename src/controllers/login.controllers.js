import { compareSync } from "bcrypt"
import users from "../models/users.js"
import jwt from "jsonwebtoken"

export const authentication = async (req, res) => {
  const signature = process.env.SIGNATURE
  const { username, password } = req.body

  const user = await users.findOne({ username })

  if (!user) {
    return res.status(400).send({
      message: 'Verifique la información ingresada e intente nuevamente.'
    })
  }

  const isValid = compareSync(password, user.password)

  if (!isValid) {
    return res.status(400).send({
      message: 'Verifique la información ingresada e intente nuevamente.'
    })
  }

  const payload = {
    id: user.id,
    username: user.username
  }
  const accessToken = jwt.sign(payload, signature, { expiresIn: "10h" })

  res.status(201).send({
    message: `Bienvenido ${user.fullName}.`,
    accessToken,
  })
}

export const validateToken = async (req, res) => {
  const token = req.body.accessToken

  if (!token) {
    return res.status(401).json({
      error: 'Acceso denegado. Sin token de acceso.'
    })
  }

  const signature = process.env.SIGNATURE

  try {
    const data = jwt.verify(token, signature)
    if (data) {
      return res.status(202).json({
        message: 'Acceso aceptado.'
      })
    }
  } catch (error) {
    return res.status(401).json({
      error: 'Acceso denegado. Token inválido.'
    })
  }
}