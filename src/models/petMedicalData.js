import { model, Schema } from "mongoose";

const PetMedicalDataSchema = new Schema({
  idPet: {
    type: String,
    required: [true, 'El ID de mascota es obligatorio.']
  },

  anamnesis: {
    type: String
  },

  inicio: {
    type: String
  },

  course: {
    type: Object
  },

  vision: {
    type: Object
  },

  tratEvo: {
    type: String
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
    // FALTA CREAR.
  },

  estudiosARealizar: {
    type: Object
  },

  diagnostico: {
    type: String
  },

  pronostico: {
    type: String
  },

  tratamiento: {
    type: String
  },

  createdAt: {
    type: String
  },

  updatedAt: {
    type: String
  }
})

export default model('medicalData', PetMedicalDataSchema)