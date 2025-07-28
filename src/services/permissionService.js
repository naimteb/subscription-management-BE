import { getPermissions } from "../models/permissionModel.js";

export async function getPermissionsService() {
  return await getPermissions();
}
