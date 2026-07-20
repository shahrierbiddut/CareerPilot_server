"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceById = exports.getAllResources = void 0;
const Resource_1 = __importDefault(require("../models/Resource"));
// Get all resources
const getAllResources = async (req, res) => {
    try {
        const resources = await Resource_1.default.find({});
        res.status(200).json(resources);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
exports.getAllResources = getAllResources;
// Get single resource by ID
const getResourceById = async (req, res) => {
    try {
        const resource = await Resource_1.default.findOne({ id: req.params.id });
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }
        res.status(200).json(resource);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
exports.getResourceById = getResourceById;
//# sourceMappingURL=resourceController.js.map