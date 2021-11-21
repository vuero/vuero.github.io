import { d as defineComponent, o as openBlock, b as createElementBlock, n as normalizeClass, e as createBaseVNode, a6 as mergeProps, E as toDisplayString, D as createCommentVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = ["checked"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "slider" }, null, -1);
const _hoisted_3 = ["checked"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" }, null, -1);
const _hoisted_5 = {
  key: 2,
  class: "text"
};
let instances = 0;
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { type: Boolean, required: false, default: false },
    label: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    thin: { type: Boolean, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const blockSwitchId = `block-switch-${++instances}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          props.label && "switch-block",
          props.thin && props.label && "thin-switch-block"
        ])
      }, [
        props.thin ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: blockSwitchId,
          class: normalizeClass(["thin-switch", [props.color && `is-${props.color}`]])
        }, [
          createBaseVNode("input", mergeProps({
            id: blockSwitchId,
            checked: props.modelValue,
            class: "input",
            type: "checkbox"
          }, _ctx.$attrs, {
            onChange: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", !props.modelValue))
          }), null, 16, _hoisted_1),
          _hoisted_2
        ], 2)) : (openBlock(), createElementBlock("label", {
          key: 1,
          for: blockSwitchId,
          class: normalizeClass(["form-switch", [props.color && `is-${props.color}`]])
        }, [
          createBaseVNode("input", mergeProps({
            id: blockSwitchId,
            checked: props.modelValue,
            type: "checkbox",
            class: "is-switch"
          }, _ctx.$attrs, {
            onChange: _cache[1] || (_cache[1] = ($event) => emit("update:modelValue", !props.modelValue))
          }), null, 16, _hoisted_3),
          _hoisted_4
        ], 2)),
        props.label ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("label", { for: blockSwitchId }, [
            createBaseVNode("span", null, toDisplayString(props.label), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export { _sfc_main as _ };
