import { d as defineComponent, Z as useI18n, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, t as unref, F as renderSlot } from "./vendor.9ec557a4.js";
import { i as isDark, t as toggleDarkModeHandler } from "./index.4d6c8e1a.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import { u as useDropdown } from "./useDropdown.086619d7.js";
const _hoisted_1 = { class: "toolbar mr-auto" };
const _hoisted_2 = { class: "toolbar-link" };
const _hoisted_3 = { class: "dark-mode mr-auto" };
const _hoisted_4 = ["checked"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { locale } = useI18n();
    const dropdownElement = ref();
    useDropdown(dropdownElement);
    const localFlagSrc = computed(() => {
      switch (locale.value) {
        case "fr":
          return "/images/icons/flags/france.svg";
        case "es":
          return "/images/icons/flags/spain.svg";
        case "es-MX":
          return "/images/icons/flags/mexico.svg";
        case "de":
          return "/images/icons/flags/germany.svg";
        case "zh-CN":
          return "/images/icons/flags/china.svg";
        case "en":
          return "/images/icons/flags/united-states-of-america.svg";
        case "fa":
        default:
          return "/images/icons/flags/iran.svg";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("label", _hoisted_3, [
            createBaseVNode("input", {
              type: "checkbox",
              checked: !unref(isDark),
              onChange: _cache[0] || (_cache[0] = (...args) => unref(toggleDarkModeHandler) && unref(toggleDarkModeHandler)(...args))
            }, null, 40, _hoisted_4),
            _hoisted_5
          ])
        ]),
        createBaseVNode("a", {
          class: "toolbar-link right-panel-trigger",
          onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "languages")
        }, [
          createBaseVNode("img", {
            src: unref(localFlagSrc),
            alt: ""
          }, null, 8, _hoisted_6)
        ]),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export { _sfc_main as _ };
