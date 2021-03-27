import { channelListSet } from "../redux/actions/channelList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeUser } from "../connection/socketActions";
import { loginStatus } from "../redux/actions/loginStatus";
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
          const u: User = {
            id: user.uid,
            name: user.displayName || user.email!.split("@")[0],
            email: user.email!,
            avatar:
              user.photoURL ||
              "https://socetlasers.eu/wp-content/uploads/2020/10/placeholder-1-e1533569576673.png",
          };
          dispatch(loginStatus(u));
          activeUser(u, (res: SocketCallback) => {
            if (res.type === "success") {
              dispatch(setNotifications(res.data.notifications));
              dispatch(channelListSet(res.data.channels));
            }
            dispatch(changeLoadingScreen(false));
          });
        } else dispatch(loginStatus("noUser"));
      }
    });
  }, [dispatch]);
};

export default useAuth;
