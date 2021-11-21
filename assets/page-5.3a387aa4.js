import { b as _sfc_main$1 } from "./index.4d6c8e1a.js";
import { d as defineComponent, K as useHead, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, B as createTextVNode } from "./vendor.9ec557a4.js";
var _imports_0 = "/assets/error-5.939e5230.svg";
var _imports_1 = "/assets/error-5-dark.61c45cfe.svg";
var page5_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "error-container" };
const _hoisted_2 = { class: "error-wrapper" };
const _hoisted_3 = { class: "error-inner has-text-centered" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-number dark-inverted" }, "500", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062E\u0637\u0627\u06CC \u062F\u0627\u062E\u0644\u06CC \u0633\u0631\u0648\u0631", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0645\u0634\u06A9\u0644\u06CC \u063A\u06CC\u0631 \u0645\u0646\u062A\u0638\u0631\u0647 \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A. \u0644\u0637\u0641\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u0628\u0627 \u0633\u0631\u067E\u0631\u0633\u062A \u0648\u0628 \u0633\u0627\u06CC\u062A \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F. ", -1);
const _hoisted_9 = { class: "button-wrap" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u0628\u0631\u06AF\u0634\u062A \u0628\u0647 \u0635\u0641\u062D\u0647\u200C\u06CC \u0642\u0628\u0644 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useHead({
      title: "\u0635\u0641\u062D\u0647 \u062E\u0637\u0627 5 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            _hoisted_5,
            _hoisted_6,
            _hoisted_7,
            _hoisted_8,
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VButton, {
                color: "primary",
                elevated: "",
                rounded: "",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
              }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
