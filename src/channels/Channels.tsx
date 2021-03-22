import React from "react";
import { Route } from "react-router-dom";
import ChannelLanding from "./ChannelLanding";
import ChannelList from "./ChannelList";
import CurrentChannel from "./CurrentChannel";
import Notifications from "./Notifications";

export default function Channel() {
  return (
    <div className="channels">
      <ChannelList />
      <Route path="/channels" exact component={ChannelLanding} />
      <Route path="/channels" component={CurrentChannel} />
      <Notifications />
    </div>
  );
}
