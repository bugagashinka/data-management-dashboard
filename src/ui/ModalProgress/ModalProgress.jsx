import React, { useState } from "react";
import classNames from "classnames";
import ProgressItem from "./ProgressItem";

const ModalProgress = (props) => {
  const [asyncActive, toggleSyncProcess] = useState(false);
  const [isVisible, toggleWindow] = useState(false);

  const showModalWindow = () => {
    toggleWindow((isVisible) => !isVisible);
  };
  const toggleSync = () => {
    toggleSyncProcess((state) => !state);
  };

  const modalWindowStyle = classNames("modal-progress", { "modal-progress_minimized": !isVisible });
  const syncControlButtonStyles = classNames("button", "circle-btn", {
    "progress-bar__pause-btn": asyncActive,
    "progress-bar__resume-btn": !asyncActive,
  });
  return (
    <aside className={modalWindowStyle}>
      <button
        onClick={showModalWindow}
        className="button circle-btn modal-progress__minimize-btn"
        type="button"
      ></button>
      <section className="progress-detail modal-progress__top">
        <ul className="progress-list progress-detail__list">
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
          <ProgressItem />
        </ul>
      </section>
      <section className="progress-total modal-progress__bottom" onClick={!isVisible && showModalWindow}>
        <label htmlFor="progress-bar" className="progress-total__label">
          asd asd asdds
        </label>
        <div className="progress-total__inner">
          <div className="progress-indicator">
            <div className="progress-bar__value">{"30Mb/50Mb"}</div>
            <progress id="progress-bar" className="progress-bar" max="100" value="20"></progress>
          </div>
          <div className="progress-total__control">
            <button onClick={toggleSync} className={syncControlButtonStyles} type="button"></button>
            <button className="button circle-btn progress-bar__cancel-btn" type="button"></button>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default ModalProgress;
