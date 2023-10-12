"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
require("../../utils/http.js");
require("../../pinia/index.js");
require("../../pinia/modules/member.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (PageSkeleton + AddressPanel + ServicePanel + _easycom_uni_popup)();
}
const AddressPanel = () => "./components/AddressPanel.js";
const ServicePanel = () => "./components/ServicePanel.js";
const PageSkeleton = () => "./components/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const goodsInfo = common_vendor.ref();
    const currentIndex = common_vendor.ref(0);
    const isShow = common_vendor.ref(false);
    const popup = common_vendor.ref();
    const popupName = common_vendor.ref();
    const openPopup = (name) => {
      var _a;
      popupName.value = name;
      (_a = popup.value) == null ? void 0 : _a.open();
    };
    const getGoods = async () => {
      const result = await services_goods.getGoodsByIdAPI(query.id);
      goodsInfo.value = result.result;
    };
    const onChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const onTapImage = (item) => {
      common_vendor.index.previewImage({
        current: item,
        urls: goodsInfo.value.mainPictures
      });
    };
    common_vendor.onLoad(async () => {
      await getGoods();
      isShow.value = true;
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return common_vendor.e({
        a: isShow.value
      }, isShow.value ? {
        b: common_vendor.f((_a = goodsInfo.value) == null ? void 0 : _a.mainPictures, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => onTapImage(item), item),
            c: item
          };
        }),
        c: common_vendor.o(onChange),
        d: common_vendor.t(currentIndex.value + 1),
        e: common_vendor.t((_b = goodsInfo.value) == null ? void 0 : _b.mainPictures.length),
        f: common_vendor.t((_c = goodsInfo.value) == null ? void 0 : _c.price),
        g: common_vendor.t((_d = goodsInfo.value) == null ? void 0 : _d.name),
        h: common_vendor.t((_e = goodsInfo.value) == null ? void 0 : _e.desc),
        i: common_vendor.o(($event) => openPopup("address")),
        j: common_vendor.o(($event) => openPopup("service")),
        k: common_vendor.f((_f = goodsInfo.value) == null ? void 0 : _f.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        l: common_vendor.f((_g = goodsInfo.value) == null ? void 0 : _g.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        m: common_vendor.f((_h = goodsInfo.value) == null ? void 0 : _h.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        })
      } : {}, {
        n: ((_i = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _i.bottom) + "px",
        o: popupName.value === "address"
      }, popupName.value === "address" ? {
        p: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        q: popupName.value === "service"
      }, popupName.value === "service" ? {
        r: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        s: common_vendor.sr(popup, "3b3af7a8-1", {
          "k": "popup"
        }),
        t: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
