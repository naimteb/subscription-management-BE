import {
  createSubscriptionService,
  getSubscriptionByUserIdService,
  getSubscriptionByMerchantIdService,
  getSubscriptionByPlanIdService,
  cancelSubscriptionService,
  getActiveSubscriptionsService,
} from "../services/subscriptionService.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createSubscription = asyncHandler(async (req, res) => {
  const data = req.body;
  const subscription = await createSubscriptionService(data);
  res.status(201).json(subscription);
});
export const getSubscriptionByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const subscription = await getSubscriptionByUserIdService(userId);
  res.status(200).json(subscription);
});
export const getSubscriptionByMerchantId = asyncHandler(async (req, res) => {
  const { merchantId } = req.params;
  const subscription = await getSubscriptionByMerchantIdService(merchantId);
  res.status(200).json(subscription);
});
export const getSubscriptionByPlanId = asyncHandler(async (req, res) => {
  const { planId } = req.params;
  const subscription = await getSubscriptionByPlanIdService(planId);
  res.status(200).json(subscription);
});
export const cancelSubscription = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subscription = await cancelSubscriptionService(id);
  res.status(200).json(subscription);
});
export const getActiveSubscriptions = asyncHandler(async (req, res) => {
  const subscriptions = await getActiveSubscriptionsService();
  res.status(200).json(subscriptions);
});
