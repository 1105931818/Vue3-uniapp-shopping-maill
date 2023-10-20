"use strict";
const common_vendor = require("../common/vendor.js");
const useGuessList = () => {
  const guess = common_vendor.ref();
  const scrollList = () => {
    var _a;
    (_a = guess.value) == null ? void 0 : _a.getMore();
  };
  return {
    guess,
    scrollList
  };
};
exports.useGuessList = useGuessList;
