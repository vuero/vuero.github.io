import { d as defineComponent, m as useWindowScroll, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, F as renderSlot, n as normalizeClass, t as unref, G as Fragment } from "./vendor.9ec557a4.js";
var Navbar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "navbar-navbar-inner" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-5" }, "\u0639\u0646\u0648\u0627\u0646 \u0635\u0641\u062D\u0647", -1);
const _hoisted_4 = { class: "center" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "centered-links" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "/",
    class: "centered-link centered-link-toggle"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:activity"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC")
  ])
], -1);
const _hoisted_6 = { class: "right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "default" }
  },
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass(["navbar-navbar", [
            unref(isScrolling) && "is-scrolled",
            props.theme === "fade" && "is-transparent",
            props.theme === "colored" && "is-colored"
          ]])
        }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "title", {}, () => [
                _hoisted_3
              ])
            ]),
            createBaseVNode("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "links", {}, () => [
                _hoisted_5
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              renderSlot(_ctx.$slots, "toolbar")
            ])
          ])
        ], 2),
        renderSlot(_ctx.$slots, "subnav")
      ], 64);
    };
  }
});
export { _sfc_main as _ };
