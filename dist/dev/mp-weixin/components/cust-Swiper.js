"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cust-Swiper",
  props: {
    list: null,
    height: null
  },
  setup(__props) {
    const activeIndex = common_vendor.ref(0);
    const onChange = (e) => {
      //!非空断言，主观上排除了undefined的情况
      activeIndex.value = e.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: index
          };
        }),
        b: common_vendor.o(onChange),
        c: common_vendor.f(__props.list.length, (item, index, i0) => {
          return {
            a: item,
            b: index === activeIndex.value ? 1 : ""
          };
        }),
        d: __props.height
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a32dec4"], ["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/components/cust-Swiper.vue"]]);
wx.createComponent(Component);
