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
exports.DeleteVeiacoController = void 0;
const DeleteVeiaco_service_1 = require("../../services/veiaco/DeleteVeiaco.service");
class DeleteVeiacoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _deleteVeiacoService = new DeleteVeiaco_service_1.DeleteVeiacoService();
            yield _deleteVeiacoService.execute(parseInt(id)).then(() => {
                return { msg: "Usuário deletado com sucesso", status: 200 };
            });
        });
    }
}
exports.DeleteVeiacoController = DeleteVeiacoController;
