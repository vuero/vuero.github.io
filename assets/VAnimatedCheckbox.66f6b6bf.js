import { d as defineComponent, r as ref, h as computed, w as watchEffect, o as openBlock, b as createElementBlock, e as createBaseVNode, a6 as mergeProps, t as unref, n as normalizeClass } from "./vendor.9ec557a4.js";
var VAnimatedCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["checked", "value"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "checkmark",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 52 52"
}, [
  /* @__PURE__ */ createBaseVNode("circle", {
    class: "checkmark-circle",
    cx: "26",
    cy: "26",
    r: "25",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    class: "checkmark-check",
    fill: "none",
    d: "M14.1 27.2l7.1 7.2 16.7-16.8"
  })
], -1);
let instances = 0;
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: { type: [String, Number], required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    modelValue: { type: Array, required: false, default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const animatedCheckboxId = `animated-checkbox-${++instances}`;
    const element = ref();
    const innerElement = ref();
    const checked = computed(() => props.modelValue.includes(props.value));
    const updateCheckbox = () => {
      if (element.value && innerElement.value) {
        if (checked.value) {
          element.value.classList.add("is-checked");
          innerElement.value.classList.add("is-opaque");
          setTimeout(() => {
            var _a;
            (_a = element.value) == null ? void 0 : _a.classList.remove("is-unchecked");
          }, 150);
        } else {
          element.value.classList.add("is-unchecked");
          element.value.classList.remove("is-checked");
          setTimeout(() => {
            var _a;
            (_a = innerElement.value) == null ? void 0 : _a.classList.remove("is-opaque");
          }, 150);
        }
      }
    };
    function change() {
      const values = [...props.modelValue];
      if (checked.value) {
        values.splice(values.indexOf(props.value), 1);
      } else {
        values.push(props.value);
      }
      emit("update:modelValue", values);
    }
    watchEffect(updateCheckbox);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: (_value, _refs) => {
          _refs["element"] = _value;
          element.value = _value;
        },
        class: normalizeClass(["animated-checkbox", [__props.color && "is-" + __props.color]])
      }, [
        createBaseVNode("input", mergeProps({
          id: animatedCheckboxId,
          type: "checkbox",
          checked: unref(checked),
          value: props.value
        }, _ctx.$attrs, { onChange: change }), null, 16, _hoisted_1),
        createBaseVNode("label", {
          for: animatedCheckboxId,
          class: "checkmark-wrap"
        }, [
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["innerElement"] = _value;
              innerElement.value = _value;
            },
            class: "shadow-circle"
          }, null, 512),
          _hoisted_2
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
