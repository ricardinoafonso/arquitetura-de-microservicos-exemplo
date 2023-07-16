import { ConsumerQueue } from "./order-update-consumer";

(async () => {
  const consumer = new ConsumerQueue();
  await consumer.start();
  await consumer.consumer("update_order", async (message) => {
    if (!message) console.log(" await !!!!");
    const data = JSON.parse(message.content.toString());

    console.log(
      `---------------- Order Update id: ${data.orderId}  status:${data.status}------------------`
    );

    //// send mail to user
  });
})();
