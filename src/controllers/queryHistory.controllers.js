import { validatePetId } from "../db/db.validations.js"
import { createNewQuery, deleteOneQuery, getAllQueries, getOneQuery, updateOneQuery } from "../services/queryHistory.services.js"

export const getQueries = async (req, res) => {
  const { limit = 3, from = 0 } = req.query
  try {
    const [ queries, total ] = await getAllQueries(limit, from)
    return res.status(201).send({
      message: '3 queries devueltas.',
      total: total,
      data: queries
    })
  } catch (err) {
    return err
  }
}

export const getQuery = async (req, res) => {
  const { queryId } = req.params
  try {
    const foundQuery = await getOneQuery(queryId)
    if (foundQuery) {
      return res.status(201).send({
        message: 'Una query devuelta.',
        data: foundquery
      })
    }
  } catch (err) {
    return res.status(504).send({
      message: 'No se encontró ningún elemento'
    })
  }
}

export const createQuery = async (req, res) => {
  const { body } = req
  if (
    !body.idPet ||
    !body.dateOfQuery ||
    !body.changes
  ) {
    return res.status(400).send({
      message: 'Faltan campos requeridos.'
    })
  }

  if (await validatePetId(body.idPet) !== 'TRUE') {
    return res.status(400).send({
      message: 'El id de mascota no está registrado en base de datos.'
    })
  }

  const newQuery = {
    idPet: body.idPet,
    dateOfQuery: body.dateOfQuery,
    changes: body.changes,
    comments: body?.comments
  }

  try {
    const createdQuery = await createNewQuery(newQuery)
    return res.status(201).send({
      message: 'Query creada.',
      data: createdQuery
    })
  } catch (error) {
    return res.status(400).send({
      message: 'Ha ocurrido un error.',
      fields: {
        idpet: error.errors?.idPet?.message,
        dateOfQuery: error.errors?.dateOfQuery?.message,
        changes: error.errors?.changes?.message
      }
    })
  }
  
}

export const updateQuery = async (req, res) => {
  const { body, params: {queryId} } = req

  if (!queryId || body) {
    return res.status(400).send({
      message: 'Petición incompleta.'
    })
  }
  
  try {
    const updatedQuery = await updateOneQuery(queryId, body)
    return es.status(201).send({
      message: 'Query actualizada.',
      date: updatedQuery
    })
  } catch (error) {
    return error
  }
}

export const deleteQuery = async (req, res) => {
  const { queryId } = req.params

  if (!queryId) {
    return res.status(400).send({
      message: 'Petición sin id.'
    })
  }

  try {
    const deletedQuery = await deleteOneQuery(queryId)
    return res.status(201).send({
      message: 'Query eliminada.',
      date: deletedQuery
    })
  } catch (error) {
    return error
  }
}