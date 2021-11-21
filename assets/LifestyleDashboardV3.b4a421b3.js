import { _ as _sfc_main$1 } from "./VIconBox.e1985867.js";
import { _ as __unplugin_components_8 } from "./WidgetDropdown.f2919a83.js";
import { _ as _sfc_main$2 } from "./UIWidget.2cde634f.js";
import { _ as _sfc_main$3 } from "./UIWidgetToolbarDropdown.92a1dd6c.js";
import { _ as _sfc_main$4 } from "./VBillboardJS.ae6ef8a0.js";
import { _ as _sfc_main$5 } from "./UIWidgetToolbarFollowers.a6e79b07.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { g as themeColors } from "./index.4d6c8e1a.js";
import { d as asPercent } from "./apex-formatters.f9949b74.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.e2e4f134.js";
import { f as followersList } from "./followers.d693ba3c.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, E as toDisplayString, B as createTextVNode } from "./vendor.9ec557a4.js";
var _imports_0 = "/assets/doctor.aa04a7c3.svg";
function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([baseval, y]);
    baseval += 864e5;
    i++;
  }
  return series;
}
const energyChartOptions = {
  series: [
    {
      name: "\u0645\u0642\u0648\u06CC",
      data: generateDayWiseTimeSeries(new Date("Oct 11 2020 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062A\u0627\u0646\u062A\u0631\u0627",
      data: generateDayWiseTimeSeries(new Date("Oct 11 2020 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "\u062D\u06CC\u0627\u062A\u06CC",
      data: generateDayWiseTimeSeries(new Date("Oct 11 2020 GMT").getTime(), 30, {
        min: 10,
        max: 60
      })
    }
  ],
  chart: {
    height: 280,
    type: "scatter",
    zoom: {
      type: "xy"
    },
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.primary, themeColors.purple],
  dataLabels: {
    enabled: false,
    show: false
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  xaxis: {
    show: false,
    type: "datetime"
  },
  yaxis: {
    show: false,
    max: 70
  },
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "center"
  }
};
const overallChartOptions = {
  series: [
    {
      name: "Condition (pt)",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    type: "area",
    height: 280,
    offsetX: 20,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight"
  },
  colors: [themeColors.primary],
  labels: ["\u0645\u0647\u0631", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u062E\u0631\u062F\u0627\u062F", "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A", "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646"],
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: "left"
  }
};
const oxygenChartOptions = {
  series: [
    {
      name: "\u062A\u063A\u06CC\u06CC\u0631 (pt)",
      data: [23, 26, 10, 7, 11, 18, 16]
    }
  ],
  chart: {
    height: 280,
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
    formatter: asPercent,
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },
  grid: {
    show: false
  },
  xaxis: {
    categories: [
      "\u062C\u0645\u0639\u0647",
      "\u067E\u0646\u062C\u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
      "\u0633\u0647\u200C\u0634\u0646\u0628\u0647",
      "\u062F\u0648\u0634\u0646\u0628\u0647",
      "\u06CC\u06A9\u0634\u0646\u0628\u0647",
      "\u0634\u0646\u0628\u0647"
    ],
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
      formatter: asPercent
    }
  },
  colors: [themeColors.purple]
};
const progressChartOptions = {
  series: [
    {
      name: "\u067E\u06CC\u0634\u0631\u0641\u062A (pt)",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    type: "area",
    height: 280,
    offsetX: 20,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  colors: [themeColors.primary],
  labels: ["\u0645\u0647\u0631", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u062E\u0631\u062F\u0627\u062F", "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A", "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646"],
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: "left"
  }
};
var LifestyleDashboardV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "lifestyle-dashboard lifestyle-dashboard-v3" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "illustration-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "header-image" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "header-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u062E\u0644\u0627\u0635\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0627\u0645\u0631\u0648\u0632"),
    /* @__PURE__ */ createBaseVNode("p", null, "\u0641\u0639\u0627\u0644\u06CC\u062A \u062E\u0648\u062F \u0631\u0627 \u0632\u06CC\u0631 \u0646\u0638\u0631 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F \u0648 \u0646\u0642\u0627\u0637 \u0636\u0639\u0641 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u0628\u062E\u0634\u06CC\u062F."),
    /* @__PURE__ */ createBaseVNode("div", { class: "summary-stats" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "summary-stat" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "900 \u06A9\u06CC\u0644\u0648\u06A9\u0627\u0644\u0631\u06CC"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0645\u0631\u0648\u0632 \u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0634\u062F")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "summary-stat" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "2300 \u06A9\u06CC\u0644\u0648\u06A9\u0627\u0644\u0631\u06CC"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0645\u0631\u0648\u0632 \u0645\u0635\u0631\u0641 \u0634\u062F")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "summary-stat" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "10,864"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0642\u062F\u0645")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "summary-stat" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "2% \u0686\u0631\u0628\u06CC"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0645\u0631\u0648\u0632 \u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0634\u062F")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "summary-stat h-hidden-tablet-p" }, [
        /* @__PURE__ */ createBaseVNode("span", null, "8.4 \u06A9\u06CC\u0644\u0648\u0645\u062A\u0631"),
        /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u06CC\u0645\u0627\u06CC\u0634 \u0627\u0645\u0631\u0648\u0632")
      ])
    ])
  ])
], -1);
const _hoisted_3 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_4 = { class: "column is-3" };
const _hoisted_5 = { class: "health-tile" };
const _hoisted_6 = { class: "tile-head" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-tint"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "114/90"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u06CC\u06CC\u0646/\u0628\u0627\u0644\u0627")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062E\u0648\u0646", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ", -1);
const _hoisted_11 = { class: "column is-3" };
const _hoisted_12 = { class: "health-tile" };
const _hoisted_13 = { class: "tile-head" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-heart"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "112"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0636\u0631\u0628\u0627\u0646 \u062F\u0631 \u062F\u0642\u06CC\u0642\u0647")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0646\u0628\u0636 \u0642\u0644\u0628", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ", -1);
const _hoisted_18 = { class: "column is-3" };
const _hoisted_19 = { class: "health-tile" };
const _hoisted_20 = { class: "tile-head" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-pump-medical"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "12/14"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0627\u062D\u062F")
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0641\u0634\u0627\u0631 \u062E\u0648\u0646", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ", -1);
const _hoisted_25 = { class: "column is-3" };
const _hoisted_26 = { class: "health-tile" };
const _hoisted_27 = { class: "tile-head" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-weight"
}, null, -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h4", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "60.4"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06A9\u06CC\u0644\u0648\u06AF\u0631\u0645")
], -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0648\u0632\u0646", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ", -1);
const _hoisted_32 = { class: "columns is-multiline" };
const _hoisted_33 = { class: "column is-9" };
const _hoisted_34 = { class: "columns is-multiline" };
const _hoisted_35 = { class: "column is-6" };
const _hoisted_36 = { class: "dashboard-card" };
const _hoisted_37 = { class: "card-head" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0627\u0648\u0636\u0627\u0639 \u06A9\u0644\u06CC", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" \u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "\u0628\u062E\u0648\u0627\u06CC\u0646\u062F \u0686\u06AF\u0648\u0646\u0647")
  ])
], -1);
const _hoisted_40 = { class: "column is-6" };
const _hoisted_41 = { class: "dashboard-card" };
const _hoisted_42 = { class: "card-head" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u06AF\u0632\u0627\u0631\u0634 \u0627\u0646\u0631\u0698\u06CC", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" \u0627\u0646\u0631\u0698\u06CC \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F. \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u0628\u062E\u0634\u06CC\u062F. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "\u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647")
  ])
], -1);
const _hoisted_45 = { class: "column is-6" };
const _hoisted_46 = { class: "dashboard-card" };
const _hoisted_47 = { class: "card-head" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0627\u06A9\u0633\u06CC\u0698\u0646 \u0631\u0633\u0627\u0646\u06CC", -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" \u0627\u06A9\u0633\u06CC\u0698\u0646 \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F. \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u0628\u062E\u0634\u06CC\u062F. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "\u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647")
  ])
], -1);
const _hoisted_50 = { class: "column is-6" };
const _hoisted_51 = { class: "dashboard-card" };
const _hoisted_52 = { class: "card-head" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0631\u0648\u0646\u062F \u06A9\u0644\u06CC", -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("div", { class: "chart-meta" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:help-circle"
    }),
    /* @__PURE__ */ createTextVNode(" \u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. "),
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "\u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647")
  ])
], -1);
const _hoisted_55 = { class: "column is-3" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("div", { class: "field" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
    /* @__PURE__ */ createBaseVNode("input", {
      type: "text",
      class: "input",
      placeholder: "\u062C\u0633\u062A\u062C\u0648..."
    }),
    /* @__PURE__ */ createBaseVNode("button", { class: "search-button" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:search"
      })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "topics" }, [
    /* @__PURE__ */ createBaseVNode("a", null, "#\u0633\u0644\u0627\u0645\u062A"),
    /* @__PURE__ */ createBaseVNode("a", null, "#\u062A\u0645\u0631\u06CC\u0646\u0627\u062A_\u0647\u0648\u0627\u0632\u06CC"),
    /* @__PURE__ */ createBaseVNode("a", null, "#\u062A\u063A\u0630\u06CC\u0647")
  ])
], -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
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
const _hoisted_59 = { class: "gauge-wrap" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F")
], -1);
const _hoisted_61 = { class: "widget-content" };
const _hoisted_62 = /* @__PURE__ */ createTextVNode(" \u062E\u0628\u0631 \u0639\u0627\u0644\u06CC\u060C ");
const _hoisted_63 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_64 = /* @__PURE__ */ createTextVNode(" \u0648 ");
const _hoisted_65 = /* @__PURE__ */ createTextVNode(" \u0627\u06A9\u0646\u0648\u0646 \u0628\u0627 \u0634\u0645\u0627 \u062F\u0648\u0633\u062A \u0647\u0633\u062A\u0646\u062F. \u062F\u0631 \u0632\u0645\u0627\u0646 \u0645\u0646\u0627\u0633\u0628 \u062D\u062A\u0645\u0627 \u0627\u0632 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0622\u0646\u0647\u0627 \u0628\u0627\u0632\u062F\u06CC\u062F \u06A9\u0646\u06CC\u062F. ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$1;
      const _component_WidgetDropdown = __unplugin_components_8;
      const _component_UIWidget = _sfc_main$2;
      const _component_UIWidgetToolbarDropdown = _sfc_main$3;
      const _component_VBillboardJS = _sfc_main$4;
      const _component_UIWidgetToolbarFollowers = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }),
                _hoisted_8
              ]),
              _hoisted_9,
              _hoisted_10
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_14
                  ]),
                  _: 1
                }),
                _hoisted_15
              ]),
              _hoisted_16,
              _hoisted_17
            ])
          ]),
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_21
                  ]),
                  _: 1
                }),
                _hoisted_22
              ]),
              _hoisted_23,
              _hoisted_24
            ])
          ]),
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createVNode(_component_VIconBox, { color: "primary" }, {
                  default: withCtx(() => [
                    _hoisted_28
                  ]),
                  _: 1
                }),
                _hoisted_29
              ]),
              _hoisted_30,
              _hoisted_31
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_32, [
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("div", _hoisted_37, [
                    _hoisted_38,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_39,
                  createVNode(unref(ApexChart), {
                    id: "overall-chart",
                    dir: "ltr",
                    height: unref(overallChartOptions).chart.height,
                    type: unref(overallChartOptions).chart.type,
                    series: unref(overallChartOptions).series,
                    options: unref(overallChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  createBaseVNode("div", _hoisted_42, [
                    _hoisted_43,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_44,
                  createVNode(unref(ApexChart), {
                    id: "energy-chart",
                    dir: "ltr",
                    height: unref(energyChartOptions).chart.height,
                    type: unref(energyChartOptions).chart.type,
                    series: unref(energyChartOptions).series,
                    options: unref(energyChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    _hoisted_48,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_49,
                  createVNode(unref(ApexChart), {
                    id: "overall-chart",
                    dir: "ltr",
                    height: unref(oxygenChartOptions).chart.height,
                    type: unref(oxygenChartOptions).chart.type,
                    series: unref(oxygenChartOptions).series,
                    options: unref(oxygenChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ]),
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("div", _hoisted_52, [
                    _hoisted_53,
                    createVNode(_component_WidgetDropdown)
                  ]),
                  _hoisted_54,
                  createVNode(unref(ApexChart), {
                    id: "progress-chart",
                    dir: "ltr",
                    height: unref(progressChartOptions).chart.height,
                    type: unref(progressChartOptions).chart.type,
                    series: unref(progressChartOptions).series,
                    options: unref(progressChartOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_55, [
            createVNode(_component_UIWidget, { class: "search-widget" }, {
              body: withCtx(() => [
                _hoisted_56
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, { class: "picker-widget" }, {
              header: withCtx(() => [
                _hoisted_57
              ]),
              body: withCtx(() => [
                _hoisted_58
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, { class: "gauge-widget" }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0627\u0628\u0632\u0627\u0631\u06A9 \u0646\u0645\u0648\u062F\u0627\u0631 \u062F\u0627\u06CC\u0631\u0647\u200C\u0627\u06CC" })
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_59, [
                  createVNode(_component_VBillboardJS, {
                    dir: "ltr",
                    class: "gauge-holder",
                    options: unref(personalScoreGaugeOptions),
                    onReady: unref(onPersonalScoreGaugeReady)
                  }, null, 8, ["options", "onReady"])
                ]),
                _hoisted_60
              ]),
              _: 1
            }),
            createVNode(_component_UIWidget, { class: "text-widget" }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarFollowers, {
                  title: "\u062F\u0648\u0633\u062A\u0627\u0646 \u062C\u062F\u06CC\u062F",
                  avatars: unref(followersList)
                }, null, 8, ["avatars"])
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_61, [
                  createBaseVNode("p", null, [
                    _hoisted_62,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[0].name), 1),
                    _hoisted_63,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[1].name), 1),
                    _hoisted_64,
                    createBaseVNode("span", null, toDisplayString(unref(followersList)[2].name), 1),
                    _hoisted_65
                  ])
                ])
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
