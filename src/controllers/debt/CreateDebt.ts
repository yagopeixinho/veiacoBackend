import { Request, Response } from "express";
import { CreateDebtDTO } from "../../types/CreateDebtDTO";
import { CreateDebtService } from "../../services/debt/CreateDebt.service";

export class CreateDebtController {
  async handle(req: Request, res: Response) {
    const { title, value, date, user_id, veiaco_id }: CreateDebtDTO = req.body;

    const _createDebtService = new CreateDebtService();

    const response = await _createDebtService.execute({
      title,
      value,
      date,
      user_id,
      veiaco_id,
    });

    console.dir(response);
    res.status(201).json(response);
  }
}
