import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import resourceRoutes from "./routes/resourceRoutes";
import authRoutes from "./routes/authRoutes";
import resumeRoutes from "./routes/resumeRoutes";
import Resource from "./models/Resource";
import { RESOURCES_DATA } from "./data/mockResources";

const app = express();
const PORT = Number(process.env.PORT ?? 5000);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// Database Seeder
const seedDatabase = async () => {
  try {
    const count = await Resource.countDocuments();
    if (count === 0) {
      console.log("🌱 Database is empty. Seeding resources...");
      await Resource.insertMany(RESOURCES_DATA as any);
      console.log("✅ Resources seeded successfully.");
    }
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};

if (process.env.MONGO_URI) {
  connectDB().then(() => {
    seedDatabase();
  });
} else {
  console.log("⚠️ MONGO_URI not set, skipping MongoDB connection");
}

// Routes
app.use("/api/resources", resourceRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/resumes", resumeRoutes);

app.get("/", (_, res) => res.send("Server is running!"));
app.get("/api/health", (_, res) =>
  res.json({ status: "ok", message: "Server is connected to the client" }),
);

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
