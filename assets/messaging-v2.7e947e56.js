import { a as __unplugin_components_0, e as _sfc_main$g } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$e } from "./ToolbarNotification.0ddce444.js";
import { _ as _sfc_main$f } from "./Toolbar.278fa677.js";
import { _ as _sfc_main$d } from "./VAvatar.879e77ac.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, G as Fragment, J as renderList, n as normalizeClass, v as createVNode, e as createBaseVNode, E as toDisplayString, t as unref, B as createTextVNode, r as ref, h as computed, K as useHead, N as createBlock, x as withCtx } from "./vendor.9ec557a4.js";
import { _ as _imports_4 } from "./11.27f9c2c8.js";
import { _ as _imports_1$5 } from "./vuero-1.6816f54f.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { _ as _imports_0, a as _imports_0$1, b as _imports_3$4, c as _imports_0$2, d as _imports_2$2 } from "./18.e0bb6643.js";
import { _ as _imports_3$2 } from "./13.d1ef5906.js";
import { _ as _imports_3$3, a as _imports_4$1, b as _imports_5$2, c as _imports_6, d as _imports_7, e as _imports_8, f as _imports_9, g as _imports_10, h as _imports_11, i as _imports_12, j as _imports_13, k as _imports_14 } from "./12.f6cf0ae7.js";
import { _ as _imports_5 } from "./12.16c4b7ba.js";
import { _ as _imports_2$1, a as _imports_0$3 } from "./25.ca54486f.js";
import { _ as _imports_5$1 } from "./5.35997873.js";
import { _ as _imports_1$6 } from "./22.7f9d419d.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import { u as useDropdown } from "./useDropdown.086619d7.js";
const _hoisted_1$c = ["onClick"];
const _hoisted_2$c = { class: "conversation-detail" };
const _hoisted_3$c = { class: "conversation-username" };
const _hoisted_4$c = { class: "conversation-content" };
const _hoisted_5$c = { class: "conversation-message" };
const _hoisted_6$c = { class: "conversation-date" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    conversations: { type: Array, required: false, default: () => [] },
    conversationId: { type: Number, required: false, default: 0 },
    mobileConversationListOpen: { type: Boolean, required: false }
  },
  emits: ["toggleMobileConversation", "update:conversationId"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$d;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[__props.mobileConversationListOpen && "is-active"], "conversation-area"]),
        "data-simplebar": ""
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.conversations, (conversation) => {
          return openBlock(), createElementBlock("div", {
            key: conversation.id,
            class: normalizeClass(["conversation", [__props.conversationId === conversation.id && "active"]]),
            onClick: () => {
              emit("update:conversationId", conversation.id);
              emit("toggleMobileConversation");
            }
          }, [
            createVNode(_component_VAvatar, {
              picture: conversation.avatar.picture,
              color: conversation.avatar.color,
              initials: conversation.avatar.initials
            }, null, 8, ["picture", "color", "initials"]),
            createBaseVNode("div", _hoisted_2$c, [
              createBaseVNode("div", _hoisted_3$c, toDisplayString(conversation.name), 1),
              createBaseVNode("div", _hoisted_4$c, [
                createBaseVNode("span", _hoisted_5$c, toDisplayString(conversation.lastMessagePreview), 1),
                createBaseVNode("span", _hoisted_6$c, toDisplayString(conversation.lastMessage), 1)
              ])
            ])
          ], 10, _hoisted_1$c);
        }), 128))
      ], 2);
    };
  }
});
var _imports_3$1 = "/demo/photos/apps/7.png";
const _hoisted_1$b = {
  id: "navbar-conversation-1",
  class: "chat-area-content"
};
const _hoisted_2$b = { class: "chat-area-header" };
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_3$b
];
const _hoisted_5$b = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647", -1);
const _hoisted_6$b = { class: "chat-area-group" };
const _hoisted_7$b = { class: "chat-area-main" };
const _hoisted_8$b = { class: "chat-msg" };
const _hoisted_9$b = { class: "chat-msg-profile" };
const _hoisted_10$b = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 1:03 \u0628.\u0638", -1);
const _hoisted_11$b = { class: "chat-msg-content" };
const _hoisted_12$b = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644 \u060C \u0686\u0647 \u062E\u0628\u0631\u061F", -1);
const _hoisted_13$b = { class: "chat-msg-text" };
const _hoisted_14$b = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0641\u06A9\u0631 \u0645\u06CC \u06A9\u0646\u0645 \u0648\u0642\u062A \u0622\u0646 \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u0627\u0633\u0644\u0627\u06CC\u062F\u0647\u0627\u06CC \u0645\u0648\u0631\u062F \u0628\u062D\u062B \u062E\u0648\u062F \u0631\u0627 \u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u0645. ", -1);
const _hoisted_15$b = { class: "chat-msg owner" };
const _hoisted_16$7 = { class: "chat-msg-profile" };
const _hoisted_17$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 1:22 \u0628.\u0638", -1);
const _hoisted_18$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" \u0628\u0644\u0647 \u060C \u0645\u06CC \u062F\u0627\u0646\u0645 \u060C \u062E\u0628 \u0645\u0646 \u0627\u0632 \u0627\u06CC\u0646 \u0628\u0627\u0628\u062A \u06A9\u0645\u06CC \u0628\u062F\u0628\u062E\u062A \u0647\u0633\u062A\u0645 "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Faces with Tears of Joy"
    }, "\u{1F602}"),
    /* @__PURE__ */ createTextVNode(". ")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u0646 \u062A\u0627 \u0633\u0627\u0639\u062A 4 \u0635\u0628\u062D \u0631\u0648\u06CC \u0622\u0646 \u06A9\u0627\u0631 \u0645\u06CC \u06A9\u0631\u062F\u0645.")
], -1);
const _hoisted_19$6 = { class: "chat-msg" };
const _hoisted_20$5 = { class: "chat-msg-profile" };
const _hoisted_21$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 1:22 \u0628.\u0638", -1);
const _hoisted_22$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0627\u0648\u0647 \u062E\u062F\u0627\u06CC \u0645\u0646! \u0627\u06CC\u0646\u0642\u062F\u0631 \u0628\u0647 \u062E\u0648\u062F\u062A \u0641\u0634\u0627\u0631 \u0646\u06CC\u0627\u0631! "),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0641\u0631\u062F\u0627 \u0628\u0627\u06CC\u062F \u06A9\u0645\u06CC \u0627\u0633\u062A\u0631\u0627\u062D\u062A \u06A9\u0646\u06CC"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u062C\u0644\u0633\u0647 \u0645\u0627 \u0633\u0627\u0639\u062A \u0686\u0646\u062F \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u06CC\u0632\u06CC \u0634\u062F\u0647 \u0628\u0648\u062F\u061F")
], -1);
const _hoisted_23$3 = { class: "chat-msg owner" };
const _hoisted_24$3 = { class: "chat-msg-profile" };
const _hoisted_25$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 1:23 \u0628.\u0638", -1);
const _hoisted_26$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "3:15 \u0628.\u0638 \u0627\u0639\u062A\u0642\u0627\u062F \u062F\u0627\u0631\u0645."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0627\u062C\u0627\u0632\u0647 \u062F\u0647\u06CC\u062F \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u0645")
], -1);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createBaseVNode("div", _hoisted_2$b, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$b),
          _hoisted_5$b,
          createBaseVNode("div", _hoisted_6$b, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_4,
              alt: "",
              "data-user-popover": "13",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$b, [
          createBaseVNode("div", _hoisted_8$b, [
            createBaseVNode("div", _hoisted_9$b, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_4,
                alt: "",
                "data-user-popover": "13",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$b
            ]),
            createBaseVNode("div", _hoisted_11$b, [
              _hoisted_12$b,
              createBaseVNode("div", _hoisted_13$b, [
                createBaseVNode("img", {
                  src: _imports_3$1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_14$b
            ])
          ]),
          createBaseVNode("div", _hoisted_15$b, [
            createBaseVNode("div", _hoisted_16$7, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_17$7
            ]),
            _hoisted_18$7
          ]),
          createBaseVNode("div", _hoisted_19$6, [
            createBaseVNode("div", _hoisted_20$5, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_4,
                alt: "",
                "data-user-popover": "13",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_21$3
            ]),
            _hoisted_22$3
          ]),
          createBaseVNode("div", _hoisted_23$3, [
            createBaseVNode("div", _hoisted_24$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_25$3
            ]),
            _hoisted_26$3
          ])
        ])
      ]);
    };
  }
});
var _imports_1$4 = "/demo/photos/apps/12.jpg";
const _hoisted_1$a = {
  id: "navbar-conversation-2",
  class: "chat-area-content"
};
const _hoisted_2$a = { class: "chat-area-header" };
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_3$a
];
const _hoisted_5$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0639\u0644\u06CC", -1);
const _hoisted_6$a = { class: "chat-area-group" };
const _hoisted_7$a = { class: "chat-area-main" };
const _hoisted_8$a = { class: "chat-msg" };
const _hoisted_9$a = { class: "chat-msg-profile" };
const _hoisted_10$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:34 \u0635\u0628\u062D", -1);
const _hoisted_11$a = { class: "chat-msg-content" };
const _hoisted_12$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644 \u060C \u0645\u0646 \u0628\u0627\u0632\u062E\u0648\u0631\u062F\u06CC \u062F\u0627\u0631\u0645 \u06A9\u0647 \u0628\u0627 \u0634\u0645\u0627 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u0645. ", -1);
const _hoisted_13$a = { class: "chat-msg-text" };
const _hoisted_14$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0627\u06AF\u0631\u0686\u0647 \u0645\u0646 \u0645\u062A\u062E\u0635\u0635 \u0646\u06CC\u0633\u062A\u0645 \u060C \u0622\u0646\u0647\u0627 \u0631\u0627 \u0645\u0631\u0648\u0631 \u06A9\u0631\u062F\u0645 \u0648 \u0638\u0627\u0647\u0631 \u0622\u0646\u0647\u0627 \u0639\u0627\u0644\u06CC \u0627\u0633\u062A. ", -1);
const _hoisted_15$a = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0647\u0631 \u0686\u0646\u062F \u0645\u0627 \u0628\u0627\u06CC\u062F \u0686\u0646\u062F \u062A\u063A\u06CC\u06CC\u0631 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u0645.", -1);
const _hoisted_16$6 = { class: "chat-msg owner" };
const _hoisted_17$6 = { class: "chat-msg-profile" };
const _hoisted_18$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:42 \u0635\u0628\u062D", -1);
const _hoisted_19$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u062E\u0648\u0628 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F. \u0622\u06CC\u0627 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0645\u0644\u0627\u0642\u0627\u062A \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u0641\u0642\u0637 \u0622\u0646 \u0631\u0627 \u0628\u06AF\u0630\u0631\u0627\u0646\u06CC\u062F\u061F "),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0645\u0646\u0638\u0648\u0631 \u0645\u0646 \u0627\u06CC\u0646 \u0627\u0633\u062A \u06A9\u0647 \u0645\u0646 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0622\u0632\u0627\u062F \u0647\u0633\u062A\u0645. ")
], -1);
const _hoisted_20$4 = { class: "chat-msg" };
const _hoisted_21$2 = { class: "chat-msg-profile" };
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:43 \u0635\u0628\u062D", -1);
const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0646\u0647 \u060C \u0645\u0646 \u062C\u0644\u0633\u0647 \u0627\u06CC \u062F\u0627\u0631\u0645 \u06A9\u0647 \u0633\u0627\u0639\u062A 5 \u0634\u0631\u0648\u0639 \u0645\u06CC \u0634\u0648\u062F. "),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0628\u06CC\u0627\u06CC\u06CC\u062F \u0628\u0631\u0627\u06CC \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u0686\u06CC\u0632\u06CC \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u06CC\u0632\u06CC \u06A9\u0646\u06CC\u0645. "),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0648 \u0628\u0631\u0627\u06CC \u0645\u0646 \u062F\u0639\u0648\u062A\u0646\u0627\u0645\u0647 \u062A\u0642\u0648\u06CC\u0645 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F.")
], -1);
const _hoisted_24$2 = { class: "chat-msg owner" };
const _hoisted_25$2 = { class: "chat-msg-profile" };
const _hoisted_26$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:43 \u0635\u0628\u062D", -1);
const _hoisted_27$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u062E\u0648\u0628 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F. \u0627\u0646\u062C\u0627\u0645 \u062E\u0648\u0627\u0647\u062F \u062F\u0627\u062F."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647.")
], -1);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$a, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$a),
          _hoisted_5$a,
          createBaseVNode("div", _hoisted_6$a, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_0,
              alt: "",
              "data-user-popover": "33",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$a, [
          createBaseVNode("div", _hoisted_8$a, [
            createBaseVNode("div", _hoisted_9$a, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "33",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$a
            ]),
            createBaseVNode("div", _hoisted_11$a, [
              _hoisted_12$a,
              createBaseVNode("div", _hoisted_13$a, [
                createBaseVNode("img", {
                  src: _imports_1$4,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_14$a,
              _hoisted_15$a
            ])
          ]),
          createBaseVNode("div", _hoisted_16$6, [
            createBaseVNode("div", _hoisted_17$6, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_18$6
            ]),
            _hoisted_19$5
          ]),
          createBaseVNode("div", _hoisted_20$4, [
            createBaseVNode("div", _hoisted_21$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0,
                alt: "",
                "data-user-popover": "33",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_22$2
            ]),
            _hoisted_23$2
          ]),
          createBaseVNode("div", _hoisted_24$2, [
            createBaseVNode("div", _hoisted_25$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_26$2
            ]),
            _hoisted_27$2
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$9 = {
  id: "navbar-conversation-3",
  class: "chat-area-content"
};
const _hoisted_2$9 = { class: "chat-area-header" };
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_3$9
];
const _hoisted_5$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u06AF\u0631\u0648\u0647 \u06A9\u0627\u0631\u06CC", -1);
const _hoisted_6$9 = { class: "chat-area-group" };
const _hoisted_7$9 = /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createBaseVNode("span", null, "4")
], -1);
const _hoisted_8$9 = { class: "chat-area-main" };
const _hoisted_9$9 = { class: "chat-msg" };
const _hoisted_10$9 = { class: "chat-msg-profile" };
const _hoisted_11$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:15 \u0628.\u0638", -1);
const _hoisted_12$9 = { class: "chat-msg-content" };
const _hoisted_13$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0627\u06CC\u0646 \u0627\u0628\u0632\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC \u0631\u0627 \u062A\u0627\u0632\u0647 \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u0645. ", -1);
const _hoisted_14$9 = { class: "chat-msg-text" };
const _hoisted_15$9 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0648\u06CC\u0698\u06AF\u06CC \u0647\u0627 \u0632\u06CC\u0628\u0627 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u0646\u062F. \u0622\u06CC\u0627 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u0645 \u0622\u0646 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u0645\u061F \u06A9\u0633\u06CC \u0645\u06CC \u062E\u0648\u0627\u0647\u062F \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u062F\u061F ", -1);
const _hoisted_16$5 = { class: "chat-msg owner" };
const _hoisted_17$5 = { class: "chat-msg-profile" };
const _hoisted_18$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:15 \u0628.\u0638", -1);
const _hoisted_19$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u0637\u0645\u0626\u0646\u0627\u064B \u060C \u0633\u0631\u06CC\u0639 \u0646\u06AF\u0627\u0647 \u0648\u0627\u0642\u0639\u06CC \u0645\u06CC \u06A9\u0646\u0645."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0647\u0645\u0686\u0646\u06CC\u0646 \u0642\u0635\u062F \u062F\u0627\u0631\u0645 \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06CC \u0645\u0648\u062C\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u0645. ")
], -1);
const _hoisted_20$3 = { class: "chat-msg" };
const _hoisted_21$1 = { class: "chat-msg-profile" };
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:27 \u0628.\u0638", -1);
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" \u0622\u0631\u0647 \u0628\u0627\u0647\u0627\u0634 \u0622\u0634\u0646\u0627\u0645. \u062A\u0648 \u0634\u0631\u06A9\u062A \u0642\u0628\u0644\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u06A9\u0631\u062F\u06CC\u0645. \u0633\u0631\u06CC\u0639 \u0648 \u0642\u0627\u0628\u0644 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646\u0647 "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Smiling Face with Smiling Eyes"
    }, "\u{1F60A}"),
    /* @__PURE__ */ createTextVNode(". ")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0645\u0646\u0638\u0648\u0631\u0645 \u0627\u06CC\u0646 \u0627\u0633\u062A \u06A9\u0647 \u0627\u0631\u0632\u0634 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0646 \u0631\u0627 \u062F\u0627\u0631\u062F \u0648 \u0645\u0627 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0628\u0647 \u0622\u0646 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u0645. ")
], -1);
const _hoisted_24$1 = { class: "chat-msg owner" };
const _hoisted_25$1 = { class: "chat-msg-profile" };
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:31 \u0628.\u0638", -1);
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0628\u0644\u0647 \u060C \u0627\u0645\u0627 \u0628\u0627\u06CC\u062F \u0645\u0648\u0627\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0631\u0627 \u0622\u0632\u0645\u0627\u06CC\u0634 \u06A9\u0646\u0645. "),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0642\u0628\u0644 \u0627\u0632 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u0646\u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u062B\u0628\u062A \u0646\u0627\u0645 \u06A9\u0646\u06CC\u062F ")
], -1);
const _hoisted_28$1 = { class: "chat-msg" };
const _hoisted_29 = { class: "chat-msg-profile" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:32 \u0628.\u0638", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u062E\u062E\u062E \u0646\u062A\u0631\u0633 \u0627\u0631\u06CC\u06A9")
], -1);
const _hoisted_32 = { class: "chat-msg" };
const _hoisted_33 = { class: "chat-msg-profile" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:32 \u0628.\u0638", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" \u062E\u0648\u0628 \u060C \u0627\u0631\u06CC\u06A9 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0647 \u062D\u0627\u0644\u062A \u0645\u0631\u063A \u0645\u06CC \u0631\u0648\u062F "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Faces with Tears of Joy"
    }, "\u{1F602}\u{1F602}\u{1F602}")
  ])
], -1);
const _hoisted_36 = { class: "chat-msg owner" };
const _hoisted_37 = { class: "chat-msg-profile" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:33 \u0628.\u0638", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" \u062E\u062F\u0627\u06CC \u0645\u0646 \u0645\u0646 \u0646\u0645\u06CC\u062A\u0648\u0646\u0645 \u06A9\u0645\u06A9\u06CC \u06A9\u0646\u0645 "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Face with Tears of Joy"
    }, "\u{1F602}")
  ])
], -1);
const _hoisted_40 = { class: "chat-msg" };
const _hoisted_41 = { class: "chat-msg-profile" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 4:39 \u0628.\u0638", -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, [
    /* @__PURE__ */ createTextVNode(" \u0627\u06CC\u0646 \u0645\u0633\u062E\u0631\u0647 \u062A\u0631 \u0648 \u062E\u0646\u062F\u0647 \u062F\u0627\u0631 \u062A\u0631 \u0645\u06CC \u0634\u0648\u062F. \u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u0639\u0627\u0634\u0642 \u062A\u06CC\u0645 \u0628\u0627\u0634\u06CC\u062F "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Smiling Face with Hearts"
    }, "\u{1F970}")
  ])
], -1);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$9, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$9),
          _hoisted_5$9,
          createBaseVNode("div", _hoisted_6$9, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_1$5,
              alt: "",
              "data-user-popover": "3",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32),
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_3$2,
              alt: "",
              "data-user-popover": "6",
              onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32),
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_0$1,
              alt: "",
              "data-user-popover": "17",
              onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32),
            _hoisted_7$9
          ])
        ]),
        createBaseVNode("div", _hoisted_8$9, [
          createBaseVNode("div", _hoisted_9$9, [
            createBaseVNode("div", _hoisted_10$9, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_3$2,
                alt: "",
                "data-user-popover": "6",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_11$9
            ]),
            createBaseVNode("div", _hoisted_12$9, [
              _hoisted_13$9,
              createBaseVNode("div", _hoisted_14$9, [
                createBaseVNode("img", {
                  src: _imports_3$3,
                  alt: "",
                  onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_15$9
            ])
          ]),
          createBaseVNode("div", _hoisted_16$5, [
            createBaseVNode("div", _hoisted_17$5, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_18$5
            ]),
            _hoisted_19$4
          ]),
          createBaseVNode("div", _hoisted_20$3, [
            createBaseVNode("div", _hoisted_21$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0$1,
                alt: "",
                "data-user-popover": "17",
                onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_22$1
            ]),
            _hoisted_23$1
          ]),
          createBaseVNode("div", _hoisted_24$1, [
            createBaseVNode("div", _hoisted_25$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_26$1
            ]),
            _hoisted_27$1
          ]),
          createBaseVNode("div", _hoisted_28$1, [
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_5,
                alt: "",
                "data-user-popover": "2",
                onErrorOnce: _cache[9] || (_cache[9] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_30
            ]),
            _hoisted_31
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_2$1,
                alt: "",
                "data-user-popover": "0",
                onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_34
            ]),
            _hoisted_35
          ]),
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_38
            ]),
            _hoisted_39
          ]),
          createBaseVNode("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_3$4,
                alt: "",
                "data-user-popover": "28",
                onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_42
            ]),
            _hoisted_43
          ])
        ])
      ]);
    };
  }
});
var _imports_1$3 = "/demo/photos/apps/11.png";
var _imports_2 = "/demo/photos/apps/9.png";
const _hoisted_1$8 = {
  id: "navbar-conversation-4",
  class: "chat-area-content"
};
const _hoisted_2$8 = { class: "chat-area-header" };
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_3$8
];
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0622\u0644\u06CC\u0633", -1);
const _hoisted_6$8 = { class: "chat-area-group" };
const _hoisted_7$8 = { class: "chat-area-main" };
const _hoisted_8$8 = { class: "chat-msg" };
const _hoisted_9$8 = { class: "chat-msg-profile" };
const _hoisted_10$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 10:11 \u0635\u0628\u062D", -1);
const _hoisted_11$8 = { class: "chat-msg-content" };
const _hoisted_12$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0633\u0644\u0627\u0645 \u0627\u0631\u06CC\u06A9 \u0645\u0646 \u0686\u0646\u062F \u0635\u0641\u062D\u0647 \u062F\u0627\u0631\u0645 \u06A9\u0647 \u0628\u0647 \u0634\u0645\u0627 \u0646\u0634\u0627\u0646 \u0645\u06CC \u062F\u0647\u0645. ", -1);
const _hoisted_13$8 = { class: "chat-msg-text" };
const _hoisted_14$8 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0627\u06CC\u0646 \u06CC\u06A9\u06CC \u0628\u0633\u06CC\u0627\u0631 \u0631\u0646\u06AF\u06CC \u0627\u0633\u062A \u060C \u0645\u0646 \u0622\u0646 \u0631\u0627 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645. ", -1);
const _hoisted_15$8 = { class: "chat-msg-text" };
const _hoisted_16$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u0646 \u0645\u0646\u062D\u0646\u06CC \u0647\u0627\u06CC \u0627\u06CC\u0646 \u06CC\u06A9\u06CC \u0631\u0627 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645.", -1);
const _hoisted_17$4 = { class: "chat-msg owner" };
const _hoisted_18$4 = { class: "chat-msg-profile" };
const _hoisted_19$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 10:44 \u0635\u0628\u062D", -1);
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0628\u0647 \u0646\u0638\u0631 \u062E\u0648\u0628 \u0645\u06CC\u0627\u062F."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0647\u0645\u06AF\u0627\u0645 \u0633\u0627\u0632\u06CC \u06A9\u0646\u06CC\u062F\u061F")
], -1);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$8),
          _hoisted_5$8,
          createBaseVNode("div", _hoisted_6$8, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_2$1,
              alt: "",
              "data-user-popover": "0",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$8, [
          createBaseVNode("div", _hoisted_8$8, [
            createBaseVNode("div", _hoisted_9$8, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_2$1,
                alt: "",
                "data-user-popover": "0",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$8
            ]),
            createBaseVNode("div", _hoisted_11$8, [
              _hoisted_12$8,
              createBaseVNode("div", _hoisted_13$8, [
                createBaseVNode("img", {
                  src: _imports_1$3,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "400X300"))
                }, null, 32)
              ]),
              _hoisted_14$8,
              createBaseVNode("div", _hoisted_15$8, [
                createBaseVNode("img", {
                  src: _imports_2,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "400X300"))
                }, null, 32)
              ]),
              _hoisted_16$4
            ])
          ]),
          createBaseVNode("div", _hoisted_17$4, [
            createBaseVNode("div", _hoisted_18$4, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_19$3
            ]),
            _hoisted_20$2
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$7 = {
  id: "navbar-conversation-5",
  class: "chat-area-content"
};
const _hoisted_2$7 = { class: "chat-area-header" };
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_3$7
];
const _hoisted_5$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0631\u06CC\u062D\u0627\u0646\u0647", -1);
const _hoisted_6$7 = { class: "chat-area-group" };
const _hoisted_7$7 = { class: "chat-area-main" };
const _hoisted_8$7 = { class: "chat-msg" };
const _hoisted_9$7 = { class: "chat-msg-profile" };
const _hoisted_10$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 11:12 \u0635\u0628\u062D", -1);
const _hoisted_11$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u06CC\u06A9 \u0644\u062D\u0638\u0647 \u0648\u0642\u062A \u062F\u0627\u0631\u06CC\u061F"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0645\u0646 \u062F\u0631 \u0645\u0648\u0631\u062F \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0631\u0648\u06CC \u0622\u0646 \u06A9\u0627\u0631 \u0645\u06CC \u06A9\u0646\u0645 \u0628\u0647 \u06A9\u0645\u06A9 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u0645. ")
], -1);
const _hoisted_12$7 = { class: "chat-msg owner" };
const _hoisted_13$7 = { class: "chat-msg-profile" };
const _hoisted_14$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 11:14 \u0635\u0628\u062D", -1);
const _hoisted_15$7 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u062D\u062A\u0645\u0627"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u0646 \u0645\u06CC\u0631\u0645 \u062F\u0641\u062A\u0631\u062A")
], -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$7),
          _hoisted_5$7,
          createBaseVNode("div", _hoisted_6$7, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_0$2,
              alt: "",
              "data-user-popover": "21",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$7, [
          createBaseVNode("div", _hoisted_8$7, [
            createBaseVNode("div", _hoisted_9$7, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0$2,
                alt: "",
                "data-user-popover": "0",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$7
            ]),
            _hoisted_11$7
          ]),
          createBaseVNode("div", _hoisted_12$7, [
            createBaseVNode("div", _hoisted_13$7, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_14$7
            ]),
            _hoisted_15$7
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$6 = {
  id: "navbar-conversation-6",
  class: "chat-area-content"
};
const _hoisted_2$6 = { class: "chat-area-header" };
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_3$6
];
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0645\u0631\u06CC\u0645", -1);
const _hoisted_6$6 = { class: "chat-area-group" };
const _hoisted_7$6 = { class: "chat-area-main" };
const _hoisted_8$6 = { class: "chat-msg" };
const _hoisted_9$6 = { class: "chat-msg-profile" };
const _hoisted_10$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 12:14 \u0628.\u0638", -1);
const _hoisted_11$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644!."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0647\u0646\u0648\u0632 \u0628\u0631\u0627\u06CC \u0622\u0646 \u0641\u06CC\u0644\u0645 \u0646\u0627\u0631\u0627\u062D\u062A \u0647\u0633\u062A\u06CC\u062F\u061F")
], -1);
const _hoisted_12$6 = { class: "chat-msg owner" };
const _hoisted_13$6 = { class: "chat-msg-profile" };
const _hoisted_14$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 12:14 \u0628.\u0638", -1);
const _hoisted_15$6 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0627\u0644\u0628\u062A\u0647 \u060C \u0622\u0631\u0647!"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0646\u0645\u06CC \u062A\u0648\u0627\u0646 \u0635\u0628\u0631 \u06A9\u0631\u062F!")
], -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$6),
          _hoisted_5$6,
          createBaseVNode("div", _hoisted_6$6, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_5$1,
              alt: "",
              "data-user-popover": "5",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$6, [
          createBaseVNode("div", _hoisted_8$6, [
            createBaseVNode("div", _hoisted_9$6, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_5$1,
                alt: "",
                "data-user-popover": "5",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$6
            ]),
            _hoisted_11$6
          ]),
          createBaseVNode("div", _hoisted_12$6, [
            createBaseVNode("div", _hoisted_13$6, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_14$6
            ]),
            _hoisted_15$6
          ])
        ])
      ]);
    };
  }
});
var _imports_1$2 = "/demo/photos/apps/4.png";
var _imports_3 = "/demo/photos/apps/6.png";
const _hoisted_1$5 = {
  id: "navbar-conversation-7",
  class: "chat-area-content"
};
const _hoisted_2$5 = { class: "chat-area-header" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_3$5
];
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0645\u0631\u06CC\u0645", -1);
const _hoisted_6$5 = { class: "chat-area-group" };
const _hoisted_7$5 = { class: "chat-area-main" };
const _hoisted_8$5 = { class: "chat-msg" };
const _hoisted_9$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-profile" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "chat-msg-img",
    src: _imports_2$2,
    alt: "",
    "data-user-popover": "7"
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 2:32 \u0628.\u0638")
], -1);
const _hoisted_10$5 = { class: "chat-msg-content" };
const _hoisted_11$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0628\u0647 \u0622\u0646 \u0635\u0641\u062D\u0647 \u0647\u0627 \u0646\u06AF\u0627\u0647 \u06A9\u0646\u06CC\u062F \u060C \u0641\u0642\u0637 \u0622\u0646\u0647\u0627 \u0631\u0627 \u062A\u0645\u0627\u0645 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F. ", -1);
const _hoisted_12$5 = { class: "chat-msg-text" };
const _hoisted_13$5 = { class: "chat-msg-text" };
const _hoisted_14$5 = { class: "chat-msg-text" };
const _hoisted_15$5 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u06CC\u062A\u0648\u0646\u0645 \u0641\u0627\u06CC\u0644\u0647\u0627 \u0631\u0648 \u0628\u0631\u0627\u062A\u0648\u0646 \u0628\u0641\u0631\u0633\u062A\u0645", -1);
const _hoisted_16$3 = { class: "chat-msg owner" };
const _hoisted_17$3 = { class: "chat-msg-profile" };
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 2:37 \u0628.\u0638", -1);
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0639\u0627\u0644\u06CC \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0627\u062C\u0627\u0632\u0647 \u062F\u0647\u06CC\u062F \u0627\u06CC\u0646 \u0631\u0627 \u0628\u0627 \u062C\u0632\u0626\u06CC\u0627\u062A \u0645\u0631\u0648\u0631 \u06A9\u0646\u0645.")
], -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$5),
          _hoisted_5$5,
          createBaseVNode("div", _hoisted_6$5, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_2$2,
              alt: "",
              "data-user-popover": "7",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$5, [
          createBaseVNode("div", _hoisted_8$5, [
            _hoisted_9$5,
            createBaseVNode("div", _hoisted_10$5, [
              _hoisted_11$5,
              createBaseVNode("div", _hoisted_12$5, [
                createBaseVNode("img", {
                  src: _imports_1$2,
                  alt: "",
                  onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_13$5, [
                createBaseVNode("img", {
                  src: _imports_3$1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_14$5, [
                createBaseVNode("img", {
                  src: _imports_3,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_15$5
            ])
          ]),
          createBaseVNode("div", _hoisted_16$3, [
            createBaseVNode("div", _hoisted_17$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_18$3
            ]),
            _hoisted_19$2
          ])
        ])
      ]);
    };
  }
});
var _imports_1$1 = "/demo/photos/apps/13.png";
const _hoisted_1$4 = {
  id: "navbar-conversation-8",
  class: "chat-area-content"
};
const _hoisted_2$4 = { class: "chat-area-header" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$4 = [
  _hoisted_3$4
];
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0645\u0644\u0627\u0646\u06CC", -1);
const _hoisted_6$4 = { class: "chat-area-group" };
const _hoisted_7$4 = { class: "chat-area-main" };
const _hoisted_8$4 = { class: "chat-msg" };
const _hoisted_9$4 = { class: "chat-msg-profile" };
const _hoisted_10$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:43 \u0628.\u0638", -1);
const _hoisted_11$4 = { class: "chat-msg-content" };
const _hoisted_12$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0628\u0647 \u062A\u0627\u0632\u06AF\u06CC \u0627\u062C\u0631\u0627\u06CC \u0627\u06CC\u0646 \u06CC\u06A9\u06CC \u0631\u0627 \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u0627\u0646\u062F\u0647 \u0627\u06CC\u062F. ", -1);
const _hoisted_13$4 = { class: "chat-msg-text" };
const _hoisted_14$4 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u0646 \u0628\u0627 \u0633\u0631\u0641\u0635\u0644 \u0647\u0627 \u0645\u0634\u06A9\u0644\u0627\u062A\u06CC \u062F\u0627\u0631\u0645.", -1);
const _hoisted_15$4 = { class: "chat-msg owner" };
const _hoisted_16$2 = { class: "chat-msg-profile" };
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:43 \u0628.\u0638", -1);
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0628\u0647 \u0645\u0648\u0642\u0639 \u060C \u0645\u0645\u0646\u0648\u0646"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0622\u06CC\u0627 \u0628\u0631\u0627\u06CC \u0622\u0646 \u0631\u0648\u0627\u0628\u0637 \u0639\u0645\u0648\u0645\u06CC \u0628\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u061F")
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$4),
          _hoisted_5$4,
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_0$3,
              alt: "",
              "data-user-popover": "4",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$4, [
          createBaseVNode("div", _hoisted_8$4, [
            createBaseVNode("div", _hoisted_9$4, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0$3,
                alt: "",
                "data-user-popover": "7",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$4
            ]),
            createBaseVNode("div", _hoisted_11$4, [
              _hoisted_12$4,
              createBaseVNode("div", _hoisted_13$4, [
                createBaseVNode("img", {
                  src: _imports_1$1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_14$4
            ])
          ]),
          createBaseVNode("div", _hoisted_15$4, [
            createBaseVNode("div", _hoisted_16$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_17$2
            ]),
            _hoisted_18$2
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = {
  id: "navbar-conversation-9",
  class: "chat-area-content"
};
const _hoisted_2$3 = { class: "chat-area-header" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$3 = [
  _hoisted_3$3
];
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u062C\u06CC\u0645\u06CC", -1);
const _hoisted_6$3 = { class: "chat-area-group" };
const _hoisted_7$3 = { class: "chat-area-main" };
const _hoisted_8$3 = { class: "chat-msg" };
const _hoisted_9$3 = { class: "chat-msg-profile" };
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:12 \u0635\u0628\u062D", -1);
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0627\u0645\u0631\u0648\u0632 \u0628\u0627\u06CC\u062F \u0632\u0645\u0627\u0646\u06CC \u067E\u06CC\u0648\u0646\u062F \u062F\u0647\u06CC\u0645"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0634\u0645\u0627 \u0686\u0647 \u0648\u0642\u062A \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0647\u0633\u062A\u06CC\u062F\u061F")
], -1);
const _hoisted_12$3 = { class: "chat-msg owner" };
const _hoisted_13$3 = { class: "chat-msg-profile" };
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 9:13 \u0635\u0628\u062D", -1);
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0627\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0628\u0647\u062A \u0645\u06CC\u06AF\u0645.")
], -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$3),
          _hoisted_5$3,
          createBaseVNode("div", _hoisted_6$3, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_1$6,
              alt: "",
              "data-user-popover": "5",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$3, [
          createBaseVNode("div", _hoisted_8$3, [
            createBaseVNode("div", _hoisted_9$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$6,
                alt: "",
                "data-user-popover": "5",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$3
            ]),
            _hoisted_11$3
          ]),
          createBaseVNode("div", _hoisted_12$3, [
            createBaseVNode("div", _hoisted_13$3, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_14$3
            ]),
            _hoisted_15$3
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = {
  id: "navbar-conversation-10",
  class: "chat-area-content"
};
const _hoisted_2$2 = { class: "chat-area-header" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_3$2
];
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0644\u0631\u06CC \u067E\u06CC\u062C", -1);
const _hoisted_6$2 = { class: "chat-area-group" };
const _hoisted_7$2 = { class: "chat-area-main" };
const _hoisted_8$2 = { class: "chat-msg" };
const _hoisted_9$2 = { class: "chat-msg-profile" };
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 5:19 \u0628.\u0638", -1);
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u062F\u06CC\u0631\u0648\u0632 \u062E\u06CC\u0644\u06CC \u062E\u0648\u0634 \u06AF\u0630\u0634\u062A."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u0628\u0627 \u062A\u0634\u06A9\u0631 \u0627\u0632 \u0627\u0631\u0627\u0626\u0647 \u062A\u0645\u06CC\u0632 \u0634\u0645\u0627 \u060C \u062E\u06CC\u0631\u0647 \u06A9\u0646\u0646\u062F\u0647 \u0628\u0648\u062F. ")
], -1);
const _hoisted_12$2 = { class: "chat-msg owner" };
const _hoisted_13$2 = { class: "chat-msg-profile" };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 6:32 \u0628.\u0638", -1);
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0648\u0627\u06CC \u060C \u0628\u0647 \u0622\u0646 \u0627\u0634\u0627\u0631\u0647 \u0646\u06A9\u0646\u06CC\u062F."),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, " \u062E\u06CC\u0644\u06CC \u062E\u0648\u0634\u062D\u0627\u0644\u0645 \u06A9\u0647 \u0686\u0646\u06CC\u0646 \u0627\u062D\u0633\u0627\u0633\u06CC \u0628\u0647 \u0634\u0645\u0627 \u062F\u0633\u062A \u062F\u0627\u062F. ")
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$2),
          _hoisted_5$2,
          createBaseVNode("div", _hoisted_6$2, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_0$1,
              alt: "",
              "data-user-popover": "17",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$2, [
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("div", _hoisted_9$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_0$1,
                alt: "",
                "data-user-popover": "5",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$2
            ]),
            _hoisted_11$2
          ]),
          createBaseVNode("div", _hoisted_12$2, [
            createBaseVNode("div", _hoisted_13$2, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_14$2
            ]),
            _hoisted_15$2
          ])
        ])
      ]);
    };
  }
});
var _imports_1 = "/demo/photos/apps/15.png";
const _hoisted_1$1 = {
  id: "navbar-conversation-11",
  class: "chat-area-content"
};
const _hoisted_2$1 = { class: "chat-area-header" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:menu"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-area-title" }, "\u0644\u0631\u06CC \u067E\u06CC\u062C", -1);
const _hoisted_6$1 = { class: "chat-area-group" };
const _hoisted_7$1 = { class: "chat-area-main" };
const _hoisted_8$1 = { class: "chat-msg" };
const _hoisted_9$1 = { class: "chat-msg-profile" };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 7:48 \u0628.\u0638", -1);
const _hoisted_11$1 = { class: "chat-msg-content" };
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u062A\u0639\u062F\u0627\u062F\u06CC \u0627\u0633\u06A9\u0631\u06CC\u0646 \u0634\u0627\u062A \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F.", -1);
const _hoisted_13$1 = { class: "chat-msg-text" };
const _hoisted_14$1 = { class: "chat-msg-text" };
const _hoisted_15$1 = { class: "chat-msg-text" };
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0627\u0645\u06CC\u062F\u0648\u0627\u0631\u0645 \u0627\u0632 \u0622\u0646\u0647\u0627 \u062E\u0648\u0634\u062A\u0627\u0646 \u0628\u06CC\u0627\u06CC\u062F.", -1);
const _hoisted_17$1 = { class: "chat-msg owner" };
const _hoisted_18$1 = { class: "chat-msg-profile" };
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-date" }, "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 10:21 \u0628.\u0638", -1);
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0628\u0647 \u0646\u0638\u0631 \u0639\u0627\u0644\u06CC \u0647\u0633\u062A\u0646!"),
  /* @__PURE__ */ createBaseVNode("div", { class: "chat-msg-text" }, "\u0645\u0645\u0646\u0648\u0646 \u0627\u0632 \u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0645\u0637\u0644\u0628!")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["toggleMobileConversation"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("button", {
            class: "trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleMobileConversation"))
          }, _hoisted_4$1),
          _hoisted_5$1,
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("img", {
              class: "chat-area-profile",
              src: _imports_3$2,
              alt: "",
              "data-user-popover": "6",
              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
            }, null, 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_3$2,
                alt: "",
                "data-user-popover": "6",
                onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_10$1
            ]),
            createBaseVNode("div", _hoisted_11$1, [
              _hoisted_12$1,
              createBaseVNode("div", _hoisted_13$1, [
                createBaseVNode("img", {
                  src: _imports_1,
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_14$1, [
                createBaseVNode("img", {
                  src: _imports_2,
                  alt: "",
                  onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              createBaseVNode("div", _hoisted_15$1, [
                createBaseVNode("img", {
                  src: _imports_3$1,
                  alt: "",
                  onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                }, null, 32)
              ]),
              _hoisted_16$1
            ])
          ]),
          createBaseVNode("div", _hoisted_17$1, [
            createBaseVNode("div", _hoisted_18$1, [
              createBaseVNode("img", {
                class: "chat-msg-img",
                src: _imports_1$5,
                alt: "",
                "data-user-popover": "3",
                onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 32),
              _hoisted_19$1
            ]),
            _hoisted_20$1
          ])
        ])
      ]);
    };
  }
});
var messagingV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "chat-app-wrapper" };
const _hoisted_2 = { class: "chat-app-header" };
const _hoisted_3 = { class: "logo" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "search-bar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "field" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "control has-icon" }, [
      /* @__PURE__ */ createBaseVNode("input", {
        type: "text",
        class: "input search-input",
        placeholder: "\u062C\u0633\u062A\u062C\u0648...",
        "aria-label": "Search"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": "feather:search"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "search-results has-slimscroll" })
    ])
  ])
], -1);
const _hoisted_5 = { class: "user-settings" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "profile-avatar" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-down"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", {
  class: "dropdown-menu",
  role: "menu"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("p", { class: "is-size-7" }, "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC")
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:edit-2"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:box"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627")
    ]),
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:settings"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A")
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:log-out"
      }),
      /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0631\u0648\u062C")
    ])
  ])
], -1);
const _hoisted_11 = { class: "wrapper" };
const _hoisted_12 = {
  class: "chat-area is-active",
  "data-simplebar": ""
};
const _hoisted_13 = { class: "chat-area-footer" };
const _hoisted_14 = { class: "add-content" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", {
  class: "dropdown-menu",
  role: "menu"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-content" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "dropdown-item" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:video"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u062F\u0626\u0648"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0631\u062C \u0648\u06CC\u062F\u0626\u0648")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:image"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0635\u0627\u0648\u06CC\u0631"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0622\u067E\u0644\u0648\u062F \u062A\u0635\u0627\u0648\u06CC\u0631")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:link"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u0648\u0646\u062F"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0648\u0646\u062F")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "#",
      class: "dropdown-item kill-drop v-modal-trigger"
    }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:file"
      }),
      /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0627\u06CC\u0644"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0622\u067E\u0644\u0648\u062F \u0641\u0627\u06CC\u0644")
      ])
    ])
  ])
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "add-emoji" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "button" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:smile"
    })
  ])
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  placeholder: "\u0686\u06CC\u0632\u06CC \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
  "aria-label": "Add new message"
}, null, -1);
const _hoisted_20 = {
  class: "detail-area",
  "data-simplebar": ""
};
const _hoisted_21 = { class: "chat-side-content is-single" };
const _hoisted_22 = {
  id: "user-details-name",
  class: "user-name"
};
const _hoisted_23 = {
  id: "user-details-title",
  class: "user-job-title"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "side-actions" }, [
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-rounded" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-phone"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0645\u0627\u0633 \u0635\u0648\u062A\u06CC")
  ]),
  /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-rounded" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-video"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0645\u0627\u0633 \u062A\u0635\u0648\u06CC\u0631\u06CC")
  ])
], -1);
const _hoisted_25 = { class: "detail-photos" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "detail-photo-title" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "feather feather-image"
  }, [
    /* @__PURE__ */ createBaseVNode("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }),
    /* @__PURE__ */ createBaseVNode("path", { d: "M21 15l-5-5L5 21" })
  ]),
  /* @__PURE__ */ createTextVNode(" \u062A\u0635\u0627\u0648\u06CC\u0631 \u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0634\u062A\u0647 \u0634\u062F\u0647 ")
], -1);
const _hoisted_27 = { class: "detail-photo-grid" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("a", { class: "view-more" }, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u0628\u06CC\u0646\u06CC\u062F", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const conversations = [
      {
        id: 1,
        name: "\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647",
        role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        avatar: {
          picture: "/demo/avatars/11.jpg"
        },
        lastMessage: "20 \u062F\u0642\u06CC\u0642\u0647",
        lastMessagePreview: "\u062C\u0644\u0633\u0647 \u0645\u0627 \u0633\u0627\u0639\u062A \u0686\u0646\u062F \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u06CC\u0632\u06CC \u0634\u062F\u0647 \u0628\u0648\u062F\u061F"
      },
      {
        id: 2,
        name: "\u0639\u0644\u06CC \u0698\u0627\u0646\u062F\u0627\u0631\u0645",
        role: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
        avatar: {
          picture: "/demo/avatars/39.jpg"
        },
        lastMessage: "24 \u062F\u0642\u06CC\u0642\u0647",
        lastMessagePreview: "\u0646\u0647 \u060C \u0645\u0646 \u062C\u0644\u0633\u0647 \u0627\u06CC \u062F\u0627\u0631\u0645 \u06A9\u0647 \u062F\u0631 5 \u0634\u0631\u0648\u0639 \u0645\u06CC \u0634\u0648\u062F."
      },
      {
        id: 3,
        name: "\u06AF\u0631\u0648\u0647 \u06A9\u0627\u0631\u06CC",
        role: "7 \u0646\u0641\u0631 \u0686\u062A \u0645\u06CC \u06A9\u0646\u0646\u062F",
        avatar: {
          color: "h-purple",
          initials: "WG"
        },
        lastMessage: "31 \u062F\u0642\u06CC\u0642\u0647",
        lastMessagePreview: "\u0627\u06CC\u0646 \u0645\u0633\u062E\u0631\u0647 \u062A\u0631 \u0648 \u062E\u0646\u062F\u0647 \u062F\u0627\u0631 \u062A\u0631 \u0645\u06CC \u0634\u0648\u062F. \u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u0639\u0627\u0634\u0642 \u062A\u06CC\u0645 \u0628\u0627\u0634\u06CC\u062F \u{1F970}"
      },
      {
        id: 4,
        name: "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633",
        role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
        avatar: {
          picture: "/demo/avatars/7.jpg"
        },
        lastMessage: "47 \u062F\u0642\u06CC\u0642\u0647",
        lastMessagePreview: "\u0645\u0646 \u0645\u0646\u062D\u0646\u06CC \u0647\u0627\u06CC \u0627\u06CC\u0646 \u06CC\u06A9\u06CC \u0631\u0627 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645."
      },
      {
        id: 5,
        name: "\u0627\u06CC\u0631\u0627\u0646 \u0648\u0637\u0646\u062E\u0648\u0627\u0647",
        role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        avatar: {
          picture: "/demo/avatars/23.jpg"
        },
        lastMessage: "56 \u062F\u0642\u06CC\u0642\u0647",
        lastMessagePreview: "\u0645\u0646 \u062F\u0631 \u0645\u0648\u0631\u062F \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0631\u0648\u06CC \u0622\u0646 \u06A9\u0627\u0631 \u0645\u06CC \u06A9\u0646\u0645 \u0628\u0647 \u06A9\u0645\u06A9 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u0645."
      },
      {
        id: 6,
        name: "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC",
        role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        avatar: {
          picture: "/demo/avatars/5.jpg"
        },
        lastMessage: "1 \u0633\u0627\u0639\u062A",
        lastMessagePreview: "\u0647\u0646\u0648\u0632 \u0628\u0631\u0627\u06CC \u0622\u0646 \u0641\u06CC\u0644\u0645 \u0646\u0627\u0631\u0627\u062D\u062A \u0647\u0633\u062A\u06CC\u062F\u061F"
      },
      {
        id: 7,
        name: "\u0646\u0642\u06CC \u0645\u0639\u0645\u0648\u0644\u06CC",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        avatar: {
          picture: "/demo/avatars/18.jpg"
        },
        lastMessage: "1 \u0633\u0627\u0639\u062A",
        lastMessagePreview: "\u0645\u06CC\u062A\u0648\u0646\u0645 \u0641\u0627\u06CC\u0644\u0647\u0627 \u0631\u0648 \u0628\u0631\u0627\u062A\u0648\u0646 \u0628\u0641\u0631\u0633\u062A\u0645"
      },
      {
        id: 8,
        name: "\u0645\u0644\u0627\u0646\u06CC \u0648\u0644\u06CC \u0632\u0627\u062F\u0647",
        role: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
        avatar: {
          picture: "/demo/avatars/25.jpg"
        },
        lastMessage: "2 \u0633\u0627\u0639\u062A",
        lastMessagePreview: "\u0645\u0646 \u0628\u0627 \u0633\u0631\u0641\u0635\u0644 \u0647\u0627 \u0645\u0634\u06A9\u0644\u0627\u062A\u06CC \u062F\u0627\u0631\u0645."
      },
      {
        id: 9,
        name: "\u062C\u06CC\u0645\u06CC \u0647\u06A9\u062A\u0648\u0631",
        role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        avatar: {
          picture: "/demo/avatars/22.jpg"
        },
        lastMessage: "3 \u0633\u0627\u0639\u062A",
        lastMessagePreview: "\u0634\u0645\u0627 \u0686\u0647 \u0648\u0642\u062A \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0647\u0633\u062A\u06CC\u062F\u061F"
      },
      {
        id: 10,
        name: "\u0627\u0631\u0633\u0637\u0648 \u0632\u0627\u0647\u062F",
        role: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
        avatar: {
          picture: "/demo/avatars/19.jpg"
        },
        lastMessage: "3 \u0633\u0627\u0639\u062A",
        lastMessagePreview: "\u0628\u0627 \u062A\u0634\u06A9\u0631 \u0627\u0632 \u0627\u0631\u0627\u0626\u0647 \u062A\u0645\u06CC\u0632 \u0634\u0645\u0627 \u060C \u062E\u06CC\u0631\u0647 \u06A9\u0646\u0646\u062F\u0647 \u0628\u0648\u062F."
      },
      {
        id: 11,
        name: "\u062A\u0627\u0631\u0627 \u062E\u0627\u0634\u0642\u0686\u06CC",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        avatar: {
          picture: "/demo/avatars/13.jpg"
        },
        lastMessage: "9 \u0633\u0627\u0639\u062A",
        lastMessagePreview: "\u0627\u0645\u06CC\u062F\u0648\u0627\u0631\u0645 \u0627\u0632 \u0622\u0646\u0647\u0627 \u062E\u0648\u0634\u062A\u0627\u0646 \u0628\u06CC\u0627\u06CC\u062F."
      }
    ];
    const selectedConversationId = ref(3);
    const mobileConversationListOpen = ref(false);
    const selectedConversation = computed(() => {
      const conversation = conversations.find((item) => item.id === selectedConversationId.value);
      if (conversation) {
        return conversation;
      }
      return conversations[0];
    });
    const dropdownElement1 = ref();
    const dropdown1 = useDropdown(dropdownElement1);
    const dropdownElement2 = ref();
    const dropdown2 = useDropdown(dropdownElement2);
    useHead({
      title: "\u0686\u062A - \u0645\u0646\u0648 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_ToolbarNotification = _sfc_main$e;
      const _component_Toolbar = _sfc_main$f;
      const _component_WebappConversationList = _sfc_main$c;
      const _component_WebappConversation1 = _sfc_main$b;
      const _component_WebappConversation2 = _sfc_main$a;
      const _component_WebappConversation3 = _sfc_main$9;
      const _component_WebappConversation4 = _sfc_main$8;
      const _component_WebappConversation5 = _sfc_main$7;
      const _component_WebappConversation6 = _sfc_main$6;
      const _component_WebappConversation7 = _sfc_main$5;
      const _component_WebappConversation8 = _sfc_main$4;
      const _component_WebappConversation9 = _sfc_main$3;
      const _component_WebappConversation10 = _sfc_main$2;
      const _component_WebappConversation11 = _sfc_main$1;
      const _component_VAvatar = _sfc_main$d;
      const _component_MinimalLayout = _sfc_main$g;
      return openBlock(), createBlock(_component_MinimalLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToolbarNotification),
                    createBaseVNode("a", {
                      class: "toolbar-link right-panel-trigger",
                      "aria-label": "View activity",
                      onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "activity")
                    }, _hoisted_7)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["dropdownElement1"] = _value;
                    dropdownElement1.value = _value;
                  },
                  class: "dropdown is-left dropdown-trigger user-dropdown"
                }, [
                  createBaseVNode("div", {
                    class: "is-trigger",
                    "aria-haspopup": "true",
                    onClick: _cache[2] || (_cache[2] = (...args) => unref(dropdown1).toggle && unref(dropdown1).toggle(...args))
                  }, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("img", {
                        class: "avatar",
                        src: _imports_1$5,
                        alt: "",
                        onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_9
                  ]),
                  _hoisted_10
                ], 512)
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_WebappConversationList, {
                conversationId: selectedConversationId.value,
                "onUpdate:conversationId": _cache[3] || (_cache[3] = ($event) => selectedConversationId.value = $event),
                "mobile-conversation-list-open": mobileConversationListOpen.value,
                conversations,
                onToggleMobileConversation: _cache[4] || (_cache[4] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
              }, null, 8, ["conversationId", "mobile-conversation-list-open"]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_WebappConversation1, {
                  class: normalizeClass([selectedConversationId.value === 1 && "is-active"]),
                  onToggleMobileConversation: _cache[5] || (_cache[5] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation2, {
                  class: normalizeClass([selectedConversationId.value === 2 && "is-active"]),
                  onToggleMobileConversation: _cache[6] || (_cache[6] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation3, {
                  class: normalizeClass([selectedConversationId.value === 3 && "is-active"]),
                  onToggleMobileConversation: _cache[7] || (_cache[7] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation4, {
                  class: normalizeClass([selectedConversationId.value === 4 && "is-active"]),
                  onToggleMobileConversation: _cache[8] || (_cache[8] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation5, {
                  class: normalizeClass([selectedConversationId.value === 5 && "is-active"]),
                  onToggleMobileConversation: _cache[9] || (_cache[9] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation6, {
                  class: normalizeClass([selectedConversationId.value === 6 && "is-active"]),
                  onToggleMobileConversation: _cache[10] || (_cache[10] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation7, {
                  class: normalizeClass([selectedConversationId.value === 7 && "is-active"]),
                  onToggleMobileConversation: _cache[11] || (_cache[11] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation8, {
                  class: normalizeClass([selectedConversationId.value === 8 && "is-active"]),
                  onToggleMobileConversation: _cache[12] || (_cache[12] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation9, {
                  class: normalizeClass([selectedConversationId.value === 9 && "is-active"]),
                  onToggleMobileConversation: _cache[13] || (_cache[13] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation10, {
                  class: normalizeClass([selectedConversationId.value === 10 && "is-active"]),
                  onToggleMobileConversation: _cache[14] || (_cache[14] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createVNode(_component_WebappConversation11, {
                  class: normalizeClass([selectedConversationId.value === 11 && "is-active"]),
                  onToggleMobileConversation: _cache[15] || (_cache[15] = ($event) => mobileConversationListOpen.value = !mobileConversationListOpen.value)
                }, null, 8, ["class"]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", {
                      ref: (_value, _refs) => {
                        _refs["dropdownElement2"] = _value;
                        dropdownElement2.value = _value;
                      },
                      class: "dropdown dropdown-trigger is-up"
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", {
                          class: "button",
                          "aria-haspopup": "true",
                          onClick: _cache[16] || (_cache[16] = (...args) => unref(dropdown2).toggle && unref(dropdown2).toggle(...args))
                        }, _hoisted_16)
                      ]),
                      _hoisted_17
                    ], 512)
                  ]),
                  _hoisted_18,
                  _hoisted_19
                ])
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  createVNode(_component_VAvatar, {
                    picture: unref(selectedConversation).avatar.picture,
                    color: unref(selectedConversation).avatar.color,
                    initials: unref(selectedConversation).avatar.initials
                  }, null, 8, ["picture", "color", "initials"]),
                  createBaseVNode("h4", _hoisted_22, toDisplayString(unref(selectedConversation).name), 1),
                  createBaseVNode("p", _hoisted_23, toDisplayString(unref(selectedConversation).role), 1),
                  _hoisted_24,
                  createBaseVNode("div", _hoisted_25, [
                    _hoisted_26,
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("img", {
                        src: _imports_3$3,
                        alt: "",
                        onErrorOnce: _cache[17] || (_cache[17] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_4$1,
                        alt: "",
                        onErrorOnce: _cache[18] || (_cache[18] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_5$2,
                        alt: "",
                        onErrorOnce: _cache[19] || (_cache[19] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_6,
                        alt: "",
                        onErrorOnce: _cache[20] || (_cache[20] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_7,
                        alt: "",
                        onErrorOnce: _cache[21] || (_cache[21] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_8,
                        alt: "",
                        onErrorOnce: _cache[22] || (_cache[22] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_9,
                        alt: "",
                        onErrorOnce: _cache[23] || (_cache[23] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_10,
                        alt: "",
                        onErrorOnce: _cache[24] || (_cache[24] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_11,
                        alt: "",
                        onErrorOnce: _cache[25] || (_cache[25] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_12,
                        alt: "",
                        onErrorOnce: _cache[26] || (_cache[26] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_13,
                        alt: "",
                        onErrorOnce: _cache[27] || (_cache[27] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32),
                      createBaseVNode("img", {
                        src: _imports_14,
                        alt: "",
                        onErrorOnce: _cache[28] || (_cache[28] = (event) => unref(useViaPlaceholderError)(event, "1600x900"))
                      }, null, 32)
                    ]),
                    _hoisted_28
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
