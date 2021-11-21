import { _ as _sfc_main$3 } from "./VIconBox.e1985867.js";
import { _ as _sfc_main$4 } from "./VAvatarStack.8507ceb8.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, G as Fragment, J as renderList, v as createVNode, x as withCtx, e as createBaseVNode, E as toDisplayString, D as createCommentVNode, N as createBlock, F as renderSlot, n as normalizeClass } from "./vendor.9ec557a4.js";
import { _ as __unplugin_components_0$1 } from "./VDropdown.5214d40f.js";
import { _ as _export_sfc } from "./index.4d6c8e1a.js";
const _hoisted_1$2 = ["data-icon"];
const _hoisted_2$2 = { class: "flex-meta is-light" };
const _hoisted_3$2 = { href: "#" };
const _hoisted_4$1 = {
  key: 0,
  class: "flex-end"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    topics: { type: Array, required: false, default: () => [] },
    rounded: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$3;
      const _component_VAvatarStack = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.topics, (topic) => {
          return openBlock(), createElementBlock("div", {
            key: topic.id,
            class: "inner-list-item media-flex-center"
          }, [
            createVNode(_component_VIconBox, {
              rounded: props.rounded,
              color: topic.color
            }, {
              default: withCtx(() => [
                createBaseVNode("i", {
                  "aria-hidden": "true",
                  class: "iconify",
                  "data-icon": topic.icon
                }, null, 8, _hoisted_1$2)
              ]),
              _: 2
            }, 1032, ["rounded", "color"]),
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("a", _hoisted_3$2, toDisplayString(topic.name), 1),
              createBaseVNode("span", null, toDisplayString(topic.category), 1)
            ]),
            topic.users ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
              createVNode(_component_VAvatarStack, {
                avatars: topic.users,
                size: "small",
                limit: 3
              }, null, 8, ["avatars"])
            ])) : createCommentVNode("", true)
          ]);
        }), 128))
      ]);
    };
  }
});
const _sfc_main$1 = {};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-reload"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0645\u062C\u062F\u062F"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0645\u062C\u062F\u062F \u0627\u0628\u0632\u0627\u0631\u06A9")
  ])
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cogs"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC \u0627\u0628\u0632\u0627\u0631\u06A9")
  ])
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cog"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0628\u0632\u0627\u0631\u06A9")
  ])
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-trash-can-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0630\u0641"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0630\u0641 \u0627\u0632 \u0635\u0641\u062D\u0647")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = __unplugin_components_0$1;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    dots: "",
    right: "",
    spaced: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1,
      _hoisted_3$1,
      _hoisted_4,
      _hoisted_5
    ]),
    _: 1
  });
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "widget-head" };
const _hoisted_2 = { class: "dark-inverted" };
const _hoisted_3 = { class: "inner-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "List Widget" },
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_ListWidgetMainDropdown = __unplugin_components_0;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["list-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h3", _hoisted_2, toDisplayString(props.title), 1),
          createVNode(_component_ListWidgetMainDropdown)
        ]),
        createBaseVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
export { _sfc_main$2 as _, _sfc_main as a };
