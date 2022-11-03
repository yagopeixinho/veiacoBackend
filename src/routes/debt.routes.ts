import { Router } from "express";
import { CreateDebtController } from "../controllers/debt/CreateDebt";

export const debtRoutes = Router();

debtRoutes.post("/", new CreateDebtController().handle);
