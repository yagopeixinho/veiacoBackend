import { AuthUserDTO } from "../../@types/debt/AuthUserDTO";

import jwt from "jsonwebtoken";

export class AuthUserService {
  async execute({ email, password }: AuthUserDTO) {
    const token = jwt.sign({ userId: 1 }, "Castor", {
      expiresIn: 300,
    });

    return token;
  }
}
