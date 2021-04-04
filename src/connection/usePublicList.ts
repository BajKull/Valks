import { SocketCallback } from "./../types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { socket } from "./socketActions";

type PublicList = {
  name: string;
  users: number;
};

const usePublicList = () => {
  const dispatch = useDispatch();
  const [publicList, setPublicList] = useState<PublicList[]>([]);

  useEffect(() => {
    socket.emit("publicList", (res: SocketCallback) => {
      if (res.type === "success") {
        const d: PublicList[] = res.data;
        setPublicList(d);
      }
    });
  }, [dispatch]);

  return { publicList };
};

export default usePublicList;
