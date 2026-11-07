import { io, Socket } from 'socket.io-client';

import { SOCKET_URL } from '@/utils/url';

let socket: Socket | null = null;

export const getSocket = (token?: string) => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      withCredentials: true,
      autoConnect: false,
      transports: ['websocket'],
      auth: {
        token,
      },
    });
  } else if (token) {
    socket.auth = { token };
  }
  return socket;
};
