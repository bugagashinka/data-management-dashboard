import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { selectCategory, selectAlbum, addNewAlbum } from "business-logic/reducers";

const LIST_ITEM_LIMIT = 18;

const Filter = (props) => {
  const [createAlbumValue, setAlbumValue] = useState("");
  const [showCreateAlbum, toggleCreateAlbum] = useState(false);
  const { categories, currCategory, currAlbum, albums, selectCategory, selectAlbum, addNewAlbum } = props;

  const selectCategoryHandler = (category) => (e) => {
    e.preventDefault();
    selectCategory(category);
  };

  const selectAlbumHandler = (album) => (e) => {
    e.preventDefault();
    selectAlbum(album);
  };

  const addHandler = () => {
    setAlbumValue("");
    toggleCreateAlbum(!showCreateAlbum);
  };

  const acceptHandler = () => {
    if (createAlbumValue) {
      addNewAlbum(createAlbumValue);
      toggleCreateAlbum(!showCreateAlbum);
    }
  };

  const cancelHandler = () => {
    toggleCreateAlbum(!showCreateAlbum);
  };

  const changeHandler = ({ target }) => {
    setAlbumValue(target.value);
  };

  const categoryItems = categories.map((category) => {
    const itemStyles = classNames("categories__link", "filter__list-link", { active: category === currCategory });
    return (
      <li className="categories__item" key={category}>
        <a href="#" className={itemStyles} onClick={selectCategoryHandler(category)}>
          {category}
        </a>
      </li>
    );
  });

  const albumItems = albums.map((albumName) => {
    const albumItemStyle = classNames("albums-names-link", "filter__list-link", { active: currAlbum === albumName });
    const displayedName = albumName.length > LIST_ITEM_LIMIT ? `${albumName.slice(0, LIST_ITEM_LIMIT)}...` : albumName;
    return (
      <li className="albums-names__item" key={albumName} title={albumName}>
        <a href="#" className={albumItemStyle} onClick={selectAlbumHandler(albumName)}>
          {displayedName}
        </a>
      </li>
    );
  });

  return (
    <section className="filter">
      <article className="search">
        <form className="search-form">
          <input type="text" className="input search-form__input" placeholder="Search files" />
        </form>
      </article>
      <article className="categories filter__item">
        <h3 className="title panel-title">Categories</h3>
        <ul className="categories-list filter__list">{categoryItems}</ul>
      </article>
      <article className="albums filter__item">
        <section className="albums__header">
          <h3 className="title panel-title">Albums</h3>
          <button className="button albums__add-btn" onClick={addHandler}></button>
        </section>
        <ul className="albums-names filter__list">
          <li
            key="album-create"
            className={classNames("albums-names__create", { "albums-names__create_visible": showCreateAlbum })}
          >
            <input
              onChange={changeHandler}
              value={createAlbumValue}
              className="albums-input albums-names__input filter__list-link active"
            ></input>
            <div className="albums-names__controls">
              <button className="button albums__accept-btn" onClick={acceptHandler} type="button"></button>
              <button className="button albums__cancel-btn" onClick={cancelHandler} type="button"></button>
            </div>
          </li>
          {albumItems}
        </ul>
      </article>
    </section>
  );
};

const stateToProps = (state) => ({
  categories: state.categories,
  currCategory: state.currCategory,
  currAlbum: state.currAlbum,
  albums: state.albums[state.currCategory].map((album) => album.name),
});

export default connect(stateToProps, { selectCategory, selectAlbum, addNewAlbum })(Filter);
