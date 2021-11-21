import { d as defineComponent, a as useRouter, ab as onMounted, o as openBlock, b as createElementBlock } from "./vendor.9ec557a4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    onMounted(() => {
      router.push({
        name: "navbar-dashboards"
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
export { _sfc_main as default };
