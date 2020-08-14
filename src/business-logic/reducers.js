import categories from "./categoriesEnum";
import { uploadFiles, getCurrentTask, fileUploadStatus } from "services/FirestoreService";

const SET_CATEGORY = "reducers/SET_CATEGORY";
const SET_ALBUM = "reducers/SET_ALBUM";
const ADD_ALBUM = "reducers/ADD_ALBUM";
const RENAME_ALBUM = "reducers/RENAME_ALBUM";
const UPDATE_SYNC_PROGRESS = "reducers/UPDATE_SYNC_PROGRESS";

const { PHOTOS_CATEGORY, VIDEOS_CATEGORY, AUDIOS_CATEGORY } = categories;
const DEFAULT_ALBUM_NAME = "All";

const initialState = {
  categories: [PHOTOS_CATEGORY, VIDEOS_CATEGORY, AUDIOS_CATEGORY],
  currCategory: PHOTOS_CATEGORY,
  currAlbum: DEFAULT_ALBUM_NAME,
  syncDataProgress: {
    totalCount: 0,
    uploadedCount: 0,
    totalBytes: 0,
    bytesTransferred: 0,
    status: fileUploadStatus.DONE,
    progress: [],
  },
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

const syncDataProgress = (state, { type, value }) => {
  switch (type) {
    case UPDATE_SYNC_PROGRESS:
      return {
        ...value,
      };
    default:
      return state;
  }
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
        ? `-${new Date().toLocaleDateString("uk-UA")}-${new Date().toLocaleTimeString([], { hour12: false })}`
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

const logicState = (state = initialState, action) => {
  return {
    categories: state.categories,
    currCategory: currCategory(state.currCategory, action),
    currAlbum: currAlbum(state.currAlbum, action),
    albums: albums(state, action),
    syncDataProgress: syncDataProgress(state.syncDataProgress, action),
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

const updateSyncProgress = (data) => ({
  type: UPDATE_SYNC_PROGRESS,
  value: data,
});

const resyncCanceled = (taskSnapshotList = []) => (dispatch) => {
  const resyncFileList = taskSnapshotList
    .filter((task) => task.status === fileUploadStatus.CANCELED)
    .map((task) => task.source);

  if (taskSnapshotList) {
    const pathNodes = taskSnapshotList[0].path.split("/").slice(0, -1);
    dispatch(syncWithStorage(pathNodes.slice(0, -1), pathNodes.slice(-1), resyncFileList));
  }
};

const syncWithStorage = (basePath, endpoint, files, callback) => (dispatch) => {
  if (!files.length) return;

  uploadFiles(
    `${basePath}/${endpoint}`.replace(/\s/g, "-"),
    files,
    (snapshot) => {
      console.log("Progress: ", snapshot);
      dispatch(updateSyncProgress(snapshot));
    },
    (result) => {
      console.log("Complete: ", result);
      dispatch(updateSyncProgress(result));
      if (callback) callback();
    }
  );
};

const syncCancel = () => {
  if (getCurrentTask()) getCurrentTask().cancel();
};

const syncPause = () => {
  if (getCurrentTask()) getCurrentTask().pause();
};
const syncResume = () => {
  if (getCurrentTask()) getCurrentTask().resume();
};

const checkUploadPermission = (currAlbum) => currAlbum !== DEFAULT_ALBUM_NAME;

const checkSyncInProgress = (status) => status === fileUploadStatus.IN_PROGRESS || status === fileUploadStatus.ON_PAUSE;

const addNewAlbum = (albumName) => (dispatch) => {
  dispatch(addAlbum(albumName));
  dispatch(selectAlbum(albumName));
};

const changeCategory = (categoryName) => (dispatch) => {
  dispatch(selectCategory(categoryName));
  dispatch(selectAlbum(DEFAULT_ALBUM_NAME));
};

const editAlbumName = (currName, newName) => (dispatch) => dispatch(renameAlbum(currName, newName));

export {
  logicState as default,
  changeCategory,
  selectAlbum,
  addNewAlbum,
  syncWithStorage,
  editAlbumName,
  checkUploadPermission,
  syncCancel,
  syncPause,
  syncResume,
  checkSyncInProgress,
  resyncCanceled,
};
