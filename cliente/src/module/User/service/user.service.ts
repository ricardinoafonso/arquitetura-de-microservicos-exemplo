import { Prisma } from "@prisma/client";
import { prisma } from "../../../infra/database";
import { Producer } from "../../../infra/provider/rabbitmq/producer/producer";

export type IUser = {
  id?: string;
  nome?: string;
  email?: string;
  password?: string;
};
export class userService {
  async execute(
    data: Prisma.clienteCreateInput
  ): Promise<Prisma.clienteCreateInput> {
    const user = await prisma.cliente.create({ data });
    const producer = new Producer();
    try {
      await producer.start();
      await producer.producer("k_exchange", {
        externalId: user.id,
        email: user.email,
      });
    } catch (error) {
      throw error;
    }

    return user;
  }
}
