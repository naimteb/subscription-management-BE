import {
  createPlanService,
  updatePlanService,
  getPlansByMerchantIdService,
  deactivatePlanService,
  getActivePlansService,
} from "../services/planService.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createPlan = asyncHandler(async (req, res) => {
  const data = req.body;
  const plan = await createPlanService(data);
  res.status(201).json(plan);
});
export const updatePlan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const plan = await updatePlanService(id, data);
  res.status(200).json(plan);
});
export const getPlansByMerchantId = asyncHandler(async (req, res) => {
  const { merchantId } = req.params;
  const plans = await getPlansByMerchantIdService(merchantId);
  res.status(200).json(plans);
});
export const deactivatePlan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const plan = await deactivatePlanService(id);
  res.status(200).json(plan);
});
export const getActivePlans = asyncHandler(async (req, res) => {
  const plans = await getActivePlansService();
  res.status(200).json(plans);
});
