import { _ as __unplugin_components_8 } from "./WidgetDropdown.f2919a83.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, E as toDisplayString, v as createVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "widget-toolbar" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "UI Widget" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_WidgetDropdown = __unplugin_components_8;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h3", null, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_WidgetDropdown)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
