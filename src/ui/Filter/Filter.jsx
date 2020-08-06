import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { selectCategory, selectAlbum, addNewAlbum, editAlbumName } from "business-logic/reducers";

const LIST_ITEM_LIMIT = 18;
const inputModeEnum = {
  CREATE_MODE: "create",
  EDIT_MODE: "edit",
};

const Filter = (props) => {
  const [inputModeState, setInputModeState] = useState({
    mode: inputModeEnum.CREATE_MODE,
    initialValue: "",
  });
  const [albumInputValue, setAlbumValue] = useState("");
  const [showAlbumInput, toggleAlbumInput] = useState(false);
  const {
    categories,
    currCategory,
    currAlbum,
    albums,
    selectCategory,
    selectAlbum,
    addNewAlbum,
    editAlbumName,
  } = props;

  const selectCategoryHandler = (category) => (e) => {
    e.preventDefault();
    selectCategory(category);
  };

  const selectAlbumHandler = (album) => (e) => {
    e.preventDefault();
    selectAlbum(album);
  };

  const addHandler = () => {
    setInputModeState((prevState) => ({ ...prevState, mode: inputModeEnum.CREATE_MODE }));
    setAlbumValue("");
    toggleAlbumInput(!showAlbumInput);
  };

  const acceptHandler = () => {
    if (!albumInputValue) return;

    if (inputModeState.mode === inputModeEnum.EDIT_MODE) {
      editAlbumName(inputModeState.initialValue, albumInputValue);
    } else {
      addNewAlbum(albumInputValue);
    }
    toggleAlbumInput(!showAlbumInput);
  };

  const cancelHandler = () => {
    toggleAlbumInput(!showAlbumInput);
  };

  const changeHandler = ({ target }) => {
    setAlbumValue(target.value);
  };

  const editHandler = (albumName) => (e) => {
    setInputModeState({ initialValue: albumName, mode: inputModeEnum.EDIT_MODE });
    setAlbumValue(albumName);
    toggleAlbumInput(true);
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
        <button onClick={editHandler(albumName)} className="button albums__edit-btn" type="button"></button>
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
            className={classNames("albums-names__create", { "albums-names__create_visible": showAlbumInput })}
          >
            <input
              onChange={changeHandler}
              value={albumInputValue}
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

const stateToProps = ({ logicState }) => ({
  categories: logicState.categories,
  currCategory: logicState.currCategory,
  currAlbum: logicState.currAlbum,
  albums: logicState.albums[logicState.currCategory].map((album) => album.name),
});

export default connect(stateToProps, { selectCategory, selectAlbum, addNewAlbum, editAlbumName })(Filter);
