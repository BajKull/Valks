import React from "react";
import { Route } from "react-router-dom";
import ChannelLanding from "./ChannelLanding";
import ChannelList from "./ChannelList";

export default function Channel() {
  return (
    <div>
      <ChannelList />
      <Route path="/channels" exact component={ChannelLanding} />
      <Route path="/channels/:id" component={Channel} />
    </div>
  );
}
