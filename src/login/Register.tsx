import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";
import { auth } from "../firebase/firebase";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Close } from "./close.svg";
import Loading from "../loading/Loading";
import { loginStatus } from "../redux/actions/loginStatus";
import Modal from "../components/Modal";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== password2) {
      setError(true);
      setErrorMsg("Passwords do not match");
      return;
    }
    setLoading(true);
    setError(false);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setLoading(false);
        dispatch(loginStatus(res.user));
        dispatch(modalScreen(""));
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err.message);
        setLoading(false);
      });
  };

  const switchSignIn = () => {
    dispatch(modalScreen("signin"));
  };

  return (
    <Modal>
      <h2>Sign up</h2>
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
          in={!loading}
          unmountOnExit
          timeout={500}
          classNames="fadeout"
        >
          <form onSubmit={(e) => signUp(e)}>
            <label htmlFor="email">Email</label>
            <input
              className="formInput"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="formInput"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirm password">Confirm password</label>
            <input
              className="formInput"
              name="confirm password"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <input type="submit" className="formSubmit" />
          </form>
        </CSSTransition>
      </div>
      <p className="tip">
        Already a member?{" "}
        <span className="underline" onClick={switchSignIn}>
          Sign in now
        </span>
      </p>
    </Modal>
  );
}
