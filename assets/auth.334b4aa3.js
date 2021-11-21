import { _ as _export_sfc } from "./index.4d6c8e1a.js";
import { o as openBlock, b as createElementBlock, F as renderSlot, q as resolveComponent, N as createBlock, x as withCtx, v as createVNode } from "./vendor.9ec557a4.js";
const _sfc_main$1 = {};
const _hoisted_1 = { class: "auth-wrapper" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var auth_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouterView = resolveComponent("RouterView");
  const _component_AuthLayout = __unplugin_components_0;
  return openBlock(), createBlock(_component_AuthLayout, null, {
    default: withCtx(() => [
      createVNode(_component_RouterView)
    ]),
    _: 1
  });
}
var auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { auth as default };
