import { d as defineComponent, Z as useI18n, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, F as renderSlot, n as normalizeClass, E as toDisplayString, t as unref, C as createStaticVNode } from "./vendor.9ec557a4.js";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Karteninhabername"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Kartennummer"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ablauf"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sicherheitscode"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["G\xDCLTIG"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["BIS"]);
        }
      },
      "en": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["cardholder name"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["card number"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["expiration"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["security code"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["VALID"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["THRU"]);
        }
      },
      "fa": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0646\u0627\u0645 \u0635\u0627\u062D\u0628 \u06A9\u0627\u0631\u062A"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0634\u0645\u0627\u0631\u0647 \u06A9\u0627\u0631\u062A"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0646\u0642\u0636\u0627"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u06A9\u062F \u0627\u0645\u0646\u06CC\u062A\u06CC"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u0639\u062A\u0628\u0631"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0639\u062A\u0628\u0627\u0631 \u062A\u0627"]);
        }
      },
      "es-MX": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["nombre del titular"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["n\xFAmero de tarjeta"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["caducidad"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["c\xF3digo de seguridad"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["V\xC1LIDO"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["HASTA"]);
        }
      },
      "es": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["nombre del titular"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["n\xFAmero de tarjeta"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["caducidad"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["c\xF3digo de seguridad"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["V\xC1LIDO"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["HASTA"]);
        }
      },
      "fr": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["titulaire de la carte"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["num\xE9ro de carte"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["expiration"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["code de s\xE9curit\xE9"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["VALABLE"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["JUSQU'\xC0"]);
        }
      },
      "zh-CN": {
        "holder-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6301\u5361\u4EBA\u59D3\u540D"]);
        },
        "number-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5361\u53F7"]);
        },
        "expiration-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5230\u671F"]);
        },
        "cvc-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5B89\u5168\u4EE3\u7801"]);
        },
        "valid-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6709\u6548"]);
        },
        "valid-thru-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7A81\u7834"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "card-container" };
