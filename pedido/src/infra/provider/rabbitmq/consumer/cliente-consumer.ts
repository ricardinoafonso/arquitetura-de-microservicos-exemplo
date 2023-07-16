import { Prisma } from "@prisma/client";
import { prisma } from "../../../database";
import { Consumer } from "./consumer";

(async () => {
    const consumer = new Consumer();
    await consumer.execute("k_exchange", async (message) => {
      if (!message) {
        console.log("Consumer cancelled by server!");
        return;
      }
      const data = JSON.parse(
        message.content!.toString()
      ) as Prisma.custumersCreateInput;
      const custumers = await prisma.custumers.create({ data });
      console.log(custumers);
    });
  })();