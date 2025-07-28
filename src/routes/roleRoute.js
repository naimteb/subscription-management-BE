import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkPermissions } from "../middleware/checkPermissions.js";
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../controllers/roleController.js";

const router = express.Router();

router.post("/", verifyToken, checkPermissions("createRole"), createRole);
router.get("/", verifyToken, checkPermissions("viewRole"), getAllRoles);
router.get("/:id", verifyToken, checkPermissions("viewRole"), getRoleById);
router.put("/:id", verifyToken, checkPermissions("updateRole"), updateRole);
router.delete("/:id", verifyToken, checkPermissions("deleteRole"), deleteRole);

export default router;
