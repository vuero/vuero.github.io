import { _ as _sfc_main$2 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$3 } from "./VAvatarStack.8507ceb8.js";
import { _ as __unplugin_components_0 } from "./VDropdown.5214d40f.js";
import { _ as _export_sfc, g as themeColors, b as _sfc_main$7 } from "./index.4d6c8e1a.js";
import { o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, d as defineComponent, r as ref, q as resolveComponent, b as createElementBlock, v as createVNode, t as unref, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$4 } from "./VBlock.47e0c633.js";
import { _ as _sfc_main$5 } from "./UserPopoverContent.8933a73e.js";
import { _ as _sfc_main$6 } from "./VAnimatedCheckbox.66f6b6bf.js";
import { _ as _sfc_main$8 } from "./VPlaceholderSection.00317a29.js";
import { A as ApexChart } from "./vue3-apexcharts.common.236dfc44.js";
import { p as popovers } from "./userPopovers.e00e1803.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-whiteboard-alt-2"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0628\u0648\u0631\u062F \u067E\u0631\u0648\u0698\u0647")
  ])
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-pencil"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0698\u0647")
  ])
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-checkmark-circle"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0633\u06A9\u200C\u0647\u0627"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0627\u0631\u0647\u0627\u06CC \u0645\u0639\u0644\u0642")
  ])
], -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-hierchy-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u06CC\u0645"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u062A\u06CC\u0645 \u067E\u0631\u0648\u0698\u0647")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = __unplugin_components_0;
  return openBlock(), createBlock(_component_VDropdown, {
    class: "end-action",
    icon: "feather:more-vertical",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1,
      _hoisted_3$1,
      _hoisted_4$1,
      _hoisted_5$1
    ]),
    _: 1
  });
}
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var _imports_0 = "/assets/chart-guy.78d9bd2b.svg";
var _imports_1 = "/assets/chart-guy-dark.e059893d.svg";
const completionOptions = {
  series: [
    {
      name: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "\u067E\u0627\u06CC\u0627\u0646 \u06CC\u0627\u0641\u062A\u0647",
      data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
      name: "\u0645\u062A\u0648\u0642\u0641 \u0634\u062F\u0647",
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
  yaxis: {
    opposite: true
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
const series = [
  {
    name: "\u0637\u0631\u0627\u062D\u06CC",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  },
  {
    name: "\u062A\u0648\u0633\u0639\u0647",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  },
  {
    name: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
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
        return val + " \u0633\u0627\u0639\u062A";
      }
    }
  }
};
const avatarStack1 = [
  {
    id: 18,
    picture: "/demo/avatars/18.jpg",
    initials: "\u0646\u0645",
    color: "info"
  },
  {
    id: 16,
    picture: "/demo/avatars/16.jpg",
    initials: "\u062C\u0645",
    color: "success"
  },
  {
    id: 23,
    picture: "/demo/avatars/23.jpg",
    initials: "IV",
    color: "warning"
  }
];
var PersonalDashboardV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v2" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "dashboard-header" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="user-meta is-dark-bordered-12"><h3 class="title is-4 is-narrow is-bold">\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC \u06A9\u0627\u0631\u0628\u0631 \u0639\u0632\u06CC\u0632.</h3><p class="light-text">\u0627\u0632 \u062F\u06CC\u062F\u0627\u0631 \u0645\u062C\u062F\u062F \u0634\u0645\u0627 \u062E\u0648\u0634 \u0648\u0642\u062A\u06CC\u0645</p></div><div class="user-action"><h3 class="title is-2 is-narrow">\u06F3 \u0645\u0648\u0631\u062F \u062A\u0633\u06A9</h3><p class="light-text">\u06A9\u0647 \u0628\u0627\u06CC\u062F \u0627\u0645\u0631\u0648\u0632 \u0627\u0646\u062C\u0627\u0645 \u06AF\u06CC\u0631\u062F</p><a class="action-link">\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u062A\u0633\u06A9\u200C\u0647\u0627</a></div><div class="cta h-hidden-tablet-p"><div class="media-flex inverted-text"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><p class="white-text">\u0634\u0631\u0648\u0639 \u06A9\u0627\u0631 \u0628\u0627 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u067E\u0631\u0648\u0698\u0647 \u0648 \u062A\u06CC\u0645</p></div><a class="link inverted-text">\u0628\u06CC\u0634\u062A\u0631 \u0628\u062F\u0627\u0646\u06CC\u062F</a></div>', 3);
const _hoisted_8 = { class: "column is-8" };
const _hoisted_9 = { class: "dashboard-card has-margin-bottom" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0641\u0639\u0627\u0644"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_11 = { class: "active-projects" };
const _hoisted_12 = { class: "dashboard-card" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0648\u0636\u0639\u06CC\u062A \u0627\u0645\u0648\u0631"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u06AF\u0632\u0627\u0631\u0634\u0627\u062A")
], -1);
const _hoisted_14 = { class: "dashboard-card" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u06A9\u0627\u0631\u0627\u06CC\u06CC \u062A\u06CC\u0645"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627")
], -1);
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = { class: "dashboard-card" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u062A\u06CC\u0645 \u0645\u0646"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_19 = { class: "active-team" };
const _hoisted_20 = { class: "user-list" };
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">\u0628\u06CC\u0644 \u06AF\u06CC\u062A\u0633</div><div class="position">\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">\u0645\u0644\u06CC\u0633\u0627 \u0645\u0627\u06CC\u0631</div><div class="position">\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644</div><div class="position">\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<div class="user-list-info"><div class="name dark-inverted">\u062C\u0648\u0648\u0627\u0646\u06CC \u0634\u0627\u062A\u0648\u0644</div><div class="position">\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>', 2);
const _hoisted_29 = { class: "dashboard-card" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0648\u0638\u0627\u0628\u0641 \u0627\u0645\u0631\u0648\u0632"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_31 = { class: "active-list" };
const _hoisted_32 = { class: "checkboxes-list" };
const _hoisted_33 = { class: "list-item" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0622\u0642\u0627\u06CC \u062A\u06CC\u0645 \u06A9\u0648\u06A9"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0631\u0648\u0631 \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u0627\u0648\u0644\u06CC\u0647 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647")
], -1);
const _hoisted_35 = { class: "list-item" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u062A\u0645\u0627\u0645 \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u0627\u0648\u0644\u06CC\u0647"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0645\u0627\u0645\u06CC \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u062E\u0648\u0627\u0633\u062A\u0647 \u0634\u062F\u0647 \u0627\u0639\u0645\u0627\u0644 \u0634\u0648\u062F")
], -1);
const _hoisted_37 = { class: "list-item" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0632\u0645\u0627\u0646\u0628\u0646\u062F\u06CC\u200C\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627\u06CC \u0647\u0645\u0647\u200C\u06CC \u0632\u0645\u0627\u0646\u0628\u0646\u062F\u06CC\u200C\u0647\u0627\u06CC \u062A\u06CC\u0645 \u0637\u0631\u0627\u062D\u06CC")
], -1);
const _hoisted_39 = { class: "list-item" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "item-meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0648\u0627\u0631\u06CC\u0632 \u0648\u062C\u0647"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06A9\u062A\u0648\u0631 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0634\u062A\u0631\u06CC \u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0647\u0632\u06CC\u0646\u0647")
], -1);
const _hoisted_41 = { class: "dashboard-card" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createTextVNode(" \u0646\u0633\u062E\u0647\u200C\u06CC \u067E\u0631\u0645\u06CC\u0648\u0645 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const avatarStack1$1 = avatarStack1;
    const avatarStack2 = avatarStack1;
    const avatarStack3 = avatarStack1;
    const avatarStack4 = avatarStack1;
    const democheck = ref(["value_2"]);
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$2;
      const _component_VAvatarStack = _sfc_main$3;
      const _component_ProjectWidgetDropdown = __unplugin_components_2;
      const _component_VBlock = _sfc_main$4;
      const _component_UserPopoverContent = _sfc_main$5;
      const _component_tippy = resolveComponent("tippy");
      const _component_VAnimatedCheckbox = _sfc_main$6;
      const _component_VButton = _sfc_main$7;
      const _component_VPlaceholderSection = _sfc_main$8;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VAvatar, {
                picture: "/images/avatars/svg/vuero-1.svg",
                badge: "/images/icons/flags/united-states-of-america.svg",
                size: "xl"
              }),
              _hoisted_5
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              createBaseVNode("div", _hoisted_11, [
                createVNode(_component_VBlock, {
                  title: "\u067E\u0631\u0648\u0698\u0647\u200C\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u0631\u0633\u0648\u0644\u0647",
                  subtitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u06F3\u06F0 \u062F\u0642\u06CC\u0642\u0647\u200C\u06CC \u067E\u06CC\u0634",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      picture: "/demo/photos/apps/1.jpg",
                      badge: "/images/icons/stacks/illustrator.svg",
                      size: "medium",
                      squared: ""
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack1$1),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u062F\u0627\u0634\u0628\u0631\u062F \u0633\u0644\u0627\u0645\u062A \u0648 \u0641\u06CC\u062A\u0646\u0633",
                  subtitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC 5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      picture: "/demo/photos/apps/2.png",
                      badge: "/images/icons/stacks/reactjs.svg",
                      size: "medium",
                      squared: ""
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack2),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u062F\u0627\u0634\u0628\u0631\u062F \u0622\u0645\u0648\u0632\u0634\u06CC \u0648 \u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC",
                  subtitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC 7 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      picture: "/demo/photos/apps/3.png",
                      badge: "/images/icons/stacks/angular.svg",
                      size: "medium",
                      squared: ""
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack3),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                }),
                createVNode(_component_VBlock, {
                  title: "\u062F\u0627\u0634\u0628\u0631\u062F \u0628\u0631\u0627\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC",
                  subtitle: "\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC 10 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      picture: "/demo/photos/apps/4.png",
                      badge: "/images/icons/stacks/js.svg",
                      size: "medium",
                      squared: ""
                    })
                  ]),
                  action: withCtx(() => [
                    createVNode(_component_VAvatarStack, {
                      avatars: unref(avatarStack4),
                      size: "small"
                    }, null, 8, ["avatars"]),
                    createVNode(_component_ProjectWidgetDropdown)
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createVNode(unref(ApexChart), {
                id: "completion-chart",
                dir: "ltr",
                height: unref(completionOptions).chart.height,
                type: unref(completionOptions).chart.type,
                series: unref(completionOptions).series,
                options: unref(completionOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ]),
            createBaseVNode("div", _hoisted_14, [
              _hoisted_15,
              createVNode(unref(ApexChart), {
                id: "efficiency-chart",
                dir: "ltr",
                height: unref(barOptions).chart.height,
                type: unref(barOptions).chart.type,
                series: unref(barOptions).series,
                options: unref(barOptions)
              }, null, 8, ["height", "type", "series", "options"])
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              _hoisted_18,
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("ul", _hoisted_20, [
                  createBaseVNode("li", null, [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user18
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, { picture: "/demo/avatars/18.jpg" })
                      ]),
                      _: 1
                    }),
                    _hoisted_21
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user120
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          initials: "SC",
                          color: "h-orange"
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_23
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user13
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, { picture: "/demo/avatars/13.jpg" })
                      ]),
                      _: 1
                    }),
                    _hoisted_25
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_tippy, {
                      class: "has-help-cursor",
                      interactive: "",
                      offset: [0, 10]
                    }, {
                      content: withCtx(() => [
                        createVNode(_component_UserPopoverContent, {
                          user: unref(popovers).user121
                        }, null, 8, ["user"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          initials: "NL",
                          color: "success"
                        })
                      ]),
                      _: 1
                    }),
                    _hoisted_27
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_29, [
              _hoisted_30,
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  createBaseVNode("div", _hoisted_33, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => democheck.value = $event),
                      value: "value_1"
                    }, null, 8, ["modelValue"]),
                    _hoisted_34
                  ]),
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => democheck.value = $event),
                      value: "value_2"
                    }, null, 8, ["modelValue"]),
                    _hoisted_36
                  ]),
                  createBaseVNode("div", _hoisted_37, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => democheck.value = $event),
                      value: "value_3"
                    }, null, 8, ["modelValue"]),
                    _hoisted_38
                  ]),
                  createBaseVNode("div", _hoisted_39, [
                    createVNode(_component_VAnimatedCheckbox, {
                      modelValue: democheck.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => democheck.value = $event),
                      value: "value_4"
                    }, null, 8, ["modelValue"]),
                    _hoisted_40
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_41, [
              createVNode(_component_VPlaceholderSection, {
                title: "\u0646\u0633\u062E\u0647\u200C\u06CC \u067E\u0631\u0645\u06CC\u0648\u0645",
                subtitle: "\u062F\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u067E\u0631\u0645\u06CC\u0648\u0645 \u0627\u0628\u0632\u0627\u0631 \u0648 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631\u06CC \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0627\u0633\u062A"
              }, {
                image: withCtx(() => [
                  _hoisted_42,
                  _hoisted_43
                ]),
                action: withCtx(() => [
                  createVNode(_component_VButton, {
                    color: "primary",
                    elevated: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_44
                    ]),
                    _: 1
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
