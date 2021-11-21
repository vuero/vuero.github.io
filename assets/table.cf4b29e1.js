import { d as defineComponent, o as openBlock, b as createElementBlock, F as renderSlot, n as normalizeClass } from "./vendor.9ec557a4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    compact: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["flex-table", [props.compact && "is-compact"]])
      }, [
        renderSlot(_ctx.$slots, "header"),
        renderSlot(_ctx.$slots, "body")
      ], 2);
    };
  }
});
const flexRowsBasic = [
  {
    id: 0,
    company: "\u062F\u06CC\u062C\u06CC\u06A9\u0627\u0644\u0627",
    type: "\u0633\u0641\u0627\u0631\u0634 \u062C\u062F\u06CC\u062F",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0641\u0639\u0627\u0644",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 1,
        picture: void 0,
        initials: "JP",
        color: "info"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "EK",
        color: "h-purple"
      },
      {
        id: 3,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "danger"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      }
    ]
  },
  {
    id: 1,
    company: "\u0627\u0633\u0646\u067E",
    type: "\u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647",
    industry: "\u0631\u0645\u0632 \u0627\u0631\u0632",
    status: "\u062C\u062F\u06CC\u062F",
    contacts: [
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 2,
    company: "\u0639\u0644\u06CC \u0628\u0627\u0628\u0627",
    type: "\u0633\u0641\u0627\u0631\u0634 \u062C\u062F\u06CC\u062F",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0641\u0639\u0627\u0644",
    contacts: [
      {
        id: 12,
        picture: void 0,
        initials: "BT",
        color: "success"
      },
      {
        id: 9,
        picture: "/demo/avatars/7.jpg",
        initials: "AC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 3,
    company: "\u062C\u0627\u0628\u0627\u0645\u0627",
    type: "\u06A9\u0646\u0633\u0644 \u0634\u062F",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644",
    contacts: [
      {
        id: 7,
        picture: "/demo/avatars/13.jpg",
        initials: "\u0627\u0686",
        color: "info"
      }
    ]
  },
  {
    id: 4,
    company: "\u062A\u062E\u0641\u06CC\u0641\u0627\u0646",
    type: "\u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: "/demo/avatars/11.jpg",
        initials: "KL",
        color: "danger"
      },
      {
        id: 17,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      }
    ]
  }
];
const flexRowsAdvanced = [
  {
    id: 0,
    username: "\u062C\u0645\u0627\u0644",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    picture: "/images/avatars/svg/vuero-1.svg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633",
    industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    status: "\u0641\u0639\u0627\u0644",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 1,
        picture: void 0,
        initials: "JP",
        color: "info"
      },
      {
        id: 2,
        picture: "/images/avatars/svg/vuero-1.svg",
        initials: "EK",
        color: "h-purple"
      },
      {
        id: 3,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "danger"
      },
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "success"
      }
    ]
  },
  {
    id: 1,
    username: "\u062C\u06CC\u0645\u06CC",
    position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    picture: "/demo/avatars/22.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    industry: "\u062A\u062C\u0627\u0631\u06CC",
    status: "\u062C\u062F\u06CC\u062F",
    contacts: [
      {
        id: 4,
        picture: void 0,
        initials: "SC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 2,
    username: "\u0645\u0644\u0627\u0646\u06CC",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    picture: "/demo/avatars/25.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0633\u0646 \u062E\u0648\u0632\u0647",
    industry: "\u0637\u0631\u0627\u062D\u06CC",
    status: "\u0641\u0639\u0627\u0644",
    contacts: [
      {
        id: 12,
        picture: void 0,
        initials: "BT",
        color: "success"
      },
      {
        id: 9,
        picture: "/demo/avatars/7.jpg",
        initials: "AC",
        color: "h-purple"
      }
    ]
  },
  {
    id: 3,
    username: "\u0627\u0634\u06A9\u0627\u0646",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0628\u06A9\u200C\u0627\u0646\u062F",
    picture: "/demo/avatars/12.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633",
    industry: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC",
    status: "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644",
    contacts: [
      {
        id: 7,
        picture: "/demo/avatars/13.jpg",
        initials: "\u0627\u0686",
        color: "info"
      }
    ]
  },
  {
    id: 4,
    username: "\u062A\u06CC\u0646\u0627",
    position: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    picture: "/demo/avatars/13.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    industry: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
    status: "\u0645\u0639\u0644\u0642 \u0634\u062F\u0647",
    contacts: [
      {
        id: 0,
        picture: "/demo/avatars/25.jpg",
        initials: "AC",
        color: "info"
      },
      {
        id: 14,
        picture: "/demo/avatars/11.jpg",
        initials: "KL",
        color: "danger"
      },
      {
        id: 17,
        picture: "/demo/avatars/5.jpg",
        initials: "ML",
        color: "warning"
      }
    ]
  }
];
export { _sfc_main as _, flexRowsBasic as a, flexRowsAdvanced as f };
