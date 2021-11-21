import { c as __unplugin_components_1, l as _sfc_main$5 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$3 } from "./VPeity.920acf33.js";
import { _ as _sfc_main$4 } from "./CircleChart.9d8cea5e.js";
import { d as defineComponent, r as ref, ab as onMounted, ac as onUnmounted, o as openBlock, b as createElementBlock, v as createVNode, e as createBaseVNode, E as toDisplayString, n as normalizeClass, C as createStaticVNode, h as computed, x as withCtx, y as withDirectives, I as vModelText, t as unref, G as Fragment, J as renderList, ai as TransitionGroup } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1 } from "./search-5-dark.23499973.js";
const _hoisted_1$1 = { class: "grid-item" };
const _hoisted_2$1 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "icon-tabs-wrapper" };
const _hoisted_4$1 = { class: "icon-tabs" };
const _hoisted_5$1 = { class: "icon-tabs-inner" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_7$1 = [
  _hoisted_6$1
];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:briefcase"
}, null, -1);
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:check-circle"
}, null, -1);
const _hoisted_11$1 = [
  _hoisted_10$1
];
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "icon-tabs-naver" }, null, -1);
const _hoisted_13$1 = { class: "chart-block" };
const _hoisted_14 = { class: "stats" };
const _hoisted_15 = { class: "dark-inverted" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0632\u062F\u06CC\u062F", -1);
const _hoisted_17 = { class: "chart-block" };
const _hoisted_18 = { class: "circle-chart-wrapper is-info" };
const _hoisted_19 = { class: "stats" };
const _hoisted_20 = { class: "dark-inverted" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627", -1);
const _hoisted_22 = { class: "chart-block" };
const _hoisted_23 = { class: "circle-chart-wrapper is-warning" };
const _hoisted_24 = { class: "stats" };
const _hoisted_25 = { class: "dark-inverted" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0633\u06A9\u200C\u0647\u0627", -1);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<div class="buttons"><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span><span>\u0627\u0633\u062A\u062E\u062F\u0627\u0645</span></button><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></span><span>\u06AF\u0641\u062A\u06AF\u0648</span></button></div>', 1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { type: String, required: false, default: "posts" },
    user: { type: Object, required: false, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const tab = ref(props.activeTab);
    const getRandom = () => Math.round(Math.random() * 10);
    const values = ref([]);
    let interval;
    for (let i = 0; i < 20; i++) {
      values.value.push(getRandom());
    }
    onMounted(() => {
      interval = setInterval(() => {
        values.value.shift();
        values.value.push(getRandom());
      }, 1e3);
    });
    onUnmounted(() => {
      clearInterval(interval);
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$2;
      const _component_VPeity = _sfc_main$3;
      const _component_CircleChart = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_VAvatar, {
          picture: __props.user.avatar,
          badge: __props.user.badge,
          size: "big"
        }, null, 8, ["picture", "badge"]),
        createBaseVNode("h3", _hoisted_2$1, toDisplayString(__props.user.fullName), 1),
        createBaseVNode("p", null, toDisplayString(__props.user.position), 1),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("a", {
                "data-target-section": "subsection-1",
                class: normalizeClass(["tab-item", [tab.value === "posts" && "is-active"]]),
                onClick: _cache[0] || (_cache[0] = ($event) => tab.value = "posts")
              }, _hoisted_7$1, 2),
              createBaseVNode("a", {
                "data-target-section": "subsection-2",
                class: normalizeClass(["tab-item", [tab.value === "projects" && "is-active"]]),
                onClick: _cache[1] || (_cache[1] = ($event) => tab.value = "projects")
              }, _hoisted_9$1, 2),
              createBaseVNode("a", {
                "data-target-section": "subsection-3",
                class: normalizeClass(["tab-item", [tab.value === "tasks" && "is-active"]]),
                onClick: _cache[2] || (_cache[2] = ($event) => tab.value = "tasks")
              }, _hoisted_11$1, 2),
              _hoisted_12$1
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["icon-tabs-content subsection-1", [tab.value === "posts" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_13$1, [
              createVNode(_component_VPeity, {
                type: "line",
                height: 45,
                width: 100,
                "stroke-width": 1.6,
                stroke: "var(--primary)",
                values: values.value
              }, null, 8, ["stroke-width", "stroke", "values"]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("span", _hoisted_15, toDisplayString(values.value[values.value.length - 1]), 1),
                _hoisted_16
              ])
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["icon-tabs-content subsection-2", [tab.value === "projects" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createVNode(_component_CircleChart, {
                  value: __props.user.projects.progress,
                  size: 54
                }, null, 8, ["value"])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("span", _hoisted_20, toDisplayString(__props.user.projects.count), 1),
                _hoisted_21
              ])
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["icon-tabs-content subsection-3", [tab.value === "tasks" && "is-active"]])
          }, [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_CircleChart, {
                  value: __props.user.tasks.progress,
                  size: 54
                }, null, 8, ["value"])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("span", _hoisted_25, toDisplayString(__props.user.tasks.count), 1),
                _hoisted_26
              ])
            ])
          ], 2)
        ]),
        _hoisted_27
      ]);
    };
  }
});
var _imports_2 = "/assets/team.9b4f72c8.svg";
var _imports_3 = "/assets/team-dark.fd6506b0.svg";
const users = [
  {
    id: 13,
    avatar: "/demo/avatars/13.jpg",
    badge: "/images/icons/stacks/illustrator.svg",
    username: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
    fullName: "\u062A\u0627\u0631\u0627 \u062E\u0627\u0634\u0642\u0686\u06CC",
    initials: "\u0627\u0686",
    color: "danger",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 72,
      progress: 85
    },
    projects: {
      count: 12,
      progress: 42
    },
    tasks: {
      count: 17,
      progress: 56
    },
    team: [
      {
        id: 148,
        avatar: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        avatar: "/demo/avatars/18.jpg",
        name: "\u0646\u0642\u06CC",
        initials: "\u0646\u0645",
        color: "h-purple"
      },
      {
        id: 159,
        avatar: void 0,
        name: "\u062C\u0627\u0646",
        initials: "JD",
        color: "info"
      },
      {
        id: 7,
        avatar: "/demo/avatars/7.jpg",
        name: "\u0622\u0644\u06CC\u0633",
        initials: "AC",
        color: "success"
      }
    ]
  },
  {
    id: 37,
    avatar: "/demo/avatars/37.jpg",
    badge: "/images/icons/flags/france.svg",
    username: "\u0647\u0644\u0645\u0648\u062A",
    fullName: "\u062D\u0628\u06CC\u0628 \u0641\u0627\u062A\u062D",
    initials: "HF",
    color: "h-purple",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 16,
      progress: 45
    },
    projects: {
      count: 8,
      progress: 24
    },
    tasks: {
      count: 9,
      progress: 72
    },
    team: [
      {
        id: 21,
        avatar: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 189,
        avatar: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 39,
        avatar: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  },
  {
    id: 25,
    avatar: "/demo/avatars/25.jpg",
    badge: "/images/icons/stacks/js.svg",
    username: "\u0645\u0644\u0627\u0646\u06CC",
    fullName: "\u0645\u0644\u0627\u0646\u06CC \u0648\u0644\u06CC \u0632\u0627\u062F\u0647",
    initials: "MW",
    color: "success",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 22,
      progress: 31
    },
    projects: {
      count: 11,
      progress: 54
    },
    tasks: {
      count: 15,
      progress: 48
    },
    team: [
      {
        id: 21,
        avatar: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 198,
        avatar: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 39,
        avatar: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  },
  {
    id: 29,
    avatar: "/demo/avatars/29.jpg",
    badge: "/images/icons/stacks/python.svg",
    username: "\u062D\u06A9\u06CC\u0645",
    fullName: "\u062D\u06A9\u06CC\u0645 \u06A9\u0644\u0645 \u0641\u0631\u0648\u0634",
    initials: "HC",
    color: "info",
    location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 4,
      progress: 59
    },
    projects: {
      count: 5,
      progress: 38
    },
    tasks: {
      count: 6,
      progress: 21
    },
    team: [
      {
        id: 28,
        avatar: "/demo/avatars/28.jpg",
        name: "\u0627\u062F\u0648\u0627\u0631\u062F",
        initials: "EF",
        color: "info"
      },
      {
        id: 33,
        avatar: "/demo/avatars/33.jpg",
        name: "\u0647\u0627\u0631\u0648\u06CC",
        initials: "HM",
        color: "warning"
      }
    ]
  },
  {
    id: 39,
    avatar: "/demo/avatars/39.jpg",
    badge: "/images/icons/stacks/python.svg",
    username: "\u0639\u0644\u06CC",
    fullName: "\u0639\u0644\u06CC \u0698\u0627\u0646\u062F\u0627\u0631\u0645",
    initials: "\u0622\u0647",
    color: "h-purple",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    position: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 7,
      progress: 18
    },
    projects: {
      count: 9,
      progress: 57
    },
    tasks: {
      count: 17,
      progress: 38
    },
    team: [
      {
        id: 189,
        avatar: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        avatar: "/demo/avatars/23.jpg",
        name: "\u0631\u06CC\u062D\u0627\u0646\u0647",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: 40,
    avatar: "/demo/avatars/40.jpg",
    badge: "/images/icons/stacks/android.svg",
    username: "\u062C\u0645\u06CC\u0644\u0647",
    fullName: "\u062C\u0645\u06CC\u0644\u0647 \u0645\u0631\u062F\u067E\u0631\u0633\u062A",
    initials: "JM",
    color: "info",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 23,
      progress: 54
    },
    projects: {
      count: 17,
      progress: 78
    },
    tasks: {
      count: 21,
      progress: 26
    },
    team: [
      {
        id: 148,
        avatar: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        avatar: "/demo/avatars/18.jpg",
        name: "\u0646\u0642\u06CC",
        initials: "\u0646\u0645",
        color: "h-purple"
      },
      {
        id: 159,
        avatar: void 0,
        name: "\u062C\u0627\u0646",
        initials: "JD",
        color: "info"
      }
    ]
  },
  {
    id: 19,
    avatar: "/demo/avatars/19.jpg",
    badge: "/images/icons/flags/germany.svg",
    username: "\u0627\u0631\u0633\u0637\u0648",
    fullName: "\u0627\u0631\u0633\u0637\u0648 \u0632\u0627\u0647\u062F",
    initials: "\u0627\u0632",
    color: "h-yellow",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 5,
      progress: 19
    },
    projects: {
      count: 4,
      progress: 29
    },
    tasks: {
      count: 8,
      progress: 59
    },
    team: [
      {
        id: 198,
        avatar: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 27,
        avatar: "/demo/avatars/27.jpg",
        name: "\u06A9\u0627\u0631\u0645\u0646",
        initials: "CE",
        color: "info"
      }
    ]
  },
  {
    id: 9,
    avatar: "/demo/avatars/9.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0622\u0646\u0627",
    fullName: "\u0622\u0646\u0627 \u0647\u062F\u0627\u06CC\u062A",
    initials: "\u0622\u0647",
    color: "info",
    location: "\u0632\u0646\u062C\u0627\u0646\u060C \u0627\u0628\u0647\u0631",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 12,
      progress: 54
    },
    projects: {
      count: 28,
      progress: 59
    },
    tasks: {
      count: 11,
      progress: 79
    },
    team: [
      {
        id: 189,
        avatar: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        avatar: "/demo/avatars/23.jpg",
        name: "\u0631\u06CC\u062D\u0627\u0646\u0647",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: 5,
    avatar: "/demo/avatars/5.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0645\u0631\u06CC\u0645",
    fullName: "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC",
    initials: "ML",
    color: "h-yellow",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 17,
      progress: 18
    },
    projects: {
      count: 49,
      progress: 28
    },
    tasks: {
      count: 67,
      progress: 27
    },
    team: [
      {
        id: 148,
        avatar: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        avatar: "/demo/avatars/18.jpg",
        name: "\u0646\u0642\u06CC",
        initials: "\u0646\u0645",
        color: "h-purple"
      },
      {
        id: 159,
        avatar: void 0,
        name: "\u062C\u0627\u0646",
        initials: "JD",
        color: "info"
      },
      {
        id: 7,
        avatar: "/demo/avatars/7.jpg",
        name: "\u0622\u0644\u06CC\u0633",
        initials: "AC",
        color: "success"
      }
    ]
  },
  {
    id: 32,
    avatar: "/demo/avatars/32.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646",
    fullName: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9\u0627\u0631\u06AF\u0631",
    initials: "JK",
    color: "info",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 44,
      progress: 66
    },
    projects: {
      count: 54,
      progress: 48
    },
    tasks: {
      count: 62,
      progress: 21
    },
    team: [
      {
        id: 21,
        avatar: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 198,
        avatar: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 39,
        avatar: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  },
  {
    id: 36,
    avatar: "/demo/avatars/36.jpg",
    badge: "/images/icons/flags/france.svg",
    username: "\u0628\u0647\u0627\u062F\u0631",
    fullName: "\u0628\u0647\u0627\u062F\u0631 \u0644\u0648\u0627\u0634 \u067E\u0632",
    initials: "BL",
    color: "h-purple",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 31,
      progress: 89
    },
    projects: {
      count: 19,
      progress: 87
    },
    tasks: {
      count: 21,
      progress: 65
    },
    team: [
      {
        id: 148,
        avatar: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 31,
        avatar: "/demo/avatars/31.jpg",
        name: "\u06CC\u0627\u0633\u06CC\u0646",
        initials: "YA",
        color: "h-purple"
      }
    ]
  },
  {
    id: 38,
    avatar: "/demo/avatars/38.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062D\u0644\u06CC\u0645\u0647",
    fullName: "\u062D\u0644\u06CC\u0645\u0647 \u062F\u0627\u0644\u0627\u0633",
    initials: "CD",
    color: "info",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 17,
      progress: 48
    },
    projects: {
      count: 98,
      progress: 57
    },
    tasks: {
      count: 35,
      progress: 79
    },
    team: [
      {
        id: 33,
        avatar: "/demo/avatars/33.jpg",
        name: "\u0647\u0627\u0631\u0648\u06CC",
        initials: "HM",
        color: "warning"
      },
      {
        id: 26,
        avatar: "/demo/avatars/26.jpg",
        name: "\u06A9\u0631\u06CC\u0645",
        initials: "CW",
        color: "info"
      }
    ]
  },
  {
    id: 26,
    avatar: "/demo/avatars/26.jpg",
    badge: "/images/icons/flags/australia.svg",
    username: "\u06A9\u0631\u06CC\u0645",
    fullName: "\u06A9\u0631\u06CC\u0645 \u0648\u06CC\u0646\u0633\u062A\u0648\u0646",
    initials: "CW",
    color: "info",
    location: "\u0645\u0644\u0628\u0648\u0631\u0646",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 34,
      progress: 18
    },
    projects: {
      count: 2,
      progress: 57
    },
    tasks: {
      count: 12,
      progress: 38
    },
    team: [
      {
        id: 21,
        avatar: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 189,
        avatar: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 39,
        avatar: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  },
  {
    id: 16,
    avatar: "/demo/avatars/16.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062C\u06CC\u0633\u0648\u0646",
    fullName: "\u062C\u06CC\u0633\u0648\u0646 \u0645\u0639\u0645\u0648\u0644\u06CC",
    initials: "\u062C\u0645",
    color: "danger",
    location: "\u062A\u06AF\u0632\u0627\u0633",
    position: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 0,
      progress: 55
    },
    projects: {
      count: 12,
      progress: 59
    },
    tasks: {
      count: 12,
      progress: 79
    },
    team: [
      {
        id: 14,
        avatar: "/demo/avatars/14.jpg",
        name: "\u0631\u0627\u06CC\u0627\u0646",
        initials: "\u0631\u0628",
        color: "warning"
      },
      {
        id: 198,
        avatar: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 23,
    avatar: "/demo/avatars/23.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0631\u06CC\u062D\u0627\u0646\u0647",
    fullName: "\u0627\u06CC\u0631\u0627\u0646 \u0648\u0637\u0646\u062E\u0648\u0627\u0647",
    initials: "IV",
    color: "info",
    location: "\u0633\u0646 \u062E\u0648\u0632\u0647",
    position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 6,
      progress: 64
    },
    projects: {
      count: 1,
      progress: 88
    },
    tasks: {
      count: 6,
      progress: 100
    },
    team: [
      {
        id: 189,
        avatar: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 34,
        avatar: "/demo/avatars/34.jpg",
        name: "\u062F\u0646\u06CC\u0644",
        initials: "DR",
        color: "h-yellow"
      }
    ]
  },
  {
    id: 28,
    avatar: "/demo/avatars/28.jpg",
    badge: "/images/icons/flags/france.svg",
    username: "\u0627\u062F\u0648\u0627\u0631\u062F",
    fullName: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0627\u0644\u0627\u0646",
    initials: "EF",
    color: "success",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 8,
      progress: 44
    },
    projects: {
      count: 16,
      progress: 32
    },
    tasks: {
      count: 19,
      progress: 71
    },
    team: [
      {
        id: 148,
        avatar: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        avatar: "/demo/avatars/18.jpg",
        name: "\u0646\u0642\u06CC",
        initials: "\u0646\u0645",
        color: "h-purple"
      },
      {
        id: 159,
        avatar: void 0,
        name: "\u062C\u0627\u0646",
        initials: "JD",
        color: "info"
      }
    ]
  },
  {
    id: 7,
    avatar: "/demo/avatars/7.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0622\u0644\u06CC\u0633",
    fullName: "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633",
    initials: "AC",
    color: "info",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 8,
      progress: 22
    },
    projects: {
      count: 22,
      progress: 56
    },
    tasks: {
      count: 39,
      progress: 34
    },
    team: [
      {
        id: 25,
        avatar: "/demo/avatars/25.jpg",
        name: "\u0645\u0644\u0627\u0646\u06CC",
        initials: "MW",
        color: "success"
      },
      {
        id: 198,
        avatar: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 12,
        avatar: "/demo/avatars/12.jpg",
        name: "\u0627\u0634\u06A9\u0627\u0646",
        initials: "\u0627\u067E",
        color: "warning"
      }
    ]
  },
  {
    id: 22,
    avatar: "/demo/avatars/22.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062F\u0627\u0648\u0648\u062F",
    fullName: "\u062F\u0627\u0648\u0648\u062F \u0647\u06CC\u0686\u06A9\u0633",
    initials: "DH",
    color: "info",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    posts: {
      count: 13,
      progress: 18
    },
    projects: {
      count: 15,
      progress: 57
    },
    tasks: {
      count: 14,
      progress: 38
    },
    team: [
      {
        id: 148,
        avatar: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 198,
        avatar: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      }
    ]
  }
];
var UsersGridV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "user-grid-toolbar is-reversed tabs-wrapper is-slider" };
const _hoisted_2 = { class: "tabs-inner" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u0647\u0645\u0647", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u06CC\u0645", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_9 = { class: "user-grid user-grid-v3" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image is-larger",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image is-larger",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { type: String, required: false, default: "all" }
  },
  setup(__props) {
    const props = __props;
    const filters = ref("");
    const tab = ref(props.activeTab);
    const filteredData = computed(() => {
      if (!filters.value) {
        return users;
      } else {
        return users.filter((item) => {
          return item.username.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || item.position.match(new RegExp(filters.value, "i")) || item.badge.match(new RegExp(filters.value, "i"));
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VPlaceholderPage = _sfc_main$5;
      const _component_TabbedGridItem = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "\u062C\u0633\u062A\u062C\u0648..."
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "all" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[1] || (_cache[1] = ($event) => tab.value = "all")
                  }, _hoisted_5)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([tab.value === "team" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[2] || (_cache[2] = ($event) => tab.value = "team")
                  }, _hoisted_7)
                ], 2),
                _hoisted_8
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_10,
              _hoisted_11
            ]),
            _: 1
          }, 8, ["class"]),
          createBaseVNode("div", {
            id: "active-items-tab",
            class: normalizeClass(["tab-content", [tab.value === "all" && "is-active"]])
          }, [
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "columns is-multiline is-flex-tablet-p is-half-tablet-p"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "column is-3"
                  }, [
                    createVNode(_component_TabbedGridItem, { user: item }, null, 8, ["user"])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("div", {
            id: "inactive-items-tab",
            class: normalizeClass(["tab-content", [tab.value === "team" && "is-active"]])
          }, [
            createVNode(_component_VPlaceholderPage, {
              title: "\u0628\u062F\u0648\u0646 \u0639\u0636\u0648 \u062F\u0631 \u062A\u06CC\u0645",
              subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062A\u06CC\u0645\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F. \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u062A\u0639\u062F\u0627\u062F\u06CC \u0628\u0647 \u062A\u06CC\u0645 \u062E\u0648\u062F \u0645\u06CC \u06A9\u0646\u06CC\u062F \u060C \u0622\u0646\u0647\u0627 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0647 \u0645\u06CC \u0634\u0648\u0646\u062F."
            }, {
              image: withCtx(() => [
                _hoisted_12,
                _hoisted_13
              ]),
              _: 1
            })
          ], 2)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
