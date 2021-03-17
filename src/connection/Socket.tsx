import React, { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5000/";

export default function Socket() {
  const socket = useSelector((state: RootStateOrAny) => state.socket);
  useEffect(() => {}, []);

  return <div></div>;
}
