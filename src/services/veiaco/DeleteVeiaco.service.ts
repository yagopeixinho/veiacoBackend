import { prisma } from "../../config/prisma/client";

export class DeleteVeiacoService {
  async execute(id: number) {
    const deletedVeiaco = await prisma.veiaco.delete({
      where: {
        id,
      },
    });

    console.log(deletedVeiaco);
  }
}
