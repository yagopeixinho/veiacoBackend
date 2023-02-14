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
exports.CreateVeiacoController = void 0;
const CreateVeiaco_service_1 = require("../../services/veiaco/CreateVeiaco.service");
class CreateVeiacoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, phone, userId } = req.body;
            const _createVeiacoService = new CreateVeiaco_service_1.CreateVeiacoService();
            const response = yield _createVeiacoService.execute({
                name,
                phone,
                userId,
            });
            res.status(201).json(response);
        });
    }
}
exports.CreateVeiacoController = CreateVeiacoController;
