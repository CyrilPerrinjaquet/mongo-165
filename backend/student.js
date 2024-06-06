import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  class: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  specificProvisions: { type: [String], default: [] },
  
});
const Student = mongoose.model("Student", studentSchema);

export default Student;
