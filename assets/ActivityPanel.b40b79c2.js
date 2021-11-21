import { u as useDropdown } from "./useDropdown.086619d7.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, r as ref, o as openBlock, b as createElementBlock, e as createBaseVNode, t as unref, C as createStaticVNode, B as createTextVNode, N as createBlock, x as withCtx, v as createVNode, n as normalizeClass, F as renderSlot, D as createCommentVNode, G as Fragment, Z as useI18n, u as useStorage, a9 as watch, E as toDisplayString, y as withDirectives, an as vModelRadio, A as isRef } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$6 } from "./VAvatar.879e77ac.js";
import { _ as _export_sfc, b as _sfc_main$7 } from "./index.4d6c8e1a.js";
import { _ as __unplugin_components_0 } from "./VDropdown.5214d40f.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import { _ as _imports_0$2, a as _imports_1$1, b as _imports_3$2 } from "./fastpizza.70124fcb.js";
import { _ as _imports_2$3 } from "./25.ca54486f.js";
var _imports_0$1 = "/images/avatars/svg/vuero-4.svg";
var _imports_1 = "/images/avatars/svg/vuero-2.svg";
var _imports_2$2 = "/images/avatars/svg/vuero-5.svg";
var _imports_3$1 = "/images/avatars/svg/vuero-9.svg";
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("span", { class: "new-indicator pulsate" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_1$5,
  _hoisted_2$5
];
const _hoisted_4$5 = { class: "navbar-dropdown is-boxed is-right" };
const _hoisted_5$4 = /* @__PURE__ */ createStaticVNode('<div class="heading"><div class="heading-left"><h6 class="heading-title">\u0627\u0639\u0644\u0627\u0646\u0627\u062A</h6></div><div class="heading-right"><a class="notification-link" href="#">\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647</a></div></div>', 1);
const _hoisted_6$4 = { class: "inner has-slimscroll" };
const _hoisted_7$4 = { class: "notification-list" };
const _hoisted_8$4 = { class: "notification-item" };
const _hoisted_9$3 = { class: "img-left" };
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0622\u0644\u06CC\u0633"),
    /* @__PURE__ */ createTextVNode(" \u06CC\u06A9 \u06A9\u0627\u0645\u0646\u062A \u06AF\u0630\u0627\u0634\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "1 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_11$3 = { class: "notification-item" };
const _hoisted_12$3 = { class: "img-left" };
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0622\u0631\u0646\u0648\u0644\u062F \u0627\u06CC\u0646\u0634\u062A\u06CC\u0646"),
    /* @__PURE__ */ createTextVNode(" \u0641\u0627\u06CC\u0644\u06CC \u0631\u0627 \u0622\u067E\u0644\u0648\u062F \u06A9\u0631\u062F. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_14$2 = { class: "notification-item" };
const _hoisted_15$2 = { class: "img-left" };
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644"),
    /* @__PURE__ */ createTextVNode(" \u067E\u06CC\u063A\u0627\u0645\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_17$2 = { class: "notification-item" };
const _hoisted_18$2 = { class: "img-left" };
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0645\u0644\u0627\u0646\u06CC"),
    /* @__PURE__ */ createTextVNode(" \u06CC\u06A9 \u06A9\u0627\u0645\u0646\u062A \u06AF\u0630\u0627\u0634\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "3 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: (_value, _refs) => {
          _refs["dropdownElement"] = _value;
          dropdownElement.value = _value;
        },
        class: "navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"
      }, [
        createBaseVNode("a", {
          class: "navbar-link is-arrowless",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
        }, _hoisted_3$5),
        createBaseVNode("div", _hoisted_4$5, [
          _hoisted_5$4,
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("ul", _hoisted_7$4, [
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_8$4, [
                  createBaseVNode("div", _hoisted_9$3, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_0$1,
                      onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_10$3
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_11$3, [
                  createBaseVNode("div", _hoisted_12$3, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_1,
                      onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_13$2
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_14$2, [
                  createBaseVNode("div", _hoisted_15$2, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_2$2,
                      onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_16$2
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_17$2, [
                  createBaseVNode("div", _hoisted_18$2, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_3$1,
                      onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_19$2
                ])
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
});
const _sfc_main$4 = {};
const _hoisted_1$4 = ["onClick"];
const _hoisted_2$4 = { class: "dropdown-head" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644")
], -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
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
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0648 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062E\u0648\u062F")
  ])
], -1);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-briefcase"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0647\u0645\u0647\u200C\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0645\u0646")
  ])
], -1);
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-users-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u06CC\u0645"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u062E\u0648\u062F")
  ])
], -1);
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cog"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC")
  ])
], -1);
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_11$2 = { class: "dropdown-item is-button" };
const _hoisted_12$2 = /* @__PURE__ */ createTextVNode(" \u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ");
function _sfc_render(_ctx, _cache) {
  const _component_VAvatar = _sfc_main$6;
  const _component_VButton = _sfc_main$7;
  const _component_VDropdown = __unplugin_components_0;
  return openBlock(), createBlock(_component_VDropdown, {
    right: "",
    spaced: "",
    class: "user-dropdown profile-dropdown"
  }, {
    button: withCtx(({ toggle }) => [
      createBaseVNode("a", {
        class: "is-trigger dropdown-trigger",
        "aria-haspopup": "true",
        onClick: toggle
      }, [
        createVNode(_component_VAvatar, { picture: "/images/avatars/svg/vuero-1.svg" })
      ], 8, _hoisted_1$4)
    ]),
    content: withCtx(() => [
      createBaseVNode("div", _hoisted_2$4, [
        createVNode(_component_VAvatar, {
          size: "large",
          picture: "/images/avatars/svg/vuero-1.svg"
        }),
        _hoisted_3$4
      ]),
      _hoisted_4$4,
      _hoisted_5$3,
      _hoisted_6$3,
      _hoisted_7$3,
      _hoisted_8$3,
      _hoisted_9$2,
      _hoisted_10$2,
      createBaseVNode("div", _hoisted_11$2, [
        createVNode(_component_VButton, {
          class: "logout-button",
          icon: "feather:log-out",
          color: "primary",
          role: "menuitem",
          raised: "",
          fullwidth: ""
        }, {
          default: withCtx(() => [
            _hoisted_12$2
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
var MobileNavbar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = {
  class: "navbar mobile-navbar is-hidden-desktop is-hidden-tablet",
  "aria-label": "main navigation"
};
const _hoisted_2$3 = { class: "container" };
const _hoisted_3$3 = { class: "navbar-brand" };
const _hoisted_4$3 = { class: "brand-start" };
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8$2 = [
  _hoisted_5$2,
  _hoisted_6$2,
  _hoisted_7$2
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean, required: false }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", _hoisted_4$3, [
              createBaseVNode("div", {
                class: normalizeClass(["navbar-burger", [props.isOpen && "is-active"]]),
                onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
              }, _hoisted_8$2, 2)
            ]),
            renderSlot(_ctx.$slots, "brand")
          ])
        ])
      ]);
    };
  }
});
var MobileSidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "inner" };
const _hoisted_2$2 = { class: "icon-side-menu" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    "aria-label": "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC",
    href: "/"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:activity"
    })
  ])
], -1);
const _hoisted_4$2 = { class: "bottom-icon-side-menu" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean, required: false }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass([[props.isOpen && "is-active"], "mobile-main-sidebar"])
        }, [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("ul", _hoisted_2$2, [
              renderSlot(_ctx.$slots, "links", {}, () => [
                _hoisted_3$2
              ])
            ]),
            createBaseVNode("ul", _hoisted_4$2, [
              renderSlot(_ctx.$slots, "bottom-links")
            ])
          ])
        ], 2),
        props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "mobile-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var _imports_0 = "/images/icons/flags/iran.svg";
