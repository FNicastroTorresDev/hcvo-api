import user from '../model/users.js'

export const validateUsername = async (username) => {
  const alreadyExists = await user.findOne({ username: username })
  return alreadyExists
}