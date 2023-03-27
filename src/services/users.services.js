import Users from "../model/Users.js";

export const getAllUsers = async () => {
  try {
    const allUsers = await Users.find({})
    return allUsers
  } catch (err) {
    err
  }
}

export const getUser = async (id) => {
  try {
    const findedUser = await Users.findById(id)
    return findedUser
  } catch (err) {
    err
  }
}

export const createNewUser = async (newUser) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const userToInsert = {
    ...newUser,
    createdAt: today,
    updatedAt: today
  }
  const createdUser = await Users.create(userToInsert)
  return createdUser
}

export const updateOneUser = async (id, changes) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const changesToInsert = {
    ...changes,
    updatedAt: today
  }
  await Users.findByIdAndUpdate(id, changesToInsert)
  const updatedUser = await getUser(id)
  return updatedUser
}

export const deleteOneUser = async (id) => {
  try {
    const deletedUser = await Users.deleteOne({ _id: id })
    return deletedUser
  } catch (err) {
    err
  }
}