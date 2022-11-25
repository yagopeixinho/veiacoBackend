import { Router } from "express";
import { AuthUserController } from "../controllers/user/AuthUser";
import { CreateUserController } from "../controllers/user/CreateUser";
import { GetAllUsersController } from "../controllers/user/GetAllUsers";
import { GetLoggedUserController } from "../controllers/user/GetLoggedUser";
import GetUserVeiacosController from "../controllers/user/GetUserVeiacos";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const userRoutes = Router();

/****
 * Public routes */

// POST
userRoutes.post("/", new CreateUserController().handle);
userRoutes.post("/auth", new AuthUserController().handle);

/****
 * Private routes */
// GET
userRoutes.get("/auth", isAuthenticated, new GetLoggedUserController().handle);
userRoutes.get("/", isAuthenticated, new GetAllUsersController().handle);
userRoutes.get(
  "/veiacos",
  isAuthenticated,
  new GetUserVeiacosController().handle
);
