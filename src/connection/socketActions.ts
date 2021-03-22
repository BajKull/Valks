import { callbackify } from "node:util";
import { Socket } from "socket.io-client";
import { Channel, Message, SocketCallback, User } from "../types";

type CreateRoom = {
  user: any;
  name: string;
  category: string;
};

export const createRoom = (
  socket: Socket,
  data: CreateRoom,
  callback: (res: SocketCallback) => void
) => {
  socket.emit("createRoom", data, (res: SocketCallback) => {
    callback(res);
  });
};

export const sendMessage = (
  socket: Socket,
  msg: string,
  author: User,
  channel: Channel,
  callback: (res: SocketCallback) => void
) => {
  const data: Message = {
    msg,
    author,
    channel,
  };
  socket.emit("sendMessage", data, (res: SocketCallback) => {
    callback(res);
  });
};
