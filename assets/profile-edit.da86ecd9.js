import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$2 } from "./VBlock.47e0c633.js";
import { q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, _ as Transition, N as createBlock, a3 as resolveDynamicComponent } from "./vendor.9ec557a4.js";
import { _ as _export_sfc } from "./index.4d6c8e1a.js";
import "./useViaPlaceholderError.be9c33a4.js";
var profileEdit_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "account-box is-navigation" };
const _hoisted_6 = { class: "account-menu" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user-alt"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, "\u0639\u0645\u0648\u0645\u06CC", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-left"
  })
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-crown-alt"
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u062C\u0631\u0628\u06CC\u0627\u062A", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-left"
  })
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-quill"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-left"
  })
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cog"
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-left"
  })
], -1);
const _hoisted_19 = { class: "column is-8" };
function _sfc_render(_ctx, _cache) {
  const _component_VAvatar = _sfc_main$1;
  const _component_VBlock = _sfc_main$2;
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VBlock, {
              title: "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
              subtitle: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
              center: ""
            }, {
              icon: withCtx(() => [
                createVNode(_component_VAvatar, {
                  size: "large",
                  picture: "/images/avatars/svg/vuero-1.svg",
                  badge: "/images/icons/flags/united-states-of-america.svg"
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_7,
                  _hoisted_8,
                  _hoisted_9
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit-experience" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_10,
                  _hoisted_11,
                  _hoisted_12
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit-skills" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_13,
                  _hoisted_14,
                  _hoisted_15
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "sidebar-layouts-profile-edit-settings" },
                class: "account-menu-item"
              }, {
                default: withCtx(() => [
                  _hoisted_16,
                  _hoisted_17,
                  _hoisted_18
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_19, [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "translate-page-y",
                mode: "in-out"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
var profileEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { profileEdit as default };
