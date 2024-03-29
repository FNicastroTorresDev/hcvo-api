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
  sex: {
    type: String
  },
  ownerID: {
    type: String,
    required: [true, 'El _id del dueño es obligatorio.']
  },
  ownerLastname: {
    type: String
  },
  derivedBy: {
    type: String
  }
})

export default model('pet', PetSchema)