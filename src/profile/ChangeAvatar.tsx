import React, { useRef, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { displayError } from "../redux/actions/displayError";
import AvatarUpload from "./AvatarUpload";

export default function ChangeAvatar() {
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const user = useSelector((state: RootStateOrAny) => state.loginStatus);
  const dispatch = useDispatch();

  const changeAvatarFunction = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      if (target.files.length <= 0) return;
      const f = target.files[0];
      if (f.size > 8000000)
        dispatch(
          displayError("File size too big. Maximum allowed size is 8MB.")
        );
      else if (!["image/jpeg", "image/jpg", "image/png"].includes(f.type))
        dispatch(displayError("Invalid file format."));
      else setFile(f);
    }
  };

  const changeAvatarProc = () => {
    fileRef.current?.click();
  };

  return (
    <div className="section">
      <h2 className="sectionTitle">Avatar</h2>
      <div className="content">
        <img className="userAvatar" src={user.avatar} alt={user.name} />
        <div className="info">
          <input
            ref={fileRef}
            className="hidden"
            type="file"
            onChange={changeAvatarFunction}
          />
          <button className="mainButton" onClick={changeAvatarProc}>
            Change avatar
          </button>
          <p className="tip">
            Picture has to be formatted as .jpg, .jpeg or .png
          </p>
          {file && <AvatarUpload file={file} setFile={setFile} />}
        </div>
      </div>
    </div>
  );
}
