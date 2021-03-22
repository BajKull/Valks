import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { channelUserList } from "../redux/actions/channelList";
import { channelMessagesAdd } from "../redux/actions/channelMessages";
import { SocketCallback, UserList } from "../types";

export default function Socket() {
  const dispatch = useDispatch();
  const socket = useSelector((state: RootStateOrAny) => state.socket);

  useEffect(() => {
    socket.on("userList", (data: UserList) => {
      dispatch(channelUserList(data));
    });
    socket.on("message", (data: SocketCallback) => {
      console.log(data);
      dispatch(channelMessagesAdd(data.data));
    });
  }, [dispatch, socket]);

  return <></>;
}
