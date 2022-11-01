import { Router } from "express";
import { userRoutes } from "./user.routes";

export const router = Router();

/************
 * User router
 */ router.use("/users", userRoutes);
