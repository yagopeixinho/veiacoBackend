import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/user/GetAllUsers.service";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const _getAllUsersService = new GetAllUsersService();

    const response = await _getAllUsersService.execute();

    res.status(201).json(response);
  }
}
