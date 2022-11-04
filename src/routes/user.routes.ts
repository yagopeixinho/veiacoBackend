import { Router } from "express";
import { AuthUserController } from "../controllers/user/AuthUser";
import { CreateUserController } from "../controllers/user/CreateUser";
import { GetAllUsersController } from "../controllers/user/GetAllUsers";

export const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.post("/auth", new AuthUserController().handle);

userRoutes.get("/", new GetAllUsersController().handle);
