import owner from "../models/owner.js";

export const getAllOwners = async (limit, from) => {
  try {
    const data = await Promise.all([
      owner.find({})
        .skip(from)
        .limit(limit),
      owner.count()
    ])
    return data
  } catch (err) {
    return err
  }
}

export const getOwner = async (id) => {
  try {
    const findedOwner = await owner.findById(id)
    return findedOwner
  } catch (err) {
    err
  }
}

export const createNewOwner = async (newOwner) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const ownerToInsert = {
    ...newOwner,
    createdAt: today,
    updatedAt: today
  }
  const createdOwner = await owner.create(ownerToInsert)
  return createdOwner
}

export const updateOneOwner = async (id, changes) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const changesToInsert = {
    ...changes,
    updatedAt: today
  }
  try {
    await owner.findByIdAndUpdate(id, changesToInsert)
    const updatedOwner = await getOwner(id)
    return updatedOwner
  } catch (err) {
    err
  }
}

export const deleteOneOwner = async (id) => {
  try {
    const deletedOwner = await owner.findByIdAndDelete(id)
    return deletedOwner
  } catch (err) {
    err
  }
}