import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useAuth from "./firebase/userAuth";
import Landing from "./landing/Landing";
import Login from "./login/Login";
import Register from "./login/Register";
import Navbar from "./navbar/Navbar";
import "./scss/style.css";

export default function App() {
  const loginScreen = useSelector((state: RootStateOrAny) => state.loginScreen);
  useAuth();
  return (
    <Router>
      {loginScreen === "signin" && <Login />}
      {loginScreen === "signup" && <Register />}
      <Navbar />
      <Route path="/" exact component={Landing} />
    </Router>
  );
}
