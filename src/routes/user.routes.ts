import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUser";
import { GetAllUsersController } from "../controllers/user/GetAllUsers";

export const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);

userRoutes.get("/", new GetAllUsersController().handle);
