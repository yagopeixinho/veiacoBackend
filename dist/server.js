"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const error_1 = require("./src/middlewares/error");
const routes_1 = require("./src/routes");
const cors = require("cors");
require("dotenv").config();
const app = (0, express_1.default)();
// App config
app.use(express_1.default.json());
app.use(cors());
app.use(routes_1.router);
// Global middlewares
app.use(error_1.errorMiddleware);
app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`);
});
