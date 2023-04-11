import { IMessaging } from '../classes/interfaces/messaging-protocol';

export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log('mensagem enviada:', msg);
  }
}
