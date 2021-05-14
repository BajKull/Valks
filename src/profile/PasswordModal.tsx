import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Modal from "../components/Modal";
import { auth, credential } from "../firebase/firebase";
import { User } from "../types";
import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as Complete } from "../images/complete.svg";
import Loading from "../loading/Loading";
import { checkPassword } from "../components/checkPassword";

export default function PasswordModal() {
  const [currentPswd, setCurrentPswd] = useState("");
  const [pswd1, setPswd1] = useState("");
  const [pswd2, setPswd2] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const user: User = useSelector((state: RootStateOrAny) => state.loginStatus);

  const changePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (pswd1 !== pswd2) {
      setError(true);
      setErrorMsg("Passwords don't match.");
      return;
    }
    const err = checkPassword(pswd1);
    if (err) {
      setError(true);
      setErrorMsg(err);
      return;
    }
    setLoading(true);
    const c = credential.EmailAuthProvider.credential(user.email, currentPswd);
    auth.currentUser
      ?.reauthenticateWithCredential(c)
      .then(() => {
        auth.currentUser
          ?.updatePassword(pswd1)
          .then(() => {
            setLoading(false);
            setSuccess(true);
            setError(false);
          })
          .catch((err) => {
            setError(true);
            setLoading(false);
            setErrorMsg(err.message);
          });
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setErrorMsg("Incorrect current password.");
        console.log(err);
      });
  };

  return (
    <Modal>
      <h2>Change your password</h2>
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
        <CSSTransition
          in={loading}
          unmountOnExit
          timeout={500}
          classNames="fadeout"
        >
          <Loading />
        </CSSTransition>
        <CSSTransition
          in={!loading && !success}
          unmountOnExit
          timeout={500}
          classNames="fadeout"
        >
          <form onSubmit={changePassword}>
            <label>Current password</label>
            <input
              className="formInput"
              type="password"
              value={currentPswd}
              onChange={(e) => setCurrentPswd(e.target.value)}
            />
            <label>New password</label>
            <input
              className="formInput"
              type="password"
              value={pswd1}
              onChange={(e) => setPswd1(e.target.value)}
            />
            <label>Confirm new password</label>
            <input
              className="formInput"
              type="password"
              value={pswd2}
              onChange={(e) => setPswd2(e.target.value)}
            />
            <input type="submit" className="formSubmit" />
          </form>
        </CSSTransition>
        <CSSTransition
          in={success}
          timeout={500}
          unmountOnExit
          classNames="fadeout"
        >
          <>
            <h3>Password succesfully changed!</h3>
            <Complete className="complete" />
          </>
        </CSSTransition>
      </div>
    </Modal>
  );
}
