import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { storage } from "../firebase/firebase";
import { changeAvatarAction } from "../redux/actions/changeAvatar";
import { displayError } from "../redux/actions/displayError";

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);

  useEffect(() => {
    const storageRef = storage.ref(user.email);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error.message);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file, error, user.email]);

  return { progress, error, url };
};

export default function AvatarUpload(props: any) {
  const { progress, error, url } = useStorage(props.file);
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (url) {
      dispatch(changeAvatarAction(user, url));
      props.setFile(null);
    }
    if (error) {
      dispatch(displayError(error));
      props.setFile(null);
    }
  }, [dispatch, error, props, url, user]);
  return (
    <div className="progressBar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
