import { io } from "socket.io-client";

type Action = { type: string; payload: { type: string; msg: string } };

const ENDPOINT = "http://localhost:5000/";
const socket = io(ENDPOINT);

const Socket = (state = socket, action: Action) => {
  switch (action.type) {
    case "CREATE_ROOM":
      return action.payload;
    default:
      return state;
  }
};

export default Socket;
