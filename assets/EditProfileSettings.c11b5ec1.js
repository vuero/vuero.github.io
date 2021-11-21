import { b as _sfc_main$1, c as __unplugin_components_1, d as _sfc_main$2, u as useNotyf } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VSwitchBlock.430faaeb.js";
import { d as defineComponent, m as useWindowScroll, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, n as normalizeClass, t as unref, D as createCommentVNode, s as withModifiers, B as createTextVNode } from "./vendor.9ec557a4.js";
import { s as sleep } from "./sleep.2a252ff4.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u067E\u06CC\u0634 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u0628\u0631\u06AF\u0634\u062A ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A ");
const _hoisted_8 = ["onSubmit"];
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u062A\u063A\u06CC\u06CC\u0631 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0628\u0631\u0627\u06CC \u0627\u0641\u0632\u0627\u06CC\u0634 \u0627\u0645\u0646\u06CC\u062A \u062D\u0633\u0627\u0628")
], -1);
const _hoisted_11 = { class: "columns is-multiline" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  placeholder: "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647 \u0642\u0628\u0644\u06CC",
  autocomplete: "current-password"
}, null, -1);
const _hoisted_14 = { class: "column is-12" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  placeholder: "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647 \u062C\u062F\u06CC\u062F",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_16 = { class: "column is-12" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  placeholder: "\u062A\u06A9\u0631\u0627\u0631 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647 \u062C\u062F\u06CC\u062F",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_18 = { class: "fieldset" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0648\u0631\u0648\u062F \u06F2 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0641\u0639\u0627\u0644 \u06CC\u0627 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u0648\u0631\u0648\u062F \u06F2 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC")
], -1);
const _hoisted_20 = { class: "columns is-multiline" };
const _hoisted_21 = { class: "column is-12" };
const _hoisted_22 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633",
  autocomplete: "tel",
  inputmode: "tel"
}, null, -1);
const _hoisted_24 = { class: "fieldset" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0646\u062D\u0648\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0639\u0644\u0627\u0646 \u0647\u0627 \u0631\u0627 \u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-12" };
const _hoisted_28 = { class: "fieldset" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0646\u062D\u0648\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0628\u0644\u06CC\u063A\u0627\u062A \u0631\u0627 \u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_30 = { class: "columns is-multiline" };
const _hoisted_31 = { class: "column is-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isLoading = ref(false);
    const twoFactor = ref(true);
    const notifications = ref(false);
    const notificationsLow = ref(false);
    const marketing = ref(false);
    const partners = ref(false);
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VSwitchBlock = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  to: { name: "sidebar-layouts-profile-view" },
                  icon: "lnir lnir-arrow-right rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  onClick: onSave
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("form", {
          class: "form-body",
          onSubmit: withModifiers(onSave, ["prevent"])
        }, [
          createBaseVNode("div", _hoisted_9, [
            _hoisted_10,
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:unlock" }, {
                      default: withCtx(() => [
                        _hoisted_13
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:lock" }, {
                      default: withCtx(() => [
                        _hoisted_15
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:lock" }, {
                      default: withCtx(() => [
                        _hoisted_17
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_18, [
            _hoisted_19,
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: twoFactor.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => twoFactor.value = $event),
                          label: "\u0641\u0639\u0627\u0644 \u06CC\u0627 \u063A\u06CC\u0631 \u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u06F2 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              twoFactor.value ? (openBlock(), createElementBlock("div", _hoisted_22, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:smartphone" }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            _hoisted_25,
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: notifications.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => notifications.value = $event),
                          label: "\u0647\u0645\u0647 \u0627\u0639\u0644\u0627\u0646 \u0647\u0627 \u0631\u0627 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0646\u06CC\u062F",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: notificationsLow.value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => notificationsLow.value = $event),
                          label: "\u0627\u0639\u0644\u0627\u0646 \u0647\u0627\u06CC \u062F\u0627\u0631\u0627\u06CC \u0627\u0648\u0644\u0648\u06CC\u062A \u067E\u0627\u06CC\u06CC\u0646 \u0631\u0627 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0646\u06CC\u062F",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_28, [
            _hoisted_29,
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: marketing.value,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => marketing.value = $event),
                          label: "\u0627\u06CC\u0645\u06CC\u0644 \u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC \u0631\u0627 \u0641\u0639\u0627\u0644 \u06A9\u0646\u06CC\u062F",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VSwitchBlock, {
                          modelValue: partners.value,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => partners.value = $event),
                          label: "\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u0647\u0627\u06CC \u0634\u0631\u06A9\u0627",
                          color: "primary"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ], 40, _hoisted_8)
      ]);
    };
  }
});
export { _sfc_main as _ };
