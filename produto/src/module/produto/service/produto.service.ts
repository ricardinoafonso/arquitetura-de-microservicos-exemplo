import { Prisma } from "@prisma/client";
import { prisma } from "../../../infra/database";
import { Producer } from "../../../infra/provider/rabbitmq/producer";

export class ProdutoService {
  async execute(
    data: Prisma.produtoCreateInput
  ): Promise<Prisma.produtoCreateInput> {
    const checkProduto = await prisma.produto.findFirst({
      where: { OR: [{ nome: data.nome }, { code: data.code }] },
    });
    if (checkProduto) {
      throw new Error("produto ja cadastrado!");
    }
    const produto = await prisma.produto.create({ data: { ...data } });
    const producer = new Producer();
    await producer.start();

    await producer.producer("product_creat", {
      externalId: produto.id,
      code: produto.code,
    });
    return produto;
  }
}
