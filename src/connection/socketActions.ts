import {
  Channel,
  Message,
  SocketCallback,
  User,
  UserInvitation,
} from "../types";

import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5000/";
const socket = io(ENDPOINT);

type CreateRoom = {
  user: any;
  name: string;
  category: string;
};

export const activeUser = (user: User) => {
  socket.emit("activeUser", { ...user, socketId: socket.id });
};

export const createRoom = (
  data: CreateRoom,
  callback: (res: SocketCallback) => void
) => {
  socket.emit("createRoom", data, (res: SocketCallback) => {
    callback(res);
  });
};

export const sendMessage = (
  msg: string,
  author: User,
  channel: Channel,
  callback: (res: SocketCallback) => void
) => {
  const data: Message = { msg, author, channel };
  socket.emit("sendMessage", data, (res: SocketCallback) => {
    callback(res);
  });
};

export const sendInvitation = (
  author: User,
  channel: Channel,
  name: string,
  callback: (res: SocketCallback) => void
) => {
  const data: UserInvitation = { author, channel, name };
  socket.emit("sendInvitation", data, (res: SocketCallback) => {
    callback(res);
  });
};

export { socket };
