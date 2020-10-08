const mongoose = require("mongoose");

const usuarioService = mongoose.model("Usuario", new mongoose.Schema({}, { strict: false }), "Usuario");
module.exports = usuarioService;