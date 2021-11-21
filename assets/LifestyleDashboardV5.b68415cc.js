import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, L as resolveDirective, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, G as Fragment, J as renderList, N as createBlock, t as unref, n as normalizeClass, y as withDirectives, E as toDisplayString, D as createCommentVNode } from "./vendor.9ec557a4.js";
const members = {
  count: 10,
  list: [
    {
      id: 33,
      avatar: "/demo/avatars/33.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u0647\u0627\u0631\u0648\u06CC",
      fullName: "\u0647\u0627\u0631\u0648\u06CC \u0645\u06CC\u0644\u0631",
      initials: "HM",
      color: "success",
      location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
      position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
      bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
    },
    {
      id: 12,
      avatar: "/demo/avatars/12.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u0627\u0634\u06A9\u0627\u0646",
      fullName: "\u0627\u0634\u06A9\u0627\u0646 \u067E\u0627\u0631\u0633\u0627",
      initials: "\u0627\u067E",
      color: "success",
      location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
      position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0628\u06A9\u200C\u0627\u0646\u062F",
      bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
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
      bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
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
      bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
    }
  ]
};
const featuredLeft = {
  id: 1,
  videos: [
    {
      id: 1,
      new: true,
      size: "large",
      poster: "https://source.unsplash.com/-VHQ0cw2euA/800x600",
      name: "\u0628\u0647\u062A\u0631\u06CC\u0646 \u0631\u0627\u0647 \u0647\u0627 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u06CC\u0645 \u062E\u0648\u0628",
      duration: "01:43",
      author: {
        name: "\u062C\u0645\u0627\u0644",
        avatar: "/images/avatars/svg/vuero-1.svg"
      },
      comments: 2
    },
    {
      id: 2,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/S2jw81lfrG0/800x600",
      name: "\u06A9\u06CC\u06A9 \u0647\u0627\u06CC \u0632\u06CC\u0628\u0627 \u0648 \u062E\u0648\u0634 \u0637\u0639\u0645 \u0628\u067E\u0632\u06CC\u062F",
      duration: "05:17",
      author: {
        name: "\u0622\u0644\u06CC\u0633",
        avatar: "/demo/avatars/7.jpg"
      },
      comments: 3
    },
    {
      id: 3,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/7F65HDP0-E0/800x600",
      name: "\u0622\u062E\u0631\u06CC\u0646 \u0633\u0641\u0631 \u0645\u0646 \u0628\u0647 \u0631\u06CC\u0648\u062F\u0648\u0698\u0627\u0646\u06CC\u0631\u0648 \u062F\u0631 \u06F3 \u062F\u0642\u06CC\u0642\u0647",
      duration: "03:12",
      author: {
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
        avatar: "/demo/avatars/13.jpg"
      },
      comments: 0
    }
  ]
};
const featuredRight = {
  id: 2,
  videos: [
    {
      id: 4,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/W_MUqtuHwyY/800x600",
      name: "\u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0622\u0646 \u0645\u06A9\u0627\u0646 \u0647\u0627 \u062F\u06CC\u062F\u0646 \u06A9\u0646\u06CC\u062F",
      duration: "04:24",
      author: {
        name: "\u0627\u0634\u06A9\u0627\u0646",
        avatar: "/demo/avatars/12.jpg"
      },
      comments: 5
    },
    {
      id: 5,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/h4i9G-de7Po/800x600",
      name: "\u0628\u0647\u062A\u0631\u06CC\u0646 \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062A\u0645\u0631\u06CC\u0646 \u0628\u0631\u0627\u06CC \u0632\u0646\u0627\u0646",
      duration: "04:24",
      author: {
        name: "\u0627\u0631\u0633\u0637\u0648",
        avatar: "/demo/avatars/19.jpg"
      },
      comments: 3
    },
    {
      id: 6,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/_CFv3bntQlQ/800x600",
      name: "\u06F1\u06F0 \u0645\u0648\u062C \u0628\u0627\u0648\u0631 \u0646\u06A9\u0631\u062F\u0646\u06CC \u062A\u0648\u0633\u0637 \u062D\u0631\u0641\u0647 \u0627\u06CC \u0647\u0627 \u062D\u0631\u06A9\u062A \u06A9\u0631\u062F",
      duration: "07:11",
      author: {
        name: "\u0645\u0631\u06CC\u0645",
        avatar: "/demo/avatars/5.jpg"
      },
      comments: 3
    },
    {
      id: 7,
      new: false,
      size: "regular",
      poster: "https://source.unsplash.com/sp-p7uuT0tw/800x600",
      name: "\u062C\u0646\u06AF\u0644 \u0647\u0627\u06CC \u0628\u0627\u0631\u0627\u0646\u06CC \u062C\u0630\u0627\u0628 \u062F\u0631 \u0633\u0631\u0627\u0633\u0631 \u062C\u0647\u0627\u0646",
      duration: "12:37",
      author: {
        name: "\u0646\u0642\u06CC",
        avatar: "/demo/avatars/18.jpg"
      },
      comments: 9
    }
  ]
};
const feed = [
  {
    id: 8,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/jmURdhtm7Ng/800x600",
    name: "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0646\u0647\u0627\u06CC\u06CC \u0645\u0631\u0627\u0642\u0628\u062A \u0627\u0632 \u0631\u06CC\u0634",
    duration: "04:24",
    author: {
      name: "\u0627\u0634\u06A9\u0627\u0646",
      avatar: "/demo/avatars/12.jpg"
    },
    comments: 5
  },
  {
    id: 9,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/j7lTi6MtYgk/800x600",
    name: "\u062A\u0633\u062A \u0631\u0627\u0646\u0646\u062F\u06AF\u06CC \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0646\u0633\u062E\u0647 \u062A\u0633\u0644\u0627",
    duration: "12:18",
    author: {
      name: "\u0645\u0631\u06CC\u0645",
      avatar: "/demo/avatars/5.jpg"
    },
    comments: 4
  },
  {
    id: 10,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/RN6ts8IZ4_0/800x600",
    name: "\u06F5 \u0645\u06A9\u0627\u0646\u06CC \u06A9\u0647 \u062D\u062A\u0645\u0627 \u0628\u0627\u06CC\u062F \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F",
    duration: "06:19",
    author: {
      name: "\u06A9\u0627\u0631\u0645\u0646",
      avatar: "/demo/avatars/27.jpg"
    },
    comments: 8
  },
  {
    id: 11,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/sS9AkuTE9aA/800x600",
    name: "\u0686\u0631\u0627 \u0628\u0627\u06CC\u062F \u0642\u0628\u0644 \u0627\u0632 \u062E\u0631\u06CC\u062F \u0627\u0628\u062A\u062F\u0627 \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u06CC\u0632\u06CC \u06A9\u0646\u06CC\u062F",
    duration: "03:49",
    author: {
      name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
      avatar: "/demo/avatars/21.jpg"
    },
    comments: 11
  },
  {
    id: 12,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/_h1IO0AHilM/800x600",
    name: "\u06F1\u06F0 \u0634\u0647\u0631 \u0622\u0633\u06CC\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0627\u06CC\u062F \u0628\u0647 \u0622\u0646\u0647\u0627 \u0633\u0641\u0631 \u06A9\u0646\u06CC\u062F",
    duration: "07:21",
    author: {
      name: "\u0631\u06CC\u062D\u0627\u0646\u0647",
      avatar: "/demo/avatars/23.jpg"
    },
    comments: 9
  },
  {
    id: 13,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/xTkxZN_DV8o/800x600",
    name: "\u0633\u0641\u0631 \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u06F6 \u0645\u0627\u0647\u0647 \u0645\u0627 \u062F\u0631 \u0633\u0631\u0627\u0633\u0631 \u062C\u0647\u0627\u0646",
    duration: "15:39",
    author: {
      name: "\u062C\u0645\u06CC\u0644\u0647",
      avatar: "/demo/avatars/40.jpg"
    },
    comments: 2
  },
  {
    id: 14,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/ilvDG96PRWo/800x600",
    name: "\u062E\u0627\u0646\u0647 \u0647\u0627\u06CC \u0622\u0628\u06CC \u0633\u0646\u062A\u06CC \u062F\u0631 \u0645\u0631\u0627\u06A9\u0634",
    duration: "11:16",
    author: {
      name: "\u062F\u0627\u0648\u0648\u062F",
      avatar: "/demo/avatars/22.jpg"
    },
    comments: 0
  },
  {
    id: 14,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/H8w5w4AiY1Q/800x600",
    name: "\u06F8 \u0641\u0639\u0627\u0644\u06CC\u062A \u0639\u0627\u0644\u06CC \u0628\u0631\u0627\u06CC \u0627\u0646\u062C\u0627\u0645 \u062F\u0627\u062F\u0646 \u0628\u0627 \u062E\u0627\u0646\u0648\u0627\u062F\u0647",
    duration: "08:43",
    author: {
      name: "\u062C\u06CC\u0633\u0648\u0646",
      avatar: "/demo/avatars/16.jpg"
    },
    comments: 6
  },
  {
    id: 15,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/Oalh2MojUuk/800x600",
    name: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0631\u0648\u0634 \u062A\u0648\u0633\u0639\u0647 \u0645\u0646\u0627\u0633\u0628",
    duration: "07:16",
    author: {
      name: "\u0627\u0634\u06A9\u0627\u0646",
      avatar: "/demo/avatars/12.jpg"
    },
    comments: 5
  },
  {
    id: 16,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/7okkFhxrxNw/800x600",
    name: "\u0686\u06AF\u0648\u0646\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0647\u0645\u06A9\u0627\u0631 \u0628\u0647\u0631\u0647 \u0648\u0631\u06CC \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u0645\u06CC \u062F\u0647\u062F",
    duration: "11:17",
    author: {
      name: "\u0645\u0644\u0627\u0646\u06CC",
      avatar: "/demo/avatars/25.jpg"
    },
    comments: 12
  },
  {
    id: 17,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/Z9VQmkpxLNU/800x600",
    name: "\u0645\u0642\u062F\u0645\u0647 \u0627\u06CC \u0628\u0631 \u0647\u0646\u0631 \u0631\u0627\u06AF\u0628\u06CC",
    duration: "11:17",
    author: {
      name: "\u06A9\u0645\u0627\u0644",
      avatar: "/demo/avatars/30.jpg"
    },
    comments: 3
  },
  {
    id: 18,
    new: false,
    size: "regular",
    poster: "https://source.unsplash.com/8YG31Xn4dSw/800x600",
    name: "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0628\u0647\u0628\u0648\u062F \u062A\u0645\u0627\u0633 \u0647\u0627\u06CC \u0645\u0634\u062A\u0631\u06CC \u0634\u0645\u0627",
    duration: "08:49",
    author: {
      name: "\u0647\u0627\u0631\u0648\u06CC",
      avatar: "/demo/avatars/33.jpg"
    },
    comments: 5
  }
];
var LifestyleDashboardV5_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "lifestyle-dashboard lifestyle-dashboard-v5" };
const _hoisted_2 = { class: "dashboard-title is-main" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "dark-inverted" }, "\u0648\u06CC\u062F\u06CC\u0648\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631"),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile" }, "\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0641\u0636\u0627\u06CC \u06A9\u0627\u0631\u06CC")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "members" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0639\u0636\u0627", -1);
const _hoisted_7 = { class: "members-list" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("button", { class: "avatar is-fake is-squared" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  })
], -1);
const _hoisted_9 = { class: "media-feed" };
const _hoisted_10 = { class: "feed-group" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", { class: "group-title" }, "\u0627\u0645\u0631\u0648\u0632", -1);
const _hoisted_12 = { class: "group-content" };
const _hoisted_13 = { class: "columns" };
const _hoisted_14 = { class: "column is-6" };
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "tag item-duration" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("button", { class: "play-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:play"
  })
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "item-overlay" }, null, -1);
const _hoisted_19 = { class: "overlay-layer" };
const _hoisted_20 = { class: "overlay-content" };
const _hoisted_21 = { class: "inner-content" };
const _hoisted_22 = { class: "media-title" };
const _hoisted_23 = { class: "media-meta" };
const _hoisted_24 = ["src"];
const _hoisted_25 = { class: "meta-item is-hoverable" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "separator" }, "|", -1);
const _hoisted_27 = {
  key: 0,
  class: "meta-item"
};
const _hoisted_28 = {
  key: 1,
  class: "separator"
};
const _hoisted_29 = { class: "meta-item is-hoverable" };
const _hoisted_30 = { class: "column is-6" };
const _hoisted_31 = { class: "columns is-multiline" };
const _hoisted_32 = { class: "tag item-duration" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("button", { class: "play-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:play"
  })
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "item-overlay" }, null, -1);
const _hoisted_35 = { class: "overlay-layer" };
const _hoisted_36 = { class: "overlay-content" };
const _hoisted_37 = { class: "inner-content" };
const _hoisted_38 = { class: "media-title" };
const _hoisted_39 = { class: "media-meta" };
const _hoisted_40 = ["src"];
const _hoisted_41 = { class: "meta-item is-hoverable" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "separator" }, "|", -1);
const _hoisted_43 = {
  key: 0,
  class: "meta-item"
};
const _hoisted_44 = {
  key: 1,
  class: "separator"
};
const _hoisted_45 = { class: "meta-item is-hoverable" };
const _hoisted_46 = { class: "feed-group" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("h4", { class: "group-title" }, "\u062F\u06CC\u0631\u0648\u0632", -1);
const _hoisted_48 = { class: "group-content" };
const _hoisted_49 = { class: "columns is-multiline" };
const _hoisted_50 = { class: "tag item-duration" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("button", { class: "play-button" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:play"
  })
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("div", { class: "item-overlay" }, null, -1);
const _hoisted_53 = { class: "overlay-layer" };
const _hoisted_54 = { class: "overlay-content" };
const _hoisted_55 = { class: "inner-content" };
const _hoisted_56 = { class: "media-title" };
const _hoisted_57 = { class: "media-meta" };
const _hoisted_58 = ["src"];
const _hoisted_59 = { class: "meta-item is-hoverable" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("span", { class: "separator" }, "|", -1);
const _hoisted_61 = {
  key: 0,
  class: "meta-item"
};
const _hoisted_62 = {
  key: 1,
  class: "separator"
};
const _hoisted_63 = { class: "meta-item is-hoverable" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _directive_background = resolveDirective("background");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_VAvatar, {
                  size: "small",
                  squared: ""
                }, {
                  avatar: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 1
                }),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(members).list, (member) => {
                  return openBlock(), createBlock(_component_VAvatar, {
                    key: member.id,
                    picture: member.avatar,
                    size: "small",
                    squared: ""
                  }, null, 8, ["picture"]);
                }), 128)),
                createVNode(_component_VAvatar, {
                  size: "small",
                  initials: "+6",
                  squared: ""
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            _hoisted_11,
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(featuredLeft).videos, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: normalizeClass(["column", [
                          item.size === "large" && "is-12",
                          item.size === "regular" && "is-6"
                        ]])
                      }, [
                        withDirectives(createBaseVNode("div", {
                          class: normalizeClass(["media-feed-item has-background-image", [item.size === "large" && "is-big"]])
                        }, [
                          createBaseVNode("span", _hoisted_16, toDisplayString(item.duration), 1),
                          _hoisted_17,
                          _hoisted_18,
                          createBaseVNode("div", _hoisted_19, [
                            createBaseVNode("div", _hoisted_20, [
                              createBaseVNode("div", _hoisted_21, [
                                createBaseVNode("h3", _hoisted_22, toDisplayString(item.name), 1),
                                createBaseVNode("div", _hoisted_23, [
                                  createBaseVNode("img", {
                                    src: item.author.avatar,
                                    alt: ""
                                  }, null, 8, _hoisted_24),
                                  createBaseVNode("a", _hoisted_25, toDisplayString(item.author.name), 1),
                                  _hoisted_26,
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_27, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_28, "|")) : createCommentVNode("", true),
                                  createBaseVNode("a", _hoisted_29, toDisplayString(item.comments) + " \u062F\u06CC\u062F\u06AF\u0627\u0647", 1)
                                ])
                              ])
                            ])
                          ])
                        ], 2), [
                          [_directive_background, {
                            src: item.poster,
                            placeholder: "https://via.placeholder.com/800x600"
                          }]
                        ])
                      ], 2);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("div", _hoisted_31, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(featuredRight).videos, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: normalizeClass(["column", [
                          item.size === "large" && "is-12",
                          item.size === "regular" && "is-6"
                        ]])
                      }, [
                        withDirectives(createBaseVNode("div", {
                          class: normalizeClass(["media-feed-item has-background-image", [item.size === "large" && "is-big"]])
                        }, [
                          createBaseVNode("span", _hoisted_32, toDisplayString(item.duration), 1),
                          _hoisted_33,
                          _hoisted_34,
                          createBaseVNode("div", _hoisted_35, [
                            createBaseVNode("div", _hoisted_36, [
                              createBaseVNode("div", _hoisted_37, [
                                createBaseVNode("h3", _hoisted_38, toDisplayString(item.name), 1),
                                createBaseVNode("div", _hoisted_39, [
                                  createBaseVNode("img", {
                                    src: item.author.avatar,
                                    alt: ""
                                  }, null, 8, _hoisted_40),
                                  createBaseVNode("a", _hoisted_41, toDisplayString(item.author.name), 1),
                                  _hoisted_42,
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_43, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                                  item.new ? (openBlock(), createElementBlock("span", _hoisted_44, "|")) : createCommentVNode("", true),
                                  createBaseVNode("a", _hoisted_45, toDisplayString(item.comments) + " \u062F\u06CC\u062F\u06AF\u0627\u0647", 1)
                                ])
                              ])
                            ])
                          ])
                        ], 2), [
                          [_directive_background, {
                            src: item.poster,
                            placeholder: "https://via.placeholder.com/800x600"
                          }]
                        ])
                      ], 2);
                    }), 128))
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_46, [
            _hoisted_47,
            createBaseVNode("div", _hoisted_48, [
              createBaseVNode("div", _hoisted_49, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(feed), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "column is-3"
                  }, [
                    withDirectives(createBaseVNode("div", {
                      class: normalizeClass(["media-feed-item has-background-image", [item.size === "large" && "is-big"]])
                    }, [
                      createBaseVNode("span", _hoisted_50, toDisplayString(item.duration), 1),
                      _hoisted_51,
                      _hoisted_52,
                      createBaseVNode("div", _hoisted_53, [
                        createBaseVNode("div", _hoisted_54, [
                          createBaseVNode("div", _hoisted_55, [
                            createBaseVNode("h3", _hoisted_56, toDisplayString(item.name), 1),
                            createBaseVNode("div", _hoisted_57, [
                              createBaseVNode("img", {
                                src: item.author.avatar,
                                alt: ""
                              }, null, 8, _hoisted_58),
                              createBaseVNode("a", _hoisted_59, toDisplayString(item.author.name), 1),
                              _hoisted_60,
                              item.new ? (openBlock(), createElementBlock("span", _hoisted_61, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                              item.new ? (openBlock(), createElementBlock("span", _hoisted_62, "|")) : createCommentVNode("", true),
                              createBaseVNode("a", _hoisted_63, toDisplayString(item.comments) + " \u062F\u06CC\u062F\u06AF\u0627\u0647", 1)
                            ])
                          ])
                        ])
                      ])
                    ], 2), [
                      [_directive_background, {
                        src: item.poster,
                        placeholder: "https://via.placeholder.com/800x600"
                      }]
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
