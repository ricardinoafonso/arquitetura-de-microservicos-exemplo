import { Channel, Connection, connect } from "amqplib";

export class Producer {
  private connection: Connection;
  private channel: Channel;

  async start() {
    this.connection = await connect("amqp://localhost");
    this.channel = await this.connection.createChannel();
  }
  async producer(queue: string, payload: {}, options?: {}) {
    this.channel.sendToQueue(
      queue,
      Buffer.from(JSON.stringify(payload), "utf-8")
    );
   // await this.connection.close();
  }
}
