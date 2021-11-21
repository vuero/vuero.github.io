import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, n as normalizeClass, e as createBaseVNode, E as toDisplayString, J as renderList, v as createVNode, G as Fragment, N as createBlock, x as withCtx, t as unref } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$8 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$9 } from "./VTag.ff081b8f.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { s as spark1, a as spark2, b as spark3, c as spark4, r as revenueOptions } from "./revenueAreaChart.b3c913e6.js";
import { g as themeColors } from "./index.4d6c8e1a.js";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget spark-tile-widget", [props.straight && "is-straight"]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$6 = { class: "widget-head" };
const _hoisted_2$6 = { class: "dark-inverted" };
const _hoisted_3$6 = { class: "line-stats" };
const _hoisted_4$6 = { class: "line-stat" };
const _hoisted_5$6 = { class: "current" };
const _hoisted_6$4 = { class: "line-stat" };
const _hoisted_7$3 = { class: "dark-inverted" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "Line stats widget" },
    currentLabel: { type: String, required: false, default: "Current Label" },
    currentValue: { type: String, required: false, default: "75,648,430 \u0645\u06CC\u0644\u06CC\u0648\u0646" },
    previousLabel: { type: String, required: false, default: "Previous Label" },
    previousValue: { type: String, required: false, default: "91,512,180 \u0645\u06CC\u0644\u06CC\u0648\u0646" },
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget line-stats-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$6, [
          createBaseVNode("h3", _hoisted_2$6, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3$6, [
          createBaseVNode("div", _hoisted_4$6, [
            createBaseVNode("span", null, toDisplayString(props.currentLabel), 1),
            createBaseVNode("span", _hoisted_5$6, toDisplayString(props.currentValue), 1)
          ]),
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("span", null, toDisplayString(props.previousLabel), 1),
            createBaseVNode("span", _hoisted_7$3, toDisplayString(props.previousValue), 1)
          ])
        ]),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$5 = { class: "stat-widget flex-stat-widget is-straight" };
