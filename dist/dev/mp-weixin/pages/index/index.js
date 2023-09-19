"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
require("../../utils/http.js");
require("../../pinia/index.js");
require("../../pinia/modules/member.js");
if (!Array) {
  const _easycom_cust_Swiper2 = common_vendor.resolveComponent("cust-Swiper");
  _easycom_cust_Swiper2();
}
const _easycom_cust_Swiper = () => "../../components/cust-Swiper.js";
if (!Math) {
  (CustomNavbar + _easycom_cust_Swiper)();
}
const CustomNavbar = () => "./component/CustomNavbar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const getBanner = async () => {
      const result = await services_home.getHomeBanner();
      console.log(result);
    };
    common_vendor.onLoad(() => {
      getBanner();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
