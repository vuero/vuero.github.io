import { d as defineComponent, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, a6 as mergeProps, t as unref, B as createTextVNode, E as toDisplayString, n as normalizeClass } from "./vendor.9ec557a4.js";
const _hoisted_1 = ["checked", "value"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: { type: [String, Number], required: false, default: void 0 },
    label: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    modelValue: { type: Array, required: false, default: () => [] },
    circle: { type: Boolean, required: false, default: false },
    solid: { type: Boolean, required: false, default: false },
    paddingless: { type: Boolean, required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const checked = computed(() => props.modelValue.includes(props.value));
    function change() {
      const values = [...props.modelValue];
      if (checked.value) {
        values.splice(values.indexOf(props.value), 1);
      } else {
        values.push(props.value);
      }
      emit("update:modelValue", values);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(["checkbox", [
          props.solid ? "is-solid" : "is-outlined",
          props.circle && "is-circle",
          props.color && `is-${props.color}`,
          props.paddingless && "is-paddingless"
        ]])
      }, [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          checked: unref(checked),
          value: props.value
        }, _ctx.$attrs, { onChange: change }), null, 16, _hoisted_1),
        _hoisted_2,
        createTextVNode(" " + toDisplayString(props.label || props.value), 1)
      ], 2);
    };
  }
});
export { _sfc_main as _ };
