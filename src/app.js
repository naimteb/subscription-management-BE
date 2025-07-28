import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import merchantRoutes from "./routes/merchantRoute.js";
import planRoute from "./routes/planRoute.js";
import subscriptionRoute from "./routes/subscritpionRoute.js";
import roleRoute from "./routes/roleRoute.js";
import permissionRoute from "./routes/permissionRoute.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);
app.use("/api/merchants", merchantRoutes);
app.use("/api/plans", planRoute);
app.use("/api/subscriptions", subscriptionRoute);
app.use("/api/roles", roleRoute);
app.use("/api/permissions", permissionRoute);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//pull
