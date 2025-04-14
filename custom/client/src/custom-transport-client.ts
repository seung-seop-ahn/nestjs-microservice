import { ClientProxy, ReadPacket, WritePacket } from '@nestjs/microservices';

export class CustomTransportClient extends ClientProxy {
  async close(): Promise<any> {
    console.log('Custom Transport Client closed');
  }

  async connect(): Promise<any> {
    console.log('Custom Transport Client connected');
  }

  async dispatchEvent(packet: ReadPacket): Promise<any> {
    return console.log('event to dispatch: ', packet);
  }

  protected publish(
    packet: ReadPacket,
    callback: (packet: WritePacket) => void,
  ): () => void {
    console.log('message:', packet);

    // 서버로 요청을 보내고 응답을 처리
    // In a real-world application, the "callback" function should be executed
    // with payload sent back from the responder. Here, we'll simply simulate (5 seconds delay)
    // that response came through by passing the same "data" as we've originally passed in.
    setTimeout(() => callback({ response: packet.data }), 5000);

    return () => console.log('teardown');
  }

  unwrap<T>(): T {
    throw new Error('Method not implemented.');
  }
}
