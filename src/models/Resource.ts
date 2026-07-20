import mongoose, { Schema, Document } from "mongoose";

export interface IReview {
  id: string;
  authorName: string;
  authorAvatar: string;
  authorRole: string;
  rating: number;
  date: string;
  comment: string;
}

export interface IResource extends Document {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  type: string;
  level: string;
  industry: string;
  difficulty: string;
  price: string;
  date: string;
  readTime: string;
  rating: number;
  image: string;
  gradient: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  description: string;
  whatYouLearn: string[];
  tableOfContents: string[];
  tags: string[];
  gallery?: string[];
  objectives?: string[];
  summary?: string;
  language?: string;
  format?: string;
  lastUpdated?: string;
  skills?: string[];
  benefits?: string[];
  reviews?: IReview[];
}

const ReviewSchema = new Schema({
  id: { type: String, required: true },
  authorName: { type: String, required: true },
  authorAvatar: { type: String, required: true },
  authorRole: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: String, required: true },
  comment: { type: String, required: true },
}, { _id: false });

const ResourceSchema = new Schema({
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

const Resource = mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);
export default Resource;
