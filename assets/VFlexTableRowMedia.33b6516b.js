import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$2 } from "./VAvatarStack.8507ceb8.js";
import { _ as __unplugin_components_2 } from "./FlexTableDropdown.4f5be7fe.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, J as renderList, e as createBaseVNode, v as createVNode, E as toDisplayString, n as normalizeClass, G as Fragment } from "./vendor.9ec557a4.js";
const _hoisted_1 = {
  class: "flex-table-cell is-media is-grow",
  "data-th": "\u06A9\u0627\u0631\u0628\u0631"
};
const _hoisted_2 = { class: "item-name" };
const _hoisted_3 = { class: "item-meta" };
const _hoisted_4 = {
  class: "flex-table-cell",
  "data-th": "\u0645\u0648\u0642\u0639\u06CC\u062A"
};
const _hoisted_5 = { class: "light-text" };
const _hoisted_6 = {
  class: "flex-table-cell",
  "data-th": "\u062D\u0648\u0632\u0647 \u06A9\u0627\u0631\u06CC"
};
const _hoisted_7 = { class: "light-text" };
const _hoisted_8 = {
  class: "flex-table-cell",
  "data-th": "\u0648\u0636\u0639\u06CC\u062A"
};
const _hoisted_9 = {
  class: "flex-table-cell",
  "data-th": "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A"
};
const _hoisted_10 = {
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
      const _component_VAvatar = _sfc_main$1;
      const _component_VAvatarStack = _sfc_main$2;
      const _component_FlexTableDropdown = __unplugin_components_2;
      return openBlock(true), createElementBlock(Fragment, null, renderList(props.rows, (row) => {
        return openBlock(), createElementBlock("div", {
          key: row.id,
          class: "flex-table-item"
        }, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_VAvatar, {
              size: "medium",
              picture: row.picture,
              badge: row.badge
            }, null, 8, ["picture", "badge"]),
            createBaseVNode("div", null, [
              createBaseVNode("span", _hoisted_2, toDisplayString(row.name), 1),
              createBaseVNode("span", _hoisted_3, [
                createBaseVNode("span", null, toDisplayString(row.position), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("span", _hoisted_5, toDisplayString(row.location), 1)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("span", _hoisted_7, toDisplayString(row.industry), 1)
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("span", {
              class: normalizeClass(["tag is-rounded", [
                row.status === "\u0641\u0639\u0627\u0644" && "is-success",
                row.status === "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644" && "",
                row.status === "\u062C\u062F\u06CC\u062F" && "is-info",
                row.status === "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647" && "is-orange"
              ]])
            }, toDisplayString(row.status), 3)
          ]),
          createBaseVNode("div", _hoisted_9, [
            createVNode(_component_VAvatarStack, {
              class: "is-pushed-mobile",
              size: "small",
              avatars: row.contacts,
              limit: 3
            }, null, 8, ["avatars"])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createVNode(_component_FlexTableDropdown)
          ])
        ]);
      }), 128);
    };
  }
});
export { _sfc_main as _ };
