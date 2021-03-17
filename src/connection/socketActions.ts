import { Socket } from "socket.io-client";

type CreateRoom = {
  user: any;
  name: string;
  category: string;
};

export const createRoom = (socket: Socket, data: CreateRoom, callback: any) => {
  console.log("tet");
  socket.emit("createRoom", data, (error: any) => {
    callback(error);
  });
};
