"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debtRoutes = void 0;
const express_1 = require("express");
const CreateDebt_1 = require("../controllers/debt/CreateDebt");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
exports.debtRoutes = (0, express_1.Router)();
/****
 * Public routes */
/****
 * Private routes */
// POST
exports.debtRoutes.post("/", isAuthenticated_1.isAuthenticated, new CreateDebt_1.CreateDebtController().handle);
