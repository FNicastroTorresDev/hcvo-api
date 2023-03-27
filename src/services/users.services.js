import { UsersModel } from "../model/Users.js";

export const getAllUsers = async () => {
  try {
    const allUsers = await UsersModel.find({})
    return allUsers
  } catch (err) {
    err
  }
}

export const getUser = async (id) => {
  try {
    const findedUser = await UsersModel.findById(id)
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
  const createdUser = await UsersModel.create(userToInsert)
  return createdUser
}

export const updateOneUser = async (id, changes) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const changesToInsert = {
    ...changes,
    updatedAt: today
  }
  await UsersModel.findByIdAndUpdate(id, changesToInsert)
  const updatedUser = await getUser(id)
  return updatedUser
}

export const deleteOneUser = async (id) => {
  try {
    const deletedUser = await UsersModel.deleteOne({ _id: id })
    return deletedUser
  } catch (err) {
    err
  }
}