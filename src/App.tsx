import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreatePRModal from "./components/CreatePRModal";
import useAuth from "./firebase/useAuth";
import Landing from "./landing/Landing";
import Login from "./login/Login";
import Register from "./login/Register";
import Navbar from "./navbar/Navbar";
import Channels from "./channels/Channels";
import "./scss/style.css";
import InviteToRoom from "./components/InviteToRoom";
import Socket from "./connection/Socket";
import LoadingScreen from "./loading/LoadingScreen";

export default function App() {
  const modalScreen = useSelector((state: RootStateOrAny) => state.modalScreen);
  useAuth();

  return (
    <>
      <Router>
        <LoadingScreen />
        <Socket />
        {modalScreen === "signin" && <Login />}
        {modalScreen === "signup" && <Register />}
        {modalScreen === "createRoom" && <CreatePRModal />}
        {modalScreen === "invite" && <InviteToRoom />}
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route path="/channels" component={Channels} />
      </Router>
    </>
  );
}
