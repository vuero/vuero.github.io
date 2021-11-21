import { b as _sfc_main$1, c as __unplugin_components_1, d as _sfc_main$2 } from "./index.4d6c8e1a.js";
import { d as defineComponent, r as ref, m as useWindowScroll, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, n as normalizeClass, t as unref, v as createVNode, x as withCtx, s as withModifiers, B as createTextVNode } from "./vendor.9ec557a4.js";
var FormLayoutSplit_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u062A\u0642\u0627\u0636\u0627\u06CC \u0648\u062C\u0647")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u06A9\u0646\u0633\u0644 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u062A\u0642\u0627\u0636\u0627\u06CC \u0648\u062C\u0647 ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "form-section" };
const _hoisted_10 = { class: "left" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h3", { class: "has-text-centered" }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0645\u0642\u062F\u0627\u0631 \u067E\u0648\u0644", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "operator" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u06CC\u0627")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "radio-pills" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 20
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "100,000 \u062A\u0648\u0645\u0627\u0646")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 40
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "200,000 \u062A\u0648\u0645\u0627\u0646")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 60
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "500,000 \u062A\u0648\u0645\u0627\u0646")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "radio",
      name: "amount_selection",
      value: 100
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "radio-pill-inner" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "1,000,000 \u062A\u0648\u0645\u0627\u0646")
    ])
  ])
], -1);
const _hoisted_14 = { class: "right" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", { class: "has-text-centered" }, "\u0645\u0642\u062F\u0627\u0631 \u062F\u0644\u062E\u0648\u0627\u0647", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "number",
  min: "0",
  step: "10",
  placeholder: "\u0645\u0642\u062F\u0627\u0631 \u067E\u0648\u0644..."
}, null, -1);
const _hoisted_17 = { class: "form-section is-grey" };
const _hoisted_18 = { class: "left" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0627\u0633\u0645 \u06A9\u0648\u0686\u06A9 *",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC *",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("input", {
  type: "email",
  dir: "ltr",
  class: "input",
  placeholder: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 *",
  autocomplete: "email",
  inputmode: "email"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("input", {
  type: "tel",
  dir: "ltr",
  class: "input",
  placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633 *",
  autocomplete: "tel",
  inputmode: "tel"
}, null, -1);
const _hoisted_24 = { class: "right" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("h3", null, "\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u062F\u0627\u062E\u062A", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("label", null, "\u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645 \u0632\u0645\u0627\u0646 \u067E\u0631\u062F\u0627\u062E\u062A \u0634\u062F\u0646 \u067E\u0648\u0644", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("label", { class: "radio" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "radio",
    name: "notification_selection",
    checked: ""
  }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" \u0628\u0644\u0647 ")
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("label", { class: "radio is-outlined is-primary" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "radio",
    name: "notification_selection"
  }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" \u062E\u06CC\u0631 ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const bankAccount = ref("");
    const transferFees = ref("");
    const { y } = useWindowScroll();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_Multiselect = resolveComponent("Multiselect");
      return openBlock(), createElementBlock("form", {
        class: "form-layout is-split",
        onSubmit: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: normalizeClass([[unref(isStuck) && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_VButton, {
                    icon: "lnir lnir-arrow-right rem-100",
                    to: { name: "sidebar-layouts-profile-view" },
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
                    raised: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                _hoisted_11,
                _hoisted_12,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
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
                _hoisted_15,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:dollar-sign" }, {
                      default: withCtx(() => [
                        _hoisted_16
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        _hoisted_20
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
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
                    createVNode(_component_VControl, { icon: "feather:mail" }, {
                      default: withCtx(() => [
                        _hoisted_22
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:phone" }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_24, [
                _hoisted_25,
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: bankAccount.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => bankAccount.value = $event),
                          placeholder: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC",
                          options: ["4222", "1229"]
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
                        createVNode(_component_Multiselect, {
                          modelValue: transferFees.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => transferFees.value = $event),
                          placeholder: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC",
                          options: ["\u062D\u0633\u0627\u0628 \u0645\u0633\u062A\u0631 \u06A9\u0627\u0631\u062A - $3.00 \u0647\u0632\u06CC\u0646\u0647 \u0634\u0627\u0631\u0698", "\u062D\u0633\u0627\u0628 \u0648\u06CC\u0632\u0627 - $0.50 \u0647\u0632\u06CC\u0646\u0647 \u0634\u0627\u0631\u0698"]
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    _hoisted_26,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        _hoisted_27,
                        _hoisted_28
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
      ], 32);
    };
  }
});
export { _sfc_main as _ };
