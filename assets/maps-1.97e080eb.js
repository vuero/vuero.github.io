import { _ as _sfc_main$1 } from "./MapsDashboard.1e29bbb8.js";
import { d as defineComponent, K as useHead, o as openBlock, N as createBlock, x as withCtx, v as createVNode, t as unref, a3 as resolveDynamicComponent } from "./vendor.9ec557a4.js";
import { p as pageTitle, a as navbarLayoutTheme, b as navbarLayoutComponent } from "./navbarLayoutState.822f8a9f.js";
import "./VAvatar.879e77ac.js";
import "./useViaPlaceholderError.be9c33a4.js";
import "./VBlock.47e0c633.js";
import "./index.4d6c8e1a.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    pageTitle.value = "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06CC\u06A9";
    useHead({
      title: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06CC\u06A9 - Navbar - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_MapsDashboard = _sfc_main$1;
      return openBlock(), createBlock(resolveDynamicComponent(unref(navbarLayoutComponent)), {
        theme: unref(navbarLayoutTheme),
        nowrap: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_MapsDashboard)
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
});
export { _sfc_main as default };
