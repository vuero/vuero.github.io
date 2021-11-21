import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, n as normalizeClass } from "./vendor.9ec557a4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget", [props.straight && "is-straight"]])
      }, [
        renderSlot(_ctx.$slots, "header"),
        renderSlot(_ctx.$slots, "body")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
