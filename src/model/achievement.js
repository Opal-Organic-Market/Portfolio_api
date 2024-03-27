import mongoose from "mongoose";

const schema = mongoose.Schema;

const achievementSchema = new schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Path to the image file
  date: { type: Date},
});

export const Achievement = mongoose.model("Achievement", achievementSchema);
