import { validatePetId, validatePetIdData } from '../db/db.validations.js'
import {
  getAllPetData,
  getOnePetData,
  createNewPetData,
  updateOnePetData,
  deleteOnePetData
} from '../services/medicalData.services.js'

export const getAllMedicalData = async (req, res) => {
  const { limit = 10, from = 0 } = req.query
  try {
    const [ data, total ] = await getAllPetData(limit, from)
    return res.status(201).send({
      message: 'Archivos encontrados:',
      total: total,
      data: data
    })
  } catch (err) {
    return err
  }
}

export const getOneMedicalData = async (req, res) => {
  const { medDataId } = req.params
  try {
    const data = await getOnePetData(medDataId)
    if (data) {
      return res.status(201).send({
        data
      })
    } 
  } catch (err) {
    res.status(504).send({
      message: 'No se encontró archivo.'
    })
  }
  
}

export const createMedicalData = async (req, res) => {
  const { body } = req
  if (!body.idPet) {
    return res.status(400).send({
      message: 'Faltan campos requeridos.'
    })
  }

  if (await validatePetId(body.idPet) != 'TRUE') {
    return res.status(400).send({
      message: 'El id de mascota no existe.'
    })
  }

  if (await validatePetIdData(body.idPet) == 'TRUE') {
    return res.status(400).send({
      message: 'La mascota ya tiene una ficha médica registrada.'
    })
  }

  const newData = {
    idPet: body.idPet,
    anamnesis: body?.anamnesis,
    inicio: body?.inicio,
    course: body?.course,
    vision: body?.vision,
    tratEvo: body?.tratEvo,
    sistGloboOcular: body?.sistGloboOcular,
    areaOrbital: body?.areaOrbital,
    sistLagrimal: body?.sistLagrimal,
    parpados: body?.parpados,
    tercerParpado: body?.tercerParpado,
    conjuntivas: body?.conjuntivas,
    corneaEscle: body?.corneaEscle,
    iris: body?.iris,
    camAntYPost: body?.camAntYPost,
    cristalino: body?.cristalino,
    esquema: body?.esquema,
    estudiosARealizar: body?.estudiosARealizar,
    diagnostico: body?.diagnostico,
    pronostico: body?.pronostico,
    tratamiento: body?.tratamiento
  }
  
  try {
    const createdData = await createNewPetData(newData)
    return res.status(201).send({
      message: 'Archivo creado.',
      data: createdData
    })
  } catch (error) {
    return res.status(400).send({
      message: 'Ha ocurrido un error.',
      fields: {
        idPet: error.errors?.petId?.message
      }
    })
  }
}

export const updateMedicalData = async (req, res) => {
  const { body, params: {medDataId} } = req

  if (!medDataId) {
    return res.status(400).send({
      message: 'Petición sin id.'
    })
  }

  try {
    const updatedData = await updateOnePetData(medDataId, body)
    return res.status(201).send({
      message: 'Archivo actualizado.',
      data: updatedData
    })
  } catch (error) {
    return error
  } 
}

export const deleteMedicalData = async (req, res) => {
  const {medDataId} = req.params

  if (!medDataId) {
    return res.status(400).send({
      message: 'Petición sin id.'
    })
  }

  try {
    const deletedData = await deleteOnePetData(medDataId)
    res.status(201).send({
      message: 'Archivo eliminado con éxito.',
      data: deletedData
    })
  } catch (error) {
    return error
  }
}