import { d as defineComponent, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, G as Fragment, J as renderList, N as createBlock, x as withCtx, n as normalizeClass, D as createCommentVNode, E as toDisplayString, r as ref, F as renderSlot } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$2 } from "./VIcon.85cce7bc.js";
import { _ as _export_sfc } from "./index.4d6c8e1a.js";
const _hoisted_1$1 = ["aria-current"];
const _hoisted_2$1 = ["data-icon"];
const _hoisted_3$1 = ["content"];
const _hoisted_4$1 = {
  key: 2,
  itemprop: "name"
};
const _hoisted_5$1 = ["content"];
const _hoisted_6$1 = ["href"];
const _hoisted_7$1 = ["data-icon"];
const _hoisted_8$1 = ["content"];
const _hoisted_9 = {
  key: 2,
  itemprop: "name"
};
const _hoisted_10 = ["content"];
const _hoisted_11 = {
  key: 2,
  class: "breadcrumb-item"
};
const _hoisted_12 = ["data-icon"];
const _hoisted_13 = ["content"];
const _hoisted_14 = {
  key: 2,
  itemprop: "name"
};
const _hoisted_15 = ["content"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    items: { type: Array, required: true },
    separator: { type: String, required: false, default: void 0 },
    align: { type: String, required: false, default: void 0 },
    withIcons: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("nav", {
        role: "navigation",
        class: normalizeClass(["breadcrumb", [
          `has-${props.separator}-separator`,
          props.align && `is-${props.align}`
        ]]),
        "aria-label": "breadcrumbs",
        itemscope: "",
        itemtype: "https://schema.org/BreadcrumbList"
      }, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              "aria-current": key === __props.items.length - 1 ? "page" : void 0,
              itemprop: "itemListElement",
              itemscope: "",
              itemtype: "https://schema.org/ListItem"
            }, [
              item.to ? (openBlock(), createBlock(_component_RouterLink, {
                key: 0,
                class: "breadcrumb-item",
                itemprop: "item",
                to: item.to
              }, {
                default: withCtx(() => [
                  props.withIcons && !!item.icon ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(["icon is-small", [
                      item.hideLabel && props.withIcons && !!item.icon && "is-solo"
                    ]])
                  }, [
                    createBaseVNode("i", {
                      "aria-hidden": "true",
                      class: "iconify",
                      "data-icon": item.icon
                    }, null, 8, _hoisted_2$1)
                  ], 2)) : createCommentVNode("", true),
                  item.hideLabel && props.withIcons && !!item.icon ? (openBlock(), createElementBlock("meta", {
                    key: 1,
                    itemprop: "name",
                    content: item.label
                  }, null, 8, _hoisted_3$1)) : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(item.label), 1)),
                  createBaseVNode("meta", {
                    itemprop: "position",
                    content: `${key + 1}`
                  }, null, 8, _hoisted_5$1)
                ]),
                _: 2
              }, 1032, ["to"])) : item.link ? (openBlock(), createElementBlock("a", {
                key: 1,
                class: "breadcrumb-item",
                itemprop: "item",
                href: item.link
              }, [
                props.withIcons && !!item.icon ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(["icon is-small", [
                    item.hideLabel && props.withIcons && !!item.icon && "is-solo"
                  ]])
                }, [
                  createBaseVNode("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": item.icon
                  }, null, 8, _hoisted_7$1)
                ], 2)) : createCommentVNode("", true),
                item.hideLabel && props.withIcons && !!item.icon ? (openBlock(), createElementBlock("meta", {
                  key: 1,
                  itemprop: "name",
                  content: item.label
                }, null, 8, _hoisted_8$1)) : (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(item.label), 1)),
                createBaseVNode("meta", {
                  itemprop: "position",
                  content: `${key + 1}`
                }, null, 8, _hoisted_10)
              ], 8, _hoisted_6$1)) : (openBlock(), createElementBlock("span", _hoisted_11, [
                props.withIcons && !!item.icon ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(["icon is-small", [
                    item.hideLabel && props.withIcons && !!item.icon && "is-solo"
                  ]])
                }, [
                  createBaseVNode("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": item.icon
                  }, null, 8, _hoisted_12)
                ], 2)) : createCommentVNode("", true),
                item.hideLabel && props.withIcons && item.icon ? (openBlock(), createElementBlock("meta", {
                  key: 1,
                  itemprop: "name",
                  content: item.label
                }, null, 8, _hoisted_13)) : (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(item.label), 1)),
                createBaseVNode("meta", {
                  itemprop: "position",
                  content: `${key + 1}`
                }, null, 8, _hoisted_15)
              ]))
            ], 8, _hoisted_1$1);
          }), 128))
        ])
      ], 2);
    };
  }
});
var DocumentationItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "demo-card" };
const _hoisted_2 = { class: "demo-title" };
const _hoisted_3 = { class: "content" };
const _hoisted_4 = {
  key: 0,
  class: "card-inner"
};
const _hoisted_5 = {
  key: 0,
  class: "demo-example"
};
const _hoisted_6 = {
  key: 1,
  class: "demo-code-wrapper"
};
const _hoisted_7 = { class: "demo-code" };
const _hoisted_8 = {
  key: 0,
  class: "demo-state"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    componentData: { type: Array, required: false, default: () => [] },
    frontmatter: { type: null, required: false, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const displayCode = ref(false);
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          !props.frontmatter.disable_code ? (openBlock(), createElementBlock("a", {
            key: 0,
            "aria-label": "Toggle code example",
            class: normalizeClass(["code-trigger", [displayCode.value && "is-active"]]),
            onClick: _cache[0] || (_cache[0] = ($event) => displayCode.value = !displayCode.value)
          }, [
            !displayCode.value ? (openBlock(), createBlock(_component_VIcon, {
              key: 0,
              style: { "height": "16px" },
              icon: "feather:code"
            })) : (openBlock(), createBlock(_component_VIcon, {
              key: 1,
              style: { "height": "16px" },
              icon: "feather:x"
            }))
          ], 2)) : createCommentVNode("", true)
        ]),
        !props.frontmatter.disable_code || !props.frontmatter.disable_example ? (openBlock(), createElementBlock("div", _hoisted_4, [
          !props.frontmatter.disable_code ? (openBlock(), createElementBlock("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "example", {}, void 0, true)
          ])) : createCommentVNode("", true),
          !props.frontmatter.disable_code && displayCode.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              renderSlot(_ctx.$slots, "code", {}, void 0, true)
            ]),
            props.frontmatter.state ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createBaseVNode("pre", null, toDisplayString(props.frontmatter.state), 1)
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e645ac4"]]);
export { __unplugin_components_0 as _, _sfc_main$1 as a };
