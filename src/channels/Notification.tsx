import React from "react";
import { UserNotification } from "../types";
import { ReactComponent as Close } from "../login/close.svg";
import { useDispatch } from "react-redux";
import { removeNotification } from "../redux/actions/notifications";

type NotificationProps = {
  notification: UserNotification;
};

export default function Notification(props: NotificationProps) {
  const dispatch = useDispatch();

  const deleteNotification = () => {
    dispatch(removeNotification(props.notification));
  };

  if (props.notification.type === "mention")
    return (
      <div className="notification">
        <Close className="close" onClick={deleteNotification} />
        <p className="message">{props.notification.message}</p>
        <p className="date">{props.notification.date}</p>
      </div>
    );
  else
    return (
      <div className="notification">
        <Close className="close" onClick={deleteNotification} />
        <p className="message">{props.notification.message}</p>
        <p className="date">{props.notification.date}</p>
        <div className="actions">
          <button className="mainButton">Accept</button>
          <button className="secondaryButton" onClick={deleteNotification}>
            Decline
          </button>
        </div>
      </div>
    );
}
