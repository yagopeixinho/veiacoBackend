import { Request, Response } from "express";
import { DeleteVeiacoService } from "../../services/veiaco/DeleteVeiaco.service";

export class DeleteVeiacoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const _deleteVeiacoService = new DeleteVeiacoService();

    await _deleteVeiacoService.execute(parseInt(id)).then(() => {
      return { msg: "Usuário deletado com sucesso", status: 200 };
    });
  }
}
