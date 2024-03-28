import mongoose from "mongoose";

const schema = mongoose.Schema;

const addProjectSchema = new schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now },
  comments: [{ body: String, date: { type: Date, default: Date.now } }],
  meta: {
    votes: { type: Number, default: 0 },
    favs: { type: Number, default: 0 },
  },
});

export const Project = mongoose.model("Project", addProjectSchema);
