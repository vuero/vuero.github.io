import { _ as _sfc_main$8 } from "./UIWidgetToolbarDropdown.92a1dd6c.js";
import { _ as _sfc_main$9 } from "./VBillboardJS.ae6ef8a0.js";
import { _ as _sfc_main$a } from "./UIWidget.2cde634f.js";
import { _ as _sfc_main$b } from "./UIWidgetToolbarFollowers.a6e79b07.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, t as unref, E as toDisplayString, G as Fragment, J as renderList, N as createBlock, r as ref, n as normalizeClass, v as createVNode, x as withCtx, B as createTextVNode } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$6 } from "./VTag.ff081b8f.js";
import { i as iconList, _ as _sfc_main$c } from "./menuList.b8beb818.js";
import { _ as _sfc_main$d } from "./UIWidgetToolbarIcon.bb1978dd.js";
import { _ as _sfc_main$7 } from "./VAvatar.879e77ac.js";
import { n as notifications, _ as _sfc_main$e } from "./notificationList.38da1c50.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.e2e4f134.js";
import { f as followersList } from "./followers.d693ba3c.js";
import { g as themeColors } from "./index.4d6c8e1a.js";
const _hoisted_1$5 = { class: "widget-content" };
const _hoisted_2$5 = ["src"];
const _hoisted_3$3 = { class: "widget-meta" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:play-circle"
}, null, -1);
const _hoisted_5$2 = { class: "views" };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:eye"
}, null, -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "\u06CC\u06A9 \u0641\u06CC\u0644\u0645 \u062E\u0648\u0628 \u0648 \u062E\u0648\u0634 \u0633\u0627\u062E\u062A \u0648 \u067E\u0631 \u0645\u062D\u062A\u0648\u0627" },
    picture: { type: String, required: false, default: "https://via.placeholder.com/400x300" },
    views: { type: String, required: false, default: "" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("img", {
          src: props.picture,
          alt: "",
          onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
        }, null, 40, _hoisted_2$5),
        createBaseVNode("div", _hoisted_3$3, [
          _hoisted_4$2,
          createBaseVNode("h4", null, toDisplayString(props.title), 1),
          createBaseVNode("span", _hoisted_5$2, [
            _hoisted_6$2,
            createBaseVNode("span", null, toDisplayString(props.views), 1)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "widget-content" };
const _hoisted_2$4 = { class: "tags" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    tags: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.tags, (tag) => {
            return openBlock(), createBlock(_component_VTag, {
              key: tag.id,
              color: tag.color,
              curved: "",
              outlined: !tag.popular,
              label: tag.title
            }, null, 8, ["color", "outlined", "label"]);
          }), 128))
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "icon-toolbar" };
const _hoisted_2$3 = ["onClick"];
const _hoisted_3$2 = ["data-icon"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { type: Number, required: false, default: 0 },
    tabs: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const currentTab = ref(props.activeTab);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.tabs, (tab, index) => {
          return openBlock(), createElementBlock("div", {
            key: tab.id,
            class: "toolbar-icon"
          }, [
            createBaseVNode("a", {
              class: normalizeClass(["inner-icon", { "is-active": currentTab.value === index }]),
              onClick: ($event) => currentTab.value = index
            }, [
              createBaseVNode("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": tab.icon
              }, null, 8, _hoisted_3$2)
            ], 10, _hoisted_2$3)
          ]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "calendar-widget-inner" };
const _hoisted_2$2 = { class: "date" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    days: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.days, (day) => {
          return openBlock(), createElementBlock("div", {
            key: day.id,
            class: "calendar-square"
          }, [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("span", null, toDisplayString(day.date), 1),
              createBaseVNode("span", null, toDisplayString(day.name), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "widget-content" };
const _hoisted_2$1 = { class: "sender-block" };
const _hoisted_3$1 = { class: "sender-block-inner" };
const _hoisted_4$1 = { class: "meta" };
const _hoisted_5$1 = { class: "exerpt" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0632 \u0646\u0638\u0631 \u0637\u0631\u0627\u062D\u06CC \u06A9\u062C\u0627 \u0647\u0633\u062A\u06CC\u0645\u061F \u0645\u0627 \u0628\u0627\u06CC\u062F \u0635\u0641\u062D\u0647 \u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0631\u0627 \u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u0645.", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "\u067E\u0631\u0648\u0698\u0647 \u0637\u0631\u0627\u062D\u06CC" },
    user: { type: String, required: false, default: "\u0622\u0644\u06CC\u0633" },
    picture: { type: String, required: false, default: "/demo/avatars/7.jpg" },
    time: { type: String, required: false, default: "28 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(_component_VAvatar, {
              picture: props.picture
            }, null, 8, ["picture"]),
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("span", null, toDisplayString(props.user) + " \u067E\u06CC\u0627\u0645\u06CC \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u062F\u0631 \u0627\u06CC\u0646\u0628\u0627\u06A9\u0633\u062A\u0627\u0646 \u0641\u0631\u0633\u062A\u0627\u062F\u0647 \u0627\u0633\u062A.", 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("h5", null, [
              _hoisted_6$1,
              createBaseVNode("span", null, toDisplayString(props.title), 1)
            ]),
            _hoisted_7$1,
            createBaseVNode("small", null, toDisplayString(props.time), 1)
          ])
        ])
      ]);
    };
  }
});
var _imports_0 = "/demo/photos/widgets/2.jpg";
const tagList1 = [
  {
    id: 0,
    title: "\u0633\u06CC\u0627\u0633\u062A",
    popular: false,
    color: "primary"
  },
  {
    id: 1,
    title: "\u0627\u0642\u062A\u0635\u0627\u062F",
    popular: true,
    color: "primary"
  },
  {
    id: 2,
    title: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
    popular: false,
    color: "primary"
  },
  {
    id: 3,
    title: "\u0645\u062D\u06CC\u0637 \u0632\u06CC\u0633\u062A",
    popular: false,
    color: "primary"
  },
  {
    id: 4,
    title: "\u063A\u0630\u0627",
    popular: false,
    color: "primary"
  },
  {
    id: 5,
    title: "\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC",
    popular: true,
    color: "primary"
  }
];
const tagList2 = [
  {
    id: 0,
    title: "\u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
    popular: false,
    color: "primary"
  },
  {
    id: 1,
    title: "\u062E\u0627\u0646\u0647",
    popular: true,
    color: "primary"
  },
  {
    id: 2,
    title: "\u0633\u0644\u0627\u0645\u062A",
    popular: false,
    color: "primary"
  },
  {
    id: 3,
    title: "\u062A\u062C\u0627\u0631\u06CC",
    popular: false,
    color: "primary"
  },
  {
    id: 4,
    title: "\u0634\u062E\u0635\u06CC",
    popular: false,
    color: "primary"
  },
  {
    id: 5,
    title: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    popular: true,
    color: "primary"
  }
];
const tabs = [
  {
    id: 0,
    icon: "feather:activity"
  },
  {
    id: 1,
    icon: "feather:search"
  },
  {
    id: 2,
    icon: "feather:file-text"
  },
  {
    id: 3,
    icon: "feather:home"
  }
];
const days = [
  {
    id: 0,
    name: "\u062F\u0648\u0634\u0646\u0628\u0647",
    date: "22"
  },
  {
    id: 1,
    name: "\u0633\u0647\u200C\u0634\u0646\u0628\u0647",
    date: "23"
  },
  {
    id: 2,
    name: "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
    date: "24"
  },
  {
    id: 3,
    name: "\u067E\u0646\u062C\u0634\u0646\u0628\u0647",
    date: "25"
  }
];
const trendWidgetChartOptions = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    height: "200px",
    width: "100%",
    type: "line",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.purple, themeColors.orange],
  grid: {
    show: false,
    padding: {
      left: -20,
      right: 0
    }
  },
  padding: {
    bottom: 0,
    left: 0,
    right: 0
  },
  legend: {
    show: false,
    position: "top"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z"
    ],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false,
      offsetX: -40
    }
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
var WidgetsUI_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "columns is-multiline widget-demo-columns" };
const _hoisted_2 = { class: "column is-3" };
const _hoisted_3 = { class: "gauge-wrap" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F")
], -1);
const _hoisted_5 = { class: "widget-content" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u062E\u0628\u0631 \u0639\u0627\u0644\u06CC\u060C ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(", ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u0648 ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u0634\u0645\u0627 \u0631\u0627 \u062F\u0646\u0628\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F. \u062F\u0631 \u0632\u0645\u0627\u0646 \u0645\u0646\u0627\u0633\u0628 \u062D\u062A\u0645\u0627 \u0627\u0632 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0622\u0646\u0647\u0627 \u0628\u0627\u0632\u062F\u06CC\u062F \u06A9\u0646\u06CC\u062F. ");
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "field" }, [
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
    /* @__PURE__ */ createBaseVNode("a", null, "#\u0633\u06CC\u0627\u0633\u062A"),
    /* @__PURE__ */ createBaseVNode("a", null, "#\u0633\u06CC\u0646\u0645\u0627"),
    /* @__PURE__ */ createBaseVNode("a", null, "#\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC")
  ])
], -1);
const _hoisted_11 = { class: "column is-3" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
    /* @__PURE__ */ createBaseVNode("h3", null, "\u062A\u06CC\u0631 \u06F1\u06F4\u06F0\u06F0")
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
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
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
const _hoisted_14 = { class: "column is-3" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" \u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u0645\u0628\u0644\u063A\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0647\u0632\u06CC\u0646\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0645\u06A9\u0631\u0631 \u062E\u0648\u062F \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E "),
    /* @__PURE__ */ createBaseVNode("span", null, "20 \u0622\u0628\u0627\u0646 1400"),
    /* @__PURE__ */ createTextVNode(" \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u062F. ")
  ])
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "progress-wrap" }, [
  /* @__PURE__ */ createBaseVNode("progress", {
    class: "progress is-primary is-tiny",
    max: "100"
  }, " 55% ")
], -1);
const _hoisted_17 = { class: "column is-3" };
const _hoisted_18 = { class: "widget-content" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "stat-number" }, [
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createTextVNode("1,638,420 \u062A\u0648\u0645\u0627\u0646 "),
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify scaleX--1",
        "data-icon": "feather:trending-up"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0631\u0622\u0645\u062F \u062D\u0627\u0635\u0644 \u0627\u0632 \u0641\u0631\u0648\u0634")
  ])
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0628\u06CC\u0634 \u0627\u0632 "),
    /* @__PURE__ */ createBaseVNode("span", null, " 10 \u067E\u06CC\u0627\u0645 \u062E\u0648\u0627\u0646\u062F\u0647 \u0646\u0634\u062F\u0647 "),
    /* @__PURE__ */ createTextVNode(" \u062F\u0631 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC \u062E\u0648\u062F \u062F\u0627\u0631\u06CC\u062F. \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0632\u0645\u0627\u0646 \u062E\u0648\u0628\u06CC \u0628\u0631\u0627\u06CC \u0628\u0631\u0631\u0633\u06CC \u0622\u0646\u0647\u0627 \u0628\u0627\u0634\u062F. ")
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_UIWidgetToolbarDropdown = _sfc_main$8;
      const _component_VBillboardJS = _sfc_main$9;
      const _component_UIWidget = _sfc_main$a;
      const _component_UIWidgetToolbarFollowers = _sfc_main$b;
      const _component_UIWidgetMovie = _sfc_main$5;
      const _component_UIWidgetTagList = _sfc_main$4;
      const _component_UIWidgetToolbarIcons = _sfc_main$3;
      const _component_UIWidgetDays = _sfc_main$2;
      const _component_UIWidgetIconList = _sfc_main$c;
      const _component_UIWidgetToolbarIcon = _sfc_main$d;
      const _component_UIWidgetInboxMessage = _sfc_main$1;
      const _component_UIWidgetNotifications = _sfc_main$e;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_UIWidget, { class: "gauge-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0627\u0628\u0632\u0627\u0631\u06A9 \u0646\u0645\u0648\u062F\u0627\u0631 \u062F\u0627\u06CC\u0631\u0647\u200C\u0627\u06CC" })
            ]),
            body: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_VBillboardJS, {
                  dir: "ltr",
                  class: "gauge-holder",
                  options: unref(personalScoreGaugeOptions),
                  onReady: unref(onPersonalScoreGaugeReady)
                }, null, 8, ["options", "onReady"])
              ]),
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarFollowers, {
                title: "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u062C\u062F\u06CC\u062F",
                avatars: unref(followersList)
              }, null, 8, ["avatars"])
            ]),
            body: withCtx(() => [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("p", null, [
                  _hoisted_6,
                  createBaseVNode("span", null, toDisplayString(unref(followersList)[0].name), 1),
                  _hoisted_7,
                  createBaseVNode("span", null, toDisplayString(unref(followersList)[1].name), 1),
                  _hoisted_8,
                  createBaseVNode("span", null, toDisplayString(unref(followersList)[2].name), 1),
                  _hoisted_9
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "search-widget" }, {
            body: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "video-widget" }, {
            body: withCtx(() => [
              createVNode(_component_UIWidgetMovie, {
                picture: "/demo/photos/widgets/1.jpg",
                views: "38,274"
              })
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "tags-widget" }, {
            body: withCtx(() => [
              createVNode(_component_UIWidgetTagList, { tags: unref(tagList1) }, null, 8, ["tags"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_UIWidget, { class: "icon-toolbar-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcons, { tabs: unref(tabs) }, null, 8, ["tabs"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "calendar-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetDays, { days: unref(days) }, null, 8, ["days"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "picker-widget" }, {
            header: withCtx(() => [
              _hoisted_12
            ]),
            body: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "icon-list-widget" }, {
            body: withCtx(() => [
              createVNode(_component_UIWidgetIconList, { list: unref(iconList) }, null, 8, ["list"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_14, [
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcon, { title: "\u067E\u0631\u062F\u0627\u062E\u062A" })
            ]),
            body: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "image-widget" }, {
            body: withCtx(() => [
              createBaseVNode("img", {
                src: _imports_0,
                alt: "",
                onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
              }, null, 32),
              _hoisted_16
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "inbox-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0627\u06CC\u0646\u0628\u0627\u06A9\u0633" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetInboxMessage)
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_17, [
          createVNode(_component_UIWidget, { class: "tags-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0628\u0631\u0686\u0633\u0628\u200C\u0647\u0627" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetTagList, { tags: unref(tagList2) }, null, 8, ["tags"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "list-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0628\u0631\u0686\u0633\u0628\u200C\u0647\u0627" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetNotifications, { notifications: unref(notifications) }, null, 8, ["notifications"])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "stats-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "" })
            ]),
            body: withCtx(() => [
              createBaseVNode("div", _hoisted_18, [
                _hoisted_19,
                createVNode(unref(ApexChart), {
                  id: "trend-chart",
                  dir: "ltr",
                  class: "stat-chart",
                  height: unref(trendWidgetChartOptions).chart.height,
                  type: unref(trendWidgetChartOptions).chart.type,
                  series: unref(trendWidgetChartOptions).series,
                  options: unref(trendWidgetChartOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcon, {
                title: "\u067E\u06CC\u0627\u0645\u200C\u0647\u0627",
                icon: "feather:message-square"
              })
            ]),
            body: withCtx(() => [
              _hoisted_20
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
