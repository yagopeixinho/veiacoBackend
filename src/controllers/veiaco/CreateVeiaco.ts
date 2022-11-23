import { Request, Response } from "express";
import { CreateVeiacoService } from "../../services/veiaco/CreateVeiaco.service";
import { CreateVeiacoDTO } from "../../types/CreateVeiacoDTO";

export class CreateVeiacoController {
  async handle(req: Request, res: Response) {
    const { name, phone, userId }: CreateVeiacoDTO = req.body;

    const _createVeiacoService = new CreateVeiacoService();

    const response = await _createVeiacoService.execute({
      name,
      phone,
      userId,
    });

    res.status(201).json(response);
  }
}
