import express from "express";
import { 
  getResumes, 
  getResumeById, 
  createResume, 
  updateResume, 
  deleteResume,
  analyzeResume
} from "../controllers/resumeController";

const router = express.Router();

router.get("/", getResumes);
router.post("/", createResume);
router.get("/:id", getResumeById);
router.put("/:id", updateResume);
router.delete("/:id", deleteResume);
router.post("/:id/analyze", analyzeResume);

export default router;
