import { prisma } from "../../../infra/database";
import { Producer } from "../../../infra/provider/rabbitmq/producer";

export type CreateOrderRequest = {
  custumersId: string;
  items: [{ produtId: string; quantity: number }];
};
export class PedidoService {
  async execute(dataOrder: CreateOrderRequest): Promise<any> {
    const order = await prisma.order.create({
      data: {
        custumersId: dataOrder.custumersId,
        status: "AGUARDANDO",
        orderItems: {
          createMany: {
            data: dataOrder.items,
          },
        },
      },
    });
    return order;
  }
  async updateOrderStatus(data: {
    orderId: string;
    status: string;
  }): Promise<any> {
    const orderUpdate = await prisma.order.update({
      data: {
        status: data.status,
      },
      where: {
        id: data.orderId,
      },
    });
    const  custumer = await prisma.custumers.findFirst({ where: { id: orderUpdate.custumersId}})
    const producer = new Producer()
    await producer.start()
    producer.producer('update_order',{orderId: orderUpdate.id, status: orderUpdate.status, email: custumer?.email })
    return orderUpdate;
  }
}
