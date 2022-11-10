import { Router } from "express";
import { debtRoutes } from "./debt.routes";
import { userRoutes } from "./user.routes";

export const router = Router();

/****
 * User router
 */ router.use("/users", userRoutes);

/****
 * Debt router
 */ router.use("/debt", debtRoutes);
