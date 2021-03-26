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
import InviteToRoom from "./components/InviteToRoom";
import Socket from "./connection/Socket";
import useData from "./firebase/useData";

export default function App() {
  const modalScreen = useSelector((state: RootStateOrAny) => state.modalScreen);
  useAuth();
  useData();

  return (
    <Router>
      <Socket />
      {modalScreen === "signin" && <Login />}
      {modalScreen === "signup" && <Register />}
      {modalScreen === "createRoom" && <CreatePRModal />}
      {modalScreen === "invite" && <InviteToRoom />}
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/channels" component={Channels} />
    </Router>
  );
}
