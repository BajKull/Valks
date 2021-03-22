import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";
import { auth } from "../firebase/firebase";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Close } from "../images/close.svg";
import Loading from "../loading/Loading";
import { loginStatus } from "../redux/actions/loginStatus";
import Modal from "../components/Modal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    auth
      .signInWithEmailAndPassword(email, password)
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

  const switchSignUp = () => {
    dispatch(modalScreen("signup"));
  };

  return (
    <Modal>
      <h2>Sign in</h2>
      <div className="interface interfaceSmall">
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
          <form onSubmit={(e) => signIn(e)}>
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
            <input type="submit" className="formSubmit" />
          </form>
        </CSSTransition>
      </div>
      <p className="tip">
        Not a member?{" "}
        <span className="underline" onClick={switchSignUp}>
          Sign up now
        </span>
      </p>
    </Modal>
  );
}
