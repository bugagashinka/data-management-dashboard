import categories from "./categoriesEnum";

const SET_CATEGORY = "reducers/SET_CATEGORY";
const SET_ALBUM = "reducers/SET_ALBUM";

const { PHOTOS_CATEGORY, VIDEOS_CATEGORY, AUDIOS_CATEGORY } = categories;
const DEFAULT_ALBUM_NAME = "All";

const initialState = {
  categories: [PHOTOS_CATEGORY, VIDEOS_CATEGORY, AUDIOS_CATEGORY],
  currCategory: PHOTOS_CATEGORY,
  albums: {
    [PHOTOS_CATEGORY]: [
      {
        name: DEFAULT_ALBUM_NAME,
      },
      {
        name: "Subcarpathia 2016",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },
      {
        name: "Name of Album",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },
      {
        name: "Summer 2015",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },
      {
        name: "Aspen 2016",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },
    ],
    [VIDEOS_CATEGORY]: [
      {
        name: DEFAULT_ALBUM_NAME,
      },
      {
        name: "Video 2016",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },

      {
        name: "Video 2020",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },
    ],
    [AUDIOS_CATEGORY]: [
      {
        name: DEFAULT_ALBUM_NAME,
      },
      {
        name: "Sound-1",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },
      {
        name: "Album 2011",
        type: PHOTOS_CATEGORY,
        urlList: [],
      },
    ],
  },
  currAlbum: DEFAULT_ALBUM_NAME,
  searchQuery: "",
};

const stateReducer = (state = initialState, action) => {
  return {
    categories: state.categories,
    currCategory: currCategory(state.currCategory, action),
    albums: state.albums,
    currAlbum: currAlbum(state.currAlbum, action),
    searchQuery: state.searchQuery,
  };
};

const currCategory = (state, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.value;
    default:
      return state;
  }
};

const currAlbum = (state, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return action.value;
    default:
      return state;
  }
};

const selectCategory = (categoryName) => ({
  type: SET_CATEGORY,
  value: categoryName,
});

const selectAlbum = (albumName) => ({
  type: SET_ALBUM,
  value: albumName,
});

export { stateReducer as default, selectCategory };
