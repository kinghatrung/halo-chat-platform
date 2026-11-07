import { Socket } from 'socket.io';

export const registerTypingHandlers = (socket: Socket) => {
  const userId = String(socket.data.user.id);

  // Only relay for rooms this socket joined via conversation:join (which checks membership),
  // so nobody can push fake "typing…" into a conversation they are not in.
  const relay = (event: 'typing:start' | 'typing:stop') => (payload?: { conversationId?: string }) => {
    const room = `conversation:${payload?.conversationId}`;
    if (!payload?.conversationId || !socket.rooms.has(room)) return;
    socket.to(room).emit(event, { conversationId: payload.conversationId, userId });
  };

  socket.on('typing:start', relay('typing:start'));
  socket.on('typing:stop', relay('typing:stop'));
};
