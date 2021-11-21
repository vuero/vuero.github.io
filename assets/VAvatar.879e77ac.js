import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, n as normalizeClass, t as unref, e as createBaseVNode, E as toDisplayString, D as createCommentVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    picture: { type: String, required: false, default: void 0 },
    pictureDark: { type: String, required: false, default: void 0 },
    placeholder: { type: String, required: false, default: "https://via.placeholder.com/50x50" },
    badge: { type: String, required: false, default: void 0 },
    initials: { type: String, required: false, default: "?" },
    size: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    dotColor: { type: String, required: false, default: void 0 },
    squared: { type: Boolean, required: false },
    dot: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["v-avatar", [
          __props.size && `is-${props.size}`,
          __props.dot && "has-dot",
          __props.dotColor && `dot-${props.dotColor}`,
          __props.squared && __props.dot && "has-dot-squared"
        ]])
      }, [
        renderSlot(_ctx.$slots, "avatar", {}, () => [
          props.picture ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: normalizeClass(["avatar", [
              props.squared && "is-squared",
              props.pictureDark && "light-image"
            ]]),
            src: props.picture,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 42, _hoisted_1)) : (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["avatar is-fake", [
              props.squared && "is-squared",
              props.color && `is-${props.color}`
            ]])
          }, [
            createBaseVNode("span", null, toDisplayString(props.initials), 1)
          ], 2)),
          props.picture && props.pictureDark ? (openBlock(), createElementBlock("img", {
            key: 2,
            class: normalizeClass(["avatar dark-image", [props.squared && "is-squared"]]),
            src: props.pictureDark,
            alt: "",
            onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 42, _hoisted_2)) : createCommentVNode("", true)
        ]),
        renderSlot(_ctx.$slots, "badge", {}, () => [
          props.badge ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "badge",
            src: props.badge,
            alt: "",
            onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 40, _hoisted_3)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
