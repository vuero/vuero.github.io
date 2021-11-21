import { _ as __unplugin_components_0, a as _sfc_main$1 } from "./DocumentationItem.6b7c9a35.js";
import { o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, B as createTextVNode, a5 as reactive, d as defineComponent, r as ref, ab as onMounted, au as onBeforeUnmount, K as useHead, b as createElementBlock, v as createVNode, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, D as createCommentVNode } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$2 } from "./VSimpleDatatables.bde9b4a7.js";
import { _ as _sfc_main$3 } from "./VTag.ff081b8f.js";
import { u as useMarkdownToc, _ as __unplugin_components_10 } from "./useMarkdownToc.e5a9047c.js";
import { p as pageTitle } from "./sidebarLayoutState.883cc242.js";
import "./VIcon.85cce7bc.js";
import "./index.4d6c8e1a.js";
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "basic-datatable",
  tabindex: "-1"
}, "Basic Datatable", -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Because Vue 3 is still the new thing, there are a very few datatable plugins available. Therefore, we wrote a custom Vue wrapper for the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/fiduswriter/Simple-DataTables" }, "Simple Datatables"),
  /* @__PURE__ */ createTextVNode(" plugin. The example below shows a text datatable. Check the code for more details.")
], -1);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" options "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  searchable"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "false"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  sortable"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "false"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  perPageSelect"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--boolean" }, "false"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    headings"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Name'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Ext.'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'City'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Start Date'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Completion'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Unity Pugh'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "9958"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Curic\xF3'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2005/02/11'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'37%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Theodore Duran'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "8971"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Dhanbad'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'1999/04/07'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'97%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Kylie Bishop'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3147"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Norman'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2005/09/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'63%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Willow Gilliam'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3497"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Amqui'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2009/29/11'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'30%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Blossom Dickerson'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "5018"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Kempten'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2006/11/09'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'17%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Elliott Snyder'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3925"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Enines'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2006/03/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'57%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Castor Pugh'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "9488"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Neath'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/23/12'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'93%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Pearl Carlson'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "6231"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Cobourg'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/31/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'100%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Deirdre Bridges'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1579"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Eberswalde-Finow'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/26/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'44%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
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
          /* @__PURE__ */ createTextVNode("VSimpleDatatables")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":options"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$4(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_0;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$5
    ]),
    default: withCtx(() => [
      _hoisted_1$5,
      _hoisted_2$5
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$4 = {};
const data$4 = () => ({ frontmatter: __matter$4 });
const __script$4 = { render: render$4, data: data$4 };
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "reactive-datatable",
  tabindex: "-1"
}, "Reactive Datatable", -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Because Vue 3 is still the new thing, there are a very few datatable plugins available. Therefore, we wrote a custom Vue wrapper for the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/fiduswriter/Simple-DataTables" }, "Simple Datatables"),
  /* @__PURE__ */ createTextVNode(" plugin. The example below shows a text datatable. Check the code for more details.")
], -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
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
          /* @__PURE__ */ createTextVNode(" reactive "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'vue'"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" options "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "reactive"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    headings"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Name'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Ext.'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'City'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Start Date'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Completion'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Unity Pugh'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "9958"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Curic\xF3'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2005/02/11'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'37%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Theodore Duran'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "8971"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Dhanbad'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'1999/04/07'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'97%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Kylie Bishop'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3147"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Norman'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2005/09/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'63%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Willow Gilliam'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3497"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Amqui'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2009/29/11'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'30%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Blossom Dickerson'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "5018"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Kempten'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2006/11/09'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'17%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Elliott Snyder'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3925"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Enines'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2006/03/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'57%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Castor Pugh'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "9488"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Neath'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/23/12'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'93%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Pearl Carlson'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "6231"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Cobourg'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/31/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'100%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n      "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Deirdre Bridges'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1579"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Eberswalde-Finow'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/26/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'44%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "setInterval"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "=>"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" max "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" optionsReactive"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("length\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" index "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" Math"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "floor"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("Math"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "random"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "*"),
          /* @__PURE__ */ createTextVNode(" max"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" percent "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "parseInt"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("optionsReactive"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
              /* @__PURE__ */ createTextVNode("data"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
              /* @__PURE__ */ createTextVNode("data"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
              /* @__PURE__ */ createTextVNode("index"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "4"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "replace"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "''"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("percent "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "<"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "100"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--comment" }, "// updating the data will refresh the datatable"),
          /* @__PURE__ */ createTextVNode("\n    optionsReactive"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("index"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(" Math"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "floor"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createTextVNode("Math"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--function" }, "random"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "*"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "5000"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n    optionsReactive"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("index"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "4"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-string" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation" }, [
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "${"),
              /* @__PURE__ */ createTextVNode("percent "),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "+"),
              /* @__PURE__ */ createTextVNode(),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1"),
              /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--interpolation-punctuation prism--punctuation" }, "}")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "%"),
            /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--template-punctuation prism--string" }, "`")
          ]),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "400"),
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
          /* @__PURE__ */ createTextVNode("VSimpleDatatables")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":options"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("options"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "autoupdate"),
        /* @__PURE__ */ createTextVNode(),
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "32"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "33"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "34"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "35"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "36"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "37"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "38"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$3(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_0;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$4
    ]),
    default: withCtx(() => [
      _hoisted_1$4,
      _hoisted_2$4
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$3 = {};
const data$3 = () => ({ frontmatter: __matter$3 });
const __script$3 = { render: render$3, data: data$3 };
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "slot-datatable",
  tabindex: "-1"
}, "Slot Datatable", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Because Vue 3 is still the new thing, there are a very few datatable plugins available. Therefore, we wrote a custom Vue wrapper for the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/fiduswriter/Simple-DataTables" }, "Simple Datatables"),
  /* @__PURE__ */ createTextVNode(" plugin. The example below shows a text datatable. Check the code for more details.")
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "const"),
          /* @__PURE__ */ createTextVNode(" data "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Unity Pugh'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "9958"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Curic\xF3'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2005/02/11'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'37%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Theodore Duran'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "8971"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Dhanbad'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'1999/04/07'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'97%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Kylie Bishop'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3147"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Norman'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2005/09/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'63%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Willow Gilliam'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3497"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Amqui'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2009/29/11'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'30%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Blossom Dickerson'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "5018"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Kempten'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2006/11/09'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'17%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Elliott Snyder'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "3925"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Enines'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2006/03/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'57%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Castor Pugh'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "9488"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Neath'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/23/12'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'93%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Pearl Carlson'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "6231"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Cobourg'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/31/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'100%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "["),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Deirdre Bridges'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--number" }, "1579"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'Eberswalde-Finow'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'2014/26/08'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'44%'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "]"),
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
          /* @__PURE__ */ createTextVNode("VSimpleDatatables")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("thead")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("tr")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "scope"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("col"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("Name"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "scope"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("col"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("Ext."),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "scope"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("col"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("City"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "scope"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("col"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "data-format"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("YYYY/MM/DD"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("Start Date"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "scope"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("col"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "data-sort"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("asc"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("Completion"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("th")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("tr")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("thead")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("tbody")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("tr")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "v-for"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("(row, index) in data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":key"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("index"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          {{ row[0] }}\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("strong")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("{{ row[1] }}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("strong")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("{{ row[2] }}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("{{ row[3] }}"),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n          "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VTag")
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row[4] === "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode("100%"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode(" ? "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode("primary"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode(" : "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createTextVNode("light"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":label"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("row[4]"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n          "),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n        "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("td")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n      "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("tr")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("tbody")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("VSimpleDatatables")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
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
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "21"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "22"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "23"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "24"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "25"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "26"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "27"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "28"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "29"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "30"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "31"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "32"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "33"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "34"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "35"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "36"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "37"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "38"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "39"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "40"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "41"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "42"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "43"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "44"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "45"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$2(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_0;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$3
    ]),
    default: withCtx(() => [
      _hoisted_1$3,
      _hoisted_2$3
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter$2 = {};
const data$2 = () => ({ frontmatter: __matter$2 });
const __script$2 = { render: render$2, data: data$2 };
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "advanced-datatable",
  tabindex: "-1"
}, "Advanced datatable", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Because Vue 3 is still the new thing, there are a very few datatable plugins available. Therefore, we wrote a custom Vue wrapper for the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/fiduswriter/Simple-DataTables" }, "Simple Datatables"),
  /* @__PURE__ */ createTextVNode(" plugin. The example below shows an advanced datatable. Check the code for more details.")
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
          /* @__PURE__ */ createTextVNode(" optionsAdvanced "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'/@src/data/v-datatable/advanced-datatable'"),
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
          /* @__PURE__ */ createTextVNode("VSimpleDatatables")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":options"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("optionsAdvanced"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
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
  id: "users-datatable",
  tabindex: "-1"
}, "Users datatable", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Because Vue 3 is still the new thing, there are a very few datatable plugins available. Therefore, we wrote a custom Vue wrapper for the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/fiduswriter/Simple-DataTables" }, "Simple Datatables"),
  /* @__PURE__ */ createTextVNode(" plugin. The example below shows a users datatable. Check the code for more details.")
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-vue line-numbers-mode" }, [
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
          /* @__PURE__ */ createTextVNode(" optionsUsers "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--keyword" }, "from"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'/@src/data/v-datatable/users-datatable'"),
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
          /* @__PURE__ */ createTextVNode("VSimpleDatatables")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":options"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("optionsUsers"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render(_ctx, _cache) {
  const _component_DocumentationItem = __unplugin_components_0;
  return openBlock(), createBlock(_component_DocumentationItem, { frontmatter: _ctx.frontmatter }, {
    code: withCtx(() => [
      _hoisted_3$1
    ]),
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1
    ]),
    _: 1
  }, 8, ["frontmatter"]);
}
const __matter = {};
const data = () => ({ frontmatter: __matter });
const __script = { render, data };
const optionsBase = {
  searchable: false,
  sortable: false,
  perPageSelect: false,
  data: {
    headings: ["\u0646\u0627\u0645", "Ext.", "\u0634\u0647\u0631", "\u0631\u0648\u0632 \u0634\u0631\u0648\u0639", "Completion"],
    data: [
      ["Unity Pugh", 9958, "Curic\xF3", "2005/02/11", "37%"],
      ["Theodore Duran", 8971, "Dhanbad", "1999/04/07", "97%"],
      ["Kylie Bishop", 3147, "Norman", "2005/09/08", "63%"],
      ["Willow Gilliam", 3497, "Amqui", "2009/29/11", "30%"],
      ["Blossom Dickerson", 5018, "Kempten", "2006/11/09", "17%"],
      ["Elliott Snyder", 3925, "Enines", "2006/03/08", "57%"],
      ["Castor Pugh", 9488, "Neath", "2014/23/12", "93%"],
      ["Pearl Carlson", 6231, "Cobourg", "2014/31/08", "100%"],
      ["Deirdre Bridges", 1579, "Eberswalde-Finow", "2014/26/08", "44%"],
      ["Daniel Baldwin", 6095, "Moircy", "2000/11/01", "33%"],
      ["Phelan Kane", 9519, "Germersheim", "1999/16/04", "77%"],
      ["Quentin Salas", 1339, "Los Andes", "2011/26/01", "49%"],
      ["Armand Suarez", 6583, "Funtua", "1999/06/11", "9%"],
      ["Gretchen Rogers", 5393, "Moxhe", "1998/26/10", "24%"],
      ["Harding Thompson", 2824, "Abeokuta", "2008/06/08", "10%"],
      ["Mira Rocha", 4393, "Port Harcourt", "2002/04/10", "14%"],
      ["Drew Phillips", 2931, "Goes", "2011/18/10", "58%"],
      ["Emerald Warner", 6205, "Chiavari", "2002/08/04", "58%"],
      ["Colin Burch", 7457, "Anamur", "2004/02/01", "34%"],
      ["Russell Haynes", 8916, "Frascati", "2015/28/04", "18%"],
      ["Brennan Brooks", 9011, "Olmu\xE9", "2000/18/04", "2%"],
      ["Kane Anthony", 8075, "LaSalle", "2006/21/05", "93%"],
      ["Scarlett Hurst", 1019, "Brampton", "2015/07/01", "94%"],
      ["James Scott", 3008, "Meux", "2007/30/05", "55%"],
      ["Desiree Ferguson", 9054, "Gojra", "2009/15/02", "81%"],
      ["Elaine Bishop", 9160, "Petr\xF3polis", "2008/23/12", "48%"],
      ["Hilda Nelson", 6307, "Posina", "2004/23/05", "76%"],
      ["Evangeline Beasley", 3820, "Caplan", "2009/12/03", "62%"],
      ["Wyatt Riley", 5694, "Cavaion Veronese", "2012/19/02", "67%"],
      ["Wyatt Mccarthy", 3547, "Patan", "2014/23/06", "9%"],
      ["Cairo Rice", 6273, "Ostra Vetere", "2016/27/02", "13%"],
      ["Sylvia Peters", 6829, "Arrah", "2015/03/02", "13%"],
      ["Kasper Craig", 5515, "Firenze", "2015/26/04", "56%"],
      ["Leigh Ruiz", 5112, "Lac Ste. Anne", "2001/09/02", "28%"],
      ["Athena Aguirre", 5741, "Romeral", "2010/24/03", "15%"],
      ["Riley Nunez", 5533, "Sart-Eustache", "2003/26/02", "30%"],
      ["Lois Talley", 9393, "Dorchester", "2014/05/01", "51%"],
      ["Hop Bass", 1024, "Westerlo", "2012/25/09", "85%"],
      ["Kalia Diaz", 9184, "Ichalkaranji", "2013/26/06", "92%"],
      ["Maia Pate", 6682, "Louvain-la-Neuve", "2011/23/04", "50%"],
      ["Macaulay Pruitt", 4457, "Fraser-Fort George", "2015/03/08", "92%"],
      ["Danielle Oconnor", 9464, "Neuwied", "2001/05/10", "17%"],
      ["Kato Carr", 4842, "Faridabad", "2012/11/05", "96%"],
      ["Malachi Mejia", 7133, "Vorst", "2007/25/04", "26%"],
      ["Dominic Carver", 3476, "Pointe-aux-Trembles", "2014/14/03", "71%"],
      ["Paki Santos", 4424, "Cache Creek", "2001/18/11", "82%"],
      ["Ross Hodges", 1862, "Trazegnies", "2010/19/09", "87%"],
      ["Hilda Whitley", 3514, "New Sarepta", "2011/05/07", "94%"],
      ["Roth Cherry", 4006, "Flin Flon", "2008/02/09", "8%"],
      ["Lareina Jones", 8642, "East Linton", "2009/07/08", "21%"],
      ["Joshua Weiss", 2289, "Saint-L\xE9onard", "2010/15/01", "52%"],
      ["Kiona Lowery", 5952, "Inuvik", "2002/17/12", "72%"],
      ["Nina Rush", 7567, "Bo\u2018lhe", "2008/27/01", "6%"],
      ["Palmer Parker", 2e3, "Stade", "2012/24/07", "58%"],
      ["Vielka Olsen", 3745, "Vrasene", "2016/08/01", "70%"],
      ["Meghan Cunningham", 8604, "S\xF6ke", "2007/16/02", "59%"],
      ["Iola Shaw", 6447, "Albany", "2014/05/03", "88%"],
      ["Imelda Cole", 4564, "Haasdonk", "2007/16/11", "79%"],
      ["Jerry Beach", 6801, "Gattatico", "1999/07/07", "36%"],
      ["Garrett Rocha", 3938, "Gavorrano", "2000/06/08", "71%"],
      ["Derek Kerr", 1724, "Gualdo Cattaneo", "2014/21/01", "89%"],
      ["Shad Hudson", 5944, "Salamanca", "2014/10/12", "98%"],
      ["Daryl Ayers", 8276, "Barchi", "2012/12/11", "88%"],
      ["Caleb Livingston", 3094, "Fatehpur", "2014/13/02", "8%"],
      ["Sydney Meyer", 4576, "Neubrandenburg", "2015/06/02", "22%"],
      ["Lani Lawrence", 8501, "Turnhout", "2008/07/05", "16%"],
      ["Allegra Shepherd", 2576, "Meeuwen-Gruitrode", "2004/19/04", "41%"],
      ["Fallon Reyes", 3178, "Monceau-sur-Sambre", "2005/15/02", "16%"],
      ["Karen Whitley", 4357, "Sluis", "2003/02/05", "23%"],
      ["Stewart Stephenson", 5350, "Villa Faraldi", "2003/05/07", "65%"],
      ["Ursula Reynolds", 7544, "Southampton", "1999/16/12", "61%"],
      ["Adrienne Winters", 4425, "Laguna Blanca", "2014/15/09", "24%"],
      ["Francesca Brock", 1337, "Oban", "2000/12/06", "90%"],
      ["Ursa Davenport", 7629, "New Plymouth", "2013/27/06", "37%"],
      ["Mark Brock", 3310, "Veenendaal", "2006/08/09", "41%"],
      ["Dale Rush", 5050, "Chicoutimi", "2000/27/03", "2%"],
      ["Shellie Murphy", 3845, "Marlborough", "2013/13/11", "72%"],
      ["Porter Nicholson", 4539, "Bismil", "2012/22/10", "23%"],
      ["Oliver Huber", 1265, "Hannache", "2002/11/01", "94%"],
      ["Calista Maynard", 3315, "Pozzuolo del Friuli", "2006/23/03", "5%"],
      ["Lois Vargas", 6825, "Cumberland", "1999/25/04", "50%"],
      ["Hermione Dickson", 2785, "Woodstock", "2001/22/03", "2%"],
      ["Dalton Jennings", 5416, "Dudzele", "2015/09/02", "74%"],
      ["Cathleen Kramer", 3380, "Crowsnest Pass", "2012/27/07", "53%"],
      ["Zachery Morgan", 6730, "Collines-de-l'Outaouais", "2006/04/09", "51%"],
      ["Yoko Freeman", 4077, "Lidk\xF6ping", "2002/27/12", "48%"],
      ["Chaim Waller", 4240, "North Shore", "2010/25/07", "25%"],
      ["Berk Johnston", 4532, "Vergnies", "2016/23/02", "93%"],
      ["Tad Munoz", 2902, "Saint-Nazaire", "2010/09/05", "65%"],
      ["Vivien Dominguez", 5653, "Bargagli", "2001/09/01", "86%"],
      ["Carissa Lara", 3241, "Sherborne", "2015/07/12", "72%"],
      ["Hammett Gordon", 8101, "Wah", "1998/06/09", "20%"],
      ["Walker Nixon", 6901, "Metz", "2011/12/11", "41%"],
      ["Nathan Espinoza", 5956, "Strathcona County", "2002/25/01", "47%"],
      ["Kelly Cameron", 4836, "Fontaine-Valmont", "1999/02/07", "24%"],
      ["Kyra Moses", 3796, "Quenast", "1998/07/07", "68%"],
      ["Grace Bishop", 8340, "Rodez", "2012/02/10", "4%"],
      ["Haviva Hernandez", 8136, "Suwa\u0142ki", "2000/30/01", "16%"],
      ["Alisa Horn", 9853, "Ucluelet", "2007/01/11", "39%"],
      ["Zelenia Roman", 7516, "Redwater", "2012/03/03", "31%"],
      ["Unity Pugh", 9958, "Curic\xF3", "2005/02/11", "37%"],
      ["Theodore Duran", 8971, "Dhanbad", "1999/04/07", "97%"],
      ["Kylie Bishop", 3147, "Norman", "2005/09/08", "63%"],
      ["Willow Gilliam", 3497, "Amqui", "2009/29/11", "30%"],
      ["Blossom Dickerson", 5018, "Kempten", "2006/11/09", "17%"],
      ["Elliott Snyder", 3925, "Enines", "2006/03/08", "57%"],
      ["Castor Pugh", 9488, "Neath", "2014/23/12", "93%"],
      ["Pearl Carlson", 6231, "Cobourg", "2014/31/08", "100%"]
    ]
  }
};
const optionsReactive = reactive({
  perPageSelect: [10, 20, 30, 40, 50, 100],
  perPage: 10,
  data: {
    headings: ["\u0646\u0627\u0645", "Ext.", "\u0634\u0647\u0631", "\u0631\u0648\u0632 \u0634\u0631\u0648\u0639", "Completion"],
    data: [
      ["Unity Pugh", 9958, "Curic\xF3", "2005/02/11", "37%"],
      ["Theodore Duran", 8971, "Dhanbad", "1999/04/07", "97%"],
      ["Kylie Bishop", 3147, "Norman", "2005/09/08", "63%"],
      ["Willow Gilliam", 3497, "Amqui", "2009/29/11", "30%"],
      ["Blossom Dickerson", 5018, "Kempten", "2006/11/09", "17%"],
      ["Elliott Snyder", 3925, "Enines", "2006/03/08", "57%"],
      ["Castor Pugh", 9488, "Neath", "2014/23/12", "93%"],
      ["Pearl Carlson", 6231, "Cobourg", "2014/31/08", "100%"],
      ["Deirdre Bridges", 1579, "Eberswalde-Finow", "2014/26/08", "44%"],
      ["Daniel Baldwin", 6095, "Moircy", "2000/11/01", "33%"],
      ["Phelan Kane", 9519, "Germersheim", "1999/16/04", "77%"],
      ["Quentin Salas", 1339, "Los Andes", "2011/26/01", "49%"],
      ["Armand Suarez", 6583, "Funtua", "1999/06/11", "9%"],
      ["Gretchen Rogers", 5393, "Moxhe", "1998/26/10", "24%"],
      ["Harding Thompson", 2824, "Abeokuta", "2008/06/08", "10%"],
      ["Mira Rocha", 4393, "Port Harcourt", "2002/04/10", "14%"],
      ["Drew Phillips", 2931, "Goes", "2011/18/10", "58%"],
      ["Emerald Warner", 6205, "Chiavari", "2002/08/04", "58%"],
      ["Colin Burch", 7457, "Anamur", "2004/02/01", "34%"]
    ]
  }
});
function renderIcon(data2, cell, row) {
  return `
    <div class="media-flex-center">
      <img class="drinks-icon" src="/images/icons/datatable/${data2}.svg" alt="">
      <div class="flex-meta">
        <span class="is-capitalize">${data2}</span>
      </div>
    </div>
  `;
}
function renderYesNo(data2, cell, row) {
  return data2 == "true" ? '<div class="has-text-centered"><span class="positive-icon"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span></div>' : '<div class="has-text-centered"><span class="negative-icon"><i aria-hidden="true" class="iconify" data-icon="feather:x"></i></span></div>';
}
function renderHighLow(data2, cell, row) {
  if (data2 > 0) {
    return `<span class="price dark-inverted">${data2}</span>`;
  } else if (data2 == 0) {
    return `<span class="price price-free dark-inverted">${data2}</span>`;
  }
}
function renderStock(data2, cell, row) {
  return `<span class="light-text">${data2}</span>`;
}
function renderStatus$1(data2, cell, row) {
  if (data2 === "available") {
    return `<span class="tag is-primary is-elevated is-curved is-capitalize">${data2}</span>`;
  } else if (data2 === "new") {
    return `<span class="tag is-info is-elevated is-curved is-capitalize">${data2}</span>`;
  }
  if (data2 === "unavailable") {
    return `<span class="tag is-danger is-elevated is-curved is-capitalize">${data2}</span>`;
  }
}
function renderProfit(data2, cell, row) {
  if (data2 > 0) {
    return `<div class="has-text-centered"><span class="positive-icon light-text"><i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i> +${data2}%</span></div>`;
  } else if (data2 < 0) {
    return `<div class="has-text-centered"><span class="negative-icon is-danger light-text"><i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i> -${data2}%</span></div>`;
  }
}
function renderButton$1(data2, cell, row) {
  return `<div class="has-text-left"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">\u0645\u062F\u06CC\u0631\u06CC\u062A</button></div>`;
}
const optionsAdvanced = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 5,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderIcon },
    { select: 2, render: renderYesNo },
    { select: 3, render: renderHighLow },
    { select: 4, render: renderStock },
    { select: 5, render: renderStatus$1 },
    { select: 6, render: renderProfit },
    { select: 7, render: renderButton$1, sortable: false }
  ],
  data: {
    headings: [
      "\u0634\u0646\u0627\u0633\u0647",
      "Drink",
      "Caffeinated",
      "Price",
      "Stock",
      "Status",
      "Profit",
      "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"
    ],
    data: [
      [574, "milk", false, 1.45, 978, "available", 2.5, true],
      [984, "coffee", true, 2.49, 1261, "available", 4.3, true],
      [312, "cola", true, 1.49, 153, "new", 2.6, true],
      [312, "soda", true, 1.49, 648, "available", -1.25, true],
      [312, "beer", false, 3.25, 928, "available", 5.12, true],
      [312, "juice", false, 1.72, 117, "available", -2.1, true],
      [312, "water", false, 1.21, 19, "new", 3, true],
      [312, "smoothie", false, 3.49, 265, "unavailable", 3.61, true],
      [312, "infusion", false, 1.89, 897, "available", -1.24, true],
      [312, "cocktail", false, 3.49, 119, "available", -2.45, true],
      [312, "latte", true, 2.49, 457, "new", 3, true],
      [312, "cosmopolitan", false, 4.49, 98, "available", 1.48, true],
      [312, "lemonade", true, 1.25, 1221, "available", -1.28, true],
      [312, "milkshake", false, 2.49, 158, "available", 2.3, true],
      [312, "wine", false, 4.49, 619, "new", 5.8, true],
      [312, "tea", false, 1.25, 481, "available", 1.3, true],
      [312, "mojito", true, 4.49, 762, "unavailable", 4.9, true],
      [312, "sangria", false, 1.49, 456, "available", 12.3, true]
    ]
  }
};
function renderPicture(data2, cell, row) {
  return `
        <div class="v-avatar">
            <img class="avatar" src="${data2}" alt="">
        </div>
    `;
}
function renderName(data2, cell, row) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data2}</span>`;
}
function renderPosition(data2, cell, row) {
  return `<span class="light-text">${data2}</span>`;
}
function renderStatus(data2, cell, row) {
  return `
        <div class="status is-${data2}">
            <i aria-hidden="true" class="fas fa-circle"></i>
            <span class="is-capitalize">${data2}</span>
        </div>
    `;
}
function renderButton(data2, cell, row) {
  return `<div class="has-text-left"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">\u0645\u062F\u06CC\u0631\u06CC\u062A</button></div>`;
}
const optionsUsers = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderPosition },
    { select: 4, render: renderStatus },
    { select: 5, render: renderButton, sortable: false }
  ],
  data: {
    headings: ["\u0634\u0646\u0627\u0633\u0647", "\u062A\u0635\u0648\u06CC\u0631", "\u0646\u0627\u0645", "\u0645\u0648\u0642\u0639\u06CC\u062A", "\u0648\u0636\u0639\u06CC\u062A", "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"],
    data: [
      [
        0,
        "/images/avatars/svg/vuero-1.svg",
        "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
        "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        "busy",
        true
      ],
      [
        1,
        "/demo/avatars/7.jpg",
        "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633",
        "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
        "offline",
        true
      ],
      [
        2,
        "/demo/avatars/13.jpg",
        "\u062A\u0627\u0631\u0627 \u062E\u0627\u0634\u0642\u0686\u06CC",
        "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        "offline",
        true
      ],
      [3, "/demo/avatars/5.jpg", "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC", "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647", "available", true],
      [
        4,
        "/images/avatars/placeholder-f.jpg",
        "\u06A9\u0627\u06CC\u0644 \u062C\u0646 \u06AF\u06CC\u0631",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
        "available",
        true
      ],
      [
        5,
        "/demo/avatars/27.jpg",
        "\u0639\u0644\u06CC \u06AF\u0648\u062F\u0631\u0632\u06CC",
        "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
        "offline",
        true
      ],
      [6, "/demo/avatars/22.jpg", "\u062F\u0627\u0648\u0648\u062F \u0647\u06CC\u0686\u06A9\u0633", "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644", "offline", true],
      [
        7,
        "/images/avatars/placeholder-m.jpg",
        "\u067E\u0627\u0648\u0647 \u0645\u0648\u0631\u06CC\u0633",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0628\u06A9\u200C\u0627\u0646\u062F",
        "available",
        true
      ],
      [
        8,
        "/demo/avatars/23.jpg",
        "\u0627\u06CC\u0631\u0627\u0646 \u0648\u0637\u0646\u062E\u0648\u0627\u0647",
        "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        "available",
        true
      ],
      [
        9,
        "/demo/avatars/28.jpg",
        "\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0627\u0644\u0627\u0646",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
        "busy",
        true
      ],
      [
        10,
        "/images/avatars/placeholder-f.jpg",
        "\u0634\u0627\u0646\u0627 \u0648\u06CC\u0644\u06CC\u0627\u0645\u0632",
        "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
        "offline",
        true
      ],
      [
        11,
        "/images/avatars/placeholder-m.jpg",
        "\u0628\u0646\u062C\u0627\u0645\u06CC\u0646 \u0647\u0627\u0641\u0645\u0646",
        "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        "offline",
        true
      ],
      [
        12,
        "/demo/avatars/39.jpg",
        "\u0639\u0644\u06CC \u0698\u0627\u0646\u062F\u0627\u0631\u0645",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
        "busy",
        true
      ],
      [
        13,
        "/demo/avatars/21.jpg",
        "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0645\u0627\u0647\u06CC \u0641\u0631\u0648\u0634",
        "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
        "available",
        true
      ],
      [
        14,
        "/demo/avatars/37.jpg",
        "\u062D\u0628\u06CC\u0628 \u0641\u0627\u062A\u062D",
        "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        "available",
        true
      ],
      [
        15,
        "/demo/avatars/31.jpg",
        "\u06CC\u0627\u0633\u06CC\u0646 \u0639\u0638\u06CC\u0645\u06CC",
        "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
        "offline",
        true
      ]
    ]
  }
};
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "mb-6" };
const _hoisted_4 = { class: "mb-6" };
const _hoisted_5 = { class: "mb-6" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0646\u0627\u0645"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Ext."),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0634\u0647\u0631"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      "data-type": "date",
      "data-format": "YYYY/MM/DD"
    }, " \u0631\u0648\u0632 \u0634\u0631\u0648\u0639 "),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      "data-sort": "asc"
    }, "Completion")
  ])
], -1);
const _hoisted_7 = { class: "mb-6" };
const _hoisted_8 = { class: "mb-6" };
const _hoisted_9 = {
  key: 0,
  class: "column is-3 toc-column"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let interval;
    const markdownContainer = ref();
    const toc = useMarkdownToc(markdownContainer);
    const randomUpdate = () => {
      const max = optionsReactive.data.data.length;
      const index = Math.floor(Math.random() * max);
      const percent = parseInt(`${optionsReactive.data.data[index][4]}`.replace("%", ""));
      if (percent < 100) {
        optionsReactive.data.data[index][1] = Math.floor(Math.random() * 5e3);
        optionsReactive.data.data[index][4] = `${percent + 1}%`;
      }
    };
    onMounted(() => {
      interval = setInterval(randomUpdate, 400);
    });
    onBeforeUnmount(() => {
      if (interval) {
        clearInterval(interval);
      }
    });
    pageTitle.value = "VSimpleDatatables";
    useHead({
      title: "VSimpleDatatables - \u067E\u0644\u0627\u06AF\u06CC\u0646\u200C\u0647\u0627 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_VBreadcrumb = _sfc_main$1;
      const _component_DatatableBaseDocumentation = __script$4;
      const _component_VSimpleDatatables = _sfc_main$2;
      const _component_DatatableReactiveDocumentation = __script$3;
      const _component_DatatableSlotDocumentation = __script$2;
      const _component_VTag = _sfc_main$3;
      const _component_DatatableAdvancedDocumentation = __script$1;
      const _component_DatatableUsersDocumentation = __script;
      const _component_DocumentationToc = __unplugin_components_10;
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
              label: "\u067E\u0644\u0627\u06AF\u06CC\u0646\u200C\u0647\u0627"
            },
            {
              label: "VSimpleDatatables",
              to: { name: "components-plugins-simple-datatables" }
            }
          ]
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            ref: (_value, _refs) => {
              _refs["markdownContainer"] = _value;
              markdownContainer.value = _value;
            },
            class: normalizeClass([[unref(toc).length > 0 ? "is-9" : "is-12"], "column doc-column"])
          }, [
            createVNode(_component_DatatableBaseDocumentation),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VSimpleDatatables, { options: unref(optionsBase) }, null, 8, ["options"])
            ]),
            createVNode(_component_DatatableReactiveDocumentation),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VSimpleDatatables, {
                options: unref(optionsReactive),
                autoupdate: ""
              }, null, 8, ["options"])
            ]),
            createVNode(_component_DatatableSlotDocumentation),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VSimpleDatatables, null, {
                default: withCtx(() => [
                  _hoisted_6,
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(optionsBase).data.data, (row, index) => {
                      return openBlock(), createElementBlock("tr", { key: index }, [
                        createBaseVNode("td", null, toDisplayString(row[0]), 1),
                        createBaseVNode("td", null, [
                          createBaseVNode("strong", null, toDisplayString(row[1]), 1)
                        ]),
                        createBaseVNode("td", null, toDisplayString(row[2]), 1),
                        createBaseVNode("td", null, toDisplayString(row[3]), 1),
                        createBaseVNode("td", null, [
                          createVNode(_component_VTag, {
                            color: row[4] === "100%" ? "primary" : "light",
                            label: row[4]
                          }, null, 8, ["color", "label"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            createVNode(_component_DatatableAdvancedDocumentation),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VSimpleDatatables, { options: unref(optionsAdvanced) }, null, 8, ["options"])
            ]),
            createVNode(_component_DatatableUsersDocumentation),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_VSimpleDatatables, { options: unref(optionsUsers) }, null, 8, ["options"])
            ])
          ], 2),
          unref(toc).length ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createVNode(_component_DocumentationToc, { toc: unref(toc) }, null, 8, ["toc"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
