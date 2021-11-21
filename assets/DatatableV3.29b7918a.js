import { c as __unplugin_components_1 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { _ as __unplugin_components_8 } from "./WidgetDropdown.f2919a83.js";
import { _ as _sfc_main$2 } from "./VSimpleDatatables.bde9b4a7.js";
import { d as datatableV3, a as datatableOption } from "./index.31ae2f12.js";
import { d as defineComponent, o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, v as createVNode, b as createElementBlock, J as renderList, E as toDisplayString, t as unref, G as Fragment } from "./vendor.9ec557a4.js";
const _hoisted_1 = {
  scope: "col",
  "data-sortable": "false"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("label", { class: "checkbox is-primary is-outlined is-circle" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "head-checkbox",
    type: "checkbox"
  }),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, "\u0646\u0648\u0639", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0646\u0627\u0645", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0633\u0627\u06CC\u0632", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0646\u0633\u062E\u0647", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0622\u062E\u0631\u06CC\u0646 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("th", {
  scope: "col",
  "data-sortable": "false"
}, null, -1);
const _hoisted_9 = { class: "checkbox is-primary is-outlined is-circle" };
const _hoisted_10 = ["id"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_12 = ["src"];
const _hoisted_13 = { class: "has-dark-text dark-inverted is-font-alt is-weight-600 rem-90" };
const _hoisted_14 = { class: "light-text" };
const _hoisted_15 = { class: "light-text" };
const _hoisted_16 = { class: "flex-media" };
const _hoisted_17 = { class: "meta" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VAvatar = _sfc_main$1;
      const _component_WidgetDropdown = __unplugin_components_8;
      const _component_VSimpleDatatables = _sfc_main$2;
      return openBlock(), createBlock(_component_VSimpleDatatables, { options: unref(datatableOption) }, {
        default: withCtx(() => [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", _hoisted_1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                })
              ]),
              _hoisted_3,
              _hoisted_4,
              _hoisted_5,
              _hoisted_6,
              _hoisted_7,
              _hoisted_8
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datatableV3), (row, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", null, [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createBaseVNode("label", _hoisted_9, [
                        createBaseVNode("input", {
                          id: `row-checkbox-${index}`,
                          type: "checkbox"
                        }, null, 8, _hoisted_10),
                        _hoisted_11
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("img", {
                    class: "file-icon",
                    src: row[0],
                    alt: ""
                  }, null, 8, _hoisted_12)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_13, toDisplayString(row[1]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_14, toDisplayString(row[2]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("span", _hoisted_15, toDisplayString(row[3]), 1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(_component_VAvatar, {
                      picture: row[4],
                      size: "small"
                    }, null, 8, ["picture"]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("span", null, toDisplayString(row[5]), 1),
                      createBaseVNode("span", null, toDisplayString(row[6]), 1)
                    ])
                  ])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_WidgetDropdown)
                ])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["options"]);
    };
  }
});
export { _sfc_main as _ };
