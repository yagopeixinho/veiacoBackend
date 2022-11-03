import { Debt } from "@prisma/client";
import { CreateDebtDTO } from "../../@types/debt/CreateDebtDTO";
import { prisma } from "../../config/prisma/client";

export class CreateDebtService {
  async execute({
    title,
    value,
    date,
    user_id,
    veiaco_id,
  }: CreateDebtDTO): Promise<Debt> {
    const debt = await prisma.debt.create({
      data: {
        title,
        value,
        date,
        user: {
          connect: {
            id: user_id,
          },
        },
        veiaco: {
          connect: {
            id: veiaco_id,
          },
        },
      },
    });

    return debt;
  }
}
