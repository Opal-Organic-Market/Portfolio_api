import mongoose from "mongoose";

const schema = mongoose.Schema;

const experienceSchema = new schema({
  title: { type: String, required: true },
  institution: { type: String, required: true },
  description: { type: String},
  startDate: { type: Date, required: true },
  endDate: { type: Date },
});

export const Experience = mongoose.model("Experience", experienceSchema);
