"use strict";
const common_vendor = require("../../common/vendor.js");
const services_hot = require("../../services/hot.js");
require("../../utils/http.js");
require("../../pinia/index.js");
require("../../pinia/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "hot",
  props: {
    type: null
  },
  setup(__props) {
    const query = __props;
    const bannerPic = common_vendor.ref();
    const subTypes = common_vendor.ref([]);
    const subNumber = common_vendor.ref(0);
    const urlMap = [
      { type: "1", title: "特惠推荐", url: "/hot/preference" },
      { type: "2", title: "爆款推荐", url: "/hot/inVogue" },
      { type: "3", title: "一站买全", url: "/hot/oneStop" },
      { type: "4", title: "新鲜好物", url: "/hot/new" }
    ];
    const currUrlMap = urlMap.find((item) => item.type === query.type);
    common_vendor.index.setNavigationBarTitle({ title: currUrlMap.title });
    const getHotList = async () => {
      const result = await services_hot.getHotRecommendAPI(currUrlMap.url, {
        //环境变量，开发环境，修改初始页面方便测试
        page: 30,
        pageSize: 10
      });
      bannerPic.value = result.result.bannerPicture;
      subTypes.value = result.result.subTypes;
    };
    const onScrolltolo = async () => {
      const currsubType = subTypes.value[subNumber.value];
      if (currsubType.goodsItems.page < currsubType.goodsItems.pages) {
        currsubType.goodsItems.page++;
      } else {
        currsubType.finish = true;
        return common_vendor.index.showToast({ icon: "none", title: "没有更多数据了" });
      }
      const result = await services_hot.getHotRecommendAPI(currUrlMap.url, {
        subType: currsubType.id,
        page: currsubType.goodsItems.page,
        pageSize: currsubType.goodsItems.pageSize
      });
      const newsubType = result.result.subTypes[subNumber.value];
      currsubType.goodsItems.items.push(...newsubType.goodsItems.items);
    };
    common_vendor.onLoad(() => {
      getHotList();
    });
    return (_ctx, _cache) => {
      return {
        a: bannerPic.value,
        b: common_vendor.f(subTypes.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id,
            c: index === subNumber.value ? 1 : "",
            d: common_vendor.o(($event) => subNumber.value = index, item.id)
          };
        }),
        c: common_vendor.f(subTypes.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item.goodsItems.items, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods.id,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            b: common_vendor.t(item.finish ? "没有更多数据了~" : "正在加载中..."),
            c: subNumber.value === index,
            d: item.id,
            e: common_vendor.o(onScrolltolo, item.id)
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-65205f53"], ["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/hot/hot.vue"]]);
wx.createPage(MiniProgramPage);
