"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CustomNavbar",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const openCode = () => {
      common_vendor.index.scanCode({
        success: (res) => {
          console.log(res, "扫描成功");
        },
        fail: (fail) => {
          console.log(fail, "扫描失败");
        },
        complete: (complete) => {
          console.log(complete, "扫描完成");
        }
      });
    };
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.o(openCode),
        b: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ff0d84a2"], ["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/index/components/CustomNavbar.vue"]]);
wx.createComponent(Component);
