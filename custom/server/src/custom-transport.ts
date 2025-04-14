import { CustomTransportStrategy, ServerRedis } from '@nestjs/microservices';

export class CustomTransport
  extends ServerRedis
  implements CustomTransportStrategy
{
  /**
   * Triggered when you run "app.listen()".
   */
  async listen(callback: (...optionalParams: unknown[]) => any): Promise<any> {
    console.log('Custom Transport listening');

    const echoHandler = this.messageHandlers.get('{"cmd":"echo"}');
    if (echoHandler) {
      await echoHandler.call(this, 'hello');
    }

    callback();
  }

  /**
   * Triggered on application shutdown.
   */
  close(): any {
    console.log('Custom Transport closed');
  }

  /**
   * You can ignore this method if you don't want transporter users
   * to be able to register event listeners. Most custom implementations
   * will not need this.
   */
  on<EventKey, EventCallback>(event: EventKey, callback: EventCallback): any {
    throw new Error('Method not implemented.');
  }

  /**
   * You can ignore this method if you don't want transporter users
   * to be able to retrieve the underlying native server. Most custom implementations
   * will not need this.
   */
  unwrap<T>(): T {
    throw new Error('Method not implemented.');
  }
}
