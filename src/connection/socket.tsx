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
    if (!socket) return;
    socket.on("userList", (data: UserList) => {
      dispatch(channelUserList(data));
    });
    socket.on("message", (data: Message) => {
      console.log(data);
      dispatch(channelMessagesAdd(data));
      const body = document.querySelector(".chatMessages");
      if (body) body.scrollTop = body.scrollHeight;
    });
    socket.on("notification", (data: UserNotification) => {
      dispatch(addNotification(data));
    });
  }, [dispatch]);

  return <></>;
}
