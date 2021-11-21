import { _ as _sfc_main$1 } from "./FlexListV3.3830e3ea.js";
import { d as defineComponent, r as ref, K as useHead, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode } from "./vendor.9ec557a4.js";
import { p as pageTitle } from "./sidebarLayoutState.883cc242.js";
import "./index.4d6c8e1a.js";
import "./VAvatar.879e77ac.js";
import "./useViaPlaceholderError.be9c33a4.js";
import "./VFlexPagination.440ca280.js";
const _hoisted_1 = { class: "tabs-wrapper is-slider is-squared is-inverted" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("all");
    pageTitle.value = "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u06F3";
    useHead({
      title: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u06F3 - \u0633\u0627\u06CC\u062F\u0628\u0631 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_FlexListV3 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_FlexListV3, { "active-tab": activeTab.value }, null, 8, ["active-tab"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
