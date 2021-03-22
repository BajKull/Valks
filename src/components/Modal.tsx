import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Close } from "../images/close.svg";
import { modalScreen } from "../redux/actions/modalScreen";

type ModalProps = {
  children: JSX.Element[];
};

export default function Modal(props: ModalProps) {
  const dispatch = useDispatch();
  const focusWindow = useRef<HTMLDivElement>(null);
  const closeWindow = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    e.stopPropagation();
    if (target.classList.contains("modal")) dispatch(modalScreen(""));
  };

  const closeWindowKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") dispatch(modalScreen(""));
  };

  useEffect(() => {
    if (focusWindow.current) focusWindow.current.focus();
  }, []);

  return (
    <div
      className="modal"
      ref={focusWindow}
      tabIndex={0}
      onMouseDown={closeWindow}
      onKeyDown={closeWindowKey}
    >
      <div className="content">
        <Close className="close" onClick={() => dispatch(modalScreen(""))} />
        {props.children}
      </div>
    </div>
  );
}
