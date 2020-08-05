import React from "react";
import ReactDOM from "react-dom";

const ModalWindow = ({ isVisible, onClose, children }) => {
  return isVisible
    ? ReactDOM.createPortal(
        <div className="modal-window">
          <div className="modal-window__content">
            <button className="button close-btn modal-window__close-btn" onClick={onClose} type="button"></button>
            {children}
            <button className="button ok-btn modal-window__ok-btn" onClick={onClose} type="button">
              Ok
            </button>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default ModalWindow;
