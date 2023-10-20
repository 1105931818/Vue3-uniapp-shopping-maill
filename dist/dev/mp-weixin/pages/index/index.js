"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const componsables_index = require("../../componsables/index.js");
require("../../utils/http.js");
require("../../pinia/index.js");
require("../../pinia/modules/member.js");
if (!Array) {
  const _easycom_cust_Swiper2 = common_vendor.resolveComponent("cust-Swiper");
  const _easycom_cust_Guess2 = common_vendor.resolveComponent("cust-Guess");
  (_easycom_cust_Swiper2 + _easycom_cust_Guess2)();
}
const _easycom_cust_Swiper = () => "../../components/cust-Swiper.js";
const _easycom_cust_Guess = () => "../../components/cust-Guess.js";
if (!Math) {
  (CustomNavbar + PageSkeleton + _easycom_cust_Swiper + Category + Hotpanel + _easycom_cust_Guess)();
}
const CustomNavbar = () => "./components/CustomNavbar.js";
const Category = () => "./components/Category.js";
const Hotpanel = () => "./components/Hotpanel.js";
const PageSkeleton = () => "./components/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const btnList = common_vendor.ref([]);
    const hotList = common_vendor.ref([]);
    const isTigger = common_vendor.ref(false);
    const isShow = common_vendor.ref(true);
    const getBanner = async () => {
      const result = await services_home.getHomeBannerAPI();
      bannerList.value = result.result;
    };
    const getbtnList = async () => {
      const result = await services_home.getCategoryAPI();
      btnList.value = result.result;
    };
    const getHotList = async () => {
      const result = await services_home.getHotAPI();
      hotList.value = result.result;
    };
    const { guess, scrollList } = componsables_index.useGuessList();
    const refLading = async () => {
      var _a, _b;
      isTigger.value = true;
      (_a = guess.value) == null ? void 0 : _a.resetData();
      await Promise.all([getBanner(), getbtnList(), getHotList(), (_b = guess.value) == null ? void 0 : _b.getMore()]);
      isTigger.value = false;
    };
    common_vendor.onLoad(async () => {
      await Promise.all([getBanner(), getbtnList(), getHotList()]);
      isShow.value = false;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isShow.value
      }, isShow.value ? {} : {
        b: common_vendor.p({
          list: bannerList.value,
          height: "200px"
        }),
        c: common_vendor.p({
          list: btnList.value
        }),
        d: common_vendor.p({
          list: hotList.value
        }),
        e: common_vendor.sr(guess, "3cfc43b8-5", {
          "k": "guess"
        })
      }, {
        f: isTigger.value,
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(scrollList) && common_vendor.unref(scrollList)(...args)
        ),
        h: common_vendor.o(refLading)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
