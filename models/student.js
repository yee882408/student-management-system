import { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  sId: {
    type: String,
  },
  name: {
    type: String,
  },
  cellphone: {
    type: String,
  },
  emergencyPerson: {
    type: String,
  },
  emergencyPhone: {
    type: String,
  },
  idNo: {
    type: String,
  },
  corAddress: {
    type: String,
  },
  phoneOne: { type: String },
  phoneTwo: { type: String },
  photo: { type: String },
  regAddress: { type: String },
});

const Student = models.Student || model("Student", StudentSchema);

export default Student;
