import React from "react";
import { User } from "../types";

export default function UserList({ users }: { users: User[] }) {
  return (
    <div className="userList">
      <h2 className="userListTitle">Users</h2>
      {users.map((user) => (
        <div className="user">
          <img src={user.avatar} alt={user.name} className="userAvatar" />
          <p className="userName">{user.name}</p>
        </div>
      ))}
    </div>
  );
}
