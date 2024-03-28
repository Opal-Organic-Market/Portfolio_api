import { Skill } from "../model/skills.js";

// Add a skill to the database
export const addSkill = async (req, res) => {
  try {
    const data = req.body;
    const addedSkill = await Skill.create({
      ...data,
    image: req.file.filename
    });
    console.log("New skill added:", addedSkill);
    res.send(addedSkill);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Get all skills
export const getAllSkills = async (req, res) => {
  try {
    const allSkills = await Skill.find({});
    res.send(allSkills);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get one skill by id
export const getSkillById = async (req, res) => {
  try {
    const id = req.params.id;
    const skill = await Skill.findById(id);
    res.send(skill);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete one skill by id
export const deleteSkillById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.json({ message: "Skill deleted successfully", deletedSkill });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update existing skill
export const updateSkillById = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedSkill = await Skill.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.json({ message: "Skill updated successfully", updatedSkill });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
