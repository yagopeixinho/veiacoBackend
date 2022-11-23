import { Router } from "express";
import { AuthUserController } from "../controllers/user/AuthUser";
import { CreateUserController } from "../controllers/user/CreateUser";
import { GetAllUsersController } from "../controllers/user/GetAllUsers";
import { GetLoggedUserController } from "../controllers/user/GetLoggedUser";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const userRoutes = Router();

/****
 * Public routes */

// GET
userRoutes.get("/auth", isAuthenticated, new GetLoggedUserController().handle);
// POST
userRoutes.post("/", new CreateUserController().handle);
userRoutes.post("/auth", new AuthUserController().handle);

/****
 * Private routes */
userRoutes.get("/", isAuthenticated, new GetAllUsersController().handle);
