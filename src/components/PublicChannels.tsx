import React, { useState, useRef } from "react";
import { categories } from "./categories";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as User } from "../images/user.svg";
import { ReactComponent as Category } from "../images/category.svg";
import { ReactComponent as Close } from "../images/close.svg";
import usePublicList from "../connection/usePublicList";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { joinPublic } from "../redux/actions/joinPublic";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Notifications from "../channels/Notifications";

export default function PublicChannels() {
  const [filterCat, setFilterCat] = useState("");
  const { publicList } = usePublicList();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const searchBoxRef = useRef<HTMLInputElement>(null);

  const join = (category: string) => {
    dispatch(
      joinPublic(user, category, (callback: string) => {
        if (callback) history.push(`/channels/public/${category}`);
      })
    );
  };

  const focusSearch = () => {
    searchBoxRef.current?.focus();
  };

  return (
    <>
      <div className="publicCategories">
        <Link to="/channels">
          <Close className="close" />
        </Link>
        <div className="search">
          <Search className="icon" onClick={focusSearch} />
          <input
            className="filter"
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            placeholder="search"
            ref={searchBoxRef}
          />
        </div>
        <div className="header">
          <div className="container">
            <Category className="icon" />
          </div>
          <div className="container">
            <User className="icon" />
          </div>
          <div className="container hidden">1</div>
        </div>
        <div className="categories">
          {categories
            .filter((cat) =>
              cat.toLowerCase().includes(filterCat.toLowerCase())
            )
            .map((category: string) => (
              <div className="publicCategory" key={category}>
                <h3 className="publicCategoryName">{category}</h3>
                <p className="activeUsers">
                  {publicList.find((channel) => channel.name === category)
                    ?.users || 0}
                </p>
                <button
                  className="secondaryButton"
                  onClick={() => join(category)}
                >
                  Join
                </button>
              </div>
            ))}
        </div>
      </div>
      <Notifications />
    </>
  );
}
