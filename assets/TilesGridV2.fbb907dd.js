import { j as _imports_0, k as _imports_1, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, l as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as __unplugin_components_4 } from "./FileTileDropdown.1f6be241.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, ai as TransitionGroup } from "./vendor.9ec557a4.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
const files = [
  {
    id: 1,
    icon: "/images/icons/files/pdf.svg",
    name: "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0631\u06A9\u062A",
    updated: "2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    size: "4.7 MB"
  },
  {
    id: 2,
    icon: "/images/icons/files/sheet.svg",
    name: "\u0647\u0632\u06CC\u0646\u0647 \u0647\u0627\u06CC \u0627\u062C\u0644\u0627\u0633 \u0641\u0646\u0627\u0648\u0631\u06CC",
    updated: "1 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
    size: "34 KB"
  },
  {
    id: 3,
    icon: "/images/icons/files/doc-2.svg",
    name: "\u0637\u0631\u062D \u06A9\u0644\u06CC \u067E\u0631\u0648\u0698\u0647",
    updated: "2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
    size: "77 KB"
  },
  {
    id: 4,
    icon: "/images/icons/files/ppt.svg",
    name: "\u0627\u0631\u0627\u0626\u0647 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    updated: "4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    size: "2.3 MB"
  },
  {
    id: 5,
    icon: "/images/icons/files/ai.svg",
    name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0635\u0641\u062D\u0647 \u0627\u0648\u0644 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
    updated: "3 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    size: "4.8 MB"
  },
  {
    id: 6,
    icon: "/images/icons/files/doc-2.svg",
    name: "\u0627\u0641\u0632\u0627\u06CC\u0634 UX \u0628\u0631\u0627\u06CC \u06A9\u0627\u0631\u0622\u0645\u0648\u0632\u0627\u0646",
    updated: "6 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    size: "1.8 MB"
  },
  {
    id: 7,
    icon: "/images/icons/files/pdf.svg",
    name: "\u062E\u0644\u0627\u0635\u0647 \u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC 2020",
    updated: "2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    size: "8.9 MB"
  },
  {
    id: 8,
    icon: "/images/icons/files/doc-2.svg",
    name: "\u06AF\u0632\u0627\u0631\u0634 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC - 2020",
    updated: "2 \u0645\u0627\u0647 \u067E\u06CC\u0634",
    size: "1.2 MB"
  },
  {
    id: 9,
    icon: "/images/icons/files/sheet.svg",
    name: "\u0647\u0632\u06CC\u0646\u0647 \u0647\u0627\u06CC \u062A\u0627\u0645\u06CC\u0646 \u06A9\u0646\u0646\u062F\u0647 2020",
    updated: "2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
    size: "250 KB"
  },
  {
    id: 10,
    icon: "/images/icons/files/ai.svg",
    name: "\u0648\u0628 \u0633\u0627\u06CC\u062A \u062F\u0631\u0628\u0627\u0631\u0647 \u0637\u0631\u0627\u062D\u06CC \u0645\u062C\u062F\u062F \u0635\u0641\u062D\u0647",
    updated: "2 \u0645\u0627\u0647 \u067E\u06CC\u0634",
    size: "3.9 MB"
  },
  {
    id: 11,
    icon: "/images/icons/files/ai.svg",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0645\u062C\u062F\u062F \u0635\u0641\u062D\u0647 \u0642\u06CC\u0645\u062A \u0633\u0627\u06CC\u062A",
    updated: "2 \u0645\u0627\u0647 \u067E\u06CC\u0634",
    size: "2.6 MB"
  },
  {
    id: 12,
    icon: "/images/icons/files/doc-2.svg",
    name: "\u06AF\u0632\u0627\u0631\u0634 \u0645\u0627\u0644\u06CC - 2019",
    updated: "8 \u0645\u0627\u0647 \u067E\u06CC\u0634",
    size: "1.1 MB"
  },
  {
    id: 13,
    icon: "/images/icons/files/sheet.svg",
    name: "\u0647\u0632\u06CC\u0646\u0647 \u0647\u0627\u06CC \u062A\u0627\u0645\u06CC\u0646 \u06A9\u0646\u0646\u062F\u0647 2019",
    updated: "8 \u0645\u0627\u0647 \u067E\u06CC\u0634",
    size: "250 KB"
  },
  {
    id: 14,
    icon: "/images/icons/files/ai.svg",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0645\u062C\u062F\u062F \u0635\u0641\u062D\u0647 \u062A\u0645\u0627\u0633 \u0628\u0627 \u0648\u0628 \u0633\u0627\u06CC\u062A",
    updated: "3 \u0645\u0627\u0647 \u067E\u06CC\u0634",
    size: "5.8 MB"
  },
  {
    id: 15,
    icon: "/images/icons/files/pdf.svg",
    name: "\u06A9\u062A\u0627\u0628 \u0645\u0627\u0631\u06A9 \u0634\u0631\u06A9\u062A",
    updated: "3 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
    size: "5.3 MB"
  },
  {
    id: 16,
    icon: "/images/icons/files/pdf.svg",
    name: "\u062E\u0644\u0627\u0635\u0647 \u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC 2019",
    updated: "9 \u0645\u0627\u0647 \u067E\u06CC\u0634",
    size: "4.7 MB"
  }
];
var TilesGridV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u0627\u06CC\u0644", -1);
const _hoisted_5 = { class: "tile-grid tile-grid-v2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "tile-grid-item" };
const _hoisted_9 = { class: "tile-grid-item-inner" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "meta" };
const _hoisted_12 = { class: "dark-inverted" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return files;
      } else {
        return files.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.size.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "\u0647\u0645\u0647 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
      "\u0627\u062E\u06CC\u0631 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC",
      "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0645\u0646",
      "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u062A\u06CC\u0645",
      "\u0645\u0646\u0633\u0648\u062E"
    ];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      const _component_FileTileDropdown = __unplugin_components_4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "\u062C\u0633\u062A\u062C\u0648..."
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "column is-4"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("img", {
                        src: item.icon,
                        alt: "",
                        onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 40, _hoisted_10),
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("span", _hoisted_12, toDisplayString(item.name), 1),
                        createBaseVNode("span", null, [
                          createBaseVNode("span", null, toDisplayString(item.size), 1),
                          _hoisted_13,
                          createBaseVNode("span", null, "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u062F\u0631 " + toDisplayString(item.updated), 1)
                        ])
                      ]),
                      createVNode(_component_FileTileDropdown)
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
