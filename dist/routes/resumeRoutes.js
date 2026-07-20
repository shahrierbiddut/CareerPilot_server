"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resumeController_1 = require("../controllers/resumeController");
const router = express_1.default.Router();
router.get("/", resumeController_1.getResumes);
router.post("/", resumeController_1.createResume);
router.get("/:id", resumeController_1.getResumeById);
router.put("/:id", resumeController_1.updateResume);
router.delete("/:id", resumeController_1.deleteResume);
router.post("/:id/analyze", resumeController_1.analyzeResume);
exports.default = router;
//# sourceMappingURL=resumeRoutes.js.map