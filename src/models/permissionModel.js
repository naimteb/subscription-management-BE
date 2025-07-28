import { pool } from "../config/db.js";

export async function getPermissions() {
  const result = await pool.query("select * from permissions");
  return result.rows;
}
