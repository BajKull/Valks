import React, { useRef, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Modal from "../components/Modal";
import { modalScreen } from "../redux/actions/modalScreen";
import { auth, credential } from "../firebase/firebase";
import { ReactComponent as Close } from "../images/close.svg";
import Loading from "../loading/Loading";
import { loginStatus } from "../redux/actions/loginStatus";
import { deleteAccount } from "../connection/socketActions";

export default function DeleteModal() {
  const [deleteInput, setDeleteInput] = useState("");
  const [password, setPassword] = useState("");
  const [menu2, setMenu2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const delRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (delRef.current) {
      if (e.target.value === "DELETE") {
        delRef.current.disabled = false;
        delRef.current.onclick = () => setMenu2(true);
      } else delRef.current.disabled = true;
      setDeleteInput(e.target.value);
    }
  };

  const delAcc = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const c = credential.EmailAuthProvider.credential(user.email, password);
    auth.currentUser
      ?.reauthenticateWithCredential(c)
      .then(() => {
        auth.currentUser
          ?.delete()
          .then(() => {
            deleteAccount(user);
            dispatch(loginStatus("noUser"));
            setLoading(false);
            setError(false);
          })
          .catch((err) => {
            setError(true);
            setLoading(false);
            setErrorMsg(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setErrorMsg("Incorrect password.");
      });
  };

  return (
    <div className="deleteModal">
      <Modal>
        {!menu2 ? (
          <>
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
              <input
                className="formInput"
                name="delete"
                value={deleteInput}
                onChange={handleChange}
              />
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
          </>
        ) : (
          <div className="interface interfaceBig">
            <CSSTransition
              in={error}
              unmountOnExit
              timeout={500}
              classNames="fadeout"
            >
              <>
                <p className="error">{errorMsg}</p>
                <Close className="close" onClick={() => setError(false)} />
              </>
            </CSSTransition>

            <div className="content">
              <h2>Confirm password</h2>
              <CSSTransition
                in={!loading}
                unmountOnExit
                timeout={50000}
                classNames="fadeout"
              >
                <form onSubmit={delAcc}>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="formInput"
                  />
                  <input type="submit" className="formSubmit" />
                </form>
              </CSSTransition>
              <CSSTransition
                in={loading}
                unmountOnExit
                timeout={50000}
                classNames="fadeout"
              >
                <Loading />
              </CSSTransition>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
