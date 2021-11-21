import { _ as _export_sfc, c as __unplugin_components_1, d as _sfc_main$2, b as _sfc_main$3, l as _sfc_main$4 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$5 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$6 } from "./VTag.ff081b8f.js";
import { _ as _sfc_main$7 } from "./VAvatarStack.8507ceb8.js";
import { _ as __unplugin_components_0 } from "./VDropdown.5214d40f.js";
import { o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, d as defineComponent, r as ref, h as computed, b as createElementBlock, v as createVNode, y as withDirectives, I as vModelText, t as unref, E as toDisplayString, n as normalizeClass, G as Fragment, J as renderList, ai as TransitionGroup, D as createCommentVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$8 } from "./VFlexPagination.440ca280.js";
import { _ as _imports_0, a as _imports_1 } from "./search-1-dark.119fdb96.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-user-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
  ])
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-bubble"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u0627\u0645"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
  ])
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-travel"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0646\u062A\u0642\u0627\u0644"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0644\u06CC\u0633\u062A\u06CC \u062F\u06CC\u06AF\u0631")
  ])
], -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-trash"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0630\u0641"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0630\u0641 \u0627\u0632 \u0644\u06CC\u0633\u062A")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = __unplugin_components_0;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1,
      _hoisted_3$1,
      _hoisted_4$1,
      _hoisted_5$1
    ]),
    _: 1
  });
}
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const users = [
  {
    id: "5",
    name: "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    roleColor: "primary",
    medias: {
      avatar: "/demo/avatars/5.jpg",
      flag: "/images/icons/flags/united-states-of-america.svg"
    },
    stats: {
      projects: 14,
      replies: 97,
      posts: 16
    },
    teams: [
      { picture: "/demo/avatars/9.jpg" },
      { picture: "/images/avatars/svg/vuero-1.svg" }
    ]
  },
  {
    id: "34",
    name: "\u062F\u0627\u0646\u06CC\u0627\u0644 \u0631\u0628\u06CC\u0639 \u0632\u0627\u062F\u0647",
    location: "\u06A9\u0627\u0646\u0627\u062F\u0627\u060C \u062A\u0648\u0631\u0646\u062A\u0648",
    role: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    roleColor: "orange",
    medias: {
      avatar: "/demo/avatars/34.jpg",
      flag: "/images/icons/flags/canada.svg"
    },
    stats: {
      projects: 45,
      replies: 12,
      posts: 5
    },
    teams: [
      { picture: "/demo/avatars/12.jpg" },
      { picture: "/demo/avatars/22.jpg" },
      { picture: "/demo/avatars/40.jpg" }
    ]
  },
  {
    id: "8",
    name: "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    roleColor: "secondary",
    medias: {
      avatar: "/images/avatars/svg/vuero-1.svg",
      flag: "/images/icons/flags/united-states-of-america.svg"
    },
    stats: {
      projects: 14,
      replies: 97,
      posts: 16
    },
    teams: [
      { picture: "/demo/avatars/7.jpg" },
      { picture: "/demo/avatars/23.jpg" }
    ]
  },
  {
    id: "40",
    name: "\u062C\u0645\u06CC\u0644\u0647 \u0645\u0631\u062F\u067E\u0631\u0633\u062A",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
    roleColor: "orange",
    medias: {
      avatar: "/demo/avatars/40.jpg",
      flag: "/images/icons/flags/france.svg"
    },
    stats: {
      projects: 6,
      replies: 12,
      posts: 8
    },
    teams: [
      { picture: "/demo/avatars/18.jpg" },
      { picture: "/demo/avatars/13.jpg" },
      { picture: "/images/avatars/svg/vuero-1.svg" },
      { picture: "/images/avatars/svg/vuero-1.svg" },
      { picture: "/images/avatars/svg/vuero-1.svg" },
      { picture: "/images/avatars/svg/vuero-1.svg" },
      { picture: "/images/avatars/svg/vuero-1.svg" },
      { picture: "/images/avatars/svg/vuero-1.svg" }
    ]
  },
  {
    id: "27",
    name: "\u0639\u0644\u06CC \u06AF\u0648\u062F\u0631\u0632\u06CC",
    location: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627\u060C \u0645\u0627\u062F\u0631\u06CC\u062F",
    role: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    roleColor: "primary",
    medias: {
      avatar: "/demo/avatars/27.jpg",
      flag: "/images/icons/flags/spain.svg"
    },
    stats: {
      projects: 8,
      replies: 158,
      posts: 54
    },
    teams: [{ picture: "/demo/avatars/18.jpg" }]
  },
  {
    id: "9",
    name: "\u0622\u0646\u0627 \u0647\u062F\u0627\u06CC\u062A",
    location: "\u0632\u0646\u062C\u0627\u0646\u060C \u0627\u0628\u0647\u0631",
    role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    roleColor: "green",
    medias: {
      avatar: "/demo/avatars/9.jpg",
      flag: "/images/icons/flags/united-states-of-america.svg"
    },
    stats: {
      projects: 19,
      replies: 28,
      posts: 12
    },
    teams: [
      { picture: "/images/avatars/svg/vuero-1.svg" },
      { picture: "/demo/avatars/5.jpg" }
    ]
  },
  {
    id: "18",
    name: "\u0646\u0642\u06CC \u0645\u0639\u0645\u0648\u0644\u06CC",
    location: "\u0627\u0631\u062F\u0628\u06CC\u0644\u060C \u0645\u063A\u0627\u0646",
    role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    roleColor: "green",
    medias: {
      avatar: "/demo/avatars/18.jpg",
      flag: "/images/icons/flags/united-states-of-america.svg"
    },
    stats: {
      projects: 59,
      replies: 158,
      posts: 16
    },
    teams: [
      { picture: "/demo/avatars/27.jpg" },
      { picture: "/demo/avatars/16.jpg" },
      { picture: "/demo/avatars/29.jpg" },
      { picture: "/demo/avatars/5.jpg" },
      { picture: "/demo/avatars/5.jpg" },
      { picture: "/demo/avatars/5.jpg" },
      { picture: "/demo/avatars/5.jpg" },
      { picture: "/demo/avatars/5.jpg" },
      { picture: "/demo/avatars/5.jpg" },
      { picture: "/demo/avatars/5.jpg" }
    ]
  },
  {
    id: "10",
    name: "\u062D\u0633\u0646 \u0645\u0642\u062F\u0645",
    location: "\u0627\u0631\u062F\u0628\u06CC\u0644\u060C \u0645\u063A\u0627\u0646",
    role: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    roleColor: "primary",
    medias: {
      avatar: "/demo/avatars/10.jpg",
      flag: "/images/icons/flags/united-states-of-america.svg"
    },
    stats: {
      projects: 42,
      replies: 15,
      posts: 2
    },
    teams: [
      { picture: "/demo/avatars/32.jpg" },
      { picture: "/demo/avatars/22.jpg" }
    ]
  },
  {
    id: "25",
    name: "\u0645\u0644\u0627\u0646\u06CC \u0648\u0644\u06CC \u0632\u0627\u062F\u0647",
    location: "\u0633\u0646 \u062E\u0648\u0632\u0647",
    role: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    roleColor: "orange",
    medias: {
      avatar: "/demo/avatars/25.jpg",
      flag: "/images/icons/flags/united-states-of-america.svg"
    },
    stats: {
      projects: 17,
      replies: 22,
      posts: 4
    },
    teams: [
      { picture: "/demo/avatars/26.jpg" },
      { picture: "/demo/avatars/38.jpg" },
      { picture: "/demo/avatars/21.jpg" },
      { picture: "/demo/avatars/5.jpg" },
      { picture: "/demo/avatars/5.jpg" }
    ]
  },
  {
    id: "7",
    name: "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    roleColor: "orange",
    medias: {
      avatar: "/demo/avatars/7.jpg",
      flag: "/images/icons/flags/united-states-of-america.svg"
    },
    stats: {
      projects: 31,
      replies: 82,
      posts: 14
    },
    teams: [
      { picture: "/demo/avatars/9.jpg" },
      { picture: "/images/avatars/svg/vuero-1.svg" }
    ]
  }
];
var ViewListV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "list-info" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u062A\u0627\u0626\u06CC\u062F ");
const _hoisted_7 = { class: "page-content-inner" };
const _hoisted_8 = { class: "list-view list-view-v1" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_11 = { class: "list-view-inner" };
const _hoisted_12 = { class: "list-view-item-inner" };
const _hoisted_13 = { class: "meta-left" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_15 = { class: "meta-right" };
const _hoisted_16 = { class: "tags" };
const _hoisted_17 = { class: "stats" };
const _hoisted_18 = { class: "stat" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_21 = { class: "stat" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_24 = { class: "stat" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0637\u0644\u0628", -1);
const _hoisted_26 = { class: "network" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0631 \u062A\u06CC\u0645", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const users$1 = users;
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return users$1;
      } else {
        return users$1.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_VTag = _sfc_main$6;
      const _component_VAvatarStack = _sfc_main$7;
      const _component_ListViewV1Dropdown = __unplugin_components_7;
      const _component_VFlexPagination = _sfc_main$8;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
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
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            unref(filteredData).length === 1 ? (openBlock(), createElementBlock("span", _hoisted_3, "1 record found")) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(filteredData).length) + " \u0631\u06A9\u0648\u0631\u062F \u067E\u06CC\u062F\u0627 \u0634\u062F", 1))
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VButton, {
              color: "primary",
              icon: "fas fa-check",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
              subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_9,
                _hoisted_10
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_11, [
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
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(_component_VAvatar, {
                          picture: item.medias.avatar,
                          size: "large",
                          badge: item.medias.flag
                        }, null, 8, ["picture", "badge"]),
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("h3", null, toDisplayString(item.name), 1),
                          createBaseVNode("span", null, [
                            _hoisted_14,
                            createBaseVNode("span", null, toDisplayString(item.location), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("div", _hoisted_16, [
                            createVNode(_component_VTag, {
                              label: item.role,
                              color: item.roleColor,
                              rounded: "",
                              elevated: ""
                            }, null, 8, ["label", "color"])
                          ]),
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("div", _hoisted_18, [
                              createBaseVNode("span", null, toDisplayString(item.stats.projects), 1),
                              _hoisted_19
                            ]),
                            _hoisted_20,
                            createBaseVNode("div", _hoisted_21, [
                              createBaseVNode("span", null, toDisplayString(item.stats.replies), 1),
                              _hoisted_22
                            ]),
                            _hoisted_23,
                            createBaseVNode("div", _hoisted_24, [
                              createBaseVNode("span", null, toDisplayString(item.stats.posts), 1),
                              _hoisted_25
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_26, [
                            createVNode(_component_VAvatarStack, {
                              avatars: item.teams,
                              limit: 3,
                              size: "small"
                            }, null, 8, ["avatars"]),
                            _hoisted_27
                          ]),
                          createVNode(_component_ListViewV1Dropdown)
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
            "max-links-displayed": 5
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
