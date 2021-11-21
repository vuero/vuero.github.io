import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { g as themeColors, b as _sfc_main$2 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VIconBox.e1985867.js";
import { _ as _sfc_main$4 } from "./VBlock.47e0c633.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, B as createTextVNode, C as createStaticVNode } from "./vendor.9ec557a4.js";
const customersOptions = {
  series: [
    {
      name: "\u0628\u0627\u0632\u06AF\u0634\u062A\u06CC",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "\u062A\u0627\u0632\u0647 \u0648\u0627\u0631\u062F",
      data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
      name: "\u0642\u0637\u0639 \u0647\u0645\u06A9\u0627\u0631\u06CC \u0634\u062F\u0647",
      data: [78, 53, 36, 10, 14, 5, 2]
    }
  ],
  chart: {
    height: 295,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.info, themeColors.green],
  title: {
    text: "\u0645\u0634\u062A\u0631\u06CC\u0627\u0646",
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
      "2020-09-19T00:00:00.000Z",
      "2020-09-20T01:30:00.000Z",
      "2020-09-21T02:30:00.000Z",
      "2020-09-22T03:30:00.000Z",
      "2020-09-23T04:30:00.000Z",
      "2020-09-24T05:30:00.000Z",
      "2020-09-25T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
const teamGaugeOptions = {
  series: [76],
  title: {
    text: "\u0639\u0645\u0644\u06A9\u0631\u062F \u062A\u06CC\u0645",
    align: "right"
  },
  chart: {
    height: 455,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [
    themeColors.accent,
    themeColors.secondary,
    themeColors.orange,
    themeColors.purple,
    themeColors.info
  ],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: "#999",
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: "22px"
        }
      }
    }
  },
  grid: {
    padding: {
      top: 80
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  },
  labels: ["\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u0646\u062A\u0627\u06CC\u062C"]
};
const profitChartOptions = {
  series: [
    {
      name: "Ratio",
      data: [2.3, 3.1, 4, 10.1, 4]
    }
  ],
  chart: {
    height: 265,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top"
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function(val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },
  xaxis: {
    categories: ["\u0628\u0647\u0645\u0646", "\u062F\u06CC", "\u0622\u0630\u0631", "\u0622\u0628\u0627\u0646", "\u0645\u0647\u0631"],
    position: "top",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: true
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function(val) {
        return val + "%";
      }
    }
  },
  colors: [themeColors.green, themeColors.secondary, themeColors.orange],
  title: {
    text: "\u0633\u0648\u062F \u0645\u0627\u0647\u0627\u0646\u0647",
    align: "right"
  }
};
var PersonalDashboardV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v1" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "start" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0632 \u062F\u06CC\u062F\u0627\u0631 \u0645\u062C\u062F\u062F \u0634\u0645\u0627 \u062F\u0631 \u067E\u06CC\u0634\u062E\u0648\u0627\u0646 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u062E\u0648\u062F\u062A\u0627\u0646 \u062E\u0648\u0634 \u0648\u0642\u062A \u0647\u0633\u062A\u06CC\u0645.")
], -1);
const _hoisted_4 = { class: "end" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u0645\u0634\u0627\u0647\u062F\u0647 \u06AF\u0632\u0627\u0631\u0634\u0627\u062A");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0648\u0634\u06AF\u0627\u0647");
const _hoisted_7 = { class: "dashboard-body" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = { class: "dashboard-card" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "\u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u06AF\u0632\u0627\u0631\u0634\u0627\u062A", -1);
const _hoisted_12 = { class: "quick-stats" };
const _hoisted_13 = { class: "quick-stats-inner" };
const _hoisted_14 = { class: "quick-stat" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_16 = { class: "quick-stat" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-handshake"
}, null, -1);
const _hoisted_18 = { class: "quick-stat" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-diamond-alt"
}, null, -1);
const _hoisted_20 = { class: "quick-stat" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bank"
}, null, -1);
const _hoisted_22 = { class: "column is-6" };
const _hoisted_23 = { class: "dashboard-card" };
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<div class="column is-4"><div class="dashboard-card is-upgrade"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><div class="cta-content"><h4>\u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632\u060C \u0631\u0648\u0632 \u062E\u0648\u0628\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0622\u0631\u0632\u0648 \u0645\u06CC\u06A9\u0646\u06CC\u0645.</h4><p class="white-text"> \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0648 \u06A9\u0627\u0645\u0644 \u0645\u0627 \u0628\u0647 \u0645\u0646\u0638\u0648\u0631 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u062E\u0648\u062F \u0628\u0647\u0631\u0647 \u0628\u0628\u0631\u06CC\u062F </p><a class="link inverted-text">\u0628\u06CC\u0634\u062A\u0631 \u0628\u062F\u0627\u0646\u06CC\u062F</a></div></div></div>', 1);
const _hoisted_25 = { class: "column is-4" };
const _hoisted_26 = { class: "dashboard-card is-gauge" };
const _hoisted_27 = { class: "people" };
const _hoisted_28 = { class: "column is-4" };
const _hoisted_29 = { class: "dashboard-card" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VIconBox = _sfc_main$3;
      const _component_VBlock = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VAvatar, {
            picture: "/images/avatars/svg/vuero-1.svg",
            size: "large"
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
                _hoisted_11,
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      createVNode(_component_VBlock, {
                        title: "\u06F2\u06F8\u06F7\u06F0",
                        subtitle: "\u0641\u0631\u0648\u0634 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_VIconBox, {
                            color: "purple",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_15
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      createVNode(_component_VBlock, {
                        title: "\u06F1\u06F3\u06F1",
                        subtitle: "\u06A9\u0627\u0631\u0628\u0631 \u062A\u0627\u0632\u0647 \u0648\u0627\u0631\u062F",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_VIconBox, {
                            color: "orange",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_17
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(_component_VBlock, {
                        title: "\u06F3\u06F0\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
                        subtitle: "\u0641\u0631\u0648\u0634 \u0627\u0645\u0631\u0648\u0632",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
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
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createVNode(_component_VBlock, {
                        title: "\u06F6 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646",
                        subtitle: "\u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_VIconBox, {
                            color: "info",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_21
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("div", _hoisted_23, [
                createVNode(unref(ApexChart), {
                  dir: "ltr",
                  height: unref(customersOptions).chart.height,
                  type: unref(customersOptions).chart.type,
                  series: unref(customersOptions).series,
                  options: unref(customersOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            _hoisted_24,
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createVNode(_component_VAvatar, { picture: "/demo/avatars/21.jpg" }),
                  createVNode(_component_VAvatar, {
                    initials: "SC",
                    color: "h-purple"
                  }),
                  createVNode(_component_VAvatar, { picture: "/demo/avatars/39.jpg" })
                ]),
                createVNode(unref(ApexChart), {
                  dir: "ltr",
                  height: unref(teamGaugeOptions).chart.height,
                  type: unref(teamGaugeOptions).chart.type,
                  series: unref(teamGaugeOptions).series,
                  options: unref(teamGaugeOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            createBaseVNode("div", _hoisted_28, [
              createBaseVNode("div", _hoisted_29, [
                createVNode(unref(ApexChart), {
                  dir: "ltr",
                  height: unref(profitChartOptions).chart.height,
                  type: unref(profitChartOptions).chart.type,
                  series: unref(profitChartOptions).series,
                  options: unref(profitChartOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
