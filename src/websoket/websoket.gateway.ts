import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway()
export class WebhookGateway {
  @WebSocketServer()
  server: Server;

  sendRowUpdate(row: any) {
    this.server.emit('rowUpdate', row);
  }
}
