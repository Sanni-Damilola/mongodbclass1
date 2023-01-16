import mongoose from "mongoose";

interface student {
  Name: string;
  admissionNo: number;
  session: number;
  class_1_6: string;
}

interface Istudent extends student, mongoose.Document {}

const Schema = new mongoose.Schema(
  {
    Name: String,
    admissionNo: Number,
    sessionNo: Number,
    class_1_6: String,
  },
);

export default mongoose.model<Istudent>("register", Schema);
