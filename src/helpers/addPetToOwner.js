import owner from "../models/owner.js"
import { updateOneOwner } from "../services/owner.services.js"

const addPetToOwner = async (petId, ownerID) => {
  const ownerToEdit = await owner.findById(ownerID)
  ownerToEdit.pets.push(petId)
  const aniadido = await updateOneOwner(ownerToEdit._id, ownerToEdit)
  return aniadido
}

export default addPetToOwner