import { Request, Response } from "express";
import Resume from "../models/Resume";

export const getResumes = async (req: Request, res: Response) => {
  try {
    // Ideally use req.user.id if auth middleware is in place
    // For now, allow a query param or default if no auth middleware
    const userId = (req as any).user?.email || (req.query.userId as string) || "anonymous";
    const resumes = await Resume.find({ userId }).sort({ updatedAt: -1 });
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resumes", error });
  }
};

export const getResumeById = async (req: Request, res: Response) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resume", error });
  }
};

export const createResume = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.email || req.body.userId || "anonymous";
    const resume = new Resume({ ...req.body, userId });
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Failed to create resume", error });
  }
};

export const updateResume = async (req: Request, res: Response) => {
  try {
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Failed to update resume", error });
  }
};

export const deleteResume = async (req: Request, res: Response) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete resume", error });
  }
};

export const analyzeResume = async (req: Request, res: Response) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    
    // Realistic AI mock response
    const mockAnalysis = {
      professionalSummary: "An experienced professional with a solid background, though the summary could be more tailored to specific achievements rather than generic duties.",
      strengths: ["Clear formatting", "Relevant experience", "Good use of action verbs"],
      weaknesses: ["Missing quantified metrics", "Some passive voice usage", "Lacking modern tech stack keywords"],
      missingSkills: ["React", "TypeScript", "Agile Methodologies", "Cloud Architecture"],
      grammarSuggestions: ["Change 'responsible for' to 'led'", "Fix inconsistent capitalization in job titles"],
      formattingSuggestions: ["Use consistent bullet point styles", "Ensure dates are right-aligned for better scanning"],
      keywordOptimization: ["Include 'scalable', 'cross-functional', and 'CI/CD'"],
      atsImprovementTips: ["Avoid complex tables or columns", "Use standard section headers like 'Experience' instead of 'Work History'"],
      recommendedJobRoles: ["Senior Frontend Developer", "Full Stack Engineer", "Technical Lead"],
      careerSuggestions: ["Consider getting AWS Certified", "Contribute to open source to bolster your portfolio"],
      priorityImprovements: ["Quantify achievements in your most recent role", "Add a dedicated Skills section at the top"],
      overallFeedback: "A strong foundation, but needs more quantifiable achievements to stand out in a competitive market."
    };

    resume.aiAnalysis = mockAnalysis;
    resume.status = "analyzed";
    
    // Generate random realistic scores based on a base score of 60-80
    const baseScore = Math.floor(Math.random() * 20) + 60;
    resume.resumeScore = baseScore + 10;
    resume.atsScore = baseScore + 15;
    resume.readabilityScore = baseScore + 5;
    resume.skillMatchPercent = baseScore;
    resume.industryMatchPercent = baseScore + 12;

    await resume.save();
    
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Failed to analyze resume", error });
  }
};
