import { d as defineComponent, Z as useI18n, r as ref, h as computed, w as watchEffect, ac as onUnmounted, o as openBlock, N as createBlock, e as createBaseVNode, E as toDisplayString, n as normalizeClass, F as renderSlot, t as unref, aq as Teleport } from "./vendor.9ec557a4.js";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Abbrechen"]);
        }
      },
      "en": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u06A9\u0646\u0633\u0644"]);
        }
      },
      "fa": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u06A9\u0646\u0633\u0644"]);
        }
      },
      "es-MX": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelar"]);
        }
      },
      "es": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelar"]);
        }
      },
      "fr": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Annuler"]);
        }
      },
      "zh-CN": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u53D6\u6D88"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "modal-content" };
const _hoisted_2 = { class: "modal-card" };
const _hoisted_3 = { class: "modal-card-head" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { class: "inner-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: true },
    size: { type: String, required: false, default: void 0 },
    actions: { type: String, required: false, default: void 0 },
    open: { type: Boolean, required: false },
    rounded: { type: Boolean, required: false },
    noscroll: { type: Boolean, required: false },
    noclose: { type: Boolean, required: false },
    tabs: { type: Boolean, required: false },
    cancelLabel: { type: String, required: false, default: void 0 }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const wasOpen = ref(false);
    const cancelLabel = computed(() => props.cancelLabel || t("cancel-label"));
    const checkScroll = () => {
      if (props.noscroll && props.open) {
        document.documentElement.classList.add("no-scroll");
        wasOpen.value = true;
      } else if (wasOpen.value && props.noscroll && !props.open) {
        document.documentElement.classList.remove("no-scroll");
        wasOpen.value = false;
      }
    };
    watchEffect(checkScroll);
    onUnmounted(() => {
      document.documentElement.classList.remove("no-scroll");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", {
          class: normalizeClass([[__props.open && "is-active", __props.size && `is-${__props.size}`], "modal v-modal"])
        }, [
          createBaseVNode("div", {
            class: "modal-background v-modal-close",
            onClick: _cache[0] || (_cache[0] = () => __props.noclose === false && emit("close"))
          }),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("header", _hoisted_3, [
                createBaseVNode("h3", null, toDisplayString(__props.title), 1),
                createBaseVNode("button", {
                  class: "v-modal-close mr-auto",
                  "aria-label": "close",
                  onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
                }, _hoisted_5)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["modal-card-body", [props.tabs && "has-tabs"]])
              }, [
                createBaseVNode("div", _hoisted_6, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(["modal-card-foot", [
                  __props.actions === "center" && "is-centered",
                  __props.actions === "right" && "is-end"
                ]])
              }, [
                renderSlot(_ctx.$slots, "cancel", {}, () => [
                  createBaseVNode("a", {
                    class: normalizeClass(["button v-button v-modal-close", [__props.rounded && "is-rounded"]]),
                    onClick: _cache[2] || (_cache[2] = ($event) => emit("close"))
                  }, toDisplayString(unref(cancelLabel)), 3)
                ]),
                renderSlot(_ctx.$slots, "action")
              ], 2)
            ])
          ])
        ], 2)
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as _ };
