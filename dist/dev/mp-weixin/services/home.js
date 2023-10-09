"use strict";
const utils_http = require("../utils/http.js");
const getHomeBannerAPI = (distributionSite = 1) => {
  return utils_http.http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite
    }
  });
};
const getCategoryAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/category/mutli"
  });
};
const getHotAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/hot/mutli"
  });
};
const getGuessListAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/home/goods/guessLike",
    data
  });
};
exports.getCategoryAPI = getCategoryAPI;
exports.getGuessListAPI = getGuessListAPI;
exports.getHomeBannerAPI = getHomeBannerAPI;
exports.getHotAPI = getHotAPI;
