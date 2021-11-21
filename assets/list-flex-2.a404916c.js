import { _ as _sfc_main$1 } from "./FlexListV2.d1f254c6.js";
import { d as defineComponent, r as ref, K as useHead, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode } from "./vendor.9ec557a4.js";
import { p as pageTitle } from "./navbarLayoutState.822f8a9f.js";
import "./index.4d6c8e1a.js";
import "./VAvatar.879e77ac.js";
import "./useViaPlaceholderError.be9c33a4.js";
import "./VAvatarStack.8507ceb8.js";
import "./VDropdown.5214d40f.js";
import "./VIcon.85cce7bc.js";
import "./useDropdown.086619d7.js";
import "./VFlexPagination.440ca280.js";
const _hoisted_1 = { class: "page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg" };
const _hoisted_2 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("active");
    pageTitle.value = "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u06F2";
    useHead({
      title: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u06F2 - \u0645\u0646\u0648 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_FlexListV2 = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_FlexListV2, {
            class: "is-navbar",
            "active-tab": activeTab.value
          }, null, 8, ["active-tab"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
