import { c as __unplugin_components_1, l as _sfc_main$1 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VAvatarStack.8507ceb8.js";
import { _ as _sfc_main$3 } from "./VFlexPagination.440ca280.js";
import { d as defineComponent, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, ai as TransitionGroup, N as createBlock, D as createCommentVNode } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
var _imports_2 = "/assets/cooking.49dcb438.svg";
var _imports_3 = "/assets/cooking-dark.933f7345.svg";
const recipes = [
  {
    id: "1",
    icon: "/images/illustrations/list-views/cake-1.svg",
    name: "\u06A9\u06CC\u06A9 \u062A\u0648\u062A \u0641\u0631\u0646\u06AF\u06CC \u0648 \u06A9\u0631\u0645",
    category: "\u06A9\u06CC\u06A9",
    duration: "1 \u0633\u0627\u0639\u062A 45 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 3,
    author: {
      name: "\u0622\u0644\u06CC\u0633",
      avatar: "/demo/avatars/7.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/9.jpg"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg"
      }
    ]
  },
  {
    id: "2",
    icon: "/images/illustrations/list-views/cake-2.svg",
    name: "\u06A9\u06CC\u06A9 \u067E\u0631\u062A\u0642\u0627\u0644 \u0648 \u0644\u06CC\u0645\u0648",
    category: "\u06A9\u06CC\u06A9",
    duration: "1 \u0633\u0627\u0639\u062A 15 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 2,
    author: {
      name: "\u062C\u06CC\u0645\u06CC",
      avatar: "/demo/avatars/22.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/12.jpg"
      },
      {
        id: 2,
        picture: "/demo/avatars/27.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/40.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "3",
    icon: "/images/illustrations/list-views/cake-3.svg",
    name: "\u06A9\u06CC\u06A9 \u0633\u0647 \u0634\u06A9\u0644\u0627\u062A\u06CC",
    category: "\u06A9\u06CC\u06A9",
    duration: "2h",
    attachments: 2,
    author: {
      name: "\u0647\u06CC\u0644\u062F\u0627",
      avatar: "/demo/avatars/15.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/19.jpg"
      },
      {
        id: 2,
        picture: "/demo/avatars/24.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/34.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "4",
    icon: "/images/illustrations/list-views/cake-4.svg",
    name: "\u06A9\u06CC\u06A9 \u0639\u0631\u0648\u0633\u06CC",
    category: "\u06A9\u06CC\u06A9",
    duration: "3 \u0633\u0627\u0639\u062A 30 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 7,
    author: {
      name: "\u06A9\u0631\u06CC\u0645",
      avatar: "/demo/avatars/26.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/19.jpg"
      },
      {
        id: 2,
        picture: "/demo/avatars/24.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/34.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "5",
    icon: "/images/illustrations/list-views/cake-5.svg",
    name: "\u06A9\u0644\u0648\u0686\u0647 \u0648\u0627\u0646\u06CC\u0644\u06CC",
    category: "\u06A9\u0644\u0648\u0686\u0647",
    duration: "1 \u0633\u0627\u0639\u062A 0 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 2,
    author: {
      name: "\u0631\u0627\u06CC\u0627\u0646",
      avatar: "/demo/avatars/14.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/images/avatars/svg/vuero-1.svg"
      },
      {
        id: 2,
        picture: "/demo/avatars/9.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/13.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "6",
    icon: "/images/illustrations/list-views/cake-6.svg",
    name: "\u0628\u0631\u0634 \u062A\u0648\u062A \u0641\u0631\u0646\u06AF\u06CC",
    category: "\u0628\u0631\u0634",
    duration: "1 \u0633\u0627\u0639\u062A 0 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 2,
    author: {
      name: "\u0622\u0644\u06CC\u0633",
      avatar: "/demo/avatars/7.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/images/avatars/svg/vuero-1.svg"
      },
      {
        id: 2,
        picture: "/demo/avatars/9.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/13.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "7",
    icon: "/images/illustrations/list-views/cake-7.svg",
    name: "\u067E\u06CC\u0631\u0627\u0634\u06A9\u06CC \u0645\u0627\u0631\u0645\u0627\u0644\u0627\u062F",
    category: "\u067E\u06CC\u0631\u0627\u0634\u06A9\u06CC",
    duration: "2 \u0633\u0627\u0639\u062A 15 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 2,
    author: {
      name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
      avatar: "/demo/avatars/21.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/5.jpg"
      },
      {
        id: 2,
        picture: "/demo/avatars/18.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/25.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "8",
    icon: "/images/illustrations/list-views/cake-8.svg",
    name: "\u0633\u0627\u0646\u062F\u0648\u06CC\u0686 \u06A9\u0631\u0647 \u0628\u0627\u062F\u0627\u0645 \u0632\u0645\u06CC\u0646\u06CC",
    category: "\u0633\u0627\u0646\u062F\u0648\u06CC\u0686",
    duration: "15 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 1,
    author: {
      name: "\u0627\u0634\u06A9\u0627\u0646",
      avatar: "/demo/avatars/12.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/9.jpg"
      },
      {
        id: 2,
        picture: "/demo/avatars/28.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/36.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "9",
    icon: "/images/illustrations/list-views/cake-9.svg",
    name: "\u0628\u0631\u0634 \u06A9\u0631\u0647 \u0628\u0627\u062F\u0627\u0645 \u0632\u0645\u06CC\u0646\u06CC",
    category: "\u0628\u0631\u0634",
    duration: "15 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 1,
    author: {
      name: "\u0627\u0634\u06A9\u0627\u0646",
      avatar: "/demo/avatars/12.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/5.jpg"
      },
      {
        id: 2,
        picture: "/demo/avatars/31.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/16.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  },
  {
    id: "10",
    icon: "/images/illustrations/list-views/cake-9.svg",
    name: "\u062A\u0648\u062A \u0641\u0631\u0646\u06AF\u06CC \u062A\u0646\u062F",
    category: "\u0628\u0631\u0634",
    duration: "1 \u0633\u0627\u0639\u062A 15 \u062F\u0642\u06CC\u0642\u0647",
    attachments: 1,
    author: {
      name: "\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647",
      avatar: "/demo/avatars/11.jpg"
    },
    followers: [
      {
        id: 1,
        picture: "/demo/avatars/24.jpg"
      },
      {
        id: 2,
        picture: "/demo/avatars/23.jpg"
      },
      {
        id: 3,
        picture: "/demo/avatars/13.jpg"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      },
      {
        id: 5,
        picture: void 0,
        initials: "AD",
        color: "info"
      },
      {
        id: 6,
        picture: void 0,
        initials: "TF",
        color: "purple"
      },
      {
        id: 7,
        picture: void 0,
        initials: "GR",
        color: "orange"
      }
    ]
  }
];
var ViewListV4_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar is-reversed" };
const _hoisted_2 = { class: "tabs-inner" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u0647\u0645\u0647", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", null, "\u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_9 = { class: "list-view list-view-v4" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_12 = { class: "list-view-inner" };
const _hoisted_13 = { class: "list-view-item-inner" };
const _hoisted_14 = { class: "pre-meta" };
const _hoisted_15 = ["src"];
const _hoisted_16 = { class: "meta-left" };
const _hoisted_17 = ["src"];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:archive"
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
  "data-icon": "feather:paperclip"
}, null, -1);
const _hoisted_23 = { class: "meta-right" };
const _hoisted_24 = { class: "network" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u06CC\u0646 \u0631\u0627 \u0645\u06CC\u200C\u067E\u0633\u0646\u062F\u0646", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-primary is-outlined is-raised" }, " \u0645\u0634\u0627\u0647\u062F\u0647 \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A "),
  /* @__PURE__ */ createBaseVNode("button", {
    class: "button is-light is-circle hint--bubble hint--primary hint--top",
    "data-hint": "\u0630\u062E\u06CC\u0631\u0647"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:heart"
      })
    ])
  ])
], -1);
const _hoisted_27 = { class: "list-view-inner" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { type: String, required: false, default: "all" }
  },
  setup(__props) {
    const props = __props;
    const recipes$1 = recipes;
    const filters = ref("");
    const tab = ref(props.activeTab);
    const filteredData = computed(() => {
      if (!filters.value) {
        return recipes$1;
      } else {
        return recipes$1.filter((item) => {
          return item.icon.match(new RegExp(filters.value, "i")) || item.name.match(new RegExp(filters.value, "i")) || item.category.match(new RegExp(filters.value, "i")) || item.duration.match(new RegExp(filters.value, "i")) || item.author.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$1;
      const _component_VAvatarStack = _sfc_main$2;
      const _component_VFlexPagination = _sfc_main$3;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "\u062C\u0633\u062A\u062C\u0648..."
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[1] || (_cache[1] = ($event) => tab.value = "all")
                  }, _hoisted_5)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "saved" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[2] || (_cache[2] = ($event) => tab.value = "saved")
                  }, _hoisted_7)
                ], 2),
                _hoisted_8
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_10,
              _hoisted_11
            ]),
            _: 1
          }, 8, ["class"]),
          createBaseVNode("div", {
            id: "active-items-tab",
            class: normalizeClass(["tab-content", [tab.value === "all" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_12, [
              createVNode(TransitionGroup, {
                name: "list-complete",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      class: "list-view-item"
                    }, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("h3", null, toDisplayString(item.name), 1)
                        ]),
                        createBaseVNode("img", {
                          class: "avatar",
                          src: item.icon,
                          alt: "",
                          onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 40, _hoisted_15),
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("h3", null, [
                            createBaseVNode("img", {
                              class: "avatar",
                              src: item.author.avatar,
                              alt: "",
                              onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                            }, null, 40, _hoisted_17),
                            createBaseVNode("span", null, toDisplayString(item.author.name), 1)
                          ]),
                          createBaseVNode("span", null, [
                            _hoisted_18,
                            createBaseVNode("span", null, toDisplayString(item.category), 1),
                            _hoisted_19,
                            _hoisted_20,
                            createBaseVNode("span", null, toDisplayString(item.duration), 1),
                            _hoisted_21,
                            _hoisted_22,
                            createBaseVNode("span", null, toDisplayString(item.attachments) + " \u0641\u0627\u06CC\u0644", 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("div", _hoisted_24, [
                            createVNode(_component_VAvatarStack, {
                              avatars: item.followers,
                              size: "small",
                              limit: 3
                            }, null, 8, ["avatars"]),
                            _hoisted_25
                          ]),
                          _hoisted_26
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
            class: normalizeClass(["tab-content", [tab.value === "saved" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_27, [
              createVNode(_component_VPlaceholderPage, {
                title: "\u0647\u06CC\u0686 \u062F\u0633\u062A\u0648\u0631 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647 \u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.",
                subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u062F\u0633\u062A\u0648\u0631 \u0627\u0644\u0639\u0645\u0644 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647 \u0627\u06CC \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0646\u062F\u0627\u0631\u06CC\u062F. \u0628\u0627 \u0628\u0631\u0631\u0633\u06CC \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0622\u0646\u0647\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F \u0648 \u0645\u0648\u0627\u0631\u062F \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0628\u062E\u0634 \u062F\u0633\u062A\u0648\u0631\u0647\u0627\u06CC \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F.",
                larger: ""
              }, {
                image: withCtx(() => [
                  _hoisted_28,
                  _hoisted_29
                ]),
                _: 1
              })
            ])
          ], 2)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
