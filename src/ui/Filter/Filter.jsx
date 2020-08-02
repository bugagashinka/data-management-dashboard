import React from "react";

const Filter = (props) => {
  return (
    <section className="filter">
      <article className="search">
        <form className="search-form">
          <input type="text" className="input search-form__input" placeholder="Search files" />
        </form>
      </article>
      <article className="categories filter__item">
        <h3 className="title panel-title">Categories</h3>
        <ul className="categories-list filter__list">
          <li className="categories__item">
            <a href="#" className="categories__link filter__list-link">
              Photos
            </a>
          </li>
          <li className="categories__item">
            <a href="#" className="categories__link filter__list-link">
              Videos
            </a>
          </li>
          <li className="categories__item">
            <a href="#" className="categories__link filter__list-link">
              Projects
            </a>
          </li>
        </ul>
      </article>
      <article className="albums filter__item">
        <section className="albums__header">
          <h3 className="title panel-title">Albums</h3>
          <button className="button albums__add-btn"></button>
        </section>
        <ul className="albums-names filter__list">
          <li className="album-names__item">
            <a href="#" className="album-names-link filter__list-link">
              Subcarpathia 2016
            </a>
          </li>
          <li className="album-names__item">
            <a href="#" className="album-names-link filter__list-link">
              Summer 2015
            </a>
          </li>
          <li className="album-names__item">
            <a href="#" className="album-names-link filter__list-link">
              Aspen 2015
            </a>
          </li>
          <li className="album-names__item">
            <a href="#" className="album-names-link filter__list-link">
              Croatia 2015
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Filter;
