import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { UserNotification } from "../types";
import Notification from "./Notification";

export default function Notifications() {
  const notifications = useSelector(
    (state: RootStateOrAny) => state.notifications
  );
  return (
    <div className="notifications">
      <h2 className="notificationsTitle">Notifications</h2>
      {notifications.length === 0 && (
        <p className="notificationsEmpty">
          There are no notifications. You are up to date.
        </p>
      )}
      {notifications.map((el: UserNotification) => (
        <Notification notification={el} key={el.id} />
      ))}
    </div>
  );
}
