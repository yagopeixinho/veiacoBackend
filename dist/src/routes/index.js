"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const debt_routes_1 = require("./debt.routes");
const user_routes_1 = require("./user.routes");
const veiaco_routes_1 = require("./veiaco.routes");
exports.router = (0, express_1.Router)();
/****
 * User router
 */ exports.router.use("/users", user_routes_1.userRoutes);
/****
 * Debt router
 */ exports.router.use("/debt", debt_routes_1.debtRoutes);
/****
 * Veiaco router
 */ exports.router.use("/veiacos", veiaco_routes_1.veiacoRoutes);
