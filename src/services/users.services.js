import users from "../model/users.js";

export const getAllUsers = async (limit, from) => {
  try {
    const data = await Promise.all([
      users.find({})
        .skip(from)
        .limit(limit),
      users.count()
    ])
    return data
  } catch (err) {
    err
  }
}

export const getUser = async (id) => {
  try {
    const findedUser = await users.findById(id)
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
  const createdUser = await users.create(userToInsert)
  return createdUser
}

export const updateOneUser = async (id, changes) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const changesToInsert = {
    ...changes,
    updatedAt: today
  }
  await users.findByIdAndUpdate(id, changesToInsert)
  const updatedUser = await getUser(id)
  return updatedUser
}

export const deleteOneUser = async (id) => {
  try {
    const deletedUser = await users.deleteOne({ _id: id })
    return deletedUser
  } catch (err) {
    err
  }
}