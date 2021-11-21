import { j as _imports_0, k as _imports_1, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, h as _sfc_main$3, l as _sfc_main$4 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$5 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, N as createBlock, a6 as mergeProps, ai as TransitionGroup } from "./vendor.9ec557a4.js";
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
var UsersGridV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "user-grid-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631", -1);
const _hoisted_4 = { class: "user-grid user-grid-v1" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7 = { class: "grid-item" };
const _hoisted_8 = { class: "dark-inverted" };
const _hoisted_9 = { class: "people" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:user"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
  ]),
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:message-circle"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u06AF\u0641\u062A\u06AF\u0648")
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return users;
      } else {
        return users.filter((item) => {
          return item.username.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || item.position.match(new RegExp(filters.value, "i")) || item.badge.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "\u0647\u0645\u0647",
      "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC",
      "\u062A\u0648\u0633\u0639\u0647\u200C\u06CC \u0648\u0628",
      "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      "\u062A\u062C\u0627\u0631\u06CC"
    ];
    function getAvatarData(user) {
      return {
        picture: user == null ? void 0 : user.avatar,
        initials: user == null ? void 0 : user.initials,
        color: user == null ? void 0 : user.color
      };
    }
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VButtons = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
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
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VField, { class: "h-hidden-mobile" }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Multiselect, {
                        modelValue: valueSingle.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueSingle.value = $event),
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
                  _hoisted_2,
                  _hoisted_3
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_5,
              _hoisted_6
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "column is-3"
                }, [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(_component_VAvatar, {
                      picture: item.avatar,
                      badge: item.badge,
                      size: "big"
                    }, null, 8, ["picture", "badge"]),
                    createBaseVNode("h3", _hoisted_8, toDisplayString(item.fullName), 1),
                    createBaseVNode("p", null, toDisplayString(item.position), 1),
                    createBaseVNode("div", _hoisted_9, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.team, (user) => {
                        return openBlock(), createBlock(_component_VAvatar, mergeProps({
                          key: user.id,
                          size: "small"
                        }, getAvatarData(user)), null, 16);
                      }), 128))
                    ]),
                    _hoisted_10
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
