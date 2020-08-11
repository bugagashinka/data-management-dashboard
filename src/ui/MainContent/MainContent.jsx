import React, { useEffect } from "react";
import Thumb from "ui/Thumb";
import { useWindowSize } from "utils";
import { resize } from "business-logic/uiState";
import { connect } from "react-redux";

const MainContent = ({ thumbsPerRow, resize }) => {
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    resize([windowWidth, windowHeight]);
  }, [windowWidth]);

  return (
    <section className="content">
      <article className="album">
        <header className="album__header">
          <h3 className="title album-title">Subcarpathia 2016</h3>
          <span className="album__stats">(8 photos)</span>
        </header>
        <ul className="album__list">
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
        </ul>
      </article>
      <article className="album">
        <header className="album__header">
          <h3 className="title album-title">Summer 2015</h3>
          <span className="album__stats">(16 photos)</span>
        </header>
        <ul className="album__list">
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
        </ul>
      </article>
      <article className="album">
        <header className="album__header">
          <h3 className="title album-title">Subcarpathia 2016</h3>
          <span className="album__stats">(8 photos)</span>
        </header>
        <ul className="album__list">
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
          <Thumb className={`thumb-col-${thumbsPerRow}`} />
        </ul>
      </article>
    </section>
  );
};

const stateToProps = ({ uiState }) => ({
  thumbsPerRow: uiState.thumbsPerRow,
});

export default connect(stateToProps, {
  resize,
})(MainContent);
