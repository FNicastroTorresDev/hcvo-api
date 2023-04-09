import user from '../models/users.js'
import owner from '../models/owner.js'
import pet from '../models/pet.js'

export const validateUsername = async (username) => {
  const alreadyExists = await user.findOne({ username: username })
  if (alreadyExists) {
    return 'TRUE'
  }
}

export const validateDNI = async (dni) => {
  const alreadyExists = await owner.findOne({ ownerDNI: dni })
  if (alreadyExists) {
    return 'TRUE'
  }
}

export const validatePetId = async (petId) => {
  const alreadyExists = await pet.findById(petId)
  if (alreadyExists) {
    return 'TRUE'
  }
}