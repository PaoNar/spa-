const mongoose = require("mongoose");

const { Schema } = mongoose;

const userModel = Schema({
  id: { type: Number },
  titulo: { type: String },
  nombre: { type: String },
  apellido: { type: String },
  email:  { type: String },
  passw: { type: String },
  createAt: { type: String },
  sessionID: { type: String }
});

module.exports = mongoose.model("usuarios", userModel);
