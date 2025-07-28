import {
  createSubscription,
  getSubscriptionByUserId,
  getSubscriptionByMerchantId,
  getSubscriptionByPlanId,
  cancelSubscription,
  getActiveSubscriptions,
} from "../models/subscriptionModel.js";

export async function createSubscriptionService(data) {
  return await createSubscription(data);
}
export async function getSubscriptionByUserIdService(userId) {
  return await getSubscriptionByUserId(userId);
}
export async function getSubscriptionByMerchantIdService(merchantId) {
  return await getSubscriptionByMerchantId(merchantId);
}
export async function getSubscriptionByPlanIdService(planId) {
  return await getSubscriptionByPlanId(planId);
}
export async function cancelSubscriptionService(id) {
  return await cancelSubscription(id);
}
export async function getActiveSubscriptionsService() {
  return await getActiveSubscriptions();
}
