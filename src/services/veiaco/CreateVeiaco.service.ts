import { Veiaco } from "@prisma/client";
import { prisma } from "../../config/prisma/client";
import { CreateVeiacoDTO } from "../../types/CreateVeiacoDTO";

export class CreateVeiacoService {
  async execute({ name, phone, userId }: CreateVeiacoDTO): Promise<Veiaco> {
    const veiacoCreated = await prisma.veiaco.create({
      data: {
        name: name,
        phone: phone,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return veiacoCreated;
  }
}
