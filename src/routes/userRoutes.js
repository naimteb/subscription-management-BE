import express from "express";
import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deactivateUser,
  getAllUsers,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkPermissions } from "../middleware/checkPermissions.js";

const router = express.Router();

router.post("/", verifyToken, checkPermissions("createUser"), createUser);
router.get(
  "/email/:email",
  verifyToken,
  checkPermissions("viewUser"),
  getUserByEmail
);
router.get("/:id", verifyToken, checkPermissions("viewUser"), getUserById);
router.put("/:id", verifyToken, checkPermissions("updateUser"), updateUser);
router.delete(
  "/:id",
  verifyToken,
  checkPermissions("deleteUser"),
  deactivateUser
);
router.get("/", verifyToken, checkPermissions("viewUser"), getAllUsers);

export default router;
