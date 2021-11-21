import { a as __unplugin_components_0, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, u as useNotyf } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$4 } from "./VModal.d9bd4cb5.js";
import { d as defineComponent, r as ref, a as useRouter, K as useHead, ab as onMounted, ac as onUnmounted, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, n as normalizeClass, s as withModifiers, G as Fragment, J as renderList, t as unref, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
import { t as tns } from "./tiny-slider.3c41456c.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { s as sleep } from "./sleep.2a252ff4.js";
var _imports_0 = "/assets/vuero-signup.7a9b164d.webp";
var signup1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "signup-nav" };
const _hoisted_2 = { class: "signup-nav-inner" };
const _hoisted_3 = {
  id: "vuero-signup",
  class: "signup-wrapper"
};
const _hoisted_4 = { class: "steps-container" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "\u062A\u0635\u0648\u06CC\u0631 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644", -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:shield"
  })
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC", -1);
const _hoisted_10 = [
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F", -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = ["value"];
const _hoisted_15 = { class: "hero is-fullheight" };
const _hoisted_16 = { class: "hero-body" };
const _hoisted_17 = { class: "container" };
const _hoisted_18 = { class: "column is-4 is-offset-1" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "main-signup-title",
  class: "title is-3 signup-title"
}, " \u06CC\u06A9 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648\u06CC\u06CC \u0628\u0627\u0634\u06CC\u062F ", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "main-signup-subtitle",
  class: "subtitle signup-subtitle"
}, " \u0648 \u0628\u0647\u0645\u06CC\u0646 \u0631\u0627\u062D\u062A\u06CC \u062A\u062C\u0631\u0628\u0647\u200C\u0627\u06CC \u0628\u06CC \u0646\u0638\u06CC\u0631 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F. ", -1);
const _hoisted_21 = { class: "signup-card" };
const _hoisted_22 = { class: "columns is-multiline" };
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "given-name"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "\u0646\u0627\u0645", -1);
const _hoisted_26 = { class: "column is-6" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "family-name"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC", -1);
const _hoisted_29 = { class: "column is-12" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "email"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644", -1);
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<div class="column is-12"><div class="signup-type"><div class="box-wrap"><input type="radio" name="signup_type" checked><div class="signup-box"><i aria-hidden="true" class="lnil lnil-coffee-cup"></i><div class="meta"><span>\u0631\u0627\u06CC\u06AF\u0627\u0646</span><span>\u06AF\u0632\u06CC\u0646\u0647\u200C\u0627\u06CC \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639</span></div></div></div><div class="box-wrap"><input type="radio" name="signup_type"><div class="signup-box"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><div class="meta"><span>\u067E\u0648\u0644\u06CC</span><span>\u0628\u0627 \u0622\u067E\u0634\u0646\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631</span></div></div></div></div></div>', 1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "control is-agree" }, [
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode(" \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u062F\u0627\u0645\u0647\u200C\u06CC \u0631\u0648\u0646\u062F \u062B\u0628\u062A \u0646\u0627\u0645 \u0634\u0645\u0627 "),
    /* @__PURE__ */ createBaseVNode("a", { href: "#" }, "\u0642\u0648\u0627\u0646\u06CC\u0646"),
    /* @__PURE__ */ createTextVNode(" \u0648 "),
    /* @__PURE__ */ createBaseVNode("a", { href: "#" }, "\u0634\u0631\u0627\u06CC\u0637"),
    /* @__PURE__ */ createTextVNode(" \u0645\u0627 \u0631\u0627 \u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u06CC\u062F. ")
  ])
], -1);
const _hoisted_34 = { class: "button-wrap has-help" };
const _hoisted_35 = /* @__PURE__ */ createTextVNode(" \u0627\u062F\u0627\u0645\u0647 ");
const _hoisted_36 = /* @__PURE__ */ createTextVNode(" \u06CC\u0627 ");
const _hoisted_37 = /* @__PURE__ */ createTextVNode(" \u0648\u0631\u0648\u062F ");
const _hoisted_38 = /* @__PURE__ */ createTextVNode(" \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F. ");
const _hoisted_39 = { class: "signup-profile-wrapper" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5 signup-title has-text-centered" }, " \u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0635\u0648\u06CC\u0631 \u0628\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 ", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("h2", { class: "subtitle signup-subtitle has-text-centered" }, " \u0627\u06CC\u0646 \u062A\u0635\u0648\u06CC\u0631 \u0645\u0639\u0631\u0641 \u0634\u062E\u0635\u06CC\u062A \u0645\u062C\u0627\u0632\u06CC \u0634\u0645\u0627\u0633\u062A. ", -1);
const _hoisted_42 = { class: "picture-selector" };
const _hoisted_43 = { class: "image-container" };
const _hoisted_44 = ["src"];
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_46 = [
  _hoisted_45
];
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "divider-container" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u06CC\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0622\u0648\u0627\u062A\u0627\u0631")
  ])
], -1);
const _hoisted_48 = { class: "image-wrapper" };
const _hoisted_49 = ["src"];
const _hoisted_50 = { class: "button-wrap is-centered has-text-centered" };
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" \u0627\u062F\u0627\u0645\u0647 ");
const _hoisted_52 = { class: "column is-4 is-offset-4 username-form" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5 signup-title has-text-centered" }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC ", -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("h2", { class: "subtitle signup-subtitle has-text-centered" }, " \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627 \u0648\u0633\u06CC\u0644\u0647\u200C\u0627\u06CC \u0627\u0633\u062A \u062C\u0647\u062A \u06CC\u0627\u0641\u062A\u0646 \u0634\u0645\u0627 \u062F\u0631 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627\u062D\u062A \u0648 \u0645\u0634\u062E\u0635\u06CC \u0628\u0631\u06AF\u0632\u06CC\u0646\u06CC\u062F. \u0647\u0631 \u0632\u0645\u0627\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0622\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0627\u062F. ", -1);
const _hoisted_55 = ["onSubmit"];
const _hoisted_56 = { class: "columns is-multiline" };
const _hoisted_57 = { class: "column is-12" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  autocomplete: "username"
}, null, -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC", -1);
const _hoisted_60 = { class: "column is-12" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "\u06AF\u0630\u0631\u0648\u0627\u0698\u0647", -1);
const _hoisted_63 = { class: "column is-12" };
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("input", {
  type: "password",
  class: "input",
  autocomplete: "new-password"
}, null, -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-label" }, "\u062A\u0623\u06CC\u06CC\u062F\u06CC\u0647 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647", -1);
const _hoisted_66 = { class: "column is-12" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("label", { for: "send-marketing" }, [
  /* @__PURE__ */ createBaseVNode("span", null, " \u0627\u0631\u0633\u0627\u0644 \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF \u0648 \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 ")
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("label", {
  for: "send-marketing",
  class: "form-switch mr-auto"
}, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "send-marketing",
    type: "checkbox",
    class: "is-switch"
  }),
  /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
], -1);
const _hoisted_69 = { class: "button-wrap is-centered has-text-centered" };
const _hoisted_70 = /* @__PURE__ */ createTextVNode(" \u0627\u0646\u062C\u0627\u0645 \u0634\u062F ");
const _hoisted_71 = { class: "has-text-centered" };
const _hoisted_72 = { class: "upload-demo-wrap" };
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("small", { class: "help-text" }, "\u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0633\u0644\u0627\u06CC\u062F\u0631 \u0627\u0646\u062F\u0627\u0632\u0647\u200C\u06CC \u062A\u0635\u0648\u06CC\u0631 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F", -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "file" }, [
  /* @__PURE__ */ createBaseVNode("label", { class: "file-label" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      class: "file-input",
      type: "file",
      name: "resume"
    }),
    /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
      /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "fas fa-cloud-upload-alt"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0641\u0627\u06CC\u0644\u2026 ")
    ])
  ])
], -1);
const _hoisted_76 = /* @__PURE__ */ createTextVNode(" \u062A\u0623\u06CC\u06CC\u062F ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let slider;
    const sliderElement = ref();
    const router = useRouter();
    const notif = useNotyf();
    const step = ref(0);
    const selectedAvatar = ref(2);
    const isLoading = ref(false);
    const resizeValue = ref(70);
    const uploadModalOpen = ref(false);
    const avatars = [
      "/images/avatars/svg/vuero-1.svg",
      "/images/avatars/svg/vuero-2.svg",
      "/images/avatars/svg/vuero-3.svg",
      "/images/avatars/svg/vuero-4.svg",
      "/images/avatars/svg/vuero-5.svg",
      "/images/avatars/svg/vuero-6.svg",
      "/images/avatars/svg/vuero-7.svg",
      "/images/avatars/svg/vuero-8.svg",
      "/images/avatars/svg/vuero-9.svg",
      "/images/avatars/svg/vuero-10.svg",
      "/images/avatars/svg/vuero-11.svg",
      "/images/avatars/svg/vuero-12.svg"
    ];
    const handleSignup = async () => {
      if (!isLoading.value) {
        step.value++;
        isLoading.value = true;
        sleep(2e3);
        notif.dismissAll();
        notif.success("\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F \u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632");
        router.push({ name: "sidebar-dashboards" });
        isLoading.value = false;
      }
    };
    const onAvatarChanged = (info) => {
      const indexPrev = info.indexCached;
      const indexCurrent = info.index;
      info.slideItems[indexPrev].classList.remove("active");
      info.slideItems[indexCurrent].classList.add("active");
      if (info.displayIndex) {
        selectedAvatar.value = info.displayIndex - 1;
      }
    };
    useHead({
      title: "\u062B\u0628\u062A \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631 1 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    onMounted(() => {
      if (sliderElement.value) {
        slider = tns({
          container: sliderElement.value,
          controls: false,
          nav: false,
          mouseDrag: true,
          startIndex: 2,
          fixedWidth: 100,
          gutter: 40,
          slideBy: 1,
          swipeAngle: false,
          center: false,
          loop: true,
          edgePadding: 325
        });
        slider.events.on("indexChanged", onAvatarChanged);
        onAvatarChanged(slider.getInfo());
      }
    });
    onUnmounted(() => {
      if (slider) {
        slider.events.off("indexChanged", onAvatarChanged);
        slider.destroy();
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_Slider = resolveComponent("Slider");
      const _component_VModal = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "logo"
            }, {
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
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", {
            class: normalizeClass(["signup-steps", [step.value === 0 && "is-hidden"]])
          }, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", {
                class: normalizeClass(["step-icon is-active", [step.value >= 1 && "is-active", step.value < 1 && "is-inactive"]])
              }, _hoisted_7, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [step.value >= 2 && "is-active", step.value < 2 && "is-inactive"]])
              }, _hoisted_10, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [step.value >= 3 && "is-active", step.value < 3 && "is-inactive"]])
              }, _hoisted_13, 2),
              createBaseVNode("progress", {
                class: "progress",
                value: step.value - 1,
                max: 2
              }, " 25\u062F\u0631\u0635\u062F ", 8, _hoisted_14)
            ])
          ], 2),
          createBaseVNode("img", {
            class: normalizeClass([[step.value > 0 && "is-hidden"], "card-bg"]),
            src: _imports_0,
            alt: ""
          }, null, 2),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", {
                  class: normalizeClass(["columns signup-columns", [step.value !== 0 && "is-hidden"]])
                }, [
                  createBaseVNode("div", _hoisted_18, [
                    _hoisted_19,
                    _hoisted_20,
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("form", {
                        class: "signup-form is-mobile-spaced",
                        onSubmit: _cache[1] || (_cache[1] = withModifiers(() => {
                        }, ["prevent"]))
                      }, [
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("div", _hoisted_23, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    _hoisted_24,
                                    _hoisted_25
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
                          ]),
                          createBaseVNode("div", _hoisted_29, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    _hoisted_30,
                                    _hoisted_31
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _hoisted_32
                        ]),
                        _hoisted_33,
                        createBaseVNode("div", _hoisted_34, [
                          createVNode(_component_VButton, {
                            color: "primary",
                            size: "big",
                            bold: "",
                            fullwidth: "",
                            rounded: "",
                            onClick: _cache[0] || (_cache[0] = ($event) => step.value++)
                          }, {
                            default: withCtx(() => [
                              _hoisted_35
                            ]),
                            _: 1
                          }),
                          createBaseVNode("span", null, [
                            _hoisted_36,
                            createVNode(_component_RouterLink, { to: { name: "auth-login-1" } }, {
                              default: withCtx(() => [
                                _hoisted_37
                              ]),
                              _: 1
                            }),
                            _hoisted_38
                          ])
                        ])
                      ], 32)
                    ])
                  ])
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["columns signup-columns", [step.value !== 1 && "is-hidden"]])
                }, [
                  createBaseVNode("form", {
                    class: "column is-8",
                    onSubmit: _cache[5] || (_cache[5] = withModifiers(() => {
                    }, ["prevent"]))
                  }, [
                    createBaseVNode("div", _hoisted_39, [
                      _hoisted_40,
                      _hoisted_41,
                      createBaseVNode("div", _hoisted_42, [
                        createBaseVNode("div", _hoisted_43, [
                          createBaseVNode("img", {
                            src: avatars[selectedAvatar.value],
                            alt: ""
                          }, null, 8, _hoisted_44),
                          createBaseVNode("div", {
                            class: "upload-button",
                            role: "button",
                            tabindex: "0",
                            onClick: _cache[2] || (_cache[2] = ($event) => uploadModalOpen.value = true)
                          }, _hoisted_46)
                        ])
                      ])
                    ]),
                    _hoisted_47,
                    createBaseVNode("div", {
                      ref: (_value, _refs) => {
                        _refs["sliderElement"] = _value;
                        sliderElement.value = _value;
                      },
                      class: "avatar-carousel resized-mobile"
                    }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(avatars, (avatar, key) => {
                        return createBaseVNode("div", {
                          key,
                          class: "carousel-item"
                        }, [
                          createBaseVNode("div", _hoisted_48, [
                            createBaseVNode("img", {
                              src: avatar,
                              alt: "",
                              onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                            }, null, 40, _hoisted_49)
                          ])
                        ]);
                      }), 64))
                    ], 512),
                    createBaseVNode("div", _hoisted_50, [
                      createVNode(_component_VButton, {
                        color: "primary",
                        size: "big",
                        rounded: "",
                        lower: "",
                        onClick: _cache[4] || (_cache[4] = ($event) => step.value++)
                      }, {
                        default: withCtx(() => [
                          _hoisted_51
                        ]),
                        _: 1
                      })
                    ])
                  ], 32)
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["columns signup-columns", [step.value !== 2 && "is-hidden"]])
                }, [
                  createBaseVNode("div", _hoisted_52, [
                    _hoisted_53,
                    _hoisted_54,
                    createBaseVNode("form", {
                      class: "signup-form",
                      onSubmit: withModifiers(handleSignup, ["prevent"])
                    }, [
                      createBaseVNode("div", _hoisted_56, [
                        createBaseVNode("div", _hoisted_57, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  _hoisted_58,
                                  _hoisted_59
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_60, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  _hoisted_61,
                                  _hoisted_62
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
                                  _hoisted_64,
                                  _hoisted_65
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_66, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { class: "has-switch" }, {
                                default: withCtx(() => [
                                  _hoisted_67,
                                  _hoisted_68
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_69, [
                        createVNode(_component_VButton, {
                          size: "big",
                          color: "primary",
                          rounded: "",
                          primary: "",
                          lower: "",
                          loading: isLoading.value
                        }, {
                          default: withCtx(() => [
                            _hoisted_70
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ], 40, _hoisted_55)
                  ])
                ], 2)
              ])
            ])
          ])
        ]),
        createVNode(_component_VModal, {
          open: uploadModalOpen.value,
          title: "Upload and crop your picture",
          actions: "center",
          size: "small",
          onClose: _cache[7] || (_cache[7] = ($event) => uploadModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_71, [
              createBaseVNode("div", _hoisted_72, [
                createVNode(_component_VAvatar, { size: "big" })
              ]),
              _hoisted_73,
              createVNode(_component_VField, { class: "resize-handler" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Slider, {
                        modelValue: resizeValue.value,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => resizeValue.value = $event),
                        tooltips: false
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          cancel: withCtx(() => [
            _hoisted_74
          ]),
          action: withCtx(() => [
            createVNode(_component_VField, { grouped: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    _hoisted_75
                  ]),
                  _: 1
                }),
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      class: "upload-result",
                      size: "big",
                      outlined: "",
                      disabled: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_76
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
export { _sfc_main as default };
