import mongoose from "mongoose";

const { Schema } = mongoose;

const experienceSchema = new Schema({
  title: { type: String, required: true },
  institution: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
});

export const Experience = mongoose.model("Experience", experienceSchema);
