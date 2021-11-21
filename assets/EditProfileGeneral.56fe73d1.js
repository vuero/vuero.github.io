import { b as _sfc_main$1, c as __unplugin_components_1, d as _sfc_main$5, u as useNotyf } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VFilePond.8a36efa7.js";
import { _ as _sfc_main$3 } from "./VIconButton.809a4ce6.js";
import { _ as _sfc_main$4 } from "./VAvatar.879e77ac.js";
import { _ as _imports_1 } from "./vuero-1.6816f54f.js";
import { d as defineComponent, r as ref, m as useWindowScroll, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, n as normalizeClass, t as unref, N as createBlock, B as createTextVNode } from "./vendor.9ec557a4.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0639\u0645\u0648\u0645\u06CC"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0639\u0645\u0648\u0645\u06CC \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u0628\u0631\u06AF\u0634\u062A ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A ");
const _hoisted_8 = { class: "form-body" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u062A\u0635\u0648\u06CC\u0631 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u062F\u06CC\u06AF\u0631\u0627\u0646 \u0634\u0645\u0627 \u0631\u0627 \u0628\u0627 \u062A\u0635\u0648\u06CC\u0631 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0634\u0646\u0627\u0633\u0627\u06CC\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F")
], -1);
const _hoisted_11 = { class: "fieldset" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u062F\u06CC\u06AF\u0631\u0627\u0646 \u0633\u0632\u0627\u0648\u0627\u0631 \u0647\u0633\u062A\u0646\u062F \u06A9\u0647 \u0634\u0645\u0627 \u0631\u0627 \u0628\u06CC\u0634\u062A\u0631 \u0628\u0634\u0646\u0627\u0633\u0646\u062F")
], -1);
const _hoisted_13 = { class: "columns is-multiline" };
const _hoisted_14 = { class: "column is-6" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0627\u0633\u0645 \u06A9\u0648\u0686\u06A9",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_16 = { class: "column is-6" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644",
  autocomplete: "organization-title"
}, null, -1);
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0645\u0648\u0642\u0639\u06CC\u062A",
  autocomplete: "country-name"
}, null, -1);
const _hoisted_22 = { class: "column is-12" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("textarea", {
  class: "textarea",
  rows: "4",
  placeholder: "\u0628\u0627\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC",
  autocomplete: "off",
  autocapitalize: "off",
  spellcheck: "true"
}, null, -1);
const _hoisted_24 = { class: "fieldset" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u062E\u0635\u0635\u06CC"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u06CC\u0646 \u0645\u06CC \u062A\u0648\u0627\u0646\u062F \u0628\u0647 \u0634\u0645\u0627 \u062F\u0631 \u06A9\u0633\u0628 \u0628\u0631\u062E\u06CC \u0641\u0631\u0635\u062A \u0647\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u062F")
], -1);
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-6" };
const _hoisted_28 = { class: "column is-6" };
const _hoisted_29 = { class: "column is-6" };
const _hoisted_30 = { class: "column is-6" };
const _hoisted_31 = { class: "column is-12" };
const _hoisted_32 = { class: "fieldset" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0645\u0634\u062E\u0635\u0627\u062A \u0627\u062C\u062A\u0645\u0627\u0639\u06CC"),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0627\u06CC\u0646 \u0645\u06CC \u062A\u0648\u0627\u0646\u062F \u0628\u0647 \u062F\u06CC\u06AF\u0631\u0627\u0646 \u062F\u0631 \u06CC\u0627\u0641\u062A\u0646 \u0634\u0645\u0627 \u062F\u0631 \u0631\u0633\u0627\u0646\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC \u06A9\u0645\u06A9 \u06A9\u0646\u062F ")
], -1);
const _hoisted_34 = { class: "columns is-multiline" };
const _hoisted_35 = { class: "column is-6" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0622\u062F\u0631\u0633 \u0641\u06CC\u0633\u0628\u0648\u06A9",
  inputmode: "url"
}, null, -1);
const _hoisted_37 = { class: "column is-6" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0622\u062F\u0631\u0633 \u062A\u0648\u0626\u06CC\u062A\u0631",
  inputmode: "url"
}, null, -1);
const _hoisted_39 = { class: "column is-6" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0622\u062F\u0631\u0633 \u062F\u0631\u06CC\u0628\u0644",
  inputmode: "url"
}, null, -1);
const _hoisted_41 = { class: "column is-6" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645",
  inputmode: "url"
}, null, -1);
const _hoisted_43 = { class: "column is-6" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0622\u062F\u0631\u0633 \u06AF\u06CC\u062A\u0647\u0627\u0628",
  inputmode: "url"
}, null, -1);
const _hoisted_45 = { class: "column is-6" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u0622\u062F\u0631\u0633 \u06AF\u06CC\u062A\u200C\u0644\u0628",
  inputmode: "url"
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isUploading = ref(false);
    const isLoading = ref(false);
    const experience = ref("");
    const firstJob = ref("");
    const flexibility = ref("");
    const remote = ref("");
    const skills = ref(["software", "saas", "engineering"]);
    const skillsOptions = [
      { value: "software", label: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631" },
      { value: "saas", label: "SaaS" },
      { value: "engineering", label: "\u0645\u0647\u0646\u062F\u0633\u06CC" }
    ];
    const notyf = useNotyf();
    const { y } = useWindowScroll();
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
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      notyf.success("\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F!");
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VFilePond = _sfc_main$2;
      const _component_VIconButton = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$5;
      const _component_Multiselect = resolveComponent("Multiselect");
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
            _hoisted_10,
            createVNode(_component_VAvatar, {
              size: "xl",
              class: "profile-v-avatar"
            }, {
              avatar: withCtx(() => [
                !isUploading.value ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: "avatar",
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32)) : (openBlock(), createBlock(_component_VFilePond, {
                  key: 1,
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
                })),
                !isUploading.value ? (openBlock(), createBlock(_component_VIconButton, {
                  key: 2,
                  icon: "feather:edit-2",
                  class: "edit-button is-edit",
                  circle: "",
                  onClick: _cache[1] || (_cache[1] = ($event) => isUploading.value = true)
                })) : (openBlock(), createBlock(_component_VIconButton, {
                  key: 3,
                  icon: "feather:arrow-left",
                  class: "edit-button is-back",
                  circle: "",
                  onClick: _cache[2] || (_cache[2] = ($event) => isUploading.value = false)
                }))
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_11, [
            _hoisted_12,
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:user" }, {
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
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        _hoisted_17
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
                    createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                      default: withCtx(() => [
                        _hoisted_19
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
                    createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                      default: withCtx(() => [
                        _hoisted_21
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_22, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
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
                        createVNode(_component_Multiselect, {
                          modelValue: experience.value,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => experience.value = $event),
                          placeholder: "\u062A\u062C\u0631\u0628\u06CC\u0627\u062A",
                          options: ["0-2 \u0633\u0627\u0644", "2-5 \u0633\u0627\u0644", "5-10 \u0633\u0627\u0644", "10+ \u0633\u0627\u0644"]
                        }, null, 8, ["modelValue"])
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
                        createVNode(_component_Multiselect, {
                          modelValue: firstJob.value,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => firstJob.value = $event),
                          placeholder: "\u0622\u06CC\u0627 \u0627\u06CC\u0646 \u0627\u0648\u0644\u06CC\u0646 \u06A9\u0627\u0631 \u0634\u0645\u0627\u0633\u062A\u061F",
                          options: ["\u0628\u0644\u06CC", "\u0646\u062E\u06CC\u0631"]
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_29, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: flexibility.value,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => flexibility.value = $event),
                          placeholder: "\u0622\u06CC\u0627 \u0645\u0646\u0639\u0637\u0641 \u0639\u0645\u0644 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F\u061F",
                          options: ["\u0628\u0644\u06CC", "\u0646\u062E\u06CC\u0631"]
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_30, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: remote.value,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => remote.value = $event),
                          placeholder: "\u0622\u06CC\u0627 \u0627\u0632 \u0631\u0627\u0647 \u062F\u0648\u0631 \u06A9\u0627\u0631 \u0645\u06CC \u06A9\u0646\u06CC\u062F\u061F",
                          options: ["\u0628\u0644\u06CC", "\u0646\u062E\u06CC\u0631"]
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_31, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: skills.value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => skills.value = $event),
                          mode: "tags",
                          searchable: true,
                          "create-tag": true,
                          options: skillsOptions,
                          placeholder: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0631\u0686\u0633\u0628"
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
          createBaseVNode("div", _hoisted_32, [
            _hoisted_33,
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-facebook-f" }, {
                      default: withCtx(() => [
                        _hoisted_36
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_37, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-twitter" }, {
                      default: withCtx(() => [
                        _hoisted_38
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_39, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-dribbble" }, {
                      default: withCtx(() => [
                        _hoisted_40
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_41, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-instagram" }, {
                      default: withCtx(() => [
                        _hoisted_42
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_43, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-github" }, {
                      default: withCtx(() => [
                        _hoisted_44
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_45, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "fab fa-gitlab" }, {
                      default: withCtx(() => [
                        _hoisted_46
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
      ]);
    };
  }
});
export { _sfc_main as _ };
