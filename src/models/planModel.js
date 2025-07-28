import { pool } from "../../db.js";
import {
  sqlifyKeyValuePairsForCreate,
  sqlifyKeyValuePairsForUpdate,
} from "../../utils/sqlUtils.js";
export async function createPlan(data) {
  const { values, columns, placeholders } = sqlifyKeyValuePairsForCreate(data);
  const query = `INSERT INTO plan (${columns}) VALUES (${placeholders}) RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function updatePlan(id, data) {
  const { setClause, timestampClause, fields, values } =
    sqlifyKeyValuePairsForUpdate(data);
  const query = `UPDATE plan SET ${setClause}, ${timestampClause} WHERE id = $${
    fields.length + 1
  } AND "isActive" = TRUE RETURNING *`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
}
export async function getPlansByMerchantId(merchantId) {
  const query = `SELECT * FROM plan WHERE "merchantId" = $1`;
  const result = await pool.query(query, [merchantId]);
  return result.rows;
}

export async function deactivatePlan(id) {
  const query = `update plan set "isActive"=false where id=$1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}
export async function getActivePlans() {
  const query = `SELECT * FROM plan WHERE "isActive" = true`;
  const result = await pool.query(query);
  return result.rows;
}
