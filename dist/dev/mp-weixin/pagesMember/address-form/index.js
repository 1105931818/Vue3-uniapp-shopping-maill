"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
require("../../utils/http.js");
require("../../pinia/index.js");
require("../../pinia/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    common_vendor.index.setNavigationBarTitle({ title: query.id ? "修改地址" : "新建地址" });
    const form = common_vendor.ref({
      receiver: "",
      // 收货人
      contact: "",
      // 联系方式
      fullLocation: "",
      // 省市区(前端展示)
      provinceCode: "",
      // 省份编码(后端参数)
      cityCode: "",
      // 城市编码(后端参数)
      countyCode: "",
      // 区/县编码(后端参数)
      address: "",
      // 详细地址
      isDefault: 0
      // 默认地址，1为是，0为否
    });
    const onRegionChange = (ev) => {
      form.value.fullLocation = ev.detail.value.join(" ");
      const [provinceCode, cityCode, countyCode] = ev.detail.code;
      Object.assign(form.value, { provinceCode, cityCode, countyCode });
    };
    const onSwitchChange = (ev) => {
      form.value.isDefault = ev.detail.value ? 1 : 0;
    };
    const onSubmit = async () => {
      await services_address.postMemberAddressAPI(form.value);
      common_vendor.index.showToast({ icon: "success", title: "添加成功" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 400);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: form.value.receiver,
        b: common_vendor.o(($event) => form.value.receiver = $event.detail.value),
        c: form.value.contact,
        d: common_vendor.o(($event) => form.value.contact = $event.detail.value),
        e: form.value.fullLocation
      }, form.value.fullLocation ? {
        f: common_vendor.t(form.value.fullLocation)
      } : {}, {
        g: form.value.fullLocation.split(" "),
        h: common_vendor.o(onRegionChange),
        i: form.value.address,
        j: common_vendor.o(($event) => form.value.address = $event.detail.value),
        k: form.value.isDefault === 1,
        l: common_vendor.o(onSwitchChange),
        m: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pagesMember/address-form/index.vue"]]);
wx.createPage(MiniProgramPage);
