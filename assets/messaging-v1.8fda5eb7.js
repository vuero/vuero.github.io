import { t as toggleSidebar, a as activeSidebar } from "./activeSidebarState.93618a64.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, t as unref, n as normalizeClass, G as Fragment, J as renderList, E as toDisplayString, Z as useI18n, r as ref, h as computed, q as resolveComponent, v as createVNode, x as withCtx, B as createTextVNode, ak as useRoute, F as renderSlot, ab as onMounted, K as useHead, w as watchEffect, am as watchPostEffect, N as createBlock, D as createCommentVNode, _ as Transition, T as axios } from "./vendor.9ec557a4.js";
import { _ as __unplugin_components_0 } from "./VPhotosSwipe.0f23df67.js";
import { _ as _sfc_main$d } from "./VIconWrap.809aa90c.js";
import { _ as _imports_2, a as _imports_0 } from "./25.ca54486f.js";
import { _ as _imports_5 } from "./12.16c4b7ba.js";
import { _ as _imports_3 } from "./13.d1ef5906.js";
import { i as isDark, t as toggleDarkModeHandler, j as _imports_0$1, k as _imports_1 } from "./index.4d6c8e1a.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import { u as useDropdown } from "./useDropdown.086619d7.js";
import { _ as _sfc_main$6, a as __unplugin_components_1, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$a, e as _sfc_main$b, f as _imports_2$1 } from "./ActivityPanel.b40b79c2.js";
import { _ as _sfc_main$9, a as _sfc_main$c } from "./SearchPanel.8d96f71b.js";
import { _ as _imports_3$1, a as _imports_4, b as _imports_5$1, c as _imports_6, d as _imports_7, e as _imports_8, f as _imports_9, g as _imports_10, h as _imports_11, i as _imports_12, j as _imports_13, k as _imports_14 } from "./12.f6cf0ae7.js";
import { _ as _imports_16 } from "./having-coffee.dc5ee276.js";
import { s as sidebarTheme } from "./sidebarLayoutState.883cc242.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import "./VAvatar.879e77ac.js";
import "./VDropdown.5214d40f.js";
import "./VIcon.85cce7bc.js";
import "./fastpizza.70124fcb.js";
import "./VIconBox.e1985867.js";
import "./VBlock.47e0c633.js";
import "./UserPopoverContent.8933a73e.js";
import "./userPopovers.e00e1803.js";
var MessagesSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "sidebar-panel is-messages" };
const _hoisted_2$5 = { class: "messages-header" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "\u0686\u062A", -1);
const _hoisted_4$5 = { class: "menu-toggle has-chevron" };
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
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
const _hoisted_6$5 = [
  _hoisted_5$5
];
const _hoisted_7$5 = { class: "inner" };
const _hoisted_8$5 = { class: "is-new-conversation" };
const _hoisted_9$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_10$4 = /* @__PURE__ */ createBaseVNode("span", null, "\u06AF\u067E \u062C\u062F\u06CC\u062F", -1);
const _hoisted_11$4 = [
  _hoisted_9$5,
  _hoisted_10$4
];
const _hoisted_12$4 = {
  id: "conversations-list",
  class: "animated preFadeInUp fadeInUp"
};
const _hoisted_13$3 = ["onClick"];
const _hoisted_14$3 = { class: "recent-user" };
const _hoisted_15$3 = { class: "user-container" };
const _hoisted_16$3 = ["src"];
const _hoisted_17$3 = { class: "recipient-meta" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { type: Array, required: false, default: () => [] },
    selectedConversationId: { type: Number, required: false, default: 0 }
  },
  emits: ["addConversation", "selectConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          _hoisted_3$5,
          createBaseVNode("div", {
            class: "vuero-hamburger nav-trigger push-resize messages-push",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleSidebar)("messages"))
          }, [
            createBaseVNode("span", _hoisted_4$5, [
              createBaseVNode("span", {
                class: normalizeClass([[unref(activeSidebar) !== "none" && "active"], "icon-box-toggle"])
              }, _hoisted_6$5, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7$5, [
          createBaseVNode("div", _hoisted_8$5, [
            createBaseVNode("button", {
              id: "start-conversation",
              class: "button v-button is-primary is-raised is-rounded is-fullwidth",
              onClick: _cache[1] || (_cache[1] = () => emit("addConversation"))
            }, _hoisted_11$4)
          ]),
          createBaseVNode("ul", _hoisted_12$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.conversations, (conversation) => {
              return openBlock(), createElementBlock("li", {
                key: conversation.id,
                class: normalizeClass([__props.selectedConversationId === conversation.id && "is-active"]),
                onClick: () => emit("selectConversation", conversation.id)
              }, [
                createBaseVNode("div", _hoisted_14$3, [
                  createBaseVNode("div", _hoisted_15$3, [
                    createBaseVNode("img", {
                      class: "is-user",
                      src: conversation.avatar,
                      alt: "",
                      onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 40, _hoisted_16$3)
                  ]),
                  createBaseVNode("div", _hoisted_17$3, [
                    createBaseVNode("span", null, toDisplayString(conversation.name), 1),
                    createBaseVNode("span", null, toDisplayString(conversation.lastMessage), 1)
                  ])
                ])
              ], 10, _hoisted_13$3);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
var MessagesMobileSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "mobile-subsidebar is-messaging" };
const _hoisted_2$4 = { class: "inner" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u067E\u06CC\u063A\u0627\u0645\u200C\u0647\u0627")
], -1);
const _hoisted_4$4 = {
  id: "mobile-conversations-list",
  class: "animated preFadeInUp fadeInUp"
};
const _hoisted_5$4 = ["onClick"];
const _hoisted_6$4 = { class: "recent-user" };
const _hoisted_7$4 = { class: "user-container" };
const _hoisted_8$4 = ["src"];
const _hoisted_9$4 = { class: "recipient-meta" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { type: Array, required: false, default: () => [] },
    selectedConversationId: { type: Number, required: false, default: 0 }
  },
  emits: ["selectConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          _hoisted_3$4,
          createBaseVNode("ul", _hoisted_4$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.conversations, (conversation) => {
              return openBlock(), createElementBlock("li", {
                key: conversation.id,
                class: normalizeClass([__props.selectedConversationId === conversation.id && "is-active"]),
                onClick: () => emit("selectConversation", conversation.id)
              }, [
                createBaseVNode("div", _hoisted_6$4, [
                  createBaseVNode("div", _hoisted_7$4, [
                    createBaseVNode("img", {
                      class: "is-user",
                      src: conversation.avatar,
                      alt: "",
                      onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 40, _hoisted_8$4)
                  ]),
                  createBaseVNode("div", _hoisted_9$4, [
                    createBaseVNode("span", null, toDisplayString(conversation.name), 1),
                    createBaseVNode("span", null, toDisplayString(conversation.lastMessage), 1)
                  ])
                ])
              ], 10, _hoisted_5$4);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
var CollapsedMessaging_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "inner" };
const _hoisted_2$3 = { class: "collapsed-menu" };
const _hoisted_3$3 = { class: "menu-toggle has-chevron" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
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
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$3 = { class: "collapsed-add" };
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_8$3 = [
  _hoisted_7$3
];
const _hoisted_9$3 = { class: "collapsed-conversations" };
const _hoisted_10$3 = ["onClick"];
const _hoisted_11$3 = { class: "user-container" };
const _hoisted_12$3 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { type: Array, required: false, default: () => [] },
    selectedConversationId: { type: Number, required: false, default: 0 }
  },
  emits: ["addConversation", "selectConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[unref(activeSidebar) !== "messages" && "is-active"], "collapsed-messaging"])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", {
              class: "vuero-hamburger nav-trigger push-resize messages-push",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleSidebar)("messages"))
            }, [
              createBaseVNode("span", _hoisted_3$3, [
                createBaseVNode("span", {
                  class: normalizeClass([[unref(activeSidebar) !== "none" && "active"], "icon-box-toggle"])
                }, _hoisted_5$3, 2)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_6$3, [
            createBaseVNode("a", {
              class: "button collapse-add-button is-primary",
              onClick: _cache[1] || (_cache[1] = () => emit("addConversation"))
            }, _hoisted_8$3)
          ]),
          createBaseVNode("ul", _hoisted_9$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.conversations, (conversation) => {
              return openBlock(), createElementBlock("li", {
                key: conversation.id,
                class: normalizeClass([__props.selectedConversationId === conversation.id && "is-active"]),
                onClick: () => emit("selectConversation", conversation.id)
              }, [
                createBaseVNode("div", _hoisted_11$3, [
                  createBaseVNode("img", {
                    class: "is-user",
                    src: conversation.avatar,
                    alt: "",
                    onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                  }, null, 40, _hoisted_12$3)
                ])
              ], 10, _hoisted_10$3);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = { class: "toolbar mr-auto" };
const _hoisted_2$2 = { class: "toolbar-link" };
const _hoisted_3$2 = { class: "dark-mode mr-auto" };
const _hoisted_4$2 = ["checked"];
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$2 = ["src"];
const _hoisted_7$2 = { class: "toolbar-notifications is-hidden-mobile" };
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("span", { class: "new-indicator pulsate" }, null, -1);
const _hoisted_10$2 = [
  _hoisted_8$2,
  _hoisted_9$2
];
const _hoisted_11$2 = {
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_12$2 = { class: "dropdown-content" };
const _hoisted_13$2 = { class: "heading" };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("div", { class: "heading-left" }, [
  /* @__PURE__ */ createBaseVNode("h6", { class: "heading-title" }, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A")
], -1);
const _hoisted_15$2 = { class: "heading-right" };
const _hoisted_16$2 = /* @__PURE__ */ createTextVNode(" See all ");
const _hoisted_17$2 = { class: "notification-list" };
const _hoisted_18$2 = { class: "notification-item" };
const _hoisted_19$2 = { class: "img-left" };
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0622\u0644\u06CC\u0633"),
    /* @__PURE__ */ createTextVNode(" \u06CC\u06A9 \u06A9\u0627\u0645\u0646\u062A \u06AF\u0630\u0627\u0634\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "1 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_21$2 = { class: "notification-item" };
const _hoisted_22$2 = { class: "img-left" };
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0622\u0631\u0646\u0648\u0644\u062F \u0627\u06CC\u0646\u0634\u062A\u06CC\u0646"),
    /* @__PURE__ */ createTextVNode(" \u0641\u0627\u06CC\u0644\u06CC \u0631\u0627 \u0622\u067E\u0644\u0648\u062F \u06A9\u0631\u062F. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_24$1 = { class: "notification-item" };
const _hoisted_25$1 = { class: "img-left" };
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u062A\u0627\u0631\u0627"),
    /* @__PURE__ */ createTextVNode(" \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0628\u0647 \u0634\u0645\u0627 \u0641\u0631\u0633\u062A\u0627\u062F\u0647 \u0627\u0633\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_27$1 = { class: "notification-item" };
const _hoisted_28$1 = { class: "img-left" };
const _hoisted_29$1 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0645\u0644\u0627\u0646\u06CC"),
    /* @__PURE__ */ createTextVNode(" \u06CC\u06A9 \u06A9\u0627\u0645\u0646\u062A \u06AF\u0630\u0627\u0634\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "3 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_31$1 = [
  _hoisted_30$1
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const { locale } = useI18n();
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("label", _hoisted_3$2, [
            createBaseVNode("input", {
              type: "checkbox",
              checked: !unref(isDark),
              onChange: _cache[0] || (_cache[0] = (...args) => unref(toggleDarkModeHandler) && unref(toggleDarkModeHandler)(...args))
            }, null, 40, _hoisted_4$2),
            _hoisted_5$2
          ])
        ]),
        createBaseVNode("a", {
          class: "toolbar-link right-panel-trigger",
          onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "languages")
        }, [
          createBaseVNode("img", {
            src: unref(localFlagSrc),
            alt: ""
          }, null, 8, _hoisted_6$2)
        ]),
        createBaseVNode("div", _hoisted_7$2, [
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement"] = _value;
              dropdownElement.value = _value;
            },
            class: "dropdown is-spaced is-dots is-right dropdown-trigger"
          }, [
            createBaseVNode("div", {
              class: "is-trigger",
              "aria-haspopup": "true",
              onClick: _cache[2] || (_cache[2] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
            }, _hoisted_10$2),
            createBaseVNode("div", _hoisted_11$2, [
              createBaseVNode("div", _hoisted_12$2, [
                createBaseVNode("div", _hoisted_13$2, [
                  _hoisted_14$2,
                  createBaseVNode("div", _hoisted_15$2, [
                    createVNode(_component_RouterLink, {
                      class: "notification-link",
                      to: { name: "sidebar-layouts-profile-notifications" }
                    }, {
                      default: withCtx(() => [
                        _hoisted_16$2
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("ul", _hoisted_17$2, [
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_18$2, [
                      createBaseVNode("div", _hoisted_19$2, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: _imports_2,
                          onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_20$2
                    ])
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_21$2, [
                      createBaseVNode("div", _hoisted_22$2, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: _imports_5,
                          onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_23$1
                    ])
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_24$1, [
                      createBaseVNode("div", _hoisted_25$1, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: _imports_3,
                          onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_26$1
                    ])
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", _hoisted_27$1, [
                      createBaseVNode("div", _hoisted_28$1, [
                        createBaseVNode("img", {
                          class: "user-photo",
                          alt: "",
                          src: _imports_0,
                          onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32)
                      ]),
                      _hoisted_29$1
                    ])
                  ])
                ])
              ])
            ])
          ], 512)
        ]),
        createBaseVNode("a", {
          id: "hide-chat-side",
          class: "toolbar-link",
          onClick: _cache[7] || (_cache[7] = ($event) => emit("close"))
        }, _hoisted_31$1)
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "sidebar-layout" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:cpu"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "#" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:cpu"
}, null, -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_16$1 = { class: "right-panel-trigger is-hidden-tablet" };
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather-search"
}, null, -1);
const _hoisted_18$1 = [
  _hoisted_17$1
];
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather-x"
}, null, -1);
const _hoisted_20$1 = [
  _hoisted_19$1
];
const _hoisted_21$1 = { class: "is-hidden-tablet" };
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:settings"
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "default" }
  },
  setup(__props) {
    const props = __props;
    useRoute();
    const isMobileSidebarOpen = ref(false);
    ref(false);
    return (_ctx, _cache) => {
      const _component_NotificationsMobileDropdown = _sfc_main$6;
      const _component_UserProfileDropdown = __unplugin_components_1;
      const _component_MobileNavbar = _sfc_main$7;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_MobileSidebar = _sfc_main$8;
      const _component_Sidebar = _sfc_main$9;
      const _component_LanguagesPanel = _sfc_main$a;
      const _component_ActivityPanel = _sfc_main$b;
      const _component_SearchPanel = _sfc_main$c;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2$1,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          default: withCtx(() => [
            createVNode(_component_NotificationsMobileDropdown),
            createVNode(_component_UserProfileDropdown)
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[2] || (_cache[2] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-dashboards" } }, {
                default: withCtx(() => [
                  _hoisted_3$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-layouts" } }, {
                default: withCtx(() => [
                  _hoisted_4$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements" } }, {
                default: withCtx(() => [
                  _hoisted_5$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components" } }, {
                default: withCtx(() => [
                  _hoisted_6$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "messaging-v1" } }, {
                default: withCtx(() => [
                  _hoisted_7$1
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "search")
              }, _hoisted_9$1)
            ]),
            _hoisted_10$1
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_Sidebar, {
          theme: props.theme
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-dashboards" } }, {
                default: withCtx(() => [
                  _hoisted_11$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "sidebar-layouts" } }, {
                default: withCtx(() => [
                  _hoisted_12$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "elements" } }, {
                default: withCtx(() => [
                  _hoisted_13$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "components" } }, {
                default: withCtx(() => [
                  _hoisted_14$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "messaging-v1" } }, {
                default: withCtx(() => [
                  _hoisted_15$1
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", _hoisted_16$1, [
              createBaseVNode("a", {
                "data-content": "\u062C\u0633\u062A\u062C\u0648",
                onClick: _cache[3] || (_cache[3] = ($event) => activePanel.value = "search")
              }, _hoisted_18$1),
              createBaseVNode("a", {
                class: "is-hidden is-inactive",
                onClick: _cache[4] || (_cache[4] = ($event) => activePanel.value = "none")
              }, _hoisted_20$1)
            ]),
            createBaseVNode("li", _hoisted_21$1, [
              createVNode(_component_RouterLink, {
                id: "open-settings",
                to: { name: "sidebar-layouts-profile-settings" },
                "data-content": "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A"
              }, {
                default: withCtx(() => [
                  _hoisted_22$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
            ])
          ]),
          _: 1
        }, 8, ["theme"]),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_SearchPanel),
        renderSlot(_ctx.$slots, "default", { isMobileSidebarOpen: isMobileSidebarOpen.value })
      ]);
    };
  }
});
var _imports_15 = "/images/icons/misc/typing.gif";
var messagingV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-wrapper" };
const _hoisted_2 = { class: "page-content chat-content" };
const _hoisted_3 = { class: "page-title has-text-centered is-hidden" };
const _hoisted_4 = { class: "menu-toggle has-chevron" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
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
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5" }, "\u067E\u06CC\u063A\u0627\u0645\u200C\u0647\u0627", -1);
const _hoisted_8 = { class: "is-chat animated preFadeInUp fadeInUp" };
const _hoisted_9 = { class: "chat-header" };
const _hoisted_10 = { class: "control" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "easy-autocomplete" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "users-autocpl",
    type: "text",
    class: "input",
    "aria-label": "To",
    placeholder: "Start typing a name"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "To:")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = { class: "chat-body-wrap" };
const _hoisted_16 = {
  id: "chat-body",
  class: "chat-body"
};
const _hoisted_17 = {
  key: 0,
  class: "no-messages"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0$1,
  alt: ""
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "text" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "No messages yet"),
  /* @__PURE__ */ createBaseVNode("p", null, "Start the conversation by typing a message")
], -1);
const _hoisted_21 = [
  _hoisted_18,
  _hoisted_19,
  _hoisted_20
];
const _hoisted_22 = {
  key: 0,
  class: "divider-container"
};
const _hoisted_23 = { class: "divider" };
const _hoisted_24 = { class: "avatar" };
const _hoisted_25 = ["src"];
const _hoisted_26 = { class: "msg" };
const _hoisted_27 = { class: "msg-inner" };
const _hoisted_28 = { class: "avatar is-online" };
const _hoisted_29 = ["src"];
const _hoisted_30 = { class: "msg is-image" };
const _hoisted_31 = { class: "image-container" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "image-overlay" }, null, -1);
const _hoisted_33 = { class: "image-actions" };
const _hoisted_34 = { class: "actions-inner" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "action download" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "iconify",
    "data-icon": "feather:download"
  })
], -1);
const _hoisted_36 = ["href"];
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", {
  class: "iconify",
  "data-icon": "feather:maximize"
}, null, -1);
const _hoisted_38 = [
  _hoisted_37
];
const _hoisted_39 = { class: "avatar" };
const _hoisted_40 = ["src"];
const _hoisted_41 = { class: "msg is-link-image" };
const _hoisted_42 = { class: "image" };
const _hoisted_43 = ["src"];
const _hoisted_44 = { class: "link-badge" };
const _hoisted_45 = ["src"];
const _hoisted_46 = { class: "link-body" };
const _hoisted_47 = { class: "link-title" };
const _hoisted_48 = { class: "avatar is-online" };
const _hoisted_49 = ["src"];
const _hoisted_50 = { class: "msg is-link" };
const _hoisted_51 = { class: "link-meta" };
const _hoisted_52 = { href: "#" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "loader is-loading" }, null, -1);
const _hoisted_54 = [
  _hoisted_53
];
const _hoisted_55 = { class: "chat-side-header" };
const _hoisted_56 = { class: "chat-side-content is-single" };
const _hoisted_57 = { class: "user-pic" };
const _hoisted_58 = ["src"];
const _hoisted_59 = {
  key: 0,
  class: "user-name"
};
const _hoisted_60 = {
  key: 1,
  class: "user-job-title"
};
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("div", { class: "side-actions" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-rounded" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-phone"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0645\u0627\u0633 \u0635\u0648\u062A\u06CC")
  ]),
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-rounded" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-video"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0645\u0627\u0633 \u062A\u0635\u0648\u06CC\u0631\u06CC")
  ])
], -1);
const _hoisted_62 = { class: "detail-photos" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("div", { class: "detail-photo-title" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "feather feather-image"
  }, [
    /* @__PURE__ */ createBaseVNode("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }),
    /* @__PURE__ */ createBaseVNode("path", { d: "M21 15l-5-5L5 21" })
  ]),
  /* @__PURE__ */ createTextVNode(" \u062A\u0635\u0627\u0648\u06CC\u0631 \u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0634\u062A\u0647 \u0634\u062F\u0647 ")
], -1);
const _hoisted_64 = { class: "detail-photo-grid" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("a", { class: "view-more" }, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u0628\u06CC\u0646\u06CC\u062F", -1);
const _hoisted_66 = { class: "message-field-wrapper" };
const _hoisted_67 = { class: "control" };
const _hoisted_68 = { class: "add-content" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_70 = [
  _hoisted_69
];
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("div", {
  class: "dropdown-menu",
  role: "menu"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:video"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u062F\u0626\u0648"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0631\u062C \u0648\u06CC\u062F\u0626\u0648")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:image"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0635\u0627\u0648\u06CC\u0631"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0622\u067E\u0644\u0648\u062F \u062A\u0635\u0627\u0648\u06CC\u0631")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:link"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u0648\u0646\u062F"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0648\u0646\u062F")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:file"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0627\u06CC\u0644"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0622\u067E\u0644\u0648\u062F \u0641\u0627\u06CC\u0644")
      ])
    ])
  ])
], -1);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("div", { class: "add-emoji" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "button" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:smile"
    })
  ])
], -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("input", {
  id: "chat-input",
  class: "input is-rounded",
  type: "text",
  placeholder: "\u067E\u06CC\u063A\u0627\u0645\u06CC \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F ...",
  "aria-label": "Write a message"
}, null, -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("div", { class: "send-message" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "button v-button is-primary is-raised is-rounded" }, " \u0627\u0631\u0633\u0627\u0644 ")
], -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "typing-indicator" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_15,
    alt: ""
  })
], -1);
const _hoisted_76 = { class: "is-chat-placeholder animated preFadeInUp fadeInUp is-hidden" };
const _hoisted_77 = { class: "caption" };
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("div", { class: "text" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Nothing to show"),
  /* @__PURE__ */ createBaseVNode("p", null, "Select an existing conversation or start a new one"),
  /* @__PURE__ */ createBaseVNode("a", {
    id: "new-chat",
    class: "button v-button is-solid is-outlined is-big is-rounded"
  }, " \u0634\u0631\u0648\u0639 \u06AF\u067E \u062C\u062F\u06CC\u062F ")
], -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_80 = [
  _hoisted_79
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const conversations = [
      {
        id: 1,
        name: "\u062D\u0633\u0646 \u0645\u0642\u062F\u0645",
        lastMessage: "3 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
        avatar: "/demo/avatars/10.jpg"
      },
      {
        id: 2,
        name: "\u0645\u0644\u0627\u0646\u06CC",
        lastMessage: "30 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
        avatar: "/demo/avatars/25.jpg"
      },
      {
        id: 3,
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
        lastMessage: "1 \u0631\u0648\u0632 \u067E\u06CC\u0634",
        avatar: "/demo/avatars/13.jpg"
      },
      {
        id: 4,
        name: "\u0628\u06CC\u0644 \u06AF\u06CC\u062A\u0633",
        lastMessage: "1 \u0631\u0648\u0632 \u067E\u06CC\u0634",
        avatar: "/demo/avatars/18.jpg"
      },
      {
        id: 5,
        name: "\u0622\u0644\u06CC\u0633",
        lastMessage: "2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
        avatar: "/demo/avatars/7.jpg"
      }
    ];
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    const addConversationOpen = ref(false);
    const isLoading = ref(true);
    const selectedConversationId = ref(0);
    const messages = ref([]);
    const mobileConversationDetailsOpen = ref(false);
    const onConversationChanged = async () => {
      if (selectedConversationId.value === 0) {
        messages.value = [];
        return;
      }
      isLoading.value = true;
      await sleep(1e3);
      try {
        const { data } = await axios.get(`/api/conversation${selectedConversationId.value}.json`);
        if (data.messages && data.messages.message) {
          messages.value = data.messages.message;
        }
      } catch (error) {
        console.error(error);
      }
      isLoading.value = false;
    };
    const selectedConversation = computed(() => {
      const conversation = conversations.find((item) => item.id === selectedConversationId.value);
      if (selectedConversationId.value === 0 || !conversation || isLoading.value) {
        return {
          id: 0,
          name: "",
          lastMessage: "",
          avatar: "/images/avatars/placeholder.jpg"
        };
      } else {
        return conversation;
      }
    });
    onMounted(() => {
      activeSidebar.value = "messages";
      selectedConversationId.value = 1;
    });
    useHead({
      title: "\u0686\u062A - \u0633\u0627\u06CC\u062F\u0628\u0631 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    watchEffect(onConversationChanged);
    watchPostEffect(() => {
      const isOpen = activeSidebar.value === "messages";
      const wrappers = document.querySelectorAll(".view-wrapper");
      wrappers.forEach((wrapper) => {
        if (isOpen === false) {
          wrapper.classList.remove("is-pushed-full");
        } else if (!wrapper.classList.contains("is-pushed-full")) {
          wrapper.classList.add("is-pushed-full");
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_MessagesSubsidebar = _sfc_main$5;
      const _component_MessagesMobileSubsidebar = _sfc_main$4;
      const _component_CollapsedMessaging = _sfc_main$3;
      const _component_VPhotosSwipe = __unplugin_components_0;
      const _component_VIconWrap = _sfc_main$d;
      const _component_MessagingToolbar = _sfc_main$2;
      const _component_MessagingLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_MessagingLayout, { theme: unref(sidebarTheme) }, {
        default: withCtx(({ isMobileSidebarOpen }) => [
          createVNode(Transition, { name: "slide-x" }, {
            default: withCtx(() => [
              unref(activeSidebar) === "messages" ? (openBlock(), createBlock(_component_MessagesSubsidebar, {
                key: 0,
                conversations,
                "selected-conversation-id": selectedConversationId.value,
                onAddConversation: _cache[0] || (_cache[0] = () => {
                  selectedConversationId.value = 0;
                  addConversationOpen.value = !addConversationOpen.value;
                }),
                onSelectConversation: _cache[1] || (_cache[1] = (id) => {
                  addConversationOpen.value = false;
                  selectedConversationId.value = id;
                })
              }, null, 8, ["selected-conversation-id"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(Transition, { name: "slide-x" }, {
            default: withCtx(() => [
              isMobileSidebarOpen ? (openBlock(), createBlock(_component_MessagesMobileSubsidebar, {
                key: 0,
                conversations,
                "selected-conversation-id": selectedConversationId.value,
                onSelectConversation: _cache[2] || (_cache[2] = (id) => {
                  addConversationOpen.value = false;
                  selectedConversationId.value = id;
                })
              }, null, 8, ["selected-conversation-id"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1024),
          createVNode(_component_CollapsedMessaging, {
            conversations,
            "selected-conversation-id": selectedConversationId.value,
            onAddConversation: _cache[3] || (_cache[3] = () => {
              selectedConversationId.value = 0;
              addConversationOpen.value = !addConversationOpen.value;
            }),
            onSelectConversation: _cache[4] || (_cache[4] = (id) => {
              addConversationOpen.value = false;
              selectedConversationId.value = id;
            })
          }, null, 8, ["selected-conversation-id"]),
          createBaseVNode("div", {
            id: "vuero-messaging",
            class: normalizeClass(["view-wrapper", [unref(activeSidebar) === "none" && "is-pushed-messages"]])
          }, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", {
                    class: "vuero-hamburger nav-trigger push-resize",
                    onClick: _cache[5] || (_cache[5] = ($event) => unref(toggleSidebar)("messages"))
                  }, [
                    createBaseVNode("span", _hoisted_4, [
                      createBaseVNode("span", {
                        class: normalizeClass([[unref(activeSidebar) !== "none" && "active"], "icon-box-toggle"])
                      }, _hoisted_6, 2)
                    ])
                  ]),
                  _hoisted_7
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", {
                      class: normalizeClass([[!addConversationOpen.value && "is-hidden"], "is-autocomplete"])
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        _hoisted_11,
                        _hoisted_12,
                        createBaseVNode("div", {
                          class: "hide",
                          onClick: _cache[6] || (_cache[6] = ($event) => addConversationOpen.value = false)
                        }, _hoisted_14)
                      ])
                    ], 2)
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("ol", _hoisted_16, [
                      messages.value.length === 0 ? (openBlock(), createElementBlock("li", _hoisted_17, _hoisted_21)) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, (message) => {
                        return openBlock(), createElementBlock("li", {
                          key: message.id,
                          class: normalizeClass([
                            message.type === "system" && "divider-container",
                            message.type !== "system" && message.sender
                          ])
                        }, [
                          message.type === "system" ? (openBlock(), createElementBlock("li", _hoisted_22, [
                            createBaseVNode("div", _hoisted_23, [
                              createBaseVNode("span", null, toDisplayString(message.content.text), 1)
                            ])
                          ])) : message.type === "msg" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createBaseVNode("div", _hoisted_24, [
                              createBaseVNode("img", {
                                src: message.avatar,
                                draggable: "false",
                                alt: ""
                              }, null, 8, _hoisted_25)
                            ]),
                            createBaseVNode("div", _hoisted_26, [
                              createBaseVNode("div", _hoisted_27, [
                                createBaseVNode("p", null, toDisplayString(message.content.text), 1)
                              ]),
                              createBaseVNode("time", null, toDisplayString(message.content.time), 1)
                            ])
                          ], 64)) : message.type === "image" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                            createBaseVNode("div", _hoisted_28, [
                              createBaseVNode("img", {
                                src: message.avatar,
                                draggable: "false",
                                alt: ""
                              }, null, 8, _hoisted_29)
                            ]),
                            createBaseVNode("div", _hoisted_30, [
                              createBaseVNode("div", _hoisted_31, [
                                createVNode(_component_VPhotosSwipe, {
                                  items: [
                                    {
                                      src: message.content.image_url,
                                      thumbnail: message.content.image_url,
                                      w: 600,
                                      h: 400,
                                      alt: "optional alt attribute for thumbnail image"
                                    }
                                  ],
                                  "thumbnail-radius": "full"
                                }, null, 8, ["items"]),
                                _hoisted_32,
                                createBaseVNode("div", _hoisted_33, [
                                  createBaseVNode("div", _hoisted_34, [
                                    _hoisted_35,
                                    createBaseVNode("a", {
                                      href: message.content.image_url,
                                      class: "action messaging-popup",
                                      "aria-label": "Maximize"
                                    }, _hoisted_38, 8, _hoisted_36)
                                  ])
                                ])
                              ])
                            ])
                          ], 64)) : message.type === "imagelink" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                            createBaseVNode("div", _hoisted_39, [
                              createBaseVNode("img", {
                                src: message.avatar,
                                draggable: "false",
                                alt: ""
                              }, null, 8, _hoisted_40)
                            ]),
                            createBaseVNode("div", _hoisted_41, [
                              createBaseVNode("figure", _hoisted_42, [
                                createBaseVNode("img", {
                                  src: message.content.link_image,
                                  alt: ""
                                }, null, 8, _hoisted_43),
                                createBaseVNode("div", _hoisted_44, [
                                  createBaseVNode("img", {
                                    src: message.content.link_badge,
                                    alt: ""
                                  }, null, 8, _hoisted_45)
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_46, [
                                createBaseVNode("span", _hoisted_47, toDisplayString(message.content.text), 1),
                                createBaseVNode("small", null, toDisplayString(message.content.subtext), 1)
                              ])
                            ])
                          ], 64)) : message.type === "link" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                            createBaseVNode("div", _hoisted_48, [
                              createBaseVNode("img", {
                                src: message.avatar,
                                draggable: "false",
                                alt: ""
                              }, null, 8, _hoisted_49)
                            ]),
                            createBaseVNode("div", _hoisted_50, [
                              createVNode(_component_VIconWrap, { icon: "feather:link" }),
                              createBaseVNode("p", _hoisted_51, [
                                createBaseVNode("span", null, toDisplayString(message.content.text), 1),
                                createBaseVNode("a", _hoisted_52, toDisplayString(message.content.subtext), 1)
                              ])
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ], 2);
                      }), 128)),
                      createBaseVNode("li", {
                        class: normalizeClass(["chat-loader", [isLoading.value && "is-active"]])
                      }, _hoisted_54, 2)
                    ]),
                    createBaseVNode("div", {
                      class: normalizeClass([[mobileConversationDetailsOpen.value && "is-mobile-active"], "chat-side"])
                    }, [
                      createBaseVNode("div", _hoisted_55, [
                        createVNode(_component_MessagingToolbar, {
                          onClose: _cache[7] || (_cache[7] = ($event) => mobileConversationDetailsOpen.value = false)
                        })
                      ]),
                      createBaseVNode("div", _hoisted_56, [
                        createBaseVNode("div", _hoisted_57, [
                          createBaseVNode("img", {
                            id: "user-details-image",
                            src: unref(selectedConversation).avatar,
                            alt: "",
                            onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(useViaPlaceholderError)(event, "                            "))
                          }, null, 40, _hoisted_58),
                          createBaseVNode("img", {
                            id: "user-details-badge",
                            class: "is-badge",
                            src: _imports_2$1,
                            alt: "",
                            onErrorOnce: _cache[9] || (_cache[9] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                          }, null, 32)
                        ]),
                        unref(selectedConversation).name ? (openBlock(), createElementBlock("h4", _hoisted_59, toDisplayString(unref(selectedConversation).name), 1)) : createCommentVNode("", true),
                        unref(selectedConversation).lastMessage ? (openBlock(), createElementBlock("p", _hoisted_60, toDisplayString(unref(selectedConversation).lastMessage), 1)) : createCommentVNode("", true),
                        _hoisted_61,
                        createBaseVNode("div", _hoisted_62, [
                          _hoisted_63,
                          createBaseVNode("div", _hoisted_64, [
                            createBaseVNode("img", {
                              src: _imports_3$1,
                              alt: "",
                              onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_4,
                              alt: "",
                              onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_5$1,
                              alt: "",
                              onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_6,
                              alt: "",
                              onErrorOnce: _cache[13] || (_cache[13] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_7,
                              alt: "",
                              onErrorOnce: _cache[14] || (_cache[14] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_8,
                              alt: "",
                              onErrorOnce: _cache[15] || (_cache[15] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_9,
                              alt: "",
                              onErrorOnce: _cache[16] || (_cache[16] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_10,
                              alt: "",
                              onErrorOnce: _cache[17] || (_cache[17] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_11,
                              alt: "",
                              onErrorOnce: _cache[18] || (_cache[18] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_12,
                              alt: "",
                              onErrorOnce: _cache[19] || (_cache[19] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_13,
                              alt: "",
                              onErrorOnce: _cache[20] || (_cache[20] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32),
                            createBaseVNode("img", {
                              src: _imports_14,
                              alt: "",
                              onErrorOnce: _cache[21] || (_cache[21] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                            }, null, 32)
                          ]),
                          _hoisted_65
                        ])
                      ])
                    ], 2)
                  ]),
                  createBaseVNode("div", _hoisted_66, [
                    createBaseVNode("div", _hoisted_67, [
                      createBaseVNode("div", _hoisted_68, [
                        createBaseVNode("div", {
                          ref: (_value, _refs) => {
                            _refs["dropdownElement"] = _value;
                            dropdownElement.value = _value;
                          },
                          class: "dropdown dropdown-trigger is-up"
                        }, [
                          createBaseVNode("div", null, [
                            createBaseVNode("div", {
                              class: "button",
                              "aria-haspopup": "true",
                              onClick: _cache[22] || (_cache[22] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
                            }, _hoisted_70)
                          ]),
                          _hoisted_71
                        ], 512)
                      ]),
                      _hoisted_72,
                      _hoisted_73,
                      _hoisted_74
                    ]),
                    _hoisted_75
                  ])
                ]),
                createBaseVNode("div", _hoisted_76, [
                  createBaseVNode("div", _hoisted_77, [
                    createBaseVNode("img", {
                      src: _imports_16,
                      alt: "",
                      onErrorOnce: _cache[23] || (_cache[23] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32),
                    _hoisted_78
                  ])
                ])
              ])
            ])
          ], 2),
          createBaseVNode("a", {
            class: normalizeClass([[mobileConversationDetailsOpen.value && "is-mobile-active"], "chat-side-fab"]),
            "aria-label": "Close convesation details",
            onClick: _cache[24] || (_cache[24] = ($event) => mobileConversationDetailsOpen.value = !mobileConversationDetailsOpen.value)
          }, _hoisted_80, 2)
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
});
export { _sfc_main as default };
