import { c as __unplugin_components_1 } from "./index.4d6c8e1a.js";
import { d as defineComponent, r as ref, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, n as normalizeClass } from "./vendor.9ec557a4.js";
var _imports_0 = "/assets/search-7.063cbb6c.svg";
var _imports_1 = "/assets/search-7-dark.21d246ce.svg";
var EmptySearch_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "search-results-wrapper" };
const _hoisted_2 = { class: "search-results-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062C\u062F\u062F..."
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "search-info" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "0 \u0646\u062A\u06CC\u062C\u0647 \u067E\u06CC\u062F\u0627 \u0634\u062F")
], -1);
const _hoisted_5 = { class: "tabs-inner" };
const _hoisted_6 = { class: "tabs is-disabled" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "\u0647\u0645\u0647", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0631\u0627\u062F", -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "\u0631\u06A9\u0648\u0631\u062F\u0647\u0627", -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "search-results-body" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "page-placeholder" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "placeholder-content" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        class: "light-image",
        src: _imports_0,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("img", {
        class: "dark-image",
        src: _imports_1,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645."),
      /* @__PURE__ */ createBaseVNode("p", { class: "is-larger" }, " \u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F. ")
    ])
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("all");
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[0] || (_cache[0] = ($event) => activeTab.value = "all")
                  }, _hoisted_8)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "people" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "people")
                  }, _hoisted_10)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "records" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "records")
                  }, _hoisted_12)
                ], 2),
                _hoisted_13
              ])
            ])
          ])
        ]),
        _hoisted_14
      ]);
    };
  }
});
export { _sfc_main as _ };
