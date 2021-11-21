import { b as _sfc_main$1 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VAvatar.879e77ac.js";
import { _ as __unplugin_components_4 } from "./FileTileDropdown.1f6be241.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, G as Fragment, J as renderList, n as normalizeClass, E as toDisplayString, N as createBlock, t as unref, B as createTextVNode, C as createStaticVNode } from "./vendor.9ec557a4.js";
const courses = [
  {
    id: 1,
    category: "\u0622\u0646\u0627\u062A\u0648\u0645\u06CC",
    title: "ANA118 - \u0622\u0646\u0627\u062A\u0648\u0645\u06CC \u0648 \u0641\u06CC\u0632\u06CC\u0648\u0644\u0648\u0698\u06CC \u0627\u0641\u0631\u0627\u062F \u062C\u0648\u0627\u0646",
    summary: "\u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u06CC\u06A9 \u0631\u0648\u06CC\u06A9\u0631\u062F \u0639\u0645\u06CC\u0642 \u062A\u0631 \u0628\u0647 \u0622\u0646\u0627\u062A\u0648\u0645\u06CC \u0645\u0648\u0636\u0648\u0639\u06CC \u062C\u0648\u0627\u0646 \u0648 \u0648\u06CC\u0698\u06AF\u06CC \u0647\u0627\u06CC \u0641\u06CC\u0632\u06CC\u0648\u0644\u0648\u0698\u06CC\u06A9\u06CC \u0627\u0633\u0627\u0633\u06CC \u062F\u0627\u0631\u062F. \u0647\u0645\u0686\u0646\u06CC\u0646 \u0628\u0631 \u0622\u062E\u0631\u06CC\u0646 \u0645\u0642\u0627\u0644\u0627\u062A \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 \u062A\u0645\u0631\u06A9\u0632 \u062F\u0627\u0631\u062F.",
    students: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        initials: "EF",
        color: "h-purple"
      },
      {
        id: 33,
        picture: "/demo/avatars/33.jpg",
        initials: "HM",
        color: "h-yellow"
      },
      {
        id: 25,
        picture: "/demo/avatars/25.jpg",
        initials: "MW",
        color: "info"
      }
    ],
    participants: 49,
    duration: "45 \u062F\u0642\u06CC\u0642\u0647",
    comments: 25,
    week: 6,
    actionLabel: "\u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u062A\u0633\u06A9\u200C\u0647\u0627\u06CC \u0647\u0641\u062A\u0647 6",
    actionText: "3 \u0645\u0647\u0631 1400"
  },
  {
    id: 2,
    category: "\u0627\u06CC\u0645\u0648\u0646\u0648\u0644\u0648\u0698\u06CC",
    title: "IMM107 - \u0627\u06CC\u0645\u0648\u0646\u0648\u0644\u0648\u0698\u06CC \u0648 \u062F\u0631\u0645\u0627\u0646 \u0628\u06CC\u0645\u0627\u0631\u06CC\u0647\u0627\u06CC \u0627\u0646\u0633\u0627\u0646\u06CC",
    summary: "\u0627\u06CC\u0646 \u0648\u0627\u062D\u062F \u062A\u0645\u0631\u06A9\u0632 \u0642\u0648\u06CC \u0628\u0631 \u0645\u0634\u06A9\u0644\u0627\u062A \u0628\u0627\u0644\u06CC\u0646\u06CC \u0645\u0647\u0645 \u062F\u0631 \u0627\u06CC\u0645\u0648\u0646\u0648\u0644\u0648\u0698\u06CC \u0648 \u0632\u0645\u06CC\u0646\u0647 \u0639\u0644\u0645\u06CC \u0627\u06CC\u0646 \u0645\u0634\u06A9\u0644\u0627\u062A \u062F\u0627\u0631\u062F. ",
    students: [
      {
        id: 19,
        picture: "/demo/avatars/19.jpg",
        initials: "\u0627\u0632",
        color: "h-purple"
      },
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        initials: "CE",
        color: "h-yellow"
      },
      {
        id: 5,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "info"
      }
    ],
    participants: 26,
    duration: "95 \u062F\u0642\u06CC\u0642\u0647",
    comments: 0,
    week: 6,
    actionLabel: "\u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u062A\u0628\u06CC",
    actionText: "8 \u062F\u06CC 1400 9:00-12:00"
  },
  {
    id: 3,
    category: "\u0642\u0644\u0628 \u0648 \u0639\u0631\u0648\u0642",
    title: "CAR112 - \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062A\u0627\u0628\u0648\u0644\u06CC\u06A9 \u0642\u0644\u0628 \u0648 \u0639\u0631\u0648\u0642",
    summary: "\u0627\u06CC\u0646 \u0648\u0627\u062D\u062F \u062A\u0645\u0631\u06A9\u0632 \u0642\u0648\u06CC \u0628\u0631 \u0645\u0634\u06A9\u0644\u0627\u062A \u0628\u0627\u0644\u06CC\u0646\u06CC \u0645\u0647\u0645 \u062F\u0631 \u0627\u06CC\u0645\u0648\u0646\u0648\u0644\u0648\u0698\u06CC \u0648 \u0632\u0645\u06CC\u0646\u0647 \u0639\u0644\u0645\u06CC \u0627\u06CC\u0646 \u0645\u0634\u06A9\u0644\u0627\u062A \u062F\u0627\u0631\u062F.",
    students: [
      {
        id: 36,
        picture: "/demo/avatars/36.jpg",
        initials: "BL",
        color: "h-purple"
      },
      {
        id: 15,
        picture: "/demo/avatars/15.jpg",
        initials: "\u0647\u062D ",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        initials: "\u0646\u0645",
        color: "info"
      }
    ],
    participants: 54,
    duration: "95 \u062F\u0642\u06CC\u0642\u0647",
    comments: 0,
    week: 6,
    actionLabel: "\u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u062A\u0628\u06CC",
    actionText: "13 \u062F\u06CC 1400 9:00-12:00"
  }
];
const files = [
  {
    id: 1,
    icon: "/images/icons/files/pdf.svg",
    name: "\u0647\u0648\u0644\u062A\u0632 - \u0622\u0646\u0627\u062A\u0648\u0645\u06CC \u06A9\u0627\u0645\u0644",
    uploaded: "2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    size: "94.7 MB"
  },
  {
    id: 2,
    icon: "/images/icons/files/sheet.svg",
    name: "\u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u062F\u0648\u0632\u0647\u0627 \u0628\u062E\u0634 2",
    uploaded: "1 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
    size: "79 KB"
  },
  {
    id: 3,
    icon: "/images/icons/files/doc-2.svg",
    name: "\u0642\u0627\u0644\u0628 \u0622\u0632\u0645\u0648\u0646 \u06A9\u062A\u0628\u06CC",
    uploaded: "2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
    size: "42 KB"
  }
];
const students = [
  {
    id: 0,
    username: "\u062C\u0645\u0627\u0644",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    picture: "/images/avatars/svg/vuero-1.svg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
    attendance: "\u062D\u0636\u0648\u0631 \u0633\u0631\u0648\u0642\u062A",
    progress: 76
  },
  {
    id: 1,
    username: "\u062D\u0633\u0646",
    position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    picture: "/demo/avatars/22.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    industry: "\u062A\u062C\u0627\u0631\u06CC",
    status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
    attendance: "\u062D\u0636\u0648\u0631 \u0628\u0627 \u062A\u0623\u062E\u06CC\u0631 (10 \u062F\u0642\u06CC\u0642\u0647)",
    progress: 79
  },
  {
    id: 2,
    username: "\u0645\u0644\u0627\u0646\u06CC",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    picture: "/demo/avatars/25.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0633\u0646 \u062E\u0648\u0632\u0647",
    industry: "\u0637\u0631\u0627\u062D\u06CC",
    status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
    attendance: "\u062D\u0636\u0648\u0631 \u0633\u0631\u0648\u0642\u062A",
    progress: 58
  },
  {
    id: 3,
    username: "\u0627\u0634\u06A9\u0627\u0646",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0628\u06A9\u200C\u0627\u0646\u062F",
    picture: "/demo/avatars/12.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633",
    industry: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC",
    status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
    attendance: "\u062D\u0636\u0648\u0631 \u0633\u0631\u0648\u0642\u062A",
    progress: 66
  },
  {
    id: 4,
    username: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    picture: "/demo/avatars/13.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    industry: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
    status: "\u0645\u0634\u063A\u0648\u0644",
    attendance: "\u062D\u0636\u0648\u0631 \u0633\u0631\u0648\u0642\u062A",
    progress: 87
  }
];
var CourseDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "business-dashboard course-dashboard" };
const _hoisted_2 = { class: "dashboard-title is-main" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "\u06A9\u0644\u0627\u0633\u200C\u0647\u0627\u06CC \u0647\u0641\u062A\u0647 \u0634\u0634\u0645"),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile" }, "\u0634\u0631\u0648\u0639 \u06A9\u0644\u0627\u0633 \u0647\u0627 \u0627\u0632 6 \u062A\u0627 10 \u0645\u0647\u0631")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u06CC \u062F\u0631\u0633\u06CC");
const _hoisted_6 = { class: "course-grid" };
const _hoisted_7 = { class: "columns is-multiline" };
const _hoisted_8 = { class: "course-card" };
const _hoisted_9 = { class: "dark-inverted" };
const _hoisted_10 = { class: "students" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("a", { class: "link is-dark-primary" }, "\u0628\u062D\u062B \u06A9\u0644\u0627\u0633\u06CC", -1);
const _hoisted_12 = { class: "attached-block" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("a", { class: "is-dark-primary" }, "\u0631\u06A9\u0648\u0631\u062F \u0627\u0631\u0627\u0626\u0647 \u0647\u0641\u062A\u0647 6", -1);
const _hoisted_14 = { class: "block-stats" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_17 = { class: "attached-block" };
const _hoisted_18 = { class: "is-dark-primary" };
const _hoisted_19 = { class: "block-stats" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:calendar"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "action-block" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button h-button is-primary is-raised is-fullwidth" }, " \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0644\u0627\u0633 ")
], -1);
const _hoisted_22 = { class: "columns is-multiline tile-grid tile-grid-v2" };
const _hoisted_23 = { class: "column is-4" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "dashboard-title" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0647\u0641\u062A\u0647 \u0634\u0634\u0645"),
    /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u062F\u0631 \u06A9\u0644\u0627\u0633\u200C\u0647\u0627 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F ")
  ])
], -1);
const _hoisted_25 = { class: "tile-grid-item-inner" };
const _hoisted_26 = ["src"];
const _hoisted_27 = { class: "meta" };
const _hoisted_28 = { class: "dark-inverted" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_30 = { class: "column is-8" };
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<div class="dashboard-title"><div class="left"><h2 class="dark-inverted">\u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u0627\u0646</h2><p class="h-hidden-mobile">\u062C\u0632\u0626\u06CC\u0627\u062A\u06CC \u062E\u0644\u0627\u0635\u0647 \u0627\u0632 \u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u0627\u0646 \u062F\u0648\u0631\u0647\u200C\u0647\u0627</p></div><div class="right"><div class="field"><div class="control has-icon"><input type="text" class="input is-rounded" placeholder="\u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u0627\u0646..."><div class="form-icon"><i aria-hidden="true" class="iconify" data-icon="feather:search"></i></div></div></div></div></div>', 1);
const _hoisted_32 = { class: "flex-table" };
const _hoisted_33 = {
  class: "flex-table-cell is-media is-grow",
  "data-th": ""
};
const _hoisted_34 = { class: "item-name dark-inverted" };
const _hoisted_35 = { class: "item-meta" };
const _hoisted_36 = {
  class: "flex-table-cell",
  "data-th": "\u0645\u0648\u0642\u0639\u06CC\u062A"
};
const _hoisted_37 = { class: "light-text" };
const _hoisted_38 = {
  class: "flex-table-cell",
  "data-th": "\u0648\u0636\u0639\u06CC\u062A"
};
const _hoisted_39 = {
  class: "flex-table-cell",
  "data-th": "\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC"
};
const _hoisted_40 = { class: "light-text" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("div", {
  class: "flex-table-cell cell-end",
  "data-th": "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"
}, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button h-button action-button is-dark-outlined is-pushed-mobile" }, " \u06AF\u067E ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VAvatar = _sfc_main$2;
      const _component_FileTileDropdown = __unplugin_components_4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VButton, {
              color: "primary",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(courses), (course) => {
              return openBlock(), createElementBlock("div", {
                key: course.id,
                class: "column is-4"
              }, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("span", {
                    class: normalizeClass(["tag is-elevated", [
                      course.category === "\u0622\u0646\u0627\u062A\u0648\u0645\u06CC" && "is-green",
                      course.category === "\u0627\u06CC\u0645\u0648\u0646\u0648\u0644\u0648\u0698\u06CC" && "is-purple",
                      course.category === "\u0642\u0644\u0628 \u0648 \u0639\u0631\u0648\u0642" && "is-danger"
                    ]])
                  }, toDisplayString(course.category), 3),
                  createBaseVNode("h3", _hoisted_9, toDisplayString(course.title), 1),
                  createBaseVNode("p", null, toDisplayString(course.summary), 1),
                  createBaseVNode("div", _hoisted_10, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(course.students, (student) => {
                      return openBlock(), createBlock(_component_VAvatar, {
                        key: student.id,
                        picture: student.picture,
                        size: "small"
                      }, null, 8, ["picture"]);
                    }), 128)),
                    createVNode(_component_VAvatar, {
                      size: "small",
                      initials: `+${course.participants - 3}`
                    }, null, 8, ["initials"]),
                    _hoisted_11
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    _hoisted_13,
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("span", null, [
                        _hoisted_15,
                        createBaseVNode("small", null, toDisplayString(course.duration), 1)
                      ]),
                      createBaseVNode("span", null, [
                        _hoisted_16,
                        createBaseVNode("small", null, toDisplayString(course.comments), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("a", _hoisted_18, toDisplayString(course.actionLabel), 1),
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("span", null, [
                        _hoisted_20,
                        createBaseVNode("small", null, toDisplayString(course.actionText), 1)
                      ])
                    ])
                  ]),
                  _hoisted_21
                ])
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            _hoisted_24,
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(files), (file) => {
              return openBlock(), createElementBlock("div", {
                key: file.id,
                class: "tile-grid-item"
              }, [
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("img", {
                    src: file.icon,
                    alt: ""
                  }, null, 8, _hoisted_26),
                  createBaseVNode("div", _hoisted_27, [
                    createBaseVNode("span", _hoisted_28, toDisplayString(file.name), 1),
                    createBaseVNode("span", null, [
                      createBaseVNode("span", null, toDisplayString(file.size), 1),
                      _hoisted_29,
                      createBaseVNode("span", null, "\u0622\u067E\u0644\u0648\u062F \u0634\u062F\u0647 " + toDisplayString(file.uploaded), 1)
                    ])
                  ]),
                  createVNode(_component_FileTileDropdown)
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_30, [
            _hoisted_31,
            createBaseVNode("div", _hoisted_32, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(students), (student) => {
                return openBlock(), createElementBlock("div", {
                  key: student.id,
                  class: "flex-table-item"
                }, [
                  createBaseVNode("div", _hoisted_33, [
                    createVNode(_component_VAvatar, {
                      picture: student.picture,
                      size: "medium"
                    }, null, 8, ["picture"]),
                    createBaseVNode("div", null, [
                      createBaseVNode("span", _hoisted_34, toDisplayString(student.username), 1),
                      createBaseVNode("span", _hoisted_35, [
                        createBaseVNode("span", null, toDisplayString(student.progress) + "\u062F\u0631\u0635\u062F \u06A9\u0627\u0645\u0644 \u0634\u062F\u0647", 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("span", _hoisted_37, toDisplayString(student.location), 1)
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createBaseVNode("span", {
                      class: normalizeClass(["tag is-rounded", [
                        student.status === "\u0622\u0646\u0644\u0627\u06CC\u0646" && "is-green",
                        student.status === "\u0645\u0634\u063A\u0648\u0644" && "is-orange",
                        student.status === "\u0622\u0641\u0644\u0627\u06CC\u0646" && ""
                      ]])
                    }, toDisplayString(student.status), 3)
                  ]),
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("span", _hoisted_40, toDisplayString(student.attendance), 1)
                  ]),
                  _hoisted_41
                ]);
              }), 128))
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
