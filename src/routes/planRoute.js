import { Router } from "express";
import {
  createPlan,
  updatePlan,
  getPlansByMerchantId,
  deactivatePlan,
  getActivePlans,
} from "../controllers/planController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkPermissions } from "../middleware/checkPermissions.js";

const router = Router();

router.post("/", verifyToken, checkPermissions("createPlan"), createPlan);
router.put("/:id", verifyToken, checkPermissions("updatePlan"), updatePlan);
router.get(
  "/merchant/:merchantId",
  verifyToken,
  checkPermissions("viewPlan"),
  getPlansByMerchantId
);
router.delete(
  "/:id",
  verifyToken,
  checkPermissions("deletePlan"),
  deactivatePlan
);
router.get("/", verifyToken, checkPermissions("viewPlan"), getActivePlans);

export default router;
