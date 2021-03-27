import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

export default function LoadingScreen() {
  const loadingScreen = useSelector(
    (state: RootStateOrAny) => state.loadingScreen
  );
  return (
    <CSSTransition
      in={loadingScreen}
      timeout={500}
      classNames="fadeout"
      unmountOnExit
    >
      <div className="loadingBig">
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </CSSTransition>
  );
}
