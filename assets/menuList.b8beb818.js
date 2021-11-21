import { _ as _sfc_main$1 } from "./VIconWrap.809aa90c.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, G as Fragment, J as renderList, v as createVNode, e as createBaseVNode, E as toDisplayString } from "./vendor.9ec557a4.js";
const _hoisted_1 = { class: "icon-list" };
const _hoisted_2 = { class: "item-meta" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    list: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VIconWrap = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.list, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: "icon-list-item"
          }, [
            createVNode(_component_VIconWrap, {
              icon: item.icon
            }, null, 8, ["icon"]),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("span", null, toDisplayString(item.label), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const iconList = [
  {
    id: 0,
    icon: "feather:circle",
    label: "\u062C\u0647\u0627\u0646\u06CC"
  },
  {
    id: 1,
    icon: "feather:briefcase",
    label: "\u062A\u062C\u0627\u0631\u06CC"
  },
  {
    id: 2,
    icon: "feather:play",
    label: "\u0633\u0631\u06AF\u0631\u0645\u06CC"
  },
  {
    id: 3,
    icon: "feather:feather",
    label: "\u0637\u0631\u0627\u062D\u06CC"
  },
  {
    id: 4,
    icon: "feather:file",
    label: "\u0645\u0633\u062A\u0646\u062F\u0627\u062A"
  }
];
export { _sfc_main as _, iconList as i };
