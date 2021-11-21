import { C as CssUnitRe, m as __unplugin_components_0 } from "./index.4d6c8e1a.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, G as Fragment, J as renderList, N as createBlock, v as createVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "content-shape-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    width: { type: String, required: false, default: "100%" },
    lastLineWidth: { type: String, required: false, default: "100%" },
    lines: { type: Number, required: false, default: 2 },
    disabled: { type: Boolean, required: false },
    centered: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    if (props.width.match(CssUnitRe) === null) {
      console.warn(`VPlaceloadText: invalid "${props.width}" width. Should be a valid css unit value.`);
    }
    if (props.lastLineWidth.match(CssUnitRe) === null) {
      console.warn(`VPlaceloadText: invalid "${props.lastLineWidth}" lastLineWidth. Should be a valid css unit value.`);
    }
    return (_ctx, _cache) => {
      const _component_VPlaceload = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.lines - 1, (line) => {
          return openBlock(), createBlock(_component_VPlaceload, {
            key: line,
            width: props.width,
            centered: props.centered
          }, null, 8, ["width", "centered"]);
        }), 128)),
        createVNode(_component_VPlaceload, {
          width: props.lastLineWidth,
          centered: props.centered
        }, null, 8, ["width", "centered"])
      ]);
    };
  }
});
export { _sfc_main as _ };
