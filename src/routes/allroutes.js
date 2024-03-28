import { Router } from "express";
import dotenv from "dotenv";
import multer from "multer";
import { MulterSaveFilesOrgStorage } from "multer-savefilesorg-storage";
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

//config upload middleware for achievement
const uploadAchievement = multer({
  storage: MulterSaveFilesOrgStorage({
    serverPath: `https://savefiles.org/api/v1/uploads`,
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: "/portfolio/images/achievements/*",
  }),
  preservePath: true,
});

//config upload middleware for blog
const uploadBlog = multer({
  storage: MulterSaveFilesOrgStorage({
    serverPath: `https://savefiles.org/api/v1/uploads`,
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: "/portfolio/images/blogs/*",
  }),
  preservePath: true,
});


//config upload middleware for project
const uploadProject = multer({
  storage: MulterSaveFilesOrgStorage({
    serverPath: `https://savefiles.org/api/v1/uploads`,
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: "/portfolio/images/project/*",
  }),
  preservePath: true,
});


//blog routes
router.post("/addblogs", uploadBlog.single('image') ,addBlog); //add a blog   //add multer to post images
router.get("/getblogs", getAll); //get all blogs
router.get("/getblogsbyid/:id", getOne); //get a blog by id
router.delete("/deleteblogs/:id", deleteBlogById); //delete blog by id
router.put("/updateblogs/:id", updateBlogById); //update blog by id

//project routes
router.post("/addprojects", uploadProject.single('image'), addProject); //add a project
router.get("/getprojects", getAllProjects); //get all projects
router.get("/getbyprojectsid/:id", getAllProjectById); //get one project by id
router.delete("/deleteprojects/:id", deleteProjectById); //delete project by id
router.put("/updateprojects/:id", updateProjectById); //update the project by id

//skills routes
router.post("/addskills", addSkill); // Add a skill
router.get("/getskills", getAllSkills); // Get all skills
router.get("/getskillsbyid/:id", getSkillById); // Get one skill by id
router.delete("/deleteskills/:id", deleteSkillById); // Delete skill by id
router.put("/updateskills/:id", updateSkillById); // Update the skill by id

//experience section
router.post("/addexperiences", addExperience); // Add an experience 
router.get("/getexperiences", getAllExperiences); // Get all experiences
router.get("/getexperiencesbyid/:id", getExperienceById); // Get one experience by id
router.delete("/deleteexperiences/:id", deleteExperienceById); // Delete experience by id
router.put("/updateexperiences/:id", updateExperienceById); // Update the experience by id

//achievement section
router.post("/addachievements", uploadAchievement.single('image'), addAchievement); // Add an achievement
router.get("/getachievements", getAllAchievements); // Get all achievements
router.get("/getachievementsbyid/:id", getAchievementById); // Get one achievement by id
router.delete("/deleteachievements/:id", deleteAchievementById); // Delete achievement by id
router.put("/updateachievements/:id", updateAchievementById); // Update the achievement by id

export default router;
