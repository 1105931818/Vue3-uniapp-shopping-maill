"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
require("../utils/http.js");
require("../pinia/index.js");
require("../pinia/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cust-Guess",
  setup(__props, { expose }) {
    const pageParams = {
      page: 1,
      pageSize: 10
    };
    const contList = common_vendor.ref([]);
    const finish = common_vendor.ref(false);
    const getList = async () => {
      if (finish.value) {
        return common_vendor.index.showToast({
          title: "已经到底了～",
          icon: "none"
        });
      }
      const result = await services_home.getGuessListAPI(pageParams);
      contList.value.push(...result.result.items);
      if (pageParams.page < result.result.pages) {
        pageParams.page++;
      } else {
        finish.value = true;
      }
    };
    const resetData = () => {
      pageParams.page = 1;
      contList.value = [];
      finish.value = false;
    };
    common_vendor.onMounted(() => {
      getList();
    });
    expose({
      getMore: getList,
      resetData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(contList.value, (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: `/pages/goods/goods?id=${item.id}`,
            e: index
          };
        }),
        b: common_vendor.t(finish.value ? "已经到底了！" : "正在加载中...")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d5c8d9a"], ["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/components/cust-Guess.vue"]]);
wx.createComponent(Component);
