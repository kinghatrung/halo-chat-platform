import { io, Socket } from 'socket.io-client';

const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL || 'http://192.168.1.23:5000';

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
