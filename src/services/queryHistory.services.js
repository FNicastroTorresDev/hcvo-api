import queryHistory from "../models/queryHistory.js";

export const getAllQueries = async (limit, from) => {
  try {
    const data = await Promise.all([
      queryHistory.find({})
        .skip(from)
        .limit(limit),
      queryHistory.count()
    ])
    return data
  } catch (err) {
    return err
  }
}

export const getOneQuery = async (id) => {
  try {
    const findedQuery = await queryHistory.findById(id)
    return findedQuery
  } catch (err) {
    return err
  }
}

export const createNewQuery = async (newQuery) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const queryToInsert = {
    ...newQuery,
    createdAt: today,
    updatedAt: today
  }
  try {
    const createdQuery = await queryHistory.create(queryToInsert)
    return createdQuery
  } catch (err) {
    return err
  }
}

export const updateOneQuery = async (id, changes) => {
  const today = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Jujuy' })
  const changesToInsert = {
    ...changes,
    updatedAt: today
  }
  try {
    await queryHistory.findByIdAndUpdate(id, changesToInsert)
    const updatedQuery = await getOneQuery(id)
    return updatedQuery
  } catch (err) {
    return err
  }
}

export const deleteOneQuery = async (id) => {
  try {
    const deletedQuery = await queryHistory.findByIdAndDelete(id)
    return deletedQuery
  } catch (err) {
    return err
  }
}