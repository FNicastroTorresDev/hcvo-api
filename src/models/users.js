import { model, Schema } from "mongoose";

const UsersSchema = new Schema({
  username: {
    type: String,
    required: [true, 'El username es obligatorio.']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria.']
  },
  fullName: {
    type: String,
    required: [true, 'El nombre completo es obligatorio.']
  },
  createdAt: {
    type: String
  },
  updatedAt: {
    type: String
  }
})

export default model('users', UsersSchema)
