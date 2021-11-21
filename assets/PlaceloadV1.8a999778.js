import { c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, m as __unplugin_components_0 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VPlaceloadAvatar.71bbd4aa.js";
import { _ as _sfc_main$4 } from "./VPlaceloadText.e27d98a5.js";
import { _ as __unplugin_components_1$1 } from "./VPlaceloadWrap.70cc96f2.js";
import { d as defineComponent, r as ref, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, G as Fragment, J as renderList, B as createTextVNode } from "./vendor.9ec557a4.js";
var PlaceloadV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "list-info" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u06A9\u0648\u0631\u062F\u0647\u0627")
], -1);
const _hoisted_3 = { class: "buttons" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u062A\u0627\u0626\u06CC\u062F ");
const _hoisted_5 = { class: "list-view list-view-v1" };
const _hoisted_6 = { class: "list-view-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceloadAvatar = _sfc_main$3;
      const _component_VPlaceloadText = _sfc_main$4;
      const _component_VPlaceload = __unplugin_components_0;
      const _component_VPlaceloadWrap = __unplugin_components_1$1;
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
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VButton, {
              color: "primary",
              icon: "fas fa-check",
              elevated: "",
              disabled: ""
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            (openBlock(), createElementBlock(Fragment, null, renderList(10, (key) => {
              return createBaseVNode("div", {
                key,
                class: "list-view-item"
              }, [
                createVNode(_component_VPlaceloadWrap, null, {
                  default: withCtx(() => [
                    createVNode(_component_VPlaceloadAvatar, { size: "medium" }),
                    createVNode(_component_VPlaceloadText, {
                      "last-line-width": "60%",
                      class: "mx-2"
                    }),
                    createVNode(_component_VPlaceload, {
                      class: "mx-2",
                      disabled: ""
                    }),
                    createVNode(_component_VPlaceload, { class: "mx-2 h-hidden-tablet-p" }),
                    createVNode(_component_VPlaceload, { class: "mx-2 h-hidden-tablet-p" }),
                    createVNode(_component_VPlaceload, { class: "mx-2" })
                  ]),
                  _: 1
                })
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
