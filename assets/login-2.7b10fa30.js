import { F as useUserSession, i as isDark, t as toggleDarkModeHandler, a as __unplugin_components_0, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, u as useNotyf } from "./index.4d6c8e1a.js";
import { d as defineComponent, r as ref, a as useRouter, ak as useRoute, K as useHead, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, t as unref, v as createVNode, x as withCtx, s as withModifiers, B as createTextVNode } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1 } from "./vuero-banking-dark.5abbd6fb.js";
import { s as sleep } from "./sleep.2a252ff4.js";
const _hoisted_1 = { class: "auth-wrapper-inner columns is-gapless" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "hero login-hero is-fullheight is-app-grey" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "hero-body" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-10 is-offset-1" }, [
          /* @__PURE__ */ createBaseVNode("img", {
            class: "light-image has-light-shadow has-light-border",
            src: _imports_0,
            alt: ""
          }),
          /* @__PURE__ */ createBaseVNode("img", {
            class: "dark-image has-light-shadow",
            src: _imports_1,
            alt: ""
          })
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "hero-footer" }, [
      /* @__PURE__ */ createBaseVNode("p", { class: "has-text-centered" })
    ])
  ])
], -1);
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "hero is-fullheight is-white" };
const _hoisted_5 = { class: "hero-heading" };
const _hoisted_6 = { class: "dark-mode ml-auto" };
const _hoisted_7 = ["checked"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9 = { class: "auth-logo" };
const _hoisted_10 = { class: "hero-body" };
const _hoisted_11 = { class: "container" };
const _hoisted_12 = { class: "columns" };
const _hoisted_13 = { class: "column is-12" };
const _hoisted_14 = { class: "auth-content" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h2", null, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC.", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", null, "\u0644\u0637\u0641\u0627 \u0648\u0627\u0631\u062F \u062D\u0633\u0627\u0628 \u06A9\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0634\u0648\u06CC\u062F", -1);
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" \u0645\u0646 \u062F\u0631\u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0646\u062F\u0627\u0631\u0645 ");
const _hoisted_18 = { class: "auth-form-wrapper" };
const _hoisted_19 = ["onSubmit"];
const _hoisted_20 = { class: "login-form" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "text",
  placeholder: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC",
  autocomplete: "username"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "password",
  placeholder: "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647",
  autocomplete: "current-password"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("label", {
  for: "remember-me",
  class: "form-switch is-primary"
}, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "remember-me",
    type: "checkbox",
    class: "is-switch"
  }),
  /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "setting-meta" }, [
  /* @__PURE__ */ createBaseVNode("label", { for: "remember-me" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u06CC\u0627\u062F \u0628\u0633\u067E\u0627\u0631")
  ])
], -1);
const _hoisted_25 = /* @__PURE__ */ createTextVNode(" \u0648\u0631\u0648\u062F ");
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "forgot-link has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("a", null, "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u06AF\u0630\u0631\u0648\u0627\u0698\u0647")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoading = ref(false);
    const router = useRouter();
    const route = useRoute();
    const notif = useNotyf();
    const userSession = useUserSession();
    const redirect = route.query.redirect;
    const handleLogin = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        await sleep(2e3);
        userSession.setToken("logged-in");
        notif.dismissAll();
        notif.success("\u0686\u0647 \u062E\u0648\u0628 \u0634\u062F \u0628\u0631\u06AF\u0634\u062A\u06CC\u060C \u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632");
        if (redirect) {
          router.push(redirect);
        } else {
          router.push({
            name: "app"
          });
        }
        isLoading.value = false;
      }
    };
    useHead({
      title: "\u0648\u0631\u0648\u062F \u06A9\u0627\u0631\u0628\u0631 2 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("label", _hoisted_6, [
                createBaseVNode("input", {
                  type: "checkbox",
                  checked: !unref(isDark),
                  onChange: _cache[0] || (_cache[0] = (...args) => unref(toggleDarkModeHandler) && unref(toggleDarkModeHandler)(...args))
                }, null, 40, _hoisted_7),
                _hoisted_8
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_RouterLink, { to: { name: "index" } }, {
                  default: withCtx(() => [
                    createVNode(_component_AnimatedLogo, {
                      width: "36px",
                      height: "36px"
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      _hoisted_15,
                      _hoisted_16,
                      createVNode(_component_RouterLink, { to: { name: "auth-signup-2" } }, {
                        default: withCtx(() => [
                          _hoisted_17
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleLogin, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_20, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  _hoisted_21
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:lock" }, {
                                default: withCtx(() => [
                                  _hoisted_22
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "setting-item" }, {
                            default: withCtx(() => [
                              _hoisted_23,
                              _hoisted_24
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "login" }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                loading: isLoading.value,
                                color: "primary",
                                type: "submit",
                                bold: "",
                                fullwidth: "",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_25
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }),
                          _hoisted_26
                        ])
                      ], 40, _hoisted_19)
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
