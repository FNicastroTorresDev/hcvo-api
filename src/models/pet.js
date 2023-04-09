import { model, Schema } from "mongoose"

const PetSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre de mascota es obligatorio.']
  },
  specie: {
    type: String,
    required: [true, 'La especie es obligatoria.']
  },
  ownerDNI: {
    type: String,
    required: [true, 'El DNI del dueño es obligatorio.']
  },
  sex: {
    type: String
  },
  derivedBy: {
    type: String
  }
})

export default model('pet', PetSchema)