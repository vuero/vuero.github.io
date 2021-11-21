import { _ as __unplugin_components_0 } from "./VDropdown.5214d40f.js";
import { _ as _export_sfc } from "./index.4d6c8e1a.js";
import { o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode } from "./vendor.9ec557a4.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-pencil"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0648\u06CC\u0631\u0627\u06CC\u0634"),
    /* @__PURE__ */ createBaseVNode("span", null, "Edit this record")
  ])
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-trash-can-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062D\u0630\u0641"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062A")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = __unplugin_components_0;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    class: "is-pushed-mobile",
    spaced: "",
    right: ""
  }, {
    default: withCtx(() => [
      _hoisted_1,
      _hoisted_2
    ]),
    _: 1
  });
}
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_4 as _ };
