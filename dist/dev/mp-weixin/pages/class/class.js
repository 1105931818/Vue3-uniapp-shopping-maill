"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const services_class = require("../../services/class.js");
require("../../utils/http.js");
require("../../pinia/index.js");
require("../../pinia/modules/member.js");
if (!Array) {
  const _easycom_cust_Swiper2 = common_vendor.resolveComponent("cust-Swiper");
  _easycom_cust_Swiper2();
}
const _easycom_cust_Swiper = () => "../../components/cust-Swiper.js";
if (!Math) {
  (PageSkeleton + _easycom_cust_Swiper)();
}
const PageSkeleton = () => "./components/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "class",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const categoryList = common_vendor.ref([]);
    const categoryNumber = common_vendor.ref(0);
    const isShow = common_vendor.ref(true);
    const getBannerData = async () => {
      const result = await services_home.getHomeBannerAPI(2);
      bannerList.value = result.result;
    };
    const getCategoryTop = async () => {
      const result = await services_class.getCategoryTopAPI();
      categoryList.value = result.result;
    };
    const subCategoryList = common_vendor.computed(() => {
      var _a;
      return ((_a = categoryList.value[categoryNumber.value]) == null ? void 0 : _a.children) || [];
    });
    common_vendor.onLoad(async () => {
      await Promise.all([getBannerData(), getCategoryTop()]);
      isShow.value = false;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isShow.value
      }, isShow.value ? {} : {
        b: common_vendor.f(categoryList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id,
            c: index === categoryNumber.value ? 1 : "",
            d: common_vendor.o(($event) => categoryNumber.value = index, item.id)
          };
        }),
        c: common_vendor.p({
          list: bannerList.value,
          height: "160px"
        }),
        d: common_vendor.f(common_vendor.unref(subCategoryList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(item.goods, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods.id,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            c: item.id
          };
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-97f6f596"], ["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/class/class.vue"]]);
wx.createPage(MiniProgramPage);
