import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, E as toDisplayString, n as normalizeClass } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "widget-content" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "right" };
const _hoisted_4 = { class: "company" };
const _hoisted_5 = { class: "contact-info" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:phone"
}, null, -1);
const _hoisted_8 = { class: "email" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    picture: { type: String, required: false, default: "https://via.placeholder.com/150x150" },
    username: { type: String, required: false, default: "\u062C\u0627\u0646" },
    email: { type: String, required: false, default: "john@gmail.com" },
    company: { type: String, required: false, default: "Acme Inc." },
    position: { type: String, required: false, default: "Developer" },
    location: { type: String, required: false, default: "\u0627\u0635\u0641\u0647\u0627\u0646" },
    phone: { type: String, required: false, default: "+1 555 5554" },
    straight: { type: Boolean, required: false },
    reversed: { type: Boolean, required: false },
    squared: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget contact-widget", [props.straight && "is-straight", props.reversed && "is-reversed"]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VAvatar, {
              size: "medium",
              picture: props.picture,
              squared: props.squared
            }, null, 8, ["picture", "squared"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h3", null, toDisplayString(props.username), 1),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("span", null, toDisplayString(props.company), 1),
              createBaseVNode("p", null, toDisplayString(props.position), 1)
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("span", null, [
                _hoisted_6,
                createBaseVNode("span", null, toDisplayString(props.location), 1)
              ]),
              createBaseVNode("span", null, [
                _hoisted_7,
                createBaseVNode("span", null, toDisplayString(props.phone), 1)
              ])
            ])
          ])
        ]),
        createBaseVNode("p", _hoisted_8, toDisplayString(props.email), 1)
      ], 2);
    };
  }
});
export { _sfc_main as _ };
