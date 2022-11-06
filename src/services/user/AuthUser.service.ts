import { AppError, UnauthorizedError } from "../../helpers/appError";
import { AuthUserDTO } from "../../types/AuthUserDTO";
import { prisma } from "../../config/prisma/client";

import jwt from "jsonwebtoken";
require("dotenv").config();

export class AuthUserService {
  async execute({ email, password }: AuthUserDTO) {
    const user = await prisma.user.findFirst({ where: { email: email } });

    if (!user) {
      throw new UnauthorizedError("Usuário ou senha inválido...");
    }

    const token = jwt.sign({ id: user?.id }, "secret", {
      expiresIn: "7d",
    });

    return token;
  }
}
