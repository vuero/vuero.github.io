import { _ as _imports_2, a as _imports_0 } from "./25.ca54486f.js";
import { _ as _imports_5 } from "./12.16c4b7ba.js";
import { _ as _imports_3 } from "./13.d1ef5906.js";
import { u as useDropdown } from "./useDropdown.086619d7.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, r as ref, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, t as unref, v as createVNode, x as withCtx, B as createTextVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "toolbar-notifications is-hidden-mobile" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "new-indicator pulsate" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = {
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_6 = { class: "dropdown-content" };
const _hoisted_7 = { class: "heading" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "heading-left" }, [
  /* @__PURE__ */ createBaseVNode("h6", { class: "heading-title" }, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A")
], -1);
const _hoisted_9 = { class: "heading-right" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647 ");
const _hoisted_11 = { class: "notification-list" };
const _hoisted_12 = { class: "notification-item" };
const _hoisted_13 = { class: "img-left" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0622\u0644\u06CC\u0633"),
    /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0645\u0646\u062A \u06AF\u0630\u0627\u0634\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "\u06CC\u06A9 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_15 = { class: "notification-item" };
const _hoisted_16 = { class: "img-left" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0622\u0631\u0646\u0648\u0644\u062F \u0627\u06CC\u0646\u0634\u062A\u06CC\u0646"),
    /* @__PURE__ */ createTextVNode(" \u0641\u0627\u06CC\u0644\u06CC \u0631\u0627 \u0622\u067E\u0644\u0648\u062F \u06A9\u0631\u062F. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "\u062F\u0648 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_18 = { class: "notification-item" };
const _hoisted_19 = { class: "img-left" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644"),
    /* @__PURE__ */ createTextVNode(" \u067E\u06CC\u063A\u0627\u0645 \u0641\u0642\u0631\u0633\u062A\u0627\u062F\u0647 \u0627\u0633\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "\u062F\u0648 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_21 = { class: "notification-item" };
const _hoisted_22 = { class: "img-left" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "\u0645\u0644\u0627\u0646\u06CC"),
    /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0645\u0646\u062A \u06AF\u0630\u0627\u0634\u062A. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "\u0633\u0647 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          ref: (_value, _refs) => {
            _refs["dropdownElement"] = _value;
            dropdownElement.value = _value;
          },
          class: "dropdown is-spaced is-dots is-left dropdown-trigger"
        }, [
          createBaseVNode("div", {
            class: "is-trigger",
            "aria-haspopup": "true",
            onClick: _cache[0] || (_cache[0] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
          }, _hoisted_4),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                _hoisted_8,
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_RouterLink, {
                    class: "notification-link",
                    to: { name: "sidebar-layouts-profile-notifications" }
                  }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("ul", _hoisted_11, [
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: _imports_2,
                        onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_14
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: _imports_5,
                        onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_17
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: _imports_3,
                        onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_20
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", _hoisted_21, [
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("img", {
                        class: "user-photo",
                        alt: "",
                        src: _imports_0,
                        onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_23
                  ])
                ])
              ])
            ])
          ])
        ], 512)
      ]);
    };
  }
});
export { _sfc_main as _ };
