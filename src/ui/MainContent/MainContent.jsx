import React from "react";
import Thumb from "ui/Thumb";

const MainContent = (props) => {
  return (
    <section className="content">
      <article className="album">
        <header className="album__header">
          <h3 className="title album-title">Subcarpathia 2016</h3>
          <span className="album__stats">(8 photos)</span>
        </header>
        <ul className="album__list">
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
        </ul>
      </article>
      <article className="album">
        <header className="album__header">
          <h3 className="title album-title">Summer 2015</h3>
          <span className="album__stats">(16 photos)</span>
        </header>
        <ul className="album__list">
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
        </ul>
      </article>
      <article className="album">
        <header className="album__header">
          <h3 className="title album-title">Subcarpathia 2016</h3>
          <span className="album__stats">(8 photos)</span>
        </header>
        <ul className="album__list">
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
          <Thumb />
        </ul>
      </article>
    </section>
  );
};

export default MainContent;
