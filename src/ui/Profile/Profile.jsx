import React, { useState } from "react";
import { connect } from "react-redux";
import { syncWithStorage, checkUploadPermission } from "business-logic";
import ModalWindowPortal from "ui/ModalWindow";

const Profile = ({ currAlbum }) => {
  const [showModal, toggleModal] = useState(false);
  const [fileList, updateFileList] = useState([]);

  const closeModalWindow = () => toggleModal(!showModal);

  const uploadClickHandler = (e) => {
    if (!checkUploadPermission(currAlbum)) {
      toggleModal(true);
      e.preventDefault();
    }
  };
  const uploadChangeHandler = ({ target }) => {
    const files = Object.values(target.files);
    console.log(files);
    updateFileList(files);
  };

  const syncHandler = (e) => syncWithStorage(fileList);

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
      <input
        id="upload-btn"
        onClick={uploadClickHandler}
        onChange={uploadChangeHandler}
        type="file"
        accept="audio/*,video/*,image/*"
        multiple
      />
      <ModalWindowPortal isVisible={showModal} onClose={closeModalWindow}>
        <p>Please select album or create new</p>
      </ModalWindowPortal>

      <button className="button sync-btn" onClick={syncHandler} type="button"></button>
    </section>
  );
};

const stateToProps = ({ currAlbum }) => ({
  currAlbum,
});

export default connect(stateToProps, { syncWithStorage })(Profile);
