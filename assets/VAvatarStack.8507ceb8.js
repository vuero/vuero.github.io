import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, G as Fragment, J as renderList, N as createBlock, n as normalizeClass, e as createBaseVNode, E as toDisplayString, D as createCommentVNode } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "avatar-stack" };
const _hoisted_2 = { class: "avatar is-more" };
const _hoisted_3 = { class: "inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    limit: { type: Number, required: false, default: 5 },
    size: { type: String, required: false, default: void 0 },
    avatars: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.avatars.slice(0, props.limit), (avatar, index) => {
            return openBlock(), createBlock(_component_VAvatar, {
              key: index,
              size: props.size,
              picture: avatar.picture,
              initials: avatar.initials,
              color: avatar.color
            }, null, 8, ["size", "picture", "initials", "color"]);
          }), 128)),
          __props.avatars.length > props.limit ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["v-avatar", [__props.size && "is-" + props.size]])
          }, [
            createBaseVNode("span", _hoisted_2, [
              createBaseVNode("span", _hoisted_3, [
                createBaseVNode("span", null, "+" + toDisplayString(__props.avatars.length - props.limit), 1)
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
