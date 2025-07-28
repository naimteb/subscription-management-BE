import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserPermissions } from "../models/userModel.js";
dotenv.config();
import { asyncHandler } from "./asyncHandler.js";
export const verifyToken = asyncHandler(async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw {
        statusCode: 401,
        message: "Authorization token missing or malformed ",
      };
    }
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    throw {
      statusCode: 403,
      message: "Invalid or expired token",
    };
  }
});
