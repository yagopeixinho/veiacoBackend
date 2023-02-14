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
exports.GetLoggedUserService = void 0;
const client_1 = require("../../config/prisma/client");
class GetLoggedUserService {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const loggedUser = yield client_1.prisma.user.findFirst({
                where: {
                    id: id,
                },
                include: {
                    veiaco: true,
                    debt: {
                        include: {
                            veiaco: true,
                        },
                    },
                },
            });
            return loggedUser;
        });
    }
}
exports.GetLoggedUserService = GetLoggedUserService;
