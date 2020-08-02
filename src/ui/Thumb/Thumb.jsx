import React from "react";
import aspen from "assets/images/aspen.jpg";

const Thumb = (props) => {
  return (
    <li className="album__thumb">
      <a href="#" className="album__thumb-link">
        <div className="album__thumb-content">
          <img className="album__thumb-img" src={aspen} alt="" />
          <div className="album__thumb-exif">
            <span className="album__thumb-time">5:40 PM</span>
            <span className="album__thumb-aperture">f/8</span>
            <span className="album__thumb-speed">1/250</span>
            <span className="album__thumb-iso">ISO 400</span>
          </div>
          <span className="album__thumb-date">24.02.2016</span>
        </div>
      </a>
    </li>
  );
};

export default Thumb;
