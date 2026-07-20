import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// For demo purposes, we will just return success for any register/login
// since we don't need real password hashing for this assignment unless specified.

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required." });
    return;
  }
  
  const token = jwt.sign({ email }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1d" });
  
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

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { fullName, email, password } = req.body;
  if (!email || !password || !fullName) {
    res.status(400).json({ message: "All fields are required." });
    return;
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1d" });

  // We do not set the cookie here because we want the user to log in manually after registration.

  res.status(201).json({
    message: "Registration successful",
    token,
    user: { email, name: fullName }
  });
};

export const logoutUser = async (req: Request, res: Response): Promise<void> => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
