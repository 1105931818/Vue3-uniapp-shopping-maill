"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cust_Guess2 = common_vendor.resolveComponent("cust-Guess");
  _easycom_cust_Guess2();
}
const _easycom_cust_Guess = () => "../../components/cust-Guess.js";
if (!Math) {
  _easycom_cust_Guess();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "user",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const orderTypes = [
      { type: 1, text: "待付款", icon: "icon-currency" },
      { type: 2, text: "待发货", icon: "icon-gift" },
      { type: 3, text: "待收货", icon: "icon-check" },
      { type: 4, text: "待评价", icon: "icon-comment" }
    ];
    return (_ctx, _cache) => {
      return common_vendor.e({}, {
        a: common_vendor.unref(safeAreaInsets).top + "px",
        b: common_vendor.f(orderTypes, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.type,
            c: common_vendor.n(item.icon),
            d: `/pagesOrder/list/list?type=${item.type}`
          };
        }),
        c: common_vendor.sr("guessRef", "38b2391e-0")
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
