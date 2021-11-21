import { _ as _sfc_main$1 } from "./SidebarLayout.4372cd3c.js";
import { d as defineComponent, q as resolveComponent, o as openBlock, N as createBlock, x as withCtx, v as createVNode, _ as Transition, a3 as resolveDynamicComponent, t as unref } from "./vendor.9ec557a4.js";
import { s as sidebarTheme } from "./sidebarLayoutState.883cc242.js";
import "./index.4d6c8e1a.js";
import "./ActivityPanel.b40b79c2.js";
import "./useDropdown.086619d7.js";
import "./useViaPlaceholderError.be9c33a4.js";
import "./VAvatar.879e77ac.js";
import "./VDropdown.5214d40f.js";
import "./VIcon.85cce7bc.js";
import "./activePanelState.9015e2f2.js";
import "./fastpizza.70124fcb.js";
import "./25.ca54486f.js";
import "./TaskPanel.15619fee.js";
import "./VTag.ff081b8f.js";
import "./VMessage.2ad1e7cc.js";
import "./VTabs.2e6d271f.js";
import "./VModal.d9bd4cb5.js";
import "./navbarLayoutState.822f8a9f.js";
import "./video.6a901793.js";
import "./SearchPanel.8d96f71b.js";
import "./VIconBox.e1985867.js";
import "./VBlock.47e0c633.js";
import "./UserPopoverContent.8933a73e.js";
import "./userPopovers.e00e1803.js";
import "./ToolbarNotification.0ddce444.js";
import "./12.16c4b7ba.js";
import "./13.d1ef5906.js";
import "./Toolbar.278fa677.js";
var components_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      const _component_SidebarLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_SidebarLayout, {
        theme: unref(sidebarTheme),
        "open-on-mounted": "",
        "default-sidebar": "components"
      }, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "translate-page-y",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
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
