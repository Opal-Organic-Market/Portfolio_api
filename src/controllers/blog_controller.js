import { blogModel } from "../model/blog.js";

//add a blog to the database
export const addBlog = async (req, res) => {
  try {
    const data = req.body;
    const addData = await blogModel.create(data);
    console.log("new entry", data);
    res.send(addData);
  } catch (error) {
    console.log(error);
  }
};

//get all blogs
export const getAll = async (req, res) => {
  try {
    const getAllBlogs = await blogModel.find({});
    res.send(getAllBlogs);
  } catch (error) {
    console.log(error);
  }
};

//get one blog by id
export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const getById = await blogModel.findById(id);
    res.send(getById);
  } catch (error) {
    console.log(error);
  }
};

//delete one blog by id
export const deleteBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBlog = await blogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully", deletedBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//update existing blogs
export const updateBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedBlog = await blogModel.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
