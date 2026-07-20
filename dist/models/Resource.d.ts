import mongoose, { Document } from "mongoose";
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
declare const Resource: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IResource, {}, {}, {}, mongoose.Document<unknown, {}, IResource, {}, mongoose.DefaultSchemaOptions> & IResource & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IResource>;
export default Resource;
//# sourceMappingURL=Resource.d.ts.map