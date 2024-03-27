import mongoose from "mongoose";

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: { type: String, required: true },
  proficiency: { type: String, required: true },
  experience: { type: String, required: true },
  category: { type: String, enum: ['Soft Skills', 'Languages', 'Frameworks', 'Tools'], required: true },
  icon: { type: String, required: true } // Assuming icons are stored as URLs
});

export const Skill = mongoose.model("Skill", skillSchema);
