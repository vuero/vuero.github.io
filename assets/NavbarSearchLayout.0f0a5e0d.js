import { _ as _export_sfc, a as __unplugin_components_0$1 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2, a as __unplugin_components_1, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$c, e as _sfc_main$d } from "./ActivityPanel.b40b79c2.js";
import { a as __unplugin_components_5, b as __unplugin_components_6, c as __unplugin_components_7, d as __unplugin_components_8, _ as _sfc_main$5, e as _sfc_main$8, f as _sfc_main$e } from "./TaskPanel.15619fee.js";
import { _ as _sfc_main$6 } from "./ToolbarNotification.0ddce444.js";
import { _ as _sfc_main$7 } from "./Toolbar.278fa677.js";
import { _ as _sfc_main$9 } from "./VAvatarStack.8507ceb8.js";
import { _ as _sfc_main$a } from "./VIconButton.809a4ce6.js";
import { _ as __unplugin_components_0$2 } from "./VDropdown.5214d40f.js";
import { _ as _sfc_main$b } from "./VAvatar.879e77ac.js";
import { d as defineComponent, ak as useRoute, m as useWindowScroll, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, F as renderSlot, D as createCommentVNode, n as normalizeClass, t as unref, r as ref, a9 as watch, q as resolveComponent, v as createVNode, x as withCtx, N as createBlock, _ as Transition, E as toDisplayString, y as withDirectives, I as vModelText, G as Fragment, J as renderList, ao as normalizeProps, ap as guardReactiveProps, p as pushScopeId, f as popScopeId } from "./vendor.9ec557a4.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
import { p as pageTitle } from "./navbarLayoutState.822f8a9f.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import "./useDropdown.086619d7.js";
import "./useViaPlaceholderError.be9c33a4.js";
import "./fastpizza.70124fcb.js";
import "./25.ca54486f.js";
import "./VTag.ff081b8f.js";
import "./VMessage.2ad1e7cc.js";
import "./VTabs.2e6d271f.js";
import "./VIcon.85cce7bc.js";
import "./VModal.d9bd4cb5.js";
import "./sidebarLayoutState.883cc242.js";
import "./video.6a901793.js";
import "./12.16c4b7ba.js";
import "./13.d1ef5906.js";
var NavbarSearch_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "navbar-navbar-inner" };
const _hoisted_2$1 = { class: "left" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-6" }, "Page Title", -1);
const _hoisted_4$1 = { class: "center" };
const _hoisted_5$1 = { class: "right" };
const _hoisted_6$1 = {
  key: 0,
  class: "left"
};
const _hoisted_7$1 = { class: "welcome-text" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "/",
    class: "button"
  }, "Homepage")
], -1);
const _hoisted_9$1 = { class: "right" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "default" }
  },
  setup(__props) {
    const props = __props;
    useRoute();
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-navbar-clean", [
          unref(isScrolling) && "is-scrolled",
          props.theme === "fade" && "is-transparent"
        ]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              _hoisted_3$1
            ])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            renderSlot(_ctx.$slots, "search")
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            renderSlot(_ctx.$slots, "toolbar")
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["navbar-navbar-lower", [
            props.theme === "default" && "is-between",
            props.theme === "center" && "is-centered",
            props.theme === "fade" && "is-centered"
          ]])
        }, [
          props.theme !== "default" ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              renderSlot(_ctx.$slots, "subtitle")
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([
              props.theme === "default" && "left",
              props.theme === "center" && "center",
              props.theme === "fade" && "center"
            ])
          }, [
            renderSlot(_ctx.$slots, "links", {}, () => [
              _hoisted_8$1
            ])
          ], 2),
          createBaseVNode("div", _hoisted_9$1, [
            renderSlot(_ctx.$slots, "toolbar-bottom")
          ])
        ], 2)
      ], 2);
    };
  }
});
var NavbarSearchLayout_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-01242caf"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "navbar-layout navbar-layout-search" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1));
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:box"
  })
], -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:cpu"
  })
], -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1));
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "#" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1));
const _hoisted_17 = { class: "title is-6" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "22 \u0622\u0628\u0627\u0646 1400", -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_20 = [
  _hoisted_19
];
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-analytics-alt-1"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062C\u062F\u06CC\u062F"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062C\u062F\u06CC\u062F")
  ])
], -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-users-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0639\u0648\u062A"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0639\u0648\u062A \u0628\u0631\u0627\u06CC \u0639\u0636\u0648 \u06AF\u06CC\u0631\u06CC")
  ])
], -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-briefcase"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647 \u062A\u0627\u0632\u0647"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u067E\u0631\u0648\u0698\u0647 \u062A\u0627\u0632\u0647")
  ])
], -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
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
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062A\u06CC\u0645")
  ])
], -1));
const _hoisted_26 = { class: "centered-search" };
const _hoisted_27 = { class: "field" };
const _hoisted_28 = { class: "control has-icon" };
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:search"
  })
], -1));
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1));
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = {
  key: 1,
  class: "search-results has-slimscroll is-active"
};
const _hoisted_33 = { class: "meta" };
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "\u067E\u06CC\u0634\u062E\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "\u062A\u06CC\u0645"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("a", { class: "button" }, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A")
], -1));
const _hoisted_35 = { class: "view-wrapper has-top-nav" };
const _hoisted_36 = { class: "page-content-wrapper" };
const _hoisted_37 = {
  key: 1,
  class: "page-content is-relative"
};
const _hoisted_38 = { class: "is-navbar-lg" };
const _hoisted_39 = { class: "page-title has-text-centered" };
const _hoisted_40 = { class: "title-wrap" };
const _hoisted_41 = { class: "title is-4" };
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_43 = [
  _hoisted_42
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "default" },
    nowrap: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const isMobileSidebarOpen = ref(false);
    const activeMobileSubsidebar = ref("dashboard");
    const filter = ref("");
    const users = [
      {
        picture: "/demo/avatars/12.jpg",
        initials: "JS",
        color: "info"
      },
      {
        picture: "/demo/avatars/22.jpg",
        initials: "JH",
        color: "info"
      },
      {
        picture: "/demo/avatars/40.jpg",
        initials: "SM",
        color: "h-purple"
      }
    ];
    function getAvatarData(user) {
      return {
        picture: user.avatar,
        initials: user.initials,
        color: user.color
      };
    }
    const filteredData = computed(() => {
      if (!filter.value) {
        return [];
      }
      return Object.values(popovers).filter((user) => {
        return user.fullName.match(new RegExp(filter.value, "i")) || user.position.match(new RegExp(filter.value, "i"));
      });
    });
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$2;
      const _component_UserProfileDropdown = __unplugin_components_1;
      const _component_MobileNavbar = _sfc_main$3;
      const _component_MobileSidebar = _sfc_main$4;
      const _component_LayoutsMobileSubsidebar = __unplugin_components_5;
      const _component_DashboardsMobileSubsidebar = __unplugin_components_6;
      const _component_ComponentsMobileSubsidebar = __unplugin_components_7;
      const _component_ElementsMobileSubsidebar = __unplugin_components_8;
      const _component_ProjectsQuickDropdown = _sfc_main$5;
      const _component_ToolbarNotification = _sfc_main$6;
      const _component_Toolbar = _sfc_main$7;
      const _component_LayoutSwitcher = _sfc_main$8;
      const _component_VAvatarStack = _sfc_main$9;
      const _component_VIconButton = _sfc_main$a;
      const _component_VDropdown = __unplugin_components_0$2;
      const _component_VAvatar = _sfc_main$b;
      const _component_NavbarSearch = _sfc_main$1;
      const _component_LanguagesPanel = _sfc_main$c;
      const _component_ActivityPanel = _sfc_main$d;
      const _component_TaskPanel = _sfc_main$e;
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
                onClick: _cache[1] || (_cache[1] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_5, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "layout" && "is-active"]),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "layout")
              }, _hoisted_7, 2)
            ]),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "elements" && "is-active"]),
              onClick: _cache[3] || (_cache[3] = ($event) => activeMobileSubsidebar.value = "elements")
            }, _hoisted_9, 2),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "components" && "is-active"]),
              onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "components")
            }, _hoisted_11, 2),
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
        createVNode(_component_NavbarSearch, {
          theme: props.theme
        }, {
          title: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            _hoisted_16,
            createVNode(_component_ProjectsQuickDropdown),
            createBaseVNode("h1", _hoisted_17, toDisplayString(unref(pageTitle)), 1)
          ]),
          subtitle: withCtx(() => [
            _hoisted_18
          ]),
          toolbar: withCtx(() => [
            createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
              default: withCtx(() => [
                createVNode(_component_ToolbarNotification),
                createBaseVNode("a", {
                  class: "toolbar-link right-panel-trigger",
                  onClick: _cache[7] || (_cache[7] = ($event) => activePanel.value = "activity")
                }, _hoisted_20)
              ]),
              _: 1
            }),
            createVNode(_component_LayoutSwitcher),
            createVNode(_component_UserProfileDropdown)
          ]),
          "toolbar-bottom": withCtx(() => [
            createVNode(_component_VAvatarStack, {
              avatars: users,
              limit: 3,
              size: "small"
            }),
            createVNode(_component_VDropdown, {
              spaced: "",
              right: ""
            }, {
              button: withCtx(({ open }) => [
                createVNode(_component_VIconButton, {
                  icon: "feather:plus",
                  circle: "",
                  onClick: open
                }, null, 8, ["onClick"])
              ]),
              content: withCtx(() => [
                _hoisted_21,
                _hoisted_22,
                _hoisted_23,
                _hoisted_24,
                _hoisted_25
              ]),
              _: 1
            })
          ]),
          search: withCtx(() => [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => filter.value = $event),
                    type: "text",
                    class: "input search-input",
                    placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0631\u06A9\u0648\u0631\u062F\u0647\u0627..."
                  }, null, 512), [
                    [vModelText, filter.value]
                  ]),
                  _hoisted_29,
                  filter.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "form-icon is-right",
                    onClick: _cache[9] || (_cache[9] = ($event) => filter.value = "")
                  }, _hoisted_31)) : createCommentVNode("", true),
                  unref(filteredData).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_32, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (user, key) => {
                      return openBlock(), createElementBlock("div", {
                        key,
                        class: "search-result"
                      }, [
                        createVNode(_component_VAvatar, normalizeProps(guardReactiveProps(getAvatarData(user))), null, 16),
                        createBaseVNode("div", _hoisted_33, [
                          createBaseVNode("span", null, toDisplayString(user.username), 1),
                          createBaseVNode("span", null, toDisplayString(user.position), 1)
                        ])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          links: withCtx(() => [
            _hoisted_34
          ]),
          _: 1
        }, 8, ["theme"]),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_TaskPanel),
        createBaseVNode("div", _hoisted_35, [
          createBaseVNode("div", _hoisted_36, [
            props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_37, [
              createBaseVNode("div", _hoisted_38, [
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, [
                    createBaseVNode("h1", _hoisted_41, toDisplayString(unref(pageTitle)), 1)
                  ]),
                  createVNode(_component_Toolbar, { class: "mobile-toolbar" }, {
                    default: withCtx(() => [
                      createVNode(_component_ToolbarNotification),
                      createBaseVNode("a", {
                        class: "toolbar-link right-panel-trigger",
                        onClick: _cache[10] || (_cache[10] = ($event) => activePanel.value = "activity")
                      }, _hoisted_43)
                    ]),
                    _: 1
                  })
                ]),
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ]))
          ])
        ])
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01242caf"]]);
export { __unplugin_components_0 as default };
