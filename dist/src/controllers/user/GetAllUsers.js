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
exports.GetAllUsersController = void 0;
const GetAllUsers_service_1 = require("../../services/user/GetAllUsers.service");
class GetAllUsersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _getAllUsersService = new GetAllUsers_service_1.GetAllUsersService();
            const response = yield _getAllUsersService.execute();
            res.status(201).json(response);
        });
    }
}
exports.GetAllUsersController = GetAllUsersController;
