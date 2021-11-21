import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, E as toDisplayString, F as renderSlot } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "hub-card" };
const _hoisted_2 = { class: "hub-card-body" };
const _hoisted_3 = { class: "inner-content" };
const _hoisted_4 = { class: "title is-5 is-narrow is-thin" };
const _hoisted_5 = { class: "light-text" };
const _hoisted_6 = { class: "hub-card-foot" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "Title" },
    content: { type: String, required: false, default: "Get familiar with Vuero components. Code examples included." }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h3", _hoisted_4, toDisplayString(props.title), 1),
            createBaseVNode("p", _hoisted_5, toDisplayString(props.content), 1)
          ]),
          renderSlot(_ctx.$slots, "icon")
        ]),
        createBaseVNode("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
