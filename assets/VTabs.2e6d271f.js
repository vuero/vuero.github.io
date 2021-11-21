import { _ as _sfc_main$1 } from "./VIcon.85cce7bc.js";
import { d as defineComponent, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, n as normalizeClass, G as Fragment, J as renderList, N as createBlock, D as createCommentVNode, E as toDisplayString, t as unref, v as createVNode, x as withCtx, F as renderSlot, _ as Transition } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "tabs-inner" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = {
  key: 0,
  class: "tab-naver"
};
const _hoisted_4 = { class: "tab-content is-active" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    tabs: { type: Array, required: true },
    selected: { type: String, required: false, default: void 0 },
    type: { type: String, required: false, default: void 0 },
    align: { type: String, required: false, default: void 0 },
    slider: { type: Boolean, required: false },
    slow: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const activeValue = ref(props.selected);
    const sliderClass = computed(() => {
      if (!props.slider) {
        return "";
      }
      if (props.type === "rounded") {
        if (props.tabs.length === 3) {
          return "is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-slider";
        }
        return "";
      }
      if (!props.type) {
        if (props.tabs.length === 3) {
          return "is-squared is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-squared is-slider";
        }
      }
      return "";
    });
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tabs-wrapper", [unref(sliderClass)]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: normalizeClass(["tabs", [
              props.align === "centered" && "is-centered",
              props.align === "right" && "is-right",
              props.type === "rounded" && !props.slider && "is-toggle is-toggle-rounded",
              props.type === "toggle" && "is-toggle",
              props.type === "boxed" && "is-boxed"
            ]])
          }, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([activeValue.value === tab.value && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: ($event) => activeValue.value = tab.value
                  }, [
                    tab.icon ? (openBlock(), createBlock(_component_VIcon, {
                      key: 0,
                      icon: tab.icon
                    }, null, 8, ["icon"])) : createCommentVNode("", true),
                    createBaseVNode("span", null, toDisplayString(tab.label), 1)
                  ], 8, _hoisted_2)
                ], 2);
              }), 128)),
              unref(sliderClass) ? (openBlock(), createElementBlock("li", _hoisted_3)) : createCommentVNode("", true)
            ])
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(Transition, {
            name: props.slow ? "fade-slow" : "fade-fast",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "tab", { activeValue: activeValue.value })
            ]),
            _: 3
          }, 8, ["name"])
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
