import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginScreen } from "../redux/actions/loginScreen";
import { auth } from "../firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const focusWindow = useRef(null);
  const dispatch = useDispatch();

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const closeWindow = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    e.stopPropagation();
    if (target.classList.contains("login")) dispatch(loginScreen(false));
  };

  const closeWindowKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") dispatch(loginScreen(false));
  };

  return (
    <div
      className="login"
      ref={focusWindow}
      tabIndex={0}
      onMouseDown={closeWindow}
      onKeyDown={closeWindowKey}
    >
      <h1>Login</h1>
      <form onSubmit={(e) => signIn(e)}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
