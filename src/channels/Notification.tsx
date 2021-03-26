import React from "react";
import { UserNotification } from "../types";
import { ReactComponent as Close } from "../images/close.svg";
import { useDispatch } from "react-redux";
import {
  removeNotification,
  acceptNotification,
} from "../redux/actions/notifications";
import { displayDate } from "../components/displayDate";

type NotificationProps = {
  notification: UserNotification;
};

export default function Notification(props: NotificationProps) {
  const dispatch = useDispatch();

  const deleteNotification = () => {
    dispatch(removeNotification(props.notification));
  };

  const accNotification = () => {
    dispatch(acceptNotification(props.notification));
  };

  if (props.notification.type === "mention")
    return (
      <div className="notification">
        <Close className="close" onClick={deleteNotification} />
        <p className="message">{props.notification.message}</p>
        <p className="date">{displayDate(props.notification.date)}</p>
      </div>
    );
  else
    return (
      <div className="notification">
        <Close className="close" onClick={deleteNotification} />
        <p className="message">{props.notification.message}</p>
        <p className="date">{displayDate(props.notification.date)}</p>
        <div className="actions">
          <button className="mainButton" onClick={accNotification}>
            Accept
          </button>
          <button className="secondaryButton" onClick={deleteNotification}>
            Decline
          </button>
        </div>
      </div>
    );
}
