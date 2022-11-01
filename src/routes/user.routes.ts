import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUser";

export const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
