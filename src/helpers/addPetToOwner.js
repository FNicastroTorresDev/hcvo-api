import owner from "../models/owner.js"
import { updateOneOwner } from "../services/owner.services.js"

const addPetToOwner = async (petId, dni) => {
  const ownerToEdit = await owner.findOne({ ownerDNI: dni })
  ownerToEdit.pets.push(petId)
  const anianido = await updateOneOwner(ownerToEdit._id, ownerToEdit)
  return anianido
}

export default addPetToOwner