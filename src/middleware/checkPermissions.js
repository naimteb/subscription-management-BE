import { getUserPermissions } from "../models/userModel.js";
export async function checkPermissions(permissionName) {
  return async (req, res, next) => {
    const userPermissions = await getUserPermissions(req.user.id);
    console.log(userPermissions);
    if (!userPermissions.includes(permissionName)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user.permissions = userPermissions;
    next();
  };
}
