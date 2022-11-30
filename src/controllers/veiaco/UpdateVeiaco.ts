import { Request, Response } from "express";
import { UpdateVeiacoService } from "../../services/veiaco/UpdateVeiaco.service";
import { UpdateVeiacoDTO } from "../../types/UpdateVeiacoDTO";

export class UpdateVeiacoController {
  async handle(req: Request, res: Response) {
    const { name, phone }: UpdateVeiacoDTO = req.body;
    const { id } = req.params;

    const _updateVeiacoService = new UpdateVeiacoService();

    const response = await _updateVeiacoService.execute({
      name,
      phone,
      veiacoId: parseInt(id),
    });

    res.status(201).json(response);
  }
}
