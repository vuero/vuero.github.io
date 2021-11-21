import { c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, l as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, D as createCommentVNode, E as toDisplayString, N as createBlock, a6 as mergeProps, ai as TransitionGroup } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1 } from "./search-3-dark.7ce838c0.js";
const projects = [
  {
    id: "1",
    name: "\u067E\u0631\u0648\u0698\u0647\u200C\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u0631\u0633\u0648\u0644\u0647",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "3 \u0645\u0627\u0647",
    image: "/demo/photos/apps/1.jpg",
    badge: "/images/icons/stacks/illustrator.svg",
    lockable: true,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        name: "\u0646\u0642\u06CC",
        initials: "\u0646\u0645",
        color: "h-purple"
      },
      {
        id: 159,
        picture: void 0,
        name: "\u062C\u0627\u0646",
        initials: "JD",
        color: "info"
      },
      {
        id: 7,
        picture: "/demo/avatars/7.jpg",
        name: "\u0622\u0644\u06CC\u0633",
        initials: "AC",
        color: "success"
      }
    ]
  },
  {
    id: "2",
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u0633\u0644\u0627\u0645\u062A \u0648 \u0641\u06CC\u062A\u0646\u0633",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "2 \u0645\u0627\u0647",
    image: "/demo/photos/apps/2.png",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 189,
        picture: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  },
  {
    id: "3",
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u0622\u0645\u0648\u0632\u0634\u06CC \u0648 \u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "4 \u0645\u0627\u0647",
    image: "/demo/photos/apps/3.png",
    badge: "/images/icons/stacks/angular.svg",
    lockable: true,
    locked: true,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  },
  {
    id: "4",
    name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0648 \u0645\u0627\u0644\u06CC",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "2 \u0647\u0641\u062A\u0647",
    image: "/demo/photos/apps/4.png",
    badge: "/images/icons/stacks/js.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 28,
        picture: "/demo/avatars/28.jpg",
        name: "\u0627\u062F\u0648\u0627\u0631\u062F",
        initials: "EF",
        color: "info"
      },
      {
        id: 33,
        picture: "/demo/avatars/33.jpg",
        name: "\u0647\u0627\u0631\u0648\u06CC",
        initials: "HM",
        color: "warning"
      }
    ]
  },
  {
    id: "5",
    name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0631\u0632\u0648\u0645\u0647",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "1 \u0645\u0627\u0647",
    image: "/demo/photos/apps/5.png",
    badge: "/images/icons/stacks/csharp.svg",
    lockable: true,
    locked: false,
    team: [
      {
        id: 189,
        picture: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        picture: "/demo/avatars/23.jpg",
        name: "\u0631\u06CC\u062D\u0627\u0646\u0647",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: "6",
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0644\u0646\u062F\u06CC\u0646\u06AF \u0628\u0627\u0646\u06A9",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "3 \u0647\u0641\u062A\u0647",
    image: "/demo/photos/apps/6.png",
    badge: "/images/icons/stacks/vuejs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        name: "\u0646\u0642\u06CC",
        initials: "\u0646\u0645",
        color: "h-purple"
      },
      {
        id: 159,
        picture: void 0,
        name: "\u062C\u0627\u0646",
        initials: "JD",
        color: "info"
      }
    ]
  },
  {
    id: "7",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0627\u067E \u0622\u0645\u0648\u0632\u0634\u06CC",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "5 \u0645\u0627\u0647",
    image: "/demo/photos/apps/7.png",
    badge: "/images/icons/stacks/swift.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        name: "\u06A9\u0627\u0631\u0645\u0646",
        initials: "CE",
        color: "info"
      }
    ]
  },
  {
    id: "8",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0627\u067E \u0622\u0645\u0648\u0632\u0634\u06CC",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "2 \u0645\u0627\u0647",
    image: "/demo/photos/apps/8.png",
    badge: "/images/icons/stacks/android.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 27,
        picture: "/demo/avatars/27.jpg",
        name: "\u06A9\u0627\u0631\u0645\u0646",
        initials: "CE",
        color: "info"
      }
    ]
  },
  {
    id: "9",
    name: "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u062F\u0627\u0631\u06CC",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "2 \u0645\u0627\u0647",
    image: "/demo/photos/apps/9.png",
    badge: "/images/icons/stacks/html5.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 189,
        picture: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        picture: "/demo/avatars/23.jpg",
        name: "\u0631\u06CC\u062D\u0627\u0646\u0647",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: "10",
    name: "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "2 \u0645\u0627\u0647",
    image: "/demo/photos/apps/10.png",
    badge: "/images/icons/stacks/photoshop.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 189,
        picture: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 23,
        picture: "/demo/avatars/23.jpg",
        name: "\u0631\u06CC\u062D\u0627\u0646\u0647",
        initials: "IV",
        color: "danger"
      }
    ]
  },
  {
    id: "11",
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u0627\u0631\u0633\u0627\u0644 \u0628\u0633\u062A\u0646\u06CC",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "1 \u0647\u0641\u062A\u0647",
    image: "/demo/photos/apps/11.png",
    badge: "/images/icons/stacks/js.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 18,
        picture: "/demo/avatars/18.jpg",
        name: "\u0646\u0642\u06CC",
        initials: "\u0646\u0645",
        color: "h-purple"
      },
      {
        id: 159,
        picture: void 0,
        name: "\u062C\u0627\u0646",
        initials: "JD",
        color: "info"
      },
      {
        id: 7,
        picture: "/demo/avatars/7.jpg",
        name: "\u0622\u0644\u06CC\u0633",
        initials: "AC",
        color: "success"
      }
    ]
  },
  {
    id: "12",
    name: "\u0644\u0646\u062F\u06CC\u0646\u06AF \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "3 \u0645\u0627\u0647",
    image: "/demo/photos/apps/12.jpg",
    badge: "/images/icons/stacks/css3.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 198,
        picture: void 0,
        name: "Sarah C.",
        initials: "SC",
        color: "h-purple"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  },
  {
    id: "13",
    name: "\u0644\u0646\u062F\u06CC\u0646\u06AF \u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF \u0648\u0628",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "4 \u0645\u0627\u0647",
    image: "/demo/photos/apps/13.png",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 148,
        picture: void 0,
        name: "\u0628\u062A\u06CC",
        initials: "BT",
        color: "h-yellow"
      },
      {
        id: 31,
        picture: "/demo/avatars/31.jpg",
        name: "\u06CC\u0627\u0633\u06CC\u0646",
        initials: "YA",
        color: "h-purple"
      }
    ]
  },
  {
    id: "14",
    name: "\u0635\u0641\u062D\u0647 \u0644\u0646\u062F\u06CC\u0646\u06AF \u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "1 \u0645\u0627\u0647",
    image: "/demo/photos/apps/14.jpg",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 33,
        picture: "/demo/avatars/33.jpg",
        name: "\u0647\u0627\u0631\u0648\u06CC",
        initials: "HM",
        color: "warning"
      },
      {
        id: 26,
        picture: "/demo/avatars/26.jpg",
        name: "\u06A9\u0631\u06CC\u0645",
        initials: "CW",
        color: "info"
      }
    ]
  },
  {
    id: "15",
    name: "\u0633\u06CC\u0633\u062A\u0645 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u06A9\u0633\u067E\u0631\u0633",
    description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A.",
    remaining: "1 \u0645\u0627\u0647",
    image: "/demo/photos/apps/15.png",
    badge: "/images/icons/stacks/reactjs.svg",
    lockable: false,
    locked: false,
    team: [
      {
        id: 21,
        picture: "/demo/avatars/21.jpg",
        name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
        initials: "EF",
        color: "warning"
      },
      {
        id: 189,
        picture: void 0,
        name: "\u0622\u0644\u0646",
        initials: "AT",
        color: "success"
      },
      {
        id: 39,
        picture: "/demo/avatars/39.jpg",
        name: "\u0639\u0644\u06CC",
        initials: "\u0622\u0647",
        color: "danger"
      }
    ]
  }
];
var CardsGridV3_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0631\u0648\u0698\u0647 \u062A\u0627\u0632\u0647", -1);
const _hoisted_5 = { class: "card-grid card-grid-v3" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "card-grid-item" };
const _hoisted_9 = {
  key: 0,
  class: "h-toggle"
};
const _hoisted_10 = ["checked"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "toggler" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "active" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:lock"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "inactive" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_12 = { class: "dark-inverted" };
const _hoisted_13 = { class: "description" };
const _hoisted_14 = { class: "people" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:eye"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647")
  ]),
  /* @__PURE__ */ createBaseVNode("button", { class: "button v-button is-dark-outlined" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "iconify",
        "data-icon": "feather:edit-2"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634")
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return projects;
      } else {
        return projects.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.remaining.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const valueSingle = ref(0);
    const optionsSingle = [
      "\u0647\u0645\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
      "Web Apps",
      "Mobile Apps",
      "\u062F\u0627\u0634\u0628\u0631\u062F\u0647\u0627",
      "Landing Pages"
    ];
    function getAvatarData(user) {
      return {
        picture: user == null ? void 0 : user.picture,
        initials: user == null ? void 0 : user.initials,
        color: user == null ? void 0 : user.color
      };
    }
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
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline is-flex-tablet-p is-half-tablet-p"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "column is-4"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    item.lockable ? (openBlock(), createElementBlock("label", _hoisted_9, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        checked: item.locked
                      }, null, 8, _hoisted_10),
                      _hoisted_11
                    ])) : createCommentVNode("", true),
                    createVNode(_component_VAvatar, {
                      size: "large",
                      picture: item.image,
                      badge: item.badge,
                      squared: ""
                    }, null, 8, ["picture", "badge"]),
                    createBaseVNode("h3", _hoisted_12, toDisplayString(item.name), 1),
                    createBaseVNode("p", null, toDisplayString(item.remaining) + " \u0645\u0627\u0646\u062F\u0647 \u062A\u0627 \u067E\u0627\u06CC\u0627\u0646", 1),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("p", null, toDisplayString(item.description), 1)
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.team, (user) => {
                        return openBlock(), createBlock(_component_VAvatar, mergeProps({
                          key: user.id,
                          size: "small"
                        }, getAvatarData(user)), null, 16);
                      }), 128))
                    ]),
                    _hoisted_15
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
