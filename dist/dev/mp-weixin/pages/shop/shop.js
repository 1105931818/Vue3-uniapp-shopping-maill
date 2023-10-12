"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_cust_Guess2 = common_vendor.resolveComponent("cust-Guess");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_cust_Guess2)();
}
const _easycom_uni_swipe_action_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
const _easycom_cust_Guess = () => "../../components/cust-Guess.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_cust_Guess)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "shop",
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(2, (item, k0, i0) => {
          return {
            a: item,
            b: "2a98e804-1-" + i0 + ",2a98e804-0"
          };
        }),
        b: `/pages/goods/goods?id=1435025`
      }, {
        c: common_vendor.sr("guessRef", "2a98e804-2")
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/shop/shop.vue"]]);
wx.createPage(MiniProgramPage);
