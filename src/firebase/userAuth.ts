import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStatus } from "../redux/actions/loginStatus";
import { auth } from "./firebase";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        dispatch(loginStatus("noUser"));
        auth.signInAnonymously().catch((error) => console.log(error));
      } else if (user) {
        if (user.isAnonymous === false) dispatch(loginStatus(user));
        else dispatch(loginStatus("noUser"));
      }
    });
  }, [dispatch]);
};

export default useAuth;
