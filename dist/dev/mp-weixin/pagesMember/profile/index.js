"use strict";
const common_vendor = require("../../common/vendor.js");
const services_profile = require("../../services/profile.js");
require("../../pinia/index.js");
const pinia_modules_member = require("../../pinia/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const useInfo = pinia_modules_member.useStore();
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const profile = common_vendor.ref();
    const getMemberProfileData = async () => {
      const res = await services_profile.getMemberProfileAPI();
      profile.value = res.result;
    };
    common_vendor.onLoad(() => {
      getMemberProfileData();
    });
    const onAvatarChange = () => {
      common_vendor.index.chooseMedia({
        // 文件个数
        count: 1,
        // 文件类型
        mediaType: ["image"],
        success: (res) => {
          const { tempFilePath } = res.tempFiles[0];
          common_vendor.index.uploadFile({
            url: "/member/profile/avatar",
            // [!code ++]
            name: "file",
            // 后端数据字段名  // [!code ++]
            filePath: tempFilePath,
            // 新头像  // [!code ++]
            success: (res2) => {
              if (res2.statusCode === 200) {
                const { avatar } = JSON.parse(res2.data).result;
                profile.value.avatar = avatar;
                useInfo.userInfo.avatar = avatar;
                common_vendor.index.showToast({ icon: "success", title: "更新成功" });
              } else {
                common_vendor.index.showToast({ icon: "error", title: "出现错误" });
              }
            }
          });
        }
      });
    };
    const onGenderChange = (ev) => {
      profile.value.gender = ev.detail.value;
    };
    const onBirthdayChange = (ev) => {
      profile.value.birthday = ev.detail.value;
    };
    let fullLocationCode = ["", "", ""];
    const onFullLocationChange = (ev) => {
      profile.value.fullLocation = ev.detail.value.join(" ");
      fullLocationCode = ev.detail.code;
    };
    const onSubmit = async () => {
      const { nickname, gender, birthday, profession } = profile.value;
      const res = await services_profile.putMemberProfileAPI({
        nickname,
        gender,
        birthday,
        profession,
        provinceCode: fullLocationCode[0],
        cityCode: fullLocationCode[1],
        countyCode: fullLocationCode[2]
      });
      useInfo.userInfo.nickname = res.result.nickname;
      common_vendor.index.showToast({ icon: "success", title: "保存成功" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 400);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = profile.value) == null ? void 0 : _b.avatar,
        c: common_vendor.o(onAvatarChange),
        d: common_vendor.t((_c = profile.value) == null ? void 0 : _c.account),
        e: (_d = profile.value) == null ? void 0 : _d.nickname,
        f: ((_e = profile.value) == null ? void 0 : _e.gender) === "男",
        g: ((_f = profile.value) == null ? void 0 : _f.gender) === "女",
        h: common_vendor.o(onGenderChange),
        i: (_g = profile.value) == null ? void 0 : _g.birthday
      }, ((_h = profile.value) == null ? void 0 : _h.birthday) ? {
        j: common_vendor.t(profile.value.birthday)
      } : {}, {
        k: new Date(),
        l: (_i = profile.value) == null ? void 0 : _i.birthday,
        m: common_vendor.o(onBirthdayChange),
        n: (_j = profile.value) == null ? void 0 : _j.fullLocation
      }, ((_k = profile.value) == null ? void 0 : _k.fullLocation) ? {
        o: common_vendor.t(profile.value.fullLocation)
      } : {}, {
        p: (_m = (_l = profile.value) == null ? void 0 : _l.fullLocation) == null ? void 0 : _m.split(" "),
        q: common_vendor.o(onFullLocationChange),
        r: (_n = profile.value) == null ? void 0 : _n.profession,
        s: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/Vue3-BIM-uniapp/src/pagesMember/profile/index.vue"]]);
wx.createPage(MiniProgramPage);
