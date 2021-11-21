import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, D as createCommentVNode, n as normalizeClass, E as toDisplayString, C as createStaticVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "v-popover-profile has-loader" };
const _hoisted_2 = { class: "profile-popover-block" };
const _hoisted_3 = { class: "profile-popover-wrapper" };
const _hoisted_4 = {
  key: 0,
  class: "popover-avatar"
};
const _hoisted_5 = ["src"];
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "fake-avatar" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "popover-meta" };
const _hoisted_10 = { class: "user-meta" };
const _hoisted_11 = { class: "username" };
const _hoisted_12 = { class: "location" };
const _hoisted_13 = { class: "job-title mb-1" };
const _hoisted_14 = { class: "bio" };
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<div class="popover-actions"><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:user"></i></a></div>', 1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    user: { type: null, required: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            props.user.avatar ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createBaseVNode("img", {
                class: "avatar",
                src: props.user.avatar,
                alt: ""
              }, null, 8, _hoisted_5),
              props.user.badge ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "badge",
                src: props.user.badge,
                alt: ""
              }, null, 8, _hoisted_6)) : createCommentVNode("", true)
            ])) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(["popover-fake-avatar", [props.user.color && `is-${props.user.color}`]])
            }, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("span", null, toDisplayString(props.user.initials), 1)
              ]),
              props.user.badge ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "badge",
                src: props.user.badge,
                alt: ""
              }, null, 8, _hoisted_8)) : createCommentVNode("", true)
            ], 2)),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("span", _hoisted_10, [
                createBaseVNode("span", _hoisted_11, toDisplayString(props.user.username), 1),
                createBaseVNode("span", _hoisted_12, toDisplayString(props.user.location), 1)
              ]),
              createBaseVNode("span", _hoisted_13, toDisplayString(props.user.position), 1),
              createBaseVNode("span", _hoisted_14, toDisplayString(props.user.bio), 1)
            ])
          ]),
          _hoisted_15
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
