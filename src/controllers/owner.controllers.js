export const getOwner = (req, res) => {
  res.json('Obtuviste el dueño.')
} 

export const getOneOwner = (req, res) => {
  const {ownerId} = req.params
  res.json(`Obtuviste el dueño con id ${ownerId}.`)
}

export const createOwner = (req, res) => {
  res.json('Creaste un dueño.')
}

export const updateOneOwner = (req, res) => {
  const {ownerId} = req.params
  res.json(`Actualizaste el dueño con id ${ownerId}.`)
} 

export const deleteOneOwner = (req, res) => {
  const {ownerId} = req.params
  res.json(`Eliminaste el dueño con id ${ownerId}.`)
}
