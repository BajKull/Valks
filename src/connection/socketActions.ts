import {
  Channel,
  Message,
  SocketCallback,
  User,
  UserInvitation,
  UserNotification,
} from "../types";

import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5000/";
const socket = io(ENDPOINT);

type CreateRoom = {
  user: User;
  name: string;
  category: string;
};

export const activeUser = (
  user: User,
  callback: (res: SocketCallback) => void
) => {
  socket.emit(
    "activeUser",
    { ...user, socketId: socket.id },
    (res: SocketCallback) => {
      callback(res);
    }
  );
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
  const data: Message = { msg, author, channel, system: false };
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

export const acceptInvitation = (
  invitation: UserNotification,
  callback: (res: SocketCallback) => void
) => {
  socket.emit("acceptInvitation", invitation, (res: SocketCallback) => {
    callback(res);
  });
};

export const deleteNotification = (
  user: User,
  notification: UserNotification
) => {
  socket.emit("deleteNotification", user, notification);
};

export const joinPublicChannel = (
  user: User,
  category: string,
  callback: (res: SocketCallback) => void
) => {
  const data = { user, category };
  socket.emit("joinPublic", data, (res: SocketCallback) => {
    callback(res);
  });
};

export const leaveChannel = (
  user: User,
  channel: string,
  callback: (res: SocketCallback) => void
) => {
  const data = { user, channel };
  socket.emit("leaveChannel", data, (res: SocketCallback) => {
    callback(res);
  });
};

export const blockUser = (user: User, blocked: string) => {
  const data = { user, blocked };
  socket.emit("blockUser", data);
};

export { socket };
