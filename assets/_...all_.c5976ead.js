import { _ as __unplugin_components_0 } from "./SVGErrorPlaceholder.8da458c3.js";
import { b as _sfc_main$1, e as _sfc_main$2 } from "./index.4d6c8e1a.js";
import { d as defineComponent, ak as useRoute, Z as useI18n, ab as onMounted, K as useHead, o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, v as createVNode, E as toDisplayString, t as unref, B as createTextVNode } from "./vendor.9ec557a4.js";
var ____all__vue_vue_type_style_index_0_lang = "";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "page-title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Seite nicht gefunden"]);
        },
        "page-heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Wir konnten diese Seite nicht finden"]);
        },
        "page-body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Die Seite konnte nicht gefunden werden. Bitte versuchen Sie es erneut oder wenden Sie sich an einen Administrator, wenn das Problem weiterhin besteht."]);
        },
        "back-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Bringen Sie mich zur\xFCck"]);
        }
      },
      "en": {
        "page-title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Page not found"]);
        },
        "page-heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We couldn't find that page"]);
        },
        "page-body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Looks like we couldn't find that page. Please try again or contact an administrator if the problem persists."]);
        },
        "back-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Take me Back"]);
        }
      },
      "fa": {
        "page-title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0635\u0641\u062D\u0647 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F"]);
        },
        "page-heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0635\u0641\u062D\u0647\u200C\u06CC \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u067E\u06CC\u062F\u0627 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F"]);
        },
        "page-body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0635\u0641\u062D\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0628\u062F\u0646\u0628\u0627\u0644\u0634 \u0647\u0633\u062A\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F. \u0645\u062C\u062F\u062F \u0628\u0631\u0631\u0633\u06CC \u0646\u0645\u0627\u0626\u06CC\u062F \u0622\u062F\u0631\u0633 \u0635\u062D\u06CC\u062D \u0645\u06CC\u200C\u0628\u0627\u0634\u062F \u06CC\u0627 \u0646\u0647. \u062F\u0631 \u0635\u0648\u0631\u062A \u0648\u062C\u0648\u062F \u0627\u0634\u06A9\u0627\u0644 \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."]);
        },
        "back-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0628\u0627\u0632\u06AF\u0634\u062A"]);
        }
      },
      "es-MX": {
        "page-title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["P\xE1gina no encontrada"]);
        },
        "page-heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No hemos podido encontrar esa p\xE1gina"]);
        },
        "page-body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Parece que no hemos podido encontrar esa p\xE1gina. Por favor, int\xE9ntalo de nuevo o contacta con un administrador si el problema persiste."]);
        },
        "back-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ll\xE9vame de vuelta"]);
        }
      },
      "es": {
        "page-title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["P\xE1gina no encontrada"]);
        },
        "page-heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No hemos podido encontrar esa p\xE1gina"]);
        },
        "page-body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Parece que no hemos podido encontrar esa p\xE1gina. Por favor, int\xE9ntalo de nuevo o contacta con un administrador si el problema persiste."]);
        },
        "back-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ll\xE9vame de vuelta"]);
        }
      },
      "fr": {
        "page-title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Page introuvable"]);
        },
        "page-heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cette page n'a pas \xE9t\xE9 trouv\xE9e"]);
        },
        "page-body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Il semble que nous n'ayons pas trouv\xE9 cette page. Veuillez r\xE9essayer ou contacter un administrateur si le probl\xE8me persiste."]);
        },
        "back-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ramenez-moi en arri\xE8re"]);
        }
      },
      "zh-CN": {
        "page-title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u672A\u627E\u5230\u9875\u9762"]);
        },
        "page-heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6211\u4EEC\u627E\u4E0D\u5230\u8FD9\u4E2A\u9875\u9762"]);
        },
        "page-body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u770B\u8D77\u6765\u6211\u4EEC\u627E\u4E0D\u5230\u8FD9\u4E2A\u9875\u9762\u3002\u5982\u679C\u95EE\u9898\u4ECD\u7136\u5B58\u5728\uFF0C\u8BF7\u518D\u8BD5\u4E00\u6B21\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u3002"]);
        },
        "back-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5E26\u6211\u56DE\u53BB"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "error-container" };
const _hoisted_2 = { class: "error-wrapper" };
const _hoisted_3 = { class: "error-inner has-text-centered" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-number" }, "404", -1);
const _hoisted_5 = { class: "button-wrap" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    onMounted(() => {
      if (!route.path.startsWith("/404")) {
        window.location.href = `/404${route.fullPath}`;
      }
    });
    useHead({
      title: `${t("page-title")} - \u0648\u06CC\u0648\u0626\u0650\u0631\u0648`,
      meta: [
        {
          name: "robots",
          content: "noindex"
        }
      ]
    });
    return (_ctx, _cache) => {
      const _component_SVGErrorPlaceholder = __unplugin_components_0;
      const _component_VButton = _sfc_main$1;
      const _component_MinimalLayout = _sfc_main$2;
      return openBlock(), createBlock(_component_MinimalLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                _hoisted_4,
                createVNode(_component_SVGErrorPlaceholder),
                createBaseVNode("h3", null, toDisplayString(unref(t)("page-heading")), 1),
                createBaseVNode("p", null, toDisplayString(unref(t)("page-body")), 1),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    elevated: "",
                    to: { name: "index" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("back-button")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
