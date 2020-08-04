import React from "react";
import Profile from "ui/Profile";
import Filter from "ui/Filter";
import SliderInput from "ui/SliderInput";

const Panel = (props) => {
  return (
    <aside className="panel">
      <div className="panel__inner">
        <Profile />
        <Filter />
        <SliderInput />
      </div>
    </aside>
  );
};

export default Panel;
