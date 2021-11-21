import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { _ as _export_sfc } from "./index.4d6c8e1a.js";
import { o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode } from "./vendor.9ec557a4.js";
var ProjectsToolbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "projects-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "control has-icon" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    class: "input",
    placeholder: "\u062C\u0633\u062A\u062C\u0648..."
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:search"
    })
  ])
], -1);
const _hoisted_3 = { class: "avatar-stack" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-primary is-raised is-bold" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647 \u062A\u0627\u0632\u0647")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VAvatar = _sfc_main$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "/demo/avatars/7.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "/demo/avatars/9.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "/demo/avatars/12.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "/images/avatars/svg/vuero-1.svg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "/demo/avatars/25.jpg"
      }),
      createVNode(_component_VAvatar, {
        size: "small",
        picture: "/demo/avatars/22.jpg"
      })
    ]),
    _hoisted_4
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_0 as _ };
