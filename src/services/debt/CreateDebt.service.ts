import { Debt } from "@prisma/client";
import { CreateDebtDTO } from "../../types/CreateDebtDTO";
import { prisma } from "../../config/prisma/client";

export class CreateDebtService {
  async execute({
    title,
    value,
    date,
    user_id,
    veiaco_id,
  }: CreateDebtDTO): Promise<Debt> {
    console.log(title);
    console.log(value);
    console.log(date);
    console.log(user_id);
    console.log(veiaco_id);
    const debt = await prisma.debt.create({
      data: {
        title: title,
        value: value,
        date: date,
       
        veiaco: {
          connect: {
            id: veiaco_id,
          },
        },
        user: {
          // connectOrCreate: {

          // }
        }
      },
    });

    return debt;
  }
}
