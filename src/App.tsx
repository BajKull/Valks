import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreatePRModal from "./components/CreatePRModal";
import useAuth from "./firebase/userAuth";
import Landing from "./landing/Landing";
import Login from "./login/Login";
import Register from "./login/Register";
import Navbar from "./navbar/Navbar";
import Channels from "./channels/Channels";
import "./scss/style.css";

export default function App() {
  const modalScreen = useSelector((state: RootStateOrAny) => state.modalScreen);
  useAuth();
  return (
    <Router>
      {modalScreen === "signin" && <Login />}
      {modalScreen === "signup" && <Register />}
      {modalScreen === "createRoom" && <CreatePRModal />}
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/channels" component={Channels} />
    </Router>
  );
}
