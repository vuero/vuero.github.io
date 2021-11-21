import { _ as _sfc_main$2 } from "./Toolbar.278fa677.js";
import { _ as __unplugin_components_0, a as _sfc_main$3 } from "./DocumentationItem.6b7c9a35.js";
import { o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, B as createTextVNode, d as defineComponent, r as ref, b as createElementBlock, G as Fragment, J as renderList, n as normalizeClass, E as toDisplayString, s as withModifiers, ab as onMounted, K as useHead, t as unref, v as createVNode } from "./vendor.9ec557a4.js";
import { a as activeSidebar, t as toggleSidebar } from "./activeSidebarState.93618a64.js";
import "./index.4d6c8e1a.js";
import "./activePanelState.9015e2f2.js";
import "./useDropdown.086619d7.js";
import "./VIcon.85cce7bc.js";
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "vaccordion",
  tabindex: "-1"
}, "VAccordion", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u0648\u06CC\u0648\u0626\u063A\u0631\u0648 \u06F2 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC \u062F\u0627\u0631\u062F \u06A9\u0647 \u0628\u062E\u0648\u0628\u06CC \u0627\u0633\u062A\u0627\u06CC\u0644\u200C\u0628\u0646\u062F\u06CC \u0634\u062F\u0647\u200C\u0627\u0646\u062F \u062A\u0627 \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0633\u0631\u06CC\u0639 \u0645\u0646\u0627\u0633\u0628 \u0628\u0627\u0634\u0646\u062F: "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VAccordion />"),
  /* @__PURE__ */ createTextVNode(" \u0648 "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VCollapse />"),
  /* @__PURE__ */ createTextVNode(". \u062F\u0631 \u0622\u06A9\u0648\u0631\u062F\u06CC\u0648\u0646 \u0633\u0627\u062F\u0647 \u0647\u0631 \u0622\u06CC\u062A\u0645 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062C\u062F\u0627\u06AF\u0627\u0646\u0647 \u0628\u0627\u0632 \u0648\u062F \u0648\u0644\u06CC \u062F\u0631 \u0645\u062F\u0644 \u062F\u06CC\u06AF\u0631 \u0647\u0631\u0628\u0627\u0631 \u0641\u0642\u0637 \u06CC\u06A9 \u0622\u06CC\u062A\u0645 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0628\u0627\u0632 \u0634\u0648\u062F. \u06CC\u06A9 \u062F\u0627\u062F\u0647 \u0627\u0632 \u0646\u0648\u0639 "),
  /* @__PURE__ */ createBaseVNode("strong", null, "Array"),
  /* @__PURE__ */ createTextVNode(" \u0628\u0631\u0627\u06CC \u0648\u06CC\u0698\u06AF\u06CC "),
  /* @__PURE__ */ createBaseVNode("code", null, "items"),
  /* @__PURE__ */ createTextVNode(" \u062A\u0639\u0631\u06CC\u0641 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0622\u06A9\u0648\u0631\u062F\u06CC\u0648\u0646 \u0633\u0627\u062E\u062A\u0647 \u0634\u0648\u062F.")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    title"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'\u0622\u06CC\u062A\u0645 \u0622\u06A9\u0648\u0631\u062F\u06CC\u0648\u0646 1'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    content"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'\u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 ...'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    title"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'\u0622\u06CC\u062A\u0645 \u0622\u06A9\u0648\u0631\u062F\u06CC\u0648\u0646 2'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    content"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'\u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 ...'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n    title"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'\u0622\u06CC\u062A\u0645 \u0622\u06A9\u0648\u0631\u062F\u06CC\u0648\u0646 3'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n    content"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--string" }, "'\u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 ...'"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ","),
          /* @__PURE__ */ createTextVNode("\n  "),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "}"),
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
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("column is-6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VAccordion")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("div")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("column is-6"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, ">")
      ]),
      /* @__PURE__ */ createTextVNode("\n    "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "<"),
          /* @__PURE__ */ createTextVNode("VAccordion")
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, ":items"),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-value" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation prism--attr-equals" }, "="),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"'),
          /* @__PURE__ */ createTextVNode("data"),
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--attr-name" }, "exclusive"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "/>")
      ]),
      /* @__PURE__ */ createTextVNode("\n  "),
      /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "prism--token prism--punctuation" }, "</"),
          /* @__PURE__ */ createTextVNode("div")
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
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
function render$1(_ctx, _cache) {
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
const __matter$1 = {};
const data$1 = () => ({ frontmatter: __matter$1 });
const __script$1 = { render: render$1, data: data$1 };
const _hoisted_1$2 = ["open"];
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$2 = { class: "accordion-content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    items: { type: Array, required: true, default: () => [] },
    openItems: { type: Array, required: false, default: () => [] },
    exclusive: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const internalOpenItems = ref(props.openItems);
    const toggle = (key) => {
      const wasOpen = internalOpenItems.value.includes(key);
      if (props.exclusive) {
        internalOpenItems.value.splice(0, internalOpenItems.value.length);
        if (!wasOpen) {
          internalOpenItems.value.push(key);
        }
        return;
      }
      if (wasOpen) {
        internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1);
      } else {
        internalOpenItems.value.push(key);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["single-accordion", [__props.exclusive && "is-exclusive"]])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, key) => {
          var _a, _b, _c;
          return openBlock(), createElementBlock("details", {
            key,
            class: normalizeClass(["accordion-item", [((_a = internalOpenItems.value) == null ? void 0 : _a.includes(key)) && "is-active"]]),
            open: (_c = (_b = internalOpenItems.value) == null ? void 0 : _b.includes(key)) != null ? _c : void 0
          }, [
            createBaseVNode("summary", {
              class: "accordion-header",
              onClick: withModifiers(() => toggle(key), ["prevent"])
            }, toDisplayString(item.title), 9, _hoisted_2$2),
            createBaseVNode("div", _hoisted_3$2, toDisplayString(item.content), 1)
          ], 10, _hoisted_1$2);
        }), 128))
      ], 2);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "%D9%88%DB%8C%DA%98%DA%AF%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C-(props)-vaccordion",
  tabindex: "-1"
}, "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC (Props) VAccordion", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("\u0647\u0645\u0647\u200C\u06CC \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0628\u0631\u0627\u06CC \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A "),
  /* @__PURE__ */ createBaseVNode("code", null, "<VAccordion />"),
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
        /* @__PURE__ */ createTextVNode("items"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("strong", null, "required")
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-null" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "null")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-array" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "Array<{"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " title: string"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, " content: string"),
          /* @__PURE__ */ createBaseVNode("br"),
          /* @__PURE__ */ createBaseVNode("code", null, "}>")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "itemOpen"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-undefined" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "undefined")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "number")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "exclusive"),
      /* @__PURE__ */ createBaseVNode("td", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "is-boolean" }, [
          /* @__PURE__ */ createBaseVNode("code", null, "false")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("td", null, "boolean")
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
const _hoisted_1 = { class: "page-title has-text-centered" };
const _hoisted_2 = { class: "menu-toggle has-chevron" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "icon-line-top" }),
  /* @__PURE__ */ createBaseVNode("i", { class: "icon-line-center" }),
  /* @__PURE__ */ createBaseVNode("i", { class: "icon-line-bottom" })
], -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "title is-4" }, "VAccordion")
], -1);
const _hoisted_6 = { class: "page-content-inner" };
const _hoisted_7 = { class: "columns is-multiline" };
const _hoisted_8 = { class: "column is-12" };
const _hoisted_9 = { class: "column is-6 is-full-tablet" };
const _hoisted_10 = { class: "column is-6 is-full-tablet" };
const _hoisted_11 = { class: "column is-12 mt-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    onMounted(() => {
      activeSidebar.value = "components";
    });
    useHead({
      title: "V-Accordion - \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627 - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"
    });
    return (_ctx, _cache) => {
      const _component_Toolbar = _sfc_main$2;
      const _component_VBreadcrumb = _sfc_main$3;
      const _component_AccordionDefaultDocumentation = __script$1;
      const _component_VAccordion = _sfc_main$1;
      const _component_AccordionDefaultPropsDocumentation = __script;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: "vuero-hamburger nav-trigger push-resize",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleSidebar)("components"))
          }, [
            createBaseVNode("span", _hoisted_2, [
              createBaseVNode("span", {
                class: normalizeClass([[unref(activeSidebar) !== "none" && "active"], "icon-box-toggle"])
              }, _hoisted_4, 2)
            ])
          ]),
          _hoisted_5,
          createVNode(_component_Toolbar)
        ]),
        createBaseVNode("div", _hoisted_6, [
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
                label: "\u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC"
              },
              {
                label: "V-Accordion",
                to: { name: "components-accordion" }
              }
            ]
          }),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_AccordionDefaultDocumentation)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VAccordion, { items: [
                {
                  title: "\u0622\u06CC\u062A\u0645 \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC \u06F1",
                  content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641..."
                },
                {
                  title: "\u0622\u06CC\u062A\u0645 \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC \u06F2",
                  content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641..."
                },
                {
                  title: "\u0622\u06CC\u062A\u0645 \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC \u06F3",
                  content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641..."
                }
              ] }, null, 8, ["items"])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createVNode(_component_VAccordion, {
                items: [
                  {
                    title: "\u0622\u06CC\u062A\u0645 \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC \u06F1",
                    content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641..."
                  },
                  {
                    title: "\u0622\u06CC\u062A\u0645 \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC \u06F2",
                    content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641..."
                  },
                  {
                    title: "\u0622\u06CC\u062A\u0645 \u06A9\u0631\u06A9\u0631\u0647\u200C\u0627\u06CC \u06F3",
                    content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641..."
                  }
                ],
                exclusive: ""
              }, null, 8, ["items"])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_AccordionDefaultPropsDocumentation)
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
