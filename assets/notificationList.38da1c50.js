import { _ as _sfc_main$1 } from "./VTag.ff081b8f.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, G as Fragment, J as renderList, E as toDisplayString, v as createVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "widget-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    notifications: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.notifications, (notification) => {
            return openBlock(), createElementBlock("li", {
              key: notification.id
            }, [
              createBaseVNode("a", null, [
                createBaseVNode("span", null, toDisplayString(notification.category), 1),
                createVNode(_component_VTag, {
                  rounded: "",
                  label: notification.count
                }, null, 8, ["label"])
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const notifications = [
  {
    id: 0,
    category: "\u0634\u062E\u0635\u06CC",
    count: 4
  },
  {
    id: 1,
    category: "\u062A\u062C\u0627\u0631\u06CC",
    count: 9
  },
  {
    id: 2,
    category: "\u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
    count: 2
  }
];
export { _sfc_main as _, notifications as n };
