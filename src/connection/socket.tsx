import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { channelUserList } from "../redux/actions/channelList";
import { channelMessagesAdd } from "../redux/actions/channelMessages";
import { addNotification } from "../redux/actions/notifications";
import { Message, UserList, UserNotification } from "../types";
import { socket } from "./socketActions";
import sound from "../notification.wav";

export default function Socket() {
  const dispatch = useDispatch();
  const [audio] = useState(new Audio(sound));

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
      if (Notification.permission === "granted") {
        new Notification(data.message);
      } else if (Notification.permission === "default") {
        Notification.requestPermission().then((p) => {
          if (p === "granted") new Notification(data.message);
        });
      }
      audio.play();
      dispatch(addNotification(data));
    });
  }, [dispatch, audio]);

  return <></>;
}
