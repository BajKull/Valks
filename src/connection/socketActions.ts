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

export const registerUser = (user: any, callback: (res: boolean) => void) => {
  socket.emit("register", user, (res: boolean) => {
    callback(res);
  });
};

export const deleteAccount = (user: any) => {
  socket.emit("deleteAccount", user);
};

export const activeUser = (
  email: string,
  callback: (res: SocketCallback) => void
) => {
  socket.emit("activeUser", email, (res: SocketCallback) => {
    callback(res);
  });
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
  channel: string,
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
  user: User,
  invite: UserNotification,
  callback: (res: SocketCallback) => void
) => {
  socket.emit("acceptInvitation", { user, invite }, (res: SocketCallback) => {
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

export const changeAvatar = (user: User, url: string) => {
  const data = { user, url };
  socket.emit("changeAvatar", data);
};

export { socket };
