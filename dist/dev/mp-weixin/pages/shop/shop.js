"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "shop",
  setup(__props) {
    const title = common_vendor.ref("购物车");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/shop/shop.vue"]]);
wx.createPage(MiniProgramPage);
