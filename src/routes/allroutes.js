import { Router } from "express";
import dotenv from "dotenv";
import {
  addBlog,
  getAll,
  getOne,
  deleteBlogById,
  updateBlogById,
} from "../controllers/blog_controller.js";
import {
  addProject,
  deleteProjectById,
  getAllProjectById,
  getAllProjects,
  updateProjectById,
} from "../controllers/project_controller.js";
import {
  addSkill,
  getAllSkills,
  getSkillById,
  deleteSkillById,
  updateSkillById,
} from "../controllers/skill_controller.js";
import {
  addExperience,
  getAllExperiences,
  getExperienceById,
  deleteExperienceById,
  updateExperienceById,
} from "../controllers/experience_controller.js";
import {
  addAchievement,
  getAllAchievements,
  getAchievementById,
  deleteAchievementById,
  updateAchievementById,
} from "../controllers/achievement_controller.js";

export const router = Router();

dotenv.config();
//blog routes
router.post("/addblog", addBlog); //add a blog
router.get("/getblogs", getAll); //get all blogs
router.get("/getbyid/:id", getOne); //get a blog by id
router.delete("/deleteblog/:id", deleteBlogById); //delete blog by id
router.put("/updateblog/:id", updateBlogById); //update blog by id

//project routes
router.post("/addproject", addProject); //add a project
router.get("/getprojects", getAllProjects); //get all projects
router.get("/getbyprojectid/:id", getAllProjectById); //get one project by id
router.delete("/deleteproject/:id", deleteProjectById); //delete project by id
router.put("/updateproject/:id", updateProjectById); //update the project by id

//skills routes
router.post("/addskill", addSkill); // Add a skill
router.get("/getskills", getAllSkills); // Get all skills
router.get("/getskillbyid/:id", getSkillById); // Get one skill by id
router.delete("/deleteskill/:id", deleteSkillById); // Delete skill by id
router.put("/updateskill/:id", updateSkillById); // Update the skill by id

//experience section
router.post("/addexperience", addExperience); // Add an experience
router.get("/getexperiences", getAllExperiences); // Get all experiences
router.get("/getexperiencebyid/:id", getExperienceById); // Get one experience by id
router.delete("/deleteexperience/:id", deleteExperienceById); // Delete experience by id
router.put("/updateexperience/:id", updateExperienceById); // Update the experience by id

//achievement section
router.post("/addachievement", addAchievement); // Add an achievement
router.get("/getachievements", getAllAchievements); // Get all achievements
router.get("/getachievementbyid/:id", getAchievementById); // Get one achievement by id
router.delete("/deleteachievement/:id", deleteAchievementById); // Delete achievement by id
router.put("/updateachievement/:id", updateAchievementById); // Update the achievement by id

export default router;
