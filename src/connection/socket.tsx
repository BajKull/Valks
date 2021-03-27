import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { channelUserList } from "../redux/actions/channelList";
import { channelMessagesAdd } from "../redux/actions/channelMessages";
import { addNotification } from "../redux/actions/notifications";
import { Message, UserList, UserNotification } from "../types";
import { socket } from "./socketActions";

export default function Socket() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(socket);
    if (!socket) return;
    socket.on("userList", (data: UserList) => {
      dispatch(channelUserList(data));
    });
    socket.on("message", (data: Message) => {
      console.log("asd");
      dispatch(channelMessagesAdd(data));
    });
    socket.on("notification", (data: UserNotification) => {
      console.log(data);
      dispatch(addNotification(data));
    });
  }, [dispatch]);

  return <></>;
}
