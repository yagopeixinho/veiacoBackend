import { Router } from "express";
import { CreateVeiacoController } from "../controllers/veiaco/CreateVeiaco";
import GetVeiacoController from "../controllers/veiaco/GetVeiaco";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const veiacoRoutes = Router();

/****
 * Public routes */

/****
 * Private routes */

// GET
veiacoRoutes.get("/debts", isAuthenticated);
veiacoRoutes.get("/:id", isAuthenticated, new GetVeiacoController().handle);

// POST
veiacoRoutes.post("/", isAuthenticated, new CreateVeiacoController().handle);
