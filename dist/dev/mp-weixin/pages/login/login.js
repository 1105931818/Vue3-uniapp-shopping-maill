"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
require("../../utils/http.js");
require("../../pinia/index.js");
require("../../pinia/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    const onGetphonenumber = async (ev) => {
      const encryptedData = ev.detail.encryptedData;
      const iv = ev.detail.iv;
      await services_login.postLoginAPI({ code, encryptedData, iv });
      common_vendor.index.showToast({ icon: "none", title: "登录成功" });
    };
    common_vendor.onLoad(async () => {
      const result = await common_vendor.wx$1.login();
      code = result.code;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetphonenumber)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
