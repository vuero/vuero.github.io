import { _ as _sfc_main$1 } from "./LifestyleDashboardV1.f4714dea.js";
import { d as defineComponent, K as useHead, o as openBlock, b as createElementBlock, N as createBlock, aq as Teleport, v as createVNode, e as createBaseVNode } from "./vendor.9ec557a4.js";
import { p as pageTitle } from "./navbarLayoutState.822f8a9f.js";
import "./VTag.ff081b8f.js";
import "./VIconBox.e1985867.js";
import "./VDropdown.5214d40f.js";
import "./VIcon.85cce7bc.js";
import "./useDropdown.086619d7.js";
import "./index.4d6c8e1a.js";
import "./having-coffee.dc5ee276.js";
import "./having-coffee-dark.c71483cf.js";
import "./vue3-apexcharts.common.236dfc44.js";
import "./apex-formatters.f9949b74.js";
import "./dayjs.min.9071635e.js";
import "./useViaPlaceholderError.be9c33a4.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "lifestyle-dashboard-bg has-top-nav" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    pageTitle.value = "\u0644\u0627\u06CC\u0641 \u0627\u0633\u062A\u0627\u06CC\u0644\u06F1";
    useHead({
      title: "\u0644\u0627\u06CC\u0641 \u0627\u0633\u062A\u0627\u06CC\u0644 1 - \u0645\u0646\u0648 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_LifestyleDashboardV1 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(Teleport, { to: "[data-teleport-bg]" }, [
          _hoisted_2
        ])),
        createVNode(_component_LifestyleDashboardV1, { class: "has-navbar-spacing" })
      ]);
    };
  }
});
export { _sfc_main as default };
