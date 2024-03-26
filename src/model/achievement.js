import mongoose from "mongoose";

const { Schema } = mongoose;

const achievementSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Path to the image file
  date: { type: Date, required: true },
});

export const Achievement = mongoose.model("Achievement", achievementSchema);
