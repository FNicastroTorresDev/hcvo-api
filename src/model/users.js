// Crear un modelo/esquemad de usuario
import mongoose from "mongoose";
import { Schema } from "mongoose";

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  createdAt: {
    type: String
  },
  updatedAt: {
    type: String
  }
})

const UsersModel = mongoose.model('users', UsersSchema)

export default UsersModel
