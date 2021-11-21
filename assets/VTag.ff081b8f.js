import { d as defineComponent, o as openBlock, b as createElementBlock, E as toDisplayString, n as normalizeClass } from "./vendor.9ec557a4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    label: { type: [String, Number], required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    rounded: { type: Boolean, required: false },
    curved: { type: Boolean, required: false },
    outlined: { type: Boolean, required: false },
    elevated: { type: Boolean, required: false },
    remove: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("small", {
        class: normalizeClass(["tag", [
          props.color && "is-" + props.color,
          props.rounded && "is-rounded",
          props.curved && "is-curved",
          props.outlined && "is-outlined",
          props.elevated && "is-elevated",
          props.remove && "is-delete"
        ]])
      }, toDisplayString(props.label), 3);
    };
  }
});
export { _sfc_main as _ };
