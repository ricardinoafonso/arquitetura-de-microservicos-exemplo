import { Channel, Connection, connect } from "amqplib";

export class Producer {
  private connection: Connection;
  private channel: Channel;

  async start() {
    this.connection = await connect("amqp://localhost");
    this.channel = await this.connection.createChannel();
  }
  async producer(k_exchange: string, payload: {}, options?: {}) {
    await this.channel.assertExchange(k_exchange, "fanout", { durable: true });
    this.channel.publish(
      k_exchange,
      "",
      Buffer.from(Buffer.from(JSON.stringify(payload)))
    );
  }
}
