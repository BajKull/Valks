import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import PublicChannels from "../components/PublicChannels";
import ChannelLanding from "./ChannelLanding";
import ChannelList from "./ChannelList";
import Notifications from "./Notifications";
import PrivateChannel from "./PrivateChannel";
import PublicChannel from "./PublicChannel";

export default function Channel() {
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const loadingScreen = useSelector(
    (state: RootStateOrAny) => state.loadingScreen
  );
  if (loadingScreen) return null;
  return (
    <div className="channels">
      <ChannelList />
      <Switch>
        <Route path="/channels" exact component={ChannelLanding} />
        <Route path="/channels/public" exact component={PublicChannels} />
        <Route path="/channels/public/:id" component={PublicChannel} />
        <Route path="/channels/:id" component={PrivateChannel} />
      </Switch>
      <Notifications />
      {user === "noUser" && <Redirect to="/" />}
    </div>
  );
}
