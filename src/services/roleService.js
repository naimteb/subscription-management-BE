import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
  addToRolePermissionsTable,
  updateRolePermissionsTable,
} from "../models/roleModel.js";

export async function createRoleService(data) {
  const role = await createRole(data);

  if (data.permissions && data.permissions.length > 0) {
    await addToRolePermissionsTable(role.id, data.permissions);
  }

  return role;
}

export async function getAllRolesService() {
  return await getAllRoles();
}

export async function getRoleByIdService(id) {
  return await getRoleById(id);
}

export async function updateRoleService(id, data) {
  const role = await updateRole(id, data);
  if (data.permissions && data.permissions.length > 0) {
    await updateRolePermissionsTable(role.id, data.permissions);
  }
  return role;
}

export async function deleteRoleService(id) {
  return await deleteRole(id);
}
