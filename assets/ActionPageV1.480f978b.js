import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$2 } from "./UserPopoverContent.8933a73e.js";
import { b as _sfc_main$3, u as useNotyf } from "./index.4d6c8e1a.js";
import { d as defineComponent, a as useRouter, r as ref, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, B as createTextVNode } from "./vendor.9ec557a4.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
var ActionPageV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "action-page-wrapper action-page-v1" };
const _hoisted_2 = { class: "wrapper-inner" };
const _hoisted_3 = { class: "action-box" };
const _hoisted_4 = { class: "box-content" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, [
  /* @__PURE__ */ createTextVNode(" \u062C\u06CC\u0633\u0648\u0646 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0639\u0648\u062A \u06A9\u0631\u062F \u0628\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u06CC "),
  /* @__PURE__ */ createBaseVNode("span", { class: "is-dark-primary" }, "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u062F\u0627\u0631\u06CC"),
  /* @__PURE__ */ createTextVNode(" . ")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "sender-message is-dark-card-bordered is-dark-bg-4" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "\u067E\u06CC\u063A\u0627\u0645 \u0627\u0632 \u0637\u0631\u0641 \u062C\u06CC\u0633\u0648\u0646"),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0633\u0644\u0627\u0645 \u062C\u0645\u0627\u0644 \u060C \u0648\u0627\u0642\u0639\u0627\u064B \u0639\u0627\u0644\u06CC \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F \u0627\u06AF\u0631 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u062F. \u0648\u0638\u0627\u06CC\u0641 \u0632\u06CC\u0627\u062F\u06CC \u0631\u0648\u0632\u0627\u0646\u0647 \u0638\u0627\u0647\u0631 \u0645\u06CC \u0634\u0648\u062F \u0648 \u0645\u0646 \u0627\u062D\u0633\u0627\u0633 \u0645\u06CC \u06A9\u0646\u0645 \u062A\u06CC\u0645 \u06A9\u0645\u06CC \u062A\u062D\u062A \u0641\u0634\u0627\u0631 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0627\u0633\u062A. \u062E\u0648\u0634\u062D\u0627\u0644 \u0645\u06CC \u0634\u0648\u06CC\u0645 \u0634\u0645\u0627 \u0631\u0627 \u0641\u0639\u0627\u0644\u200C\u062A\u0631 \u0628\u0628\u06CC\u0646\u06CC\u0645. ")
], -1);
const _hoisted_7 = { class: "people-wrap" };
const _hoisted_8 = { class: "people" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "people-text" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u0648 \u06F5 \u0646\u0641\u0631 \u062F\u06CC\u06AF\u0631 \u0639\u0636\u0648 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0647\u0633\u062A\u0646\u062F")
], -1);
const _hoisted_10 = { class: "buttons" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u0639\u062F\u0645 \u067E\u0630\u06CC\u0631\u0634");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" \u067E\u0630\u06CC\u0631\u0634 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notyf = useNotyf();
    const router = useRouter();
    const isLoading = ref(false);
    const accept = async () => {
      isLoading.value = true;
      notyf.success("Invitation for \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u062F\u0627\u0631\u06CC accepted");
      await sleep();
      router.push({
        name: "sidebar-dashboards-banking-1"
      });
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_UserPopoverContent = _sfc_main$2;
      const _component_tippy = resolveComponent("tippy");
      const _component_VButton = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VAvatar, {
                size: "big",
                picture: "/demo/avatars/16.jpg",
                badge: "/demo/photos/apps/9.png"
              }),
              _hoisted_5,
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "bottom"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_UserPopoverContent, {
                        user: unref(popovers).user21
                      }, null, 8, ["user"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        picture: "/demo/avatars/21.jpg"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "bottom"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_UserPopoverContent, {
                        user: unref(popovers).user120
                      }, null, 8, ["user"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        color: "h-purple",
                        initials: "SC"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "bottom"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_UserPopoverContent, {
                        user: unref(popovers).user39
                      }, null, 8, ["user"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        picture: "/demo/avatars/39.jpg"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_9
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VButton, { "dark-outlined": "" }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  loading: isLoading.value,
                  raised: "",
                  onClick: accept
                }, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
