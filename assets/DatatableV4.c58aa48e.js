import { j as _imports_0, k as _imports_1, c as __unplugin_components_1 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$1 } from "./VPlaceholderSection.00317a29.js";
import { _ as _sfc_main$2 } from "./VSimpleDatatables.bde9b4a7.js";
import { a as datatableOption } from "./index.31ae2f12.js";
import { d as defineComponent, o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, v as createVNode, t as unref, b as createElementBlock, D as createCommentVNode } from "./vendor.9ec557a4.js";
const datatableV4 = [];
const _hoisted_1 = {
  scope: "col",
  "data-sortable": "false"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox is-primary is-outlined is-circle" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "head-checkbox",
    type: "checkbox"
  }),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, "\u0646\u0648\u0639", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0646\u0627\u0645", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0633\u0627\u06CC\u0632", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0646\u0633\u062E\u0647", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0622\u062E\u0631\u06CC\u0646 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, null, -1);
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { colspan: "7" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderSection = _sfc_main$1;
      const _component_VSimpleDatatables = _sfc_main$2;
      return openBlock(), createBlock(_component_VSimpleDatatables, { options: unref(datatableOption) }, {
        default: withCtx(() => [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", _hoisted_1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                })
              ]),
              _hoisted_3,
              _hoisted_4,
              _hoisted_5,
              _hoisted_6,
              _hoisted_7,
              _hoisted_8
            ])
          ]),
          createBaseVNode("tbody", null, [
            unref(datatableV4).length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_9, [
              createBaseVNode("td", _hoisted_10, [
                createVNode(_component_VPlaceholderSection, {
                  title: "\u062F\u0627\u062F\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
                  subtitle: "\u0647\u0645 \u0627\u06A9\u0646\u0648\u0646 \u062F\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0631 \u0627\u06CC\u0646 \u0644\u06CC\u0633\u062A \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F."
                }, {
                  image: withCtx(() => [
                    _hoisted_11,
                    _hoisted_12
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["options"]);
    };
  }
});
export { _sfc_main as _ };
