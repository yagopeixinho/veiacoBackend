import { Veiaco } from "@prisma/client";
import { prisma } from "../../config/prisma/client";
import { UpdateVeiacoDTO } from "../../types/UpdateVeiacoDTO";

export class UpdateVeiacoService {
  async execute({ name, phone, veiacoId }: UpdateVeiacoDTO): Promise<Veiaco> {
    const veiaco = await prisma.veiaco.update({
      where: {
        id: veiacoId,
      },

      data: {
        name,
        phone,
      },
    });

    return veiaco;
  }
}
