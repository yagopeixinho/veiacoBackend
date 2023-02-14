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
exports.CreateDebtController = void 0;
const CreateDebt_service_1 = require("../../services/debt/CreateDebt.service");
class CreateDebtController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, value, date, user_id, veiaco_id } = req.body;
            console.log("Passou pelo CreateDebtController");
            const _createDebtService = new CreateDebt_service_1.CreateDebtService();
            const response = yield _createDebtService.execute({
                title,
                value,
                date,
                user_id,
                veiaco_id,
            });
            console.dir(response);
            res.status(201).json(response);
        });
    }
}
exports.CreateDebtController = CreateDebtController;
