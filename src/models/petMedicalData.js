import { model, Schema } from "mongoose";

const PetMedicalDataSchema = new Schema({
  idPet: {
    type: String,
    required: [true, 'El ID de mascota es obligatorio.']
  },

  anamnesis: {
    type: Object
  },

  inicio: {
    type: Object
  },

  course: {
    type: Object
  },

  vision: {
    type: Object
  },

  tratEvo: {
    type: Object
  },

  sistGloboOcular: {
    type: Object
  },

  areaOrbital: {
    type: Object
  },

  sistLagrimal: {
    type: Object
  },

  parpados: {
    type: Object
  },

  tercerParpado: {
    type: Object
  },

  conjuntivas: {
    type: Object
  },

  corneaEscle: {
    type: Object
  },

  iris: {
    type: Object
  },

  camAntYPost: {
    type: Object
  },

  cristalino: {
    type: Object
  },

  esquema: {
    type: Object
  },

  estudiosARealizar: {
    type: Object
  },

  diagnostico: {
    type: Object
  },

  pronostico: {
    type: Object
  },

  tratamiento: {
    type: Object
  },

  createdAt: {
    type: String
  },

  updatedAt: {
    type: String
  }
})

export default model('medicalData', PetMedicalDataSchema)