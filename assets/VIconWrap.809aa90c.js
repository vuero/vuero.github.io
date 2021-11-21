import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, h as computed, o as openBlock, b as createElementBlock, t as unref, n as normalizeClass, D as createCommentVNode, F as renderSlot } from "./vendor.9ec557a4.js";
var VIconWrap_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["src"];
const _hoisted_2 = ["data-icon"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    icon: { type: String, required: false, default: void 0 },
    picture: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    size: { type: String, required: false, default: void 0 },
    dark: { type: String, required: false, default: "3" },
    hasLargeIcon: { type: Boolean, required: false },
    hasBackground: { type: Boolean, required: false },
    placeholder: { type: Boolean, required: false },
    darkPrimary: { type: Boolean, required: false },
    darkCardBordered: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["icon-wrap", [
          props.color && !props.hasBackground && `has-text-${props.color}`,
          props.color && props.hasBackground && `has-background-${props.color}`,
          props.color && props.color !== "white" && props.hasBackground && `has-text-white`,
          props.color && props.color === "white" && props.hasBackground && `has-text-black`,
          props.size && `is-${props.size}`,
          props.dark && !props.hasBackground && `is-dark-bg-${props.dark}`,
          props.darkPrimary && "is-dark-primary",
          props.darkCardBordered && "is-dark-card-bordered",
          props.hasLargeIcon && "has-large-icon",
          props.picture && "has-img",
          props.placeholder && "is-placeholder"
        ]])
      }, [
        props.picture ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: props.picture,
          alt: "",
          onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "32x32"))
        }, null, 40, _hoisted_1)) : unref(isIconify) ? (openBlock(), createElementBlock("i", {
          key: 1,
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": props.icon
        }, null, 8, _hoisted_2)) : props.icon ? (openBlock(), createElementBlock("i", {
          key: 2,
          "aria-hidden": "true",
          class: normalizeClass(props.icon)
        }, null, 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "after")
      ], 2);
    };
  }
});
export { _sfc_main as _ };
