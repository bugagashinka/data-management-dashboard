import React, { useState } from "react";
import scaleFactor from "business-logic/scaleFactor";
import { scale } from "business-logic/uiState";
import { connect } from "react-redux";

const SliderInput = ({ scale }) => {
  const [scaleValue, setScale] = useState(scaleFactor.MEDIUM);

  const setScaleHandler = (value) => ({ target }) => {
    setScale(value);
    scale(value);
  };

  const changeHandler = ({ target }) => {
    setScale(target.value);
    scale(target.value);
  };

  return (
    <section className="thumb-size">
      <div className="thumb-size__inner">
        <button className="button smaller-btn" onClick={setScaleHandler(scaleFactor.SMALLER)} type="button"></button>
        <div className="thumb-size__slider" tabIndex="0">
          <input
            className="input thumb-size__slider-input"
            onChange={changeHandler}
            tabIndex="-1"
            type="range"
            min={scaleFactor.SMALLER}
            step={scaleFactor.STEP}
            max={scaleFactor.BIGER}
            value={scaleValue}
          />
        </div>
        <button className="button bigger-btn" onClick={setScaleHandler(scaleFactor.BIGER)} type="button"></button>
      </div>
    </section>
  );
};

export default connect(null, {
  scale,
})(SliderInput);
