import { Veiaco } from "@prisma/client";
import { prisma } from "../../config/prisma/client";

export class GetVeiacoService {
  async execute(id: number): Promise<Veiaco> {
    const veiaco = await prisma.veiaco.findFirst({
      where: {
        id,
      },
      include: {
        debt: true,
      },
    });

    return veiaco as any;
  }
}
