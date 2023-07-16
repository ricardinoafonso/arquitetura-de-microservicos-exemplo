import { Channel, Connection, Message, connect } from "amqplib";
export class Consumer {
  private connection: Connection;
  private channel: Channel;
  async execute(exchange: string, callback: (message: any) => void) {
    this.connection = await connect("amqp://localhost");
    this.channel = await this.connection.createChannel();
    const assertResult = await this.channel.assertQueue("", {
      exclusive: true,
    });
    await this.channel.bindQueue(assertResult.queue, exchange, "");

    await this.channel.consume(assertResult.queue, async (message) => {
      callback(message);
    });
  }
}



