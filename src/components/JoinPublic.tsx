import React from "react";
import { Link } from "react-router-dom";

export default function JoinPublic() {
  return (
    <Link to="/channels/public" className="mainButton">
      Join public chat room
    </Link>
  );
}
