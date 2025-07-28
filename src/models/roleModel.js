import { pool } from "../../db.js";

export async function createRole(data) {
  const result = await pool.query(
    "INSERT INTO roles (name) VALUES ($1) RETURNING *",
    [data.name]
  );
  return result.rows[0];
}

export async function getAllRoles() {
  const result = await pool.query("SELECT * FROM roles");
  return result.rows;
}

export async function getRoleById(id) {
  const result = await pool.query("SELECT * FROM roles WHERE id = $1", [id]);
  return result.rows[0];
}

export async function updateRole(id, data) {
  const result = await pool.query(
    "UPDATE roles SET name = $1 WHERE id = $2 RETURNING *",
    [data.name, id]
  );
  return result.rows[0];
}

export async function deleteRole(id) {
  const result = await pool.query(
    "DELETE FROM roles WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}
export async function addToRolePermissionsTable(roleId, permissions) {
  // await pool.query("DELETE FROM role_permissions WHERE 'roleId' = $1", [
  //   roleId,
  // ]);

  for (const permissionId of permissions) {
    await pool.query(
      "insert into role_permissions ('roleId', 'permissionId') values ($1, $2)",
      [roleId, permissionId]
    );
  }
  return true;
}
export async function updateRolePermissionsTable(roleId, permissions) {
  const storedId = await pool.query(
    `select id from permissions p join role_permissions rp on p.id=rp."permissionId" where rp.roleId = $1`,
    [roleId]
  );

  const resultToAdd = permissions.filter((val) => storedId.rows.includes(val));
  await pool.query(
    "insert into role_permissions ('roleId', 'permissionId') values ($1, $2)",
    [roleId, resultToAdd.map((val) => val.id)]
  );
  const resultToRemove = storedId.rows.filter(
    (val) => !permissions.includes(val)
  );
  await pool.query(
    "delete from role_permissions where 'roleId' = $1 and 'permissionId' = $2",
    [roleId, resultToRemove.map((val) => val.id)]
  );
  return true;
}
