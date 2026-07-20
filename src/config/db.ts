import dns from "dns";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.log("⚠️ MONGO_URI not set, skipping MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
  }
};

export default connectDB;
