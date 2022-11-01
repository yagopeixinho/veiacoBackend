import { User } from "@prisma/client";
import { CreateUserDTO } from "../../@types/user/CreateUserDTO";
import { prisma } from "../../config/prisma/client";

export class CreateUserService {
  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return newUser;
  }
}
