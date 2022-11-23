import { Router } from "express";
import { CreateVeiacoController } from "../controllers/veiaco/CreateVeiaco";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const veiacoRoutes = Router();


/****
 * Public routes */

/****
 * Private routes */

// GET
veiacoRoutes.get("/debts", isAuthenticated)
// POST
veiacoRoutes.post("/", isAuthenticated, new CreateVeiacoController().handle);


