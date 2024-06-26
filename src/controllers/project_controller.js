import { Project } from "../model/projects.js";

//post project
export const addProject = async (req, res) => {
  try {
    const data = req.body;
    const addedproject = await Project.create({
      ...data, 
      image: req.file.filename
    });
    console.log("New project added:",addedproject )
    res.status(201).send(addedproject); // 201 status code for successful creation
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" }); // Send a generic error message
  }
};

//get all project
export const getAllProjects = async (req, res) => {
  try {
    const getAll = await Project.find({});
    res.status(201).send(getAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get project by id
export const getAllProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const getById = await Project.findById(id);
    res.status(201).send(getById);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete one project by id
export const deleteProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteById = await Project.findByIdAndDelete(id);

    if (!deleteById) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully", deleteById });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//update one project by id
export const updateProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updated = await Project.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project updated successfully", updated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
