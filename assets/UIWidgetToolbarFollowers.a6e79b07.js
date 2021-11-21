import { _ as _sfc_main$1 } from "./VAvatarStack.8507ceb8.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, E as toDisplayString, v as createVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "widget-toolbar" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "UI Widget" },
    avatars: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatarStack = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h3", null, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_VAvatarStack, {
            avatars: props.avatars,
            limit: 3,
            size: "small"
          }, null, 8, ["avatars"])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
