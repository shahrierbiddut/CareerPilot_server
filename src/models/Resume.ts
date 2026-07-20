import mongoose, { Schema, Document } from "mongoose";

export interface IResume extends Document {
  title: string;
  description?: string;
  content: string;
  category: string;
  experienceLevel: string;
  skills: string[];
  targetJobRole?: string;
  fileUrl?: string;
  notes?: string;
  
  resumeScore: number;
  atsScore: number;
  readabilityScore: number;
  skillMatchPercent: number;
  industryMatchPercent: number;
  
  status: "draft" | "analyzed";
  
  aiAnalysis?: {
    professionalSummary: string;
    strengths: string[];
    weaknesses: string[];
    missingSkills: string[];
    grammarSuggestions: string[];
    formattingSuggestions: string[];
    keywordOptimization: string[];
    atsImprovementTips: string[];
    recommendedJobRoles: string[];
    careerSuggestions: string[];
    priorityImprovements: string[];
    overallFeedback: string;
  };
  
  userId: string; // Temporarily simple string, ideally ObjectId mapping to User
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema = new Schema({
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

const Resume = mongoose.models.Resume || mongoose.model<IResume>("Resume", ResumeSchema);
export default Resume as mongoose.Model<IResume>;
