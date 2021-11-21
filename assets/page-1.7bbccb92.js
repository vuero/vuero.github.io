import { _ as __unplugin_components_0 } from "./SVGErrorPlaceholder.8da458c3.js";
import { b as _sfc_main$1 } from "./index.4d6c8e1a.js";
import { d as defineComponent, K as useHead, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, B as createTextVNode } from "./vendor.9ec557a4.js";
var page1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "error-container" };
const _hoisted_2 = { class: "error-wrapper" };
const _hoisted_3 = { class: "error-inner has-text-centered" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-number dark-inverted" }, "404", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0686\u0646\u06CC\u0646 \u0635\u0641\u062D\u0647\u200C\u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0645\u0627 \u0622\u0646 \u0635\u0641\u062D\u0647 \u0631\u0627 \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0628\u0631\u0637\u0631\u0641 \u0646\u0634\u062F\u0646 \u0645\u0634\u06A9\u0644 \u0628\u0627 \u0633\u0631\u067E\u0631\u0633\u062A \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F. ", -1);
const _hoisted_7 = { class: "button-wrap" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u0628\u0631\u06AF\u0634\u062A \u0628\u0647 \u0635\u0641\u062D\u0647\u200C\u06CC \u0642\u0628\u0644 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useHead({
      title: "\u0635\u0641\u062D\u0647 \u062E\u0637\u0627 1 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_SVGErrorPlaceholder = __unplugin_components_0;
      const _component_VButton = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createVNode(_component_SVGErrorPlaceholder),
            _hoisted_5,
            _hoisted_6,
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VButton, {
                color: "primary",
                elevated: "",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
              }, {
                default: withCtx(() => [
                  _hoisted_8
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
