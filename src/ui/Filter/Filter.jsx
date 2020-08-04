import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { selectCategory } from "business-logic/reducers";

const Filter = (props) => {
  const { categories, currCategory, currAlbum, albums, selectCategory } = props;

  const categoryItems = categories.map((category) => {
    const itemStyles = classNames("categories__link", "filter__list-link", { active: category === currCategory });
    return (
      <li className="categories__item" key={category}>
        <a
          href="#"
          className={itemStyles}
          onClick={(e) => {
            e.preventDefault();
            selectCategory(category);
          }}
        >
          {category}
        </a>
      </li>
    );
  });

  const albumItems = albums.map((albumName) => {
    const albumItemStyle = classNames("album-names-link", "filter__list-link", { active: currAlbum === albumName });
    return (
      <li className="album-names__item" key={albumName}>
        <a href="#" className={albumItemStyle}>
          {albumName}
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
          <button className="button albums__add-btn"></button>
        </section>
        <ul className="albums-names filter__list">{albumItems}</ul>
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

export default connect(stateToProps, { selectCategory })(Filter);
