import { B as isMediumScreen, i as isDark, t as toggleDarkModeHandler, a as __unplugin_components_0, e as _sfc_main$c } from "./index.4d6c8e1a.js";
import { d as defineComponent, r as ref, w as watchEffect, o as openBlock, b as createElementBlock, e as createBaseVNode, y as withDirectives, z as vModelCheckbox, n as normalizeClass, G as Fragment, C as createStaticVNode, t as unref, h as computed, a9 as watch, K as useHead, q as resolveComponent, N as createBlock, x as withCtx, v as createVNode } from "./vendor.9ec557a4.js";
import { a as _imports_0$4, _ as _imports_2 } from "./25.ca54486f.js";
import { _ as _imports_1 } from "./vuero-1.6816f54f.js";
import { u as useDropdown } from "./useDropdown.086619d7.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { b as _imports_3, a as _imports_0$5, c as _imports_0$6, _ as _imports_0$7, d as _imports_2$1 } from "./18.e0bb6643.js";
import { _ as _imports_4$1 } from "./11.27f9c2c8.js";
const _hoisted_1$b = { class: "message-checkbox" };
const _hoisted_2$b = { class: "checkbox is-outlined is-primary" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_4$b = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9\u0627\u0631\u06AF\u0631</span><span class="email">&lt;jonathan@vuero.ir&gt;</span><span class="subject"><strong>\u0646\u062A\u0648\u0627\u0646\u0633\u062A\u0645 \u0634\u0627\u0645 \u062F\u0641\u0639\u0647 \u0642\u0628\u0644 \u0631\u0627 \u062C\u0628\u0631\u0627\u0646 \u06A9\u0646\u0645</strong></span></div><div class="pushed">22 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_6$b = { class: "message-checkbox" };
const _hoisted_7$b = { class: "checkbox is-outlined is-primary" };
const _hoisted_8$b = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9$b = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0645\u0644\u0627\u0646\u06CC \u0648\u0644\u06CC \u0632\u0627\u062F\u0647</span><span class="email">&lt;melany@vuero.ir&gt;</span><span class="subject">\u0628\u0631\u0631\u0633\u06CC \u0645\u0647\u0645 \u067E\u0631\u0648\u0698\u0647 \u067E\u0646\u062C\u0634\u0646\u0628\u0647 \u0622\u06CC\u0646\u062F\u0647</span></div><div class="pushed">21 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_11$b = { class: "message-checkbox" };
const _hoisted_12$b = { class: "checkbox is-outlined is-primary" };
const _hoisted_13$b = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_14$b = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u06A9\u0628\u0631\u06CC \u06A9\u0628\u06CC\u0631\u0632\u0627\u062F\u0647</span><span class="email">&lt;greta@vuero.ir&gt;</span><span class="subject">\u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0622\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0647\u0627\u06CC \u0628\u0648\u062F\u062C\u0647 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0645\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F</span></div><div class="pushed">20 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_16$b = { class: "message-checkbox" };
const _hoisted_17$b = { class: "checkbox is-outlined is-primary" };
const _hoisted_18$b = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_19$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0645\u0627\u0647\u06CC \u0641\u0631\u0648\u0634</span><span class="email">&lt;elizabeth@vuero.ir&gt;</span><span class="subject">\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0645\u0634\u062A\u0631\u06CC \u062C\u062F\u06CC\u062F \u062F\u0631 \u0631\u0648\u0632 \u062F\u0648\u0634\u0646\u0628\u0647</span></div><div class="pushed">19 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_21$1 = { class: "message-checkbox" };
const _hoisted_22$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_24$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0639\u0644\u06CC \u06AF\u0648\u062F\u0631\u0632\u06CC</span><span class="email">&lt;carmen@vuero.ir&gt;</span><span class="subject"> \u0645\u0646 \u0686\u06CC\u0632\u0647\u0627\u06CC \u062C\u0627\u0644\u0628 \u0648 \u062C\u062F\u06CC\u062F\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0631\u062F\u0645 \u06A9\u0647 \u062D\u062A\u0645\u0627\u064B \u0628\u0627\u06CC\u062F \u0628\u0628\u06CC\u0646\u06CC\u062F </span></div><div class="pushed">19 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_26$1 = { class: "message-checkbox" };
const _hoisted_27$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_28$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_29$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0627\u06CC\u0631\u0627\u0646 \u0648\u0637\u0646\u062E\u0648\u0627\u0647</span><span class="email">&lt;irina@vuero.ir&gt;</span><span class="subject">\u06AF\u0632\u0627\u0631\u0634 \u062A\u0648\u0644\u06CC\u062F \u0633\u0631\u0628 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647</span></div><div class="pushed">18 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_31$1 = { class: "message-checkbox" };
const _hoisted_32$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_33$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_34$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0639\u0644\u06CC \u0698\u0627\u0646\u062F\u0627\u0631\u0645</span><span class="email">&lt;alejandro@vuero.ir&gt;</span><span class="subject"> \u0627\u06CC\u062F\u0647 \u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0637\u0631\u0627\u062D\u06CC \u0627\u0632 \u062A\u06CC\u0645 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 </span></div><div class="pushed">18 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_36$1 = { class: "message-checkbox" };
const _hoisted_37$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_38$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_39$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0627\u0644\u0627\u0646</span><span class="email">&lt;edouard@vuero.ir&gt;</span><span class="subject">\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0645\u0634\u062A\u0631\u06CC \u06AF\u0632\u0627\u0631\u0634 \u0627\u0634\u06A9\u0627\u0644 \u0641\u0648\u0631\u06CC\u0647</span></div><div class="pushed">17 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_41$1 = { class: "message-checkbox" };
const _hoisted_42$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_43$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_44$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0633\u0627\u0631\u06CC\u0646\u0627 \u06A9\u0648\u0644\u0628\u0631</span><span class="email">&lt;sandrine@vuero.ir&gt;</span><span class="subject">\u0628\u0647 \u0622\u062E\u0631\u06CC\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u0646 \u062C\u0648\u0627\u0628 \u0646\u062F\u0627\u062F\u06CC!</span></div><div class="pushed">17 \u0622\u0628\u0627\u0646</div>', 2);
const _hoisted_46$1 = { class: "message-checkbox" };
const _hoisted_47$1 = { class: "checkbox is-outlined is-primary" };
const _hoisted_48$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_49$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="name">\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647</span><span class="email">&lt;kelly@vuero.ir&gt;</span><span class="subject">\u0645\u0646\u062A\u0638\u0631 \u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0639\u062F\u06CC \u0628\u0627\u0634\u06CC\u062F</span></div><div class="pushed">16 \u0622\u0628\u0627\u0646</div>', 2);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    conversationId: { type: Number, required: false, default: 0 },
    selectedConversationList: { type: Array, required: false, default: () => [] }
  },
  emits: ["update:conversationId", "update:selectedConversationList"],
  setup(__props, { emit }) {
    const props = __props;
    const unread = ref(true);
    const internalSelection = ref(props.selectedConversationList);
    watchEffect(() => {
      emit("update:selectedConversationList", internalSelection.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 2 && "is-selected", unread.value && "is-unread"]]),
          onClick: _cache[1] || (_cache[1] = () => {
            unread.value = false;
            emit("update:conversationId", 2);
          })
        }, [
          createBaseVNode("div", _hoisted_1$b, [
            createBaseVNode("label", _hoisted_2$b, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 2
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_3$1
            ])
          ]),
          _hoisted_4$b
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 1 && "is-selected"]]),
          onClick: _cache[3] || (_cache[3] = () => emit("update:conversationId", 1))
        }, [
          createBaseVNode("div", _hoisted_6$b, [
            createBaseVNode("label", _hoisted_7$b, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 1
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_8$b
            ])
          ]),
          _hoisted_9$b
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 3 && "is-selected"]]),
          onClick: _cache[5] || (_cache[5] = () => emit("update:conversationId", 3))
        }, [
          createBaseVNode("div", _hoisted_11$b, [
            createBaseVNode("label", _hoisted_12$b, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 3
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_13$b
            ])
          ]),
          _hoisted_14$b
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 4 && "is-selected"]]),
          onClick: _cache[7] || (_cache[7] = () => emit("update:conversationId", 4))
        }, [
          createBaseVNode("div", _hoisted_16$b, [
            createBaseVNode("label", _hoisted_17$b, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 4
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_18$b
            ])
          ]),
          _hoisted_19$1
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 5 && "is-selected"]]),
          onClick: _cache[9] || (_cache[9] = () => emit("update:conversationId", 5))
        }, [
          createBaseVNode("div", _hoisted_21$1, [
            createBaseVNode("label", _hoisted_22$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 5
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_23$1
            ])
          ]),
          _hoisted_24$1
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 6 && "is-selected"]]),
          onClick: _cache[11] || (_cache[11] = () => emit("update:conversationId", 6))
        }, [
          createBaseVNode("div", _hoisted_26$1, [
            createBaseVNode("label", _hoisted_27$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 6
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_28$1
            ])
          ]),
          _hoisted_29$1
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 7 && "is-selected"]]),
          onClick: _cache[13] || (_cache[13] = () => emit("update:conversationId", 7))
        }, [
          createBaseVNode("div", _hoisted_31$1, [
            createBaseVNode("label", _hoisted_32$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 7
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_33$1
            ])
          ]),
          _hoisted_34$1
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 8 && "is-selected"]]),
          onClick: _cache[15] || (_cache[15] = () => emit("update:conversationId", 8))
        }, [
          createBaseVNode("div", _hoisted_36$1, [
            createBaseVNode("label", _hoisted_37$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 8
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_38$1
            ])
          ]),
          _hoisted_39$1
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 9 && "is-selected"]]),
          onClick: _cache[17] || (_cache[17] = () => emit("update:conversationId", 9))
        }, [
          createBaseVNode("div", _hoisted_41$1, [
            createBaseVNode("label", _hoisted_42$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 9
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_43$1
            ])
          ]),
          _hoisted_44$1
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inbox-message", [__props.conversationId === 10 && "is-selected"]]),
          onClick: _cache[19] || (_cache[19] = () => emit("update:conversationId", 10))
        }, [
          createBaseVNode("div", _hoisted_46$1, [
            createBaseVNode("label", _hoisted_47$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => internalSelection.value = $event),
                type: "checkbox",
                value: 10
              }, null, 512), [
                [vModelCheckbox, internalSelection.value]
              ]),
              _hoisted_48$1
            ])
          ]),
          _hoisted_49$1
        ], 2)
      ], 64);
    };
  }
});
const _hoisted_1$a = { class: "header-area" };
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> \u0628\u0631\u0631\u0633\u06CC \u0645\u0647\u0645 \u067E\u0631\u0648\u0698\u0647 \u067E\u0646\u062C\u0634\u0646\u0628\u0647 \u0622\u06CC\u0646\u062F\u0647 </span><span class="sender-email">&lt;melany@vuero.ir&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$a = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$a = [
  _hoisted_4$a
];
const _hoisted_6$a = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$a = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$a = [
  _hoisted_7$a
];
const _hoisted_9$a = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$a = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>21 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 02:33 \u0628.\u0638</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u0645\u0631\u062F\u060C</p><p> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F <strong>\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C</strong><em> \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F</em> \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F. </p><ul><li> \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0645\u06CC \u062A\u0648\u0627\u0646 \u0627\u0645\u06CC\u062F \u062F\u0627\u0634\u062A \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0648 \u062F\u0634\u0648\u0627\u0631\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0627\u0631\u0627\u0626\u0647 \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627 \u0648 \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F </li><li> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. </li></ul><p> \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F. </p><p><em>\u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646</em> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F </p><p>\u0628\u0627 \u062E\u0644\u0648\u0635 \u0646\u06CC\u062A\u060C</p><p>\u0645\u0644\u0627\u0646\u06CC \u0648\u0644\u06CC \u0632\u0627\u062F\u0647 - \u0628\u0646\u06CC\u0627\u0646\u06AF\u0630\u0627\u0631</p></div><div class="attachments-list"><div class="attachment"><span>budget_draft.xlsx</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>project-notes.docx</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$a = { class: "reply-box-wrap" };
const _hoisted_12$a = { class: "reply-bubble" };
const _hoisted_13$a = { class: "reply-as" };
const _hoisted_14$a = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$a = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$a = [
  _hoisted_15$a
];
const _hoisted_17$a = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$a = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["inbox-message-details", [
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ]])
      }, [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0$4,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$a,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$a)
            ]),
            _hoisted_6$a
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$a)
        ]),
        createBaseVNode("div", _hoisted_9$a, [
          _hoisted_10$a,
          createBaseVNode("div", _hoisted_11$a, [
            createBaseVNode("div", _hoisted_12$a, [
              createBaseVNode("div", _hoisted_13$a, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$a,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$a)
                  ]),
                  _hoisted_17$a
                ], 512)
              ]),
              _hoisted_18$a
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$9 = { class: "header-area" };
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u0645 \u0634\u0627\u0645 \u062F\u0641\u0639\u0647 \u0642\u0628\u0644 \u0631\u0627 \u062C\u0628\u0631\u0627\u0646 \u06A9\u0646\u0645</span><span class="sender-email">&lt;jonathan@vuero.ir&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>4</span></div>', 2);
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$9 = [
  _hoisted_4$9
];
const _hoisted_6$9 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$9 = [
  _hoisted_7$9
];
const _hoisted_9$9 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$9 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>22 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 09:17 \u0635\u0628\u062D</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u0639\u0632\u06CC\u0632\u060C</p><p> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F <em>\u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646</em> \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F </p><p> \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F. <em>\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F</em></p><p><strong> \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F</strong> \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 </p><p> \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F. \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0645\u06CC \u062A\u0648\u0627\u0646 \u0627\u0645\u06CC\u062F \u062F\u0627\u0634\u062A \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0648 \u062F\u0634\u0648\u0627\u0631\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0627\u0631\u0627\u0626\u0647 \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627 \u0648 \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC </p><p>\u0627\u0644\u06CC \u062E\u0648\u0634 \u0645\u0631\u0627\u0645</p></div><div class="attachments-list"><div class="attachment"><span>presentation.ppt</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>venue-1.jpg</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>venue-2.jpg</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>venue-3.jpg</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$9 = { class: "reply-box-wrap" };
const _hoisted_12$9 = { class: "reply-bubble" };
const _hoisted_13$9 = { class: "reply-as" };
const _hoisted_14$9 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$9 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$9 = [
  _hoisted_15$9
];
const _hoisted_17$9 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$9 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$9, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_3,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$9,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$9)
            ]),
            _hoisted_6$9
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$9)
        ]),
        createBaseVNode("div", _hoisted_9$9, [
          _hoisted_10$9,
          createBaseVNode("div", _hoisted_11$9, [
            createBaseVNode("div", _hoisted_12$9, [
              createBaseVNode("div", _hoisted_13$9, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$9,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$9)
                  ]),
                  _hoisted_17$9
                ], 512)
              ]),
              _hoisted_18$9
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$8 = { class: "header-area" };
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> \u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0622\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0647\u0627\u06CC \u0628\u0648\u062F\u062C\u0647 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0645\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F</span><span class="sender-email">&lt;greta@vuero.ir&gt;</span></div><div class="attachments is-vhidden inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$8 = [
  _hoisted_4$8
];
const _hoisted_6$8 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$8 = [
  _hoisted_7$8
];
const _hoisted_9$8 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$8 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>20 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 08:43 \u0635\u0628\u062D</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644,</p><p> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F </p><ul><li>\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F</li><li>\u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F</li><li>\u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646</li><li> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F </li><li> \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C </li></ul><p><mark> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. </mark> \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F. </p><p> \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0645\u06CC \u062A\u0648\u0627\u0646 \u0627\u0645\u06CC\u062F \u062F\u0627\u0634\u062A \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0648 \u062F\u0634\u0648\u0627\u0631\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0627\u0631\u0627\u0626\u0647 \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627 \u0648 \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F </p><p> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. </p><p>\u06A9\u0628\u0631\u06CC \u06A9\u0628\u06CC\u0631\u0632\u0627\u062F\u0647</p></div></div>', 1);
const _hoisted_11$8 = { class: "reply-box-wrap" };
const _hoisted_12$8 = { class: "reply-bubble" };
const _hoisted_13$8 = { class: "reply-as" };
const _hoisted_14$8 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$8 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "sl sl-icon-options"
  })
], -1);
const _hoisted_16$8 = [
  _hoisted_15$8
];
const _hoisted_17$8 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$8 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$8, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0$5,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$8,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$8)
            ]),
            _hoisted_6$8
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$8)
        ]),
        createBaseVNode("div", _hoisted_9$8, [
          _hoisted_10$8,
          createBaseVNode("div", _hoisted_11$8, [
            createBaseVNode("div", _hoisted_12$8, [
              createBaseVNode("div", _hoisted_13$8, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$8,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$8)
                  ]),
                  _hoisted_17$8
                ], 512)
              ]),
              _hoisted_18$8
            ])
          ])
        ])
      ], 2);
    };
  }
});
var _imports_0$3 = "/demo/avatars/21.jpg";
const _hoisted_1$7 = { class: "header-area" };
const _hoisted_2$7 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> \u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0645\u0634\u062A\u0631\u06CC \u062C\u062F\u06CC\u062F \u062F\u0631 \u0631\u0648\u0632 \u062F\u0648\u0634\u0646\u0628\u0647 </span><span class="sender-email">&lt;elizabeth@vuero.ir&gt;</span></div><div class="attachments is-vhidden inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>0</span></div>', 2);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$7 = [
  _hoisted_4$7
];
const _hoisted_6$7 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$7 = [
  _hoisted_7$7
];
const _hoisted_9$7 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$7 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>19 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 04:27 \u0628.\u0638</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u0622\u0642\u0627\u06CC \u06A9\u0648\u0627\u0644\u0633\u06A9\u06CC</p><p> \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F <a href="#">\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F</a> \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 </p><ul><li>\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F</li><li> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. </li><li> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F </li><li>\u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F</li></ul><p>\u0627\u0644\u06CC\u0632\u0627\u0628\u062A</p></div></div>', 1);
const _hoisted_11$7 = { class: "reply-box-wrap" };
const _hoisted_12$7 = { class: "reply-bubble" };
const _hoisted_13$7 = { class: "reply-as" };
const _hoisted_14$7 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$7 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "sl sl-icon-options"
  })
], -1);
const _hoisted_16$7 = [
  _hoisted_15$7
];
const _hoisted_17$7 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$7 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$7, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0$3,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$7,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$7)
            ]),
            _hoisted_6$7
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$7)
        ]),
        createBaseVNode("div", _hoisted_9$7, [
          _hoisted_10$7,
          createBaseVNode("div", _hoisted_11$7, [
            createBaseVNode("div", _hoisted_12$7, [
              createBaseVNode("div", _hoisted_13$7, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$7,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$7)
                  ]),
                  _hoisted_17$7
                ], 512)
              ]),
              _hoisted_18$7
            ])
          ])
        ])
      ], 2);
    };
  }
});
var _imports_0$2 = "/demo/avatars/27.jpg";
const _hoisted_1$6 = { class: "header-area" };
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> \u0645\u0646 \u0686\u06CC\u0632\u0647\u0627\u06CC \u062C\u0627\u0644\u0628 \u0648 \u062C\u062F\u06CC\u062F\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0631\u062F\u0645 \u06A9\u0647 \u062D\u062A\u0645\u0627\u064B \u0628\u0627\u06CC\u062F \u0628\u0628\u06CC\u0646\u06CC\u062F </span><span class="sender-email">&lt;carmen@vuero.ir&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$6 = [
  _hoisted_4$6
];
const _hoisted_6$6 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$6 = [
  _hoisted_7$6
];
const _hoisted_9$6 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$6 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>19 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 07:48 \u0628.\u0638</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644,</p><p> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. <a href="http://loripsum.net/"> \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F</a> \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F </p><ul><li>\u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0645\u06CC \u062A\u0648\u0627\u0646 \u0627\u0645\u06CC\u062F \u062F\u0627\u0634\u062A \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0648 \u062F\u0634\u0648\u0627\u0631\u06CC</li><li> \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC </li><li>\u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</li><li>\u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F.</li></ul><p>\u062D\u062A\u0645\u0627 \u0628\u0639\u062F \u06A9\u0627\u0631 \u0628\u0647\u0645 \u0632\u0646\u06AF \u0628\u0632\u0646</p></div><div class="attachments-list"><div class="attachment"><span>stuff.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>cool_stuff.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$6 = { class: "reply-box-wrap" };
const _hoisted_12$6 = { class: "reply-bubble" };
const _hoisted_13$6 = { class: "reply-as" };
const _hoisted_14$6 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$6 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$6 = [
  _hoisted_15$6
];
const _hoisted_17$6 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$6 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$6, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0$2,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$6,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$6)
            ]),
            _hoisted_6$6
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$6)
        ]),
        createBaseVNode("div", _hoisted_9$6, [
          _hoisted_10$6,
          createBaseVNode("div", _hoisted_11$6, [
            createBaseVNode("div", _hoisted_12$6, [
              createBaseVNode("div", _hoisted_13$6, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$6,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$6)
                  ]),
                  _hoisted_17$6
                ], 512)
              ]),
              _hoisted_18$6
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$5 = { class: "header-area" };
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title">\u06AF\u0632\u0627\u0631\u0634 \u062A\u0648\u0644\u06CC\u062F \u0633\u0631\u0628 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647</span><span class="sender-email">&lt;irina@vuero.ir&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>1</span></div>', 2);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$5 = [
  _hoisted_4$5
];
const _hoisted_6$5 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$5 = [
  _hoisted_7$5
];
const _hoisted_9$5 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$5 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>18 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 11:12 \u0635\u0628\u062D</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645,</p><p> \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0645\u06CC \u062A\u0648\u0627\u0646 \u0627\u0645\u06CC\u062F \u062F\u0627\u0634\u062A \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0648 \u062F\u0634\u0648\u0627\u0631\u06CC <mark>\u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</mark><mark>\u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F.</mark> \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC </p><ul><li>\u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</li><li> \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F </li><li> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F </li></ul><p><a href="http://loripsum.net/">\u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F.</a> \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC <a href="http://loripsum.net/">\u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F.</a><a href="http://loripsum.net/">\u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</a></p><p>\u0647\u0631\u06AF\u0627\u0647 \u0648\u0642\u062A \u062E\u0648\u0627\u0646\u062F\u0646 \u0622\u0646 \u0631\u0627 \u062F\u0627\u0634\u062A\u06CC\u062F \u0628\u0647 \u0645\u0646 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F.</p></div><div class="attachments-list"><div class="attachment"><span>lead-report_february.pdf</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$5 = { class: "reply-box-wrap" };
const _hoisted_12$5 = { class: "reply-bubble" };
const _hoisted_13$5 = { class: "reply-as" };
const _hoisted_14$5 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$5 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$5 = [
  _hoisted_15$5
];
const _hoisted_17$5 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$5 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0$6,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$5,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$5)
            ]),
            _hoisted_6$5
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$5)
        ]),
        createBaseVNode("div", _hoisted_9$5, [
          _hoisted_10$5,
          createBaseVNode("div", _hoisted_11$5, [
            createBaseVNode("div", _hoisted_12$5, [
              createBaseVNode("div", _hoisted_13$5, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$5,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$5)
                  ]),
                  _hoisted_17$5
                ], 512)
              ]),
              _hoisted_18$5
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$4 = { class: "header-area" };
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> \u0627\u06CC\u062F\u0647 \u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0637\u0631\u0627\u062D\u06CC \u0627\u0632 \u062A\u06CC\u0645 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 </span><span class="sender-email">&lt;alejandro@vuero.ir&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>2</span></div>', 2);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$4 = [
  _hoisted_4$4
];
const _hoisted_6$4 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$4 = [
  _hoisted_7$4
];
const _hoisted_9$4 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$4 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>18 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 10:16 \u0635\u0628\u062D</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644,</p><p> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. <mark>\u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F.</mark></p><p><a href="http://loripsum.net/"> \u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</a> \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC </p><ul><li>\u0647\u0631\u06AF\u0627\u0647 \u0648\u0642\u062A \u062E\u0648\u0627\u0646\u062F\u0646 \u0622\u0646 \u0631\u0627 \u062F\u0627\u0634\u062A\u06CC\u062F \u0628\u0647 \u0645\u0646 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F.</li><li>\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F</li><li>\u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F.</li><li>\u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0645\u06CC \u062A\u0648\u0627\u0646 \u0627\u0645\u06CC\u062F \u062F\u0627\u0634\u062A \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0648 \u062F\u0634\u0648\u0627\u0631\u06CC</li></ul><p>\u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646</p><p>\u0639\u0644\u06CC \u0698\u0627\u0646\u062F\u0627\u0631\u0645</p></div><div class="attachments-list"><div class="attachment"><span>landing-page.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div><div class="attachment"><span>dashboard.png</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$4 = { class: "reply-box-wrap" };
const _hoisted_12$4 = { class: "reply-bubble" };
const _hoisted_13$4 = { class: "reply-as" };
const _hoisted_14$4 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$4 = [
  _hoisted_15$4
];
const _hoisted_17$4 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$4 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0$7,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$4,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$4)
            ]),
            _hoisted_6$4
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$4)
        ]),
        createBaseVNode("div", _hoisted_9$4, [
          _hoisted_10$4,
          createBaseVNode("div", _hoisted_11$4, [
            createBaseVNode("div", _hoisted_12$4, [
              createBaseVNode("div", _hoisted_13$4, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$4,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$4)
                  ]),
                  _hoisted_17$4
                ], 512)
              ]),
              _hoisted_18$4
            ])
          ])
        ])
      ], 2);
    };
  }
});
var _imports_0$1 = "/demo/avatars/28.jpg";
const _hoisted_1$3 = { class: "header-area" };
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title"> \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0645\u0634\u062A\u0631\u06CC \u06AF\u0632\u0627\u0631\u0634 \u0627\u0634\u06A9\u0627\u0644 \u0641\u0648\u0631\u06CC\u0647 </span><span class="sender-email">&lt;edouard@vuero.ir&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>1</span></div>', 2);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$3 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$3 = [
  _hoisted_7$3
];
const _hoisted_9$3 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$3 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>17 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 02:29 \u0628.\u0638</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645,</p><p> \u0647\u0631\u06AF\u0627\u0647 \u0648\u0642\u062A \u062E\u0648\u0627\u0646\u062F\u0646 \u0622\u0646 \u0631\u0627 \u062F\u0627\u0634\u062A\u06CC\u062F \u0628\u0647 \u0645\u0646 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F. <a href="#">\u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</a> \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F </p><ul><li>\u0647\u0631\u06AF\u0627\u0647 \u0648\u0642\u062A \u062E\u0648\u0627\u0646\u062F\u0646 \u0622\u0646 \u0631\u0627 \u062F\u0627\u0634\u062A\u06CC\u062F \u0628\u0647 \u0645\u0646 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F.</li><li> \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC </li></ul><p>\u06A9\u0631\u06CC\u0645</p></div><div class="attachments-list"><div class="attachment"><span>report.pdf</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$3 = { class: "reply-box-wrap" };
const _hoisted_12$3 = { class: "reply-bubble" };
const _hoisted_13$3 = { class: "reply-as" };
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$3 = [
  _hoisted_15$3
];
const _hoisted_17$3 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0$1,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$3,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$3)
            ]),
            _hoisted_6$3
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$3)
        ]),
        createBaseVNode("div", _hoisted_9$3, [
          _hoisted_10$3,
          createBaseVNode("div", _hoisted_11$3, [
            createBaseVNode("div", _hoisted_12$3, [
              createBaseVNode("div", _hoisted_13$3, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$3,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$3)
                  ]),
                  _hoisted_17$3
                ], 512)
              ]),
              _hoisted_18$3
            ])
          ])
        ])
      ], 2);
    };
  }
});
var _imports_0 = "/demo/avatars/24.jpg";
const _hoisted_1$2 = { class: "header-area" };
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title">\u0628\u0647 \u0622\u062E\u0631\u06CC\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u0646 \u062C\u0648\u0627\u0628 \u0646\u062F\u0627\u062F\u06CC!</span><span class="sender-email">&lt;sandrine@vuero.ir&gt;</span></div><div class="attachments is-vhidden inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>0</span></div>', 2);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$2 = [
  _hoisted_4$2
];
const _hoisted_6$2 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$2 = [
  _hoisted_7$2
];
const _hoisted_9$2 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$2 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>17 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 08:21 \u0635\u0628\u062D</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u0622\u0642\u0627\u06CC \u06A9\u0648\u0627\u0644\u0633\u06A9\u06CC</p><p> \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F <a href="#">\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F</a> \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 </p><ul><li>\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F</li><li> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. </li><li> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F </li><li>\u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F</li></ul><p>\u0633\u0627\u0646\u062F\u0631\u06CC\u0646</p></div></div>', 1);
const _hoisted_11$2 = { class: "reply-box-wrap" };
const _hoisted_12$2 = { class: "reply-bubble" };
const _hoisted_13$2 = { class: "reply-as" };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$2 = [
  _hoisted_15$2
];
const _hoisted_17$2 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_0,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$2,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$2)
            ]),
            _hoisted_6$2
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$2)
        ]),
        createBaseVNode("div", _hoisted_9$2, [
          _hoisted_10$2,
          createBaseVNode("div", _hoisted_11$2, [
            createBaseVNode("div", _hoisted_12$2, [
              createBaseVNode("div", _hoisted_13$2, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$2,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$2)
                  ]),
                  _hoisted_17$2
                ], 512)
              ]),
              _hoisted_18$2
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$1 = { class: "header-area" };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<div class="message-meta"><span class="message-title">\u0645\u0646\u062A\u0638\u0631 \u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0639\u062F\u06CC \u0628\u0627\u0634\u06CC\u062F</span><span class="sender-email">&lt;kelly@vuero.ir&gt;</span></div><div class="attachments inbox-hidden-mobile"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i><span>1</span></div>', 2);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i><span>\u0628\u0648\u06A9 \u0645\u0627\u0631\u06A9</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i><span>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0627\u0645</span></a><hr class="dropdown-divider"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i><span>\u0627\u0633\u067E\u0645 \u0627\u0633\u062A</span></a></div></div>', 1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_8$1 = [
  _hoisted_7$1
];
const _hoisted_9$1 = { class: "message-wrapper has-slimscroll" };
const _hoisted_10$1 = /* @__PURE__ */ createStaticVNode('<div class="message-inner"><div class="message-head"><div class="info"><span>\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631</span><span>16 \u0622\u0628\u0627\u0646 1400, \u062F\u0631 09:31 \u0635\u0628\u062D</span></div><div class="message-actions"><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:corner-up-left"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:tag"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></a><a class="inbox-action"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></a></div></div><div class="mail-content content"><p>\u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644,</p><p> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. </p><p> \u0647\u0631\u06AF\u0627\u0647 \u0648\u0642\u062A \u062E\u0648\u0627\u0646\u062F\u0646 \u0622\u0646 \u0631\u0627 \u062F\u0627\u0634\u062A\u06CC\u062F \u0628\u0647 \u0645\u0646 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F. <a href="http://loripsum.net/">\u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</a> \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC </p><ul><li>\u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F.</li><li> \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F </li><li> \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC </li></ul><p> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. </p><p>\u0644\u0627\u0644\u0647</p></div><div class="attachments-list"><div class="attachment"><span>iteration-4.pdf</span><div class="download-icon"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i></div></div></div></div>', 1);
const _hoisted_11$1 = { class: "reply-box-wrap" };
const _hoisted_12$1 = { class: "reply-bubble" };
const _hoisted_13$1 = { class: "reply-as" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("div", { class: "reply-details" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0633\u062E\u200C\u062F\u0647\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "erik@vuero.ir")
], -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_16$1 = [
  _hoisted_15$1
];
const _hoisted_17$1 = /* @__PURE__ */ createStaticVNode('<div class="dropdown-menu"><div class="dropdown-content"><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:refresh-cw"></i><span>\u0627\u0632 \u0646\u0648 \u0633\u0627\u0632\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:align-left"></i><span>\u063A\u0644\u0637\u200C\u06AF\u06CC\u0631\u06CC</span></a><a class="dropdown-item"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i><span>\u0646\u0627\u0645 \u0628\u0631\u062F\u0646</span></a></div></div>', 1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "6",
    placeholder: "\u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..."
  }),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "button"
  }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0627\u0633\u062E")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    selected: { type: Boolean, required: false },
    mobileMessageOpen: { type: Boolean, required: false }
  },
  emits: ["update:mobileMessageOpen"],
  setup(__props, { emit }) {
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[
          __props.mobileMessageOpen && __props.selected && "mobile-active tablet-active",
          unref(isMediumScreen) && !__props.selected && "is-hidden"
        ], "inbox-message-details"])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("img", {
            class: "sender-pic",
            src: _imports_4$1,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 32),
          _hoisted_2$1,
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["dropdownElement1"] = _value;
              dropdownElement1.value = _value;
            },
            class: "dropdown inbox-dropdown dropdown-trigger is-left"
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                class: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
              }, _hoisted_5$1)
            ]),
            _hoisted_6$1
          ], 512),
          createBaseVNode("a", {
            class: "inbox-action inbox-close-details-mobile",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("update:mobileMessageOpen", false))
          }, _hoisted_8$1)
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          _hoisted_10$1,
          createBaseVNode("div", _hoisted_11$1, [
            createBaseVNode("div", _hoisted_12$1, [
              createBaseVNode("div", _hoisted_13$1, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                }, null, 32),
                _hoisted_14$1,
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement2"] = _value;
                    dropdownElement2.value = _value;
                  },
                  class: "dropdown inbox-dropdown dropdown-trigger is-left"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "button",
                      onClick: _cache[4] || (_cache[4] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                    }, _hoisted_16$1)
                  ]),
                  _hoisted_17$1
                ], 512)
              ]),
              _hoisted_18$1
            ])
          ])
        ])
      ], 2);
    };
  }
});
var _imports_4 = "/demo/avatars/38.jpg";
var inbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "inbox-wrapper" };
const _hoisted_2 = { class: "wrapper-inner" };
const _hoisted_3 = { class: "header-area" };
const _hoisted_4 = { class: "inbox-title" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u06CC\u0646\u0628\u0627\u06A9\u0633", -1);
const _hoisted_6 = { class: "dark-mode" };
const _hoisted_7 = ["checked"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-menu" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:refresh-cw"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u0648\u0633\u0627\u0632\u06CC")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:bell"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user-plus"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0639\u0648\u062A \u0627\u0632 \u062F\u06CC\u06AF\u0631\u0627\u0646")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:settings"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A")
    ])
  ])
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = { class: "sidebar-inner" };
const _hoisted_15 = { class: "inner-menu" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("a", { class: "button compose-button is-fullwidth" }, "\u0627\u06CC\u062C\u0627\u062F \u0627\u06CC\u0645\u06CC\u0644", -1);
const _hoisted_17 = { class: "inbox-menu" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:mail"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u06CC\u0646\u0628\u0627\u06A9\u0633", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "24", -1);
const _hoisted_21 = [
  _hoisted_18,
  _hoisted_19,
  _hoisted_20
];
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:file-text"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u0634\u200C\u0646\u0648\u06CC\u0633\u200C\u0647\u0627", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "2", -1);
const _hoisted_25 = [
  _hoisted_22,
  _hoisted_23,
  _hoisted_24
];
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:send"
}, null, -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "7", -1);
const _hoisted_29 = [
  _hoisted_26,
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:trash-2"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", null, "\u0632\u0628\u0627\u0644\u0647\u200C\u062F\u0627\u0646", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "18", -1);
const _hoisted_33 = [
  _hoisted_30,
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:alert-octagon"
}, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0633\u067E\u0645", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", { class: "tag" }, "29", -1);
const _hoisted_37 = [
  _hoisted_34,
  _hoisted_35,
  _hoisted_36
];
const _hoisted_38 = { class: "scroll-menu" };
const _hoisted_39 = { class: "title-wrap" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u0627\u0637\u0628\u0627\u0646..."
}, null, -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:search"
  })
], -1);
const _hoisted_42 = [
  _hoisted_40,
  _hoisted_41
];
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_44 = [
  _hoisted_43
];
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_46 = [
  _hoisted_45
];
const _hoisted_47 = { class: "contact-list has-slimscroll" };
const _hoisted_48 = { class: "contact-block" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633"),
  /* @__PURE__ */ createBaseVNode("span", null, "alice@vuero.ir")
], -1);
const _hoisted_50 = { class: "contact-block" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0644\u0627\u0646\u06CC \u0648\u0644\u06CC \u0632\u0627\u062F\u0647"),
  /* @__PURE__ */ createBaseVNode("span", null, "melany@vuero.ir")
], -1);
const _hoisted_52 = { class: "contact-block" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0633\u062A\u0641\u0627\u0646 \u06A9\u0627\u0633\u062A \u0641\u0631\u0648\u0634"),
  /* @__PURE__ */ createBaseVNode("span", null, "esteban@vuero.ir")
], -1);
const _hoisted_54 = { class: "contact-block" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9\u0627\u0631\u06AF\u0631"),
  /* @__PURE__ */ createBaseVNode("span", null, "jonathan@vuero.ir")
], -1);
const _hoisted_56 = { class: "contact-block" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "contact-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0631\u06CC\u0633\u062A\u06CC \u062F\u0627\u0644\u0627\u0633"),
  /* @__PURE__ */ createBaseVNode("span", null, "christie@vuero.ir")
], -1);
const _hoisted_58 = { class: "inbox-messages" };
const _hoisted_59 = { class: "header-area" };
const _hoisted_60 = { class: "actions" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_62 = [
  _hoisted_61
];
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:check"
}, null, -1);
const _hoisted_64 = [
  _hoisted_63
];
const _hoisted_65 = { class: "actions" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "control inbox-search has-icon" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "text",
    class: "input is-rounded",
    placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0627\u06CC\u0646\u0628\u0627\u06A9\u0633..."
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:search"
    })
  ])
], -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:more-vertical"
  })
], -1);
const _hoisted_68 = [
  _hoisted_67
];
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-menu" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:check"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u0647\u0645\u0647 \u062E\u0648\u0627\u0646\u062F\u0647 \u0634\u062F")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:eye-off"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0648\u0627\u0646\u062F\u0647 \u0646\u0634\u062F\u0647\u200C\u0647\u0627")
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:calendar"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0631\u062A\u0628\u200C\u0633\u0627\u0632\u06CC \u0628\u0627 \u062A\u0627\u0631\u06CC\u062E")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0631\u062A\u0628\u200C\u0633\u0627\u0632\u06CC \u0628\u0627 \u06A9\u0627\u0631\u0628\u0631")
    ])
  ])
], -1);
const _hoisted_70 = { class: "messages-list has-slimscroll" };
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("div", { class: "inbox-message-overlay" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "loader is-loading" })
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const contactSearchOpen = ref(false);
    const activeTab = ref("inbox");
    const selectedConversationId = ref(1);
    const selectedConversationList = ref([]);
    const mobileMessageOpen = ref(true);
    const mobileSidebarOpen = ref(false);
    const isAllChecked = computed(() => {
      return selectedConversationList.value.length === 10;
    });
    const toggleSelection = () => {
      if (isAllChecked.value) {
        selectedConversationList.value.splice(0, selectedConversationList.value.length);
      } else {
        selectedConversationList.value.splice(0, selectedConversationList.value.length);
        selectedConversationList.value.push(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      }
    };
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    watch(selectedConversationId, () => {
      mobileMessageOpen.value = true;
    });
    useHead({
      title: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627 2 - \u0633\u0627\u06CC\u062F\u0628\u0631 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_InboxMessagesList = _sfc_main$b;
      const _component_Message1 = _sfc_main$a;
      const _component_Message2 = _sfc_main$9;
      const _component_Message3 = _sfc_main$8;
      const _component_Message4 = _sfc_main$7;
      const _component_Message5 = _sfc_main$6;
      const _component_Message6 = _sfc_main$5;
      const _component_Message7 = _sfc_main$4;
      const _component_Message8 = _sfc_main$3;
      const _component_Message9 = _sfc_main$2;
      const _component_Message10 = _sfc_main$1;
      const _component_MinimalLayout = _sfc_main$c;
      return openBlock(), createBlock(_component_MinimalLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", {
                class: normalizeClass(["inbox-sidebar", [mobileSidebarOpen.value && "mobile-active"]])
              }, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_RouterLink, {
                      to: { name: "index" },
                      class: "inbox-brand"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AnimatedLogo, {
                          width: "36px",
                          height: "36px"
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_5,
                    createBaseVNode("label", _hoisted_6, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        checked: !unref(isDark),
                        onChange: _cache[0] || (_cache[0] = (...args) => unref(toggleDarkModeHandler) && unref(toggleDarkModeHandler)(...args))
                      }, null, 40, _hoisted_7),
                      _hoisted_8
                    ])
                  ]),
                  createBaseVNode("div", {
                    ref: (_value, _refs) => {
                      _refs["dropdownElement1"] = _value;
                      dropdownElement1.value = _value;
                    },
                    class: "dropdown inbox-dropdown dropdown-trigger is-left"
                  }, [
                    createBaseVNode("div", null, [
                      createBaseVNode("button", {
                        class: "button",
                        onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
                      }, _hoisted_10)
                    ]),
                    _hoisted_11
                  ], 512),
                  createBaseVNode("a", {
                    class: "inbox-action inbox-close-sidebar-mobile",
                    "aria-label": "Close",
                    onClick: _cache[2] || (_cache[2] = ($event) => mobileSidebarOpen.value = false)
                  }, _hoisted_13)
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    _hoisted_16,
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "inbox" && "is-active"]),
                            onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "inbox")
                          }, _hoisted_21, 2)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "drafts" && "is-active"]),
                            onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "drafts")
                          }, _hoisted_25, 2)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "sent" && "is-active"]),
                            onClick: _cache[5] || (_cache[5] = ($event) => activeTab.value = "sent")
                          }, _hoisted_29, 2)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "trash" && "is-active"]),
                            onClick: _cache[6] || (_cache[6] = ($event) => activeTab.value = "trash")
                          }, _hoisted_33, 2)
                        ]),
                        createBaseVNode("li", null, [
                          createBaseVNode("a", {
                            class: normalizeClass([activeTab.value === "span" && "is-active"]),
                            onClick: _cache[7] || (_cache[7] = ($event) => activeTab.value = "span")
                          }, _hoisted_37, 2)
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createBaseVNode("div", _hoisted_39, [
                      createBaseVNode("h3", {
                        class: normalizeClass([contactSearchOpen.value && "is-hidden"])
                      }, "\u0645\u062E\u0627\u0637\u0628\u06CC\u0646", 2),
                      createBaseVNode("div", {
                        class: normalizeClass([[!contactSearchOpen.value && "is-hidden"], "control has-icon"])
                      }, _hoisted_42, 2),
                      createBaseVNode("a", {
                        class: normalizeClass([[contactSearchOpen.value && "is-hidden"], "button search-button"]),
                        "aria-label": "Search"
                      }, [
                        createBaseVNode("span", {
                          class: "icon is-small",
                          onClick: _cache[8] || (_cache[8] = ($event) => contactSearchOpen.value = true)
                        }, _hoisted_44)
                      ], 2),
                      createBaseVNode("a", {
                        class: normalizeClass([[!contactSearchOpen.value && "is-hidden"], "button cancel-search-button"]),
                        "aria-label": "Close"
                      }, [
                        createBaseVNode("span", {
                          class: "icon is-small",
                          onClick: _cache[9] || (_cache[9] = ($event) => contactSearchOpen.value = false)
                        }, _hoisted_46)
                      ], 2)
                    ]),
                    createBaseVNode("div", _hoisted_47, [
                      createBaseVNode("div", _hoisted_48, [
                        createBaseVNode("img", {
                          src: _imports_2,
                          alt: "",
                          onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_49
                      ]),
                      createBaseVNode("div", _hoisted_50, [
                        createBaseVNode("img", {
                          src: _imports_0$4,
                          alt: "",
                          onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_51
                      ]),
                      createBaseVNode("div", _hoisted_52, [
                        createBaseVNode("img", {
                          src: _imports_2$1,
                          alt: "",
                          onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_53
                      ]),
                      createBaseVNode("div", _hoisted_54, [
                        createBaseVNode("img", {
                          src: _imports_3,
                          alt: "",
                          onErrorOnce: _cache[13] || (_cache[13] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_55
                      ]),
                      createBaseVNode("div", _hoisted_56, [
                        createBaseVNode("img", {
                          src: _imports_4,
                          alt: "",
                          onErrorOnce: _cache[14] || (_cache[14] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_57
                      ])
                    ])
                  ])
                ])
              ], 2),
              createBaseVNode("div", _hoisted_58, [
                createBaseVNode("div", _hoisted_59, [
                  createBaseVNode("div", _hoisted_60, [
                    createBaseVNode("a", {
                      class: "inbox-action mobile-menu-action",
                      "aria-label": "Open messages list",
                      onClick: _cache[15] || (_cache[15] = ($event) => mobileSidebarOpen.value = true)
                    }, _hoisted_62),
                    createBaseVNode("a", {
                      class: normalizeClass(["inbox-action check-all-action", [unref(isAllChecked) && "is-checked"]]),
                      "aria-label": "Toggle selection",
                      onClick: toggleSelection
                    }, _hoisted_64, 2)
                  ]),
                  createBaseVNode("div", _hoisted_65, [
                    _hoisted_66,
                    createBaseVNode("div", {
                      ref: (_value, _refs) => {
                        _refs["dropdownElement2"] = _value;
                        dropdownElement2.value = _value;
                      },
                      class: "dropdown inbox-dropdown dropdown-trigger is-left"
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("button", {
                          class: "button",
                          onClick: _cache[16] || (_cache[16] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                        }, _hoisted_68)
                      ]),
                      _hoisted_69
                    ], 512)
                  ])
                ]),
                createBaseVNode("div", _hoisted_70, [
                  createVNode(_component_InboxMessagesList, {
                    conversationId: selectedConversationId.value,
                    "onUpdate:conversationId": _cache[17] || (_cache[17] = ($event) => selectedConversationId.value = $event),
                    selectedConversationList: selectedConversationList.value,
                    "onUpdate:selectedConversationList": _cache[18] || (_cache[18] = ($event) => selectedConversationList.value = $event)
                  }, null, 8, ["conversationId", "selectedConversationList"])
                ])
              ]),
              _hoisted_71,
              createVNode(_component_Message1, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[19] || (_cache[19] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 1
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message2, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[20] || (_cache[20] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 2
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message3, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[21] || (_cache[21] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 3
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message4, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[22] || (_cache[22] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 4
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message5, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[23] || (_cache[23] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 5
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message6, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[24] || (_cache[24] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 6
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message7, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[25] || (_cache[25] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 7
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message8, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[26] || (_cache[26] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 8
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message9, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[27] || (_cache[27] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 9
              }, null, 8, ["mobile-message-open", "selected"]),
              createVNode(_component_Message10, {
                "mobile-message-open": mobileMessageOpen.value,
                "onUpdate:mobile-message-open": _cache[28] || (_cache[28] = ($event) => mobileMessageOpen.value = $event),
                selected: selectedConversationId.value === 10
              }, null, 8, ["mobile-message-open", "selected"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
