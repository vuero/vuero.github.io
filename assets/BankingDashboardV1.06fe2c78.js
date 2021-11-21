import { _ as __unplugin_components_0 } from "./GraphDropdown.bd15ab94.js";
import { _ as _sfc_main$1 } from "./VIconBox.e1985867.js";
import { _ as _sfc_main$2 } from "./VBlock.47e0c633.js";
import { g as themeColors, c as __unplugin_components_1, d as _sfc_main$3, b as _sfc_main$7 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VProgress.21a77a58.js";
import { _ as _sfc_main$5 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$6 } from "./UserPopoverContent.8933a73e.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
import { r as ref, d as defineComponent, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, A as isRef, E as toDisplayString, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
var _imports_0 = "/images/icons/dashboards/banking/visa-squared-white.svg";
var _imports_1 = "/images/icons/dashboards/banking/visa-squared-color.svg";
const incomeOptions = {
  series: [
    {
      name: "\u0645\u062E\u0627\u0631\u062C",
      data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45]
    },
    {
      name: "\u062F\u0631\u0622\u0645\u062F",
      data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511]
    }
  ],
  chart: {
    height: 300,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green, themeColors.info, themeColors.orange],
  title: {
    text: "\u062A\u0627\u0631\u06CC\u062E",
    align: "right"
  },
  legend: {
    position: "top"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  yaxis: {
    opposite: true
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2020-10-19T00:00:00.000Z",
      "2020-10-20T01:30:00.000Z",
      "2020-10-21T02:30:00.000Z",
      "2020-10-22T03:30:00.000Z",
      "2020-10-23T04:30:00.000Z",
      "2020-10-24T05:30:00.000Z",
      "2020-10-25T06:30:00.000Z",
      "2020-10-26T06:30:00.000Z",
      "2020-10-27T06:30:00.000Z",
      "2020-10-28T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    },
    y: {
      formatter: function(val) {
        return "$" + val;
      }
    }
  }
};
const selectSlotValue = ["default"];
const selectSlotOptions = [
  {
    value: "default",
    name: "\u0627\u0646\u062A\u062E\u0627\u0628 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    icon: "/images/avatars/svg/vuero-1.svg"
  },
  {
    value: "4156 1000 56565 17",
    name: "4156 1000 56565 17",
    icon: "/images/icons/dashboards/banking/bank-1.svg"
  },
  {
    value: "2247 2427 89975 12",
    name: "2247 2427 89975 12",
    icon: "/images/icons/dashboards/banking/bank-2.svg"
  },
  {
    value: "2247 2427 89975 19",
    name: "2247 2427 89975 19",
    icon: "/images/icons/dashboards/banking/bank-3.svg"
  }
];
const valueSingle = ref(0);
const optionsSingle = [
  "\u06F1\u06F0 \u0631\u0648\u0632 \u067E\u06CC\u0634",
  "\u0645\u0627\u0647 \u067E\u06CC\u0634",
  "\u06F3 \u0645\u0627\u0647 \u0627\u062E\u06CC\u0631",
  "\u06F6 \u0645\u0627\u0647 \u067E\u06CC\u0634"
];
var BankingDashboardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "banking-dashboard banking-dashboard-v1" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "dashboard-card is-credit-cards" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="title-wrap"><h3 class="dark-inverted">\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0645\u0646</h3><button class="button is-circle is-dark-outlined"><span class="icon is-small"><i aria-hidden="true" class="iconify" data-icon="feather:plus"></i></span></button></div>', 1);
const _hoisted_6 = { class: "card-block" };
const _hoisted_7 = { class: "card-block-inner is-dark-bordered-12" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "credit-card is-theme-1" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "card-number" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "** 4628"),
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_0,
        alt: ""
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC")
  ])
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "credit-card-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A"),
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u06F2 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646")
], -1);
const _hoisted_10 = { class: "credit-card-end" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "info-block-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
    /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A"),
    /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0648\u06CC\u0631\u0627\u06CC\u0634")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "info-block-line" }, [
    /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "\u0648\u0636\u0639\u06CC\u062A"),
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-circle text-success"
      }),
      /* @__PURE__ */ createTextVNode(" \u0641\u0639\u0627\u0644 ")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "info-block-line" }, [
    /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "\u0627\u0646\u0642\u0636\u0627 \u067E\u0633 \u0627\u0632"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u06F1\u06F3\u06F4 \u0631\u0648\u0632")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "info-block-line" }, [
    /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "\u0646\u0648\u0639"),
    /* @__PURE__ */ createBaseVNode("span", { class: "has-image" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_1,
        alt: ""
      }),
      /* @__PURE__ */ createTextVNode(" \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC ")
    ])
  ])
], -1);
const _hoisted_12 = { class: "card-block-inner is-dark-bordered-12" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "credit-card is-theme-2" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "card-number" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "** 2649"),
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_0,
        alt: ""
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u0627\u0631\u062A \u0645\u0639\u0645\u0648\u0644\u06CC")
  ])
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "credit-card-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A"),
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646")
], -1);
const _hoisted_15 = { class: "credit-card-end" };
const _hoisted_16 = { class: "dashboard-card is-transactions" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_18 = { class: "transactions" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-service"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- \u06F1\u06F0\u06F0,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+ \u06F2\u06F6\u06F3,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cart-alt"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- \u06F9\u06F2,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646", -1);
const _hoisted_25 = { class: "column is-8" };
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-6" };
const _hoisted_28 = { class: "dashboard-card" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0631\u06CC\u0639")
], -1);
const _hoisted_30 = { class: "multiselect-single-label" };
const _hoisted_31 = ["src"];
const _hoisted_32 = { class: "select-label-text" };
const _hoisted_33 = ["src"];
const _hoisted_34 = { class: "select-label-text" };
const _hoisted_35 = /* @__PURE__ */ createStaticVNode('<p class="context-text"> \u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC \u062E\u0648\u062F \u0631\u0627 \u062C\u0647\u062A \u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u062C\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u0626\u06CC\u062F. \u062F\u0642\u062A \u0646\u0645\u0627\u0626\u06CC\u062F \u0627\u0645\u06A9\u0627\u0646 \u0627\u0646\u062A\u0642\u0627\u0644 \u06F2\u06F5\u066A \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0647\u0631 \u0628\u0627\u0631 \u0627\u0646\u062A\u0642\u0627\u0644 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">\u062A\u0623\u06CC\u06CC\u062F</a></div></div></div>', 2);
const _hoisted_37 = {
  class: "dashboard-card",
  "data-toggle": "popover",
  "data-pop-mode": "hover",
  "data-pop-width": "220",
  "data-pop-title": "\u0633\u0637\u062D \u06F3",
  "data-pop-content": "\u0634\u0645\u0627 \u0633\u0637\u062D \u06F3 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0628\u062F\u0633\u062A \u0622\u0648\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u060C \u0628\u0631\u0627\u06CC \u0627\u0631\u062A\u0642\u0627 \u0628\u0647 \u0633\u0637\u0648\u062D \u0628\u0627\u0644\u0627\u062A\u0631 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0645\u062F\u0627\u0648\u0645 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F.",
  "data-pop-position": "auto",
  "data-pop-icon": "lnil lnil-crown-alt-1",
  "data-pop-iconbg": "green"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0631\u0648\u0646\u062F \u06A9\u0644\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", { class: "title-meta dark-inverted" }, "\u0633\u0637\u062D \u06F3")
], -1);
const _hoisted_39 = { class: "progress-wrap m-b-10 m-t-10" };
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<p class="context-text"> \u0627\u06CC\u0646 \u0633\u0637\u062D \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627 \u062F\u0631 \u0633\u0627\u06CC\u062A \u0645\u0627 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F. \u0628\u0647 \u0645\u0646\u0638\u0648\u0631 \u062F\u0633\u062A\u06CC\u0627\u0628\u06CC \u0628\u0647 \u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u0648 \u0647\u062F\u0627\u06CC\u0627\u06CC \u0646\u0641\u06CC\u0633 \u0633\u0637\u062D \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u0631\u062A\u0642\u0627 \u062F\u0647\u06CC\u062F. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">\u062C\u0632\u0626\u06CC\u0627\u062A</a></div></div></div>', 2);
const _hoisted_42 = { class: "column is-6" };
const _hoisted_43 = { class: "dashboard-card is-contacts" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "title-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 \u0628\u0647")
], -1);
const _hoisted_45 = { class: "people-wrap" };
const _hoisted_46 = { class: "people" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "actions" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647\u200C\u06CC \u0645\u062E\u0627\u0637\u0628\u06CC\u0646"),
  /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary-hover" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:arrow-left"
    })
  ])
], -1);
const _hoisted_48 = { class: "transfer-form" };
const _hoisted_49 = { class: "multiselect-single-label" };
const _hoisted_50 = ["src"];
const _hoisted_51 = { class: "select-label-text" };
const _hoisted_52 = ["src"];
const _hoisted_53 = { class: "select-label-text" };
const _hoisted_54 = /* @__PURE__ */ createStaticVNode('<div class="field"><label>\u0645\u0642\u062F\u0627\u0631</label><div class="field has-addons"><div class="control is-expanded"><input class="input" type="number" dir="ltr" placeholder="\u062D\u062C\u0645 \u067E\u0648\u0644"></div><div class="control"><span class="select currency-select"><select><option>\u062A\u0648\u0645\u0627\u0646</option><option>\u062F\u0644\u0627\u0631</option><option>\u06CC\u0648\u0631\u0648</option></select></span></div></div></div><p class="context-text"> \u0645\u0628\u0644\u063A \u0641\u0631\u062F\u0627 \u062F\u0631 \u062D\u0633\u0627\u0628 \u0645\u0642\u0635\u062F \u0642\u0631\u0627\u0631 \u062E\u0648\u0627\u0647\u062F \u06AF\u0631\u0641\u062A. </p>', 2);
const _hoisted_56 = { class: "submit-wrap" };
const _hoisted_57 = /* @__PURE__ */ createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ");
const _hoisted_58 = { class: "column is-12" };
const _hoisted_59 = { class: "dashboard-card is-income" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_GraphDropdown = __unplugin_components_0;
      const _component_VIconBox = _sfc_main$1;
      const _component_VBlock = _sfc_main$2;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$3;
      const _component_VProgress = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_UserPopoverContent = _sfc_main$6;
      const _component_tippy = resolveComponent("tippy");
      const _component_VButton = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _hoisted_5,
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  _hoisted_8,
                  _hoisted_9,
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_GraphDropdown)
                  ])
                ]),
                _hoisted_11,
                createBaseVNode("div", _hoisted_12, [
                  _hoisted_13,
                  _hoisted_14,
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(_component_GraphDropdown)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_16, [
              _hoisted_17,
              createBaseVNode("div", _hoisted_18, [
                createVNode(_component_VBlock, {
                  title: "\u0627\u0631\u0633\u0627\u0644 \u063A\u0630\u0627",
                  subtitle: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0 - \u06F8:\u06F4\u06F6 \u0628.\u0638",
                  center: "",
                  lighter: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "green",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_19
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    _hoisted_20
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u062F\u0631\u0622\u0645\u062F \u0641\u0631\u0648\u0634\u06AF\u0627\u0647",
                  subtitle: "\u06F1\u06F8 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0 - \u06F9:\u06F1\u06F1 \u0635\u0628\u062D",
                  center: "",
                  lighter: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "orange",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_21
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    _hoisted_22
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646",
                  subtitle: "\u06F1\u06F6 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0 - \u06F2:\u06F1\u06F3 \u0628.\u0638",
                  center: "",
                  lighter: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VIconBox, {
                      color: "purple",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    _hoisted_24
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  _hoisted_29,
                  createVNode(_component_VField, { class: "is-image-select has-curved-images" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: unref(selectSlotValue),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(selectSlotValue) ? selectSlotValue.value = $event : null),
                            placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646",
                            label: "name",
                            "max-height": 145,
                            options: unref(selectSlotOptions)
                          }, {
                            singlelabel: withCtx(({ value }) => [
                              createBaseVNode("div", _hoisted_30, [
                                createBaseVNode("img", {
                                  class: "select-label-icon",
                                  src: value.icon,
                                  alt: ""
                                }, null, 8, _hoisted_31),
                                createBaseVNode("span", _hoisted_32, toDisplayString(value.name), 1)
                              ])
                            ]),
                            option: withCtx(({ option }) => [
                              createBaseVNode("img", {
                                class: "select-option-icon",
                                src: option.icon,
                                alt: ""
                              }, null, 8, _hoisted_33),
                              createBaseVNode("span", _hoisted_34, toDisplayString(option.name), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  _hoisted_35
                ]),
                createBaseVNode("div", _hoisted_37, [
                  _hoisted_38,
                  createBaseVNode("div", _hoisted_39, [
                    createVNode(_component_VProgress, {
                      size: "tiny",
                      value: 65
                    })
                  ]),
                  _hoisted_40
                ])
              ]),
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  _hoisted_44,
                  createBaseVNode("div", _hoisted_45, [
                    createBaseVNode("div", _hoisted_46, [
                      createVNode(_component_tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user122
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            color: "warning",
                            initials: "BT",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user18
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: "/demo/avatars/18.jpg",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user123
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            color: "info",
                            initials: "\u062C\u062F",
                            size: "small"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_tippy, {
                        class: "has-help-cursor",
                        interactive: "",
                        offset: [0, 10],
                        placement: "bottom-end"
                      }, {
                        content: withCtx(() => [
                          createVNode(_component_UserPopoverContent, {
                            user: unref(popovers).user7
                          }, null, 8, ["user"])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: "/demo/avatars/7.jpg",
                            size: "small"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _hoisted_47
                  ]),
                  createBaseVNode("div", _hoisted_48, [
                    createVNode(_component_VField, { class: "is-image-select has-curved-images" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: unref(selectSlotValue),
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectSlotValue) ? selectSlotValue.value = $event : null),
                              placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646",
                              label: "name",
                              "max-height": 145,
                              options: unref(selectSlotOptions)
                            }, {
                              singlelabel: withCtx(({ value }) => [
                                createBaseVNode("div", _hoisted_49, [
                                  createBaseVNode("img", {
                                    class: "select-label-icon",
                                    src: value.icon,
                                    alt: ""
                                  }, null, 8, _hoisted_50),
                                  createBaseVNode("span", _hoisted_51, toDisplayString(value.name), 1)
                                ])
                              ]),
                              option: withCtx(({ option }) => [
                                createBaseVNode("img", {
                                  class: "select-option-icon",
                                  src: option.icon,
                                  alt: ""
                                }, null, 8, _hoisted_52),
                                createBaseVNode("span", _hoisted_53, toDisplayString(option.name), 1)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_54,
                    createBaseVNode("div", _hoisted_56, [
                      createVNode(_component_VButton, {
                        color: "primary",
                        size: "big",
                        fullwidth: "",
                        raised: "",
                        bold: ""
                      }, {
                        default: withCtx(() => [
                          _hoisted_57
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_58, [
                createBaseVNode("div", _hoisted_59, [
                  createVNode(_component_VField, { class: "is-minimal-select" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: unref(valueSingle),
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                            options: unref(optionsSingle),
                            placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647",
                            "max-height": 145
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ApexChart), {
                    id: "income-chart",
                    dir: "ltr",
                    height: unref(incomeOptions).chart.height,
                    type: unref(incomeOptions).chart.type,
                    series: unref(incomeOptions).series,
                    options: unref(incomeOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
