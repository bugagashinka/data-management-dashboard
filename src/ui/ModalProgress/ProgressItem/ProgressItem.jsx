import React from "react";
import img from "assets/images/aspen.jpg";
import { bytesToMb } from "utils";
import { fileUploadStatus } from "services/FirestoreService";
import statusOkIcon from "assets/icon/status-ok-icon.svg";
import statusCancelIcon from "assets/icon/status-cancel-icon.svg";
import statusPauseIcon from "assets/icon/status-pause-icon.svg";
import statusProgressIcon from "assets/icon/status-progress-icon.svg";

const PROGRESS_LABEL_LIMIT = 15;

const ProgressItem = ({ data }) => {
  const getIconByStatus = (status) => {
    if (status === fileUploadStatus.DONE) {
      return statusOkIcon;
    } else if (status === fileUploadStatus.IN_PROGRESS) {
      return statusProgressIcon;
    } else if (status === fileUploadStatus.CANCELED) {
      return statusCancelIcon;
    } else if (status === fileUploadStatus.ON_PAUSE) {
      return statusPauseIcon;
    }
  };

  const progressLabel =
    data && data.name.length > PROGRESS_LABEL_LIMIT ? `${data.name.slice(0, PROGRESS_LABEL_LIMIT)}...` : data.name;
  return (
    <li className="progress-item">
      <div className="progress-item__inner">
        <img className="progress-item__img" src={img} alt="" />
        <div className="progress-item__detail">
          <label htmlFor="progress-item-bar" className="progress-item__label" title={data.name}>
            <span>{progressLabel}</span>
            <span className="progress-item__stats">
              {`${bytesToMb(data.bytesTransferred)}MB / ${bytesToMb(data.totalBytes)}MB`}
            </span>
          </label>
          <progress
            id="progress-item-bar"
            className="progress-bar progress-item__indicator"
            max={data.totalBytes}
            value={data.bytesTransferred}
          ></progress>
        </div>
        <div
          style={{ backgroundImage: `url(${getIconByStatus(data.status)})` }}
          className="progress-item__status"
        ></div>
      </div>
    </li>
  );
};

export default ProgressItem;
