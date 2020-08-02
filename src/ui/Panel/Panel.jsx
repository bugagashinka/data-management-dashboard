import React from "react";
import Profile from "ui/Profile";
import Filter from "ui/Filter";
import SliderInput from "ui/SliderInput";

const Panel = (props) => {
  return (
    <aside className="panel">
      <Profile />
      <Filter />
      <SliderInput />
    </aside>
  );
};

export default Panel;
