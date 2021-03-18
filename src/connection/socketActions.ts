import { Socket } from "socket.io-client";
import { SocketCallback } from "../types";

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