var _imports_2$1 = "/images/icons/flags/united-states-of-america.svg";
var _imports_2 = "/images/icons/flags/france.svg";
var _imports_3 = "/images/icons/flags/spain.svg";
var _imports_4 = "/images/icons/flags/germany.svg";
var _imports_5 = "/images/icons/flags/mexico.svg";
var _imports_6 = "/images/icons/flags/china.svg";
var _imports_7 = "/assets/languages.7b1df35e.svg";
var _imports_8 = "/assets/languages-dark.e1954b48.svg";
var LanguagesPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "left-panel" };
const _hoisted_2$1 = { class: "left-panel-head" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = { class: "left-panel-body has-slimscroll" };
const _hoisted_6$1 = { class: "languages-boxes" };
const _hoisted_7$1 = { class: "language-box" };
const _hoisted_8$1 = { class: "language-option" };
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_10$1 = { class: "language-box" };
const _hoisted_11$1 = { class: "language-option" };
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_13$1 = { class: "language-box" };
const _hoisted_14$1 = { class: "language-option" };
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_16$1 = { class: "language-box" };
const _hoisted_17$1 = { class: "language-option" };
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_19$1 = { class: "language-box" };
const _hoisted_20$1 = { class: "language-option" };
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_22$1 = { class: "language-box" };
const _hoisted_23$1 = { class: "language-option" };
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_25$1 = { class: "language-box" };
const _hoisted_26$1 = { class: "language-option" };
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_6,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("div", { class: "img-wrap has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image",
    src: _imports_7,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image",
    src: _imports_8,
    alt: ""
  })
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { locale, t } = useI18n();
    const defaultLocale = useStorage("locale", "fa");
    watch(locale, () => {
      defaultLocale.value = locale.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "languages-panel",
        class: normalizeClass([[unref(activePanel) === "languages" && "is-active"], "left-panel-wrapper is-languages"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "none")
        }),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("h3", null, toDisplayString(unref(t)("select-language")), 1),
            createBaseVNode("a", {
              class: "close-panel",
              onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "none")
            }, _hoisted_4$1)
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("div", _hoisted_6$1, [
              createBaseVNode("div", _hoisted_7$1, [
                createBaseVNode("div", _hoisted_8$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "fa",
                    checked: ""
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_9$1
                ])
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                createBaseVNode("div", _hoisted_11$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "en"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_12$1
                ])
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                createBaseVNode("div", _hoisted_14$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "fr"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_15$1
                ])
              ]),
              createBaseVNode("div", _hoisted_16$1, [
                createBaseVNode("div", _hoisted_17$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "es"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_18$1
                ])
              ]),
              createBaseVNode("div", _hoisted_19$1, [
                createBaseVNode("div", _hoisted_20$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "de"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_21$1
                ])
              ]),
              createBaseVNode("div", _hoisted_22$1, [
                createBaseVNode("div", _hoisted_23$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "es-MX"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_24$1
                ])
              ]),
              createBaseVNode("div", _hoisted_25$1, [
                createBaseVNode("div", _hoisted_26$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "zh-CN"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_27$1
                ])
              ])
            ]),
            _hoisted_28$1
          ])
        ])
      ], 2);
    };
  }
});
var ActivityPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "left-panel" };
const _hoisted_2 = { class: "left-panel-head" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "\u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { class: "tabs-wrapper is-triple-slider is-squared" };
const _hoisted_7 = { class: "tabs-inner" };
const _hoisted_8 = { class: "tabs" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u06CC\u0645", -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627", -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", null, "\u0632\u0645\u0627\u0646\u0628\u0646\u062F\u06CC", -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_16 = { class: "left-panel-body" };
const _hoisted_17 = { class: "team-card" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0622\u0631\u0646\u0648\u0644\u062F \u0627\u06CC\u0646\u0634\u062A\u06CC\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" \u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C ")
  ])
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_20 = { class: "team-card" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0644\u0627\u0646\u06CC \u062C\u0627\u0628\u0632"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627\u060C \u0622\u0645\u0631\u06CC\u06A9\u0627 ")
  ])
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_23 = { class: "team-card" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u06CC\u0644 \u06AF\u06CC\u062A\u0633"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" \u0645\u06CC\u0627\u0645\u06CC\u060C \u0641\u0644\u0627\u062F\u0644\u0641\u06CC\u0627 ")
  ])
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_26 = { class: "team-card" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9 ")
  ])
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_29 = { class: "project-card" };
const _hoisted_30 = { class: "project-inner" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u06CC \u0627\u0633\u0644\u0627\u06CC\u0632\u0631"),
  /* @__PURE__ */ createBaseVNode("span", null, "getslicer.io")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_33 = { class: "project-foot" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("progress", {
  class: "progress is-primary is-tiny",
  value: "31",
  max: "100"
}, " 31% ", -1);
const _hoisted_35 = { class: "foot-stats" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", null, "5 / 24", -1);
const _hoisted_37 = { class: "avatar-stack" };
const _hoisted_38 = { class: "project-card" };
const _hoisted_39 = { class: "project-inner" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0632\u0631\u0637\u0631\u0627\u062D\u06CC \u0645\u062A\u0627\u0645\u0648\u0648\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "metamovies.co")
], -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_42 = { class: "project-foot" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("progress", {
  class: "progress is-primary is-tiny",
  value: "84",
  max: "100"
}, " 84% ", -1);
const _hoisted_44 = { class: "foot-stats" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", null, "28 / 31", -1);
const _hoisted_46 = { class: "avatar-stack" };
const _hoisted_47 = { class: "project-card" };
const _hoisted_48 = { class: "project-inner" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u067E\u06CC\u062A\u0632\u0627 \u0641\u0633\u062A"),
  /* @__PURE__ */ createBaseVNode("span", null, "fastpizza.com")
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_51 = { class: "project-foot" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("progress", {
  class: "progress is-primary is-tiny",
  value: "60",
  max: "100"
}, " 60% ", -1);
const _hoisted_53 = { class: "foot-stats" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", null, "25 / 39", -1);
const _hoisted_55 = { class: "avatar-stack" };
const _hoisted_56 = { class: "icon-timeline" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "timeline-item" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "timeline-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:phone-call"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "timeline-content" }, [
    /* @__PURE__ */ createBaseVNode("p", null, "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0627\u0633\u062A\u06CC\u0648"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0645\u0631\u0648\u0632 - 11:30 \u0635\u0628\u062D")
  ])
], -1);
const _hoisted_58 = { class: "timeline-item" };
const _hoisted_59 = { class: "timeline-icon" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "timeline-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u062F\u06CC\u062F\u0627\u0631 \u0628\u0627 \u0622\u0644\u06CC\u0633"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0645\u0631\u0648\u0632 - 01:00 \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631")
], -1);
const _hoisted_61 = /* @__PURE__ */ createStaticVNode('<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>\u067E\u0627\u0633\u062E \u0628\u0647 \u067E\u06CC\u0627\u0645\u200C\u0647\u0627\u06CC \u0645\u0634\u062A\u0631\u06CC</p><span>\u0627\u0645\u0631\u0648\u0632 - 01:45 \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>\u0627\u0631\u0633\u0627\u0644 \u06A9\u0645\u067E\u06CC\u0646 \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC</p><span>\u0627\u0645\u0631\u0648\u0632 - 02:30 \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>\u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647</p><span>\u0627\u0645\u0631\u0648\u0632 - 03:30 \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>\u062A\u0645\u0627\u0633 \u0628\u0627 \u0622\u0642\u0627\u06CC \u062C\u06A9\u0633\u0648\u0646</p><span>\u0627\u0645\u0631\u0648\u0632 - 05:00 \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>\u062A\u0647\u06CC\u0647\u200C\u06CC \u067E\u0631\u0648\u067E\u0648\u0632\u0627\u0644 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647</p><span>\u0627\u0645\u0631\u0648\u0632 - 06:00 \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631</span></div></div>', 5);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("team");
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$6;
      return openBlock(), createElementBlock("div", {
        id: "activity-panel",
        class: normalizeClass([[unref(activePanel) === "activity" && "is-active"], "left-panel-wrapper is-activity"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "none")
        }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("a", {
              class: "close-panel",
              onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "none")
            }, _hoisted_5)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("ul", null, [
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "team" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "team")
                    }, _hoisted_10)
                  ], 2),
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "projects" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "projects")
                    }, _hoisted_12)
                  ], 2),
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "schedule" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "schedule")
                    }, _hoisted_14)
                  ], 2),
                  _hoisted_15
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", {
                id: "team-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "team" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(_component_VAvatar, {
                    picture: "/demo/avatars/12.jpg",
                    badge: "/images/icons/flags/united-states-of-america.svg"
                  }),
                  _hoisted_18,
                  _hoisted_19
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createVNode(_component_VAvatar, {
                    picture: "/demo/avatars/25.jpg",
                    badge: "/images/icons/flags/united-states-of-america.svg"
                  }),
                  _hoisted_21,
                  _hoisted_22
                ]),
                createBaseVNode("div", _hoisted_23, [
                  createVNode(_component_VAvatar, {
                    picture: "/demo/avatars/18.jpg",
                    badge: "/images/icons/flags/united-states-of-america.svg"
                  }),
                  _hoisted_24,
                  _hoisted_25
                ]),
                createBaseVNode("div", _hoisted_26, [
                  createVNode(_component_VAvatar, {
                    picture: "/demo/avatars/13.jpg",
                    badge: "/images/icons/flags/united-states-of-america.svg"
                  }),
                  _hoisted_27,
                  _hoisted_28
                ])
              ], 2),
              createBaseVNode("div", {
                id: "projects-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "projects" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("div", _hoisted_30, [
                    createBaseVNode("img", {
                      class: "project-avatar",
                      src: _imports_0$2,
                      alt: "",
                      onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32),
                    _hoisted_31,
                    _hoisted_32
                  ]),
                  createBaseVNode("div", _hoisted_33, [
                    _hoisted_34,
                    createBaseVNode("div", _hoisted_35, [
                      _hoisted_36,
                      createBaseVNode("div", _hoisted_37, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/5.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/7.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/images/avatars/svg/vuero-1.svg"
                        })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("img", {
                      class: "project-avatar",
                      src: _imports_1$1,
                      alt: "",
                      onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32),
                    _hoisted_40,
                    _hoisted_41
                  ]),
                  createBaseVNode("div", _hoisted_42, [
                    _hoisted_43,
                    createBaseVNode("div", _hoisted_44, [
                      _hoisted_45,
                      createBaseVNode("div", _hoisted_46, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/13.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/18.jpg"
                        })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("div", _hoisted_48, [
                    createBaseVNode("img", {
                      class: "project-avatar",
                      src: _imports_3$2,
                      alt: "",
                      onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32),
                    _hoisted_49,
                    _hoisted_50
                  ]),
                  createBaseVNode("div", _hoisted_51, [
                    _hoisted_52,
                    createBaseVNode("div", _hoisted_53, [
                      _hoisted_54,
                      createBaseVNode("div", _hoisted_55, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/7.jpg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/25.jpg"
                        })
                      ])
                    ])
                  ])
                ])
              ], 2),
              createBaseVNode("div", {
                id: "schedule-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "schedule" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_56, [
                  _hoisted_57,
                  createBaseVNode("div", _hoisted_58, [
                    createBaseVNode("div", _hoisted_59, [
                      createBaseVNode("img", {
                        class: "avatar",
                        src: _imports_2$3,
                        alt: "",
                        onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_60
                  ]),
                  _hoisted_61
                ])
              ], 2)
            ])
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main$5 as _, __unplugin_components_1 as a, _sfc_main$3 as b, _sfc_main$2 as c, _sfc_main$1 as d, _sfc_main as e, _imports_2$1 as f };
