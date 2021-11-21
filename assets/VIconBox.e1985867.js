import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, n as normalizeClass } from "./vendor.9ec557a4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    size: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    rounded: { type: Boolean, required: false },
    bordered: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["v-icon", [
          props.size && "is-" + props.size,
          props.color && "is-" + props.color,
          props.rounded && "is-rounded",
          props.bordered && "is-bordered"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
