import { d as defineComponent, o as openBlock, b as createElementBlock, s as withModifiers, D as createCommentVNode, e as createBaseVNode, F as renderSlot, n as normalizeClass } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "message-body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    color: { type: String, required: false, default: void 0 },
    closable: { type: Boolean, required: false }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["message", [props.color && `is-${props.color}`]])
      }, [
        props.closable ? (openBlock(), createElementBlock("a", {
          key: 0,
          "aria-label": "Dismiss",
          class: "delete",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("close"), ["prevent"]))
        })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
