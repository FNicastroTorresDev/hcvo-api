import petMedicalData from "../models/petMedicalData.js";

export const getAllPetData = async (limit, from) => {
  try {
    const data = await Promise.all([
      petMedicalData.find({})
        .skip(from)
        .limit(limit),
      petMedicalData.count()
    ])
    return data
  } catch (err) {
    return err
  }
}

export const getOnePetData = async (id) => {
  try {
    const findedMedicalData = await petMedicalData.findOne({ idPet: id })
    if (!findedMedicalData) {
      return "No se encontró ninguna ficha con ese ID."
    }
    return findedMedicalData
  } catch (err) {
    err
  }
}

export const createNewPetData = async (newMedicalData) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const dataToInsert = {
    ...newMedicalData,
    createdAt: today,
    updatedAt: today
  }
  try {
    const createdData = await petMedicalData.create(dataToInsert)
    return createdData
  } catch (err) {
    return err
  }
}

export const updateOnePetData = async (id, changes) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const changesToInsert = {
    ...changes,
    updatedAt: today
  }
  try {
    await petMedicalData.findByIdAndUpdate(id, changesToInsert)
    const updatedData = await getOnePetData(id)
    return updatedData
  } catch (err) {
    return err
  }
}

export const deleteOnePetData = async (id) => {
  try {
    const deletedData = await petMedicalData.findByIdAndDelete(id)
    return deletedData
  } catch (err) {
    return err
  }
}