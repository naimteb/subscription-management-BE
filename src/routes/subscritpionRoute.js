import { Router } from "express";
import {
  createSubscription,
  getSubscriptionByUserId,
  getSubscriptionByMerchantId,
  getSubscriptionByPlanId,
  cancelSubscription,
  getActiveSubscriptions,
} from "../controllers/subsciptionController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkPermissions } from "../middleware/checkPermissions.js";
const router = Router();

router.post(
  "/",
  verifyToken,
  checkPermissions("createSubscription"),
  createSubscription
);
router.get(
  "/user/:userId",
  verifyToken,
  checkPermissions("viewSubscription"),
  getSubscriptionByUserId
);
router.get(
  "/merchant/:merchantId",
  verifyToken,
  checkPermissions("viewSubscription"),
  getSubscriptionByMerchantId
);
router.get(
  "/plan/:planId",
  verifyToken,
  checkPermissions("viewSubscription"),
  getSubscriptionByPlanId
);
router.delete(
  "/:id",
  verifyToken,
  checkPermissions("deleteSubscription"),
  cancelSubscription
);
router.get(
  "/",
  verifyToken,
  checkPermissions("viewSubscription"),
  getActiveSubscriptions
);

export default router;
