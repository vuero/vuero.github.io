import { c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, l as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VAvatar.879e77ac.js";
import { _ as _imports_0, a as _imports_1 } from "./search-6-dark.b48abad5.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, n as normalizeClass, t as unref } from "./vendor.9ec557a4.js";
var _imports_2 = "/demo/photos/11.jpg";
var _imports_3 = "/demo/photos/12.jpg";
var _imports_4 = "/demo/photos/13.jpg";
var _imports_5 = "/demo/photos/14.jpg";
var _imports_6 = "/demo/photos/15.jpg";
var _imports_7 = "/demo/photos/16.jpg";
var _imports_8 = "/demo/photos/18.jpg";
var _imports_9 = "/demo/photos/19.jpg";
var _imports_10 = "/demo/photos/20.jpg";
var _imports_11 = "/demo/photos/23.jpg";
var _imports_12 = "/demo/photos/22.jpg";
var _imports_13 = "/demo/photos/24.jpg";
var _imports_14 = "/demo/photos/27.jpg";
const posts = [
  {
    id: "1",
    title: "\u0646\u062D\u0648\u0647 \u0633\u0631\u0648 \u0642\u0647\u0648\u0647 \u062F\u0631 \u062F\u0641\u062A\u0631 \u0628\u0647 \u0631\u0648\u0634 \u0645\u0646\u0627\u0633\u0628",
    published: "30 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
    image: "/demo/photos/11.jpg",
    author: {
      id: 39,
      avatar: "/demo/avatars/39.jpg",
      name: "\u0639\u0644\u06CC",
      initials: "\u0622\u0647",
      color: "info"
    }
  },
  {
    id: "2",
    title: "\u06A9\u0627\u0631 \u06AF\u0631\u0648\u0647\u06CC \u0645\u06CC \u062A\u0648\u0627\u0646\u062F \u0628\u0647\u0631\u0647 \u0648\u0631\u06CC \u0631\u0627 \u0628\u0647 \u0637\u0648\u0631 \u0686\u0634\u0645\u06AF\u06CC\u0631\u06CC \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u062F",
    published: "4 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/12.jpg",
    author: {
      id: 15,
      avatar: "/demo/avatars/15.jpg",
      name: "\u0647\u06CC\u0644\u062F\u0627",
      initials: "\u0647\u062D ",
      color: "warning"
    }
  },
  {
    id: "3",
    title: "\u0622\u06CC\u0627 \u062A\u06CC\u0645 \u0633\u0627\u0632\u06CC \u06A9\u0644\u0627\u0647\u0628\u0631\u062F\u0627\u0631\u06CC \u0627\u0633\u062A \u06CC\u0627 \u0645\u0648\u0631\u062F \u0628\u0639\u062F\u06CC\u061F",
    published: "5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/13.jpg",
    author: {
      id: 24,
      avatar: "/demo/avatars/24.jpg",
      name: "\u0633\u0627\u0646\u062F\u0631\u06CC\u0646",
      initials: "SC",
      color: "h-purple"
    }
  },
  {
    id: "4",
    title: "3 \u0646\u06A9\u062A\u0647 \u06A9\u0647 \u0647\u0646\u06AF\u0627\u0645 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u063A\u0644 \u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647 \u0628\u0627\u06CC\u062F \u0628\u062F\u0627\u0646\u06CC\u062F",
    published: "8 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
    image: "/demo/photos/14.jpg",
    author: {
      id: 27,
      avatar: "/demo/avatars/27.jpg",
      name: "\u06A9\u0627\u0631\u0645\u0646",
      initials: "CE",
      color: "h-purple"
    }
  },
  {
    id: "5",
    title: "\u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u0633\u0627\u062E\u062A \u0648 \u0633\u0627\u0632 \u0631\u0648\u06CC \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06CC \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 \u0628\u0633\u06CC\u0627\u0631 \u0632\u06CC\u0627\u062F \u0627\u0633\u062A",
    published: "1 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/15.jpg",
    author: {
      id: 10,
      avatar: "/demo/avatars/10.jpg",
      name: "\u062D\u0633\u0646 \u0645\u0642\u062F\u0645",
      initials: "\u062D\u0645",
      color: "info"
    }
  },
  {
    id: "6",
    title: "\u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u0646 \u0645\u06A9\u0627\u0646 \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E \u062E\u0648\u062F",
    published: "1 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/17.jpg",
    author: {
      id: 22,
      avatar: "/demo/avatars/22.jpg",
      name: "\u062C\u06CC\u0645\u06CC",
      initials: "JH",
      color: "info"
    }
  },
  {
    id: "7",
    title: "4 \u0646\u06A9\u062A\u0647 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646\u06A9\u0647 \u0646\u0627\u0647\u0627\u0631\u0647\u0627\u06CC \u062A\u062C\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u0639\u0627\u0644\u06CC \u06A9\u0646\u06CC\u062F",
    published: "2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/18.jpg",
    content: [
      "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
      "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A."
    ],
    author: {
      id: 22,
      avatar: "/demo/avatars/22.jpg",
      name: "\u062C\u06CC\u0645\u06CC",
      initials: "JH",
      color: "info"
    }
  },
  {
    id: "8",
    title: "\u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u06CC\u06A9 \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627",
    published: "2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/18.jpg",
    content: [
      "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
      "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A."
    ],
    author: {
      id: 26,
      avatar: "/demo/avatars/26.jpg",
      name: "\u06A9\u0631\u06CC\u0645",
      initials: "CW",
      color: "info"
    }
  },
  {
    id: "9",
    title: "\u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u06CC\u06A9 \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627",
    published: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/20.jpg",
    author: {
      id: 8,
      avatar: "/images/avatars/svg/vuero-1.svg",
      name: "\u062C\u0645\u0627\u0644",
      initials: "EK",
      color: "info"
    }
  },
  {
    id: "10",
    title: "\u0622\u06CC\u0627 \u0622\u0645\u0648\u0632\u0634 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062D\u0635\u0648\u0644 \u0631\u0627 \u062F\u0631 \u0646\u0638\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0627\u06CC\u062F\u061F",
    published: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/21.jpg",
    author: {
      id: 14,
      avatar: "/demo/avatars/14.jpg",
      name: "\u0631\u0627\u06CC\u0627\u0646",
      initials: "\u0631\u0628",
      color: "info"
    }
  },
  {
    id: "11",
    title: "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0631\u0646\u06AF \u0647\u0627\u06CC \u067E\u0631 \u0632\u0631\u0642 \u0648 \u0628\u0631\u0642 \u062F\u0631 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0647\u0627 \u0648 \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06CC \u062E\u0648\u062F",
    published: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/22.jpg",
    author: {
      id: 9,
      avatar: "/demo/avatars/9.jpg",
      name: "\u0622\u0646\u0627",
      initials: "\u0622\u0647",
      color: "info"
    }
  },
  {
    id: "12",
    title: "\u0686\u0631\u0627 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u062E\u0648\u062F \u0647\u0632\u06CC\u0646\u0647 \u062F\u0627\u0631\u062F",
    published: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/23.jpg",
    content: [
      "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
      "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A."
    ],
    author: {
      id: 40,
      avatar: "/demo/avatars/40.jpg",
      name: "\u062C\u0645\u06CC\u0644\u0647",
      initials: "JM",
      color: "info"
    }
  },
  {
    id: "13",
    title: "\u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u06CC\u0645 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0648 \u0628\u0627 \u0627\u0633\u062A\u0639\u062F\u0627\u062F",
    published: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/24.jpg",
    author: {
      id: 19,
      avatar: "/demo/avatars/19.jpg",
      name: "\u0627\u0631\u0633\u0637\u0648",
      initials: "\u0627\u0632",
      color: "info"
    }
  },
  {
    id: "14",
    title: "\u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u06CC\u0645 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0648 \u0628\u0627 \u0627\u0633\u062A\u0639\u062F\u0627\u062F",
    published: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/25.jpg",
    author: {
      id: 28,
      avatar: "/demo/avatars/28.jpg",
      name: "\u0627\u062F\u0648\u0627\u0631\u062F",
      initials: "EF",
      color: "info"
    }
  },
  {
    id: "15",
    title: "\u0686\u0647 \u0686\u0627\u0631\u0686\u0648\u0628\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 \u062F\u0631 \u0633\u0627\u0644 2020 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u0645\u061F",
    published: "3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/26.jpg",
    author: {
      id: 5,
      avatar: "/demo/avatars/5.jpg",
      name: "\u0645\u0631\u06CC\u0645",
      initials: "ML",
      color: "info"
    }
  },
  {
    id: "16",
    title: "\u063A\u0648\u0627\u0635\u06CC \u062F\u0631 \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u0646\u0627\u0645 \u062A\u062C\u0627\u0631\u06CC \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC - \u0628\u062E\u0634 \u06F1",
    published: "4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/27.jpg",
    author: {
      id: 33,
      avatar: "/demo/avatars/33.jpg",
      name: "\u0647\u0627\u0631\u0648\u06CC",
      initials: "HM",
      color: "success"
    }
  },
  {
    id: "17",
    title: "\u063A\u0648\u0627\u0635\u06CC \u062F\u0631 \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u0646\u0627\u0645 \u062A\u062C\u0627\u0631\u06CC \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC - \u0628\u062E\u0634 \u06F2",
    published: "4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/28.jpg",
    author: {
      id: 33,
      avatar: "/demo/avatars/33.jpg",
      name: "\u0647\u0627\u0631\u0648\u06CC",
      initials: "HM",
      color: "success"
    }
  },
  {
    id: "18",
    title: "\u0686\u06AF\u0648\u0646\u0647 \u0627\u0632 \u0631\u0633\u06CC\u062F\u0646 \u0628\u0647 \u0627\u0647\u062F\u0627\u0641\u06CC \u06A9\u0647 \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062D\u0627\u0635\u0644 \u06A9\u0646\u06CC\u062F",
    published: "4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
    image: "/demo/photos/28.jpg",
    author: {
      id: 31,
      avatar: "/demo/avatars/31.jpg",
      name: "\u06CC\u0627\u0633\u06CC\u0646",
      initials: "YA",
      color: "info"
    }
  }
];
var TilesGridV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("input", {
  class: "input custom-text-filter",
  placeholder: "\u062C\u0633\u062A\u062C\u0648..."
}, null, -1);
const _hoisted_3 = { class: "buttons" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631", -1);
const _hoisted_6 = { class: "tile-grid tile-grid-v3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_9 = { class: "tile is-ancestor" };
const _hoisted_10 = { class: "tile is-parent" };
const _hoisted_11 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_12 = { class: "tile-grid-item-inner" };
const _hoisted_13 = { class: "meta" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0646\u062D\u0648\u0647 \u0633\u0631\u0648 \u0642\u0647\u0648\u0647 \u062F\u0631 \u062F\u0641\u062A\u0631 \u0628\u0647 \u0631\u0648\u0634 \u0645\u0646\u0627\u0633\u0628 "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_15 = { class: "tile-meta" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0639\u0644\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "30 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634")
], -1);
const _hoisted_17 = { class: "tile is-parent" };
const _hoisted_18 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_19 = { class: "tile-grid-item-inner" };
const _hoisted_20 = { class: "meta" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u06A9\u0627\u0631 \u06AF\u0631\u0648\u0647\u06CC \u0645\u06CC \u062A\u0648\u0627\u0646\u062F \u0628\u0647\u0631\u0647 \u0648\u0631\u06CC \u0631\u0627 \u0628\u0647 \u0637\u0648\u0631 \u0686\u0634\u0645\u06AF\u06CC\u0631\u06CC \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u062F "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_22 = { class: "tile-meta" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0647\u06CC\u0644\u062F\u0627"),
  /* @__PURE__ */ createBaseVNode("span", null, "4 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_24 = { class: "tile is-parent" };
const _hoisted_25 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_26 = { class: "tile-grid-item-inner" };
const _hoisted_27 = { class: "meta" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0622\u06CC\u0627 \u062A\u06CC\u0645 \u0633\u0627\u0632\u06CC \u06A9\u0644\u0627\u0647\u0628\u0631\u062F\u0627\u0631\u06CC \u0627\u0633\u062A \u06CC\u0627 \u0645\u0648\u0631\u062F \u0628\u0639\u062F\u06CC\u061F "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_29 = { class: "tile-meta" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0633\u0627\u0646\u062F\u0631\u06CC\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_31 = { class: "tile is-ancestor" };
const _hoisted_32 = { class: "tile is-vertical is-8" };
const _hoisted_33 = { class: "tile" };
const _hoisted_34 = { class: "tile is-parent is-vertical" };
const _hoisted_35 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_36 = { class: "tile-grid-item-inner" };
const _hoisted_37 = { class: "meta" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " 3 \u0646\u06A9\u062A\u0647 \u06A9\u0647 \u0647\u0646\u06AF\u0627\u0645 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u063A\u0644 \u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647 \u0628\u0627\u06CC\u062F \u0628\u062F\u0627\u0646\u06CC\u062F "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_39 = { class: "tile-meta" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u06A9\u0627\u0631\u0645\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "8 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634")
], -1);
const _hoisted_41 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_42 = { class: "tile-grid-item-inner" };
const _hoisted_43 = { class: "meta" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u0633\u0627\u062E\u062A \u0648 \u0633\u0627\u0632 \u0631\u0648\u06CC \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06CC \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647 \u0628\u0633\u06CC\u0627\u0631 \u0632\u06CC\u0627\u062F \u0627\u0633\u062A "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_45 = { class: "tile-meta" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u062D\u0633\u0646 \u0645\u0642\u062F\u0645"),
  /* @__PURE__ */ createBaseVNode("span", null, "1 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_47 = { class: "tile is-parent" };
const _hoisted_48 = {
  href: "#",
  class: "tile is-child tile-grid-item is-large"
};
const _hoisted_49 = { class: "tile-grid-item-inner" };
const _hoisted_50 = { class: "meta" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u0646 \u0645\u06A9\u0627\u0646 \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E \u062E\u0648\u062F "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_52 = { class: "tile-meta" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u062C\u06CC\u0645\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "1 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_54 = { class: "tile is-parent" };
const _hoisted_55 = {
  href: "#",
  class: "tile is-child tile-grid-item is-wide"
};
const _hoisted_56 = { class: "tile-grid-item-inner" };
const _hoisted_57 = { class: "meta" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " 4 \u0646\u06A9\u062A\u0647 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646\u06A9\u0647 \u0646\u0627\u0647\u0627\u0631\u0647\u0627\u06CC \u062A\u062C\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u0639\u0627\u0644\u06CC \u06A9\u0646\u06CC\u062F "),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile h-hidden-tablet-p" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_59 = { class: "tile-meta" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u062C\u06CC\u0633\u0648\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, "2 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_61 = { class: "tile is-parent" };
const _hoisted_62 = {
  href: "#",
  class: "tile is-child tile-grid-item is-tall"
};
const _hoisted_63 = { class: "tile-grid-item-inner" };
const _hoisted_64 = { class: "meta" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u06CC\u06A9 \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 "),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-mobile h-hidden-tablet-p" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_66 = { class: "tile-meta" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u06A9\u0631\u06CC\u0645"),
  /* @__PURE__ */ createBaseVNode("span", null, "2 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_68 = { class: "tile is-ancestor" };
const _hoisted_69 = { class: "tile is-parent" };
const _hoisted_70 = {
  href: "#",
  class: "tile is-child tile-grid-item is-wide"
};
const _hoisted_71 = { class: "tile-grid-item-inner" };
const _hoisted_72 = { class: "meta" };
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u0633\u06CC\u0633\u062A\u0645 \u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC \u0639\u0627\u0644\u06CC "),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_74 = { class: "tile-meta" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, "\u062C\u0645\u0627\u0644"),
  /* @__PURE__ */ createBaseVNode("span", null, "2 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_76 = { class: "tile is-parent is-6" };
const _hoisted_77 = {
  href: "#",
  class: "tile is-child tile-grid-item is-wide"
};
const _hoisted_78 = { class: "tile-grid-item-inner" };
const _hoisted_79 = { class: "meta" };
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0686\u0631\u0627 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u062E\u0648\u062F \u0647\u0632\u06CC\u0646\u0647 \u062F\u0627\u0631\u062F "),
  /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_81 = { class: "tile-meta" };
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u062C\u0645\u06CC\u0644\u0647"),
  /* @__PURE__ */ createBaseVNode("span", null, "3 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_83 = { class: "tile is-ancestor" };
const _hoisted_84 = { class: "tile is-parent" };
const _hoisted_85 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_86 = { class: "tile-grid-item-inner" };
const _hoisted_87 = { class: "meta" };
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0631\u0646\u06AF \u0647\u0627\u06CC \u067E\u0631 \u0632\u0631\u0642 \u0648 \u0628\u0631\u0642 \u062F\u0631 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0647\u0627 \u0648 \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06CC \u062E\u0648\u062F "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_89 = { class: "tile-meta" };
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, "\u0622\u0646\u0627"),
  /* @__PURE__ */ createBaseVNode("span", null, "3 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_91 = { class: "tile is-parent" };
const _hoisted_92 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_93 = { class: "tile-grid-item-inner" };
const _hoisted_94 = { class: "meta" };
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u06CC\u0645 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0648 \u0628\u0627 \u0627\u0633\u062A\u0639\u062F\u0627\u062F "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_96 = { class: "tile-meta" };
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0644\u0631\u06CC \u067E\u06CC\u062C"),
  /* @__PURE__ */ createBaseVNode("span", null, "3 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _hoisted_98 = { class: "tile is-parent" };
const _hoisted_99 = {
  href: "#",
  class: "tile is-child tile-grid-item is-medium"
};
const _hoisted_100 = { class: "tile-grid-item-inner" };
const _hoisted_101 = { class: "meta" };
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("div", { class: "tile-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u063A\u0648\u0627\u0635\u06CC \u062F\u0631 \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u0646\u0627\u0645 \u062A\u062C\u0627\u0631\u06CC \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC - \u0628\u062E\u0634 \u06F1 "),
  /* @__PURE__ */ createBaseVNode("p", { class: "h-hidden-tablet-l h-hidden-desktop" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ")
], -1);
const _hoisted_103 = { class: "tile-meta" };
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("div", { class: "meta-inner" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "dark-inverted",
    "data-filter-match": ""
  }, " \u0647\u0627\u0631\u0648\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "4 \u0631\u0648\u0632 \u067E\u06CC\u0634")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return posts;
      } else {
        return posts.filter((item) => {
          return item.title.match(new RegExp(filters.value, "i")) || item.author.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = ["\u0647\u0645\u0647 \u0645\u0637\u0627\u0644\u0628", "\u0645\u0637\u0627\u0644\u0628 \u0627\u062E\u06CC\u0631", "\u0645\u0637\u0627\u0644\u0628 \u0642\u062F\u06CC\u0645\u06CC", "\u0645\u0637\u0627\u0644\u0628 \u0645\u062D\u0628\u0648\u0628"];
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VField, { class: "h-hidden-mobile" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_Multiselect, {
                      modelValue: valueSingle.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueSingle.value = $event),
                      options: optionsSingle,
                      "max-height": 145,
                      placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_4,
                _hoisted_5
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_7,
              _hoisted_8
            ]),
            _: 1
          }, 8, ["class"]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("a", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("img", {
                    src: _imports_2,
                    alt: "",
                    onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_13, [
                    _hoisted_14,
                    createBaseVNode("div", _hoisted_15, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/39.jpg",
                        size: "small"
                      }),
                      _hoisted_16
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("a", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("img", {
                    src: _imports_3,
                    alt: "",
                    onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_20, [
                    _hoisted_21,
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/15.jpg",
                        size: "small"
                      }),
                      _hoisted_23
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("a", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("img", {
                    src: _imports_4,
                    alt: "",
                    onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_27, [
                    _hoisted_28,
                    createBaseVNode("div", _hoisted_29, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/24.jpg",
                        size: "small"
                      }),
                      _hoisted_30
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createBaseVNode("a", _hoisted_35, [
                    createBaseVNode("div", _hoisted_36, [
                      createBaseVNode("img", {
                        src: _imports_5,
                        alt: "",
                        onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                      }, null, 32),
                      createBaseVNode("div", _hoisted_37, [
                        _hoisted_38,
                        createBaseVNode("div", _hoisted_39, [
                          createVNode(_component_VAvatar, {
                            picture: "/demo/avatars/27.jpg",
                            size: "small"
                          }),
                          _hoisted_40
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("a", _hoisted_41, [
                    createBaseVNode("div", _hoisted_42, [
                      createBaseVNode("img", {
                        src: _imports_6,
                        alt: "",
                        onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                      }, null, 32),
                      createBaseVNode("div", _hoisted_43, [
                        _hoisted_44,
                        createBaseVNode("div", _hoisted_45, [
                          createVNode(_component_VAvatar, {
                            picture: "/demo/avatars/10.jpg",
                            size: "small"
                          }),
                          _hoisted_46
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("a", _hoisted_48, [
                    createBaseVNode("div", _hoisted_49, [
                      createBaseVNode("img", {
                        src: _imports_7,
                        alt: "",
                        onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                      }, null, 32),
                      createBaseVNode("div", _hoisted_50, [
                        _hoisted_51,
                        createBaseVNode("div", _hoisted_52, [
                          createVNode(_component_VAvatar, {
                            picture: "/demo/avatars/22.jpg",
                            size: "small"
                          }),
                          _hoisted_53
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("a", _hoisted_55, [
                  createBaseVNode("div", _hoisted_56, [
                    createBaseVNode("img", {
                      src: _imports_8,
                      alt: "",
                      onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                    }, null, 32),
                    createBaseVNode("div", _hoisted_57, [
                      _hoisted_58,
                      createBaseVNode("div", _hoisted_59, [
                        createVNode(_component_VAvatar, {
                          picture: "/demo/avatars/16.jpg",
                          size: "small"
                        }),
                        _hoisted_60
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_61, [
              createBaseVNode("a", _hoisted_62, [
                createBaseVNode("div", _hoisted_63, [
                  createBaseVNode("img", {
                    src: _imports_9,
                    alt: "",
                    onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_64, [
                    _hoisted_65,
                    createBaseVNode("div", _hoisted_66, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/26.jpg",
                        size: "small"
                      }),
                      _hoisted_67
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_68, [
            createBaseVNode("div", _hoisted_69, [
              createBaseVNode("a", _hoisted_70, [
                createBaseVNode("div", _hoisted_71, [
                  createBaseVNode("img", {
                    src: _imports_10,
                    alt: "",
                    onErrorOnce: _cache[9] || (_cache[9] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_72, [
                    _hoisted_73,
                    createBaseVNode("div", _hoisted_74, [
                      createVNode(_component_VAvatar, {
                        picture: "/images/avatars/svg/vuero-1.svg",
                        size: "small"
                      }),
                      _hoisted_75
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_76, [
              createBaseVNode("a", _hoisted_77, [
                createBaseVNode("div", _hoisted_78, [
                  createBaseVNode("img", {
                    src: _imports_11,
                    alt: "",
                    onErrorOnce: _cache[10] || (_cache[10] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_79, [
                    _hoisted_80,
                    createBaseVNode("div", _hoisted_81, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/40.jpg",
                        size: "small"
                      }),
                      _hoisted_82
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_83, [
            createBaseVNode("div", _hoisted_84, [
              createBaseVNode("a", _hoisted_85, [
                createBaseVNode("div", _hoisted_86, [
                  createBaseVNode("img", {
                    src: _imports_12,
                    alt: "",
                    onErrorOnce: _cache[11] || (_cache[11] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_87, [
                    _hoisted_88,
                    createBaseVNode("div", _hoisted_89, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/9.jpg",
                        size: "small"
                      }),
                      _hoisted_90
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_91, [
              createBaseVNode("a", _hoisted_92, [
                createBaseVNode("div", _hoisted_93, [
                  createBaseVNode("img", {
                    src: _imports_13,
                    alt: "",
                    onErrorOnce: _cache[12] || (_cache[12] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_94, [
                    _hoisted_95,
                    createBaseVNode("div", _hoisted_96, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/19.jpg",
                        size: "small"
                      }),
                      _hoisted_97
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_98, [
              createBaseVNode("a", _hoisted_99, [
                createBaseVNode("div", _hoisted_100, [
                  createBaseVNode("img", {
                    src: _imports_14,
                    alt: "",
                    onErrorOnce: _cache[13] || (_cache[13] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                  }, null, 32),
                  createBaseVNode("div", _hoisted_101, [
                    _hoisted_102,
                    createBaseVNode("div", _hoisted_103, [
                      createVNode(_component_VAvatar, {
                        picture: "/demo/avatars/33.jpg",
                        size: "small"
                      }),
                      _hoisted_104
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
