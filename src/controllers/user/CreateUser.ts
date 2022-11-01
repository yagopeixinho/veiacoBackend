import { Request, Response } from "express";
import { CreateUserDTO } from "../../@types/user/CreateUserDTO";
import { CreateUserService } from "../../services/user/CreateUser.service";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password }: CreateUserDTO = req.body;

    const _createUserService = new CreateUserService();

    const response = await _createUserService.execute({
      name,
      email,
      password,
    });

    res.status(201).json(response);
  }
}
