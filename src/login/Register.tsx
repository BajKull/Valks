import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalScreen } from "../redux/actions/modalScreen";
import { auth, firestore } from "../firebase/firebase";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Close } from "../images/close.svg";
import Loading from "../loading/Loading";
import { loginStatus } from "../redux/actions/loginStatus";
import Modal from "../components/Modal";
import { registerUser } from "../connection/socketActions";
import { checkPassword } from "../components/checkPassword";

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
    const err = checkPassword(password);
    if (err) {
      setError(true);
      setErrorMsg(err);
      return;
    }
    setLoading(true);
    setError(false);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const currentUser = res.user;
        if (currentUser) {
          const userName = email.split("@")[0];
          const user = {
            avatar:
              "https://firebasestorage.googleapis.com/v0/b/licencjat-62707.appspot.com/o/logo.png?alt=media&token=8d99e4c3-fd23-477d-a4f2-de90967b1ba4",
            blockList: [],
            channels: [],
            color: "rgb(255, 255, 255)",
            email,
            name: userName,
            notifications: [],
          };
          registerUser(user, (xd) => {
            console.log(xd);
            setLoading(false);
            dispatch(loginStatus(user));
            dispatch(modalScreen(""));
            currentUser?.updateProfile({ displayName: userName });
            firestore.collection("users").doc(userName).set(user);
          });
        }
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
