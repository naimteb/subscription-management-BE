import { pool } from "../../db.js";
import { sqlifyKeyValuePairsForCreate } from "../../utils/sqlUtils.js";
export async function createSubscription(data) {
  const { values, columns, placeholders } = sqlifyKeyValuePairsForCreate(data);
  const query = `INSERT INTO subscription (${columns}) VALUES (${placeholders}) RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows[0];
}
// user subscription getter
export async function getSubscriptionByUserId(userId) {
  const query = `SELECT * FROM subscription WHERE "subscriberId" = $1 and "subscriberType" = 'user'`;
  const result = await pool.query(query, [userId]);
  return result.rows[0];
}

// merchant subscription getter
export async function getSubscriptionByMerchantId(merchantId) {
  const query = `SELECT * FROM subscription WHERE "subscriberId" = $1 and "subscriberType" = 'merchant'`;
  const result = await pool.query(query, [merchantId]);
  return result.rows[0];
}
//
export async function getSubscriptionByPlanId(planId) {
  const query = `SELECT * FROM subscription WHERE "planId" = $1`;
  const result = await pool.query(query, [planId]);
  return result.rows[0];
}
export async function cancelSubscription(id) {
  const query = `UPDATE subscription SET "cancelledAt" = CURRENT_TIMESTAMP WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

export async function getActiveSubscriptions() {
  const query = `SELECT * FROM subscription WHERE "cancelledAt" IS NULL`;
  const result = await pool.query(query);
  return result.rows;
}
