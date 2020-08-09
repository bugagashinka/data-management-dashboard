import React from "react";
import img from "assets/images/aspen.jpg";

const ProgressItem = (props) => {
  return (
    <li className="progress-item">
      <div className="progress-item__inner">
        <img className="progress-item__img" src={img} alt="" />
        <div className="progress-item__detail">
          <label htmlFor="progress-item-bar" className="progress-item__label">
            <span>{"The should be "}</span>
            <span className="progress-item__stats">{"30Mb/50Mb"}</span>
          </label>
          <progress
            id="progress-item-bar"
            className="progress-bar progress-item__indicator"
            max="100"
            value="20"
          ></progress>
        </div>
      </div>
    </li>
  );
};

export default ProgressItem;
