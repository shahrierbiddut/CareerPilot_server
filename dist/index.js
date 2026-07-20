"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = __importDefault(require("./config/db"));
const resourceRoutes_1 = __importDefault(require("./routes/resourceRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const resumeRoutes_1 = __importDefault(require("./routes/resumeRoutes"));
const Resource_1 = __importDefault(require("./models/Resource"));
const mockResources_1 = require("./data/mockResources");
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT ?? 5000);
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Database Seeder
const seedDatabase = async () => {
    try {
        const count = await Resource_1.default.countDocuments();
        if (count === 0) {
            console.log("🌱 Database is empty. Seeding resources...");
            await Resource_1.default.insertMany(mockResources_1.RESOURCES_DATA);
            console.log("✅ Resources seeded successfully.");
        }
    }
    catch (error) {
        console.error("❌ Error seeding database:", error);
    }
};
if (process.env.MONGO_URI) {
    (0, db_1.default)().then(() => {
        seedDatabase();
    });
}
else {
    console.log("⚠️ MONGO_URI not set, skipping MongoDB connection");
}
// Routes
app.use("/api/resources", resourceRoutes_1.default);
app.use("/api/auth", authRoutes_1.default);
app.use("/api/resumes", resumeRoutes_1.default);
app.get("/", (_, res) => res.send("Server is running!"));
app.get("/api/health", (_, res) => res.json({ status: "ok", message: "Server is connected to the client" }));
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});
//# sourceMappingURL=index.js.map