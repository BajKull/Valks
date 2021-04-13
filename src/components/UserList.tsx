import React, { useState } from "react";
import { User } from "../types";
import UserListSelected from "./UserListSelected";
import UserListUser from "./UserListUser";

export default function UserList({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  return (
    <div className="userList">
      <h2 className="userListTitle">Users</h2>
      {users.map((user) => (
        <UserListUser user={user} selUser={setSelectedUser} key={user.email} />
      ))}
      {selectedUser && (
        <UserListSelected user={selectedUser} selUser={setSelectedUser} />
      )}
    </div>
  );
}
