const mongoose = require("mongoose");

const professorService = mongoose.model("Professor", new mongoose.Schema({}, { strict: false }), "Professor");
module.exports = professorService;