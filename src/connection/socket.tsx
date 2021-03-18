import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { channelUserList } from "../redux/actions/channelList";
import { UserList } from "../types";

export default function Socket() {
  const dispatch = useDispatch();
  const socket = useSelector((state: RootStateOrAny) => state.socket);

  useEffect(() => {
    socket.on("userList", (data: UserList) => {
      dispatch(channelUserList(data));
    });
  }, [dispatch, socket]);

  return <div></div>;
}
