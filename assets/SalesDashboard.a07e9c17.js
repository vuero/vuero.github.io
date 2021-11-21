import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { g as themeColors, b as _sfc_main$2 } from "./index.4d6c8e1a.js";
import { _ as __unplugin_components_8 } from "./WidgetDropdown.f2919a83.js";
import { _ as _sfc_main$3 } from "./VBillboardJS.ae6ef8a0.js";
import { _ as _sfc_main$4 } from "./UIWidget.2cde634f.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { s as spark1, a as spark2, b as spark3, c as spark4, r as revenueOptions } from "./revenueAreaChart.b3c913e6.js";
import { a5 as reactive, d as defineComponent, ab as onMounted, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, B as createTextVNode, C as createStaticVNode } from "./vendor.9ec557a4.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.e2e4f134.js";
const salesRevenuesRadialOptions = {
  series: [65],
  chart: {
    height: 155,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.info],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "75%"
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
          fontSize: "12px",
          fontWeight: 400,
          offsetY: 5,
          color: themeColors.lightText
        },
        value: {
          show: true,
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
          color: themeColors.info,
          fontSize: "16px",
          offsetY: 5
        }
      }
    }
  },
  labels: ["\u067E\u06CC\u0634\u0631\u0641\u062A"]
};
const radialGroup1Options = {
  series: [31],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.info],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const radialGroup2Options = {
  series: [53],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.purple],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const radialGroup3Options = {
  series: [84],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const barData = [
  {
    x: "\u0627\u0633\u0641\u0646\u062F",
    y: 322
  },
  {
    x: "\u0628\u0647\u0645\u0646",
    y: 459
  },
  {
    x: "\u062F\u06CC",
    y: 212
  },
  {
    x: "\u0622\u0630\u0631",
    y: 345
  },
  {
    x: "\u0622\u0628\u0627\u0646",
    y: 111
  },
  {
    x: "\u0645\u0647\u0631",
    y: 189
  },
  {
    x: "\u0634\u0647\u0631\u06CC\u0648\u0631",
    y: 498
  },
  {
    x: "\u0645\u0631\u062F\u0627\u062F",
    y: 612
  },
  {
    x: "\u062A\u06CC\u0631",
    y: 451
  },
  {
    x: "\u062E\u0631\u062F\u0627\u062F",
    y: 248
  },
  {
    x: "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
    y: 306
  },
  {
    x: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",
    y: 366
  }
];
const barData2 = [
  {
    x: "\u0627\u0633\u0641\u0646\u062F",
    y: 25
  },
  {
    x: "\u0628\u0647\u0645\u0646",
    y: 49
  },
  {
    x: "\u062F\u06CC",
    y: 36
  },
  {
    x: "\u0622\u0630\u0631",
    y: 84
  },
  {
    x: "\u0622\u0628\u0627\u0646",
    y: 64
  },
  {
    x: "\u0645\u0647\u0631",
    y: 131
  },
  {
    x: "\u0634\u0647\u0631\u06CC\u0648\u0631",
    y: 48
  },
  {
    x: "\u0645\u0631\u062F\u0627\u062F",
    y: 144
  },
  {
    x: "\u062A\u06CC\u0631",
    y: 96
  },
  {
    x: "\u062E\u0631\u062F\u0627\u062F",
    y: 11
  },
  {
    x: "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
    y: 31
  },
  {
    x: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",
    y: 8
  }
];
const salesBarOptions = reactive({
  series: [],
  chart: {
    height: 205,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.green],
  dataLabels: {
    enabled: false
  },
  noData: {
    text: "\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC..."
  },
  yaxis: {
    opposite: true
  },
  xaxis: {
    type: "category",
    tickPlacement: "on",
    labels: {
      rotate: -45,
      rotateAlways: true
    }
  }
});
var SalesDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "finance-dashboard sales-dashboard" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "start" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0632 \u062F\u06CC\u062F\u0627\u0631 \u0645\u062C\u062F\u062F \u0634\u0645\u0627 \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0646\u0644 \u062E\u0648\u0634 \u0648\u0642\u062A \u0647\u0633\u062A\u06CC\u0645.")
], -1);
const _hoisted_4 = { class: "end" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u0645\u0634\u0627\u0647\u062F\u0647 \u06AF\u0632\u0627\u0631\u0634\u0627\u062A");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627");
const _hoisted_7 = { class: "spark-tiles" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-3" };
const _hoisted_10 = { class: "spark-tile" };
const _hoisted_11 = { class: "column is-3" };
const _hoisted_12 = { class: "spark-tile" };
const _hoisted_13 = { class: "column is-3" };
const _hoisted_14 = { class: "spark-tile" };
const _hoisted_15 = { class: "column is-3" };
const _hoisted_16 = { class: "spark-tile" };
const _hoisted_17 = { class: "column is-7" };
const _hoisted_18 = { class: "dashboard-card" };
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<div class="card-head"><h3 class="dark-inverted">\u062F\u06CC\u062F \u06A9\u0644\u06CC \u0628\u0631 \u062F\u0631\u0622\u0645\u062F</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>\u0627\u06CC\u0646 \u0645\u0627\u0647</span><span class="current">\u06F7\u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646</span></div><div class="revenue-stat"><span>\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647</span><span class="dark-inverted">\u06F9\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646</span></div><div class="revenue-stat"><span>\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647</span><span class="dark-inverted">\u06F9\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646</span></div></div>', 2);
const _hoisted_21 = { class: "column is-5" };
const _hoisted_22 = { class: "dashboard-card flex-chart" };
const _hoisted_23 = { class: "chart-media" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "\u062F\u0631\u0622\u0645\u062F \u062D\u0627\u0635\u0644 \u0627\u0632 \u0641\u0631\u0648\u0634 \u0645\u0633\u062A\u0642\u06CC\u0645"),
  /* @__PURE__ */ createBaseVNode("span", { class: "is-dark-primary" }, "\u06F8 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u0648 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0631\u0627\u0633\u0627\u0633 \u06AF\u0632\u0627\u0631\u0634\u0627\u062A \u062F\u0631\u0622\u0645\u062F \u062D\u0627\u0635\u0644 \u0627\u0632 \u0641\u0631\u0648\u0634 \u0645\u0633\u062A\u0642\u06CC\u0645 \u0645\u0627 \u06F6\u06F5 \u062F\u0631\u0635\u062F \u06A9\u0644 \u0641\u0631\u0648\u0634 \u0645\u0627 \u0631\u0627 \u0634\u0627\u0645\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0646\u0633\u0628\u062A \u0628\u0647 \u0645\u0627\u0647 \u0642\u0628\u0644 \u0631\u0634\u062F \u06F2\u06F0 \u062F\u0631\u0635\u062F\u06CC \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F. ")
], -1);
const _hoisted_25 = { class: "chart-container" };
const _hoisted_26 = { class: "dashboard-card flex-chart" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0622\u0645\u0627\u0631 \u0628\u06CC\u0634\u062A\u0631")
], -1);
const _hoisted_28 = { class: "chart-group" };
const _hoisted_29 = { class: "group" };
const _hoisted_30 = { class: "group-content" };
const _hoisted_31 = { class: "chart-container" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "264", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, "\u062A\u062E\u0641\u06CC\u0641\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F", -1);
const _hoisted_34 = { class: "group" };
const _hoisted_35 = { class: "group-content" };
const _hoisted_36 = { class: "chart-container" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "1,203", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F", -1);
const _hoisted_39 = { class: "group" };
const _hoisted_40 = { class: "group-content" };
const _hoisted_41 = { class: "chart-container" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "3,078", -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", null, "\u062A\u062E\u0641\u06CC\u0641\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u06CC\u0627\u0641\u062A\u0647", -1);
const _hoisted_44 = { class: "column is-3" };
const _hoisted_45 = { class: "widget gauge-widget is-straight" };
const _hoisted_46 = { class: "widget-toolbar" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "is-bigger" }, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC \u0634\u0645\u0627")
], -1);
const _hoisted_48 = { class: "right" };
const _hoisted_49 = { class: "gauge-wrap" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("div", {
  id: "gauge-holder",
  class: "gauge-holder"
}, null, -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F")
], -1);
const _hoisted_52 = { class: "column is-6" };
const _hoisted_53 = { class: "dashboard-card" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u06AF\u0632\u0627\u0631\u0634 \u062E\u0644\u0627\u0635\u0647 \u0627\u0632 \u0633\u0641\u0627\u0631\u0634\u200C\u0647\u0627")
], -1);
const _hoisted_55 = { class: "column is-3" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-right"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "center" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:chevron-left"
      })
    ])
  ])
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0634\u0646\u06CC\u0647"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u06CC"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u062F"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0633"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0686"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u067E"),
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u062C\u0645\u0639\u0647")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("tbody", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "29"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "30"),
      /* @__PURE__ */ createBaseVNode("td", { class: "prev-month" }, "31"),
      /* @__PURE__ */ createBaseVNode("td", null, "1"),
      /* @__PURE__ */ createBaseVNode("td", null, "2"),
      /* @__PURE__ */ createBaseVNode("td", null, "3"),
      /* @__PURE__ */ createBaseVNode("td", null, "4")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "5"),
      /* @__PURE__ */ createBaseVNode("td", null, "6"),
      /* @__PURE__ */ createBaseVNode("td", null, "7"),
      /* @__PURE__ */ createBaseVNode("td", null, "8"),
      /* @__PURE__ */ createBaseVNode("td", null, "9"),
      /* @__PURE__ */ createBaseVNode("td", null, "10"),
      /* @__PURE__ */ createBaseVNode("td", null, "11")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "12"),
      /* @__PURE__ */ createBaseVNode("td", null, "13"),
      /* @__PURE__ */ createBaseVNode("td", null, "14"),
      /* @__PURE__ */ createBaseVNode("td", null, "15"),
      /* @__PURE__ */ createBaseVNode("td", null, "16"),
      /* @__PURE__ */ createBaseVNode("td", null, "17"),
      /* @__PURE__ */ createBaseVNode("td", { class: "current-day" }, "18")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "19"),
      /* @__PURE__ */ createBaseVNode("td", null, "20"),
      /* @__PURE__ */ createBaseVNode("td", null, "21"),
      /* @__PURE__ */ createBaseVNode("td", null, "22"),
      /* @__PURE__ */ createBaseVNode("td", null, "23"),
      /* @__PURE__ */ createBaseVNode("td", null, "24"),
      /* @__PURE__ */ createBaseVNode("td", null, "25")
    ]),
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("td", null, "26"),
      /* @__PURE__ */ createBaseVNode("td", null, "27"),
      /* @__PURE__ */ createBaseVNode("td", null, "28"),
      /* @__PURE__ */ createBaseVNode("td", null, "29"),
      /* @__PURE__ */ createBaseVNode("td", null, "30"),
      /* @__PURE__ */ createBaseVNode("td", null, "31"),
      /* @__PURE__ */ createBaseVNode("td", { class: "next-month" }, "1")
    ])
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    onMounted(() => {
      setTimeout(() => {
        salesBarOptions.series = [
          {
            name: "\u0633\u0641\u0627\u0631\u0634\u0627\u062A",
            data: barData
          }
        ];
      }, 1e3);
      setTimeout(() => {
        salesBarOptions.series = [
          ...salesBarOptions.series,
          {
            name: "\u0645\u0645\u0646\u0648\u0639 \u0634\u062F\u0647",
            data: barData2
          }
        ];
      }, 2500);
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_WidgetDropdown = __unplugin_components_8;
      const _component_VBillboardJS = _sfc_main$3;
      const _component_UIWidget = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VAvatar, {
            size: "large",
            picture: "/images/avatars/svg/vuero-1.svg"
          }),
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VButton, { dark: "3" }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(unref(ApexChart), {
                  id: "spark1",
                  dir: "ltr",
                  height: unref(spark1).chart.height,
                  type: unref(spark1).chart.type,
                  series: unref(spark1).series,
                  options: unref(spark1)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(unref(ApexChart), {
                  id: "spark2",
                  dir: "ltr",
                  height: unref(spark2).chart.height,
                  type: unref(spark2).chart.type,
                  series: unref(spark2).series,
                  options: unref(spark2)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(unref(ApexChart), {
                  id: "spark3",
                  dir: "ltr",
                  height: unref(spark3).chart.height,
                  type: unref(spark3).chart.type,
                  series: unref(spark3).series,
                  options: unref(spark3)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createVNode(unref(ApexChart), {
                  id: "spark4",
                  dir: "ltr",
                  height: unref(spark4).chart.height,
                  type: unref(spark4).chart.type,
                  series: unref(spark4).series,
                  options: unref(spark4)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
                createVNode(unref(ApexChart), {
                  id: "revenue-chart",
                  dir: "ltr",
                  height: unref(revenueOptions).chart.height,
                  type: unref(revenueOptions).chart.type,
                  series: unref(revenueOptions).series,
                  options: unref(revenueOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("div", _hoisted_23, [
                  _hoisted_24,
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(unref(ApexChart), {
                      id: "radial-circle",
                      dir: "ltr",
                      height: unref(salesRevenuesRadialOptions).chart.height,
                      type: unref(salesRevenuesRadialOptions).chart.type,
                      series: unref(salesRevenuesRadialOptions).series,
                      options: unref(salesRevenuesRadialOptions)
                    }, null, 8, ["height", "type", "series", "options"])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                _hoisted_27,
                createBaseVNode("div", _hoisted_28, [
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("div", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createVNode(unref(ApexChart), {
                          id: "group-radial-1",
                          dir: "ltr",
                          height: unref(radialGroup1Options).chart.height,
                          type: unref(radialGroup1Options).chart.type,
                          series: unref(radialGroup1Options).series,
                          options: unref(radialGroup1Options)
                        }, null, 8, ["height", "type", "series", "options"])
                      ]),
                      _hoisted_32,
                      _hoisted_33
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_34, [
                    createBaseVNode("div", _hoisted_35, [
                      createBaseVNode("div", _hoisted_36, [
                        createVNode(unref(ApexChart), {
                          id: "group-radial-2",
                          dir: "ltr",
                          height: unref(radialGroup2Options).chart.height,
                          type: unref(radialGroup2Options).chart.type,
                          series: unref(radialGroup2Options).series,
                          options: unref(radialGroup2Options)
                        }, null, 8, ["height", "type", "series", "options"])
                      ]),
                      _hoisted_37,
                      _hoisted_38
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("div", _hoisted_40, [
                      createBaseVNode("div", _hoisted_41, [
                        createVNode(unref(ApexChart), {
                          id: "group-radial-3",
                          dir: "ltr",
                          height: unref(radialGroup3Options).chart.height,
                          type: unref(radialGroup3Options).chart.type,
                          series: unref(radialGroup3Options).series,
                          options: unref(radialGroup3Options)
                        }, null, 8, ["height", "type", "series", "options"])
                      ]),
                      _hoisted_42,
                      _hoisted_43
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_44, [
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", _hoisted_46, [
                  _hoisted_47,
                  createBaseVNode("div", _hoisted_48, [
                    createVNode(_component_WidgetDropdown)
                  ])
                ]),
                createBaseVNode("div", _hoisted_49, [
                  _hoisted_50,
                  createVNode(_component_VBillboardJS, {
                    dir: "ltr",
                    options: unref(personalScoreGaugeOptions),
                    onReady: unref(onPersonalScoreGaugeReady)
                  }, null, 8, ["options", "onReady"])
                ]),
                _hoisted_51
              ])
            ]),
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("div", _hoisted_53, [
                _hoisted_54,
                createVNode(unref(ApexChart), {
                  id: "bar-chart",
                  dir: "ltr",
                  height: unref(salesBarOptions).chart.height,
                  type: unref(salesBarOptions).chart.type,
                  series: unref(salesBarOptions).series,
                  options: unref(salesBarOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_55, [
              createVNode(_component_UIWidget, {
                class: "picker-widget",
                straight: ""
              }, {
                header: withCtx(() => [
                  _hoisted_56
                ]),
                body: withCtx(() => [
                  _hoisted_57
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
