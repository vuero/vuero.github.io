import { b as _sfc_main$1, c as __unplugin_components_1, d as _sfc_main$3, u as useNotyf } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VFilePond.8a36efa7.js";
import { _ as __unplugin_components_4 } from "./EditSettingItemDropdown.7e81545e.js";
import { _ as _sfc_main$4 } from "./VIconWrap.809aa90c.js";
import { d as defineComponent, r as ref, m as useWindowScroll, ah as momentJalaali, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, n as normalizeClass, t as unref, s as withModifiers, G as Fragment, B as createTextVNode } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3 } from "./github.42edfd30.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
var _imports_4 = "/demo/photos/brands/slack.svg";
var _imports_5 = "/demo/photos/brands/gitlab.svg";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u06A9\u0627\u0631\u06CC"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u062C\u0631\u0628\u0647\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F")
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
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "\u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u0642\u0628\u0644\u06CC", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u06CC\u0646 \u0628\u0647 \u062F\u06CC\u06AF\u0631\u0627\u0646 \u06A9\u0645\u06A9 \u0645\u06CC \u06A9\u0646\u062F \u062A\u0627 \u062A\u062C\u0631\u0628\u0647 \u0634\u0645\u0627 \u0631\u0627 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u06A9\u0646\u0646\u062F", -1);
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
const _hoisted_19 = { class: "column is-12" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-left"
  })
], -1);
const _hoisted_21 = { class: "column is-6" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0646\u0627\u0645 \u0634\u0631\u06A9\u062A",
  autocomplete: "organization"
}, null, -1);
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644",
  autocomplete: "organization-title"
}, null, -1);
const _hoisted_25 = { class: "column is-12" };
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC ");
const _hoisted_27 = { class: "setting-item" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062F\u0641\u062A\u0631 \u0645\u0631\u06A9\u0632\u06CC \u0627\u06CC\u0631 \u0628\u06CC \u0627\u0646 \u0628\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644")
], -1);
const _hoisted_29 = { class: "end" };
const _hoisted_30 = { class: "setting-item" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0641\u06CC\u0633\u0628\u0648\u06A9"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644")
], -1);
const _hoisted_32 = { class: "end" };
const _hoisted_33 = { class: "setting-item" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u0637\u0644\u0633\u06CC\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_35 = { class: "end" };
const _hoisted_36 = { class: "setting-item" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_38 = { class: "end" };
const _hoisted_39 = { class: "setting-item" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u0633\u0644\u06A9"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_41 = { class: "end" };
const _hoisted_42 = { class: "setting-item" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u06AF\u06CC\u062A\u200C\u0644\u0628"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_44 = { class: "end" };
const _hoisted_45 = { class: "setting-item is-create" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06CC\u06A9 \u0645\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F")
], -1);
const _hoisted_47 = { class: "end" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isUploading = ref(false);
    const isLoading = ref(false);
    ref();
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const date = ref({
      start: momentJalaali().format("jYYYY-jMM-jDD"),
      end: momentJalaali().format("jYYYY-jMM-jDD")
    });
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    const onAddFile = (error, file) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("file added", file);
    };
    const onRemoveFile = (error, file) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("file removed", file);
    };
    const addExperience = async () => {
      isUploading.value = false;
      onSave();
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("Your changes have been successfully saved!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VFilePond = _sfc_main$2;
      const _component_date_picker = resolveComponent("date-picker");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_EditSettingItemDropdown = __unplugin_components_4;
      const _component_VIconWrap = _sfc_main$4;
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
            !isUploading.value ? (openBlock(), createElementBlock("div", _hoisted_10, _hoisted_13)) : (openBlock(), createElementBlock("div", _hoisted_14, [
              createBaseVNode("a", {
                class: "action-link",
                onClick: _cache[0] || (_cache[0] = ($event) => isUploading.value = false)
              }, "\u06A9\u0646\u0633\u0644")
            ])),
            createBaseVNode("div", _hoisted_15, [
              isUploading.value ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "setting-form",
                onSubmit: withModifiers(addExperience, ["prevent"])
              }, [
                createVNode(_component_VFilePond, {
                  size: "tiny",
                  class: "profile-filepond",
                  name: "profile_filepond",
                  "chunk-retry-delays": [500, 1e3, 3e3],
                  "label-idle": "<i class='lnil lnil-cloud-upload'></i>",
                  "accepted-file-types": ["image/png", "image/jpeg", "image/gif"],
                  "image-preview-height": 140,
                  "image-resize-target-width": 140,
                  "image-resize-target-height": 140,
                  "image-crop-aspect-ratio": "1:1",
                  "style-panel-layout": "compact circle",
                  "style-load-indicator-position": "center bottom",
                  "style-progress-indicator-position": "right bottom",
                  "style-button-remove-item-position": "left bottom",
                  "style-button-process-item-position": "right bottom",
                  onAddfile: onAddFile,
                  onRemovefile: onRemoveFile
                }),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_VField, {
                        addons: "",
                        class: "has-addons-fullwidth"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_date_picker, {
                                modelValue: date.value.start,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => date.value.start = $event),
                                class: "control",
                                "auto-submit": "",
                                format: "jYYYY/jMM/jDD"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { nogrow: "" }, {
                            default: withCtx(() => [
                              _hoisted_20
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_date_picker, {
                                modelValue: date.value.end,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => date.value.end = $event),
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
                    createBaseVNode("div", _hoisted_21, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:box" }, {
                            default: withCtx(() => [
                              _hoisted_22
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                            default: withCtx(() => [
                              _hoisted_24
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
                              createVNode(_component_VButton, {
                                color: "primary",
                                raised: "",
                                fullwidth: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_26
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
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("img", {
                    src: _imports_0,
                    alt: "",
                    onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "50x50"))
                  }, null, 32),
                  _hoisted_28,
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("img", {
                    src: _imports_1,
                    alt: "",
                    onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "50x50"))
                  }, null, 32),
                  _hoisted_31,
                  createBaseVNode("div", _hoisted_32, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("img", {
                    src: _imports_2,
                    alt: "",
                    onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "50x50"))
                  }, null, 32),
                  _hoisted_34,
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("img", {
                    src: _imports_3,
                    alt: "",
                    onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "50x50"))
                  }, null, 32),
                  _hoisted_37,
                  createBaseVNode("div", _hoisted_38, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("img", {
                    src: _imports_4,
                    alt: "",
                    onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(useViaPlaceholderError)(event, "50x50"))
                  }, null, 32),
                  _hoisted_40,
                  createBaseVNode("div", _hoisted_41, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_42, [
                  createBaseVNode("img", {
                    src: _imports_5,
                    alt: "",
                    onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(useViaPlaceholderError)(event, "50x50"))
                  }, null, 32),
                  _hoisted_43,
                  createBaseVNode("div", _hoisted_44, [
                    createVNode(_component_EditSettingItemDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_45, [
                  createVNode(_component_VIconWrap, { icon: "lnil lnil-circle-plus" }),
                  _hoisted_46,
                  createBaseVNode("div", _hoisted_47, [
                    createVNode(_component_VButton, {
                      raised: "",
                      "dark-outlined": "",
                      icon: "fas fa-plus",
                      class: "add-setting-item",
                      onClick: _cache[9] || (_cache[9] = ($event) => isUploading.value = true)
                    }, {
                      default: withCtx(() => [
                        _hoisted_48
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
