import express from "express";
import { getPermissions } from "../controllers/permissionController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkPermissions } from "../middleware/checkPermissions.js";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  checkPermissions("viewPermissions"),
  getPermissions
);

export default router;
