"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veiacoRoutes = void 0;
const express_1 = require("express");
const CreateVeiaco_1 = require("../controllers/veiaco/CreateVeiaco");
const UpdateVeiaco_1 = require("../controllers/veiaco/UpdateVeiaco");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const GetVeiaco_1 = require("../controllers/veiaco/GetVeiaco");
const DeleteVeiaco_1 = require("../controllers/veiaco/DeleteVeiaco");
exports.veiacoRoutes = (0, express_1.Router)();
/****
 * Public routes */
/****
 * Private routes */
// GET
exports.veiacoRoutes.get("/:id", isAuthenticated_1.isAuthenticated, new GetVeiaco_1.GetVeiacoController().handle);
// POST
exports.veiacoRoutes.post("/", isAuthenticated_1.isAuthenticated, new CreateVeiaco_1.CreateVeiacoController().handle);
// PUT
exports.veiacoRoutes.put("/:id", isAuthenticated_1.isAuthenticated, new UpdateVeiaco_1.UpdateVeiacoController().handle);
// DELETE
exports.veiacoRoutes.delete("/:id", isAuthenticated_1.isAuthenticated, new DeleteVeiaco_1.DeleteVeiacoController().handle);
