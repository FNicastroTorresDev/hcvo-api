import { model, Schema } from "mongoose";

const QueryHistorySchema = new Schema({
  idPet: {
    type: String,
    required: [true, 'El ID de mascota es obligatorio.']
  },

  dateOfQuery: {
    type: String,
    required: [true, 'La fecha de consulta es obligatoria.']
  },

  changes: {
    type: Array,
    required: [true, 'Este campo es obligatorio.']
  },

  comments: {
    type: String
  }
})

export default model('queryHistories', QueryHistorySchema)