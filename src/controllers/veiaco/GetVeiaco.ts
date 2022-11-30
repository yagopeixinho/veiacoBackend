import { Request, Response } from "express";
import { GetVeiacoService } from "../../services/veiaco/GetVeiaco.service";

export class GetVeiacoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const _getVeiacoService = new GetVeiacoService();

    const response = await _getVeiacoService.execute(parseInt(id));

    res.status(201).json(response);
  }
}
