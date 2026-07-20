import mongoose, { Document } from "mongoose";
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
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IResume>;
export default _default;
//# sourceMappingURL=Resume.d.ts.map