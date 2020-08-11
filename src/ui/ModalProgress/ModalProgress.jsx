import React, { useState } from "react";
import classNames from "classnames";
import ProgressItem from "./ProgressItem";
import { connect } from "react-redux";
import { bytesToMb } from "utils";
import { syncCancel, syncResume, syncPause, checkSyncInProgress } from "business-logic/reducers";

const ModalProgress = ({ progressData }) => {
  const [asyncActive, toggleSyncProcess] = useState(true);
  const [isVisible, toggleWindow] = useState(false);

  const toggleModalWindow = () => {
    toggleWindow((isVisible) => !isVisible);
  };
  const toggleSync = () => {
    toggleSyncProcess((state) => {
      if (state) {
        syncPause();
      } else {
        syncResume();
      }
      return !state;
    });
  };

  const modalWindowStyle = classNames("modal-progress", {
    "modal-progress_minimized": !isVisible,
  });
  const syncControlButtonStyles = classNames("button", "circle-btn", {
    "progress-bar__pause-btn": asyncActive,
    "progress-bar__resume-btn": !asyncActive,
  });

  const progressItemList = progressData.progress.map((itemData, index) => <ProgressItem key={index} data={itemData} />);
  return (
    <aside className={modalWindowStyle}>
      <button
        onClick={toggleModalWindow}
        className="button circle-btn modal-progress__minimize-btn"
        type="button"
      ></button>
      <section className="progress-detail modal-progress__top">
        <ul className="progress-list progress-detail__list">{progressItemList}</ul>
      </section>
      <section
        className={classNames("progress-total", "modal-progress__bottom", {
          "progress-total_visible": checkSyncInProgress(progressData.status),
        })}
        onClick={!isVisible ? toggleModalWindow : null}
      >
        <label htmlFor="progress-bar" className="progress-total__label">
          {`${progressData.uploadedCount} of ${progressData.totalCount} uploaded`}
        </label>
        <div className="progress-total__inner">
          <div className="progress-indicator">
            <div className="progress-bar__value">
              {`${bytesToMb(progressData.bytesTransferred)}MB / ${bytesToMb(progressData.totalBytes)}MB`}
            </div>
            <progress
              id="progress-bar"
              className="progress-bar"
              max={progressData.totalBytes}
              value={progressData.bytesTransferred}
            ></progress>
          </div>
          <div className="progress-total__control">
            <button onClick={toggleSync} className={syncControlButtonStyles} type="button"></button>
            <button onClick={syncCancel} className="button circle-btn progress-bar__cancel-btn" type="button"></button>
          </div>
        </div>
      </section>
    </aside>
  );
};

const stateToProps = ({ logicState }) => ({
  progressData: logicState.syncDataProgress,
});

export default connect(stateToProps, {})(ModalProgress);
