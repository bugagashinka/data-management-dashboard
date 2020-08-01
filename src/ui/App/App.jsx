import React from "react";
import aspen from "assets/images/aspen.jpg";
import karpaty from "assets/images/karpaty.jpg";

function App() {
  return (
    <main className="app">
      <div className="container">
        <div className="app__inner">
          <button className="button app__menu-btn menu-btn">
            <div className="menu-btn__row1"></div>
            <div className="menu-btn__row2"></div>
            <div className="menu-btn__row3"></div>
          </button>

          <aside className="panel">
            <section className="profile">
              <div className="profile__avatar">
                <img src="" alt="" className="profile__avatar-img" />
              </div>
              <div className="h3 profile__name">Amelia Rice</div>
              <span className="profile__stats">2390 files</span>
              <button className="button upload-btn" type="button">
                Upload
              </button>
            </section>
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
            <section className="thumb-size">
              <div className="thumb-size__inner">
                <button className="button smaller-btn" type="button"></button>
                <div className="thumb-size__slider" tabIndex="0">
                  <input
                    className="input thumb-size__slider-input"
                    tabIndex="-1"
                    type="range"
                    min="1"
                    max="3"
                    value="2"
                  />
                </div>
                <button className="button bigger-btn" type="button"></button>
              </div>
            </section>
          </aside>
          <section className="content">
            <article className="album">
              <header className="album__header">
                <h3 className="title album-title">Subcarpathia 2016</h3>
                <span className="album__stats">(8 photos)</span>
              </header>
              <ul className="album__list">
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={aspen} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
              </ul>
            </article>
            <article className="album">
              <header className="album__header">
                <h3 className="title album-title">Summer 2015</h3>
                <span className="album__stats">(16 photos)</span>
              </header>
              <ul className="album__list">
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
              </ul>
            </article>
            <article className="album">
              <header className="album__header">
                <h3 className="title album-title">Subcarpathia 2016</h3>
                <span className="album__stats">(8 photos)</span>
              </header>
              <ul className="album__list">
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={aspen} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
                <li className="album__thumb">
                  <a href="#" className="album__thumb-link">
                    <div className="album__thumb-content">
                      <img className="album__thumb-img" src={karpaty} alt="" />
                      <div className="album__thumb-exif">
                        <span className="album__thumb-time">5:40 PM</span>
                        <span className="album__thumb-aperture">f/8</span>
                        <span className="album__thumb-speed">1/250</span>
                        <span className="album__thumb-iso">ISO 400</span>
                      </div>
                      <span className="album__thumb-date">24.02.2016</span>
                    </div>
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
