import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Close } from "../images/close.svg";
import { displayError } from "../redux/actions/displayError";

export default function DisplayError() {
  const [msg, setMsg] = useState("");
  const error = useSelector((state: RootStateOrAny) => state.displayError);
  const dispatch = useDispatch();

  const closeBox = () => {
    dispatch(displayError(""));
  };

  useEffect(() => {
    if (error) setMsg(error);
  }, [error]);

  return (
    <CSSTransition
      timeout={500}
      in={error !== ""}
      classNames="fromBottom"
      unmountOnExit
    >
      <div className="errorBox">
        <div className="content">
          <p className="errorBoxMsg">{msg}</p>
          <Close className="close" onClick={closeBox} />
        </div>
      </div>
    </CSSTransition>
  );
}
