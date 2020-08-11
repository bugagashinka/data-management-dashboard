const deviceSize = {
  LARGE: 992,
  MEDIUM: 768,
  SMALL: 600,
  MOBILE: 0,

  getDeviceGroup: function (width) {
    for (let deviceGroup of Object.keys(this)) {
      const deviceGroupSize = this[deviceGroup];
      if (width >= deviceGroupSize) return deviceGroupSize;
    }
    return this.SMALL;
  },
};

Object.defineProperty(deviceSize, "getDeviceGroup", {
  enumerable: false,
});

const thumbsRowCount = {
  [deviceSize.LARGE]: [8, 4, 2],
  [deviceSize.MEDIUM]: [6, 3, 1],
  [deviceSize.SMALL]: [4, 2, 1],
  [deviceSize.MOBILE]: [1, 1, 1],
};
export { deviceSize, thumbsRowCount as default };
