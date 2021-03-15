import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Navbar from "./navbar/Navbar";
import "./scss/style.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Landing} />
    </Router>
  );
}
