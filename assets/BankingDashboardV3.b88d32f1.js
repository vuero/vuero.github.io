import { _ as _sfc_main$1 } from "./VAction.3f8056c0.js";
import { _ as _sfc_main$2 } from "./VAvatar.879e77ac.js";
import { _ as __unplugin_components_0 } from "./GraphDropdown.bd15ab94.js";
import { _ as _sfc_main$3 } from "./VBlock.47e0c633.js";
import { g as themeColors, b as _sfc_main$4 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$5 } from "./UserPopoverContent.8933a73e.js";
import { _ as _sfc_main$6 } from "./VIconButton.809a4ce6.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
import { d as defineComponent, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, B as createTextVNode, C as createStaticVNode } from "./vendor.9ec557a4.js";
function generateDayWiseTimeSeries(s, count) {
  const values = [
    [
      0.4,
      0.3,
      1,
      0.9,
      2.9,
      1.9,
      2.5,
      0.9,
      1.2,
      0.7,
      1.9,
      0.5,
      1.3,
      0.9,
      1.7,
      0.2,
      0.7,
      0.5
    ],
    [
      0.2,
      0.3,
      0.8,
      0.7,
      2.2,
      1.6,
      2.3,
      0.7,
      1.1,
      0.5,
      1.2,
      0.5,
      1,
      0.4,
      1.5,
      0.2,
      0.6,
      2
    ]
  ];
  let i = 0;
  const series = [];
  let x = new Date("11 Nov 2020").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 864e5;
    i++;
  }
  return series;
}
const bitcoinChartOptions = {
  chart: {
    type: "area",
    height: 350,
    foreColor: "#999",
    stacked: true,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06
    }
  },
  colors: [themeColors.green, themeColors.accent, themeColors.green],
  stroke: {
    curve: "smooth",
    width: 3
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A \u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646",
    align: "right"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "\u0645\u0648\u0631\u062F \u0627\u0646\u062A\u0638\u0627\u0631",
      data: generateDayWiseTimeSeries(0, 18)
    },
    {
      name: "\u062D\u0627\u0635\u0644 \u0634\u062F\u0647",
      data: generateDayWiseTimeSeries(1, 18)
    }
  ],
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6
    }
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: -5
    },
    tooltip: {
      enabled: true
    },
    opposite: true
  },
  grid: {
    show: false,
    padding: {
      left: 5,
      right: -5
    }
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy"
    },
    y: {
      formatter: function(val) {
        return val + "%";
      }
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "center"
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};
const evolutionRadialOptions = {
  series: [54],
  chart: {
    height: 220,
    type: "radialBar"
  },
  colors: [themeColors.accent, themeColors.orange, themeColors.orange],
  title: {
    text: "\u0627\u0646\u0642\u0644\u0627\u0628 \u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646",
    align: "right"
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 15,
          fontSize: "13px",
          fontFamily: "Roboto, sans-serif",
          color: themeColors.lightText,
          formatter: function() {
            return ["(30 \u0631\u0648\u0632)"];
          }
        },
        value: {
          color: themeColors.accent,
          offsetY: -20,
          fontSize: "16px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500"
        }
      }
    }
  },
  labels: ["\u062A\u0631\u0627\u0632 \u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646"]
};
const popularityGaugeOptions = {
  series: [67],
  title: {
    text: "\u0645\u062D\u0628\u0648\u0628\u06CC\u062A \u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646",
    align: "right"
  },
  chart: {
    height: 225,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green, themeColors.secondary],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "13px",
          fontWeight: "600",
          color: themeColors.lightText,
          offsetY: 80
        },
        value: {
          offsetY: 40,
          fontSize: "18px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "500",
          color: void 0,
          formatter: function(val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ["(30 \u0631\u0648\u0632)"]
};
var BankingDashboardV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "banking-dashboard banking-dashboard-v3" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A \u0644\u062D\u0638\u0647\u200C\u0627\u06CC \u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646"),
  /* @__PURE__ */ createBaseVNode("div", { class: "currency" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "amount is-positive dark-inverted" }, "\u06F5\u06F0\u06F5\u06F8\u06F4 \u062F\u0644\u0627\u0631")
  ])
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u0633\u0627\u0639\u062A");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u0631\u0648\u0632");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u0647\u0641\u062A\u0647");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u0645\u0627\u0647");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u0633\u0627\u0644");
const _hoisted_11 = { class: "columns" };
const _hoisted_12 = { class: "column is-8" };
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<div class="dashboard-tiles"><div class="dashboard-tile"><span>\u062D\u062C\u0645 \u0628\u0627\u0632\u0627\u0631</span><span class="dark-inverted">\u06F1\u06F2\u06F9,\u06F9\u06F9\u06F2,\u06F2\u06F6\u06F8,\u06F0\u06F9\u06F0 \u062F\u0644\u0627\u0631</span></div><div class="dashboard-tile"><span>\u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u06F2\u06F4 \u0633\u0627\u0639\u062A \u06AF\u0630\u0634\u062A\u0647</span><span class="dark-inverted">\u06F4\u06F5\u06F3,\u06F1\u06F7\u06F8,\u06F0\u06F0\u06F0 \u062F\u0644\u0627\u0631</span></div><div class="dashboard-tile"><span>\u0646\u0648\u0633\u0627\u0646\u0627\u062A \u06F2\u06F4 \u0633\u0627\u0639\u062A\u0647 \u06AF\u0630\u0634\u062A\u0647</span><span class="dark-inverted">\u06F5\u06F0,\u06F2\u06F1\u06F2 \u062F\u0644\u0627\u0631 - \u06F5\u06F0,\u06F5\u06F8\u06F4 \u062F\u0644\u0627\u0631</span></div></div>', 1);
const _hoisted_14 = { class: "dashboard-card" };
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-6" };
const _hoisted_17 = { class: "dashboard-card" };
const _hoisted_18 = { class: "column is-6" };
const _hoisted_19 = { class: "dashboard-card" };
const _hoisted_20 = { class: "column is-4" };
const _hoisted_21 = { class: "dashboard-card is-side" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "currency-description" }, [
  /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 \u06CC\u06A9 \u0631\u0645\u0632\u0627\u0631\u0632 \u0648 \u06CC\u06A9 \u0646\u0638\u0627\u0645 \u067E\u0631\u062F\u0627\u062E\u062A \u062C\u0647\u0627\u0646\u06CC \u0628\u0627 \u06A9\u0627\u0631\u06A9\u0631\u062F\u0647\u0627\u06CC \u0645\u0634\u0627\u0628\u0647 \u067E\u0648\u0644 \u0628\u062F\u0648\u0646 \u067E\u0634\u062A\u0648\u0627\u0646\u0647 \u0627\u0633\u062A. \u0627\u0632 \u0646\u0638\u0631 \u0641\u0646\u06CC \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 \u0646\u062E\u0633\u062A\u06CC\u0646 \u067E\u0648\u0644 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0646\u0627\u0645\u062A\u0645\u0631\u06A9\u0632 \u0627\u0633\u062A\u060C \u0686\u0631\u0627 \u06A9\u0647 \u0628\u062F\u0648\u0646 \u0628\u0627\u0646\u06A9 \u0645\u0631\u06A9\u0632\u06CC \u06CC\u0627 \u0645\u0633\u0626\u0648\u0644 \u0645\u0631\u06A9\u0632\u06CC \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F. \u0627\u06CC\u0646 \u0634\u0628\u06A9\u0647 \u0647\u0645\u062A\u0627\u0628\u0647\u200C\u0647\u0645\u062A\u0627 \u0627\u0633\u062A \u0648 \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0631\u0627 \u0645\u0633\u062A\u0642\u06CC\u0645\u0627\u064B \u0648 \u0628\u062F\u0648\u0646 \u0648\u0627\u0633\u0637\u0647 \u0645\u06CC\u0627\u0646 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u062F\u0647\u062F. \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0645\u062D\u0628\u0648\u0628\u06CC\u062A \u0628\u0627\u0644\u0627\u06CC \u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646 \u0628\u0631\u062E\u06CC \u0628\u0647 \u0622\u0646 \u0644\u0642\u0628 \u067E\u0627\u062F\u0634\u0627\u0647 \u0631\u0645\u0632\u0627\u0631\u0632\u0647\u0627 \u0631\u0627 \u062F\u0627\u062F\u0647\u200C\u0627\u0646\u062F. \u0627\u06A9\u0646\u0648\u0646 \u0627\u0644\u0633\u0627\u0644\u0648\u0627\u062F\u0648\u0631 \u0646\u062E\u0633\u062A\u06CC\u0646 \u0648 \u062A\u0646\u0647\u0627 \u06A9\u0634\u0648\u0631\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646 \u0631\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u067E\u0648\u0644 \u0631\u0633\u0645\u06CC \u067E\u0630\u06CC\u0631\u0641\u062A\u0647\u200C\u0627\u0633\u062A. ")
], -1);
const _hoisted_23 = { class: "button-wrap" };
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u062E\u0631\u06CC\u062F \u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u0645\u0642\u0627\u06CC\u0633\u0647");
const _hoisted_26 = { class: "dashboard-card is-side" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "subheading-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "subheading dark-inverted" }, "\u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "action-link"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_28 = { class: "people" };
const _hoisted_29 = { class: "dashboard-card is-side" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "subheading-wrap" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "subheading dark-inverted" }, "\u0627\u0631\u0632\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "action-link"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAction = _sfc_main$1;
      const _component_VAvatar = _sfc_main$2;
      const _component_GraphDropdown = __unplugin_components_0;
      const _component_VBlock = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_UserPopoverContent = _sfc_main$5;
      const _component_tippy = resolveComponent("tippy");
      const _component_VIconButton = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }),
              createVNode(_component_VAction, {
                dark: "3",
                active: ""
              }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              }),
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              }),
              createVNode(_component_VAction, { dark: "3" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            _hoisted_13,
            createBaseVNode("div", _hoisted_14, [
              createVNode(unref(ApexChart), {
                id: "currency-chart",
                dir: "ltr",
                height: unref(bitcoinChartOptions).chart.height,
                type: unref(bitcoinChartOptions).chart.type,
                series: unref(bitcoinChartOptions).series,
                options: unref(bitcoinChartOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(unref(ApexChart), {
                    id: "radial-chart",
                    dir: "ltr",
                    height: unref(evolutionRadialOptions).chart.height,
                    type: unref(evolutionRadialOptions).chart.type,
                    series: unref(evolutionRadialOptions).series,
                    options: unref(evolutionRadialOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createVNode(unref(ApexChart), {
                    id: "radial-gauge",
                    dir: "ltr",
                    height: unref(popularityGaugeOptions).chart.height,
                    type: unref(popularityGaugeOptions).chart.type,
                    series: unref(popularityGaugeOptions).series,
                    options: unref(popularityGaugeOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              createVNode(_component_VBlock, {
                title: "\u0628\u06CC\u062A \u06A9\u0648\u06CC\u0646",
                subtitle: "BTC",
                center: "",
                "m-responsive": ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "/images/icons/cryptocurrencies/btc.svg" })
                ]),
                action: withCtx(() => [
                  createVNode(_component_GraphDropdown)
                ]),
                _: 1
              }),
              _hoisted_22,
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_VButton, {
                  color: "primary",
                  elevated: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_24
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, { "dark-outlined": "" }, {
                  default: withCtx(() => [
                    _hoisted_25
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_26, [
              _hoisted_27,
              createBaseVNode("div", _hoisted_28, [
                createVNode(_component_tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user21
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "/demo/avatars/21.jpg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user120
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      initials: "SC",
                      color: "h-purple"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user7
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "/demo/avatars/7.jpg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user124
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      initials: "AT",
                      color: "success"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_tippy, {
                  class: "has-help-cursor",
                  interactive: "",
                  offset: [0, 40],
                  placement: "top-end"
                }, {
                  content: withCtx(() => [
                    createVNode(_component_UserPopoverContent, {
                      user: unref(popovers).user31
                    }, null, 8, ["user"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_VAvatar, { picture: "/demo/avatars/31.jpg" })
                  ]),
                  _: 1
                }),
                createVNode(_component_VAvatar, {
                  initials: "50K",
                  color: "h-yellow"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_29, [
              _hoisted_30,
              createVNode(_component_VBlock, {
                title: "\u0645\u0648\u0646\u0631\u0648",
                subtitle: "XMR",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/xmr.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VBlock, {
                title: "\u0644\u0627\u06CC\u062A \u06A9\u0648\u06CC\u0646",
                subtitle: "LTC",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/ltc.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VBlock, {
                title: "\u0686\u06CC\u0646 \u0644\u06CC\u0646\u06A9",
                subtitle: "LINK",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/link.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VBlock, {
                title: "\u0628\u0627\u06CC\u0646\u0646\u0633",
                subtitle: "BNB",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, {
                    picture: "/images/icons/cryptocurrencies/bnb.svg",
                    size: "small"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_VIconButton, {
                    icon: "feather:plus",
                    circle: "",
                    "dark-outlined": ""
                  })
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
