import { c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, h as _sfc_main$3, m as __unplugin_components_0 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VPlaceloadAvatar.71bbd4aa.js";
import { _ as _sfc_main$5 } from "./VPlaceloadText.e27d98a5.js";
import { _ as _sfc_main$6 } from "./VAvatarStack.8507ceb8.js";
import { d as defineComponent, r as ref, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, G as Fragment, J as renderList, B as createTextVNode } from "./vendor.9ec557a4.js";
var PlaceloadV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631 ");
const _hoisted_3 = { class: "flex-list-wrapper flex-list-v1" };
const _hoisted_4 = { class: "flex-table" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", {
  class: "flex-table-header",
  "data-filter-hide": ""
}, [
  /* @__PURE__ */ createBaseVNode("span", { class: "is-grow" }, "\u06A9\u0627\u0631\u0628\u0631"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0648\u0642\u0639\u06CC\u062A"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0648\u0632\u0647 \u06A9\u0627\u0631\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A"),
  /* @__PURE__ */ createBaseVNode("span", { class: "cell-end" }, "\u0627\u0642\u062F\u0627\u0645\u0627\u062A")
], -1);
const _hoisted_6 = { class: "flex-list-inner" };
const _hoisted_7 = { class: "flex-table-cell is-media is-grow" };
const _hoisted_8 = {
  class: "flex-table-cell",
  "data-th": "\u0645\u0648\u0642\u0639\u06CC\u062A"
};
const _hoisted_9 = {
  class: "flex-table-cell",
  "data-th": "\u062D\u0648\u0632\u0647 \u06A9\u0627\u0631\u06CC"
};
const _hoisted_10 = {
  class: "flex-table-cell",
  "data-th": "\u0648\u0636\u0639\u06CC\u062A"
};
const _hoisted_11 = {
  class: "flex-table-cell",
  "data-th": "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A"
};
const _hoisted_12 = {
  class: "flex-table-cell cell-end",
  "data-th": "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VButtons = _sfc_main$3;
      const _component_VPlaceloadAvatar = _sfc_main$4;
      const _component_VPlaceloadText = _sfc_main$5;
      const _component_VPlaceload = __unplugin_components_0;
      const _component_VAvatarStack = _sfc_main$6;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
              createVNode(_component_VControl, { icon: "feather:search" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                    class: "input custom-text-filter",
                    placeholder: "\u062C\u0633\u062A\u062C\u0648..."
                  }, null, 512), [
                    [vModelText, filters.value]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                icon: "fas fa-plus",
                elevated: ""
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
            createBaseVNode("div", _hoisted_6, [
              (openBlock(), createElementBlock(Fragment, null, renderList(10, (key) => {
                return createBaseVNode("div", {
                  key,
                  class: "flex-table-item"
                }, [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(_component_VPlaceloadAvatar, { size: "medium" }),
                    createVNode(_component_VPlaceloadText, {
                      lines: 2,
                      width: "80%",
                      "last-line-width": "60%",
                      class: "mx-2"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_VPlaceload, { class: "mx-1" })
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_VPlaceload, { class: "mx-1" })
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_VPlaceload, { class: "mx-1" })
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_VAvatarStack, { class: "is-pushed-mobile" }, {
                      default: withCtx(() => [
                        createVNode(_component_VPlaceloadAvatar, {
                          size: "small",
                          class: "mx-1"
                        }),
                        createVNode(_component_VPlaceloadAvatar, {
                          size: "small",
                          class: "mx-1"
                        }),
                        createVNode(_component_VPlaceloadAvatar, {
                          size: "small",
                          class: "mx-1"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_VPlaceload, { class: "mx-1" })
                  ])
                ]);
              }), 64))
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
