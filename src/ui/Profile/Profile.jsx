import React, { useState } from "react";
import { connect } from "react-redux";
import { syncWithStorage, checkUploadPermission, checkSyncInProgress } from "business-logic/reducers";
import ModalWindowPortal from "ui/ModalWindow";
import classNames from "classnames";

const acceptFileType = {
  Photos: "image/*",
  Audios: "audio/*",
  Videos: "video/*",
};

const Profile = ({ currCategory, currAlbum, syncWithStorage, progressData }) => {
  const [showModal, toggleModal] = useState(false);
  const [fileList, updateFileList] = useState([]);
  const closeModalWindow = () => toggleModal(!showModal);

  const uploadClickHandler = (e) => {
    if (checkSyncInProgress(progressData.status)) {
      e.preventDefault();
    } else if (!checkUploadPermission(currAlbum)) {
      toggleModal(true);
      e.preventDefault();
    }
  };
  const uploadChangeHandler = ({ target }) => {
    const files = Object.values(target.files);
    updateFileList(files);
    target.value = "";
  };

  const syncHandler = (e) => {
    if (checkSyncInProgress(progressData.status)) return;
    syncWithStorage(currCategory, currAlbum, fileList, () => {
      updateFileList([]);
    });
  };
  const syncButtonStyle = classNames("button", "sync-btn", {
    "sync-btn_visible": fileList.length,
    "sync-btn_active": checkSyncInProgress(progressData.status),
  });

  const uploadButtonStyle = classNames("button", "upload-btn", {
    "upload-btn_inactive": checkSyncInProgress(progressData.status),
  });

  return (
    <section className="profile">
      <div className="profile__avatar">
        <img src="" alt="" className="profile__avatar-img" />
      </div>
      <div className="h3 profile__name">Amelia Rice</div>
      <span className="profile__stats">2390 files</span>
      <label className={uploadButtonStyle} htmlFor="upload-btn" tabIndex="0">
        Upload
      </label>
      <input
        id="upload-btn"
        onClick={uploadClickHandler}
        onChange={uploadChangeHandler}
        type="file"
        accept={acceptFileType[currCategory]}
        multiple
      />
      <ModalWindowPortal isVisible={showModal} onClose={closeModalWindow}>
        <p>Please select album or create new</p>
      </ModalWindowPortal>

      <button className={syncButtonStyle} onClick={syncHandler} type="button"></button>
    </section>
  );
};

const stateToProps = ({ logicState }) => ({
  progressData: logicState.syncDataProgress,
  currAlbum: logicState.currAlbum,
  currCategory: logicState.currCategory,
});

export default connect(stateToProps, { syncWithStorage })(Profile);
