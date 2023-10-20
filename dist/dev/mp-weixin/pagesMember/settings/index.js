"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../pinia/index.js");
const pinia_modules_member = require("../../pinia/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const userInfo = pinia_modules_member.useStore();
    const onLogout = () => {
      common_vendor.index.showModal({
        content: "是否退出登录？",
        success: (res) => {
          if (res.confirm) {
            userInfo.clearProfile();
            common_vendor.index.navigateBack();
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userInfo).userInfo
      }, common_vendor.unref(userInfo).userInfo ? {} : {}, {
        b: common_vendor.unref(userInfo).userInfo
      }, common_vendor.unref(userInfo).userInfo ? {
        c: common_vendor.o(onLogout)
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pagesMember/settings/index.vue"]]);
wx.createPage(MiniProgramPage);
