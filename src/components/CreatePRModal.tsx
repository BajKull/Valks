import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { createRoom } from "../connection/socketActions";
import Modal from "./Modal";

export default function CreatePRModal() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const socket = useSelector((state: RootStateOrAny) => state.socket);
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (user !== "noUser") {
      const u = { name: user.displayName, email: user.email };
      const data = { user: u, name, category };
      createRoom(socket, data, (res: any) => {
        console.log(res);
      });
    }
  };

  return (
    <Modal>
      <h2>Create private room</h2>
      <div className="interface">
        <form onSubmit={handleCreate}>
          <label htmlFor="name">Room name</label>
          <input
            className="formInput"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="category">Room category</label>
          <input
            className="formInput"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Flowers"
          />
          <input type="submit" className="formSubmit" />
        </form>
      </div>
    </Modal>
  );
}
