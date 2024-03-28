import mongoose from "mongoose";

const schema = mongoose.Schema;
const addBlogSchema = new schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true }, // Path to the image file
  body: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  meta: {
    votes: Number,
    favs: Number,
  },
});

export const blogModel = mongoose.model("Post", addBlogSchema);
