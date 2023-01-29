import { UnauthorizedError } from "../../helpers/appError";
import { AuthUserDTO } from "../../types/AuthUserDTO";
import { prisma } from "../../config/prisma/client";

import jwt from "jsonwebtoken";
require("dotenv").config();

export class AuthUserService {
  async execute({ email, password }: AuthUserDTO) {

    const user = await prisma.user.findFirst({
      where: { email: email },
      include: {
        debt: {
          include: {
            veiaco: true,
          },
        },
        veiaco: true,
      },
    });

    if (!user) {
      throw new UnauthorizedError("Usuário ou senha inválida...");
    }

    if (user.password !== password) {
      throw new UnauthorizedError("Usuário ou senha inválida...");
    }

    const token = jwt.sign({ id: user?.id, user: user }, "secret", {
      expiresIn: "7d",
    });

    return token;
  }
}
