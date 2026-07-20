import { Request, Response } from "express";
import Resource from "../models/Resource";

// Get all resources
export const getAllResources = async (req: Request, res: Response): Promise<void> => {
  try {
    const resources = await (Resource as any).find({});
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get single resource by ID
export const getResourceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const resource = await (Resource as any).findOne({ id: req.params.id });
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