const _hoisted_2 = { class: "front" };
const _hoisted_3 = {
  id: "cardfront",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 750 471",
  style: { "enable-background": "new 0 0 750 471" },
  "xml:space": "preserve"
};
const _hoisted_4 = { id: "Front2" };
const _hoisted_5 = { id: "CardBackground" };
const _hoisted_6 = { id: "Page-1_1_" };
const _hoisted_7 = { id: "amex_1_" };
const _hoisted_8 = {
  id: "svgnumber",
  transform: "matrix(1 0 0 1 60.106 295.0121)",
  class: "st2 st3 st4"
};
const _hoisted_9 = {
  id: "svgname",
  transform: "matrix(1 0 0 1 54.1064 428.1723)",
  class: "st2 st5 st6"
};
const _hoisted_10 = {
  transform: "matrix(1 0 0 1 54.1074 389.8793)",
  class: "st7 st5 st8"
};
const _hoisted_11 = {
  transform: "matrix(1 0 0 1 479.7754 388.8793)",
  class: "st7 st5 st8"
};
const _hoisted_12 = {
  transform: "matrix(1 0 0 1 65.1054 241.5)",
  class: "st7 st5 st8"
};
const _hoisted_13 = {
  id: "svgexpire",
  transform: "matrix(1 0 0 1 574.4219 433.8095)",
  class: "st2 st5 st9"
};
const _hoisted_14 = {
  transform: "matrix(1 0 0 1 479.3848 417.0097)",
  class: "st2 st10 st11"
};
const _hoisted_15 = {
  transform: "matrix(1 0 0 1 479.3848 435.6762)",
  class: "st2 st10 st11"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("polygon", {
  class: "st2",
  points: "554.5,421 540.4,414.2 540.4,427.9 		"
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<g id="cchip"><g><path class="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3\n                    c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"></path></g><g><g><rect x="82" y="70" class="st12" width="1.5" height="60"></rect></g><g><rect x="167.4" y="70" class="st12" width="1.5" height="60"></rect></g><g><path class="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3\n                        c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3\n                        C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5\n                        c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5\n                        c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"></path></g><g><rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5"></rect></g><g><rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5"></rect></g><g><rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5"></rect></g><g><rect x="142" y="117.9" class="st12" width="26.2" height="1.5"></rect></g></g></g>', 1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("g", { id: "Back" }, null, -1);
const _hoisted_19 = { class: "back" };
const _hoisted_20 = {
  id: "cardback",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 750 471",
  style: { "enable-background": "new 0 0 750 471" },
  "xml:space": "preserve"
};
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("g", { id: "Front" }, [
  /* @__PURE__ */ createBaseVNode("line", {
    class: "st0",
    x1: "35.3",
    y1: "10.4",
    x2: "36.7",
    y2: "11"
  })
], -1);
const _hoisted_22 = { id: "Back2" };
const _hoisted_23 = { id: "Page-1_2_" };
const _hoisted_24 = { id: "amex_2_" };
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<rect y="61.6" class="st2" width="750" height="78"></rect><g><path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5\n                C707.1,246.4,704.4,249.1,701.1,249.1z"></path><rect x="42.9" y="198.6" class="st4" width="664.1" height="10.5"></rect><rect x="42.9" y="224.5" class="st4" width="664.1" height="10.5"></rect><path class="st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"></path></g>', 2);
const _hoisted_27 = {
  id: "svgsecurity",
  transform: "matrix(1 0 0 1 621.999 227.2734)",
  class: "st6 st7"
};
const _hoisted_28 = { class: "st8" };
const _hoisted_29 = {
  transform: "matrix(1 0 0 1 518.083 280.0879)",
  class: "st9 st6 st10"
};
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("rect", {
  x: "58.1",
  y: "378.6",
  class: "st11",
  width: "375.5",
  height: "13.5"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("rect", {
  x: "58.1",
  y: "405.6",
  class: "st11",
  width: "421.7",
  height: "13.5"
}, null, -1);
const _hoisted_32 = {
  id: "svgnameback",
  transform: "matrix(1 0 0 1 59.5073 228.6099)",
  class: "st12 st13"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    number: { type: String, required: false, default: "1234 1234 1234 1234" },
    name: { type: String, required: false, default: "\u062C\u0627\u0646 \u062F\u0648" },
    expiry: { type: String, required: false, default: "01/30" },
    cvc: { type: [String, Number], required: false, default: "123" },
    color: { type: null, required: false, default: "grey" },
    flipped: { type: Boolean, required: false }
  },
  emits: ["flip"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const nameUppercase = computed(() => {
      var _a, _b;
      return (_b = (_a = props.name) == null ? void 0 : _a.toUpperCase()) != null ? _b : "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass([[props.flipped && "flipped"], "creditcard"]),
          onClick: _cache[0] || (_cache[0] = ($event) => emit("flip"))
        }, [
          createBaseVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "default"),
            (openBlock(), createElementBlock("svg", _hoisted_3, [
              createBaseVNode("g", _hoisted_4, [
                createBaseVNode("g", _hoisted_5, [
                  createBaseVNode("g", _hoisted_6, [
                    createBaseVNode("g", _hoisted_7, [
                      createBaseVNode("path", {
                        id: "Rectangle-1_1_",
                        class: normalizeClass(["lightcolor", props.color]),
                        d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40\n                        C0,17.9,17.9,0,40,0z"
                      }, null, 2)
                    ])
                  ]),
                  createBaseVNode("path", {
                    class: normalizeClass(["darkcolor", `${props.color}dark`]),
                    d: "M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                  }, null, 2)
                ]),
                createBaseVNode("text", _hoisted_8, toDisplayString(props.number), 1),
                createBaseVNode("text", _hoisted_9, toDisplayString(unref(nameUppercase)), 1),
                createBaseVNode("text", _hoisted_10, toDisplayString(unref(t)("holder-label")), 1),
                createBaseVNode("text", _hoisted_11, toDisplayString(unref(t)("expiration-label")), 1),
                createBaseVNode("text", _hoisted_12, toDisplayString(unref(t)("number-label")), 1),
                createBaseVNode("g", null, [
                  createBaseVNode("text", _hoisted_13, toDisplayString(props.expiry), 1),
                  createBaseVNode("text", _hoisted_14, toDisplayString(unref(t)("valid-label")), 1),
                  createBaseVNode("text", _hoisted_15, toDisplayString(unref(t)("valid-thru-label")), 1),
                  _hoisted_16
                ]),
                _hoisted_17
              ]),
              _hoisted_18
            ]))
          ]),
          createBaseVNode("div", _hoisted_19, [
            (openBlock(), createElementBlock("svg", _hoisted_20, [
              _hoisted_21,
              createBaseVNode("g", _hoisted_22, [
                createBaseVNode("g", _hoisted_23, [
                  createBaseVNode("g", _hoisted_24, [
                    createBaseVNode("path", {
                      id: "Rectangle-1_2_",
                      class: normalizeClass(["darkcolor", `${props.color}dark`]),
                      d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40\n                    C0,17.9,17.9,0,40,0z"
                    }, null, 2)
                  ])
                ]),
                _hoisted_25,
                createBaseVNode("text", _hoisted_27, toDisplayString(props.cvc), 1),
                createBaseVNode("g", _hoisted_28, [
                  createBaseVNode("text", _hoisted_29, toDisplayString(unref(t)("cvc-label")), 1)
                ]),
                _hoisted_30,
                _hoisted_31,
                createBaseVNode("text", _hoisted_32, toDisplayString(props.name), 1)
              ])
            ]))
          ])
        ], 2)
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as _ };
