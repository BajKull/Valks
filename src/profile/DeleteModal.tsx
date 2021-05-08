import React, { useRef, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { modalScreen } from "../redux/actions/modalScreen";

export default function DeleteModal() {
  const [deleteInput, setDeleteInput] = useState("");
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const delRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (delRef.current) {
      if (e.target.value === "DELETE") delRef.current.disabled = false;
      else delRef.current.disabled = true;
      setDeleteInput(e.target.value);
    }
  };

  return (
    <div className="deleteModal">
      <Modal>
        <div className="info">
          <h2>Delete this account?</h2>
          <p>
            This action will permamently delete your account and can not be
            undone.
          </p>
        </div>
        <div className="content">
          <p className="deleteName">{user.name}</p>
          <label htmlFor="delete">
            Type <b>DELETE</b> in order to delete account.
          </label>
          <input name="delete" value={deleteInput} onChange={handleChange} />
          <div className="actions">
            <button
              className="mainButton"
              onClick={() => dispatch(modalScreen(""))}
            >
              CANCEL
            </button>
            <button className="secondaryButton" disabled ref={delRef}>
              DELETE
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
