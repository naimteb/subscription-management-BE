import {
  createMerchantService,
  getMerchantByIdService,
  getMerchantByNameService,
  getMerchantsService,
  updateMerchantService,
  deactivateMerchantService,
} from "../services/merchantService.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createMerchant = asyncHandler(async (req, res) => {
  const data = req.body;

  const merchant = await createMerchantService(data);
  res.status(201).json(merchant);
});

export const getMerchantById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const merchant = await getMerchantByIdService(id);
  res.status(200).json(merchant);
});

export const getMerchantByName = asyncHandler(async (req, res) => {
  const { name } = req.params;
  const merchant = await getMerchantByNameService(name);
  res.status(200).json(merchant);
});
export const getMerchants = asyncHandler(async (req, res) => {
  const merchants = await getMerchantsService();
  res.status(200).json(merchants);
});
export const updateMerchant = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const merchant = await updateMerchantService(id, data);
  res.status(200).json(merchant);
});
export const deactivateMerchant = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const merchant = await deactivateMerchantService(id);
  res.status(200).json(merchant);
});
