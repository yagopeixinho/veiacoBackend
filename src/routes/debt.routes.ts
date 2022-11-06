import { Router } from "express";
import { CreateDebtController } from "../controllers/debt/CreateDebt";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const debtRoutes = Router();

debtRoutes.post("/", isAuthenticated, new CreateDebtController().handle);
