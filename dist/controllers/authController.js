"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.registerUser = exports.loginUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// For demo purposes, we will just return success for any register/login
// since we don't need real password hashing for this assignment unless specified.
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required." });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1d" });
    res.cookie("token", token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });
    res.status(200).json({
        message: "Login successful",
        token,
        user: { email, name: email.split("@")[0] }
    });
};
exports.loginUser = loginUser;
const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;
    if (!email || !password || !fullName) {
        res.status(400).json({ message: "All fields are required." });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1d" });
    // We do not set the cookie here because we want the user to log in manually after registration.
    res.status(201).json({
        message: "Registration successful",
        token,
        user: { email, name: fullName }
    });
};
exports.registerUser = registerUser;
const logoutUser = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
};
exports.logoutUser = logoutUser;
//# sourceMappingURL=authController.js.map