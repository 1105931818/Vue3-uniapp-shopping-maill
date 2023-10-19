"use strict";
const utils_http = require("../utils/http.js");
const postLoginAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin",
    data
  });
};
const postLoginSimpleAPI = (phoneNumber) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber
    }
  });
};
exports.postLoginAPI = postLoginAPI;
exports.postLoginSimpleAPI = postLoginSimpleAPI;
