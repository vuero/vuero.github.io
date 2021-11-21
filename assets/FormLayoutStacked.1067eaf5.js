import { b as _sfc_main$1, c as __unplugin_components_1, d as _sfc_main$2 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$4 } from "./UserPopoverContent.8933a73e.js";
import { d as defineComponent, r as ref, ah as momentJalaali, m as useWindowScroll, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, n as normalizeClass, t as unref, v as createVNode, x as withCtx, E as toDisplayString, B as createTextVNode } from "./vendor.9ec557a4.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
var FormLayoutStacked_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "form-layout is-stacked" };
const _hoisted_2 = { class: "form-outer" };
const _hoisted_3 = { class: "form-header-inner" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u06CC\u06A9 \u0642\u0631\u0627\u0631 \u0645\u0644\u0627\u0642\u0627\u062A \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_5 = { class: "right" };
const _hoisted_6 = { class: "buttons" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u06A9\u0646\u0633\u0644 ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC ");
const _hoisted_9 = { class: "form-body" };
const _hoisted_10 = { class: "form-section" };
const _hoisted_11 = { class: "columns is-multiline" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0639\u0646\u0648\u0627\u0646\u06CC \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u062F\u06CC\u062F\u0627\u0631 \u0645\u0634\u062E\u0635 \u06A9\u0646\u06CC\u062F"
}, null, -1);
const _hoisted_14 = { class: "column is-4" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", null, "\u062A\u0627\u0631\u06CC\u062E \u062F\u06CC\u062F\u0627\u0631", -1);
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("label", null, "\u0632\u0645\u0627\u0646 \u0634\u0631\u0648\u0639", -1);
const _hoisted_18 = { class: "column is-4" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", null, "\u0632\u0645\u0627\u0646 \u067E\u0627\u06CC\u0627\u0646", -1);
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "checkbox",
    checked: ""
  }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" \u0647\u0645\u0647 \u0631\u0648\u0632\u0647 ")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox is-outlined is-primary" }, [
  /* @__PURE__ */ createBaseVNode("input", { type: "checkbox" }),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createTextVNode(" \u0647\u0631 \u0647\u0641\u062A\u0647 \u062A\u06A9\u0631\u0627\u0631 \u0634\u0648\u062F ")
], -1);
const _hoisted_23 = { class: "form-section is-grey" };
const _hoisted_24 = { class: "form-section-header" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u062C\u0632\u0626\u06CC\u0627\u062A \u0645\u0644\u0627\u0642\u0627\u062A")
], -1);
const _hoisted_26 = { class: "right" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0641\u0631\u0627\u062F ");
const _hoisted_28 = { class: "form-section-inner is-horizontal" };
const _hoisted_29 = { class: "field is-horizontal" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "\u0634\u0631\u06A9\u062A \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
], -1);
const _hoisted_31 = { class: "field-body" };
const _hoisted_32 = { class: "participants" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("button", { class: "add-participant" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  })
], -1);
const _hoisted_34 = { class: "field is-horizontal" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "\u06A9\u062C\u0627")
], -1);
const _hoisted_36 = { class: "field-body" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "text",
  placeholder: "\u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062B\u0627\u0644 \u0627\u062A\u0627\u0642 \u06A9\u0646\u0641\u0631\u0627\u0646\u0633"
}, null, -1);
const _hoisted_38 = { class: "field is-horizontal" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "\u0622\u062F\u0631\u0633 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A")
], -1);
const _hoisted_40 = { class: "field-body" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input",
  type: "url",
  placeholder: "https://zoom.com/m/156546",
  inputmode: "url"
}, null, -1);
const _hoisted_42 = { class: "field is-horizontal" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "\u062A\u0642\u0648\u06CC\u0645")
], -1);
const _hoisted_44 = { class: "field-body" };
const _hoisted_45 = { class: "field is-horizontal" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A")
], -1);
const _hoisted_47 = { class: "field-body" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("textarea", {
  class: "textarea",
  rows: "4",
  placeholder: "\u062F\u0631 \u0645\u0648\u0631\u062F \u0647\u0631 \u06AF\u0648\u0646\u0647 \u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0647 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0645\u0627 \u0628\u062F\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0645\u0627 \u0628\u06AF\u0648\u06CC\u06CC\u062F...",
  autocomplete: "off",
  autocapitalize: "off",
  spellcheck: "true"
}, null, -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("a", { class: "add-link" }, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0636\u0645\u06CC\u0645\u0647", -1);
const _hoisted_50 = { class: "form-section is-grey" };
const _hoisted_51 = { class: "form-section-inner is-horizontal" };
const _hoisted_52 = { class: "field is-horizontal" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "\u06A9\u062F \u0631\u0646\u06AF")
], -1);
const _hoisted_54 = { class: "field-body" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("div", { class: "color-codes" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "color-code is-primary" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "color-code is-secondary" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "color-code is-info" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "color-code is-success" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "color-code is-purple" })
], -1);
const _hoisted_56 = { class: "field is-horizontal" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "field-label is-normal" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A")
], -1);
const _hoisted_58 = { class: "field-body" };
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("a", { class: "add-link" }, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0639\u0644\u0627\u0646\u0627\u062A", -1);
const _hoisted_60 = { class: "multiselect-single-label" };
const _hoisted_61 = ["src"];
const _hoisted_62 = { class: "select-label-text" };
const _hoisted_63 = ["src"];
const _hoisted_64 = { class: "select-label-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const calendarTarget = ref("");
    const notificationMedium = ref("");
    const notificationTarget = ref("");
    const date = ref({
      start: momentJalaali().format("jYYYY-jMM-jDD"),
      end: momentJalaali().format("jYYYY-jMM-jDD")
    });
    const { y } = useWindowScroll();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_date_picker = resolveComponent("date-picker");
      const _component_VAvatar = _sfc_main$3;
      const _component_UserPopoverContent = _sfc_main$4;
      const _component_tippy = resolveComponent("tippy");
      const _component_Multiselect = resolveComponent("Multiselect");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass([[unref(isStuck) && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VButton, {
                    icon: "lnir lnir-arrow-right rem-100",
                    to: { name: "sidebar-layouts-profile-view" },
                    light: "",
                    "dark-outlined": ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    color: "primary",
                    raised: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { icon: "feather:slack" }, {
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
                      _hoisted_15,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_date_picker, {
                            modelValue: date.value.start,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => date.value.start = $event),
                            class: "control",
                            "auto-submit": "",
                            format: "jYYYY/jMM/jDD"
                          }, null, 8, ["modelValue"])
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
                      _hoisted_17,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_date_picker, {
                            class: "control",
                            type: "time",
                            "auto-submit": ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_19,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_date_picker, {
                            class: "control",
                            type: "time",
                            "auto-submit": ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          _hoisted_21,
                          _hoisted_22
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("div", _hoisted_24, [
                _hoisted_25,
                createBaseVNode("div", _hoisted_26, [
                  createVNode(_component_VButton, { "dark-outlined": "" }, {
                    default: withCtx(() => [
                      _hoisted_27
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  _hoisted_30,
                  createBaseVNode("div", _hoisted_31, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_32, [
                              createVNode(_component_tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user8
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, { picture: "/images/avatars/svg/vuero-1.svg" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user122
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, {
                                    color: "warning",
                                    initials: "BT"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user18
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, { picture: "/demo/avatars/18.jpg" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user123
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, {
                                    color: "info",
                                    initials: "JD"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_tippy, {
                                class: "has-help-cursor",
                                interactive: "",
                                placement: "top-start"
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_UserPopoverContent, {
                                    user: unref(popovers).user7
                                  }, null, 8, ["user"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_VAvatar, { picture: "/demo/avatars/7.jpg" })
                                ]),
                                _: 1
                              }),
                              _hoisted_33
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_34, [
                  _hoisted_35,
                  createBaseVNode("div", _hoisted_36, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                          default: withCtx(() => [
                            _hoisted_37
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_38, [
                  _hoisted_39,
                  createBaseVNode("div", _hoisted_40, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                          default: withCtx(() => [
                            _hoisted_41
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_42, [
                  _hoisted_43,
                  createBaseVNode("div", _hoisted_44, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: calendarTarget.value,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => calendarTarget.value = $event),
                              placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0642\u0648\u06CC\u0645",
                              options: ["\u062A\u0642\u0648\u0628\u0645 \u0645\u0646", "\u062A\u0642\u0648\u06CC\u0645 \u062A\u06CC\u0645", "\u062A\u0642\u0648\u06CC\u0645 \u0634\u0631\u06A9\u062A"]
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_45, [
                  _hoisted_46,
                  createBaseVNode("div", _hoisted_47, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            _hoisted_48,
                            _hoisted_49
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_50, [
              createBaseVNode("div", _hoisted_51, [
                createBaseVNode("div", _hoisted_52, [
                  _hoisted_53,
                  createBaseVNode("div", _hoisted_54, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            _hoisted_55
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_56, [
                  _hoisted_57,
                  createBaseVNode("div", _hoisted_58, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: notificationMedium.value,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => notificationMedium.value = $event),
                              placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0627\u0646\u0627\u0644 \u0627\u0631\u062A\u0628\u0627\u0637\u06CC",
                              options: ["\u0627\u06CC\u0645\u06CC\u0644", "\u0627\u0633 \u0627\u0645 \u0627\u0633", "\u0627\u0633\u0644\u06A9", "\u0628\u0648\u0631\u062F \u067E\u0631\u0648\u0698\u0647"]
                            }, null, 8, ["modelValue"]),
                            _hoisted_59
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VField, { class: "is-image-select" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: notificationTarget.value,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => notificationTarget.value = $event),
                              placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0645\u0648\u0631\u062F",
                              label: "name",
                              value: "name",
                              options: [
                                {
                                  name: "\u0647\u0645\u0647",
                                  value: "",
                                  icon: "/images/avatars/placeholder.jpg"
                                },
                                {
                                  name: "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
                                  value: "eric",
                                  icon: "/images/avatars/svg/vuero-1.svg"
                                },
                                {
                                  name: "\u0622\u0631\u0646\u0648\u0644\u062F \u0627\u06CC\u0646\u0634\u062A\u06CC\u0646",
                                  value: "joshua",
                                  icon: "/demo/avatars/12.jpg"
                                },
                                {
                                  name: "\u0645\u0644\u0627\u0646\u06CC",
                                  value: "melany",
                                  icon: "/demo/avatars/25.jpg"
                                },
                                {
                                  name: "\u0622\u0644\u06CC\u0633",
                                  value: "alice",
                                  icon: "/demo/avatars/7.jpg"
                                },
                                {
                                  name: "\u0628\u06CC\u0644 \u06AF\u06CC\u062A\u0633",
                                  value: "esteban",
                                  icon: "/demo/avatars/18.jpg"
                                }
                              ]
                            }, {
                              singlelabel: withCtx(({ value }) => [
                                createBaseVNode("div", _hoisted_60, [
                                  createBaseVNode("img", {
                                    class: "select-label-icon",
                                    src: value.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_61),
                                  createBaseVNode("span", _hoisted_62, toDisplayString(value.name), 1)
                                ])
                              ]),
                              option: withCtx(({ option }) => [
                                createBaseVNode("img", {
                                  class: "select-option-icon",
                                  src: option.icon,
                                  alt: ""
                                }, null, 8, _hoisted_63),
                                createBaseVNode("span", _hoisted_64, toDisplayString(option.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"])
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
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
