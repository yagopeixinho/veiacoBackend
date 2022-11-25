import { prisma } from "../../config/prisma/client";
import { GetUserVeiacosDTO } from "../../types/GetUserVeiacosDTO";

export default class GetUserVeiacosService {
  async execute({ id }: GetUserVeiacosDTO) {
    const allVeiacos = await prisma.user.findMany({
      where: { id: id },
      select: {
        veiaco: true,
      },
    });

    return allVeiacos;
  }
}
