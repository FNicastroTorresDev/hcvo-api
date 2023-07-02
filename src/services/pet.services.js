import pet from '../models/pet.js'

export const getAllPets = async (limit, from) => {
  try {
    const data = await Promise.all([
      pet.find({})
        .skip(from)
        .limit(limit),
      pet.count()
    ])
    return data
  } catch (err) {
    return err
  }
}

export const getOnePet = async (id) => {
  try {
    const findedPet = await pet.findById(id)
    return findedPet
  } catch (err) {
    return err
  }
}

export const createNewPet = async (newPet) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const petToInsert = {
    ...newPet,
    createdAt: today,
    updatedAt: today
  }
  try {
    const createdPet = await pet.create(petToInsert)
    return createdPet
  } catch (err) {
    return err
  }
}

export const updateOnePet = async (id, changes) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const changesToInsert = {
    ...changes,
    updatedAt: today
  }
  try {
    await pet.findByIdAndUpdate(id, changesToInsert)
    const updatedPet = await getPet(id)
    return updatedPet
  } catch (err) {
    return err
  }
}

export const deleteOnePet = async (id) => {
  try {
    const deletedPet = await pet.findByIdAndDelete(id)
    return deletedPet
  } catch (err) {
    return err
  }
}