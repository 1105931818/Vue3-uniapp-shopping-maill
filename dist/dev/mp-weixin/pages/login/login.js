"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
require("../../pinia/index.js");
const pinia_modules_member = require("../../pinia/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    const onGetphonenumber = async (ev) => {
      const encryptedData = ev.detail.encryptedData;
      const iv = ev.detail.iv;
      const result = await services_login.postLoginAPI({ code, encryptedData, iv });
      loginSuccess(result.result);
    };
    const onGetphonenumberSimple = async () => {
      const result = await services_login.postLoginSimpleAPI("13412341234");
      loginSuccess(result.result);
    };
    common_vendor.onLoad(async () => {
      const result = await common_vendor.wx$1.login();
      code = result.code;
    });
    const loginSuccess = (profile) => {
      const useInfo = pinia_modules_member.useStore();
      useInfo.setProfile(profile);
      common_vendor.index.showToast({ icon: "success", title: "登录成功" });
      setTimeout(() => {
        common_vendor.index.switchTab({ url: "/pages/user/user" });
      }, 500);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetphonenumber),
        b: common_vendor.o(onGetphonenumberSimple)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
