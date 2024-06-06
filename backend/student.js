const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  class: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  specificProvisions: { type: [String], default: [] },
});

module.exports = mongoose.model("Student", studentSchema);
