"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _component_use = common_vendor.resolveComponent("use");
  const _component_svg = common_vendor.resolveComponent("svg");
  (_component_use + _component_svg)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    type: null,
    color: null,
    width: null,
    height: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["xlink:href"]: "#icon-" + __props.type,
          fill: __props.color
        }),
        b: __props.width ? __props.width : "32rpx",
        c: __props.height ? __props.height : "32rpx"
      };
    };
  }
});
const Svg = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/components/Svg/index.vue"]]);
const allGloablComponent = { Svg };
const gloalComponent = {
  install(app) {
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key]);
    });
  }
};
exports.gloalComponent = gloalComponent;
