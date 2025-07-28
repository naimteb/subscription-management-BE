import {
  createRoleService,
  getAllRolesService,
  getRoleByIdService,
  updateRoleService,
  deleteRoleService,
} from "../services/roleService.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createRole = asyncHandler(async (req, res) => {
  const data = req.body;
  const role = await createRoleService(data);
  res.status(201).json(role);
});

export const getAllRoles = asyncHandler(async (req, res) => {
  const roles = await getAllRolesService();
  res.status(200).json(roles);
});

export const getRoleById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const role = await getRoleByIdService(id);
  if (!role) {
    return res.status(404).json({ message: "Role not found" });
  }
  res.status(200).json(role);
});

export const updateRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await updateRoleService(id, data);
  if (!updated) {
    return res.status(404).json({ message: "Role not found" });
  }
  res.status(200).json(updated);
});

export const deleteRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleted = await deleteRoleService(id);
  if (!deleted) {
    return res.status(404).json({ message: "Role not found" });
  }
  res.status(204).send();
});
