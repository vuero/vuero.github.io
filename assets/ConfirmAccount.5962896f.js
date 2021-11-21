import { b as _sfc_main$1, u as useNotyf } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VLoader.b9c7fe8c.js";
import { d as defineComponent, a as useRouter, r as ref, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, B as createTextVNode } from "./vendor.9ec557a4.js";
import { s as sleep } from "./sleep.2a252ff4.js";
var _imports_0 = "/assets/launch.7b56da61.svg";
var _imports_1 = "/assets/launch-dark.2b59c41f.svg";
var ConfirmAccount_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "confirm-account-wrapper" };
const _hoisted_2 = { class: "wrapper-inner" };
const _hoisted_3 = { class: "action-box" };
const _hoisted_4 = { class: "box-content" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0644\u0637\u0641\u0627\u064B \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u062A\u0623\u06CC\u06CC\u062F \u06A9\u0646\u06CC\u062F", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, " \u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644 \u060C \u0648\u0627\u0642\u0639\u0627\u064B \u0639\u0627\u0644\u06CC \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F \u0627\u06AF\u0631 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u062F. \u0648\u0638\u0627\u06CC\u0641 \u0632\u06CC\u0627\u062F\u06CC \u0631\u0648\u0632\u0627\u0646\u0647 \u0638\u0627\u0647\u0631 \u0645\u06CC \u0634\u0648\u062F \u0648 \u0645\u0646 \u0627\u062D\u0633\u0627\u0633 \u0645\u06CC \u06A9\u0646\u0645 \u062A\u06CC\u0645 \u06A9\u0645\u06CC \u062A\u062D\u062A \u0641\u0634\u0627\u0631 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0627\u0633\u062A. \u062E\u0648\u0634\u062D\u0627\u0644 \u0645\u06CC \u0634\u0648\u06CC\u0645 \u0634\u0645\u0627 \u0631\u0627 \u0641\u0639\u0627\u0644\u200C\u062A\u0631 \u0628\u0628\u06CC\u0646\u06CC\u0645. ", -1);
const _hoisted_9 = { class: "buttons" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u062A\u0627\u0626\u06CC\u062F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const router = useRouter();
    const isLoading = ref(false);
    const confirm = async () => {
      isLoading.value = true;
      notyf.success("\u0627\u06A9\u0627\u0646\u062A \u0634\u0645\u0627 \u062A\u0627\u0626\u06CC\u062F \u0634\u062F \u062C\u0645\u0627\u0644.");
      await sleep();
      router.push({
        name: "sidebar-dashboards"
      });
      await sleep();
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VLoader = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VLoader, { active: isLoading.value }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  _hoisted_5,
                  _hoisted_6,
                  _hoisted_7,
                  _hoisted_8,
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: "",
                      onClick: confirm
                    }, {
                      default: withCtx(() => [
                        _hoisted_10
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              _: 1
            }, 8, ["active"])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
