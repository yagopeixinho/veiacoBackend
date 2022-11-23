import { Router } from "express";
import { CreateVeiacoController } from "../controllers/veiaco/CreateVeiaco";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const veiacoRoutes = Router();

veiacoRoutes.post("/", isAuthenticated, new CreateVeiacoController().handle);
