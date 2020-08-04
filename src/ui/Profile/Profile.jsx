import React, { useState } from "react";
import { uploadFiles } from "services/FirestoreService";

const Profile = (props) => {
  const [fileList, updateFileList] = useState([]);

  const uploadHandler = ({ target }) => {
    const files = Object.values(target.files);
    console.log(files);
    updateFileList(files);
  };

  const syncHandler = (e) => {
    const uploadTask = uploadFiles(
      "photos",
      fileList,
      (snapshot) => {
        console.log("Progress: ", snapshot);
      },
      (result) => {
        console.log("Complete: ", result);
      }
    );
  };

  return (
    <section className="profile">
      <div className="profile__avatar">
        <img src="" alt="" className="profile__avatar-img" />
      </div>
      <div className="h3 profile__name">Amelia Rice</div>
      <span className="profile__stats">2390 files</span>
      <label className="button upload-btn" htmlFor="upload-btn">
        Upload
      </label>
      <input id="upload-btn" onChange={uploadHandler} type="file" accept="audio/*,video/*,image/*" multiple />
      <button className="button sync-btn" onClick={syncHandler}></button>
    </section>
  );
};

export default Profile;
