import { validateDNI } from '../db/db.validations.js'
import addPetToOwner from '../helpers/addPetToOwner.js'
import getOwnerNamePhones from '../helpers/getOwnerNamePhones.js'
import {
  getAllPets,
  getOnePet,
  createNewPet,
  updateOnePet,
  deleteOnePet
} from '../services/pet.services.js'

export const getPets = async (req, res) => {
  const { limit = 0, from = 0 } = req.query
  try {
    const [ pets, total ] = await getAllPets(limit, from)
    res.status(201).send({
      message: "Mascotas retornadas exitosamente:",
      total: total,
      data: pets
    })
  } catch (err) {
    return err
  }
}

export const getPet = async (req, res) => {
  const { petId } = req.params
  try {
    const pet = await getOnePet(petId)
    const owner = await getOwnerNamePhones(pet.ownerID)
    if (pet) {
      return res.status(201).send({
        pet: pet,
        owner: owner
      })
    }
  } catch (err) {
    res.status(504).send({
      message: 'No se encontró mascota.'
    })
  }
}

export const createPet = async (req, res) => {
  const { body } = req
  if (
    !body.name ||
    !body.specie ||
    !body.ownerLastname
  ) {
    return res.status(400).send({
      error: 'Faltan campos requeridos.'
    })
  }

  if (await validateDNI(body.ownerDNI) !== 'TRUE') {
    return res.status(400).send({
      error: 'El DNI no está registrado en base de datos.'
    })
  }

  const newPet = {
    name: body.name,
    specie: body.specie,
    ownerID: body.ownerID,
    ownerLastname: body.ownerLastname,
    sex: body?.sex,
    derivedBy: body?.derivedBy
  }

  try {
    const createdPet = await createNewPet(newPet)
    await addPetToOwner(createdPet._id, createdPet.ownerID)
    
    return res.status(201).send({
      message: 'Dato guardado con éxito.',
      data: createdPet
    })
  } catch (error) {
    return res.status(400).send({
      error: 'Ha ocurrido un error.',
      fields: {
        name: error.errors?.name?.message,
        specie: error.errors?.specie?.message,
        ownerDNI: error.errors?.ownerDNI?.message
      }
    })
  }
}

export const updatePet = async (req, res) => {
  const { body, params: {petId} } = req

  if (!petId) {
    return res.status(400).send({
      message: 'Petición sin id.'
    })
  }

  try {
    const updatedPet = await updateOnePet(petId, body)
    return res.status(201).send({
      message: 'Mascota actualizado con éxito.',
      data: updatedPet
    })
  } catch (error) {
    return error
  }
}

export const deletePet = async (req, res) => {
  const { petId } = req.params
  
  if (!petId) {
    return res.status(400).send({
      message: 'Petición sin id.'
    })
  }

  try {
    const deletedPet = await deleteOnePet(petId)
    return res.status(201).send({
      message: 'Mascota eliminada con éxito.',
      data: deletedPet
    })
  } catch (error) {
    return error
  }
}