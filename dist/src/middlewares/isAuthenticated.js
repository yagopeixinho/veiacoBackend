"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../helpers/appError");
function isAuthenticated(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization)
        throw new appError_1.UnauthorizedError("Acesso negado!");
    const token = authorization.replace("Bearer", "").trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, "secret");
        const { id } = data;
        req.id = id;
        return next();
    }
    catch (err) {
        throw new appError_1.UnauthorizedError("Acesso negado!");
    }
}
exports.isAuthenticated = isAuthenticated;
