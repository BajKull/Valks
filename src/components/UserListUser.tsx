import React from "react";

export default function UserListUser(props: any) {
  const user = props.user;
  return (
    <div className="user" key={user.email} onClick={() => props.selUser(user)}>
      <img src={user.avatar} alt={user.name} className="userAvatar" />
      <p className="userName">{user.name}</p>
    </div>
  );
}
