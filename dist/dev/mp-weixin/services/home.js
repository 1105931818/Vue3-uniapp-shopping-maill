"use strict";
const utils_http = require("../utils/http.js");
const getHomeBanner = (distributionSite = 1) => {
  return utils_http.http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite
    }
  });
};
exports.getHomeBanner = getHomeBanner;
