"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ResumeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    content: { type: String, required: true },
    category: { type: String, required: true },
    experienceLevel: { type: String, required: true },
    skills: { type: [String], default: [] },
    targetJobRole: { type: String },
    fileUrl: { type: String },
    notes: { type: String },
    resumeScore: { type: Number, default: 0 },
    atsScore: { type: Number, default: 0 },
    readabilityScore: { type: Number, default: 0 },
    skillMatchPercent: { type: Number, default: 0 },
    industryMatchPercent: { type: Number, default: 0 },
    status: { type: String, enum: ["draft", "analyzed"], default: "draft" },
    aiAnalysis: {
        professionalSummary: { type: String },
        strengths: { type: [String] },
        weaknesses: { type: [String] },
        missingSkills: { type: [String] },
        grammarSuggestions: { type: [String] },
        formattingSuggestions: { type: [String] },
        keywordOptimization: { type: [String] },
        atsImprovementTips: { type: [String] },
        recommendedJobRoles: { type: [String] },
        careerSuggestions: { type: [String] },
        priorityImprovements: { type: [String] },
        overallFeedback: { type: String },
    },
    userId: { type: String, required: true },
}, { timestamps: true });
const Resume = mongoose_1.default.models.Resume || mongoose_1.default.model("Resume", ResumeSchema);
exports.default = Resume;
//# sourceMappingURL=Resume.js.map