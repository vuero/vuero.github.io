import { F as useUserSession, i as isDark, t as toggleDarkModeHandler, a as __unplugin_components_0, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, u as useNotyf } from "./index.4d6c8e1a.js";
import { d as defineComponent, r as ref, a as useRouter, ak as useRoute, K as useHead, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, s as withModifiers, B as createTextVNode } from "./vendor.9ec557a4.js";
import { s as sleep } from "./sleep.2a252ff4.js";
const _hoisted_1 = { class: "auth-wrapper-inner is-single" };
const _hoisted_2 = { class: "auth-nav" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, null, -1);
const _hoisted_4 = { class: "center" };
const _hoisted_5 = { class: "right" };
const _hoisted_6 = { class: "dark-mode ml-auto" };
const _hoisted_7 = ["checked"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9 = { class: "single-form-wrap" };
const _hoisted_10 = { class: "inner-wrap" };
const _hoisted_11 = { class: "auth-head" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", null, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC.", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "\u0644\u0637\u0641\u0627 \u0648\u0627\u0631\u062F \u062D\u0633\u0627\u0628 \u06A9\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0634\u0648\u06CC\u062F", -1);
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u0645\u0646 \u062F\u0631\u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0646\u062F\u0627\u0631\u0645 ");
const _hoisted_15 = { class: "form-card" };
const _hoisted_16 = ["onSubmit"];
const _hoisted_17 = { class: "login-form" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "text",
  placeholder: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC",
  autocomplete: "username"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "password",
  placeholder: "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647",
  autocomplete: "current-password"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("label", {
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
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "setting-meta" }, [
  /* @__PURE__ */ createBaseVNode("label", { for: "remember-me" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u06CC\u0627\u062F \u0628\u0633\u067E\u0627\u0631")
  ])
], -1);
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" \u0648\u0631\u0648\u062F ");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "forgot-link has-text-centered" }, [
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
        notif.success("\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632");
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
      title: "\u0648\u0631\u0648\u062F \u06A9\u0627\u0631\u0628\u0631 3 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "header-item"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("label", _hoisted_6, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: !unref(isDark),
                onChange: _cache[0] || (_cache[0] = (...args) => unref(toggleDarkModeHandler) && unref(toggleDarkModeHandler)(...args))
              }, null, 40, _hoisted_7),
              _hoisted_8
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              _hoisted_12,
              _hoisted_13,
              createVNode(_component_RouterLink, { to: { name: "auth-signup-3" } }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("form", {
                onSubmit: withModifiers(handleLogin, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          _hoisted_18
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
                          _hoisted_19
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VControl, { class: "setting-item" }, {
                    default: withCtx(() => [
                      _hoisted_20,
                      _hoisted_21
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VControl, { class: "login" }, {
                    default: withCtx(() => [
                      createVNode(_component_VButton, {
                        loading: isLoading.value,
                        type: "submit",
                        color: "primary",
                        bold: "",
                        fullwidth: "",
                        raised: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_22
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ])
              ], 40, _hoisted_16)
            ]),
            _hoisted_23
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
