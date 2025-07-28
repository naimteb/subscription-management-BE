import { Router } from "express";
import {
  createMerchant,
  getMerchantById,
  getMerchantByName,
  getMerchants,
  updateMerchant,
  deactivateMerchant,
} from "../controllers/merchantController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkPermissions } from "../middleware/checkPermissions.js";
const router = Router();

router.post(
  "/",
  verifyToken,
  checkPermissions("createMerchant"),
  createMerchant
);
router.get(
  "/:id",
  verifyToken,
  checkPermissions("viewMerchant"),
  getMerchantById
);
router.get("/", verifyToken, checkPermissions("viewMerchant"), getMerchants);
router.get(
  "/name/:name",
  verifyToken,
  checkPermissions("viewMerchant"),
  getMerchantByName
);
router.put(
  "/:id",
  verifyToken,
  checkPermissions("updateMerchant"),
  updateMerchant
);
router.delete(
  "/:id",
  verifyToken,
  checkPermissions("deleteMerchant"),
  deactivateMerchant
);
export default router;
