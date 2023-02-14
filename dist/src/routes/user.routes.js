"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const AuthUser_1 = require("../controllers/user/AuthUser");
const CreateUser_1 = require("../controllers/user/CreateUser");
const GetAllUsers_1 = require("../controllers/user/GetAllUsers");
const GetLoggedUser_1 = require("../controllers/user/GetLoggedUser");
const GetUserVeiacos_1 = __importDefault(require("../controllers/user/GetUserVeiacos"));
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
exports.userRoutes = (0, express_1.Router)();
/****
 * Public routes */
// POST
exports.userRoutes.post("/", new CreateUser_1.CreateUserController().handle);
exports.userRoutes.post("/auth", new AuthUser_1.AuthUserController().handle);
/****
 * Private routes */
// GET
exports.userRoutes.get("/auth", isAuthenticated_1.isAuthenticated, new GetLoggedUser_1.GetLoggedUserController().handle);
exports.userRoutes.get("/", isAuthenticated_1.isAuthenticated, new GetAllUsers_1.GetAllUsersController().handle);
exports.userRoutes.get("/veiacos", isAuthenticated_1.isAuthenticated, new GetUserVeiacos_1.default().handle);
