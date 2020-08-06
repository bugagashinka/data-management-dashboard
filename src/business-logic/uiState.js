import scaleEnum from "./scaleFactor";
import thumbsRowCount, { deviceSize } from "./thumbsRowCount";

const SET_SCALE = "reducers/SET_SCALE";
const SET_SCREEN_SIZE = "reducers/SET_SCREEN_SIZE";
const UPDATE_THUMB_COUNT = "reducers/UPDATE_THUMB_COUNT";

const DEFAULT_THUMBS_COUNT = thumbsRowCount[deviceSize.LARGE][scaleEnum.MEDIUM];

const initialState = {
  screenSize: [0, 0],
  scaleFactor: scaleEnum.MEDIUM,
  thumbsPerRow: DEFAULT_THUMBS_COUNT,
};

const scaleFactor = (state, { type, value }) => {
  switch (type) {
    case SET_SCALE:
      return value;
    default:
      return state;
  }
};

const screenSize = (state, { type, value }) => {
  switch (type) {
    case SET_SCREEN_SIZE:
      return value;
    default:
      return state;
  }
};

const thumbsPerRow = (state, { type }) => {
  switch (type) {
    case UPDATE_THUMB_COUNT:
      const [width] = state.screenSize;
      const currentDeviceSizeGroup = deviceSize.getDeviceGroup(width);
      console.log("currentDeviceSizeGroup ", currentDeviceSizeGroup);
      const thumbsCountsForSize = thumbsRowCount[currentDeviceSizeGroup];
      console.log(thumbsCountsForSize, state.scaleFactor);
      return thumbsCountsForSize[state.scaleFactor];
    default:
      return state.thumbsPerRow;
  }
};

const uiState = (state = initialState, action) => ({
  screenSize: screenSize(state.screenSize, action),
  scaleFactor: scaleFactor(state.scaleFactor, action),
  thumbsPerRow: thumbsPerRow(state, action),
});

const setScreenSize = (size) => ({
  type: SET_SCREEN_SIZE,
  value: size,
});

const setScaleFactor = (scale) => ({
  type: SET_SCALE,
  value: Number.parseInt(scale),
});

const updateThumbsCount = () => ({
  type: UPDATE_THUMB_COUNT,
});

const scale = (factor) => (dispatch) => {
  console.log("scale factor ", factor);
  dispatch(setScaleFactor(factor));
  dispatch(updateThumbsCount());
};

const resize = (size) => (dispatch) => {
  dispatch(setScreenSize(size));
  dispatch(updateThumbsCount());
};

export { uiState as default, scale, resize };
