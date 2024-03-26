import mongoose from "mongoose";

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: { type: String, required: true },
  proficiency: { type: String, required: true },
  experience: { type: String, required: true },
});

export const Skill = mongoose.model("Skill", skillSchema);
