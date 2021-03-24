import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeUser } from "../connection/socketActions";
import { loginStatus } from "../redux/actions/loginStatus";
import { User } from "../types";
import { auth } from "./firebase";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        dispatch(loginStatus("noUser"));
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
          activeUser(u);
        } else dispatch(loginStatus("noUser"));
      }
    });
  }, [dispatch]);
};

export default useAuth;
