import { Request, Response } from "express";
import { GetVeiacoDebtsService } from "../../services/veiaco/GetVeiacoDebts.service";

export class GetVeiacoDebts {
  async handle(req: Request, res: Response) {
    const _getVeiacoDebtsService = new GetVeiacoDebtsService();

    const response = await _getVeiacoDebtsService.execute();
  }
}
