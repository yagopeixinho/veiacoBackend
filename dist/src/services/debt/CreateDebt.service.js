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
exports.CreateDebtService = void 0;
const client_1 = require("../../config/prisma/client");
class CreateDebtService {
    execute({ title, value, date, user_id, veiaco_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(title);
            console.log(value);
            console.log(date);
            console.log(user_id);
            console.log(veiaco_id);
            const debt = yield client_1.prisma.debt.create({
                data: {
                    title: title,
                    value: value,
                    date: date,
                    // user: {
                    //   connect: {
                    //     id: user_id,
                    //   },
                    // },
                    // veiaco: {
                    //   connect: {
                    //     id: veiaco_id,
                    //   },
                    // },
                },
            });
            return debt;
        });
    }
}
exports.CreateDebtService = CreateDebtService;
