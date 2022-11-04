import { Request, Response } from "express";
import { AuthUserDTO } from "../../@types/debt/AuthUserDTO";
import { AuthUserService } from "../../services/user/AuthUser.service";

export class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password }: AuthUserDTO = req.body;

    const _authUserService = new AuthUserService();

    const token =  await _authUserService.execute({ email, password });

    res.status(201).json({ auth: true, token });
  }
}
