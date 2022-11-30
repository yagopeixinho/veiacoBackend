import { Router } from "express";
import { CreateVeiacoController } from "../controllers/veiaco/CreateVeiaco";
import { UpdateVeiacoController } from "../controllers/veiaco/UpdateVeiaco";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { GetVeiacoController } from "../controllers/veiaco/GetVeiaco";

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

// PUT
veiacoRoutes.put("/:id", isAuthenticated, new UpdateVeiacoController().handle);
