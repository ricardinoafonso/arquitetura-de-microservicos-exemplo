import { Prisma } from "@prisma/client";
import { prisma } from "../../../database";
import { Consumer } from "./consumer";

(async () => {
    const consumer = new Consumer();
    await consumer.execute("product_creat", async (message) => {
      if (!message) {
        console.log("product cancelled by server!");
        return;
      }
      const data = JSON.parse(
        message.content!.toString()
      ) as Prisma.produtCreateInput;
      const product = await prisma.produt.create({ data });
      console.log(product);
    });
  })();