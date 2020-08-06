import categories from "./categoriesEnum";
import { uploadFiles } from "services/FirestoreService";

const SET_CATEGORY = "reducers/SET_CATEGORY";
const SET_ALBUM = "reducers/SET_ALBUM";
const ADD_ALBUM = "reducers/ADD_ALBUM";
const RENAME_ALBUM = "reducers/RENAME_ALBUM";

const { PHOTOS_CATEGORY, VIDEOS_CATEGORY, AUDIOS_CATEGORY } = categories;
const DEFAULT_ALBUM_NAME = "All";

const initialState = {
  categories: [PHOTOS_CATEGORY, VIDEOS_CATEGORY, AUDIOS_CATEGORY],
  currCategory: PHOTOS_CATEGORY,
  currAlbum: DEFAULT_ALBUM_NAME,
  currentTask: null,
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
  searchQuery: "",
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

const albums = (state, { type, value }) => {
  switch (type) {
    case ADD_ALBUM:
      const dateSuffix = state.albums[state.currCategory].find((album) => album.name === value)
        ? `-${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
        : "";
      const newState = [...state.albums[state.currCategory]];
      newState.splice(1, 0, {
        name: `${value}${dateSuffix}`,
        type: state.currCategory,
        urlList: Array(0),
      });
      return {
        ...state.albums,
        [state.currCategory]: newState,
      };
    case RENAME_ALBUM:
      return {
        ...state.albums,
        [state.currCategory]: state.albums[state.currCategory].map((album) => {
          if (album.name === value.currName && album.name !== value.newName) {
            album.name = value.newName;
          }
          return album;
        }),
      };

    default:
      return state.albums;
  }
};

const stateReducer = (state = initialState, action) => {
  return {
    categories: state.categories,
    currCategory: currCategory(state.currCategory, action),
    currAlbum: currAlbum(state.currAlbum, action),
    currentTask: state.currentTask,
    albums: albums(state, action),
    searchQuery: state.searchQuery,
  };
};

const selectCategory = (categoryName) => ({
  type: SET_CATEGORY,
  value: categoryName,
});

const selectAlbum = (albumName) => ({
  type: SET_ALBUM,
  value: albumName,
});

const addAlbum = (albumName) => ({
  type: ADD_ALBUM,
  value: albumName,
});

const renameAlbum = (currName, newName) => ({
  type: RENAME_ALBUM,
  value: { currName, newName },
});

const syncWithStorage = (files) => (dispatch) => {
  if (!files.length) return;

  const uploadTask = uploadFiles(
    "photos",
    files,
    (snapshot) => {
      console.log("Progress: ", snapshot);
    },
    (result) => {
      console.log("Complete: ", result);
    }
  );
};

const checkUploadPermission = (currAlbum) => {
  return currAlbum !== DEFAULT_ALBUM_NAME;
};

const addNewAlbum = (albumName) => (dispatch) => {
  dispatch(addAlbum(albumName));
  dispatch(selectAlbum(albumName));
};

const editAlbumName = (currName, newName) => (dispatch) => dispatch(renameAlbum(currName, newName));

export {
  stateReducer as default,
  selectCategory,
  selectAlbum,
  addNewAlbum,
  syncWithStorage,
  editAlbumName,
  checkUploadPermission,
};
