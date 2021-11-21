import { i as isDark, t as toggleDarkModeHandler, a as __unplugin_components_0 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$8, a as __unplugin_components_1, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$d, e as _sfc_main$e } from "./ActivityPanel.b40b79c2.js";
import { _ as _sfc_main$7, a as __unplugin_components_5, b as __unplugin_components_6, c as __unplugin_components_7, d as __unplugin_components_8, e as _sfc_main$b, f as _sfc_main$g } from "./TaskPanel.15619fee.js";
import { d as defineComponent, Z as useI18n, m as useWindowScroll, r as ref, w as watchEffect, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, t as unref, v as createVNode, x as withCtx, n as normalizeClass, L as resolveDirective, y as withDirectives, B as createTextVNode, ak as useRoute, am as watchPostEffect, a9 as watch, N as createBlock, D as createCommentVNode, _ as Transition, F as renderSlot, E as toDisplayString } from "./vendor.9ec557a4.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import { _ as _sfc_main$c, a as _sfc_main$f } from "./SearchPanel.8d96f71b.js";
import { _ as _sfc_main$6 } from "./VTag.ff081b8f.js";
import { _ as _sfc_main$h } from "./ToolbarNotification.0ddce444.js";
import { _ as _sfc_main$i } from "./Toolbar.278fa677.js";
import { p as pageTitle } from "./sidebarLayoutState.883cc242.js";
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-bars"
}, null, -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-times"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_1$5,
  _hoisted_2$5
];
const _hoisted_4$5 = { class: "items-wrapper" };
const _hoisted_5$5 = { class: "menu-item is-flex" };
const _hoisted_6$5 = { class: "dark-mode" };
const _hoisted_7$5 = ["checked"];
const _hoisted_8$5 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9$5 = ["src"];
const _hoisted_10$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_11$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_12$5 = [
  _hoisted_11$5
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { locale } = useI18n();
    const { y } = useWindowScroll();
    const isOpen = ref(false);
    const isScrolling = ref(false);
    watchEffect(() => {
      if (y.value <= 30) {
        isOpen.value = false;
      }
      isScrolling.value = y.value > 30;
    });
    const localFlagSrc = computed(() => {
      switch (locale.value) {
        case "fr":
          return "/images/icons/flags/france.svg";
        case "es":
          return "/images/icons/flags/spain.svg";
        case "es-MX":
          return "/images/icons/flags/mexico.svg";
        case "de":
          return "/images/icons/flags/germany.svg";
        case "zh-CN":
          return "/images/icons/flags/china.svg";
        case "en":
          return "/images/icons/flags/united-states-of-america.svg";
        case "fa":
        default:
          return "/images/icons/flags/iran.svg";
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        id: "circular-menu",
        class: normalizeClass([[isScrolling.value && "is-active", isOpen.value && "active"], "circular-menu"])
      }, [
        createBaseVNode("a", {
          class: "floating-btn",
          onClick: _cache[0] || (_cache[0] = ($event) => isOpen.value = !isOpen.value)
        }, _hoisted_3$5),
        createBaseVNode("div", _hoisted_4$5, [
          createBaseVNode("div", _hoisted_5$5, [
            createBaseVNode("label", _hoisted_6$5, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: !unref(isDark),
                onChange: _cache[1] || (_cache[1] = (...args) => unref(toggleDarkModeHandler) && unref(toggleDarkModeHandler)(...args))
              }, null, 40, _hoisted_7$5),
              _hoisted_8$5
            ])
          ]),
          createBaseVNode("a", {
            class: "menu-item is-flex right-panel-trigger",
            onClick: _cache[2] || (_cache[2] = ($event) => activePanel.value = "languages")
          }, [
            createBaseVNode("img", {
              src: unref(localFlagSrc),
              alt: ""
            }, null, 8, _hoisted_9$5)
          ]),
          createVNode(_component_RouterLink, {
            to: { name: "sidebar-layouts-profile-notifications" },
            class: "menu-item is-flex"
          }, {
            default: withCtx(() => [
              _hoisted_10$5
            ]),
            _: 1
          }),
          createBaseVNode("a", {
            class: "menu-item is-flex",
            onClick: _cache[3] || (_cache[3] = ($event) => activePanel.value = "activity")
          }, _hoisted_12$5)
        ])
      ], 2);
    };
  }
});
var ComponentsSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "sidebar-panel is-generic" };
const _hoisted_2$4 = { class: "subpanel-header" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627", -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$4 = [
  _hoisted_4$4
];
const _hoisted_6$4 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$4 = /* @__PURE__ */ createTextVNode("\u0645\u0631\u06A9\u0632\u06CC\u062A \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627");
const _hoisted_8$4 = /* @__PURE__ */ createTextVNode("\u0645\u062D\u062A\u0648\u0627");
const _hoisted_9$4 = /* @__PURE__ */ createTextVNode("\u062C\u062F\u0648\u0644");
const _hoisted_10$4 = /* @__PURE__ */ createBaseVNode("li", { class: "divider with-label" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "divider-label" }, "\u0646\u0645\u0627\u06CC\u0634")
], -1);
const _hoisted_11$4 = /* @__PURE__ */ createTextVNode("VAvatar");
const _hoisted_12$4 = /* @__PURE__ */ createTextVNode(" VAvatarStack ");
const _hoisted_13$4 = /* @__PURE__ */ createTextVNode("VBlock");
const _hoisted_14$4 = /* @__PURE__ */ createTextVNode(" VIconBox ");
const _hoisted_15$4 = /* @__PURE__ */ createTextVNode(" VIconWrap ");
const _hoisted_16$4 = /* @__PURE__ */ createTextVNode(" VSnack ");
const _hoisted_17$4 = /* @__PURE__ */ createTextVNode("VTag");
const _hoisted_18$4 = /* @__PURE__ */ createBaseVNode("li", { class: "divider with-label" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "divider-label" }, "\u0637\u0631\u062D\u200C\u0628\u0646\u062F\u06CC")
], -1);
const _hoisted_19$4 = /* @__PURE__ */ createTextVNode(" VFlex ");
const _hoisted_20$4 = /* @__PURE__ */ createBaseVNode("small", null, "& VFlexItem", -1);
const _hoisted_21$4 = /* @__PURE__ */ createTextVNode(" VGrid ");
const _hoisted_22$4 = /* @__PURE__ */ createBaseVNode("small", null, "& VGridItem", -1);
const _hoisted_23$4 = /* @__PURE__ */ createTextVNode(" VBreadcrumb ");
const _hoisted_24$4 = /* @__PURE__ */ createTextVNode(" VTabs ");
const _hoisted_25$4 = /* @__PURE__ */ createTextVNode(" VFlexPagination ");
const _hoisted_26$4 = { class: "has-children" };
const _hoisted_27$4 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" VFlexTable "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_28$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_29$4 = /* @__PURE__ */ createTextVNode(" \u062C\u062F\u0648\u0644 \u0633\u0627\u062F\u0647 ");
const _hoisted_30$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_31$4 = /* @__PURE__ */ createTextVNode(" \u062C\u062F\u0648\u0644 \u0641\u0634\u0631\u062F\u0647 ");
const _hoisted_32$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_33$4 = /* @__PURE__ */ createTextVNode(" \u062C\u062F\u0648\u0644 \u0645\u062F\u06CC\u0627 ");
const _hoisted_34$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_35$4 = /* @__PURE__ */ createTextVNode(" \u062C\u062F\u0648\u0644 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC");
const _hoisted_36$4 = { class: "has-children" };
const _hoisted_37$4 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_38$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_39$4 = /* @__PURE__ */ createTextVNode(" VAccordion ");
const _hoisted_40$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_41$4 = /* @__PURE__ */ createTextVNode(" VCollapse ");
const _hoisted_42$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_43$4 = /* @__PURE__ */ createTextVNode(" VAccordionImage ");
const _hoisted_44$3 = { class: "has-children" };
const _hoisted_45$3 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_46$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_47$3 = /* @__PURE__ */ createTextVNode(" VCard ");
const _hoisted_48$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_49$3 = /* @__PURE__ */ createTextVNode(" VCardAction ");
const _hoisted_50$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_51$3 = /* @__PURE__ */ createTextVNode(" VCardAdvanced ");
const _hoisted_52$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_53$3 = /* @__PURE__ */ createTextVNode(" VCardMedia ");
const _hoisted_54$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_55$3 = /* @__PURE__ */ createTextVNode(" VCardSocial ");
const _hoisted_56$3 = { class: "has-children" };
const _hoisted_57$3 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u062C\u0627\u06AF\u06CC\u0631\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_58$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_59$3 = /* @__PURE__ */ createTextVNode(" VPlaceholderPage ");
const _hoisted_60$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_61$3 = /* @__PURE__ */ createTextVNode(" VPlaceholderSection ");
const _hoisted_62$3 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_63$3 = { class: "has-children" };
const _hoisted_64$3 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u067E\u0644\u0627\u06AF\u06CC\u0646\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_65$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_66$3 = /* @__PURE__ */ createTextVNode(" Notyf ");
const _hoisted_67$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_68$3 = /* @__PURE__ */ createTextVNode(" Tippy ");
const _hoisted_69$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_70$3 = /* @__PURE__ */ createTextVNode(" VBillboardJS ");
const _hoisted_71$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_72$3 = /* @__PURE__ */ createTextVNode(" VPhotosSwipe ");
const _hoisted_73$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_74$3 = /* @__PURE__ */ createTextVNode(" VPlyr ");
const _hoisted_75$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_76$3 = /* @__PURE__ */ createTextVNode(" VSimpleDatatables ");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VTag = _sfc_main$6;
      const _directive_has_nested_router_link = resolveDirective("has-nested-router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          _hoisted_3$4,
          createBaseVNode("div", {
            class: "panel-close",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
          }, _hoisted_5$4)
        ]),
        createBaseVNode("div", _hoisted_6$4, [
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components" } }, {
                default: withCtx(() => [
                  _hoisted_7$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-content" } }, {
                default: withCtx(() => [
                  _hoisted_8$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-table" } }, {
                default: withCtx(() => [
                  _hoisted_9$4
                ]),
                _: 1
              })
            ]),
            _hoisted_10$4,
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-avatar" } }, {
                default: withCtx(() => [
                  _hoisted_11$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-avatar-stack" } }, {
                default: withCtx(() => [
                  _hoisted_12$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-block" } }, {
                default: withCtx(() => [
                  _hoisted_13$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-icon-box" } }, {
                default: withCtx(() => [
                  _hoisted_14$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-icon-wrap" } }, {
                default: withCtx(() => [
                  _hoisted_15$4,
                  createVNode(_component_VTag, {
                    label: "v1.1",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-snack" } }, {
                default: withCtx(() => [
                  _hoisted_16$4,
                  createVNode(_component_VTag, {
                    label: "v1.1",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-tag" } }, {
                default: withCtx(() => [
                  _hoisted_17$4
                ]),
                _: 1
              })
            ]),
            _hoisted_18$4,
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-flex" } }, {
                default: withCtx(() => [
                  _hoisted_19$4,
                  _hoisted_20$4,
                  createVNode(_component_VTag, {
                    label: "v2.0",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-grid" } }, {
                default: withCtx(() => [
                  _hoisted_21$4,
                  _hoisted_22$4,
                  createVNode(_component_VTag, {
                    label: "v2.0",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-breadcrumb" } }, {
                default: withCtx(() => [
                  _hoisted_23$4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-tabs" } }, {
                default: withCtx(() => [
                  _hoisted_24$4,
                  createVNode(_component_VTag, {
                    label: "v1.1",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components-flex-pagination" } }, {
                default: withCtx(() => [
                  _hoisted_25$4
                ]),
                _: 1
              })
            ]),
            withDirectives(createBaseVNode("li", _hoisted_26$4, [
              _hoisted_27$4,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-flex-table" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_28$4,
                      _hoisted_29$4
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-flex-table-compact" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_30$4,
                      _hoisted_31$4
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-flex-table-media" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_32$4,
                      _hoisted_33$4
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-flex-table-advanced" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_34$4,
                      _hoisted_35$4
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_36$4, [
              _hoisted_37$4,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-accordion" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_38$4,
                      _hoisted_39$4
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-collapse" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_40$4,
                      _hoisted_41$4
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-accordion-image" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_42$4,
                      _hoisted_43$4
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_44$3, [
              _hoisted_45$3,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-card" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_46$3,
                      _hoisted_47$3,
                      createVNode(_component_VTag, {
                        label: "v1.1",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-card-action" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_48$3,
                      _hoisted_49$3,
                      createVNode(_component_VTag, {
                        label: "v1.1",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-card-advanced" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_50$3,
                      _hoisted_51$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-card-media" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_52$3,
                      _hoisted_53$3,
                      createVNode(_component_VTag, {
                        label: "v1.1",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-card-social" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_54$3,
                      _hoisted_55$3
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_56$3, [
              _hoisted_57$3,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-placeholder-page" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_58$3,
                      _hoisted_59$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-placeholder-section" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_60$3,
                      _hoisted_61$3
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            _hoisted_62$3,
            withDirectives(createBaseVNode("li", _hoisted_63$3, [
              _hoisted_64$3,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-plugins-notif" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_65$3,
                      _hoisted_66$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-plugins-tippy" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_67$3,
                      _hoisted_68$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-plugins-billboard-js" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_69$3,
                      _hoisted_70$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-plugins-photos-swipe" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_71$3,
                      _hoisted_72$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-plugins-plyr" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_73$3,
                      _hoisted_74$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "components-plugins-simple-datatables" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_75$3,
                      _hoisted_76$3
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ])
          ])
        ])
      ]);
    };
  }
});
var ElementsSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "sidebar-panel is-generic" };
const _hoisted_2$3 = { class: "subpanel-header" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "\u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627", -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$3 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$3 = /* @__PURE__ */ createTextVNode("\u0645\u0631\u06A9\u0632\u06CC\u062A \u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627");
const _hoisted_8$3 = /* @__PURE__ */ createTextVNode("\u0631\u0646\u06AF\u200C\u0647\u0627");
const _hoisted_9$3 = /* @__PURE__ */ createTextVNode("\u0631\u0647 \u0646\u0645\u0627 \u0647\u0627");
const _hoisted_10$3 = { class: "has-children" };
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0634\u0645\u0627\u06CC\u0644 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_12$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_13$3 = /* @__PURE__ */ createTextVNode(" \u0622\u06CC\u06A9\u0627\u0646\u06CC\u0641\u0627\u06CC ");
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_15$3 = /* @__PURE__ */ createTextVNode(" \u0622\u06CC\u06A9\u0648\u0646\u200C\u0647\u0627\u06CC \u062E\u0637\u06CC \u0633\u0628\u06A9 ");
const _hoisted_16$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_17$3 = /* @__PURE__ */ createTextVNode(" \u0622\u06CC\u06A9\u0648\u0646\u200C\u0647\u0627\u06CC \u062E\u0637\u06CC \u0646\u0631\u0645\u0627\u0644 ");
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_19$3 = /* @__PURE__ */ createTextVNode(" \u0641\u0648\u0646\u062A \u0639\u0627\u0633\u0645 5 ");
const _hoisted_20$3 = /* @__PURE__ */ createBaseVNode("li", { class: "divider with-label" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "divider-label" }, "\u0627\u062B\u0631 \u0645\u062A\u0642\u0627\u0628\u0644")
], -1);
const _hoisted_21$3 = /* @__PURE__ */ createTextVNode(" VDropdown ");
const _hoisted_22$3 = /* @__PURE__ */ createTextVNode("VLoader");
const _hoisted_23$3 = /* @__PURE__ */ createTextVNode(" VPlaceload ");
const _hoisted_24$3 = /* @__PURE__ */ createTextVNode(" VPlaceloadText ");
const _hoisted_25$3 = /* @__PURE__ */ createTextVNode(" VPlaceloadAvatar ");
const _hoisted_26$3 = /* @__PURE__ */ createTextVNode(" VMessage ");
const _hoisted_27$3 = /* @__PURE__ */ createTextVNode("VModal");
const _hoisted_28$3 = /* @__PURE__ */ createTextVNode(" VProgress ");
const _hoisted_29$3 = /* @__PURE__ */ createTextVNode(" VTootlip ");
const _hoisted_30$3 = { class: "has-children" };
const _hoisted_31$3 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u062F\u06A9\u0645\u0647\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_32$3 = /* @__PURE__ */ createTextVNode(" VButton ");
const _hoisted_33$3 = /* @__PURE__ */ createTextVNode(" VAction ");
const _hoisted_34$3 = /* @__PURE__ */ createTextVNode(" VIconButton ");
const _hoisted_35$3 = { class: "has-children" };
const _hoisted_36$3 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0648\u0631\u0648\u062F\u06CC\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_37$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_38$3 = /* @__PURE__ */ createTextVNode(" \u0648\u0631\u0648\u062F\u06CC\u200C\u0647\u0627 ");
const _hoisted_39$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_40$3 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627\u06CC \u0648\u0631\u0648\u062F\u06CC ");
const _hoisted_41$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_42$3 = /* @__PURE__ */ createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634\u06AF\u0631 \u0633\u0627\u062F\u0647 ");
const _hoisted_43$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_44$2 = /* @__PURE__ */ createTextVNode(" \u0627\u0646\u062A\u062E\u0627\u0628\u06AF\u0631\u0647\u0627 ");
const _hoisted_45$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_46$2 = /* @__PURE__ */ createTextVNode(" \u0648\u0631\u0648\u062F\u06CC \u0641\u0627\u06CC\u0644 ");
const _hoisted_47$2 = /* @__PURE__ */ createTextVNode(" VControl ");
const _hoisted_48$2 = /* @__PURE__ */ createTextVNode(" VField ");
const _hoisted_49$2 = { class: "has-children" };
const _hoisted_50$2 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0633\u0648\u0626\u06CC\u0686\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_51$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_52$2 = /* @__PURE__ */ createTextVNode(" VAnimatedCheckbox ");
const _hoisted_53$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_54$2 = /* @__PURE__ */ createTextVNode(" VCheckbox ");
const _hoisted_55$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_56$2 = /* @__PURE__ */ createTextVNode(" VRadio ");
const _hoisted_57$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_58$2 = /* @__PURE__ */ createTextVNode(" VSwitchBlock ");
const _hoisted_59$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_60$2 = /* @__PURE__ */ createTextVNode(" VSwitchSegment ");
const _hoisted_61$2 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_62$2 = { class: "has-children" };
const _hoisted_63$2 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_64$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_65$2 = /* @__PURE__ */ createTextVNode(" VCalendar & VDatePicker ");
const _hoisted_66$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_67$2 = /* @__PURE__ */ createTextVNode(" VIMaskInput ");
const _hoisted_68$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_69$2 = /* @__PURE__ */ createTextVNode(" VFilePond ");
const _hoisted_70$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_71$2 = /* @__PURE__ */ createTextVNode(" VCreditCard ");
const _hoisted_72$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_73$2 = /* @__PURE__ */ createTextVNode(" @vueform/multiselect ");
const _hoisted_74$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_75$2 = /* @__PURE__ */ createTextVNode(" @vueform/slider ");
const _hoisted_76$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:circle"
}, null, -1);
const _hoisted_77$2 = /* @__PURE__ */ createTextVNode(" CKEditor 5 ");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VTag = _sfc_main$6;
      const _directive_has_nested_router_link = resolveDirective("has-nested-router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("div", {
            class: "panel-close",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
          }, _hoisted_5$3)
        ]),
        createBaseVNode("div", _hoisted_6$3, [
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements" } }, {
                default: withCtx(() => [
                  _hoisted_7$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-colors" } }, {
                default: withCtx(() => [
                  _hoisted_8$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-helpers" } }, {
                default: withCtx(() => [
                  _hoisted_9$3
                ]),
                _: 1
              })
            ]),
            withDirectives(createBaseVNode("li", _hoisted_10$3, [
              _hoisted_11$3,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-icons-iconify" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_12$3,
                      _hoisted_13$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-icons-line-icons" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_14$3,
                      _hoisted_15$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-icons-line-icons-regular" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_16$3,
                      _hoisted_17$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-icons-fa" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_18$3,
                      _hoisted_19$3
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            _hoisted_20$3,
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-dropdown" } }, {
                default: withCtx(() => [
                  _hoisted_21$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-loader" } }, {
                default: withCtx(() => [
                  _hoisted_22$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-placeload" } }, {
                default: withCtx(() => [
                  _hoisted_23$3,
                  createVNode(_component_VTag, {
                    label: "v1.2",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-placeload-text" } }, {
                default: withCtx(() => [
                  _hoisted_24$3,
                  createVNode(_component_VTag, {
                    label: "v1.2",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-placeload-avatar" } }, {
                default: withCtx(() => [
                  _hoisted_25$3,
                  createVNode(_component_VTag, {
                    label: "v1.2",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-message" } }, {
                default: withCtx(() => [
                  _hoisted_26$3,
                  createVNode(_component_VTag, {
                    label: "v1.1",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-modal" } }, {
                default: withCtx(() => [
                  _hoisted_27$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-progress" } }, {
                default: withCtx(() => [
                  _hoisted_28$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements-tooltip" } }, {
                default: withCtx(() => [
                  _hoisted_29$3,
                  createVNode(_component_VTag, {
                    label: "v1.1",
                    color: "primary",
                    outlined: "",
                    curved: ""
                  })
                ]),
                _: 1
              })
            ]),
            withDirectives(createBaseVNode("li", _hoisted_30$3, [
              _hoisted_31$3,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-button" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_32$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-action" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_33$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-icon-button" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_34$3
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_35$3, [
              _hoisted_36$3,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-forms-inputs" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_37$3,
                      _hoisted_38$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-forms-addons" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_39$3,
                      _hoisted_40$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-forms-textarea" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_41$3,
                      _hoisted_42$3
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-forms-selects" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_43$3,
                      _hoisted_44$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-forms-file" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_45$2,
                      _hoisted_46$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-control" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_47$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-field" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_48$2
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_49$2, [
              _hoisted_50$2,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-animated-checkbox" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_51$2,
                      _hoisted_52$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-checkbox" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_53$2,
                      _hoisted_54$2,
                      createVNode(_component_VTag, {
                        label: "v1.1",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-radio" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_55$2,
                      _hoisted_56$2,
                      createVNode(_component_VTag, {
                        label: "v1.1",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-switch-block" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_57$2,
                      _hoisted_58$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-switch-segment" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_59$2,
                      _hoisted_60$2,
                      createVNode(_component_VTag, {
                        label: "v1.1",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            _hoisted_61$2,
            withDirectives(createBaseVNode("li", _hoisted_62$2, [
              _hoisted_63$2,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-addons-calendar" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_64$2,
                      _hoisted_65$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-addons-imask-input" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_66$2,
                      _hoisted_67$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-addons-filepond" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_68$2,
                      _hoisted_69$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-addons-credit-card" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_70$2,
                      _hoisted_71$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-addons-vueform-multiselect" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_72$2,
                      _hoisted_73$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-addons-vueform-slider" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_74$2,
                      _hoisted_75$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "elements-addons-ckeditor" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_76$2,
                      _hoisted_77$2
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ])
          ])
        ])
      ]);
    };
  }
});
var DashboardsSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "sidebar-panel is-generic" };
const _hoisted_2$2 = { class: "subpanel-header" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "\u062F\u0627\u0634\u0628\u0631\u062F\u0647\u0627", -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_4$2
];
const _hoisted_6$2 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$2 = { class: "has-children" };
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0634\u062E\u0635\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pie-chart"
}, null, -1);
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-stats-up"
}, null, -1);
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_15$2 = { class: "has-children" };
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0645\u0627\u0644\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0634\u0628\u0631\u062F \u062A\u062C\u0632\u06CC\u0647 \u0648 \u062A\u062D\u0644\u06CC\u0644", -1);
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-stats-up"
}, null, -1);
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0633\u0647\u0627\u0645", -1);
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-credit-card"
}, null, -1);
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062D\u0631\u0627\u062C\u06CC", -1);
const _hoisted_23$2 = { class: "has-children" };
const _hoisted_24$2 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_25$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bank"
}, null, -1);
const _hoisted_26$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_27$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bank"
}, null, -1);
const _hoisted_28$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_29$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bank"
}, null, -1);
const _hoisted_30$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_31$2 = { class: "has-children" };
const _hoisted_32$2 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u062A\u062C\u0627\u0631\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_33$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-plane-alt"
}, null, -1);
const _hoisted_34$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u0631\u0632\u0631\u0648 \u067E\u0631\u0648\u0627\u0632", -1);
const _hoisted_35$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-apartment"
}, null, -1);
const _hoisted_36$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0648\u0631\u062F \u0634\u0631\u06A9\u062A", -1);
const _hoisted_37$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_38$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0648\u0631\u062F \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC", -1);
const _hoisted_39$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-graduate"
}, null, -1);
const _hoisted_40$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0634\u0628\u0631\u062F \u062F\u0648\u0631\u0647", -1);
const _hoisted_41$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-briefcase"
}, null, -1);
const _hoisted_42$2 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645", -1);
const _hoisted_43$2 = { class: "has-children" };
const _hoisted_44$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0644\u0627\u06CC\u0641 \u0627\u0633\u062A\u0627\u06CC\u0644 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_45$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cardiology"
}, null, -1);
const _hoisted_46$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u06CC\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631", -1);
const _hoisted_47$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cloud-sun"
}, null, -1);
const _hoisted_48$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627", -1);
const _hoisted_49$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-hospital-alt-3"
}, null, -1);
const _hoisted_50$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0644\u0627\u0645\u062A", -1);
const _hoisted_51$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-books"
}, null, -1);
const _hoisted_52$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647", -1);
const _hoisted_53$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-video-alt-1"
}, null, -1);
const _hoisted_54$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u062F\u0626\u0648", -1);
const _hoisted_55$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-tshirt"
}, null, -1);
const _hoisted_56$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0641\u0648\u062A\u0628\u0627\u0644", -1);
const _hoisted_57$1 = { class: "has-children" };
const _hoisted_58$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_59$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cart"
}, null, -1);
const _hoisted_60$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_61$1 = { class: "has-children" };
const _hoisted_62$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_63$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pizza"
}, null, -1);
const _hoisted_64$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u063A\u0630\u0627", -1);
const _hoisted_65$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-map"
}, null, -1);
const _hoisted_66$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06F1", -1);
const _hoisted_67$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-map"
}, null, -1);
const _hoisted_68$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06F2", -1);
const _hoisted_69$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-envelope"
}, null, -1);
const _hoisted_70$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u06CC\u0646\u0628\u0627\u06A9\u0633", -1);
const _hoisted_71$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bubble"
}, null, -1);
const _hoisted_72$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_73$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bubble"
}, null, -1);
const _hoisted_74$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_75$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_76$1 = /* @__PURE__ */ createTextVNode("\u0648\u06CC\u0632\u0627\u0631\u062F");
const _hoisted_77$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_78$1 = { class: "has-children" };
const _hoisted_79$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_80$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pie-chart-alt"
}, null, -1);
const _hoisted_81$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627\u06CC Apex", -1);
const _hoisted_82$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bar-chart"
}, null, -1);
const _hoisted_83$1 = /* @__PURE__ */ createBaseVNode("span", null, "Billboard JS", -1);
const _hoisted_84$1 = { class: "has-children" };
const _hoisted_85$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_86$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_87$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC", -1);
const _hoisted_88$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_89$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u062E\u0644\u0627\u0642\u0627\u0646\u0647", -1);
const _hoisted_90$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_91$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A", -1);
const _hoisted_92$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_93$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u0622\u0645\u0627\u0631", -1);
const _hoisted_94$1 = { class: "has-children" };
const _hoisted_95$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_96$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_97$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0645\u0639\u0645\u0648\u0644\u06CC", -1);
const _hoisted_98$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_99$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0627\u0646\u062D\u0646\u0627\u062F\u0627\u0631", -1);
const _hoisted_100$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_101$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0631\u0646\u06AF\u06CC\u0646", -1);
const _hoisted_102$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_103$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0631\u0646\u06AF\u06CC\u0646 \u0627\u0646\u062D\u0646\u0627\u062F\u0627\u0631", -1);
const _hoisted_104$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_105$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0646\u0648 \u0628\u0627 \u0639\u0646\u0648\u0627\u0646", -1);
const _hoisted_106$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_107$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0646\u0648 \u0628\u0627 \u0639\u0646\u0648\u0627\u0646 \u067E\u0646\u0647\u0627\u0646", -1);
const _hoisted_108$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_109$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0634\u0646\u0627\u0648\u0631", -1);
const _hoisted_110$1 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("hr", { class: "navbar-divider" })
], -1);
const _hoisted_111$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_112$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0646\u0648\u06CC \u0645\u0639\u0645\u0648\u0644\u06CC", -1);
const _hoisted_113$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_114$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0647\u0631\u0633\u062A \u0634\u0646\u0627\u0648\u0631", -1);
const _hoisted_115$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_116$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0647\u0631\u0633\u062A \u0631\u0646\u06AF\u06CC\u0646", -1);
const _hoisted_117$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_118$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0647\u0631\u0633\u062A \u067E\u0627\u06CC\u06CC\u0646 \u0631\u06CC\u0632", -1);
const _hoisted_119$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_120$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0626\u06CC\u0646\u200C\u0631\u06CC\u0632 \u0631\u0646\u06AF\u06CC\u0646", -1);
const _hoisted_121$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_122$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0647\u0631\u0633\u062A \u062E\u0644\u0648\u062A", -1);
const _hoisted_123$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_124$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0646\u0648\u06CC \u062E\u0644\u0648\u062A \u0648\u0633\u0637\u0686\u06CC\u0646", -1);
const _hoisted_125$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_126$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0646\u0648\u06CC \u062E\u0644\u0648\u062A \u06A9\u062F\u0631", -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_ProjectsQuickDropdown = _sfc_main$7;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VTag = _sfc_main$6;
      const _directive_has_nested_router_link = resolveDirective("has-nested-router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(_component_ProjectsQuickDropdown),
          _hoisted_3$2,
          createBaseVNode("div", {
            class: "panel-close",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
          }, _hoisted_5$2)
        ]),
        createBaseVNode("div", _hoisted_6$2, [
          createBaseVNode("ul", null, [
            withDirectives(createBaseVNode("li", _hoisted_7$2, [
              _hoisted_8$2,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_9$2,
                      _hoisted_10$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-personal-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_11$2,
                      _hoisted_12$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-personal-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_13$2,
                      _hoisted_14$2
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_15$2, [
              _hoisted_16$2,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-analytics" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_17$2,
                      _hoisted_18$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-stocks" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_19$2,
                      _hoisted_20$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-sales" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_21$2,
                      _hoisted_22$2
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_23$2, [
              _hoisted_24$2,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-banking-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_25$2,
                      _hoisted_26$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-banking-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_27$2,
                      _hoisted_28$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-banking-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_29$2,
                      _hoisted_30$2
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_31$2, [
              _hoisted_32$2,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-flights" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_33$2,
                      _hoisted_34$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-company" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_35$2,
                      _hoisted_36$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-human-ressources" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_37$2,
                      _hoisted_38$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-course" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_39$2,
                      _hoisted_40$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-jobs" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_41$2,
                      _hoisted_42$2
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_43$2, [
              _hoisted_44$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-influencer" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_45$1,
                      _hoisted_46$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-hobbies" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_47$1,
                      _hoisted_48$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-health" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_49$1,
                      _hoisted_50$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-writer" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_51$1,
                      _hoisted_52$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-video" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_53$1,
                      _hoisted_54$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-soccer" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_55$1,
                      _hoisted_56$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_57$1, [
              _hoisted_58$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-ecommerce-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_59$1,
                      _hoisted_60$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_61$1, [
              _hoisted_62$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-food-delivery" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_63$1,
                      _hoisted_64$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-maps-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_65$1,
                      _hoisted_66$1,
                      createVNode(_component_VTag, {
                        label: "v1.2",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-maps-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_67$1,
                      _hoisted_68$1,
                      createVNode(_component_VTag, {
                        label: "v1.2",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "inbox" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_69$1,
                      _hoisted_70$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "messaging-v1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_71$1,
                      _hoisted_72$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "messaging-v2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_73$1,
                      _hoisted_74$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            _hoisted_75$1,
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "wizard-v1" } }, {
                default: withCtx(() => [
                  _hoisted_76$1
                ]),
                _: 1
              })
            ]),
            _hoisted_77$1,
            withDirectives(createBaseVNode("li", _hoisted_78$1, [
              _hoisted_79$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-charts-apex" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_80$1,
                      _hoisted_81$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    class: "is-submenu",
                    to: { name: "sidebar-dashboards-charts-billboardsjs" }
                  }, {
                    default: withCtx(() => [
                      _hoisted_82$1,
                      _hoisted_83$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_84$1, [
              _hoisted_85$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-widgets-sample-ui" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_86$1,
                      _hoisted_87$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    class: "is-submenu",
                    to: { name: "sidebar-dashboards-widgets-sample-creative" }
                  }, {
                    default: withCtx(() => [
                      _hoisted_88$1,
                      _hoisted_89$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-widgets-sample-list" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_90$1,
                      _hoisted_91$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-dashboards-widgets-sample-stats" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_92$1,
                      _hoisted_93$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_94$1, [
              _hoisted_95$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-blank-page-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_96$1,
                      _hoisted_97$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-blank-page-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_98$1,
                      _hoisted_99$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-blank-page-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_100$1,
                      _hoisted_101$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-blank-page-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_102$1,
                      _hoisted_103$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-blank-page-5" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_104$1,
                      _hoisted_105$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-blank-page-6" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_106$1,
                      _hoisted_107$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-blank-page-7" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_108$1,
                      _hoisted_109$1
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_110$1,
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_111$1,
                      _hoisted_112$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_113$1,
                      _hoisted_114$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_115$1,
                      _hoisted_116$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_117$1,
                      _hoisted_118$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-5" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_119$1,
                      _hoisted_120$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-6" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_121$1,
                      _hoisted_122$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-7" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_123$1,
                      _hoisted_124$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "navbar-blank-page-8" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_125$1,
                      _hoisted_126$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ])
          ])
        ])
      ]);
    };
  }
});
var LayoutsSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "sidebar-panel is-generic" };
const _hoisted_2$1 = { class: "subpanel-header" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "\u0637\u0631\u062D\u200C\u0647\u0627", -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$1 = { class: "has-children" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0644\u06CC\u0633\u062A\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u06CC\u0633\u062A\u06CC \u06F1", -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u06CC\u0633\u062A\u06CC \u06F2", -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u06CC\u0633\u062A\u06CC \u06F3", -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt"
}, null, -1);
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u06CC\u0633\u062A\u06CC \u06F4", -1);
const _hoisted_17$1 = { class: "has-children" };
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0644\u06CC\u0633\u062A\u200C\u0647\u0627\u06CC \u0641\u0644\u06A9\u0633 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt-1"
}, null, -1);
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt-1"
}, null, -1);
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-list-alt-1"
}, null, -1);
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_25$1 = { class: "has-children" };
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_29$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_31$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_32$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_33$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt"
}, null, -1);
const _hoisted_34$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4", -1);
const _hoisted_35$1 = { class: "has-children" };
const _hoisted_36$1 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_37$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_38$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_39$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_40$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_41$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_42$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_43$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", null, "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4", -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-passport"
}, null, -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("span", null, "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F5", -1);
const _hoisted_47 = { class: "has-children" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("span", null, "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u06F1", -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", null, "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u06F2", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", null, "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u06F3", -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-reload"
}, null, -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("span", null, "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u06F4", -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_58 = { class: "has-children" };
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0631\u062A \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0631\u062A \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0631\u062A \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0631\u062A \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0631\u062A \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4", -1);
const _hoisted_68 = { class: "has-children" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0634\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0634\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u06F1", -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0634\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u06F2", -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0634\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u06F3", -1);
const _hoisted_76 = { class: "has-children" };
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users-alt"
}, null, -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4", -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_87 = { class: "has-children" };
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0634\u062E\u0635\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user-alt"
}, null, -1);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644", -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644", -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-notification"
}, null, -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A", -1);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cog"
}, null, -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A", -1);
const _hoisted_97 = { class: "has-children" };
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0635\u0641\u062D\u0627\u062A "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pointer-right"
}, null, -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0631\u0648\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pointer-right"
}, null, -1);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0631\u0648\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pointer-right"
}, null, -1);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0631\u0648\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown"
}, null, -1);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("span", null, "\u062B\u0628\u062A \u0646\u0627\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown"
}, null, -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("span", null, "\u062B\u0628\u062A \u0646\u0627\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown"
}, null, -1);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("span", null, "\u0631\u0648\u0646\u062F \u062B\u0628\u062A \u0646\u0627\u0645", -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-search-alt"
}, null, -1);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u062A\u0627\u06CC\u062C \u062C\u0633\u062A\u062C\u0648", -1);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-search-alt"
}, null, -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u0633\u062A\u062C\u0648\u06CC \u0628\u06CC \u0646\u062A\u06CC\u062C\u0647", -1);
const _hoisted_115 = { class: "has-children" };
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0632\u06CC\u0631\u0635\u0641\u062D\u0627\u062A "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-credit-card"
}, null, -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("span", null, "\u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 SaaS", -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-thunderbolt"
}, null, -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("span", null, "\u0635\u0641\u062D\u0647\u200C\u06CC \u062B\u0628\u062A \u0639\u0645\u0644 \u06F1", -1);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-thunderbolt"
}, null, -1);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("span", null, "\u0635\u0641\u062D\u0647\u200C\u06CC \u062B\u0628\u062A \u0639\u0645\u0644 \u06F2", -1);
const _hoisted_123 = { class: "has-children" };
const _hoisted_124 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_128 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout"
}, null, -1);
const _hoisted_132 = /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u0648\u0698\u0647", -1);
const _hoisted_133 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-1"
}, null, -1);
const _hoisted_134 = /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0648\u0631\u062F \u06A9\u0627\u0646\u0628\u0627\u0646", -1);
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_136 = { class: "has-children" };
const _hoisted_137 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_138 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-thunderbolt"
}, null, -1);
const _hoisted_139 = /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0627\u0626\u06CC\u062F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC", -1);
const _hoisted_140 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-magnet"
}, null, -1);
const _hoisted_141 = /* @__PURE__ */ createBaseVNode("span", null, "\u0635\u0641\u062D\u0647 \u0627\u0631\u062A\u0642\u0627", -1);
const _hoisted_142 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-calculator-alt"
}, null, -1);
const _hoisted_143 = /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0627\u06A9\u062A\u0648\u0631", -1);
const _hoisted_144 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-checkmark-circle"
}, null, -1);
const _hoisted_145 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646", -1);
const _hoisted_146 = { class: "has-children" };
const _hoisted_147 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0645\u0639\u0627\u0631\u0641\u0647 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_148 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-door-alt"
}, null, -1);
const _hoisted_149 = /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0648\u0634 \u0622\u0645\u062F \u06AF\u0648\u06CC\u06CC \u0645\u0639\u0627\u0631\u0641\u0647", -1);
const _hoisted_150 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-train"
}, null, -1);
const _hoisted_151 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0639\u0627\u0631\u0641\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_152 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-train-alt"
}, null, -1);
const _hoisted_153 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0639\u0627\u0631\u0641\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_154 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-car"
}, null, -1);
const _hoisted_155 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0639\u0627\u0631\u0641\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_156 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-car-alt"
}, null, -1);
const _hoisted_157 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0639\u0627\u0631\u0641\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4", -1);
const _hoisted_158 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-train"
}, null, -1);
const _hoisted_159 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0639\u0627\u0631\u0641\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F5", -1);
const _hoisted_160 = { class: "has-children" };
const _hoisted_161 = /* @__PURE__ */ createBaseVNode("div", { class: "collapse-wrap" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "parent-link" }, [
    /* @__PURE__ */ createTextVNode(" \u0635\u0641\u062D\u0627\u062A \u062E\u0637\u0627 "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:chevron-left"
    })
  ])
], -1);
const _hoisted_162 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_163 = /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0637\u0627\u06CC \u06F4\u06F0\u06F4 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _hoisted_164 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_165 = /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0637\u0627\u06CC \u06F4\u06F0\u06F4 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2", -1);
const _hoisted_166 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_167 = /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0637\u0627\u06CC \u06F4\u06F0\u06F4 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3", -1);
const _hoisted_168 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_169 = /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0637\u0627\u06CC \u06F4\u06F0\u06F4 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4", -1);
const _hoisted_170 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cross-circle"
}, null, -1);
const _hoisted_171 = /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0637\u0627\u06CC 500 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_ProjectsQuickDropdown = _sfc_main$7;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VTag = _sfc_main$6;
      const _directive_has_nested_router_link = resolveDirective("has-nested-router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_ProjectsQuickDropdown),
          _hoisted_3$1,
          createBaseVNode("div", {
            class: "panel-close",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
          }, _hoisted_5$1)
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("ul", null, [
            withDirectives(createBaseVNode("li", _hoisted_7$1, [
              _hoisted_8$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_9$1,
                      _hoisted_10$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-view-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_11$1,
                      _hoisted_12$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-view-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_13$1,
                      _hoisted_14$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-view-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_15$1,
                      _hoisted_16$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_17$1, [
              _hoisted_18$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-flex-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_19$1,
                      _hoisted_20$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-flex-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_21$1,
                      _hoisted_22$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-flex-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_23$1,
                      _hoisted_24$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_25$1, [
              _hoisted_26$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-datatable-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_27$1,
                      _hoisted_28$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-datatable-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_29$1,
                      _hoisted_30$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-datatable-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_31$1,
                      _hoisted_32$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-list-datatable-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_33$1,
                      _hoisted_34$1
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_35$1, [
              _hoisted_36$1,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-form-layouts-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_37$1,
                      _hoisted_38$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-form-layouts-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_39$1,
                      _hoisted_40$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-form-layouts-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_41$1,
                      _hoisted_42$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-form-layouts-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_43$1,
                      _hoisted_44
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-form-layouts-5" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_45,
                      _hoisted_46
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_47, [
              _hoisted_48,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-placeload-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_49,
                      _hoisted_50,
                      createVNode(_component_VTag, {
                        label: "v1.2",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-placeload-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_51,
                      _hoisted_52,
                      createVNode(_component_VTag, {
                        label: "v1.2",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-placeload-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_53,
                      _hoisted_54,
                      createVNode(_component_VTag, {
                        label: "v1.2",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-placeload-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_55,
                      _hoisted_56,
                      createVNode(_component_VTag, {
                        label: "v1.2",
                        color: "primary",
                        outlined: "",
                        curved: ""
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            _hoisted_57,
            withDirectives(createBaseVNode("li", _hoisted_58, [
              _hoisted_59,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-cards-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_60,
                      _hoisted_61
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-cards-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_62,
                      _hoisted_63
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-cards-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_64,
                      _hoisted_65
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-cards-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_66,
                      _hoisted_67
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_68, [
              _hoisted_69,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-tiles-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_70,
                      _hoisted_71
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-tiles-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_72,
                      _hoisted_73
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-tiles-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_74,
                      _hoisted_75
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_76, [
              _hoisted_77,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-users-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_78,
                      _hoisted_79
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-users-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_80,
                      _hoisted_81
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-users-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_82,
                      _hoisted_83
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-grid-users-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_84,
                      _hoisted_85
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            _hoisted_86,
            withDirectives(createBaseVNode("li", _hoisted_87, [
              _hoisted_88,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-profile-view" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_89,
                      _hoisted_90
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-profile-edit" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_91,
                      _hoisted_92
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-profile-notifications" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_93,
                      _hoisted_94
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-profile-settings" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_95,
                      _hoisted_96
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_97, [
              _hoisted_98,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "auth-login-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_99,
                      _hoisted_100
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "auth-login-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_101,
                      _hoisted_102
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "auth-login-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_103,
                      _hoisted_104
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "auth-signup-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_105,
                      _hoisted_106
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "auth-signup-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_107,
                      _hoisted_108
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "auth-signup-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_109,
                      _hoisted_110
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-search-results" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_111,
                      _hoisted_112
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-search-empty" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_113,
                      _hoisted_114
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_115, [
              _hoisted_116,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-saas-billing" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_117,
                      _hoisted_118
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-action-page-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_119,
                      _hoisted_120
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-action-page-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_121,
                      _hoisted_122
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_123, [
              _hoisted_124,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-projects-projects-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_125,
                      _hoisted_126
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-projects-projects-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_127,
                      _hoisted_128
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-projects-projects-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_129,
                      _hoisted_130
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-projects-details" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_131,
                      _hoisted_132
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-kanban-board" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_133,
                      _hoisted_134
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            _hoisted_135,
            withDirectives(createBaseVNode("li", _hoisted_136, [
              _hoisted_137,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-utility-account-confirm" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_138,
                      _hoisted_139
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-utility-promotion" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_140,
                      _hoisted_141
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-utility-invoice" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_142,
                      _hoisted_143
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "status" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_144,
                      _hoisted_145
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_146, [
              _hoisted_147,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-onboarding-welcome" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_148,
                      _hoisted_149
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-onboarding-page-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_150,
                      _hoisted_151
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-onboarding-page-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_152,
                      _hoisted_153
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-onboarding-page-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_154,
                      _hoisted_155
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-onboarding-page-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_156,
                      _hoisted_157
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "sidebar-layouts-onboarding-page-5" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_158,
                      _hoisted_159
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ]),
            withDirectives(createBaseVNode("li", _hoisted_160, [
              _hoisted_161,
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "error-page-1" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_162,
                      _hoisted_163
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "error-page-2" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_164,
                      _hoisted_165
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "error-page-3" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_166,
                      _hoisted_167
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "error-page-4" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_168,
                      _hoisted_169
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_RouterLink, {
                    to: { name: "error-page-5" },
                    class: "is-submenu"
                  }, {
                    default: withCtx(() => [
                      _hoisted_170,
                      _hoisted_171
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [_directive_has_nested_router_link]
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "sidebar-layout" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:cpu"
}, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    "aria-label": "View settings",
    href: "#"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_19 = [
  _hoisted_18
];
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_21 = [
  _hoisted_20
];
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:cpu"
}, null, -1);
const _hoisted_23 = [
  _hoisted_22
];
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_25 = { class: "is-hidden-touch" };
const _hoisted_26 = { class: "right-panel-trigger is-hidden-touch" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather-search"
}, null, -1);
const _hoisted_28 = [
  _hoisted_27
];
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather-x"
}, null, -1);
const _hoisted_30 = [
  _hoisted_29
];
const _hoisted_31 = { class: "is-hidden-touch" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:settings"
}, null, -1);
const _hoisted_33 = { class: "view-wrapper" };
const _hoisted_34 = { class: "page-content-wrapper" };
const _hoisted_35 = {
  key: 1,
  class: "page-content is-relative"
};
const _hoisted_36 = { class: "page-title has-text-centered" };
const _hoisted_37 = { class: "menu-toggle has-chevron" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = { class: "title-wrap" };
const _hoisted_41 = { class: "title is-4" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_43 = [
  _hoisted_42
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "default" },
    defaultSidebar: { type: String, required: false, default: "dashboard" },
    closeOnChange: { type: Boolean, required: false },
    openOnMounted: { type: Boolean, required: false },
    nowrap: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarOpen = ref(props.openOnMounted);
    const activeMobileSubsidebar = ref(props.defaultSidebar);
    function switchSidebar(id) {
      if (id === activeMobileSubsidebar.value) {
        isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value;
      } else {
        isDesktopSidebarOpen.value = true;
        activeMobileSubsidebar.value = id;
      }
    }
    watchPostEffect(() => {
      const isOpen = isDesktopSidebarOpen.value;
      const wrappers = document.querySelectorAll(".view-wrapper");
      wrappers.forEach((wrapper) => {
        if (isOpen === false) {
          wrapper.classList.remove("is-pushed-full");
        } else if (!wrapper.classList.contains("is-pushed-full")) {
          wrapper.classList.add("is-pushed-full");
        }
      });
    });
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
      if (props.closeOnChange && isDesktopSidebarOpen.value) {
        isDesktopSidebarOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$8;
      const _component_UserProfileDropdown = __unplugin_components_1;
      const _component_MobileNavbar = _sfc_main$9;
      const _component_MobileSidebar = _sfc_main$a;
      const _component_LayoutsMobileSubsidebar = __unplugin_components_5;
      const _component_DashboardsMobileSubsidebar = __unplugin_components_6;
      const _component_ComponentsMobileSubsidebar = __unplugin_components_7;
      const _component_ElementsMobileSubsidebar = __unplugin_components_8;
      const _component_CircularMenu = _sfc_main$5;
      const _component_LayoutSwitcher = _sfc_main$b;
      const _component_Sidebar = _sfc_main$c;
      const _component_ComponentsSubsidebar = _sfc_main$4;
      const _component_ElementsSubsidebar = _sfc_main$3;
      const _component_DashboardsSubsidebar = _sfc_main$2;
      const _component_LayoutsSubsidebar = _sfc_main$1;
      const _component_LanguagesPanel = _sfc_main$d;
      const _component_ActivityPanel = _sfc_main$e;
      const _component_SearchPanel = _sfc_main$f;
      const _component_TaskPanel = _sfc_main$g;
      const _component_ToolbarNotification = _sfc_main$h;
      const _component_Toolbar = _sfc_main$i;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "navbar-item is-brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_NotificationsMobileDropdown),
              createVNode(_component_UserProfileDropdown)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[6] || (_cache[6] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                "aria-label": "Display dashboard content",
                onClick: _cache[1] || (_cache[1] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_5, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                "aria-label": "Dsiplay layout content",
                class: normalizeClass([activeMobileSubsidebar.value === "layout" && "is-active"]),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "layout")
              }, _hoisted_7, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                "aria-label": "Dsiplay element content",
                class: normalizeClass([activeMobileSubsidebar.value === "elements" && "is-active"]),
                onClick: _cache[3] || (_cache[3] = ($event) => activeMobileSubsidebar.value = "elements")
              }, _hoisted_9, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                "aria-label": "Dsiplay components content",
                class: normalizeClass([activeMobileSubsidebar.value === "components" && "is-active"]),
                onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "components")
              }, _hoisted_11, 2)
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "messaging-v1" } }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                "aria-label": "Display search panel",
                onClick: _cache[5] || (_cache[5] = ($event) => activePanel.value = "search")
              }, _hoisted_14)
            ]),
            _hoisted_15
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isMobileSidebarOpen.value && activeMobileSubsidebar.value === "layout" ? (openBlock(), createBlock(_component_LayoutsMobileSubsidebar, { key: 0 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsMobileSubsidebar, { key: 1 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "components" ? (openBlock(), createBlock(_component_ComponentsMobileSubsidebar, { key: 2 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "elements" ? (openBlock(), createBlock(_component_ElementsMobileSubsidebar, { key: 3 })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_CircularMenu),
        createVNode(_component_Sidebar, {
          theme: props.theme,
          "is-open": isDesktopSidebarOpen.value
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                "data-content": "\u062F\u0627\u0634\u0628\u0631\u062F\u0647\u0627",
                "aria-label": "View dashboards",
                onClick: _cache[7] || (_cache[7] = ($event) => switchSidebar("dashboard"))
              }, _hoisted_17, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "layout" && "is-active"]),
                "data-content": "\u0637\u0631\u062D\u200C\u0647\u0627",
                "aria-label": "View layouts",
                onClick: _cache[8] || (_cache[8] = ($event) => switchSidebar("layout"))
              }, _hoisted_19, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "elements" && "is-active"]),
                "data-content": "\u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627",
                "aria-label": "View elements",
                onClick: _cache[9] || (_cache[9] = ($event) => switchSidebar("elements"))
              }, _hoisted_21, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "components" && "is-active"]),
                "data-content": "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627",
                "aria-label": "View components",
                onClick: _cache[10] || (_cache[10] = ($event) => switchSidebar("components"))
              }, _hoisted_23, 2)
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "messaging-v1" },
                "data-content": "\u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646"
              }, {
                default: withCtx(() => [
                  _hoisted_24
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", _hoisted_25, [
              createVNode(_component_LayoutSwitcher)
            ]),
            createBaseVNode("li", _hoisted_26, [
              createBaseVNode("a", {
                "aria-label": "Display search panel",
                "data-content": "\u062C\u0633\u062A\u062C\u0648",
                onClick: _cache[11] || (_cache[11] = ($event) => activePanel.value = "search")
              }, _hoisted_28),
              createBaseVNode("a", {
                "aria-label": "Close all panels",
                class: "is-hidden is-inactive",
                onClick: _cache[12] || (_cache[12] = ($event) => activePanel.value = "none")
              }, _hoisted_30)
            ]),
            createBaseVNode("li", _hoisted_31, [
              createVNode(_component_RouterLink, {
                id: "open-settings",
                to: { name: "sidebar-layouts-profile-settings" },
                "data-content": "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A"
              }, {
                default: withCtx(() => [
                  _hoisted_32
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
            ])
          ]),
          _: 1
        }, 8, ["theme", "is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "components" ? (openBlock(), createBlock(_component_ComponentsSubsidebar, {
              key: 0,
              onClose: _cache[13] || (_cache[13] = ($event) => isDesktopSidebarOpen.value = false)
            })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "elements" ? (openBlock(), createBlock(_component_ElementsSubsidebar, {
              key: 1,
              onClose: _cache[14] || (_cache[14] = ($event) => isDesktopSidebarOpen.value = false)
            })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsSubsidebar, {
              key: 2,
              onClose: _cache[15] || (_cache[15] = ($event) => isDesktopSidebarOpen.value = false)
            })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "layout" ? (openBlock(), createBlock(_component_LayoutsSubsidebar, {
              key: 3,
              onClose: _cache[16] || (_cache[16] = ($event) => isDesktopSidebarOpen.value = false)
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_SearchPanel),
        createVNode(_component_TaskPanel),
        createBaseVNode("div", _hoisted_33, [
          createBaseVNode("div", _hoisted_34, [
            props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", _hoisted_35, [
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("div", {
                  class: "vuero-hamburger nav-trigger push-resize",
                  onClick: _cache[17] || (_cache[17] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                }, [
                  createBaseVNode("span", _hoisted_37, [
                    createBaseVNode("span", {
                      class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                    }, _hoisted_39, 2)
                  ])
                ]),
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("h1", _hoisted_41, toDisplayString(unref(pageTitle)), 1)
                ]),
                createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToolbarNotification),
                    createBaseVNode("a", {
                      class: "toolbar-link right-panel-trigger",
                      "aria-label": "View activity panel",
                      onClick: _cache[18] || (_cache[18] = ($event) => activePanel.value = "activity")
                    }, _hoisted_43)
                  ]),
                  _: 1
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ]))
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
