import { d as defineComponent, o as openBlock, b as createElementBlock, n as normalizeClass } from "./vendor.9ec557a4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    size: { type: String, required: false, default: void 0 },
    rounded: { type: String, required: false, default: "full" },
    centered: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["placeload-avatar", [
          !props.disabled && `loads`,
          props.size && `is-${props.size}`,
          props.centered && `is-centered`,
          props.rounded && `is-rounded-${props.rounded}`
        ]])
      }, null, 2);
    };
  }
});
export { _sfc_main as _ };
