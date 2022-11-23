import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { GetLoggedUserService } from "../../services/user/GetLoggedUser.service";

export class GetLoggedUserController {
  async handle(req: Request, res: Response) {
    const { id } = req;

    const _getLoggedUserService = new GetLoggedUserService();

    const response = await _getLoggedUserService.execute({ id });

    res.status(201).json(response);
  }
}
