import { _ as _sfc_main$1 } from "./ViewListV3.378a7312.js";
import { d as defineComponent, r as ref, K as useHead, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode } from "./vendor.9ec557a4.js";
import { p as pageTitle } from "./navbarLayoutState.822f8a9f.js";
import "./index.4d6c8e1a.js";
import "./VIconButton.809a4ce6.js";
import "./VFlexPagination.440ca280.js";
import "./search-3-dark.7ce838c0.js";
import "./useViaPlaceholderError.be9c33a4.js";
const _hoisted_1 = { class: "page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("active");
    pageTitle.value = "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u06CC\u0633\u062A\u06CC \u06F3";
    useHead({
      title: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u06CC\u0633\u062A\u06CC \u06F3 - Navbar - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_ViewListV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_ViewListV3, { "active-tab": activeTab.value }, null, 8, ["active-tab"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
