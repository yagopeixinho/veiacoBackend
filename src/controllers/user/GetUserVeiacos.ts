import { Request, Response } from "express";
import GetUserVeiacosService from "../../services/user/GetUserVeiacos.service";
import { GetUserVeiacosDTO } from "../../types/GetUserVeiacosDTO";

export default class GetUserVeiacosController {
  async handle(req: Request, res: Response) {
    const { id }: GetUserVeiacosDTO = req;

    const _getUserVeiacosService = new GetUserVeiacosService();

    const response = await _getUserVeiacosService.execute({ id });

    res.status(201).json(response);
  }
}
