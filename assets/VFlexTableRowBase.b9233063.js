import { _ as _sfc_main$1 } from "./VAvatarStack.8507ceb8.js";
import { _ as __unplugin_components_2 } from "./FlexTableDropdown.4f5be7fe.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, J as renderList, e as createBaseVNode, E as toDisplayString, n as normalizeClass, v as createVNode, G as Fragment } from "./vendor.9ec557a4.js";
const _hoisted_1 = {
  class: "flex-table-cell is-bold",
  "data-th": "\u0634\u0631\u06A9\u062A"
};
const _hoisted_2 = { class: "dark-text" };
const _hoisted_3 = {
  class: "flex-table-cell",
  "data-th": "\u0646\u0648\u0639"
};
const _hoisted_4 = { class: "light-text" };
const _hoisted_5 = {
  class: "flex-table-cell",
  "data-th": "\u062D\u0648\u0632\u0647 \u06A9\u0627\u0631\u06CC"
};
const _hoisted_6 = { class: "light-text" };
const _hoisted_7 = {
  class: "flex-table-cell",
  "data-th": "\u0648\u0636\u0639\u06CC\u062A"
};
const _hoisted_8 = {
  class: "flex-table-cell",
  "data-th": "\u0645\u062E\u0627\u0637\u0628\u06CC\u0646"
};
const _hoisted_9 = {
  class: "flex-table-cell cell-end",
  "data-th": "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    rows: { type: Array, required: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatarStack = _sfc_main$1;
      const _component_FlexTableDropdown = __unplugin_components_2;
      return openBlock(true), createElementBlock(Fragment, null, renderList(props.rows, (row) => {
        return openBlock(), createElementBlock("div", {
          key: row.id,
          class: "flex-table-item"
        }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("span", _hoisted_2, toDisplayString(row.company), 1)
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", _hoisted_4, toDisplayString(row.type), 1)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("span", _hoisted_6, toDisplayString(row.industry), 1)
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("span", {
              class: normalizeClass(["tag is-rounded", [
                row.status === "\u0641\u0639\u0627\u0644" && "is-success",
                row.status === "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644" && "",
                row.status === "\u062C\u062F\u06CC\u062F" && "is-info",
                row.status === "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647" && "is-orange"
              ]])
            }, toDisplayString(row.status), 3)
          ]),
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_VAvatarStack, {
              class: "is-pushed-mobile",
              size: "small",
              avatars: row.contacts,
              limit: 3
            }, null, 8, ["avatars"])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createVNode(_component_FlexTableDropdown)
          ])
        ]);
      }), 128);
    };
  }
});
export { _sfc_main as _ };
