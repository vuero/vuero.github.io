import { j as _imports_0, k as _imports_1, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, h as _sfc_main$3, l as _sfc_main$4 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$5 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$6 } from "./VAvatarStack.8507ceb8.js";
import { _ as __unplugin_components_2 } from "./FlexTableDropdown.4f5be7fe.js";
import { _ as _sfc_main$7 } from "./VFlexPagination.440ca280.js";
import { d as defineComponent, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, D as createCommentVNode, ai as TransitionGroup, N as createBlock, B as createTextVNode } from "./vendor.9ec557a4.js";
const users = [
  {
    id: 0,
    username: "\u062C\u0645\u0627\u0644",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    picture: "/images/avatars/svg/vuero-1.svg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 1,
        picture: void 0,
        initials: "JP",
        color: "info"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "EK",
        color: "h-purple"
      },
      {
        id: 3,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "danger"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      }
    ]
  },
  {
    id: 1,
    username: "\u062C\u06CC\u0645\u06CC",
    position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    picture: "/demo/avatars/22.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    industry: "\u062A\u062C\u0627\u0631\u06CC",
    status: "\u062F\u0631\u062D\u0627\u0644 \u06A9\u0627\u0631",
    contacts: [
      {
        id: 148,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 2,
    username: "\u0645\u0644\u0627\u0646\u06CC",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    picture: "/demo/avatars/25.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0633\u0646 \u062E\u0648\u0632\u0647",
    industry: "\u0637\u0631\u0627\u062D\u06CC",
    status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
    contacts: [
      {
        id: 127,
        picture: void 0,
        initials: "BT",
        color: "success"
      },
      {
        id: 7,
        picture: "/demo/avatars/7.jpg",
        initials: "AC",
        color: "h-purple"
      },
      {
        id: 19,
        picture: "/demo/avatars/19.jpg",
        initials: "\u0627\u0632",
        color: "h-yellow"
      },
      {
        id: 148,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 149,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 3,
    username: "\u0627\u0634\u06A9\u0627\u0646",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0628\u06A9\u200C\u0627\u0646\u062F",
    picture: "/demo/avatars/12.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633",
    industry: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC",
    status: "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647",
    contacts: [
      {
        id: 7,
        picture: "/demo/avatars/13.jpg",
        initials: "\u0627\u0686",
        color: "info"
      }
    ]
  },
  {
    id: 4,
    username: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    picture: "/demo/avatars/13.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    industry: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
    status: "\u062F\u0631\u062D\u0627\u0644 \u06A9\u0627\u0631",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: "/demo/avatars/11.jpg",
        initials: "KL",
        color: "danger"
      },
      {
        id: 17,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 152,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 154,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 5,
    username: "\u0627\u0631\u0633\u0637\u0648",
    position: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
    picture: "/demo/avatars/19.jpg",
    badge: "/images/icons/flags/germany.svg",
    location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
    industry: "\u062A\u062C\u0627\u0631\u06CC",
    status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: void 0,
        initials: "AT",
        color: "h-yellow"
      },
      {
        id: 17,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 152,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 6,
    username: "\u06A9\u0645\u0627\u0644",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    picture: "/demo/avatars/30.jpg",
    badge: "/images/icons/flags/france.svg",
    location: "\u0641\u0631\u0627\u0646\u0633\u0647\u060C \u062A\u0648\u0644\u0648\u0633",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: void 0,
        initials: "BV",
        color: "h-purple"
      },
      {
        id: 8,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "ML",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 7,
    username: "\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    picture: "/demo/avatars/11.jpg",
    badge: "/images/icons/flags/england.svg",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
    contacts: [
      {
        id: 25,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 13,
        picture: "/demo/avatars/13.jpg",
        initials: "\u0627\u0686",
        color: "info"
      },
      {
        id: 17,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      }
    ]
  },
  {
    id: 8,
    username: "\u0622\u0644\u0646",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    picture: void 0,
    badge: "/images/icons/flags/united-states-of-america.svg",
    color: "h-yellow",
    initials: "AT",
    location: "\u0632\u0646\u062C\u0627\u0646\u060C \u0627\u0628\u0647\u0631",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
    contacts: [
      {
        id: 25,
        picture: "/demo/avatars/25.jpg",
        initials: "MW",
        color: "info"
      }
    ]
  },
  {
    id: 9,
    username: "\u06A9\u0631\u06CC\u0645",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    picture: "/demo/avatars/26.jpg",
    badge: "/images/icons/flags/australia.svg",
    location: "\u0645\u0644\u0628\u0648\u0631\u0646, \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
    contacts: [
      {
        id: 7,
        picture: "/demo/avatars/7.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 165,
        picture: void 0,
        initials: "JD",
        color: "info"
      },
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        initials: "CE",
        color: "warning"
      },
      {
        id: 150,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 151,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  }
];
var FlexListV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631 ");
const _hoisted_3 = { class: "page-content-inner" };
const _hoisted_4 = { class: "flex-list-wrapper flex-list-v1" };
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
const _hoisted_7 = { class: "flex-table" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "is-grow" }, "\u06A9\u0627\u0631\u0628\u0631", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0648\u0642\u0639\u06CC\u062A", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0648\u0632\u0647 \u06A9\u0627\u0631\u06CC", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "cell-end" }, "\u0627\u0642\u062F\u0627\u0645\u0627\u062A", -1);
const _hoisted_14 = [
  _hoisted_8,
  _hoisted_9,
  _hoisted_10,
  _hoisted_11,
  _hoisted_12,
  _hoisted_13
];
const _hoisted_15 = { class: "flex-list-inner" };
const _hoisted_16 = { class: "flex-table-cell is-media is-grow" };
const _hoisted_17 = { class: "item-name dark-inverted" };
const _hoisted_18 = { class: "item-meta" };
const _hoisted_19 = {
  class: "flex-table-cell",
  "data-th": "\u0645\u0648\u0642\u0639\u06CC\u062A"
};
const _hoisted_20 = { class: "light-text" };
const _hoisted_21 = {
  class: "flex-table-cell",
  "data-th": "\u062D\u0648\u0632\u0647 \u06A9\u0627\u0631\u06CC"
};
const _hoisted_22 = { class: "light-text" };
const _hoisted_23 = {
  class: "flex-table-cell",
  "data-th": "\u0648\u0636\u0639\u06CC\u062A"
};
const _hoisted_24 = {
  key: 0,
  class: "tag is-success is-rounded"
};
const _hoisted_25 = {
  key: 1,
  class: "tag is-info is-rounded"
};
const _hoisted_26 = {
  key: 2,
  class: "tag is-danger is-rounded"
};
const _hoisted_27 = {
  key: 3,
  class: "tag is-rounded"
};
const _hoisted_28 = {
  class: "flex-table-cell",
  "data-th": "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A"
};
const _hoisted_29 = {
  class: "flex-table-cell cell-end",
  "data-th": "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const users$1 = users;
    const filteredData = computed(() => {
      if (!filters.value) {
        return users$1;
      } else {
        return users$1.filter((item) => {
          return item.username.match(new RegExp(filters.value, "i")) || item.position.match(new RegExp(filters.value, "i")) || item.industry.match(new RegExp(filters.value, "i")) || item.status.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VButtons = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_VAvatarStack = _sfc_main$6;
      const _component_FlexTableDropdown = __unplugin_components_2;
      const _component_VFlexPagination = _sfc_main$7;
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
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                icon: "fas fa-plus",
                elevated: ""
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
              subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_5,
                _hoisted_6
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", {
                class: normalizeClass(["flex-table-header", [unref(filteredData).length === 0 && "is-hidden"]])
              }, _hoisted_14, 2),
              createBaseVNode("div", _hoisted_15, [
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
                        createBaseVNode("div", _hoisted_16, [
                          createVNode(_component_VAvatar, {
                            picture: item.picture,
                            badge: item.badge,
                            color: item.color,
                            initials: item.initials,
                            size: "medium"
                          }, null, 8, ["picture", "badge", "color", "initials"]),
                          createBaseVNode("div", null, [
                            createBaseVNode("span", _hoisted_17, toDisplayString(item.username), 1),
                            createBaseVNode("span", _hoisted_18, [
                              createBaseVNode("span", null, toDisplayString(item.position), 1)
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("span", _hoisted_20, toDisplayString(item.location), 1)
                        ]),
                        createBaseVNode("div", _hoisted_21, [
                          createBaseVNode("span", _hoisted_22, toDisplayString(item.industry), 1)
                        ]),
                        createBaseVNode("div", _hoisted_23, [
                          item.status === "\u0622\u0646\u0644\u0627\u06CC\u0646" ? (openBlock(), createElementBlock("span", _hoisted_24, toDisplayString(item.status), 1)) : createCommentVNode("", true),
                          item.status === "\u062F\u0631\u062D\u0627\u0644 \u06A9\u0627\u0631" ? (openBlock(), createElementBlock("span", _hoisted_25, toDisplayString(item.status), 1)) : createCommentVNode("", true),
                          item.status === "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647" ? (openBlock(), createElementBlock("span", _hoisted_26, toDisplayString(item.status), 1)) : createCommentVNode("", true),
                          item.status === "\u0622\u0641\u0644\u0627\u06CC\u0646" ? (openBlock(), createElementBlock("span", _hoisted_27, toDisplayString(item.status), 1)) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_28, [
                          createVNode(_component_VAvatarStack, {
                            avatars: item.contacts,
                            size: "small",
                            limit: 3,
                            class: "is-pushed-mobile"
                          }, null, 8, ["avatars"])
                        ]),
                        createBaseVNode("div", _hoisted_29, [
                          createVNode(_component_FlexTableDropdown)
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
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
