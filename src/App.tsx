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
import LoadingScreen from "./loading/LoadingScreen";
import Socket from "./connection/Socket";
import Profile from "./profile/Profile";
import DisplayError from "./components/DisplayError";

export default function App() {
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const modalScreen = useSelector((state: RootStateOrAny) => state.modalScreen);
  const displayError = useSelector(
    (state: RootStateOrAny) => state.displayError
  );
  useAuth();

  return (
    <>
      <Router>
        <LoadingScreen />
        <DisplayError />
        {user && user !== "noUser" && <Socket />}
        {modalScreen === "signin" && <Login />}
        {modalScreen === "signup" && <Register />}
        {modalScreen === "createRoom" && <CreatePRModal />}
        {modalScreen === "invite" && <InviteToRoom />}
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route path="/channels" component={Channels} />
        <Route path="/profile" component={Profile} />
      </Router>
    </>
  );
}
