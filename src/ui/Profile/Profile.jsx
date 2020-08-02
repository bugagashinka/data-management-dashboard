import React from "react";

const Profile = (props) => {
  return (
    <section className="profile">
      <div className="profile__avatar">
        <img src="" alt="" className="profile__avatar-img" />
      </div>
      <div className="h3 profile__name">Amelia Rice</div>
      <span className="profile__stats">2390 files</span>
      <button className="button upload-btn" type="button">
        Upload
      </button>
    </section>
  );
};

export default Profile;
