import {
  createPlan,
  updatePlan,
  getPlansByMerchantId,
  deactivatePlan,
  getActivePlans,
} from "../models/planModel.js";

export async function createPlanService(data) {
  return await createPlan(data);
}
export async function updatePlanService(id, data) {
  return await updatePlan(id, data);
}
export async function getPlansByMerchantIdService(merchantId) {
  return await getPlansByMerchantId(merchantId);
}
export async function deactivatePlanService(id) {
  return await deactivatePlan(id);
}
export async function getActivePlansService() {
  return await getActivePlans();
}
