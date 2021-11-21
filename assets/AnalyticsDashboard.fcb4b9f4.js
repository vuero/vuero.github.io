import { _ as _sfc_main$1 } from "./VIconBox.e1985867.js";
import { _ as _sfc_main$2 } from "./VProgress.21a77a58.js";
import { _ as _sfc_main$3 } from "./ContactWidget.5dbccff2.js";
import { _ as _sfc_main$4 } from "./UIWidget.2cde634f.js";
import { _ as _sfc_main$5 } from "./UIWidgetToolbarFollowers.a6e79b07.js";
import { _ as _sfc_main$6 } from "./UIWidgetToolbarDropdown.92a1dd6c.js";
import { n as notifications, _ as _sfc_main$7 } from "./notificationList.38da1c50.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { g as themeColors } from "./index.4d6c8e1a.js";
import { f as followersList } from "./followers.d693ba3c.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, E as toDisplayString, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
const revenueOptions = {
  series: [
    {
      name: "\u0639\u0627\u06CC\u062F\u06CC",
      data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
    }
  ],
  chart: {
    height: 250,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"],
      opacity: 0.5
    }
  },
  yaxis: {
    opposite: true
  },
  xaxis: {
    categories: [
      "\u0627\u0633\u0641\u0646\u062F",
      "\u0628\u0647\u0645\u0646",
      "\u062F\u06CC",
      "\u0622\u0630\u0631",
      "\u0622\u0628\u0627\u0646",
      "\u0645\u0647\u0631",
      "\u0634\u0647\u0631\u06CC\u0648\u0631",
      "\u0645\u0631\u062F\u0627\u062F",
      "\u062A\u06CC\u0631"
    ]
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$" + val;
      }
    }
  }
};
const gaugeOptions = {
  series: [57, 86],
  chart: {
    height: 220,
    type: "radialBar",
    offsetY: -10,
    defaultLocale: "fa"
  },
  colors: [themeColors.accent, themeColors.green],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      inverseOrder: true,
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: "14px",
          fontWeight: 500,
          offsetY: -10
        },
        value: {
          show: true,
          fontWeight: 600,
          color: themeColors.lightText,
          fontSize: "16px",
          offsetY: -5
        },
        total: {
          show: true,
          fontSize: "14px",
          fontWeight: 500,
          color: themeColors.lightText
        }
      },
      hollow: {
        margin: 15,
        size: "75%"
      },
      track: {
        strokeWidth: "100%"
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["\u0645\u0648\u062B\u0631 \u0628\u0648\u062F\u0646", "\u0628\u0627\u0632\u062F\u0647 \u062F\u0627\u0634\u062A\u0646"]
};
const series = [
  {
    name: "\u0633\u0648\u062F\u062F\u0647\u06CC \u0627\u062E\u06CC\u0631",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  },
  {
    name: "\u0639\u0627\u06CC\u062F\u06CC",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  },
  {
    name: "\u0646\u0642\u062F\u06CC\u0646\u06AF\u06CC",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }
].map((s) => {
  return {
    name: s.name,
    data: s.data.map((d) => {
      return d - 70;
    })
  };
});
const barOptions = {
  chart: {
    height: 250,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.purple, themeColors.green],
  legend: {
    position: "top"
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "55%"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  series,
  xaxis: {
    categories: [
      "\u0627\u0633\u0641\u0646\u062F",
      "\u0628\u0647\u0645\u0646",
      "\u062F\u06CC",
      "\u0622\u0630\u0631",
      "\u0622\u0628\u0627\u0646",
      "\u0645\u0647\u0631",
      "\u0634\u0647\u0631\u06CC\u0648\u0631",
      "\u0645\u0631\u062F\u0627\u062F",
      "\u062A\u06CC\u0631"
    ]
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return val + 70;
      }
    },
    opposite: true
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return val + 70;
      }
    }
  }
};
const optionsCircle = {
  series: [65],
  chart: {
    height: 160,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "75%"
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: "14px",
          fontWeight: 500,
          offsetY: -10,
          color: themeColors.lightText
        },
        value: {
          show: true,
          fontWeight: 600,
          color: themeColors.purple,
          fontSize: "16px",
          offsetY: -5
        }
      }
    }
  },
  labels: ["\u0631\u0634\u062F"]
};
var AnalyticsDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "finance-dashboard analytics-dashboard" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-9" };
const _hoisted_4 = { class: "columns is-multiline" };
const _hoisted_5 = { class: "column is-4" };
const _hoisted_6 = { class: "dashboard-tile" };
const _hoisted_7 = { class: "tile-head" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-gem"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<div class="tile-body"><span class="dark-inverted">8,637</span></div><div class="tile-foot"><span class="text-h-green">+\u06F6/\u06F4\u062F\u0631\u0635\u062F <i aria-hidden="true" class="iconify scaleX--1" data-icon="feather:trending-up"></i></span><span>\u0627\u0632 \u0645\u0627\u0647 \u067E\u06CC\u0634</span></div>', 2);
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "dashboard-tile" };
const _hoisted_14 = { class: "tile-head" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0645\u0634\u062A\u0631\u06A9\u06CC\u0646", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-user-plus"
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<div class="tile-body"><span class="dark-inverted">1,378</span></div><div class="tile-foot"><span class="text-h-red">-\u06F2/\u06F1\u062F\u0631\u0635\u062F <i aria-hidden="true" class="iconify scaleX--1" data-icon="feather:trending-down"></i></span><span>\u0631\u0634\u062F \u0645\u0646\u0641\u06CC</span></div>', 2);
const _hoisted_19 = { class: "column is-4" };
const _hoisted_20 = { class: "dashboard-tile" };
const _hoisted_21 = { class: "tile-head" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0627\u0631\u062C\u0627\u0639\u0627\u062A", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-bullhorn"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<div class="tile-body"><span class="dark-inverted">1,911</span></div><div class="tile-foot"><span class="text-h-green">+\u06F4/\u06F2\u062F\u0631\u0635\u062F <i aria-hidden="true" class="iconify scaleX--1" data-icon="feather:trending-up"></i></span><span>\u0631\u0634\u062F \u0645\u062B\u0628\u062A</span></div>', 2);
const _hoisted_26 = { class: "column is-8" };
const _hoisted_27 = { class: "dashboard-card" };
const _hoisted_28 = /* @__PURE__ */ createStaticVNode('<div class="card-head"><h3 class="dark-inverted">\u0639\u0627\u06CC\u062F\u06CC</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>\u0627\u06CC\u0646 \u0645\u0627\u0647</span><span class="current">\u06F7\u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646</span></div><div class="revenue-stat"><span>\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647</span><span class="dark-inverted">\u06F9\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646</span></div></div>', 2);
const _hoisted_30 = { class: "column is-4" };
const _hoisted_31 = { class: "dashboard-card" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0686\u0634\u0645 \u0627\u0646\u062F\u0627\u0632 \u0647\u062F\u0641")
], -1);
const _hoisted_33 = { class: "radial-wrap" };
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<div class="radial-stats is-dark-bordered-12"><div class="radial-stat is-dark-bordered-12"><span>\u0627\u062A\u0645\u0627\u0645 \u06CC\u0627\u0641\u062A\u0647</span><span class="dark-inverted">1,223</span></div><div class="radial-stat"><span>\u062F\u0631\u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645</span><span class="dark-inverted">467</span></div></div>', 1);
const _hoisted_35 = { class: "column is-4" };
const _hoisted_36 = { class: "dashboard-card" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062D\u0631\u0627\u062C\u06CC")
], -1);
const _hoisted_38 = { class: "progress-block" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "value" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u06F7\u06F8\u062F\u0631\u0635\u062F")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "progress-foot" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-h-green" }, [
    /* @__PURE__ */ createTextVNode("+\u06F6/\u06F4\u062F\u0631\u0635\u062F "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify scaleX--1",
      "data-icon": "feather:trending-up"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0632 \u0645\u0627\u0647 \u067E\u06CC\u0634")
], -1);
const _hoisted_41 = { class: "column is-8" };
const _hoisted_42 = { class: "dashboard-card" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0645\u0646\u0641\u0639\u062A")
], -1);
const _hoisted_44 = { class: "column is-3" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
  /* @__PURE__ */ createBaseVNode("thead", null, [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "\u0634\u0646\u0628\u0647"),
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
const _hoisted_47 = { class: "widget-content" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" \u062E\u0628\u0631 \u0639\u0627\u0644\u06CC\u060C ");
const _hoisted_49 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_50 = /* @__PURE__ */ createTextVNode(" \u0648 ");
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" \u0634\u0645\u0627 \u0631\u0627 \u062F\u0646\u0628\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F. \u062F\u0631 \u0632\u0645\u0627\u0646 \u0645\u0646\u0627\u0633\u0628 \u062D\u062A\u0645\u0627 \u0627\u0632 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0622\u0646\u0647\u0627 \u0628\u0627\u0632\u062F\u06CC\u062F \u06A9\u0646\u06CC\u062F. ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$1;
      const _component_VProgress = _sfc_main$2;
      const _component_ContactWidget = _sfc_main$3;
      const _component_UIWidget = _sfc_main$4;
      const _component_UIWidgetToolbarFollowers = _sfc_main$5;
      const _component_UIWidgetToolbarDropdown = _sfc_main$6;
      const _component_UIWidgetNotifications = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    createVNode(_component_VIconBox, {
                      color: "primary",
                      size: "small",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_9
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_10
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    _hoisted_15,
                    createVNode(_component_VIconBox, {
                      color: "orange",
                      size: "small",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_16
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_17
                ])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    _hoisted_22,
                    createVNode(_component_VIconBox, {
                      color: "green",
                      size: "small",
                      rounded: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_23
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_24
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  _hoisted_28,
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
              createBaseVNode("div", _hoisted_30, [
                createBaseVNode("div", _hoisted_31, [
                  _hoisted_32,
                  createBaseVNode("div", _hoisted_33, [
                    createVNode(unref(ApexChart), {
                      id: "goal-gauge",
                      dir: "ltr",
                      height: unref(gaugeOptions).chart.height,
                      type: unref(gaugeOptions).chart.type,
                      series: unref(gaugeOptions).series,
                      options: unref(gaugeOptions)
                    }, null, 8, ["height", "type", "series", "options"]),
                    _hoisted_34
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  _hoisted_37,
                  createBaseVNode("div", _hoisted_38, [
                    _hoisted_39,
                    createVNode(_component_VProgress, {
                      size: "tiny",
                      value: 78
                    }),
                    _hoisted_40,
                    createVNode(unref(ApexChart), {
                      id: "radial-circle",
                      dir: "ltr",
                      class: "circle-chart-wrapper",
                      height: unref(optionsCircle).chart.height,
                      type: unref(optionsCircle).chart.type,
                      series: unref(optionsCircle).series,
                      options: unref(optionsCircle)
                    }, null, 8, ["height", "type", "series", "options"])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_41, [
                createBaseVNode("div", _hoisted_42, [
                  _hoisted_43,
                  createVNode(unref(ApexChart), {
                    id: "profit-chart",
                    dir: "ltr",
                    height: unref(barOptions).chart.height,
                    type: unref(barOptions).chart.type,
                    series: unref(barOptions).series,
                    options: unref(barOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_44, [
            createVNode(_component_ContactWidget, {
              picture: "/images/avatars/svg/vuero-1.svg",
              username: "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
              email: "jamal@email.io",
              company: "\u0634\u0631\u06A9\u062A \u062A\u0639\u0627\u0648\u0646\u06CC \u0628\u0631\u0627\u062F\u0631\u0627\u0646 \u062E\u0627\u0634\u0642\u0686\u06CC",
              position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
              location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
              phone: "\u06F0\u06F0\u06F1-\u06F4\u06F4\u06F4-\u06F5\u06F1\u06F5\u06F6",
              squared: "",
              reversed: "",
              straight: ""
            }),
            createVNode(_component_UIWidget, {
              class: "picker-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                _hoisted_45
              ]),
              body: withCtx(() => [
                _hoisted_46
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, {
              class: "text-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarFollowers, {
                  title: "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u062C\u062F\u06CC\u062F",
                  avatars: unref(followersList)
                }, null, 8, ["avatars"])
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("p", null, [
                    _hoisted_48,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[0].name), 1),
                    _hoisted_49,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[1].name), 1),
                    _hoisted_50,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[2].name), 1),
                    _hoisted_51
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, {
              class: "list-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0627\u0639\u0644\u0627\u0646\u0627\u062A" })
              ]),
              body: withCtx(() => [
                createVNode(_component_UIWidgetNotifications, { notifications: unref(notifications) }, null, 8, ["notifications"])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
