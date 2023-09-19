"use strict";
const common_vendor = require("../common/vendor.js");
require("../pinia/index.js");
const pinia_modules_member = require("../pinia/modules/member.js");
const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
const httpInterceptor = {
  //拦截前触发
  invoke(options) {
    var _a;
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    options.timeout = 1e4;
    options.header = {
      ...options.header,
      "content-type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    };
    const memberStore = pinia_modules_member.useStore();
    const token = (_a = memberStore.userInfo) == null ? void 0 : _a.token;
    if (token) {
      options.header["Authorization"] = token;
    }
  }
};
common_vendor.index.addInterceptor("request", httpInterceptor);
common_vendor.index.addInterceptor("uploadFile", httpInterceptor);
const http = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          const memberStore = pinia_modules_member.useStore();
          memberStore.clearProfile();
          common_vendor.index.navigateTo({ url: "/pages/user/user" });
          common_vendor.index.showToast({
            icon: "none",
            title: "用户信息过期，请重新登录"
          });
          reject(res);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.data.msg || "网络请求失败"
          });
          reject(res);
        }
      },
      fail: (err) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "网络请求失败"
        });
        reject(err);
      }
    });
  });
};
exports.http = http;
