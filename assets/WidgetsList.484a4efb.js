import { _ as _sfc_main$5 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, G as Fragment, J as renderList, v as createVNode, e as createBaseVNode, E as toDisplayString, N as createBlock, x as withCtx, t as unref, n as normalizeClass } from "./vendor.9ec557a4.js";
import { a as _sfc_main$6, _ as _sfc_main$9 } from "./ListWidgetSingle.7cc0502b.js";
import { _ as __unplugin_components_0$1 } from "./VDropdown.5214d40f.js";
import { _ as _export_sfc } from "./index.4d6c8e1a.js";
import { c as todoList1, d as todoList2, t as todoList3, a as todoList4, b as _sfc_main$7, _ as _sfc_main$8 } from "./todoList.5ea85247.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
const _hoisted_1$4 = { class: "flex-meta is-light" };
const _hoisted_2$4 = { href: "#" };
const _hoisted_3$4 = { class: "flex-end" };
const _hoisted_4$4 = ["data-content"];
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_6$2 = [
  _hoisted_5$2
];
const _hoisted_7$2 = ["data-content"];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    users: { type: Array, required: false, default: () => [] },
    squared: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.users, (user) => {
          return openBlock(), createElementBlock("div", {
            key: user.id,
            class: "inner-list-item media-flex-center"
          }, [
            createVNode(_component_VAvatar, {
              picture: user.picture,
              squared: props.squared
            }, null, 8, ["picture", "squared"]),
            createBaseVNode("div", _hoisted_1$4, [
              createBaseVNode("a", _hoisted_2$4, toDisplayString(user.name), 1),
              createBaseVNode("span", null, toDisplayString(user.position), 1)
            ]),
            createBaseVNode("div", _hoisted_3$4, [
              user.progress < 0 ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: "#",
                class: "go-icon is-down",
                "data-content": user.progress + "%"
              }, _hoisted_6$2, 8, _hoisted_4$4)) : (openBlock(), createElementBlock("a", {
                key: 1,
                href: "#",
                class: "go-icon is-up",
                "data-content": "+" + user.progress + "%"
              }, _hoisted_9$1, 8, _hoisted_7$2))
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const _sfc_main$3 = {};
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cloud-download"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0646\u0644\u0648\u062F"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644")
  ])
], -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cloud-upload"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0646\u0633\u062E\u0647 \u062A\u0627\u0632\u0647")
  ])
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-lock"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062C\u0648\u0632\u200C\u0647\u0627"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u0641\u0627\u06CC\u0644")
  ])
], -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-share"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644")
  ])
], -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-trash-can-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0630\u0641"),
    /* @__PURE__ */ createBaseVNode("span", null, "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = __unplugin_components_0$1;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    dots: "",
    right: "",
    spaced: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$3,
      _hoisted_2$3,
      _hoisted_3$3,
      _hoisted_4$3,
      _hoisted_5$1,
      _hoisted_6$1,
      _hoisted_7$1
    ]),
    _: 1
  });
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _hoisted_1$2 = ["src"];
const _hoisted_2$2 = { class: "flex-meta is-light" };
const _hoisted_3$2 = { href: "#" };
const _hoisted_4$2 = { class: "flex-end" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    files: { type: Array, required: false, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_ListWidgetFileDropdown = __unplugin_components_0;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.files, (file) => {
          return openBlock(), createElementBlock("div", {
            key: file.id,
            class: "inner-list-item media-flex-center"
          }, [
            createBaseVNode("img", {
              class: "image-icon",
              src: file.icon,
              alt: ""
            }, null, 8, _hoisted_1$2),
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("a", _hoisted_3$2, toDisplayString(file.name), 1),
              createBaseVNode("span", null, toDisplayString(file.type), 1)
            ]),
            createBaseVNode("div", _hoisted_4$2, [
              createVNode(_component_ListWidgetFileDropdown)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "icon-timeline" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = ["data-icon"];
const _hoisted_4$1 = { class: "timeline-content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    items: { type: Array, required: false, default: () => [] },
    squared: { type: Boolean, required: false },
    colored: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: "timeline-item"
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["timeline-icon", [
                props.squared && "is-squared",
                props.colored && "is-" + item.color
              ]])
            }, [
              item.picture ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "avatar",
                src: item.picture,
                alt: "",
                onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
              }, null, 40, _hoisted_2$1)) : (openBlock(), createElementBlock("i", {
                key: 1,
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": item.icon
              }, null, 8, _hoisted_3$1))
            ], 2),
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("p", null, toDisplayString(item.title), 1),
              createBaseVNode("span", null, toDisplayString(item.time), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const fileList1 = [
  {
    id: 0,
    icon: "/images/icons/files/zip-format.svg",
    name: "theme.zip",
    type: "\u0641\u0648\u0644\u062F\u0631 \u0632\u06CC\u067E \u0634\u062F\u0647"
  },
  {
    id: 1,
    icon: "/images/icons/files/doc-2.svg",
    name: "project_outline.doc",
    type: "\u0641\u0627\u06CC\u0644 \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0622\u0641\u06CC\u0633 \u0648\u0648\u0631\u062F"
  },
  {
    id: 2,
    icon: "/images/icons/files/pdf.svg",
    name: "requirements_v3.pdf",
    type: "\u0641\u0627\u06CC\u0644 \u067E\u06CC\u200C\u062F\u06CC\u200C\u0627\u0641"
  },
  {
    id: 3,
    icon: "/images/icons/files/sheet.svg",
    name: "project_budget.xsls",
    type: "\u0641\u0627\u06CC\u0644 \u0627\u06A9\u0633\u0644"
  },
  {
    id: 4,
    icon: "/images/icons/files/ai.svg",
    name: "wireframes.ai",
    type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
  },
  {
    id: 5,
    icon: "/images/icons/files/sheet.svg",
    name: "invoice_recap.xsls",
    type: "\u0641\u0627\u06CC\u0644 \u0627\u06A9\u0633\u0644"
  }
];
const fileList2 = [
  {
    id: 6,
    icon: "/images/icons/files/ai.svg",
    name: "header.ai",
    type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
  },
  {
    id: 7,
    icon: "/images/icons/files/ai.svg",
    name: "section.ai",
    type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
  },
  {
    id: 8,
    icon: "/images/icons/files/ai.svg",
    name: "footer.ai",
    type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
  },
  {
    id: 9,
    icon: "/images/icons/files/zip-format.svg",
    name: "theme_assets.zip",
    type: "\u0641\u0648\u0644\u062F\u0631 \u0632\u06CC\u067E \u0634\u062F\u0647"
  },
  {
    id: 10,
    icon: "/images/icons/files/doc-2.svg",
    name: "team_structure.doc",
    type: "\u0641\u0627\u06CC\u0644 \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0622\u0641\u06CC\u0633 \u0648\u0648\u0631\u062F"
  },
  {
    id: 11,
    icon: "/images/icons/files/doc-2.svg",
    name: "meeting_notes.doc",
    type: "\u0641\u0627\u06CC\u0644 \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0622\u0641\u06CC\u0633 \u0648\u0648\u0631\u062F"
  }
];
const userList = [
  {
    id: 0,
    picture: "/demo/avatars/31.jpg",
    name: "\u06CC\u0627\u0633\u06CC\u0646 \u0639\u0638\u06CC\u0645\u06CC",
    position: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    progress: 18
  },
  {
    id: 1,
    picture: "/demo/avatars/5.jpg",
    name: "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC",
    position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    progress: 22
  },
  {
    id: 2,
    picture: "/images/avatars/svg/vuero-1.svg",
    name: "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    progress: -12
  },
  {
    id: 3,
    picture: "/demo/avatars/32.jpg",
    name: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9\u0627\u0631\u06AF\u0631",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    progress: 32
  },
  {
    id: 4,
    picture: "/demo/avatars/21.jpg",
    name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0645\u0627\u0647\u06CC \u0641\u0631\u0648\u0634",
    position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
    progress: -4
  },
  {
    id: 5,
    picture: "/demo/avatars/21.jpg",
    name: "\u062A\u0627\u0631\u0627 \u062E\u0627\u0634\u0642\u0686\u06CC",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    progress: 32
  }
];
const topicList = [
  {
    id: 0,
    icon: "feather:chrome",
    color: "info",
    name: "\u0645\u0631\u0648\u0631\u06AF\u0631\u0647\u0627",
    category: "\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC",
    users: [
      {
        id: 2,
        picture: "/demo/avatars/12.jpg"
      },
      {
        id: 5,
        picture: "/demo/avatars/22.jpg"
      },
      {
        id: 11,
        picture: "/demo/avatars/40.jpg"
      },
      {
        id: 100,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 101,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 102,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 103,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 104,
        picture: "https://via.placeholder.com/150x150"
      }
    ]
  },
  {
    id: 1,
    icon: "feather:wind",
    color: "green",
    name: "\u0627\u06A9\u0648\u0633\u06CC\u0633\u062A\u0645 \u0637\u0628\u06CC\u0639\u06CC",
    category: "\u0645\u062D\u06CC\u0637 \u0632\u06CC\u0633\u062A",
    users: [
      {
        id: 1,
        picture: "/demo/avatars/9.jpg"
      },
      {
        id: 3,
        picture: "/images/avatars/svg/vuero-1.svg"
      }
    ]
  },
  {
    id: 2,
    icon: "feather:cpu",
    color: "orange",
    name: "\u0686\u06CC\u067E\u200C\u0647\u0627\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631\u06CC",
    category: "\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC",
    users: [
      {
        id: 0,
        picture: "/demo/avatars/7.jpg"
      },
      {
        id: 21,
        picture: "/demo/avatars/23.jpg"
      }
    ]
  },
  {
    id: 3,
    icon: "feather:music",
    color: "purple",
    name: "\u0628\u062F\u0627\u0647\u0647 \u0633\u0627\u0632\u06CC \u0645\u0648\u062F\u0627\u0644",
    category: "\u0645\u0648\u0633\u06CC\u0642\u06CC",
    users: [
      {
        id: 7,
        picture: "/demo/avatars/18.jpg"
      },
      {
        id: 6,
        picture: "/demo/avatars/13.jpg"
      },
      {
        id: 3,
        picture: "/images/avatars/svg/vuero-1.svg"
      },
      {
        id: 100,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 101,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 102,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 103,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 104,
        picture: "https://via.placeholder.com/150x150"
      }
    ]
  },
  {
    id: 4,
    icon: "feather:monitor",
    color: "yellow",
    name: "\u0641\u06CC\u0644\u0645\u200C\u0647\u0627\u06CC \u0642\u062F\u06CC\u0645\u06CC",
    category: "\u0633\u0631\u06AF\u0631\u0645\u06CC",
    users: [
      {
        id: 28,
        picture: "/demo/avatars/32.jpg"
      },
      {
        id: 20,
        picture: "/demo/avatars/22.jpg"
      }
    ]
  },
  {
    id: 5,
    icon: "feather:github",
    color: "purple",
    name: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u06AF\u06CC\u062A",
    category: "\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC",
    users: [
      {
        id: 10,
        picture: "/demo/avatars/27.jpg"
      },
      {
        id: 16,
        picture: "/demo/avatars/16.jpg"
      },
      {
        id: 25,
        picture: "/demo/avatars/29.jpg"
      },
      {
        id: 100,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 101,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 102,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 103,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 104,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 105,
        picture: "https://via.placeholder.com/150x150"
      },
      {
        id: 106,
        picture: "https://via.placeholder.com/150x150"
      }
    ]
  }
];
const timeline = [
  {
    id: 0,
    icon: "feather:phone-call",
    picture: void 0,
    title: "\u0628\u0627 \u062F\u0646\u06CC \u062F\u0631 \u06A9\u0644\u0628\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F",
    time: "\u0627\u0645\u0631\u0648\u0632 - 11:30 \u0635\u0628\u062D",
    color: "primary"
  },
  {
    id: 1,
    icon: "feather:phone-call",
    picture: "/demo/avatars/7.jpg",
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0622\u0644\u06CC\u0633",
    time: "\u0627\u0645\u0631\u0648\u0632 - 01:00 \u0628.\u0638",
    color: ""
  },
  {
    id: 2,
    icon: "feather:message-circle",
    picture: void 0,
    title: "\u0628\u0647 \u067E\u06CC\u0627\u0645 \u0622\u0646\u06CC \u067E\u0627\u0633\u062E \u062F\u0647\u06CC\u062F",
    time: "\u0627\u0645\u0631\u0648\u0632 - 01:45 \u0628.\u0638",
    color: "info"
  },
  {
    id: 3,
    icon: "feather:mail",
    picture: void 0,
    title: "\u0627\u0631\u0633\u0627\u0644 \u06A9\u0645\u067E\u06CC\u0646 \u062C\u062F\u06CC\u062F",
    time: "\u0627\u0645\u0631\u0648\u0632 - 02:30 \u0628.\u0638",
    color: "success"
  },
  {
    id: 4,
    icon: "feather:smile",
    picture: void 0,
    title: "\u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647",
    time: "\u0627\u0645\u0631\u0648\u0632 - 03:30 \u0628.\u0638",
    color: ""
  },
  {
    id: 5,
    icon: "feather:phone-call",
    picture: void 0,
    title: "\u0628\u0627 \u062A\u0631\u06CC\u0634\u0627 \u062C\u06A9\u0633\u0648\u0646 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F",
    time: "\u0627\u0645\u0631\u0648\u0632 - 05:00 \u0628.\u0638",
    color: "orange"
  },
  {
    id: 6,
    icon: "feather:feather",
    picture: void 0,
    title: "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0628\u0631\u0627\u06CC \u062D\u0633\u0646 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F",
    time: "\u0627\u0645\u0631\u0648\u0632 - 06:00 \u0628.\u0638",
    color: "yellow"
  }
];
var WidgetsList_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "columns is-multiline widget-demo-columns half-columns" };
const _hoisted_2 = { class: "column is-4" };
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "column is-4" };
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = { class: "column is-4" };
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = { class: "column is-4" };
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = { class: "column is-4" };
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = { class: "column is-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_listWidgetUserList = _sfc_main$4;
      const _component_ListWidgetSingle = _sfc_main$6;
      const _component_listWidgetFileList = _sfc_main$2;
      const _component_ListWidgetTabbed = _sfc_main$7;
      const _component_ListWidgetTodoList = _sfc_main$8;
      const _component_listWidgetTopicList = _sfc_main$9;
      const _component_ListWidgetIconTimeline = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0627\u0631\u0628\u0631",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetUserList, { users: unref(userList) }, null, 8, ["users"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0627\u0631\u0628\u0631",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetUserList, {
                users: unref(userList),
                squared: ""
              }, null, 8, ["users"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_ListWidgetTabbed, {
            title: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
            straight: "",
            class: "list-widget-v2"
          }, {
            tab1: withCtx(() => [
              createVNode(_component_listWidgetFileList, { files: unref(fileList1) }, null, 8, ["files"])
            ]),
            tab2: withCtx(() => [
              createVNode(_component_listWidgetFileList, { files: unref(fileList2) }, null, 8, ["files"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u062A\u0633\u06A9\u200C\u0647\u0627",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, {
                todos: unref(todoList1),
                color: "warning"
              }, null, 8, ["todos"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u062A\u0633\u06A9\u200C\u0647\u0627",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, {
                todos: unref(todoList2),
                color: "info"
              }, null, 8, ["todos"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_7, [
          createVNode(_component_ListWidgetTabbed, {
            title: "\u062A\u0633\u06A9\u200C\u0647\u0627",
            straight: "",
            labels: ["\u0647\u0645\u0647", "\u0645\u0627\u0644 \u0645\u0646"],
            class: "list-widget-v2"
          }, {
            tab1: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, { todos: unref(todoList3) }, null, 8, ["todos"])
            ]),
            tab2: withCtx(() => [
              createVNode(_component_ListWidgetTodoList, { todos: unref(todoList4) }, null, 8, ["todos"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u0645\u0648\u0636\u0648\u0639\u0627\u062A",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetTopicList, {
                topics: unref(topicList),
                rounded: ""
              }, null, 8, ["topics"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u0645\u0648\u0636\u0648\u0639\u0627\u062A",
            straight: "",
            class: "list-widget-v1"
          }, {
            default: withCtx(() => [
              createVNode(_component_listWidgetTopicList, { topics: unref(topicList) }, null, 8, ["topics"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_10, [
          createVNode(_component_ListWidgetTabbed, {
            title: "\u0645\u0648\u0636\u0648\u0639\u0627\u062A",
            straight: "",
            class: "list-widget-v2"
          }, {
            tab1: withCtx(() => [
              createVNode(_component_listWidgetTopicList, { topics: unref(topicList) }, null, 8, ["topics"])
            ]),
            tab2: withCtx(() => [
              createVNode(_component_listWidgetTopicList, { topics: unref(topicList) }, null, 8, ["topics"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u062A\u0627\u06CC\u0645 \u0644\u0627\u06CC\u0646",
            straight: "",
            class: "list-widget-v3"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetIconTimeline, { items: unref(timeline) }, null, 8, ["items"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_12, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u062A\u0627\u06CC\u0645 \u0644\u0627\u06CC\u0646",
            straight: "",
            class: "list-widget-v3"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetIconTimeline, {
                items: unref(timeline),
                squared: ""
              }, null, 8, ["items"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_13, [
          createVNode(_component_ListWidgetSingle, {
            title: "\u062A\u0627\u06CC\u0645 \u0644\u0627\u06CC\u0646",
            straight: "",
            class: "list-widget-v3"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListWidgetIconTimeline, {
                items: unref(timeline),
                squared: "",
                colored: ""
              }, null, 8, ["items"])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
