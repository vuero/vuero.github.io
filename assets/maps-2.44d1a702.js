import { _ as _sfc_main$1 } from "./ToolbarNotification.0ddce444.js";
import { _ as _sfc_main$2 } from "./Toolbar.278fa677.js";
import { _ as _sfc_main$3 } from "./MapsDashboard.1e29bbb8.js";
import { _ as _sfc_main$4 } from "./SidebarLayout.4372cd3c.js";
import { d as defineComponent, K as useHead, o as openBlock, N as createBlock, x as withCtx, v as createVNode, e as createBaseVNode, t as unref } from "./vendor.9ec557a4.js";
import { p as pageTitle, s as sidebarTheme } from "./sidebarLayoutState.883cc242.js";
import { a as activePanel } from "./activePanelState.9015e2f2.js";
import "./25.ca54486f.js";
import "./12.16c4b7ba.js";
import "./13.d1ef5906.js";
import "./useDropdown.086619d7.js";
import "./useViaPlaceholderError.be9c33a4.js";
import "./index.4d6c8e1a.js";
import "./VAvatar.879e77ac.js";
import "./VBlock.47e0c633.js";
import "./ActivityPanel.b40b79c2.js";
import "./VDropdown.5214d40f.js";
import "./VIcon.85cce7bc.js";
import "./fastpizza.70124fcb.js";
import "./TaskPanel.15619fee.js";
import "./VTag.ff081b8f.js";
import "./VMessage.2ad1e7cc.js";
import "./VTabs.2e6d271f.js";
import "./VModal.d9bd4cb5.js";
import "./navbarLayoutState.822f8a9f.js";
import "./video.6a901793.js";
import "./SearchPanel.8d96f71b.js";
import "./VIconBox.e1985867.js";
import "./UserPopoverContent.8933a73e.js";
import "./userPopovers.e00e1803.js";
const _hoisted_1 = { class: "content-section-header" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "title is-4 is-narrow" }, "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u062F\u0648", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    pageTitle.value = "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06CC\u06A9";
    useHead({
      title: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06CC\u06A9 - \u0633\u0627\u06CC\u062F\u0628\u0631 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_ToolbarNotification = _sfc_main$1;
      const _component_Toolbar = _sfc_main$2;
      const _component_MapsDashboard = _sfc_main$3;
      const _component_SidebarLayout = _sfc_main$4;
      return openBlock(), createBlock(_component_SidebarLayout, {
        theme: unref(sidebarTheme),
        "close-on-change": "",
        "default-sidebar": "dashboard",
        nowrap: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_MapsDashboard, { reversed: "" }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                _hoisted_2,
                createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToolbarNotification),
                    createBaseVNode("a", {
                      class: "toolbar-link right-panel-trigger",
                      "aria-label": "View activity",
                      onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "activity")
                    }, _hoisted_4)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
});
export { _sfc_main as default };
