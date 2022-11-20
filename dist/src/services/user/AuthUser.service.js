"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const appError_1 = require("../../helpers/appError");
const client_1 = require("../../config/prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
class AuthUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield client_1.prisma.user.findFirst({ where: { email: email } });
            if (!user) {
                throw new appError_1.UnauthorizedError("Usuário ou senha inválida...");
            }
            if (user.password !== password) {
                throw new appError_1.UnauthorizedError("Usuário ou senha inválida...");
            }
            debugger;
            const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user.id, user: user }, "secret", {
                expiresIn: "7d"
            });
            return token;
        });
    }
}
exports.AuthUserService = AuthUserService;
