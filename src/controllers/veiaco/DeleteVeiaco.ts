import { Request, Response } from "express";
import { DeleteVeiacoService } from "../../services/veiaco/DeleteVeiaco.service";

export class DeleteVeiacoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    console.log(id);
    const _deleteVeiacoService = new DeleteVeiacoService();

    const response = await _deleteVeiacoService.execute(parseInt(id));

    return res.status(201).json(response);
  }
}
