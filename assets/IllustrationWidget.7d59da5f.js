import { d as defineComponent, o as openBlock, b as createElementBlock, G as Fragment, J as renderList, e as createBaseVNode, n as normalizeClass, E as toDisplayString, D as createCommentVNode } from "./vendor.9ec557a4.js";
const _hoisted_1$1 = { class: "channels" };
const _hoisted_2$1 = { class: "channel-icon" };
const _hoisted_3$1 = { class: "channel-stats" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    channels: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.channels, (channel) => {
          return openBlock(), createElementBlock("div", {
            key: channel.id,
            class: "channel"
          }, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("i", {
                "aria-hidden": "true",
                class: normalizeClass(channel.icon)
              }, null, 2)
            ]),
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("span", null, toDisplayString(channel.count), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1 = { class: "img-container" };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "Illustration Widget" },
    text: { type: String, required: false, default: "Lorem ipsum sit dolor amet is a dummy text" },
    picture: { type: String, required: false, default: void 0 },
    badgeLeft: { type: String, required: false, default: void 0 },
    badgeRight: { type: String, required: false, default: void 0 },
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget illustration-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("img", {
            class: "main",
            src: props.picture,
            alt: ""
          }, null, 8, _hoisted_2),
          props.badgeLeft ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "badge badge-1",
            src: props.badgeLeft,
            alt: ""
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          props.badgeRight ? (openBlock(), createElementBlock("img", {
            key: 1,
            class: "badge badge-2",
            src: props.badgeRight,
            alt: ""
          }, null, 8, _hoisted_4)) : createCommentVNode("", true)
        ]),
        createBaseVNode("h3", null, toDisplayString(props.title), 1),
        createBaseVNode("p", null, toDisplayString(props.text), 1)
      ], 2);
    };
  }
});
export { _sfc_main$1 as _, _sfc_main as a };
