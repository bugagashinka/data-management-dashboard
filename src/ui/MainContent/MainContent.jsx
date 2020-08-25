import React, { useEffect } from "react";
import Thumb from "ui/Thumb";
import { useWindowSize } from "utils";
import { resize } from "business-logic/uiState";
import { connect } from "react-redux";

const MainContent = ({ albums = [], thumbsPerRow, resize }) => {
  const [windowWidth, windowHeight] = useWindowSize();
  useEffect(() => {
    resize([windowWidth, windowHeight]);
  }, [windowWidth]);

  const albumElements = albums.map((album) => {
    const thumbElements = album.urlList.map((thumbUrl, index) => (
      <Thumb key={index} url={thumbUrl} className={`thumb-col-${thumbsPerRow}`} />
    ));
    return (
      <article className="album" key={album.name}>
        <header className="album__header">
          <h3 className="title album-title">{album.name}</h3>
          <span className="album__stats">{`(${album.urlList.length} photos)`}</span>
        </header>
        <ul className="album__list">{thumbElements}</ul>
      </article>
    );
  });

  return <section className="content">{albumElements}</section>;
};

const stateToProps = ({ logicState, uiState }) => ({
  albums: logicState.albums[logicState.currCategory].filter((album) => {
    const isCurrentAlbum = album.name === logicState.currAlbum;
    const isNotDefaultAlbum = album.name !== "All";
    const isCurrentDefault = logicState.currAlbum === "All";
    return (isCurrentAlbum && isNotDefaultAlbum) || (isCurrentDefault && isNotDefaultAlbum);
  }),
  thumbsPerRow: uiState.thumbsPerRow,
});

export default connect(stateToProps, {
  resize,
})(MainContent);
