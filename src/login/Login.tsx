import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginScreen } from "../redux/actions/loginScreen";
import { auth } from "../firebase/firebase";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Close } from "./close.svg";
import Loading from "../loading/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const focusWindow = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err.message);
        setLoading(false);
      });
  };

  const switchSignUp = () => {
    dispatch(loginScreen("signup"));
  };

  const closeWindow = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    e.stopPropagation();
    if (target.classList.contains("login")) dispatch(loginScreen(""));
  };

  const closeWindowKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") dispatch(loginScreen(""));
  };

  useEffect(() => {
    if (focusWindow.current) focusWindow.current.focus();
  }, []);

  return (
    <div
      className="login"
      ref={focusWindow}
      tabIndex={0}
      onMouseDown={closeWindow}
      onKeyDown={closeWindowKey}
    >
      <div className="content">
        <Close className="close" onClick={() => dispatch(loginScreen(""))} />
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
      </div>
    </div>
  );
}
