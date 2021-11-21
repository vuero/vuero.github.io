import { j as _imports_0, k as _imports_1, c as __unplugin_components_1, l as _sfc_main$1 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$3 } from "./VFlexPagination.440ca280.js";
import { d as defineComponent, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, B as createTextVNode, ai as TransitionGroup, N as createBlock, D as createCommentVNode } from "./vendor.9ec557a4.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
var _imports_2 = "/assets/courses.7100fca1.svg";
var _imports_3 = "/assets/courses-dark.4da1d24a.svg";
const classes = [
  {
    id: 0,
    name: "\u0645\u0642\u062F\u0645\u0647\u200C\u0627\u06CC \u0628\u0631 Html5",
    picture: "/demo/photos/courses/1.jpg",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 1,
    price: 26e3,
    skill: {
      icon: "lnil lnil-html5",
      name: "Html5"
    },
    author: {
      id: 8,
      picture: "/images/avatars/svg/vuero-1.svg",
      username: "\u062C\u0645\u0627\u0644",
      initials: "EK",
      color: "info"
    }
  },
  {
    id: 1,
    name: "\u0627\u0633\u062A\u0627\u062F\u06CC \u062F\u0631 VueJS \u0648 Typescript",
    picture: "/demo/photos/courses/2.png",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 4,
    price: 12e3,
    skill: {
      icon: "lnir lnir-nodejs",
      name: "NodeJS"
    },
    author: {
      id: 12,
      picture: "/demo/avatars/12.jpg",
      username: "\u0627\u0634\u06A9\u0627\u0646",
      initials: "\u0627\u067E",
      color: "info"
    }
  },
  {
    id: 2,
    name: "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC CSS3 \u0648 Stylesheets",
    picture: "/demo/photos/courses/3.jpg",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 2,
    price: 16e3,
    skill: {
      icon: "lnir lnir-css3",
      name: "CSS3"
    },
    author: {
      id: 12,
      picture: "/demo/avatars/5.jpg",
      username: "\u0645\u0631\u06CC\u0645",
      initials: "ML",
      color: "info"
    }
  },
  {
    id: 3,
    name: "\u0634\u0631\u0648\u0639 \u06A9\u0627\u0631 \u0628\u0627 \u0644\u0627\u0631\u0627\u0648\u0644 6",
    picture: "/demo/photos/courses/4.png",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 3,
    price: 0,
    skill: {
      icon: "lnir lnir-laravel",
      name: "\u0644\u0627\u0631\u0627\u0648\u0644"
    },
    author: {
      id: 18,
      picture: "/demo/avatars/18.jpg",
      username: "\u0646\u0642\u06CC",
      initials: "\u0646\u0645",
      color: "info"
    }
  },
  {
    id: 4,
    name: "\u0645\u0642\u062F\u0645\u0627\u062A \u067E\u0627\u06CC\u062A\u0648\u0646",
    picture: "/demo/photos/courses/5.jpeg",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 1,
    price: 8e3,
    skill: {
      icon: "lnir lnir-python",
      name: "\u067E\u0627\u06CC\u062A\u0648\u0646"
    },
    author: {
      id: 18,
      picture: "/demo/avatars/18.jpg",
      username: "\u0646\u0642\u06CC",
      initials: "\u0646\u0645",
      color: "info"
    }
  },
  {
    id: 5,
    name: "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0648\u0636\u0639\u06CC\u062A\u200C\u0647\u0627 \u062F\u0631 React",
    picture: "/demo/photos/courses/6.jpg",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 4,
    price: 25e3,
    skill: {
      icon: "lnir lnir-react",
      name: "ReactJS"
    },
    author: {
      id: 30,
      picture: "/demo/avatars/30.jpg",
      username: "\u06A9\u0645\u0627\u0644",
      initials: "CD",
      color: "info"
    }
  },
  {
    id: 6,
    name: "\u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0633\u0631\u0648\u0631 Express",
    picture: "/demo/photos/courses/7.png",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 3,
    price: 12e3,
    skill: {
      icon: "lnir lnir-nodejs",
      name: "NodeJS"
    },
    author: {
      id: 38,
      picture: "/demo/avatars/38.jpg",
      username: "\u062D\u0644\u06CC\u0645\u0647",
      initials: "CD",
      color: "info"
    }
  },
  {
    id: 7,
    name: "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u06A9\u06CC\u0648\u0628\u0631\u0646\u06CC\u062A\u06CC\u0633",
    picture: "/demo/photos/courses/9.jpg",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 5,
    price: 34e3,
    skill: {
      icon: "lnir lnir-chrome",
      name: "\u06A9\u06CC\u0648\u0628\u0631\u0646\u06CC\u062A\u06CC\u0633"
    },
    author: {
      id: 30,
      picture: "/demo/avatars/30.jpg",
      username: "\u06A9\u0645\u0627\u0644",
      initials: "CD",
      color: "info"
    }
  },
  {
    id: 8,
    name: "\u062F\u0648\u0631\u0647 \u0622\u0645\u0648\u0632\u0634\u06CC \u0622\u0646\u06AF\u0648\u0644\u0627\u0631",
    picture: "/demo/photos/courses/11.jpg",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 4,
    price: 22e3,
    skill: {
      icon: "lnir lnir-angular",
      name: "\u0622\u0646\u06AF\u0648\u0644\u0627\u0631"
    },
    author: {
      id: 34,
      picture: "/demo/avatars/34.jpg",
      username: "\u062F\u0646\u06CC\u0644",
      initials: "DR",
      color: "info"
    }
  },
  {
    id: 9,
    name: "\u062F\u0648\u0631\u0647 \u0622\u0645\u0648\u0632\u0634\u06CC \u0645\u0641\u0627\u0647\u06CC\u0645 \u062F\u0627\u06A9\u0631",
    picture: "/demo/photos/courses/12.jpg",
    category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
    difficulty: 5,
    price: 35e3,
    skill: {
      icon: "lnir lnir-docker",
      name: "\u062F\u0627\u06A9\u0631"
    },
    author: {
      id: 30,
      picture: "/demo/avatars/30.jpg",
      username: "\u06A9\u0645\u0627\u0644",
      initials: "CD",
      color: "info"
    }
  }
];
var FlexListV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-flex-toolbar is-reversed" };
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
const _hoisted_9 = { class: "flex-list-wrapper flex-list-v3" };
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
const _hoisted_12 = { class: "flex-table" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "is-grow-lg" }, "\u062F\u0648\u0631\u0647", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0647\u0627\u0631\u062A \u0627\u0635\u0644\u06CC", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0634\u0648\u0627\u0631\u06CC", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", { class: "cell-end" }, "\u0627\u0642\u062F\u0627\u0645\u0627\u062A", -1);
const _hoisted_18 = [
  _hoisted_13,
  _hoisted_14,
  _hoisted_15,
  _hoisted_16,
  _hoisted_17
];
const _hoisted_19 = { class: "flex-list-inner" };
const _hoisted_20 = { class: "flex-table-cell is-media is-grow-lg" };
const _hoisted_21 = ["src"];
const _hoisted_22 = { class: "item-name dark-inverted" };
const _hoisted_23 = { class: "item-meta" };
const _hoisted_24 = { class: "flex-media" };
const _hoisted_25 = { class: "meta" };
const _hoisted_26 = {
  class: "flex-table-cell",
  "data-th": "\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC"
};
const _hoisted_27 = { class: "light-text" };
const _hoisted_28 = {
  class: "flex-table-cell",
  "data-th": "\u0645\u0647\u0627\u0631\u062A \u0627\u0635\u0644\u06CC"
};
const _hoisted_29 = { class: "light-text no-push" };
const _hoisted_30 = {
  class: "flex-table-cell",
  "data-th": "\u062F\u0634\u0648\u0627\u0631\u06CC"
};
const _hoisted_31 = { class: "dot-levels" };
const _hoisted_32 = {
  class: "flex-table-cell cell-end",
  "data-th": "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"
};
const _hoisted_33 = { class: "button v-button has-dot dark-outlined is-pushed-mobile" };
const _hoisted_34 = /* @__PURE__ */ createTextVNode(" \u0633\u0641\u0627\u0631\u0634 ");
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle dot"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image is-larger",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image is-larger",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { type: String, required: false, default: "all" }
  },
  setup(__props) {
    const props = __props;
    const filters = ref("");
    const tab = ref(props.activeTab);
    const filteredData = computed(() => {
      if (!filters.value) {
        return classes;
      } else {
        return classes.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.category.match(new RegExp(filters.value, "i")) || item.skill.name.match(new RegExp(filters.value, "i")) || item.author.username.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$1;
      const _component_VAvatar = _sfc_main$2;
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
              createBaseVNode("div", {
                class: normalizeClass(["flex-table-header", [unref(filteredData).length === 0 && "is-hidden"]])
              }, _hoisted_18, 2),
              createBaseVNode("div", _hoisted_19, [
                createVNode(TransitionGroup, {
                  name: "list",
                  tag: "div"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: "flex-table-item"
                      }, [
                        createBaseVNode("div", _hoisted_20, [
                          createBaseVNode("img", {
                            class: "media",
                            src: item.picture,
                            alt: "",
                            onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x110"))
                          }, null, 40, _hoisted_21),
                          createBaseVNode("div", null, [
                            createBaseVNode("span", _hoisted_22, toDisplayString(item.name), 1),
                            createBaseVNode("div", _hoisted_23, [
                              createBaseVNode("div", _hoisted_24, [
                                createVNode(_component_VAvatar, {
                                  picture: item.author.picture,
                                  size: "small"
                                }, null, 8, ["picture"]),
                                createBaseVNode("div", _hoisted_25, [
                                  createBaseVNode("span", null, "\u062A\u0648\u0633\u0637 " + toDisplayString(item.author.username), 1)
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_26, [
                          createBaseVNode("span", _hoisted_27, toDisplayString(item.category), 1)
                        ]),
                        createBaseVNode("div", _hoisted_28, [
                          createBaseVNode("i", {
                            "aria-hidden": "true",
                            class: normalizeClass(["cell-icon is-pushed-mobile", item.skill.icon])
                          }, null, 2),
                          createBaseVNode("span", _hoisted_29, toDisplayString(item.skill.name), 1)
                        ]),
                        createBaseVNode("div", _hoisted_30, [
                          createBaseVNode("span", _hoisted_31, [
                            createBaseVNode("i", {
                              class: normalizeClass(["fas fa-circle dot active", item.difficulty >= 1 ? "active" : ""]),
                              "aria-hidden": "true"
                            }, null, 2),
                            createBaseVNode("i", {
                              class: normalizeClass(["fas fa-circle dot", item.difficulty >= 2 ? "active" : ""]),
                              "aria-hidden": "true"
                            }, null, 2),
                            createBaseVNode("i", {
                              class: normalizeClass(["fas fa-circle dot", item.difficulty >= 3 ? "active" : ""]),
                              "aria-hidden": "true"
                            }, null, 2),
                            createBaseVNode("i", {
                              class: normalizeClass(["fas fa-circle dot", item.difficulty >= 4 ? "active" : ""]),
                              "aria-hidden": "true"
                            }, null, 2),
                            createBaseVNode("i", {
                              class: normalizeClass(["fas fa-circle dot", item.difficulty === 5 ? "active" : ""]),
                              "aria-hidden": "true"
                            }, null, 2)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_32, [
                          createBaseVNode("a", _hoisted_33, [
                            _hoisted_34,
                            _hoisted_35,
                            createTextVNode(" " + toDisplayString(item.price) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
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
            createVNode(_component_VPlaceholderPage, {
              title: "\u062F\u0648\u0631\u0647\u200C\u06CC \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647\u200C\u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.",
              subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062F\u0648\u0631\u0647 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647 \u0627\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F. \u0628\u0627 \u0645\u0631\u0627\u062C\u0639\u0647 \u0628\u0647 \u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0648\u0631\u0647 \u0648 \u06A9\u0644\u06CC\u06A9 \u0628\u0631 \u0631\u0648\u06CC \u062F\u06A9\u0645\u0647 \u0646\u0634\u0627\u0646\u06A9 \u060C \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u06CC\u06A9 \u062F\u0648\u0631\u0647 \u0631\u0627 \u0628\u0647 \u062F\u0648\u0631\u0647 \u0647\u0627\u06CC \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647 \u062E\u0648\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F."
            }, {
              image: withCtx(() => [
                _hoisted_36,
                _hoisted_37
              ]),
              _: 1
            })
          ], 2)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
