import { c as __unplugin_components_1, l as _sfc_main$1, b as _sfc_main$2 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VIconButton.809a4ce6.js";
import { _ as _sfc_main$4 } from "./VFlexPagination.440ca280.js";
import { d as defineComponent, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, ai as TransitionGroup, N as createBlock, D as createCommentVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
var _imports_2 = "/assets/thinking-canvas.6e639b9a.svg";
var _imports_3 = "/assets/thinking-canvas-dark.3bdce730.svg";
const offers = [
  {
    id: "1",
    logo: "/demo/photos/brands/airbnb.svg",
    title: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062F\u0648\u0644\u0648\u067E\u0631 \u0641\u0648\u0644 \u0627\u0633\u062A\u06A9 Node JS \u{1F44C}",
    location: "\u0633\u0627\u0646 \u062F\u06CC\u06AF\u0648",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "3 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "2",
    logo: "/demo/photos/brands/hubspot.svg",
    title: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u06CC React Native",
    location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    duration: "\u067E\u0627\u0631\u0647 \u0648\u0642\u062A",
    requirements: "2 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "3",
    logo: "/demo/photos/brands/slack.svg",
    title: "\u0637\u0631\u0627\u062D UI/UX \u0628\u0631\u0627\u06CC \u0627\u062F\u063A\u0627\u0645 \u062F\u0631 \u062A\u06CC\u0645 UX \u{1F4AA}\u{1F4AA}",
    location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "3 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "4",
    logo: "/demo/photos/brands/gitlab.svg",
    title: "\u0645\u062F\u06CC\u0631 \u0627\u0631\u0634\u062F DevOps \u062A\u06CC\u0645 \u0641\u0646\u0627\u0648\u0631\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A",
    location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "10 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "5",
    logo: "/demo/photos/brands/google.svg",
    title: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647 Fullstack \u0628\u0627 \u0645\u0647\u0627\u0631\u062A \u0647\u0627\u06CC \u062C\u0627\u0645\u062F MongoDB",
    location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "5 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "6",
    logo: "/demo/photos/brands/facebook.svg",
    title: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647 \u06A9\u0627\u0645\u0644 \u062C\u0627\u0648\u0627 \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0648 Node JS",
    location: "\u067E\u0627\u0633\u0627\u062F\u0646\u0627",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "4 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "7",
    logo: "/demo/photos/brands/tnw.svg",
    title: "\u0635\u0627\u062D\u0628 \u0645\u062D\u0635\u0648\u0644 \u067E\u0631\u0648\u0698\u0647 React Native",
    location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "2 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "8",
    logo: "/demo/photos/brands/dribbble.svg",
    title: "\u0637\u0631\u0627\u062D UI/UX \u0628\u0627 \u0645\u0647\u0627\u0631\u062A \u0647\u0627\u06CC Html5 \u0648 Sass \u{1F44D}",
    location: "\u0633\u0627\u0646 \u062F\u06CC\u06AF\u0648",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "4 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "9",
    logo: "/demo/photos/brands/atlassian.svg",
    title: "\u0645\u062F\u06CC\u0631 \u0627\u0631\u0634\u062F \u062A\u06CC\u0645 UX \u0628\u0627 \u062A\u062C\u0631\u0628\u0647",
    location: "\u0645\u0644\u0628\u0648\u0631\u0646",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "10 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "10",
    logo: "/demo/photos/brands/github.svg",
    title: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647 \u06A9\u0627\u0645\u0644 \u062C\u0627\u0648\u0627 \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0648 Node JS",
    location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    duration: "\u067E\u0627\u0631\u0647 \u0648\u0642\u062A",
    requirements: "1 Year Exp."
  },
  {
    id: "11",
    logo: "/demo/photos/brands/airbnb.svg",
    title: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062F\u0648\u0644\u0648\u067E\u0631 \u0641\u0648\u0644 \u0627\u0633\u062A\u06A9 Node JS \u{1F44C}",
    location: "\u0633\u0627\u0646 \u062F\u06CC\u06AF\u0648",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "3 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  },
  {
    id: "12",
    logo: "/demo/photos/brands/airbnb.svg",
    title: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062F\u0648\u0644\u0648\u067E\u0631 \u0641\u0648\u0644 \u0627\u0633\u062A\u06A9 Node JS \u{1F44C}",
    location: "\u0633\u0627\u0646 \u062F\u06CC\u06AF\u0648",
    duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
    requirements: "3 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647."
  }
];
var ViewListV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar is-reversed" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:search"
  })
], -1);
const _hoisted_3 = { class: "tabs-inner" };
const _hoisted_4 = { class: "tabs" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "\u0647\u0645\u0647", -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "\u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_10 = { class: "page-content-inner" };
const _hoisted_11 = { class: "list-view list-view-v3" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_14 = { class: "list-view-inner" };
const _hoisted_15 = { class: "list-view-item-inner" };
const _hoisted_16 = ["src"];
const _hoisted_17 = { class: "meta-left" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:check-circle"
}, null, -1);
const _hoisted_23 = { class: "meta-right" };
const _hoisted_24 = { class: "buttons" };
const _hoisted_25 = /* @__PURE__ */ createTextVNode(" \u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627 \u0627\u0642\u062F\u0627\u0645 \u06A9\u0646\u06CC\u062F ");
const _hoisted_26 = { class: "list-view-inner" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("all");
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return offers;
      } else {
        return offers.filter((item) => {
          return item.logo.match(new RegExp(filters.value, "i")) || item.title.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || item.duration.match(new RegExp(filters.value, "i")) || item.requirements.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VIconButton = _sfc_main$3;
      const _component_VFlexPagination = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "\u062C\u0633\u062A\u062C\u0648...",
                "data-filter-target": ".list-view-item"
              }, null, 512), [
                [vModelText, filters.value]
              ]),
              _hoisted_2
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "all")
                  }, _hoisted_6)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "saved" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "saved")
                  }, _hoisted_8)
                ], 2),
                _hoisted_9
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
              subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_12,
                _hoisted_13
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", {
              id: "active-items-tab",
              class: normalizeClass(["tab-content", [activeTab.value === "all" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(TransitionGroup, {
                  name: "list-complete",
                  tag: "div"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: "list-view-item"
                      }, [
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("img", {
                            class: "avatar",
                            src: item.logo,
                            alt: "",
                            onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                          }, null, 40, _hoisted_16),
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("h3", null, toDisplayString(item.title), 1),
                            createBaseVNode("span", null, [
                              _hoisted_18,
                              createBaseVNode("span", null, toDisplayString(item.location), 1),
                              _hoisted_19,
                              _hoisted_20,
                              createBaseVNode("span", null, toDisplayString(item.duration), 1),
                              _hoisted_21,
                              _hoisted_22,
                              createBaseVNode("span", null, toDisplayString(item.requirements), 1)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_23, [
                            createBaseVNode("div", _hoisted_24, [
                              createVNode(_component_VButton, {
                                color: "primary",
                                outlined: "",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_25
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VIconButton, {
                                icon: "feather:bookmark",
                                class: "hint--bubble hint--primary hint--top",
                                "data-hint": "\u0630\u062E\u06CC\u0631\u0647",
                                light: "",
                                circle: ""
                              })
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              unref(filteredData).length > 5 ? (openBlock(), createBlock(_component_VFlexPagination, {
                key: 0,
                "item-per-page": 10,
                "total-items": 873,
                "current-page": 42,
                "max-links-displayed": 7
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", {
              id: "inactive-items-tab",
              class: normalizeClass(["tab-content", [activeTab.value === "saved" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_26, [
                createVNode(_component_VPlaceholderPage, {
                  title: "\u0647\u06CC\u0686 \u0634\u063A\u0644\u06CC \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A",
                  subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0634\u063A\u0644 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647 \u0627\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F. \u0647\u0645\u0686\u0646\u06CC\u0646 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0628\u0631\u062E\u06CC \u0627\u0632 \u0645\u0648\u0627\u0631\u062F \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647 \u0634\u0645\u0627 \u0645\u0646\u0642\u0636\u06CC \u0634\u062F\u0647 \u0628\u0627\u0634\u062F."
                }, {
                  image: withCtx(() => [
                    _hoisted_27,
                    _hoisted_28
                  ]),
                  _: 1
                })
              ])
            ], 2)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
