import { validateDNI } from "../db/db.validations.js"
import {
  getAllOwners,
  getOwner,
  createNewOwner,
  updateOneOwner,
  deleteOneOwner
} from "../services/owner.services.js"

export const getOwners = async (req, res) => {
  const { limit = 10, from = 0} = req.query
  try {
    const [ owners, total ] = await getAllOwners(limit, from)
    res.status(201).json({ 
      message: "Dueños retornados exitosamente:",
      total: total,
      data: owners 
    })
  } catch (err) {
    err
  }
} 

export const getOneOwner = async (req, res) => {
  const {ownerId} = req.params
  const owner = await getOwner(ownerId)
  if (owner) {
    return res.status(201).json({
      message: 'Dueño retornado exitosamente:',
      data: owner
    })
  }
  res.status(404).send({ 
    message: `No se encontró ningún/a dueño/a con el id ${ownerId}.` })
}

export const createOwner = async (req, res) => {
  const { body } = req
  if (
    !body.ownerDNI ||
    !body.lastname ||
    !body.firstname ||
    !body.phoneNumbers
  ) {
    return res.status(400).json({ message: 'Faltan campos requeridos.' })
  }

  if (validateDNI(body.ownerDNI) === 'TRUE') {
    return res.status(400).send({
      message: 'El DNI ya está registrado en la base de datos.'
    })
  }

  const newOwner = {
    ownerDNI: body.ownerDNI,
    lastname: body.lastname,
    firstname: body.firstname,
    phoneNumbers: body.phoneNumbers
  }

  try {
    const createdOwner = await createNewOwner(newOwner)
    return res.status(201).json({ message: 'Dato guardado con éxito.', data: createdOwner })
  } catch (error) {
    return res.status(400).json({
      message: 'Ha ocurrido un error.',
      fields: {
        lastname: error.errors?.lastname?.message,
        firstname: error.errors?.firstname?.message,
        phoneNumbers: error.errors?.phoneNumbers?.message
      }
    })
  }
}

export const updateOwner = async (req, res) => {
  const { body, params: {ownerId} } = req
  if (!ownerId) {
    return
  }
  try {
    const updatedOwner = await updateOneOwner(ownerId, body)
    res.status(201).send({ 
      message: "Dueño actualizado con éxito.", 
      data: updatedOwner })
  } catch (error) {
    return error
  }
} 

export const deleteOwner = async (req, res) => {
  const { ownerId } = req.params
  if (!ownerId) {
    return
  }
  
  try {
    const deletedOwner = await deleteOneOwner(ownerId)
    res.status(201).send({ status: "OK", data: deletedOwner })
  } catch (error) {
    return error
  }
}
