import { getPermissionsService } from "../services/permissionService.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const getPermissions = asyncHandler(async (req, res) => {
  const permissions = await getPermissionsService();
  res.status(200).json(permissions);
});
