import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, e as createBaseVNode, E as toDisplayString, D as createCommentVNode, n as normalizeClass } from "./vendor.9ec557a4.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "flex-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false, default: void 0 },
    infratitle: { type: String, required: false, default: void 0 },
    center: { type: Boolean, required: false },
    lighter: { type: Boolean, required: false },
    narrow: { type: Boolean, required: false },
    mResponsive: { type: Boolean, required: false },
    tResponsive: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          !props.center && "media-flex",
          props.center && "media-flex-center",
          props.narrow && "no-margin",
          props.mResponsive && "is-responsive-mobile",
          props.tResponsive && "is-responsive-tablet-p"
        ])
      }, [
        renderSlot(_ctx.$slots, "icon"),
        createBaseVNode("div", {
          class: normalizeClass(["flex-meta", [props.lighter && "is-lighter"]])
        }, [
          createBaseVNode("span", null, toDisplayString(props.title), 1),
          props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(props.subtitle), 1)) : createCommentVNode("", true),
          props.infratitle ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(props.infratitle), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ], 2),
        createBaseVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "action")
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
