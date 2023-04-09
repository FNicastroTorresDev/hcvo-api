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