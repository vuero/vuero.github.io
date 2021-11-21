import { a as _sfc_main$1 } from "./DocumentationItem.6b7c9a35.js";
import { _ as __script } from "./v-flex-table-base-documentation.6cc779ee.js";
import { _ as _sfc_main$2 } from "./VFlexTableRowBase.b9233063.js";
import { a as flexRowsBasic, _ as _sfc_main$3 } from "./table.cf4b29e1.js";
import { _ as _sfc_main$4 } from "./VFlexPagination.440ca280.js";
import { d as defineComponent, K as useHead, o as openBlock, b as createElementBlock, v as createVNode, e as createBaseVNode, x as withCtx, t as unref } from "./vendor.9ec557a4.js";
import { p as pageTitle } from "./sidebarLayoutState.883cc242.js";
import "./VIcon.85cce7bc.js";
import "./index.4d6c8e1a.js";
import "./VAvatarStack.8507ceb8.js";
import "./VAvatar.879e77ac.js";
import "./useViaPlaceholderError.be9c33a4.js";
import "./FlexTableDropdown.4f5be7fe.js";
import "./VDropdown.5214d40f.js";
import "./useDropdown.086619d7.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-table-header" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0634\u0631\u06A9\u062A"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u0648\u0639"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0648\u0632\u0647 \u06A9\u0627\u0631\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062E\u0627\u0637\u0628\u06CC\u0646"),
  /* @__PURE__ */ createBaseVNode("span", { class: "cell-end" }, "\u0627\u0642\u062F\u0627\u0645\u0627\u062A")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    pageTitle.value = "VFlexTable";
    useHead({
      title: "VFlexTable - \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VFlexTableBaseDocumentation = __script;
      const _component_VFlexTableRowBase = _sfc_main$2;
      const _component_VFlexTable = _sfc_main$3;
      const _component_VFlexPagination = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VBreadcrumb, {
          "with-icons": "",
          separator: "bullet",
          items: [
            {
              label: "\u0648\u06CC\u0648\u0626\u0650\u0631\u0648",
              hideLabel: true,
              icon: "feather:home",
              to: { name: "index" }
            },
            {
              label: "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627",
              to: { name: "components" }
            },
            {
              label: "VFlexTable",
              to: { name: "components-flex-table" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VFlexTableBaseDocumentation),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VFlexTable, null, {
                header: withCtx(() => [
                  _hoisted_5
                ]),
                body: withCtx(() => [
                  createVNode(_component_VFlexTableRowBase, { rows: unref(flexRowsBasic) }, null, 8, ["rows"])
                ]),
                _: 1
              }),
              createVNode(_component_VFlexPagination, {
                "item-per-page": 10,
                "total-items": 873,
                "current-page": 42,
                "max-links-displayed": 5
              })
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
