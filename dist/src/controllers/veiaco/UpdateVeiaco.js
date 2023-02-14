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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVeiacoController = void 0;
const UpdateVeiaco_service_1 = require("../../services/veiaco/UpdateVeiaco.service");
class UpdateVeiacoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, phone } = req.body;
            const { id } = req.params;
            const _updateVeiacoService = new UpdateVeiaco_service_1.UpdateVeiacoService();
            const response = yield _updateVeiacoService.execute({
                name,
                phone,
                veiacoId: parseInt(id),
            });
            res.status(201).json(response);
        });
    }
}
exports.UpdateVeiacoController = UpdateVeiacoController;
