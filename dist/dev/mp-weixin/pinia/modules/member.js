"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.defineStore(
  "member",
  () => {
    const userInfo = common_vendor.ref();
    const setProfile = (data) => {
      userInfo.value = data;
    };
    const clearProfile = () => {
      userInfo.value = null;
    };
    return {
      userInfo,
      setProfile,
      clearProfile
    };
  },
  {
    //数据持久化，网页端配置
    //persist: true,
    //数据持久化，小程序配置
    persist: {
      storage: {
        getItem: (key) => common_vendor.index.getStorageSync(key),
        setItem: (key, value) => common_vendor.index.setStorageSync(key, value)
      }
    }
  }
);
