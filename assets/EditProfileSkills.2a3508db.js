import { b as _sfc_main$1, c as __unplugin_components_1, d as _sfc_main$2, u as useNotyf } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VIconWrap.809aa90c.js";
import { _ as __unplugin_components_4 } from "./EditSettingItemDropdown.7e81545e.js";
import { d as defineComponent, m as useWindowScroll, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, n as normalizeClass, t as unref, s as withModifiers, E as toDisplayString, G as Fragment, B as createTextVNode } from "./vendor.9ec557a4.js";
import { s as sleep } from "./sleep.2a252ff4.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u0645\u0647\u0627\u0631\u062A\u0647\u0627 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0645\u0647\u0627\u0631\u062A \u0647\u0627 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u0628\u0631\u06AF\u0634\u062A ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0632\u0628\u0627\u0646\u200C\u0647\u0627", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "\u0634\u0645\u0627 \u0628\u0647 \u0686\u0646\u062F \u0632\u0628\u0627\u0646 \u0635\u062D\u0628\u062A \u0645\u06CC \u06A9\u0646\u06CC\u062F\u061F", -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_15 = { class: "setting-list" };
const _hoisted_16 = ["onSubmit"];
const _hoisted_17 = { class: "field-wrap" };
const _hoisted_18 = { class: "columns is-multiline" };
const _hoisted_19 = { class: "column is-6" };
const _hoisted_20 = { class: "multiselect-single-label" };
const _hoisted_21 = ["src"];
const _hoisted_22 = { class: "select-label-text" };
const _hoisted_23 = ["src"];
const _hoisted_24 = { class: "select-label-text" };
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = { class: "column is-12" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u06CC\u06A9 \u0646\u0638\u0631 \u0633\u0631\u06CC\u0639 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
  autocomplete: "off"
}, null, -1);
const _hoisted_28 = { class: "column is-12" };
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u0632\u0628\u0627\u0646 ");
const _hoisted_30 = { class: "setting-item" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06AF\u0648\u06CC\u0646\u062F\u0647 \u0628\u0648\u0645\u06CC \u060C \u0631\u0648\u0627\u0646")
], -1);
const _hoisted_32 = { class: "end" };
const _hoisted_33 = { class: "setting-item" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0641\u0631\u0627\u0646\u0633\u0648\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0631\u0648\u0627\u0646 \u060C \u0645\u06A9\u062A\u0648\u0628 \u0648 \u06AF\u0641\u062A\u0627\u0631\u06CC")
], -1);
const _hoisted_35 = { class: "end" };
const _hoisted_36 = { class: "setting-item" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0622\u0644\u0645\u0627\u0646\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u0645\u0628\u062A\u062F\u06CC")
], -1);
const _hoisted_38 = { class: "end" };
const _hoisted_39 = { class: "setting-item" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627\u06CC\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u0645\u0628\u062A\u062F\u06CC")
], -1);
const _hoisted_41 = { class: "end" };
const _hoisted_42 = { class: "setting-item is-create" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06CC\u06A9 \u0645\u0648\u0631\u062F \u0632\u0628\u0627\u0646 \u062C\u062F\u06CC\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_44 = { class: "end" };
const _hoisted_45 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 ");
const _hoisted_46 = { class: "fieldset" };
const _hoisted_47 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627", -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, "\u0628\u0647\u062A\u0631\u06CC\u0646 \u0645\u0647\u0627\u0631\u062A \u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F", -1);
const _hoisted_50 = [
  _hoisted_48,
  _hoisted_49
];
const _hoisted_51 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_52 = { class: "setting-list" };
const _hoisted_53 = ["onSubmit"];
const _hoisted_54 = { class: "field-wrap" };
const _hoisted_55 = { class: "columns is-multiline" };
const _hoisted_56 = { class: "column is-6" };
const _hoisted_57 = { class: "multiselect-single-label" };
const _hoisted_58 = ["src"];
const _hoisted_59 = { class: "select-label-text" };
const _hoisted_60 = ["src"];
const _hoisted_61 = { class: "select-label-text" };
const _hoisted_62 = { class: "column is-6" };
const _hoisted_63 = { class: "column is-12" };
const _hoisted_64 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u0645\u0647\u0627\u0631\u062A ");
const _hoisted_65 = { class: "setting-item" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062C\u0627\u0648\u0627 \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"),
  /* @__PURE__ */ createBaseVNode("span", null, "7 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647")
], -1);
const _hoisted_67 = { class: "end" };
const _hoisted_68 = { class: "setting-item" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Html5"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647")
], -1);
const _hoisted_70 = { class: "end" };
const _hoisted_71 = { class: "setting-item" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "CSS3"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647")
], -1);
const _hoisted_73 = { class: "end" };
const _hoisted_74 = { class: "setting-item is-create" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0645\u0648\u0631\u062F \u0645\u0647\u0627\u0631\u062A \u062C\u062F\u06CC\u062F")
], -1);
const _hoisted_76 = { class: "end" };
const _hoisted_77 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 ");
const _hoisted_78 = { class: "fieldset" };
const _hoisted_79 = {
  key: 0,
  class: "fieldset-heading"
};
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0628\u0632\u0627\u0631", -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC\u06CC \u0631\u0627 \u06A9\u0647 \u0628\u0627 \u0622\u0646\u0647\u0627 \u06A9\u0627\u0631 \u0645\u06CC \u06A9\u0646\u06CC\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F", -1);
const _hoisted_82 = [
  _hoisted_80,
  _hoisted_81
];
const _hoisted_83 = {
  key: 1,
  class: "fieldset-heading"
};
const _hoisted_84 = { class: "setting-list" };
const _hoisted_85 = ["onSubmit"];
const _hoisted_86 = { class: "field-wrap" };
const _hoisted_87 = { class: "columns is-multiline" };
const _hoisted_88 = { class: "column is-6" };
const _hoisted_89 = { class: "multiselect-single-label" };
const _hoisted_90 = ["src"];
const _hoisted_91 = { class: "select-label-text" };
const _hoisted_92 = ["src"];
const _hoisted_93 = { class: "select-label-text" };
const _hoisted_94 = { class: "column is-6" };
const _hoisted_95 = { class: "column is-12" };
const _hoisted_96 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0628\u0632\u0627\u0631 ");
const _hoisted_97 = { class: "setting-item" };
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u067E\u06CC\u0634\u0631\u0641\u062A\u0647")
], -1);
const _hoisted_99 = { class: "end" };
const _hoisted_100 = { class: "setting-item" };
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u062C\u06CC\u0631\u0627"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u0645\u062A\u0648\u0633\u0637")
], -1);
const _hoisted_102 = { class: "end" };
const _hoisted_103 = { class: "setting-item" };
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0622\u0641\u06CC\u0633"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u062A\u062E\u0635\u0635\u06CC")
], -1);
const _hoisted_105 = { class: "end" };
const _hoisted_106 = { class: "setting-item is-create" };
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0648\u0631\u062F \u0627\u0628\u0632\u0627\u0631 \u062C\u062F\u06CC\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_108 = { class: "end" };
const _hoisted_109 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isLoading = ref(false);
    const isEditingLanguages = ref(false);
    const isEditingSkills = ref(false);
    const isEditingTools = ref(false);
    const selectedLanguage = ref("");
    const selectedLanguageLevel = ref("");
    const selectedSkill = ref("");
    const selectedSkillLevel = ref("");
    const selectedTool = ref("");
    const selectedToolLevel = ref("");
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const addLanguage = async () => {
      isEditingLanguages.value = false;
      await onSave();
      selectedLanguage.value = "";
      selectedLanguageLevel.value = "";
    };
    const addSkill = async () => {
      isEditingSkills.value = false;
      await onSave();
      selectedSkill.value = "";
      selectedSkillLevel.value = "";
    };
    const addTool = async () => {
      isEditingTools.value = false;
      await onSave();
      selectedTool.value = "";
      selectedToolLevel.value = "";
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$2;
      const _component_VIconWrap = _sfc_main$3;
      const _component_EditSettingItemDropdown = __unplugin_components_4;
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
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            !isEditingLanguages.value ? (openBlock(), createElementBlock("div", _hoisted_10, _hoisted_13)) : (openBlock(), createElementBlock("div", _hoisted_14, [
              createBaseVNode("a", {
                class: "action-link",
                onClick: _cache[0] || (_cache[0] = ($event) => isEditingLanguages.value = false)
              }, "\u06A9\u0646\u0633\u0644")
            ])),
            createBaseVNode("div", _hoisted_15, [
              isEditingLanguages.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addLanguage, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedLanguage.value,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedLanguage.value = $event),
                                placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646",
                                label: "name",
                                options: [
                                  {
                                    value: "persian",
                                    name: "\u0641\u0627\u0631\u0633\u06CC",
                                    icon: "/images/icons/flags/iran.svg"
                                  },
                                  {
                                    value: "english",
                                    name: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
                                    icon: "/images/icons/flags/united-states-of-america.svg"
                                  },
                                  {
                                    value: "french",
                                    name: "\u0641\u0631\u0627\u0646\u0633\u0648\u06CC",
                                    icon: "/images/icons/flags/france.svg"
                                  },
                                  {
                                    value: "german",
                                    name: "\u0622\u0644\u0645\u0627\u0646\u06CC",
                                    icon: "/images/icons/flags/germany.svg"
                                  },
                                  {
                                    value: "spanish",
                                    name: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627\u06CC\u06CC",
                                    icon: "/images/icons/flags/spain.svg"
                                  }
                                ]
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_20, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_21),
                                    createBaseVNode("span", _hoisted_22, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_23),
                                  createBaseVNode("span", _hoisted_24, toDisplayString(option.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedLanguageLevel.value,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedLanguageLevel.value = $event),
                                placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0633\u0637\u062D \u062E\u0648\u062F",
                                options: [
                                  {
                                    value: "1",
                                    label: "\u0633\u0637\u062D 1"
                                  },
                                  {
                                    value: "2",
                                    label: "\u0633\u0637\u062D 2"
                                  },
                                  {
                                    value: "3",
                                    label: "\u0633\u0637\u062D 3"
                                  },
                                  {
                                    value: "4",
                                    label: "\u0633\u0637\u062D 4"
                                  }
                                ]
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:message-circle" }, {
                            default: withCtx(() => [
                              _hoisted_27
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_29
                                ]),
                                _: 1
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
              ], 40, _hoisted_16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_30, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/united-states-of-america.svg" }),
                  _hoisted_31,
                  createBaseVNode("div", _hoisted_32, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_33, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/france.svg" }),
                  _hoisted_34,
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/germany.svg" }),
                  _hoisted_37,
                  createBaseVNode("div", _hoisted_38, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/flags/spain.svg" }),
                  _hoisted_40,
                  createBaseVNode("div", _hoisted_41, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_42, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_43,
                  createBaseVNode("div", _hoisted_44, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      onClick: _cache[3] || (_cache[3] = ($event) => isEditingLanguages.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_45
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_46, [
            !isEditingSkills.value ? (openBlock(), createElementBlock("div", _hoisted_47, _hoisted_50)) : (openBlock(), createElementBlock("div", _hoisted_51, [
              createBaseVNode("a", {
                class: "action-link",
                onClick: _cache[4] || (_cache[4] = ($event) => isEditingSkills.value = false)
              }, "\u06A9\u0646\u0633\u0644")
            ])),
            createBaseVNode("div", _hoisted_52, [
              isEditingSkills.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addSkill, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_54, [
                  createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", _hoisted_56, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedSkill.value,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedSkill.value = $event),
                                placeholder: "\u06CC\u06A9 \u0645\u0647\u0627\u0631\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
                                label: "name",
                                options: [
                                  {
                                    value: "html",
                                    name: "Html5",
                                    icon: "/images/icons/stacks/html5.svg"
                                  },
                                  {
                                    value: "css",
                                    name: "CSS3",
                                    icon: "/images/icons/stacks/css3.svg"
                                  },
                                  {
                                    value: "javascript",
                                    name: "\u062C\u0627\u0648\u0627 \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
                                    icon: "/images/icons/stacks/js.svg"
                                  },
                                  {
                                    value: "react",
                                    name: "React",
                                    icon: "/images/icons/stacks/reactjs.svg"
                                  },
                                  {
                                    value: "angular",
                                    name: "\u0622\u0646\u06AF\u0648\u0644\u0627\u0631",
                                    icon: "/images/icons/stacks/angular.svg"
                                  },
                                  {
                                    value: "vueJs",
                                    name: "VueJs",
                                    icon: "/images/icons/stacks/vuejs.svg"
                                  },
                                  {
                                    value: "nodejs",
                                    name: "NodeJS",
                                    icon: "/images/icons/stacks/nodejs.svg"
                                  },
                                  {
                                    value: "csharp",
                                    name: "\u0633\u06CC \u0634\u0627\u0631\u067E",
                                    icon: "/images/icons/stacks/csharp.svg"
                                  }
                                ]
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_57, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_58),
                                    createBaseVNode("span", _hoisted_59, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_60),
                                  createBaseVNode("span", _hoisted_61, toDisplayString(option.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_62, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedSkillLevel.value,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedSkillLevel.value = $event),
                                placeholder: "\u0633\u0627\u0644\u200C\u0647\u0627\u06CC \u062A\u062C\u0631\u0628\u0647",
                                options: [
                                  {
                                    value: "1",
                                    label: "1 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "2",
                                    label: "2 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "3",
                                    label: "3 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "4",
                                    label: "4 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "5",
                                    label: "5 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "6",
                                    label: "6 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "7",
                                    label: "7 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "8",
                                    label: "8 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "9",
                                    label: "9 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  },
                                  {
                                    value: "+10",
                                    label: "+10 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
                                  }
                                ]
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_63, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_64
                                ]),
                                _: 1
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
              ], 40, _hoisted_53)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_65, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/js.svg" }),
                  _hoisted_66,
                  createBaseVNode("div", _hoisted_67, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_68, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/html5.svg" }),
                  _hoisted_69,
                  createBaseVNode("div", _hoisted_70, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_71, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/css3.svg" }),
                  _hoisted_72,
                  createBaseVNode("div", _hoisted_73, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_74, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_75,
                  createBaseVNode("div", _hoisted_76, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      onClick: _cache[7] || (_cache[7] = ($event) => isEditingSkills.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_77
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_78, [
            !isEditingTools.value ? (openBlock(), createElementBlock("div", _hoisted_79, _hoisted_82)) : (openBlock(), createElementBlock("div", _hoisted_83, [
              createBaseVNode("a", {
                class: "action-link",
                onClick: _cache[8] || (_cache[8] = ($event) => isEditingTools.value = false)
              }, "\u06A9\u0646\u0633\u0644")
            ])),
            createBaseVNode("div", _hoisted_84, [
              isEditingTools.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addTool, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_86, [
                  createBaseVNode("div", _hoisted_87, [
                    createBaseVNode("div", _hoisted_88, [
                      createVNode(_component_VField, { class: "is-image-select" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedTool.value,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => selectedTool.value = $event),
                                placeholder: "\u0627\u0628\u0632\u0627\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
                                label: "name",
                                options: [
                                  {
                                    value: "illustrator",
                                    name: "\u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631",
                                    icon: "/images/icons/stacks/illustrator.svg"
                                  },
                                  {
                                    value: "photoshop",
                                    name: "\u0641\u062A\u0648\u0634\u0627\u067E",
                                    icon: "/images/icons/stacks/photoshop.svg"
                                  },
                                  {
                                    value: "jira",
                                    name: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u062C\u06CC\u0631\u0627",
                                    icon: "/demo/photos/tools/jira.svg"
                                  },
                                  {
                                    value: "office",
                                    name: "\u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0622\u0641\u06CC\u0633",
                                    icon: "/demo/photos/tools/office.svg"
                                  }
                                ]
                              }, {
                                singlelabel: withCtx(({ value }) => [
                                  createBaseVNode("div", _hoisted_89, [
                                    createBaseVNode("img", {
                                      class: "select-label-icon",
                                      src: value.icon,
                                      alt: ""
                                    }, null, 8, _hoisted_90),
                                    createBaseVNode("span", _hoisted_91, toDisplayString(value.name), 1)
                                  ])
                                ]),
                                option: withCtx(({ option }) => [
                                  createBaseVNode("img", {
                                    class: "select-option-icon",
                                    src: option.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_92),
                                  createBaseVNode("span", _hoisted_93, toDisplayString(option.name), 1)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_94, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Multiselect, {
                                modelValue: selectedToolLevel.value,
                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => selectedToolLevel.value = $event),
                                placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0633\u0637\u062D \u062E\u0648\u062F",
                                options: [
                                  {
                                    value: "1",
                                    label: "\u0633\u0637\u062D 1"
                                  },
                                  {
                                    value: "2",
                                    label: "\u0633\u0637\u062D 2"
                                  },
                                  {
                                    value: "3",
                                    label: "\u0633\u0637\u062D 3"
                                  },
                                  {
                                    value: "4",
                                    label: "\u0633\u0637\u062D 4"
                                  },
                                  {
                                    value: "5",
                                    label: "\u0633\u0637\u062D 5"
                                  }
                                ]
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_95, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                color: "primary",
                                icon: "fas fa-plus",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_96
                                ]),
                                _: 1
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
              ], 40, _hoisted_85)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_97, [
                  createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/illustrator.svg" }),
                  _hoisted_98,
                  createBaseVNode("div", _hoisted_99, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_100, [
                  createVNode(_component_VIconWrap, { picture: "/demo/photos/tools/jira.svg" }),
                  _hoisted_101,
                  createBaseVNode("div", _hoisted_102, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_103, [
                  createVNode(_component_VIconWrap, { picture: "/demo/photos/tools/office.svg" }),
                  _hoisted_104,
                  createBaseVNode("div", _hoisted_105, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_106, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_107,
                  createBaseVNode("div", _hoisted_108, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      onClick: _cache[11] || (_cache[11] = ($event) => isEditingTools.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_109
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 64))
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
