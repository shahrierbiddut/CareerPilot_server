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
const ReviewSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    authorName: { type: String, required: true },
    authorAvatar: { type: String, required: true },
    authorRole: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: String, required: true },
    comment: { type: String, required: true },
}, { _id: false });
const ResourceSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    level: { type: String, required: true },
    industry: { type: String, required: true },
    difficulty: { type: String, required: true },
    price: { type: String, required: true },
    date: { type: String, required: true },
    readTime: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
    gradient: { type: String, required: true },
    author: {
        name: { type: String, required: true },
        avatar: { type: String, required: true },
        role: { type: String, required: true },
    },
    description: { type: String, required: true },
    whatYouLearn: [{ type: String }],
    tableOfContents: [{ type: String }],
    tags: [{ type: String }],
    gallery: [{ type: String }],
    objectives: [{ type: String }],
    summary: { type: String },
    language: { type: String },
    format: { type: String },
    lastUpdated: { type: String },
    skills: [{ type: String }],
    benefits: [{ type: String }],
    reviews: [ReviewSchema],
}, { timestamps: true });
const Resource = mongoose_1.default.models.Resource || mongoose_1.default.model("Resource", ResourceSchema);
exports.default = Resource;
//# sourceMappingURL=Resource.js.map