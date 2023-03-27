import { 
  getAllUsers, 
  getUser,
  createNewUser, 
  updateOneUser,
  deleteOneUser 
} from "../services/users.services.js"

export const getUsers = async (req, res) => {
  const allUsers = await getAllUsers()
  res.status(201).send({ status: "OK", data: allUsers })
}

export const getOneUser = async (req, res) => {
  const {userId} = req.params
  const user = await getUser(userId)
  res.status(201).send({ status: "OK", data: user })
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
  const newUser = {
    username: body.username,
    password: body.password,
    fullName: body.fullName
  }
  try {
    const createdUser = await createNewUser(newUser)
    res.status(201).send({ status: "OK", data: createdUser })
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error.'
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