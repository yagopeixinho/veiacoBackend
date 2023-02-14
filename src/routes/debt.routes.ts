import { Router } from "express";
import { CreateDebtController } from "../controllers/debt/CreateDebt";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const debtRoutes = Router();

/****
 * Public routes */

/****
 * Private routes */

// POST
debtRoutes.post("/", isAuthenticated, new CreateDebtController().handle);
