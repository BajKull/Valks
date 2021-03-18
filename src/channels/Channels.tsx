import React from "react";
import { Route } from "react-router-dom";
import ChannelLanding from "./ChannelLanding";
import ChannelList from "./ChannelList";

export default function Channel() {
  console.log("tet");
  return (
    <div className="channels">
      <ChannelList />
      <Route path="/channels" exact component={ChannelLanding} />
      {/* <Route path="/channels/:id" component={Channel} /> */}
    </div>
  );
}
