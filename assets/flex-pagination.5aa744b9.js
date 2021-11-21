import { _ as __unplugin_components_0, a as _sfc_main$1 } from "./DocumentationItem.6b7c9a35.js";
import { o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, B as createTextVNode, d as defineComponent, ak as useRoute, h as computed, K as useHead, b as createElementBlock, v as createVNode, t as unref } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$2 } from "./VFlexPagination.440ca280.js";
import { p as pageTitle } from "./sidebarLayoutState.883cc242.js";
import "./VIcon.85cce7bc.js";
import "./index.4d6c8e1a.js";
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vflexpagination",
  tabindex: "-1"
}, "VFlexPagination", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vuero provides a custom pagination component called "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VFlexPagination />"),
  /* @__PURE__ */ createTextVNode(". \u0628\u0631\u0627\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u062D\u0648\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0646\u0645\u0648\u0646\u0647 \u06A9\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F.")
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
  /* @__PURE__ */ createBaseVNode("pre", null, [
    /* @__PURE__ */ createBaseVNode("code", null, [
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "setup"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "lang"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("ts"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--script" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--language-javascript" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "import"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode(" useRoute "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue-router'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" route "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "useRoute"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" currentPage "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "computed"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "=>"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "try"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(" Number"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "parseInt"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("route"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("query"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("page "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "as"),
          /* @__PURE__ */ createTextVNode(" string"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "||"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "catch"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "return"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("script")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VFlexPagination")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":item-per-page"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("8"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":total-items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("512"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":current-page"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("currentPage"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":max-links-displayed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("5"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("template")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers-wrapper" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "2"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "3"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "4"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "5"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "6"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "7"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "8"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "9"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "10"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "11"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "12"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "13"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "14"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "15"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "16"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "17"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "18"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "19"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "20"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$1(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_0;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$2
    ]),
    default: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$1 = {};
const data$1 = () => ({ frontmatter: __matter$1 });
const __script$1 = { render: render$1, data: data$1 };
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "%D9%88%DB%8C%DA%98%DA%AF%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C-(props)-vflexpagination",
  tabindex: "-1"
}, "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC (Props) VFlexPagination", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u0647\u0645\u0647\u200C\u06CC \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0628\u0631\u0627\u06CC \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VFlexPagination />"),
  /* @__PURE__ */ createTextVNode(" \u0627\u06CC\u0646\u062C\u0627 \u0622\u0648\u0631\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F:")
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("table", null, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627 (Props)"),
      /* @__PURE__ */ createBaseVNode("th", null, "\u067E\u06CC\u0634\u0641\u0631\u0636"),
      /* @__PURE__ */ createBaseVNode("th", null, "\u0646\u0648\u0639 \u062F\u0627\u062F\u0647")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("itemPerPage"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("strong", null, "required")
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "number")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createTextVNode("totalItems"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("strong", null, "required")
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "number")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "currentPage"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-number" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "1")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "number")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "maxLinksDisplayed"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-number" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "5")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "number")
    ])
  ])
], -1);
function render(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_0;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1,
      _hoisted_3$1
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter = { "disable_code": true };
const data = () => ({ frontmatter: __matter });
const __script = { render, data };
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = { class: "mt-4 mb-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const currentPage = computed(() => {
      try {
        return Number.parseInt(route.query.page) || 1;
      } catch {
      }
      return 1;
    });
    pageTitle.value = "VFlexPagination";
    useHead({
      title: "VFlexPagination - \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_VFlexPaginationBaseDocumentation = __script$1;
      const _component_VFlexPagination = _sfc_main$2;
      const _component_VFlexPaginationPropsDocumentation = __script;
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
              label: "VFlexPagination",
              to: { name: "components-flex-pagination" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VFlexPaginationBaseDocumentation),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VFlexPagination, {
                "item-per-page": 8,
                "total-items": 512,
                "current-page": unref(currentPage)
              }, null, 8, ["current-page"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VFlexPagination, {
                "item-per-page": 8,
                "total-items": 512,
                "current-page": unref(currentPage),
                "max-links-displayed": 6
              }, null, 8, ["current-page"])
            ]),
            createVNode(_component_VFlexPaginationPropsDocumentation)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
