import { a as __unplugin_components_0, c as __unplugin_components_1, d as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { d as defineComponent, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, F as renderSlot, n as normalizeClass, t as unref, r as ref, G as Fragment, J as renderList, ao as normalizeProps, ap as guardReactiveProps, E as toDisplayString, D as createCommentVNode, y as withDirectives, I as vModelText } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$2 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$4 } from "./VIconBox.e1985867.js";
import { _ as _sfc_main$5 } from "./VBlock.47e0c633.js";
import { _ as _sfc_main$6 } from "./UserPopoverContent.8933a73e.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
var Sidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "sidebar-brand" };
const _hoisted_2$1 = { class: "sidebar-inner" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "naver" }, null, -1);
const _hoisted_4$1 = { class: "icon-menu has-slimscroll" };
const _hoisted_5$1 = { class: "bottom-menu" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "default" },
    isOpen: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const themeClasses = computed(() => {
      switch (props.theme) {
        case "color":
          return "is-colored";
        case "labels":
          return "has-labels";
        case "labels-hover":
          return "has-labels-hover";
        case "float":
          return !props.isOpen ? "is-float" : "is-float is-bordered";
        case "curved":
          return !props.isOpen ? "is-curved" : "";
        case "color-curved":
          return !props.isOpen ? "is-colored is-curved" : "is-colored";
        default:
          return "";
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["main-sidebar", [unref(themeClasses)]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_RouterLink, { to: { name: "index" } }, {
            default: withCtx(() => [
              createVNode(_component_AnimatedLogo, { width: "36px" })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("ul", _hoisted_4$1, [
            renderSlot(_ctx.$slots, "links")
          ]),
          createBaseVNode("ul", _hoisted_5$1, [
            renderSlot(_ctx.$slots, "bottom-links")
          ])
        ])
      ], 2);
    };
  }
});
var SearchPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "right-panel" };
const _hoisted_2 = { class: "right-panel-head" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { class: "right-panel-body has-slimscroll" };
const _hoisted_6 = {
  key: 0,
  class: "is-active search-results has-slimscroll"
};
const _hoisted_7 = { class: "meta" };
const _hoisted_8 = { class: "recent" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u062E\u06CC\u0631\u0627 \u0628\u0627\u0632\u062F\u06CC\u062F \u0634\u062F\u0647", -1);
const _hoisted_10 = { class: "recent-block" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chrome"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:tv"
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:twitter"
}, null, -1);
const _hoisted_14 = { class: "recent" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0639\u0636\u0627\u06CC \u062C\u062F\u06CC\u062F", -1);
const _hoisted_16 = { class: "recent-block" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filter = ref("");
    const filteredData = computed(() => {
      if (!filter.value) {
        return [];
      }
      return Object.values(popovers).filter((user) => {
        return user.fullName.match(new RegExp(filter.value, "i")) || user.position.match(new RegExp(filter.value, "i"));
      });
    });
    function getAvatarData(user) {
      return {
        picture: user.avatar,
        initials: user.initials,
        color: user.color
      };
    }
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_VAvatar = _sfc_main$2;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VIconBox = _sfc_main$4;
      const _component_VBlock = _sfc_main$5;
      const _component_UserPopoverContent = _sfc_main$6;
      const _component_tippy = resolveComponent("tippy");
      return openBlock(), createElementBlock("div", {
        id: "search-panel",
        class: normalizeClass([[unref(activePanel) === "search" && "is-active"], "right-panel-wrapper is-search is-right"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "none")
        }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_AnimatedLogo, {
              width: "38px",
              height: "38px"
            }),
            createBaseVNode("a", {
              class: "close-panel",
              onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "none")
            }, _hoisted_4)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  extra: withCtx(() => [
                    unref(filteredData).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (user) => {
                        return openBlock(), createElementBlock("div", {
                          key: user.id,
                          class: "search-result"
                        }, [
                          createVNode(_component_VAvatar, normalizeProps(guardReactiveProps(getAvatarData(user))), null, 16),
                          createBaseVNode("div", _hoisted_7, [
                            createBaseVNode("span", null, toDisplayString(user.username), 1),
                            createBaseVNode("span", null, toDisplayString(user.position), 1)
                          ])
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filter.value = $event),
                      type: "text",
                      class: "input is-rounded search-input",
                      placeholder: "\u062C\u0633\u062A\u062C\u0648..."
                    }, null, 512), [
                      [vModelText, filter.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_8, [
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VBlock, {
                  title: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u0631\u0648\u0631\u06AF\u0631\u0647\u0627",
                  subtitle: "\u0645\u0637\u0644\u0628 \u0648\u0628\u0644\u0627\u06AF\u06CC",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      size: "small",
                      color: "info",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "API \u062A\u0648\u0626\u06CC\u062A\u0631",
                  subtitle: "\u0645\u0637\u0644\u0628 \u0648\u0628\u0644\u0627\u06AF\u06CC",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      size: "small",
                      color: "orange",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_12
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u0631\u0648\u0631\u06AF\u0631\u0647\u0627",
                  subtitle: "\u0645\u0637\u0644\u0628 \u0648\u0628\u0644\u0627\u06AF\u06CC",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      size: "small",
                      color: "green",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_13
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              _hoisted_15,
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_VBlock, {
                  title: "\u0622\u0644\u06CC\u0633",
                  subtitle: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user7
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/7.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
                  subtitle: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user13
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/13.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u062C\u06CC\u0645\u06CC",
                  subtitle: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user22
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/demo/avatars/22.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main$1 as _, _sfc_main as a };
