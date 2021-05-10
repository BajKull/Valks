import { channelListSet } from "../redux/actions/channelList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeUser } from "../connection/socketActions";
import { activeUserAction, loginStatus } from "../redux/actions/loginStatus";
import { setNotifications } from "../redux/actions/notifications";
import { SocketCallback, User } from "../types";
import { auth } from "./firebase";
import { changeLoadingScreen } from "../redux/actions/loadingScreen";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        dispatch(loginStatus("noUser"));
        dispatch(changeLoadingScreen(false));
      } else if (user) {
        if (user.isAnonymous === false) {
          if (user.email) dispatch(activeUserAction(user.email));
        } else dispatch(loginStatus("noUser"));
      }
    });
  }, [dispatch]);
};

export default useAuth;
