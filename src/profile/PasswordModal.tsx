import React, { useState } from "react";
import Modal from "../components/Modal";

export default function PasswordModal() {
  const [currentPswd, setCurrentPswd] = useState("");
  const [pswd1, setPswd1] = useState("");
  const [pswd2, setPswd2] = useState("");
  return (
    <Modal>
      <h2>Change your password</h2>
      <div className="interface">
        <form>
          <label>Current password</label>
          <input
            className="formInput"
            value={currentPswd}
            onChange={(e) => setCurrentPswd(e.target.value)}
          />
          <label>New password</label>
          <input
            className="formInput"
            value={currentPswd}
            onChange={(e) => setCurrentPswd(e.target.value)}
          />
          <label>Confirm new password</label>
          <input
            className="formInput"
            value={currentPswd}
            onChange={(e) => setCurrentPswd(e.target.value)}
          />
        </form>
      </div>
    </Modal>
  );
}
