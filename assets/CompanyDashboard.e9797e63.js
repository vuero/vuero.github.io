import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$2 } from "./VSimpleDatatables.bde9b4a7.js";
import { _ as _sfc_main$3 } from "./UIWidgetToolbarDropdown.92a1dd6c.js";
import { _ as _sfc_main$4 } from "./VBillboardJS.ae6ef8a0.js";
import { _ as _sfc_main$5 } from "./UIWidget.2cde634f.js";
import { _ as _sfc_main$6 } from "./UserPopoverContent.8933a73e.js";
import { g as themeColors, b as _sfc_main$7 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$8 } from "./VBlock.47e0c633.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { a5 as reactive, Z as useI18n, d as defineComponent, ab as onMounted, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
import { p as personalScoreGaugeOptions, o as onPersonalScoreGaugeReady } from "./personalScoreGauge.e2e4f134.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
const sharingOptions = {
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30, 35, 41, 36, 26]
    }
  ],
  chart: {
    height: 180,
    type: "bar",
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors.accent, themeColors.primary, themeColors.info],
  plotOptions: {
    bar: {
      columnWidth: "30px",
      distributed: true,
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    type: "numeric",
    lines: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      labels: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      }
    }
  ]
};
const usersOptions = {
  series: [
    {
      name: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062A\u0627\u0632\u0647 \u0648\u0627\u0631\u062F",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "\u062A\u062C\u062F\u06CC\u062F \u0627\u0634\u062A\u0631\u0627\u06A9",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "\u0627\u0633\u062A\u0639\u0641\u0627 \u062F\u0647\u0646\u062F\u0647",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ],
  chart: {
    height: 180,
    type: "area",
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors.primary, themeColors.accent, themeColors.info],
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2],
    curve: "smooth"
  },
  xaxis: {
    type: "numeric",
    lines: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: [
    {
      y: 0,
      offsetX: 0,
      offsetY: 0,
      labels: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      }
    }
  ],
  tooltip: {
    x: {
      show: false,
      format: "dd/MM/yy HH:mm"
    }
  }
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
const usersBarOptions = reactive({
  series: [],
  chart: {
    height: 235,
    type: "bar",
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.primary],
  dataLabels: {
    enabled: false
  },
  noData: {
    text: "\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC ..."
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
function renderPicture(data, cell, row) {
  return `
          <div class="v-avatar">
              <img class="avatar" src="${data}" alt="">
          </div>
      `;
}
function renderName(data, cell, row) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`;
}
function renderPosition(data, cell, row) {
  return `<span class="light-text">${data}</span>`;
}
function renderStatus(data, cell, row) {
  const { t } = useI18n();
  const tdata = t(`status.${data}`);
  return `
          <div class="status is-${data}">
              <i aria-hidden="true" class="fas fa-circle"></i>
              <span class="is-capitalize">${tdata}</span>
          </div>
      `;
}
function renderButton(data, cell, row) {
  return `<div class="has-text-left"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">\u0645\u062F\u06CC\u0631\u06CC\u062A</button></div>`;
}
const optionsCompany = {
  searchable: false,
  perPageSelect: false,
  perPage: 10,
  labels: {
    placeholder: "\u062C\u0633\u062A\u062C\u0648...",
    perPage: "{select} \u062F\u0627\u062F\u0647 \u062F\u0631 \u0635\u0641\u062D\u0647",
    noRows: "\u0645\u0637\u0644\u0628\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
    info: "\u0646\u0645\u0627\u06CC\u0634 {start} \u0627\u0644\u06CC {end} \u0627\u0632 {rows} \u0645\u0648\u0631\u062F"
  },
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderPosition },
    { select: 4, render: renderStatus },
    { select: 5, render: renderButton, sortable: false }
  ],
  data: {
    headings: ["\u0634\u0646\u0627\u0633\u0647", "\u062A\u0635\u0648\u06CC\u0631", "\u0646\u0627\u0645", "\u0645\u0648\u0642\u0639\u06CC\u062A", "\u0648\u0636\u0639\u06CC\u062A", "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"],
    data: [
      [
        0,
        "/images/avatars/svg/vuero-1.svg",
        "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
        "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        "busy",
        true
      ],
      [
        1,
        "/demo/avatars/7.jpg",
        "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633",
        "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
        "offline",
        true
      ],
      [
        2,
        "/demo/avatars/13.jpg",
        "\u062A\u0627\u0631\u0627 \u062E\u0627\u0634\u0642\u0686\u06CC",
        "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        "offline",
        true
      ],
      [3, "/demo/avatars/5.jpg", "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC", "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647", "available", true],
      [
        5,
        "/demo/avatars/27.jpg",
        "\u0639\u0644\u06CC \u06AF\u0648\u062F\u0631\u0632\u06CC",
        "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
        "offline",
        true
      ]
    ]
  }
};
var CompanyDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "business-dashboard company-dashboard" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="company-header is-dark-card-bordered is-dark-bg-6"><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-users-alt is-dark-primary"></i><span class="dark-inverted">162</span><p>\u06A9\u0627\u0631\u0628\u0631 \u062C\u062F\u06CC\u062F</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-diamond-alt is-dark-primary"></i><span class="dark-inverted">1,835,410 \u062A\u0648\u0645\u0627\u0646</span><p>\u0639\u0627\u06CC\u062F\u06CC \u0631\u0648\u0632\u0627\u0646\u0647</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-briefcase-alt is-dark-primary"></i><span class="dark-inverted">378</span><p>\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u06CC\u0627\u0641\u062A\u0647</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-ticket is-dark-primary"></i><span class="dark-inverted">192</span><p>\u062A\u06CC\u06A9\u062A\u200C\u0647\u0627\u06CC \u0641\u0639\u0627\u0644</p></div></div></div>', 1);
const _hoisted_3 = { class: "columns is-multiline" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "dashboard-card is-company" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("button", { class: "button icon-button is-circle is-dark-outlined" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:plus"
    })
  ])
], -1);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h3 class="dark-inverted">\u06CC\u0648\u062F\u0645\u06CC</h3><p>\u062F\u0648\u0631\u0647\u200C\u0647\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646</p><div class="description"><p> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. </p></div><div class="company-stats is-dark-bordered-12"><div class="company-stat"><div><span>\u0627\u0631\u0633\u0627\u0644</span><span class="dark-inverted">864</span></div></div><div class="company-stat"><div><span>\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627</span><span class="dark-inverted">261</span></div></div><div class="company-stat"><div><span>\u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u0646\u062F\u0647\u200C\u06AF\u0627\u0646</span><span class="dark-inverted">32K</span></div></div></div>', 4);
const _hoisted_11 = { class: "column is-4" };
const _hoisted_12 = { class: "dashboard-card is-base-chart" };
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>\u062C\u062F\u06CC\u062F</span><span class="current">153</span></div><div class="revenue-stat"><span>\u0628\u0627\u0632\u06AF\u0634\u062A\u06CC</span><span class="dark-inverted">641</span></div><div class="revenue-stat"><span>\u062A\u062C\u062F\u06CC\u062F \u0634\u062F\u0647</span><span class="dark-inverted">64</span></div></div></div>', 1);
const _hoisted_14 = { class: "chart-container" };
const _hoisted_15 = { class: "column is-4" };
const _hoisted_16 = { class: "dashboard-card is-base-chart" };
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>\u0641\u06CC\u0633\u0628\u0648\u06A9</span><span class="current">64K</span></div><div class="revenue-stat"><span>\u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645</span><span class="dark-inverted">78K</span></div><div class="revenue-stat"><span>\u062A\u0648\u0626\u06CC\u062A\u0631</span><span class="dark-inverted">25K</span></div></div></div>', 1);
const _hoisted_18 = { class: "chart-container" };
const _hoisted_19 = { class: "column is-12" };
const _hoisted_20 = { class: "column is-3" };
const _hoisted_21 = { class: "gauge-wrap" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F")
], -1);
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = { class: "dashboard-card" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0645\u0634\u062A\u0631\u06A9\u06CC\u0646")
], -1);
const _hoisted_26 = { class: "column is-3" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-toolbar" }, [
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
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("table", { class: "calendar" }, [
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
const _hoisted_29 = { class: "column is-12" };
const _hoisted_30 = { class: "dashboard-card is-tickets" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062A\u06CC\u06A9\u062A\u200C\u0647\u0627\u06CC \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0623\u06CC\u06CC\u062F"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_32 = { class: "ticket-list" };
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u0645\u062F\u06CC\u0631\u06CC\u062A");
const _hoisted_34 = /* @__PURE__ */ createTextVNode("\u0645\u062F\u06CC\u0631\u06CC\u062A");
const _hoisted_35 = /* @__PURE__ */ createTextVNode("\u0645\u062F\u06CC\u0631\u06CC\u062A");
const _hoisted_36 = /* @__PURE__ */ createTextVNode("\u0645\u062F\u06CC\u0631\u06CC\u062A");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    onMounted(async () => {
      setTimeout(() => {
        usersBarOptions.series = [
          {
            name: "\u0633\u0641\u0627\u0631\u0634\u0627\u062A",
            data: barData
          }
        ];
      }, 1e3);
      setTimeout(() => {
        usersBarOptions.series = [
          ...usersBarOptions.series,
          {
            name: "\u0627\u0628\u0637\u0627\u0644 \u0634\u062F\u0647",
            data: barData2
          }
        ];
      }, 2500);
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VSimpleDatatables = _sfc_main$2;
      const _component_UIWidgetToolbarDropdown = _sfc_main$3;
      const _component_VBillboardJS = _sfc_main$4;
      const _component_UIWidget = _sfc_main$5;
      const _component_UserPopoverContent = _sfc_main$6;
      const _component_tippy = resolveComponent("tippy");
      const _component_VButton = _sfc_main$7;
      const _component_VBlock = _sfc_main$8;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VAvatar, {
                size: "big",
                picture: "/demo/photos/brands/udemy.svg",
                "picture-dark": "/demo/photos/brands/udemy-dark.svg"
              }, {
                badge: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              _hoisted_7
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createBaseVNode("div", _hoisted_14, [
                createVNode(unref(ApexChart), {
                  id: "users-chart",
                  dir: "ltr",
                  height: unref(usersOptions).chart.height,
                  type: unref(usersOptions).chart.type,
                  series: unref(usersOptions).series,
                  options: unref(usersOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              _hoisted_17,
              createBaseVNode("div", _hoisted_18, [
                createVNode(unref(ApexChart), {
                  id: "shares-chart",
                  dir: "ltr",
                  height: unref(sharingOptions).chart.height,
                  type: unref(sharingOptions).chart.type,
                  series: unref(sharingOptions).series,
                  options: unref(sharingOptions)
                }, null, 8, ["height", "type", "series", "options"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createVNode(_component_VSimpleDatatables, { options: unref(optionsCompany) }, null, 8, ["options"])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createVNode(_component_UIWidget, {
              class: "gauge-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0627\u0628\u0632\u0627\u0631\u06A9 \u0646\u0645\u0648\u062F\u0627\u0631 \u062F\u0627\u06CC\u0631\u0647\u200C\u0627\u06CC" })
              ]),
              body: withCtx(() => [
                createBaseVNode("div", _hoisted_21, [
                  createVNode(_component_VBillboardJS, {
                    dir: "ltr",
                    class: "gauge-holder",
                    options: unref(personalScoreGaugeOptions),
                    onReady: unref(onPersonalScoreGaugeReady)
                  }, null, 8, ["options", "onReady"])
                ]),
                _hoisted_22
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              _hoisted_25,
              createVNode(unref(ApexChart), {
                id: "bar-chart",
                dir: "ltr",
                height: unref(usersBarOptions).chart.height,
                type: unref(usersBarOptions).chart.type,
                series: unref(usersBarOptions).series,
                options: unref(usersBarOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createVNode(_component_UIWidget, {
              class: "picker-widget",
              straight: ""
            }, {
              header: withCtx(() => [
                _hoisted_27
              ]),
              body: withCtx(() => [
                _hoisted_28
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("div", _hoisted_30, [
              _hoisted_31,
              createBaseVNode("div", _hoisted_32, [
                createVNode(_component_VBlock, {
                  title: "[#45651] \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u062F\u0631 \u0646\u0645\u0627\u06CC\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0630\u062E\u06CC\u0631\u0647 \u0646\u0645\u06CC \u0634\u0648\u062F",
                  subtitle: "\u0645\u0646 \u0646\u0645\u06CC \u062A\u0648\u0627\u0646\u0645 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A\u06CC \u0631\u0627 \u06A9\u0647 \u062F\u0631 \u0646\u0645\u0627\u06CC\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0627\u06CC\u062C\u0627\u062F \u0645\u06CC \u06A9\u0646\u0645 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u0645. \u0648\u0642\u062A\u06CC \u0631\u0648\u06CC \u062F\u06A9\u0645\u0647 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0644\u06CC\u06A9 \u0645\u06CC \u06A9\u0646\u0645 \u060C \u0628\u0647 \u0633\u0627\u062F\u06AF\u06CC \u0645\u06CC \u06AF\u0648\u06CC\u062F \u0634\u06A9\u0633\u062A \u062E\u0648\u0631\u062F\u0647.",
                  infratitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u062F\u0631 5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user31
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/31.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_33
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "[#45783] \u0646\u0645\u06CC \u062A\u0648\u0627\u0646 \u0641\u0631\u0635\u062A \u062C\u062F\u06CC\u062F\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F",
                  subtitle: "\u0648\u0642\u062A\u06CC \u0633\u0639\u06CC \u0645\u06CC \u06A9\u0646\u0645 \u0641\u0631\u0635\u062A\u06CC \u062C\u062F\u06CC\u062F \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u0645 \u060C \u067E\u0633 \u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u062F\u06A9\u0645\u0647 \u0627\u0642\u062F\u0627\u0645 \u060C \u0628\u0647 \u0635\u0641\u062D\u0647 404 \u0647\u062F\u0627\u06CC\u062A \u0645\u06CC \u0634\u0648\u0645.",
                  infratitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u062F\u0631 2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user23
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/23.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_34
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "[#45723] \u0647\u0646\u06AF\u0627\u0645 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 PayPal \u060C \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u0634\u06A9\u0633\u062A \u0645\u0648\u0627\u062C\u0647 \u0645\u06CC \u0634\u0648\u062F",
                  subtitle: "\u0648\u0642\u062A\u06CC \u0633\u0639\u06CC \u0645\u06CC \u06A9\u0646\u0645 \u0627\u0632 PayPal \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u0645 \u060C \u0628\u0631\u0627\u06CC \u0647\u0645\u06CC\u0634\u0647 \u0645\u06CC \u0686\u0631\u062E\u062F \u0648 \u0628\u0639\u062F \u0627\u0632 \u0622\u0646 \u067E\u06CC\u063A\u0627\u0645 \u062E\u0637\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0645\u06CC \u06A9\u0646\u0645.",
                  infratitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u062F\u0631 30 \u062F\u0642\u06CC\u0642\u0647\u200C\u06CC \u067E\u06CC\u0634",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user32
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/32.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_35
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "[#45862] \u062F\u0627\u0631\u0627\u06CC\u06CC \u0647\u0627\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u067E\u0648\u0634\u0647 \u062A\u0645 \u0631\u0627 \u0646\u0645\u06CC \u062A\u0648\u0627\u0646 \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F",
                  subtitle: "\u0645\u0646 \u0627\u0633\u0646\u0627\u062F \u0631\u0627 \u062F\u0646\u0628\u0627\u0644 \u06A9\u0631\u062F\u0645 \u0627\u0645\u0627 \u0646\u0645\u06CC \u062A\u0648\u0627\u0646\u0645 \u062F\u0627\u0631\u0627\u06CC\u06CC \u0647\u0627 \u0631\u0627 \u062F\u0631 \u067E\u0648\u0634\u0647 \u0627\u0635\u0644\u06CC \u067E\u06CC\u062F\u0627 \u06A9\u0646\u0645. \u0622\u06CC\u0627 \u0645\u06CC \u062A\u0648\u0627\u0646\u0645 \u06A9\u0645\u06CC \u06A9\u0645\u06A9 \u0628\u06AF\u06CC\u0631\u0645\u061F",
                  infratitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u062F\u0631 6 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
                  "m-responsive": "",
                  class: "is-dark-bordered-12"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10],
                      placement: "top-start"
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user13
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          size: "medium",
                          picture: "/demo/avatars/13.jpg"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_36
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
      ]);
    };
  }
});
export { _sfc_main as _ };
