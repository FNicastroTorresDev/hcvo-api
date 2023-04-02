import { 
  getAllUsers, 
  getUser,
  createNewUser, 
  updateOneUser,
  deleteOneUser 
} from "../services/users.services.js"
import { encryptPassword } from "../helpers/encryptPasword.js"
import { validateUsername } from "../helpers/users.validation.js"

export const getUsers = async (req, res) => {
  const { limit = 10, from = 0 } = req.query
  const [ allUsers, total ] = await getAllUsers(limit, from)
  res.status(201).send({ 
    message: "Usuarios obtenidos:", 
    total: total,
    data: allUsers
   })
}

export const getOneUser = async (req, res) => {
  const {userId} = req.params
  const user = await getUser(userId)
  if (user) {
    return res.status(201).send({
      message: 'Usuario encontrado:',
      data: user
    })
  }
  return res.status(404).send({
    message: `No se encontró usuario con el id ${userId}.`
  })
}

export const createUsers = async (req, res) => {
  const { body } = req
  if (
    !body.username ||
    !body.password ||
    !body.fullName
  ) {
    return res.status(400).send({ status: "FAILED", data: "Faltan datos." })
  }

  const usernameExist = await validateUsername(body.username)

  if (usernameExist) {
    return res.status(400).json({ message: "El email ya está registrado." })
  }

  const hash = encryptPassword(body.password)

  const newUser = {
    username: body.username,
    password: hash,
    fullName: body.fullName
  }

  try {
    const createdUser = await createNewUser(newUser)
    res.status(201).send({ status: "OK", data: createdUser})
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

export const updateUsers = async (req, res) => {
  const { body, params: {userId} } = req
  if (!userId) {
    return
  }
  const updatedUser = await updateOneUser(userId, body)
  res.status(201).send({ status: "OK", data: updatedUser })
}

export const deleteUsers = async (req, res) => {
  const { userId } = req.params
  const deletedUser = await deleteOneUser(userId)
  res.status(201).send({ status: "OK", data: deletedUser })
}