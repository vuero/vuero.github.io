import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$2 } from "./VBlock.47e0c633.js";
import { d as defineComponent, aA as useSlots, r as ref, aB as onUpdated, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, F as renderSlot, D as createCommentVNode, n as normalizeClass } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "card-head" };
const _hoisted_2 = {
  key: 0,
  class: "card-inner"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false, default: void 0 },
    avatar: { type: String, required: false, default: void 0 },
    badge: { type: String, required: false, default: void 0 },
    content: { type: String, required: false, default: void 0 },
    radius: { type: String, required: false, default: "regular" }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const slots = useSlots();
    const hasDefaultSlot = ref(!!((_a = slots.default) == null ? void 0 : _a.call(slots)));
    onUpdated(() => {
      var _a2;
      hasDefaultSlot.value = !!((_a2 = slots.default) == null ? void 0 : _a2.call(slots));
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VBlock = _sfc_main$2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["is-raised", [
          props.radius === "regular" && "s-card",
          props.radius === "smooth" && "r-card",
          props.radius === "rounded" && "l-card"
        ]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VBlock, {
            title: props.title,
            subtitle: props.subtitle,
            center: ""
          }, {
            icon: withCtx(() => [
              createVNode(_component_VAvatar, {
                picture: props.avatar,
                badge: props.badge
              }, null, 8, ["picture", "badge"])
            ]),
            action: withCtx(() => [
              renderSlot(_ctx.$slots, "action")
            ]),
            _: 3
          }, 8, ["title", "subtitle"])
        ]),
        hasDefaultSlot.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export { _sfc_main as _ };
