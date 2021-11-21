import { d as defineComponent, o as openBlock, b as createElementBlock, E as toDisplayString, n as normalizeClass } from "./vendor.9ec557a4.js";
const _hoisted_1 = ["value", "max"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: { type: Number, required: false, default: void 0 },
    max: { type: Number, required: false, default: 100 },
    size: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: "primary" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("progress", {
        class: normalizeClass(["progress", [
          props.size && `is-${props.size}`,
          props.color && `is-${props.color}`
        ]]),
        value: props.value,
        max: props.max
      }, toDisplayString(props.value ? `${props.value / props.max * 100}%` : ""), 11, _hoisted_1);
    };
  }
});
export { _sfc_main as _ };
