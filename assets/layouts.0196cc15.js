import { d as defineComponent, ak as useRoute, q as resolveComponent, o as openBlock, N as createBlock, x as withCtx, v as createVNode, _ as Transition, a3 as resolveDynamicComponent, t as unref } from "./vendor.9ec557a4.js";
import { a as navbarLayoutTheme, b as navbarLayoutComponent } from "./navbarLayoutState.822f8a9f.js";
import "./index.4d6c8e1a.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(resolveDynamicComponent(unref(navbarLayoutComponent)), { theme: unref(navbarLayoutTheme) }, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "translate-page-x",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: unref(route).fullPath
                  }))
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
