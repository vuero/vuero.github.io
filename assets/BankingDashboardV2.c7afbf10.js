import { g as themeColors, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$4 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VIconBox.e1985867.js";
import { _ as _sfc_main$3 } from "./VBlock.47e0c633.js";
import { t as tns } from "./tiny-slider.3c41456c.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { d as defineComponent, r as ref, ab as onMounted, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, A as isRef, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
var _imports_0 = "/images/icons/dashboards/banking/visa-text-white.svg";
var _imports_1 = "/images/icons/dashboards/banking/visa-text-dark.svg";
function generateDayWiseTimeSeries(s, count) {
  const values = [
    [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2]
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
const expensesOptions = {
  chart: {
    type: "area",
    height: 220,
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
  colors: [themeColors.green, themeColors.accent, themeColors.orange],
  stroke: {
    curve: "smooth",
    width: 3
  },
  title: {
    text: "",
    align: "right"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "\u0645\u062E\u0627\u0631\u062C \u0646\u0642\u062F",
      data: generateDayWiseTimeSeries(0, 18)
    },
    {
      name: "\u0645\u062E\u0627\u0631\u062C \u0627\u0632 \u06A9\u0627\u0631\u062A \u0628\u0627\u0646\u06A9\u06CC",
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
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "right"
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};
const valueSingle = 0;
const optionsSingle = [
  "\u062F\u0647 \u0631\u0648\u0632\u06CC \u067E\u06CC\u0634",
  "\u0645\u0627\u0647 \u067E\u06CC\u0634",
  "\u06F3 \u0645\u0627\u0647 \u067E\u06CC\u0634",
  "\u06F6 \u0645\u0627\u0647 \u067E\u06CC\u0634"
];
var BankingDashboardV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "banking-dashboard banking-dashboard-v2" };
const _hoisted_2 = { class: "dashboard-card is-card-panel" };
const _hoisted_3 = { class: "columns is-gapless" };
const _hoisted_4 = { class: "column is-8" };
const _hoisted_5 = { class: "inner-box has-bounds" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "box-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0645\u0646")
], -1);
const _hoisted_7 = { class: "cards-wrapper" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "controls" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button is-large" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon is-medium" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:plus"
      })
    ])
  ])
], -1);
const _hoisted_9 = { class: "cards-carousel" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "active",
      src: _imports_0,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image inactive",
      src: _imports_1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image inactive",
      src: _imports_0,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u06F6,\u06F3\u06F4\u06F1,\u06F1\u06F4\u06F0 \u062A\u0648\u0645\u0627\u0646"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 4986")
  ])
], -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "active",
      src: _imports_0,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image inactive",
      src: _imports_1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image inactive",
      src: _imports_0,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u06F2,\u06F2\u06F1\u06F1,\u06F2\u06F7\u06F0 \u062A\u0648\u0645\u0627\u0646"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 3619")
  ])
], -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "active",
      src: _imports_0,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image inactive",
      src: _imports_1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image inactive",
      src: _imports_0,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u06F1,\u06F2\u06F2\u06F8,\u06F4\u06F9\u06F0 \u062A\u0648\u0645\u0627\u0646"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 5818")
  ])
], -1);
const _hoisted_15 = [
  _hoisted_14
];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "ccard" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "shape" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "top" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "active",
      src: _imports_0,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image inactive",
      src: _imports_1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image inactive",
      src: _imports_0,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "bottom" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u06F3,\u06F4\u06F1\u06F2,\u06F1\u06F6\u06F0 \u062A\u0648\u0645\u0627\u0646"),
    /* @__PURE__ */ createBaseVNode("span", null, "**** **** **** 7652")
  ])
], -1);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = { class: "column is-4" };
const _hoisted_19 = { class: "inner-box" };
const _hoisted_20 = { class: "box-title" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h3", null, "\u0645\u0648\u062C\u0648\u062F\u06CC", -1);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<div class="card-balance-wrap"><div class="card-balance"><span>\u06F6,\u06F3\u06F0\u06F0,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646</span><span>**** **** **** 4986</span></div><div class="card-balance-stats"><div class="card-balance-stat"><div class="stat-title"><span>\u062F\u0631\u06CC\u0627\u0641\u062A</span></div><div class="stat-block"><div class="stat-icon is-up"><i aria-hidden="true" class="iconify scaleX--1" data-icon="feather:arrow-right"></i></div><div class="stat-text"><span>+ \u06F2,\u06F3\u06F2\u06F4 \u062A\u0648\u0645\u0627\u0646</span></div></div></div><div class="card-balance-stat"><div class="stat-title"><span>\u0628\u0631\u062F\u0627\u0634\u062A</span></div><div class="stat-block"><div class="stat-icon is-down"><i aria-hidden="true" class="iconify scaleX--1" data-icon="feather:arrow-right"></i></div><div class="stat-text"><span>- \u06F5\u06F1\u06F8,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646</span></div></div></div></div></div>', 1);
const _hoisted_23 = { class: "dashboard-card is-card-panel is-grey" };
const _hoisted_24 = { class: "columns is-gapless" };
const _hoisted_25 = { class: "column is-8" };
const _hoisted_26 = { class: "inner-box" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "box-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u06AF\u0632\u0627\u0631\u0634 \u0645\u0627\u0647\u0627\u0646\u0647")
], -1);
const _hoisted_28 = { class: "columns" };
const _hoisted_29 = /* @__PURE__ */ createStaticVNode('<div class="column is-4"><div class="monthly-summary-wrap"><div class="monthly-summary"><div class="monthly-summary-item"><span>\u0648\u0627\u0631\u06CC\u0632</span><span class="is-income">+\u06F5,\u06F0\u06F0\u06F0,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646</span></div><div class="monthly-summary-item"><span>\u0628\u0631\u062F\u0627\u0634\u062A</span><span class="is-expense">-\u06F2\u06F0\u06F0,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646</span></div></div></div></div>', 1);
const _hoisted_30 = { class: "column is-8" };
const _hoisted_31 = { class: "chart-wrapper" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0647\u0645\u0647 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627", -1);
const _hoisted_33 = { class: "column is-4" };
const _hoisted_34 = { class: "inner-box" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "box-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_36 = { class: "transactions" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-service"
}, null, -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- \u06F4\u06F1,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "+ \u06F2\u06F6\u06F3,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cart-alt"
}, null, -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "- \u06F9\u06F2,\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646", -1);
const _hoisted_43 = { class: "button-wrap" };
const _hoisted_44 = /* @__PURE__ */ createTextVNode("\u062C\u062F\u06CC\u062F");
const _hoisted_45 = /* @__PURE__ */ createTextVNode("\u062A\u0646\u0638\u06CC\u0645\u0627\u062A");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let slider;
    const sliderElement = ref();
    onMounted(() => {
      if (sliderElement.value) {
        slider = tns({
          container: sliderElement.value,
          controls: false,
          nav: true,
          mouseDrag: true,
          items: 1.9,
          center: false,
          loop: false,
          responsive: {
            320: {
              items: 1.7
            },
            700: {
              items: 1.9
            },
            900: {
              items: 1.9
            }
          }
        });
      }
    });
    const goto = (index) => {
      if (slider) {
        slider.goTo(index);
      }
    };
    return (_ctx, _cache) => {
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VIconBox = _sfc_main$2;
      const _component_VBlock = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                _hoisted_6,
                createBaseVNode("div", _hoisted_7, [
                  _hoisted_8,
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", {
                      ref: (_value, _refs) => {
                        _refs["sliderElement"] = _value;
                        sliderElement.value = _value;
                      },
                      class: "cards-carousel-inner"
                    }, [
                      createBaseVNode("div", {
                        dir: "rtl",
                        class: "cards-carousel-item",
                        onClick: _cache[0] || (_cache[0] = ($event) => goto(0))
                      }, _hoisted_11),
                      createBaseVNode("div", {
                        dir: "rtl",
                        class: "cards-carousel-item",
                        onClick: _cache[1] || (_cache[1] = ($event) => goto(1))
                      }, _hoisted_13),
                      createBaseVNode("div", {
                        dir: "rtl",
                        class: "cards-carousel-item",
                        onClick: _cache[2] || (_cache[2] = ($event) => goto(2))
                      }, _hoisted_15),
                      createBaseVNode("div", {
                        dir: "rtl",
                        class: "cards-carousel-item",
                        onClick: _cache[3] || (_cache[3] = ($event) => goto(3))
                      }, _hoisted_17)
                    ], 512)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  _hoisted_21,
                  createVNode(_component_VField, { class: "is-minimal-select" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: unref(valueSingle),
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(valueSingle) ? valueSingle.value = $event : null),
                            options: unref(optionsSingle),
                            placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647",
                            "max-height": 145
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_22
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                _hoisted_27,
                createBaseVNode("div", _hoisted_28, [
                  _hoisted_29,
                  createBaseVNode("div", _hoisted_30, [
                    createBaseVNode("div", _hoisted_31, [
                      _hoisted_32,
                      createVNode(unref(ApexChart), {
                        id: "timeline-chart",
                        dir: "ltr",
                        height: unref(expensesOptions).chart.height,
                        type: unref(expensesOptions).chart.type,
                        series: unref(expensesOptions).series,
                        options: unref(expensesOptions)
                      }, null, 8, ["height", "type", "series", "options"])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _hoisted_35,
                createBaseVNode("div", _hoisted_36, [
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
                          _hoisted_37
                        ]),
                        _: 1
                      })
                    ]),
                    action: withCtx(() => [
                      _hoisted_38
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
                          _hoisted_39
                        ]),
                        _: 1
                      })
                    ]),
                    action: withCtx(() => [
                      _hoisted_40
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
                          _hoisted_41
                        ]),
                        _: 1
                      })
                    ]),
                    action: withCtx(() => [
                      _hoisted_42
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_43, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    fullwidth: "",
                    elevated: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_44
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, { fullwidth: "" }, {
                    default: withCtx(() => [
                      _hoisted_45
                    ]),
                    _: 1
                  })
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