const _hoisted_2$5 = { class: "chart-media" };
const _hoisted_3$5 = { class: "meta" };
const _hoisted_4$5 = { class: "dark-inverted" };
const _hoisted_5$5 = { class: "is-dark-primary" };
const _hoisted_6$3 = { class: "chart-container" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0628\u0632\u0627\u0631\u06A9" },
    value: { type: String, required: false, default: "8,641,260" },
    text: { type: String, required: false, default: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A." }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("h4", _hoisted_4$5, toDisplayString(props.title), 1),
            createBaseVNode("span", _hoisted_5$5, toDisplayString(props.value) + " \u062A\u0648\u0645\u0627\u0646", 1),
            createBaseVNode("p", null, toDisplayString(props.text), 1)
          ]),
          createBaseVNode("div", _hoisted_6$3, [
            renderSlot(_ctx.$slots, "default")
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "widget-head" };
const _hoisted_2$4 = { class: "dark-inverted" };
const _hoisted_3$4 = { class: "chart-group" };
const _hoisted_4$4 = { class: "group" };
const _hoisted_5$4 = { class: "group-content" };
const _hoisted_6$2 = { class: "dark-inverted" };
const _hoisted_7$2 = { class: "group" };
const _hoisted_8$2 = { class: "group-content" };
const _hoisted_9$2 = { class: "dark-inverted" };
const _hoisted_10$2 = { class: "group" };
const _hoisted_11$2 = { class: "group-content" };
const _hoisted_12$2 = { class: "dark-inverted" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "Grouped stats widget" },
    values: { type: Array, required: false, default: () => [] },
    labels: { type: Array, required: false, default: () => [] },
    straight: { type: Boolean, required: false },
    gauge: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget grouped-stat-widget is-straight", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("h3", _hoisted_2$4, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3$4, [
          createBaseVNode("div", _hoisted_4$4, [
            createBaseVNode("div", _hoisted_5$4, [
              createBaseVNode("div", {
                class: normalizeClass(["chart-container", [props.gauge && "is-gauge"]])
              }, [
                renderSlot(_ctx.$slots, "chart1")
              ], 2),
              createBaseVNode("span", _hoisted_6$2, toDisplayString(props.values[0]), 1),
              createBaseVNode("p", null, toDisplayString(props.labels[0]), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createBaseVNode("div", _hoisted_8$2, [
              createBaseVNode("div", {
                class: normalizeClass(["chart-container", [props.gauge && "is-gauge"]])
              }, [
                renderSlot(_ctx.$slots, "chart2")
              ], 2),
              createBaseVNode("span", _hoisted_9$2, toDisplayString(props.values[1]), 1),
              createBaseVNode("p", null, toDisplayString(props.labels[1]), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_10$2, [
            createBaseVNode("div", _hoisted_11$2, [
              createBaseVNode("div", {
                class: normalizeClass(["chart-container", [props.gauge && "is-gauge"]])
              }, [
                renderSlot(_ctx.$slots, "chart3")
              ], 2),
              createBaseVNode("span", _hoisted_12$2, toDisplayString(props.values[2]), 1),
              createBaseVNode("p", null, toDisplayString(props.labels[2]), 1)
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$3 = { class: "follow-block" };
const _hoisted_2$3 = { class: "follow-count" };
const _hoisted_3$3 = { class: "dark-inverted" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0631\u0627\u0633\u0627\u0633 \u0622\u0645\u0627\u0631 \u0627\u062E\u06CC\u0631 \u0634\u0645\u0627", -1);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "go-icon"
}, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:chevron-left"
  })
], -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    icon: { type: String, required: true },
    value: { type: String, required: true },
    straight: { type: Boolean, required: false },
    squared: { type: Boolean, required: false },
    colored: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget followers-stat-widget-v1", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", {
            class: normalizeClass(["follow-icon", [props.squared && "is-squared", props.colored && "is-primary"]])
          }, [
            createBaseVNode("i", {
              "aria-hidden": "true",
              class: normalizeClass(props.icon)
            }, null, 2)
          ], 2),
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("span", _hoisted_3$3, toDisplayString(props.value) + " \u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646", 1),
            _hoisted_4$3
          ]),
          _hoisted_5$3
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = { class: "is-media" };
const _hoisted_2$2 = { class: "double-line" };
const _hoisted_3$2 = { class: "dark-inverted" };
const _hoisted_4$2 = { class: "double-line" };
const _hoisted_5$2 = { class: "dark-inverted" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0631\u0622\u0645\u062F \u0645\u0627\u0647\u0627\u0646\u0647", -1);
const _hoisted_7$1 = { class: "avatars" };
const _hoisted_8$1 = { class: "rating-wrap" };
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632", -1);
const _hoisted_10$1 = { class: "rating" };
const _hoisted_11$1 = { class: "tag-wrap" };
const _hoisted_12$1 = { class: "is-end" };
const _hoisted_13$1 = { class: "buttons" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:edit-2"
  })
], -1);
const _hoisted_15$1 = [
  _hoisted_14$1
];
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:eye"
  })
], -1);
const _hoisted_17 = [
  _hoisted_16$1
];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:trash-2"
  })
], -1);
const _hoisted_19 = [
  _hoisted_18
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    rows: { type: Array, required: true },
    squared: { type: Boolean, required: false },
    circled: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$8;
      const _component_VTag = _sfc_main$9;
      return openBlock(true), createElementBlock(Fragment, null, renderList(props.rows, (row) => {
        return openBlock(), createElementBlock("tr", {
          key: row.id
        }, [
          createBaseVNode("td", _hoisted_1$2, [
            createVNode(_component_VAvatar, {
              picture: row.picture,
              initials: row.initials,
              size: "medium",
              color: row.color,
              squared: props.squared
            }, null, 8, ["picture", "initials", "color", "squared"])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("span", _hoisted_3$2, toDisplayString(row.name), 1),
              createBaseVNode("span", null, "\u0639\u0636\u0648 \u0627\u0632 " + toDisplayString(row.membership), 1)
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("span", _hoisted_5$2, toDisplayString(row.income) + " \u062A\u0648\u0645\u0627\u0646", 1),
              _hoisted_6$1
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_7$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row.skills, (skill) => {
                return openBlock(), createBlock(_component_VAvatar, {
                  key: skill.id,
                  picture: skill.icon,
                  size: "small"
                }, null, 8, ["picture"]);
              }), 128))
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_8$1, [
              _hoisted_9$1,
              createBaseVNode("div", _hoisted_10$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(5, (star, index) => {
                  return createBaseVNode("i", {
                    key: index,
                    class: normalizeClass(["fas fa-star", row.rating - index > 0 && "selected"]),
                    "aria-hidden": "true"
                  }, null, 2);
                }), 64))
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_11$1, [
              createVNode(_component_VTag, {
                class: normalizeClass([
                  row.status === "\u062A\u0627\u0626\u06CC\u062F \u0634\u062F\u0647" && "is-green",
                  row.status === "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631" && "is-info",
                  row.status === "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647" && "is-orange"
                ]),
                label: row.status,
                elevated: ""
              }, null, 8, ["class", "label"])
            ])
          ]),
          createBaseVNode("td", _hoisted_12$1, [
            createBaseVNode("div", _hoisted_13$1, [
              createBaseVNode("button", {
                class: normalizeClass(["button is-dark-outlined", [props.circled && "is-circle"]])
              }, _hoisted_15$1, 2),
              createBaseVNode("button", {
                class: normalizeClass(["button is-dark-outlined", [props.circled && "is-circle"]])
              }, _hoisted_17, 2),
              createBaseVNode("button", {
                class: normalizeClass(["button is-dark-outlined", [props.circled && "is-circle"]])
              }, _hoisted_19, 2)
            ])
          ])
        ]);
      }), 128);
    };
  }
});
const _hoisted_1$1 = { class: "widget-head" };
const _hoisted_2$1 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "button v-button is-primary is-elevated" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_5$1 = { class: "table is-hoverable is-fullwidth" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    data: { type: Array, required: true },
    title: { type: String, required: false, default: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0628\u0632\u0627\u0631\u06A9" },
    actionLabel: { type: String, required: false, default: "Add Item" },
    straight: { type: Boolean, required: false },
    squared: { type: Boolean, required: false },
    circled: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_TableWidgetRowMembers = _sfc_main$2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stat-widget table-widget-v1", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("h3", _hoisted_2$1, toDisplayString(props.title), 1),
          createBaseVNode("button", _hoisted_3$1, [
            _hoisted_4$1,
            createBaseVNode("span", null, toDisplayString(props.actionLabel), 1)
          ])
        ]),
        createBaseVNode("table", _hoisted_5$1, [
          createBaseVNode("tbody", null, [
            createVNode(_component_TableWidgetRowMembers, {
              rows: props.data,
              squared: props.squared,
              circled: props.circled
            }, null, 8, ["rows", "squared", "circled"])
          ])
        ])
      ], 2);
    };
  }
});
const lineStatsChartOptions = {
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
  colors: [themeColors.accent],
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
  },
  yaxis: {
    opposite: true
  }
};
const flexRadialChartCircleOptions = {
  series: [65],
  chart: {
    height: 150,
    type: "radialBar",
    offsetX: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.purple],
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
          color: themeColors.purple,
          fontSize: "16px",
          offsetY: 5
        }
      }
    }
  },
  labels: ["\u0631\u0648\u0646\u062F \u06A9\u0627\u0631"]
};
const flexRadialChartStripesOptions = {
  series: [65],
  chart: {
    height: 180,
    type: "radialBar",
    offsetX: -15,
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.info, themeColors.secondary],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "13px",
          fontWeight: "600",
          color: themeColors.lightText,
          show: false
        },
        value: {
          offsetY: 5,
          fontSize: "16px",
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
const widgetRadialGroup1Options = {
  series: [31],
  chart: {
    height: 102,
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
const widgetRadialGroup2Options = {
  series: [53],
  chart: {
    height: 102,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.orange],
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
const widgetRadialGroup3Options = {
  series: [84],
  chart: {
    height: 102,
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
const widgetGaugeGroup1Options = {
  series: [57],
  chart: {
    height: 100,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: "35%"
      },
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
          show: false,
          offsetY: -2,
          fontSize: "22px"
        }
      }
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
const widgetGaugeGroup2Options = {
  series: [36],
  chart: {
    height: 100,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.orange],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: "35%"
      },
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
          show: false,
          offsetY: -2,
          fontSize: "22px"
        }
      }
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
const widgetGaugeGroup3Options = {
  series: [88],
  chart: {
    height: 100,
    type: "radialBar",
    sparkline: {
      enabled: true
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: "35%"
      },
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
          show: false,
          offsetY: -2,
          fontSize: "22px"
        }
      }
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
const memberList = [
  {
    id: 0,
    picture: "/demo/avatars/8.gif",
    name: "\u062A\u06CC\u0646\u0627 \u062F\u0627\u0648\u0648\u062F\u06CC",
    initials: "td",
    color: "info",
    membership: "\u0645\u0647\u0631 1398",
    income: "7,854,320",
    skills: [
      {
        id: 0,
        icon: "/images/icons/stacks/js.svg"
      },
      {
        id: 1,
        icon: "/images/icons/stacks/html5.svg"
      },
      {
        id: 2,
        icon: "/images/icons/stacks/css3.svg"
      }
    ],
    rating: 5,
    status: "\u062A\u0627\u0626\u06CC\u062F \u0634\u062F\u0647"
  },
  {
    id: 1,
    picture: "/demo/avatars/1.gif",
    name: "\u062C\u0627\u0646 \u0648\u06CC\u06A9",
    initials: "jw",
    color: "info",
    membership: "\u0645\u0631\u062F\u0627\u062F 1398",
    income: "5,435,490",
    skills: [
      {
        id: 3,
        icon: "/images/icons/stacks/reactjs.svg"
      },
      {
        id: 4,
        icon: "/images/icons/stacks/nodejs.svg"
      }
    ],
    rating: 4,
    status: "\u062A\u0627\u0626\u06CC\u062F \u0634\u062F\u0647"
  },
  {
    id: 2,
    picture: "/demo/avatars/4.gif",
    name: "\u0633\u0627\u0645\u0627\u0646 \u063A\u0631\u06CC\u0628",
    initials: "sw",
    color: "info",
    membership: "\u062E\u0631\u062F\u0627\u062F 1400",
    income: "824,670",
    skills: [
      {
        id: 5,
        icon: "/images/icons/stacks/csharp.svg"
      },
      {
        id: 6,
        icon: "/images/icons/stacks/android.svg"
      },
      {
        id: 7,
        icon: "/images/icons/stacks/laravel.svg"
      }
    ],
    rating: 5,
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 3,
    picture: void 0,
    name: "\u0644\u06CC\u0644\u0627 \u062C\u0639\u0641\u0631\u06CC",
    initials: "jj",
    color: "info",
    membership: "\u062A\u06CC\u0631 1400",
    income: "261,120",
    skills: [
      {
        id: 8,
        icon: "/images/icons/stacks/illustrator.svg"
      }
    ],
    rating: 3,
    status: "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647"
  },
  {
    id: 4,
    picture: "/demo/avatars/3.gif",
    name: "\u062D\u0633\u0646 \u062D\u06CC\u062F\u0631\u06CC",
    initials: "aj",
    color: "info",
    membership: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1400",
    income: "4,231,670",
    skills: [
      {
        id: 3,
        icon: "/images/icons/stacks/reactjs.svg"
      },
      {
        id: 9,
        icon: "/images/icons/stacks/vuejs.svg"
      }
    ],
    rating: 5,
    status: "\u062A\u0627\u0626\u06CC\u062F \u0634\u062F\u0647"
  }
];
var WidgetsStats_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "columns is-multiline" };
const _hoisted_2 = { class: "column is-3" };
const _hoisted_3 = { class: "column is-3" };
const _hoisted_4 = { class: "column is-3" };
const _hoisted_5 = { class: "column is-3" };
const _hoisted_6 = { class: "column is-6" };
const _hoisted_7 = { class: "column is-6" };
const _hoisted_8 = { class: "column is-6" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = { class: "column is-6" };
const _hoisted_11 = { class: "column is-6" };
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "column is-4" };
const _hoisted_14 = { class: "column is-4" };
const _hoisted_15 = { class: "column is-12" };
const _hoisted_16 = { class: "column is-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_SparkStatWidget = _sfc_main$7;
      const _component_LineStatWidget = _sfc_main$6;
      const _component_FlexStatWidget = _sfc_main$5;
      const _component_GroupedStatWidget = _sfc_main$4;
      const _component_SocialStatWidget = _sfc_main$3;
      const _component_TableWidget = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark1",
                dir: "ltr",
                height: unref(spark1).chart.height,
                type: unref(spark1).chart.type,
                series: unref(spark1).series,
                options: unref(spark1)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark2",
                dir: "ltr",
                height: unref(spark2).chart.height,
                type: unref(spark2).chart.type,
                series: unref(spark2).series,
                options: unref(spark2)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark3",
                dir: "ltr",
                height: unref(spark3).chart.height,
                type: unref(spark3).chart.type,
                series: unref(spark3).series,
                options: unref(spark3)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_SparkStatWidget, { straight: "" }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "widget-spark4",
                dir: "ltr",
                height: unref(spark4).chart.height,
                type: unref(spark4).chart.type,
                series: unref(spark4).series,
                options: unref(spark4)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_LineStatWidget, {
            title: "\u0639\u0627\u06CC\u062F\u06CC",
            "current-label": "\u0627\u06CC\u0646 \u0645\u0627\u0647",
            "current-value": "75,648,430 \u0645\u06CC\u0644\u06CC\u0648\u0646",
            "previous-label": "\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647",
            "previous-value": "91,512,180 \u0645\u06CC\u0644\u06CC\u0648\u0646",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "line-stats-widget-chart",
                dir: "ltr",
                height: unref(lineStatsChartOptions).chart.height,
                type: unref(lineStatsChartOptions).chart.type,
                series: unref(lineStatsChartOptions).series,
                options: unref(lineStatsChartOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_7, [
          createVNode(_component_LineStatWidget, {
            title: "\u0639\u0627\u06CC\u062F\u06CC",
            "current-label": "\u0627\u06CC\u0646 \u0645\u0627\u0647",
            "current-value": "75,648,430 \u0645\u06CC\u0644\u06CC\u0648\u0646",
            "previous-label": "\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647",
            "previous-value": "91,512,180 \u0645\u06CC\u0644\u06CC\u0648\u0646",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "line-stats-area-chart",
                dir: "ltr",
                height: unref(revenueOptions).chart.height,
                type: unref(revenueOptions).chart.type,
                series: unref(revenueOptions).series,
                options: unref(revenueOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_FlexStatWidget, {
            title: "\u062F\u0631\u0622\u0645\u062F \u062D\u0627\u0635\u0644 \u0627\u0632 \u0641\u0631\u0648\u0634 \u0645\u0633\u062A\u0642\u06CC\u0645",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "flex-stat-circle",
                dir: "ltr",
                height: unref(flexRadialChartCircleOptions).chart.height,
                type: unref(flexRadialChartCircleOptions).chart.type,
                series: unref(flexRadialChartCircleOptions).series,
                options: unref(flexRadialChartCircleOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_FlexStatWidget, {
            title: "\u062F\u0631\u0622\u0645\u062F \u062D\u0627\u0635\u0644 \u0627\u0632 \u0641\u0631\u0648\u0634 \u0645\u0633\u062A\u0642\u06CC\u0645",
            straight: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "flex-stat-radial",
                dir: "ltr",
                height: unref(flexRadialChartStripesOptions).chart.height,
                type: unref(flexRadialChartStripesOptions).chart.type,
                series: unref(flexRadialChartStripesOptions).series,
                options: unref(flexRadialChartStripesOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_10, [
          createVNode(_component_GroupedStatWidget, {
            title: "\u0622\u0645\u0627\u0631 \u0628\u06CC\u0634\u062A\u0631",
            values: ["264", "1,203", "3,078"],
            labels: ["\u062A\u062E\u0641\u06CC\u0641\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F", "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F", "\u062A\u062E\u0641\u06CC\u0641\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u06CC\u0627\u0641\u062A\u0647"]
          }, {
            chart1: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-radial-1",
                dir: "ltr",
                height: unref(widgetRadialGroup1Options).chart.height,
                type: unref(widgetRadialGroup1Options).chart.type,
                series: unref(widgetRadialGroup1Options).series,
                options: unref(widgetRadialGroup1Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart2: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-radial-2",
                dir: "ltr",
                height: unref(widgetRadialGroup2Options).chart.height,
                type: unref(widgetRadialGroup2Options).chart.type,
                series: unref(widgetRadialGroup2Options).series,
                options: unref(widgetRadialGroup2Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart3: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-radial-3",
                dir: "ltr",
                height: unref(widgetRadialGroup3Options).chart.height,
                type: unref(widgetRadialGroup3Options).chart.type,
                series: unref(widgetRadialGroup3Options).series,
                options: unref(widgetRadialGroup3Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_GroupedStatWidget, {
            title: "\u0622\u0645\u0627\u0631 \u0628\u06CC\u0634\u062A\u0631",
            values: ["264", "1,203", "3,078"],
            labels: ["\u062A\u062E\u0641\u06CC\u0641\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F", "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F", "\u062A\u062E\u0641\u06CC\u0641\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u06CC\u0627\u0641\u062A\u0647"],
            gauge: ""
          }, {
            chart1: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-gauge-1",
                dir: "ltr",
                height: unref(widgetGaugeGroup1Options).chart.height,
                type: unref(widgetGaugeGroup1Options).chart.type,
                series: unref(widgetGaugeGroup1Options).series,
                options: unref(widgetGaugeGroup1Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart2: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-gauge-2",
                dir: "ltr",
                height: unref(widgetGaugeGroup2Options).chart.height,
                type: unref(widgetGaugeGroup2Options).chart.type,
                series: unref(widgetGaugeGroup2Options).series,
                options: unref(widgetGaugeGroup2Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            chart3: withCtx(() => [
              createVNode(unref(ApexChart), {
                id: "group-gauge-3",
                dir: "ltr",
                height: unref(widgetGaugeGroup3Options).chart.height,
                type: unref(widgetGaugeGroup3Options).chart.type,
                series: unref(widgetGaugeGroup3Options).series,
                options: unref(widgetGaugeGroup3Options)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_12, [
          createVNode(_component_SocialStatWidget, {
            icon: "fab fa-twitter",
            value: "138K",
            straight: ""
          })
        ]),
        createBaseVNode("div", _hoisted_13, [
          createVNode(_component_SocialStatWidget, {
            icon: "fab fa-twitter",
            value: "138K",
            straight: "",
            squared: ""
          })
        ]),
        createBaseVNode("div", _hoisted_14, [
          createVNode(_component_SocialStatWidget, {
            icon: "fab fa-twitter",
            value: "138K",
            straight: "",
            colored: ""
          })
        ]),
        createBaseVNode("div", _hoisted_15, [
          createVNode(_component_TableWidget, {
            title: "\u0627\u0639\u0636\u0627",
            "action-label": "\u0627\u0641\u0632\u0648\u062F\u0646 \u0639\u0636\u0648",
            data: unref(memberList),
            straight: "",
            squared: ""
          }, null, 8, ["data"])
        ]),
        createBaseVNode("div", _hoisted_16, [
          createVNode(_component_TableWidget, {
            title: "\u0627\u0639\u0636\u0627",
            "action-label": "\u0627\u0641\u0632\u0648\u062F\u0646 \u0639\u0636\u0648",
            data: unref(memberList),
            straight: "",
            circled: ""
          }, null, 8, ["data"])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
