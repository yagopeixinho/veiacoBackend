import { Router } from "express";
import { AuthUserController } from "../controllers/user/AuthUser";
import { CreateUserController } from "../controllers/user/CreateUser";
import { GetAllUsersController } from "../controllers/user/GetAllUsers";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.post("/auth", new AuthUserController().handle);

userRoutes.get("/", isAuthenticated, new GetAllUsersController().handle);
