import React from "react";

const SliderInput = (props) => {
  return (
    <section className="thumb-size">
      <div className="thumb-size__inner">
        <button className="button smaller-btn" type="button"></button>
        <div className="thumb-size__slider" tabIndex="0">
          <input className="input thumb-size__slider-input" tabIndex="-1" type="range" min="1" max="3" value="2" />
        </div>
        <button className="button bigger-btn" type="button"></button>
      </div>
    </section>
  );
};

export default SliderInput;
