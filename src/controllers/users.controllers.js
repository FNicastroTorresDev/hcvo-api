export const getUsers = (req, res) => {
  res.json('Obtuviste los usuarios.')
}

export const getOneUser = () => {
  const {userId} = req.params
  res.json(`Obtuviste usuario con id ${userId}`)
}

export const createUsers = (req, res) => {
  res.json('Creaste un usuario.')
}

export const updateUsers = (req, res) => {
  const {userId} = req.params
  res.json(`Actualizaste usuario con id ${userId}`)
}

export const deleteUsers = (req, res) => {
  const {userId} = req.params
  res.json(`Eliminaste usuario con id ${userId}`)
}