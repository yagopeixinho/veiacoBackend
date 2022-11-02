import { User } from "@prisma/client";
import { prisma } from "../../config/prisma/client";

export class GetAllUsersService {
  async execute(): Promise<User[]> {
    const allUsers = prisma.user.findMany();

    return allUsers;
  }
}
