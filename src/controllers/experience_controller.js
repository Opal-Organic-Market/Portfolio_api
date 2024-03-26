import { Experience } from "../model/experience.js";

// Add an experience to the database
export const addExperience = async (req, res) => {
  try {
    const data = req.body;
    const addedExperience = await Experience.create(data);
    console.log("New experience added:", addedExperience);
    res.send(addedExperience);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all experiences
export const getAllExperiences = async (req, res) => {
  try {
    const allExperiences = await Experience.find({});
    res.send(allExperiences);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get one experience by id
export const getExperienceById = async (req, res) => {
  try {
    const id = req.params.id;
    const experience = await Experience.findById(id);
    res.send(experience);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete one experience by id
export const deleteExperienceById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.json({ message: "Experience deleted successfully", deletedExperience });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update existing experience
export const updateExperienceById = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedExperience = await Experience.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.json({ message: "Experience updated successfully", updatedExperience });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
