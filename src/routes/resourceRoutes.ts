import { Router } from "express";
import { getAllResources, getResourceById } from "../controllers/resourceController";

const router = Router();

router.get("/", getAllResources);
router.get("/:id", getResourceById);

export default router;
