var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { d as defineComponent, h as computed, j as h, q as resolveComponent } from "./vendor.9ec557a4.js";
const _sfc_main = defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    },
    to: {
      type: Object,
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([
          void 0,
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "white"
        ].indexOf(value) === -1) {
          console.warn(`VIconButton: invalid "${value}" color. Should be primary, info, success, warning, danger, white or undefined`);
          return false;
        }
        return true;
      }
    },
    dark: {
      type: String,
      default: void 0,
      validator: (value) => {
        if (!value)
          return true;
        if (["1", "2", "3", "4", "5", "6"].indexOf(value) === -1) {
          console.warn(`VIconButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`);
          return false;
        }
        return true;
      }
    },
    circle: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    elevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    darkOutlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    const classes = computed(() => {
      const defaultClasses = (attrs == null ? void 0 : attrs.class) || [];
      return [
        ...defaultClasses,
        props.disabled && "is-disabled",
        props.circle && "is-circle",
        props.bold && "is-bold",
        props.outlined && "is-outlined",
        props.raised && "is-raised",
        props.dark && `is-dark-bg-${props.dark}`,
        props.darkOutlined && "is-dark-outlined",
        props.elevated && "is-elevated",
        props.loading && "is-loading",
        props.color && `is-${props.color}`,
        props.light && "is-light"
      ];
    });
    const isIconify = computed(() => props.icon && props.icon.indexOf(":") !== -1);
    return () => {
      let icon;
      if (isIconify.value) {
        icon = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.icon
        });
      } else {
        icon = h("i", { "aria-hidden": true, class: props.icon });
      }
      const iconWrapper = h("span", { class: "icon" }, icon);
      if (props.to) {
        return h(resolveComponent("RouterLink"), __spreadProps(__spreadValues({}, attrs), {
          to: props.to,
          class: ["button", ...classes.value]
        }), iconWrapper);
      } else if (props.href) {
        return h("a", __spreadProps(__spreadValues({}, attrs), {
          href: props.href,
          class: classes.value
        }), iconWrapper);
      }
      return h("button", __spreadProps(__spreadValues({
        type: "button"
      }, attrs), {
        disabled: props.disabled,
        class: ["button", ...classes.value]
      }), iconWrapper);
    };
  }
});
export { _sfc_main as _ };
