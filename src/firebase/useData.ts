import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase/firebase";
import { channelListSet } from "../redux/actions/channelList";
import { setNotifications } from "../redux/actions/notifications";

const useData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  useEffect(() => {
    if (!user) return;
    if (user === "noUser") return;
    firestore
      .collection("users")
      .doc(user.name)
      .get()
      .then((res) => {
        const data = res.data();
        if (data) dispatch(setNotifications(data?.notifications));
        // dispatch(channelListSet(data?.channels)); fetch from backend
      });
  }, [user, dispatch]);
};

export default useData;
