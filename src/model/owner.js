import { model, Schema } from "mongoose";

const OwnerSchema = new Schema({
  lastname: {
    type: String,
    required: [true, 'Apellido es obligatorio.']
  },
  firstname: {
    type: String,
    required: [true, 'El nombre es obligatorio.']
  },
  phoneNumbers: {
    type: Array,
    required: [true, 'Debe ingresar al menos un teléfono de contacto.']
  },
  pets: {
    type: Array
  },
  derivedBy: {
    type: String
  },
  createdAt: {
    type: String
  },
  updatedAt: {
    type: String
  }
})

export default model('owners', OwnerSchema)