import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, n as normalizeClass } from "./vendor.9ec557a4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    dark: { type: String, required: false, default: void 0 },
    active: { type: Boolean, required: false },
    rounded: { type: Boolean, required: false },
    hoverable: { type: Boolean, required: false },
    grey: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["button v-action", [
          props.active && "is-active",
          props.rounded && "is-rounded",
          props.dark && `is-dark-bg-${props.dark}`,
          props.hoverable && "is-hoverable",
          props.grey && "is-grey"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
