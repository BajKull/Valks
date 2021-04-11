import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { leaveChannelAction } from "../redux/actions/leaveChannel";
import { Channel } from "../types";

export default function LeaveChannel({ channel }: { channel: Channel }) {
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const dispatch = useDispatch();
  const leaveChannel = () => {
    dispatch(leaveChannelAction(user, channel.id));
  };
  return (
    <button className="secondaryButton leave" onClick={leaveChannel}>
      Leave
    </button>
  );
}
