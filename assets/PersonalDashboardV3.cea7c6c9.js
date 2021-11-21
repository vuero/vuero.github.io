import { i as gauge, _ as _sfc_main$1 } from "./VBillboardJS.ae6ef8a0.js";
import { g as themeColors, b as _sfc_main$2 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VIconBox.e1985867.js";
import { _ as _sfc_main$4 } from "./VBlock.47e0c633.js";
import { _ as _sfc_main$5 } from "./VAvatarStack.8507ceb8.js";
import { _ as _sfc_main$6 } from "./UIWidget.2cde634f.js";
import { _ as _sfc_main$7 } from "./VAvatar.879e77ac.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { r as ref, d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, t as unref, x as withCtx, B as createTextVNode } from "./vendor.9ec557a4.js";
var _imports_0 = "/assets/interviews.374f4830.svg";
const interviewsOptions = {
  series: [
    {
      name: "\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ],
  chart: {
    height: 200,
    type: "area",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.info, themeColors.orange],
  title: {
    text: "\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627",
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
const progressGaugeOptions = ref({
  data: {
    columns: [["data", 91.4]],
    type: gauge()
  },
  gauge: {
    label: {
      extents: () => ""
    }
  },
  color: {
    pattern: [
      themeColors.accent,
      themeColors.info,
      themeColors.orange,
      themeColors.green
    ],
    threshold: {
      values: [30, 60, 90, 100]
    }
  },
  size: {
    height: 90,
    width: 90
  },
  padding: {
    bottom: 0
  },
  legend: {
    show: false,
    position: "inset"
  }
});
const onprogressGaugeReady = (billboard) => {
  setTimeout(function() {
    billboard.load({
      columns: [["data", 10]]
    });
  }, 1e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 50]]
    });
  }, 2e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 70]]
    });
  }, 3e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 0]]
    });
  }, 4e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 100]]
    });
  }, 5e3);
};
const userStack = [
  {
    id: 5,
    picture: "/demo/avatars/5.jpg",
    initials: "\u062C\u062E",
    color: "info"
  },
  {
    id: 18,
    picture: "/demo/avatars/18.jpg",
    initials: "\u062C\u062E",
    color: "warning"
  },
  {
    id: 26,
    initials: "\u062C\u062E",
    color: "h-purple"
  },
  {
    id: 100,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 101,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 101,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 102,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 103,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 104,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 105,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 106,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 107,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 108,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 109,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 110,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 111,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 112,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 113,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 114,
    picture: void 0,
    initials: "SC",
    color: "success"
  },
  {
    id: 115,
    picture: void 0,
    initials: "SC",
    color: "success"
  }
];
var PersonalDashboardV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v3" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-8" };
const _hoisted_4 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = { class: "dashboard-card is-welcome" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "welcome-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0633\u0644\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632"),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0634\u0645\u0627 \u06F6 \u0642\u0631\u0627\u0631 \u0645\u0635\u0627\u062D\u0628\u0647 \u062F\u06CC\u06AF\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0631\u0648\u0646\u062F \u06A9\u0627\u0631\u06CC \u0634\u0645\u0627 \u0628\u06CC\u200C\u0646\u0638\u06CC\u0631\u0647\u060C \u0647\u0645\u06CC\u0646\u0637\u0648\u0631 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647. ")
], -1);
const _hoisted_8 = { class: "welcome-progress" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0631\u0648\u0646\u062F \u06A9\u0627\u0631\u06CC \u0634\u0645\u0627"),
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, [
    /* @__PURE__ */ createTextVNode("\u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647 \u0627\u0633\u062A "),
    /* @__PURE__ */ createBaseVNode("span", {
      role: "img",
      "aria-label": "Party Popper"
    }, "\u{1F389}")
  ])
], -1);
const _hoisted_10 = { class: "button-wrap" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0628\u0631\u0646\u0627\u0645\u0647 ");
const _hoisted_12 = { class: "column is-6" };
const _hoisted_13 = { class: "stats-wrapper" };
const _hoisted_14 = { class: "columns is-multiline is-flex-tablet-p" };
const _hoisted_15 = { class: "column is-6" };
const _hoisted_16 = { class: "dashboard-card" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_18 = { class: "column is-6" };
const _hoisted_19 = { class: "dashboard-card" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:radio"
}, null, -1);
const _hoisted_21 = { class: "column is-6" };
const _hoisted_22 = { class: "dashboard-card" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:user-check"
}, null, -1);
const _hoisted_24 = { class: "column is-6" };
const _hoisted_25 = { class: "dashboard-card" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:frown"
}, null, -1);
const _hoisted_27 = { class: "people" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u06A9\u0644 \u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "\u06F2\u06F3 \u0645\u0635\u0627\u062D\u0628\u0647"),
    /* @__PURE__ */ createTextVNode(" \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647")
  ])
], -1);
const _hoisted_29 = { class: "right" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 h-hidden-mobile h-hidden-tablet-p" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: ""
  })
], -1);
const _hoisted_31 = { class: "column is-6" };
const _hoisted_32 = { class: "dashboard-card" };
const _hoisted_33 = { class: "column is-4" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
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
const _hoisted_36 = {
  href: "#",
  class: "dashboard-card is-interview"
};
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_38 = {
  href: "#",
  class: "dashboard-card is-interview"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_40 = {
  href: "#",
  class: "dashboard-card is-interview"
};
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStack$1 = userStack;
    return (_ctx, _cache) => {
      const _component_VBillboardJS = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VIconBox = _sfc_main$3;
      const _component_VBlock = _sfc_main$4;
      const _component_VAvatarStack = _sfc_main$5;
      const _component_UIWidget = _sfc_main$6;
      const _component_VAvatar = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_VBillboardJS, {
                      dir: "ltr",
                      options: unref(progressGaugeOptions),
                      onReady: unref(onprogressGaugeReady)
                    }, null, 8, ["options", "onReady"]),
                    _hoisted_9
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_VButton, {
                      color: "primary",
                      size: "big",
                      fullwidth: "",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(_component_VBlock, {
                          title: "\u06F6\u06F2 \u0647\u0632\u0627\u0631",
                          subtitle: "\u062F\u0642\u06CC\u0642\u0647",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "info",
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
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("div", _hoisted_19, [
                        createVNode(_component_VBlock, {
                          title: "\u06F2\u06F6\u06F3",
                          subtitle: "\u0645\u0635\u0627\u062D\u0628\u0647",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "purple",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_20
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(_component_VBlock, {
                          title: "\u06F4\u06F9",
                          subtitle: "\u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "green",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_23
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(_component_VBlock, {
                          title: "\u06F2\u06F1\u06F4",
                          subtitle: "\u0631\u062F \u0634\u062F\u0647",
                          center: ""
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_VIconBox, {
                              color: "orange",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_26
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_27, [
                    _hoisted_28,
                    createBaseVNode("div", _hoisted_29, [
                      createVNode(_component_VAvatarStack, {
                        avatars: unref(userStack$1),
                        limit: 3
                      }, null, 8, ["avatars"])
                    ])
                  ])
                ])
              ]),
              _hoisted_30,
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  createVNode(unref(ApexChart), {
                    id: "interviews-chart",
                    dir: "ltr",
                    height: unref(interviewsOptions).chart.height,
                    type: unref(interviewsOptions).chart.type,
                    series: unref(interviewsOptions).series,
                    options: unref(interviewsOptions)
                  }, null, 8, ["height", "type", "series", "options"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_33, [
            createVNode(_component_UIWidget, { class: "picker-widget" }, {
              header: withCtx(() => [
                _hoisted_34
              ]),
              body: withCtx(() => [
                _hoisted_35
              ]),
              _: 1
            }),
            createBaseVNode("a", _hoisted_36, [
              createVNode(_component_VBlock, {
                title: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u062C\u0627\u0628\u0632",
                subtitle: "\u06F0\u06F8:\u06F0\u06F0 - \u06F0\u06F9:\u06F0\u06F0",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "/demo/avatars/32.jpg" })
                ]),
                action: withCtx(() => [
                  _hoisted_37
                ]),
                _: 1
              })
            ]),
            createBaseVNode("a", _hoisted_38, [
              createVNode(_component_VBlock, {
                title: "\u0644\u0631\u06CC \u067E\u06CC\u062C",
                subtitle: "\u06F1\u06F0:\u06F3\u06F0 - \u06F1\u06F1:\u06F0\u06F0",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "/demo/avatars/19.jpg" })
                ]),
                action: withCtx(() => [
                  _hoisted_39
                ]),
                _: 1
              })
            ]),
            createBaseVNode("a", _hoisted_40, [
              createVNode(_component_VBlock, {
                title: "\u0622\u0631\u0646\u0648\u0644\u062F \u0627\u06CC\u0646\u0634\u062A\u06CC\u0646",
                subtitle: "\u06F0\u06F2:\u06F3\u06F0 - \u06F0\u06F3:\u06F0\u06F0",
                center: ""
              }, {
                icon: withCtx(() => [
                  createVNode(_component_VAvatar, { picture: "/demo/avatars/12.jpg" })
                ]),
                action: withCtx(() => [
                  _hoisted_41
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
