import { c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, l as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VAvatar.879e77ac.js";
import { _ as __unplugin_components_9 } from "./UserCardDropdown.e5676968.js";
import { _ as _sfc_main$5 } from "./VAvatarStack.8507ceb8.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, B as createTextVNode, ai as TransitionGroup } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
const projects = [
  {
    id: "1",
    name: "\u067E\u0631\u0648\u0698\u0647\u200C\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u0631\u0633\u0648\u0644\u0647",
    dueDate: "\u0622\u0628\u0627\u0646 1400",
    updated: "3 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
    image: "/demo/photos/apps/1.jpg",
    owner: {
      id: 7,
      avatar: "/demo/avatars/7.jpg",
      name: "\u0622\u0644\u06CC\u0633",
      initials: "AC",
      color: "info"
    },
    team: [
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        name: "\u06A9\u0627\u0631\u0645\u0646",
        initials: "CE",
        color: "h-yellow"
      },
      {
        id: 15,
        picture: "/demo/avatars/15.jpg",
        name: "\u0647\u06CC\u0644\u062F\u0627",
        initials: "\u0647\u062D ",
        color: "h-purple"
      },
      {
        id: 12,
        picture: "/demo/avatars/12.jpg",
        name: "\u0627\u0634\u06A9\u0627\u0646",
        initials: "\u0627\u067E",
        color: "success"
      }
    ]
  },
  {
    id: "2",
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u0633\u0644\u0627\u0645\u062A \u0648 \u0641\u06CC\u062A\u0646\u0633",
    dueDate: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1400",
    updated: "5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/2.png",
    owner: {
      id: 8,
      avatar: "/images/avatars/svg/vuero-1.svg",
      name: "\u062C\u0645\u0627\u0644",
      initials: "EK",
      color: "info"
    },
    team: [
      {
        id: 13,
        picture: "/demo/avatars/13.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
        initials: "\u0627\u0686",
        color: "danger"
      },
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      }
    ]
  },
  {
    id: "3",
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u0622\u0645\u0648\u0632\u0634\u06CC \u0648 \u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC",
    dueDate: "\u062F\u06CC 1399",
    updated: "5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/3.png",
    owner: {
      id: 25,
      avatar: "/demo/avatars/25.jpg",
      name: "\u0645\u0644\u0627\u0646\u06CC",
      initials: "MW",
      color: "info"
    },
    team: [
      {
        id: 14,
        picture: "/demo/avatars/14.jpg",
        name: "\u0631\u0627\u06CC\u0627\u0646",
        initials: "\u0631\u0628",
        color: "info"
      }
    ]
  },
  {
    id: "4",
    name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0648 \u0645\u0627\u0644\u06CC",
    dueDate: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1400",
    updated: "5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/4.png",
    owner: {
      id: 23,
      avatar: "/demo/avatars/23.jpg",
      name: "\u0631\u06CC\u062D\u0627\u0646\u0647",
      initials: "IV",
      color: "success"
    },
    team: [
      {
        id: 13,
        picture: "/demo/avatars/13.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
        initials: "\u0627\u0686",
        color: "danger"
      },
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      }
    ]
  },
  {
    id: "5",
    name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0631\u0632\u0648\u0645\u0647",
    dueDate: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1400",
    updated: "\u06F2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/5.png",
    owner: {
      id: 11,
      avatar: "/demo/avatars/11.jpg",
      name: "\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647",
      initials: "\u0628 \u0628",
      color: "h-orange"
    },
    team: [
      {
        id: 30,
        picture: "/demo/avatars/30.jpg",
        name: "\u06A9\u0645\u0627\u0644",
        initials: "CD",
        color: "info"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "h-purple"
      }
    ]
  },
  {
    id: "6",
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0644\u0646\u062F\u06CC\u0646\u06AF \u0628\u0627\u0646\u06A9",
    dueDate: "\u0628\u0647\u0645\u0646 1399",
    updated: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/apps/6.png",
    owner: {
      id: 9,
      avatar: "/demo/avatars/9.jpg",
      name: "\u0622\u0646\u0627",
      initials: "\u0622\u0647",
      color: "success"
    },
    team: [
      {
        id: 15,
        picture: "/demo/avatars/15.jpg",
        name: "\u0647\u06CC\u0644\u062F\u0627",
        initials: "\u0647\u062D ",
        color: "info"
      },
      {
        id: 40,
        picture: "/demo/avatars/40.jpg",
        name: "\u062C\u0645\u06CC\u0644\u0647",
        initials: "JM",
        color: "success"
      },
      {
        id: 8,
        picture: "/images/avatars/svg/vuero-1.svg",
        name: "\u062C\u0645\u0627\u0644",
        initials: "EK",
        color: "h-purple"
      }
    ]
  },
  {
    id: "7",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0627\u067E \u0622\u0645\u0648\u0632\u0634\u06CC",
    dueDate: "\u0622\u0630\u0631 1399",
    updated: "1 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/7.png",
    owner: {
      id: 25,
      avatar: "/demo/avatars/25.jpg",
      name: "\u0645\u0644\u0627\u0646\u06CC",
      initials: "MW",
      color: "info"
    },
    team: [
      {
        id: 11,
        picture: "/demo/avatars/11.jpg",
        name: "\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647",
        initials: "\u0628 \u0628",
        color: "success"
      }
    ]
  },
  {
    id: "8",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0627\u067E \u0622\u0645\u0648\u0632\u0634\u06CC",
    dueDate: "\u0622\u0630\u0631 1399",
    updated: "4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/apps/8.png",
    owner: {
      id: 5,
      avatar: "/demo/avatars/5.jpg",
      name: "\u0645\u0631\u06CC\u0645",
      initials: "ML",
      color: "info"
    },
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 29,
        picture: "/demo/avatars/29.jpg",
        name: "\u062D\u06A9\u06CC\u0645",
        initials: "HC",
        color: "danger"
      },
      {
        id: 33,
        picture: "/demo/avatars/33.jpg",
        name: "\u0647\u0627\u0631\u0648\u06CC",
        initials: "HM",
        color: "success"
      }
    ]
  },
  {
    id: "9",
    name: "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u062F\u0627\u0631\u06CC",
    dueDate: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1400",
    updated: "\u06F2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/9.png",
    owner: {
      id: 27,
      avatar: "/demo/avatars/27.jpg",
      name: "\u06A9\u0627\u0631\u0645\u0646",
      initials: "CE",
      color: "info"
    },
    team: [
      {
        id: 30,
        picture: "/demo/avatars/30.jpg",
        name: "\u06A9\u0645\u0627\u0644",
        initials: "CD",
        color: "h-purple"
      },
      {
        id: 19,
        picture: "/demo/avatars/19.jpg",
        name: "\u0627\u0631\u0633\u0637\u0648",
        initials: "\u0627\u0632",
        color: "info"
      }
    ]
  },
  {
    id: "10",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    dueDate: "\u0622\u0628\u0627\u0646 1400",
    updated: "\u06F2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/10.png",
    owner: {
      id: 27,
      avatar: "/demo/avatars/27.jpg",
      name: "\u06A9\u0627\u0631\u0645\u0646",
      initials: "CE",
      color: "info"
    },
    team: [
      {
        id: 24,
        picture: "/demo/avatars/24.jpg",
        name: "\u0633\u0627\u0646\u062F\u0631\u06CC\u0646",
        initials: "SC",
        color: "success"
      },
      {
        id: 22,
        picture: "/demo/avatars/22.jpg",
        name: "\u062C\u06CC\u0645\u06CC",
        initials: "JH",
        color: "info"
      }
    ]
  },
  {
    id: "11",
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u0627\u0631\u0633\u0627\u0644 \u0628\u0633\u062A\u0646\u06CC",
    dueDate: "\u0645\u0647\u0631 1400",
    updated: "\u06F2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/apps/11.png",
    owner: {
      id: 13,
      avatar: "/demo/avatars/13.jpg",
      name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
      initials: "\u0627\u0686",
      color: "danger"
    },
    team: [
      {
        id: 28,
        picture: "/demo/avatars/28.jpg",
        name: "\u0627\u062F\u0648\u0627\u0631\u062F",
        initials: "EF",
        color: "info"
      }
    ]
  },
  {
    id: "12",
    name: "\u0644\u0646\u062F\u06CC\u0646\u06AF \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
    dueDate: "\u0622\u0630\u0631 1399",
    updated: "4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/apps/12.jpg",
    owner: {
      id: 12,
      avatar: "/demo/avatars/12.jpg",
      name: "\u0627\u0634\u06A9\u0627\u0646",
      initials: "\u0627\u067E",
      color: "info"
    },
    team: [
      {
        id: 119,
        picture: void 0,
        name: "Sarah Connor.",
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: "13",
    name: "\u0644\u0646\u062F\u06CC\u0646\u06AF \u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF \u0648\u0628",
    dueDate: "\u0622\u0630\u0631 1399",
    updated: "3 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
    image: "/demo/photos/apps/13.png",
    owner: {
      id: 12,
      avatar: "/demo/avatars/12.jpg",
      name: "\u0627\u0634\u06A9\u0627\u0646",
      initials: "\u0627\u067E",
      color: "info"
    },
    team: [
      {
        id: 8,
        picture: "/images/avatars/svg/vuero-1.svg",
        name: "\u062C\u0645\u0627\u0644",
        initials: "EK",
        color: "h-purple"
      },
      {
        id: 15,
        picture: "/demo/avatars/15.jpg",
        name: "\u0647\u06CC\u0644\u062F\u0627",
        initials: "\u0647\u062D ",
        color: "h-orange"
      },
      {
        id: 12,
        picture: "/demo/avatars/40.jpg",
        name: "\u062C\u0645\u06CC\u0644\u0647",
        initials: "JM",
        color: "success"
      }
    ]
  },
  {
    id: "14",
    name: "\u0635\u0641\u062D\u0647 \u0644\u0646\u062F\u06CC\u0646\u06AF \u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E",
    dueDate: "\u0622\u0630\u0631 1399",
    updated: "3 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
    image: "/demo/photos/apps/14.jpg",
    owner: {
      id: 15,
      avatar: "/demo/avatars/15.jpg",
      name: "\u0647\u06CC\u0644\u062F\u0627",
      initials: "\u0647\u062D ",
      color: "danger"
    },
    team: [
      {
        id: 31,
        picture: "/demo/avatars/31.jpg",
        name: "\u06CC\u0627\u0633\u06CC\u0646",
        initials: "YA",
        color: "info"
      }
    ]
  },
  {
    id: "15",
    name: "\u0633\u06CC\u0633\u062A\u0645 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u06A9\u0633\u067E\u0631\u0633",
    dueDate: "\u0645\u0647\u0631 1400",
    updated: "2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/apps/15.png",
    owner: {
      id: 39,
      avatar: "/demo/avatars/39.jpg",
      name: "\u0639\u0644\u06CC",
      initials: "\u0622\u0647",
      color: "info"
    },
    team: [
      {
        id: 5,
        picture: "/demo/avatars/5.jpg",
        name: "\u0645\u0631\u06CC\u0645",
        initials: "ML",
        color: "info"
      },
      {
        id: 24,
        picture: "/demo/avatars/24.jpg",
        name: "\u0633\u0627\u0646\u062F\u0631\u06CC\u0646",
        initials: "SC",
        color: "success"
      }
    ]
  }
];
var CardsGridV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647 \u062A\u0627\u0632\u0647", -1);
const _hoisted_5 = { class: "card-grid card-grid-v2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "card-grid-item" };
const _hoisted_9 = { class: "card" };
const _hoisted_10 = { class: "card-header" };
const _hoisted_11 = { class: "card-header-title" };
const _hoisted_12 = { class: "meta" };
const _hoisted_13 = { class: "dark-inverted" };
const _hoisted_14 = { class: "card-header-icon" };
const _hoisted_15 = { class: "card-image" };
const _hoisted_16 = { class: "image is-16by9" };
const _hoisted_17 = ["src"];
const _hoisted_18 = { class: "card-content" };
const _hoisted_19 = { class: "card-content-flex" };
const _hoisted_20 = { class: "card-info" };
const _hoisted_21 = { class: "dark-inverted" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:calendar"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("footer", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "card-footer-item"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "card-footer-item"
  }, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const projects$1 = projects;
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return projects$1;
      } else {
        return projects$1.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.dueDate.match(new RegExp(filters.value, "i")) || item.owner.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "\u0647\u0645\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
      "Web Apps",
      "Mobile Apps",
      "\u062F\u0627\u0634\u0628\u0631\u062F\u0647\u0627",
      "Landing Pages"
    ];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
      const _component_UserCardDropdown = __unplugin_components_9;
      const _component_VAvatarStack = _sfc_main$5;
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
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                return openBlock(), createElementBlock("div", {
                  key,
                  class: "column is-4"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("header", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: item.owner.avatar
                          }, null, 8, ["picture"]),
                          createBaseVNode("div", _hoisted_12, [
                            createBaseVNode("span", _hoisted_13, toDisplayString(item.owner.name), 1),
                            createBaseVNode("span", null, "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u062F\u0631 " + toDisplayString(item.updated), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_14, [
                          createVNode(_component_UserCardDropdown)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("figure", _hoisted_16, [
                          createBaseVNode("img", {
                            src: item.image,
                            alt: "",
                            onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "1280x960"))
                          }, null, 40, _hoisted_17)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            createBaseVNode("h3", _hoisted_21, toDisplayString(item.name), 1),
                            createBaseVNode("p", null, [
                              _hoisted_22,
                              createTextVNode(toDisplayString(item.dueDate), 1)
                            ])
                          ]),
                          createVNode(_component_VAvatarStack, {
                            avatars: item.team,
                            size: "small",
                            limit: 3
                          }, null, 8, ["avatars"])
                        ])
                      ]),
                      _hoisted_23
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
