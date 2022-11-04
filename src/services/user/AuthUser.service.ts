import { User } from "@prisma/client";
import { AuthUserDTO } from "../../@types/debt/AuthUserDTO";

import jwt from "jsonwebtoken";

export class AuthUserService {
  async execute({ email, password }: AuthUserDTO) {
    const SECRET = "Castor";

    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });

    return token;
  }
}
