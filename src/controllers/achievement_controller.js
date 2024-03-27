import { Achievement } from "../model/achievement.js";

// Add an achievement to the database
export const addAchievement = async (req, res) => {
  try {
    const data = req.body;
    const addedAchievement = await Achievement.create({
      ...data,
      image: req.file.filename
    });
    console.log("New achievement added:", addedAchievement);
    res.send(addedAchievement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all achievements
export const getAllAchievements = async (req, res) => {
  try {
    const allAchievements = await Achievement.find({});
    res.send(allAchievements);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get one achievement by id
export const getAchievementById = async (req, res) => {
  try {
    const id = req.params.id;
    const achievement = await Achievement.findById(id);
    res.send(achievement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete one achievement by id
export const deleteAchievementById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedAchievement = await Achievement.findByIdAndDelete(id);

    if (!deletedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.json({ message: "Achievement deleted successfully", deletedAchievement });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update existing achievement
export const updateAchievementById = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedAchievement = await Achievement.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.json({ message: "Achievement updated successfully", updatedAchievement });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
