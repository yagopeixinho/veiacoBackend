import { User } from "@prisma/client";
import { prisma } from "../../config/prisma/client";
import { GetLoggedUserDTO } from "../../types/GetLoggedUserDTO";

export class GetLoggedUserService {
  async execute({ id }: GetLoggedUserDTO) {
    const loggedUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        veiaco: true,
        debt: {
          include: {
            veiaco: true,
          },
        },
      },
    });

    return loggedUser;
  }
}
