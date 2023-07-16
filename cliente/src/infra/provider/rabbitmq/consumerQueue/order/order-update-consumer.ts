import { Channel, Connection, Message, connect } from "amqplib";

export class ConsumerQueue {
  private channel: Channel;
  private connection: Connection;

  async start() {
    this.connection = await connect("amqp://localhost");
    this.channel = await this.connection.createChannel();
  }

  async consumer(queue: string, callback: (message: Message) => void) {
    return await this.channel.consume(queue, async (message: any | null) => {
      callback(message);
    });
  }
}
