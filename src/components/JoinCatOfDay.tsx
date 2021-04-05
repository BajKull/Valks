import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { joinPublic } from "../redux/actions/joinPublic";

export default function JoinCatOfDay() {
  const category = "space";
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const history = useHistory();
  const dispatch = useDispatch();

  const joinCatOfDay = () => {
    dispatch(
      joinPublic(user, category, (callback) => {
        if (callback) history.push(`/channels/public/${category}`);
      })
    );
  };
  return (
    <div className="catOfDay">
      <h3 className="category">
        Category of the day <span className="tag">{category}</span>
      </h3>
      <button className="secondaryButton" onClick={joinCatOfDay}>
        Join now!
      </button>
    </div>
  );
}
