import { c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, l as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VAvatar.879e77ac.js";
import { _ as __unplugin_components_9 } from "./UserCardDropdown.e5676968.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, ai as TransitionGroup } from "./vendor.9ec557a4.js";
import { _ as _imports_0, a as _imports_1 } from "./search-6-dark.b48abad5.js";
const users = [
  {
    id: 29,
    picture: "/demo/avatars/29.jpg",
    badge: "/images/icons/stacks/python.svg",
    username: "\u062D\u06A9\u06CC\u0645",
    initials: "HC",
    color: "info",
    location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 21,
    picture: "/demo/avatars/21.jpg",
    badge: "/images/icons/flags/england.svg",
    username: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A",
    initials: "EF",
    color: "success",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 8,
    picture: "/images/avatars/svg/vuero-1.svg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062C\u0645\u0627\u0644",
    initials: "EK",
    color: "h-purple",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 7,
    picture: "/demo/avatars/7.jpg",
    badge: "/images/icons/stacks/js.svg",
    username: "\u0622\u0644\u06CC\u0633",
    initials: "AC",
    color: "info",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 122,
    picture: void 0,
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0628\u062A\u06CC",
    initials: "BT",
    color: "warning",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 23,
    picture: "/demo/avatars/23.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0631\u06CC\u062D\u0627\u0646\u0647",
    initials: "IV",
    color: "info",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 37,
    picture: "/demo/avatars/37.jpg",
    badge: "/images/icons/flags/france.svg",
    username: "\u0647\u0644\u0645\u0648\u062A",
    initials: "HF",
    color: "h-purple",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 25,
    picture: "/demo/avatars/25.jpg",
    badge: "/images/icons/stacks/js.svg",
    username: "\u0645\u0644\u0627\u0646\u06CC",
    initials: "MW",
    color: "success",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 39,
    picture: "/demo/avatars/39.jpg",
    badge: "/images/icons/stacks/python.svg",
    username: "\u0639\u0644\u06CC",
    initials: "\u0622\u0647",
    color: "h-purple",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    position: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 19,
    picture: "/demo/avatars/19.jpg",
    badge: "/images/icons/flags/germany.svg",
    username: "\u0627\u0631\u0633\u0637\u0648",
    initials: "\u0627\u0632",
    color: "h-yellow",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 9,
    picture: "/demo/avatars/9.jpg",
    badge: "/images/icons/stacks/illustrator.svg",
    username: "\u0622\u0646\u0627",
    initials: "\u0622\u0647",
    color: "info",
    location: "\u0632\u0646\u062C\u0627\u0646\u060C \u0627\u0628\u0647\u0631",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 124,
    picture: void 0,
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0622\u0644\u0646",
    initials: "AT",
    color: "success",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 120,
    picture: void 0,
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0633\u0627\u0631\u0627",
    initials: "SC",
    color: "h-purple",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 32,
    picture: "/demo/avatars/32.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646",
    initials: "JK",
    color: "info",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 36,
    picture: "/demo/avatars/36.jpg",
    badge: "/images/icons/stacks/reactjs.svg",
    username: "\u0628\u0647\u0627\u062F\u0631",
    initials: "BB",
    color: "h-purple",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 38,
    picture: "/demo/avatars/38.jpg",
    badge: "/images/icons/stacks/vuejs.svg",
    username: "\u06A9\u0628\u0631\u06CC",
    initials: "CB",
    color: "info",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 26,
    picture: "/demo/avatars/26.jpg",
    badge: "/images/icons/stacks/html5.svg",
    username: "\u06A9\u0631\u06CC\u0645",
    initials: "CW",
    color: "info",
    location: "\u0645\u0644\u0628\u0648\u0631\u0646",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 16,
    picture: "/demo/avatars/16.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062C\u06CC\u0633\u0648\u0646",
    initials: "\u062C\u0645",
    color: "danger",
    location: "\u062A\u06AF\u0632\u0627\u0633",
    position: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 28,
    picture: "/demo/avatars/28.jpg",
    badge: "/images/icons/stacks/angular.svg",
    username: "\u0627\u062F\u0648\u0627\u0631\u062F",
    initials: "EF",
    color: "success",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 22,
    picture: "/demo/avatars/22.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062F\u0627\u0648\u0648\u062F",
    initials: "DH",
    color: "info",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 13,
    picture: "/demo/avatars/13.jpg",
    badge: "/images/icons/stacks/illustrator.svg",
    username: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
    initials: "\u0627\u0686",
    color: "danger",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 24,
    picture: "/demo/avatars/24.jpg",
    badge: "/images/icons/flags/france.svg",
    username: "\u0633\u0627\u0646\u062F\u0631\u06CC\u0646",
    initials: "SC",
    color: "info",
    location: "\u0644\u06CC\u0648\u0646\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 27,
    picture: "/demo/avatars/27.jpg",
    badge: "/images/icons/flags/spain.svg",
    username: "\u06A9\u0627\u0631\u0645\u0646",
    initials: "CE",
    color: "h-yellow",
    location: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627\u060C \u0645\u0627\u062F\u0631\u06CC\u062F",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 11,
    picture: "/demo/avatars/11.jpg",
    badge: "/images/icons/flags/england.svg",
    username: "\u0628\u0647\u0646\u0648\u0634 \u0628\u062E\u062A\u06CC\u0627\u0631\u0632\u0627\u062F\u0647",
    initials: "\u0628 \u0628",
    color: "success",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 15,
    picture: "/demo/avatars/15.jpg",
    badge: "/images/icons/flags/germany.svg",
    username: "\u0647\u06CC\u0644\u062F\u0627",
    initials: "\u0647\u062D ",
    color: "info",
    location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
    position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 14,
    picture: "/demo/avatars/14.jpg",
    badge: "/images/icons/flags/england.svg",
    username: "\u0631\u0627\u06CC\u0627\u0646",
    initials: "\u0631\u0628",
    color: "info",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    position: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 10,
    picture: "/demo/avatars/10.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u062D\u0633\u0646 \u0645\u0642\u062F\u0645",
    initials: "\u062D\u0645",
    color: "danger",
    location: "\u0627\u0631\u062F\u0628\u06CC\u0644\u060C \u0645\u063A\u0627\u0646",
    position: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  },
  {
    id: 18,
    picture: "/demo/avatars/18.jpg",
    badge: "/images/icons/flags/united-states-of-america.svg",
    username: "\u0646\u0642\u06CC",
    initials: "\u0646\u0645",
    color: "success",
    location: "\u0627\u0631\u062F\u0628\u06CC\u0644\u060C \u0645\u063A\u0627\u0646",
    position: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648."
  }
];
var TilesGridV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631", -1);
const _hoisted_5 = { class: "tile-grid tile-grid-v1" };
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
const _hoisted_8 = { class: "tile-grid-item" };
const _hoisted_9 = { class: "tile-grid-item-inner" };
const _hoisted_10 = { class: "meta" };
const _hoisted_11 = { class: "dark-inverted" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const users$1 = users;
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return users$1;
      } else {
        return users$1.filter((item) => {
          var _a;
          return item.username.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || item.position.match(new RegExp(filters.value, "i")) || ((_a = item.badge) == null ? void 0 : _a.match(new RegExp(filters.value, "i")));
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
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
      const _component_UserCardDropdown = __unplugin_components_9;
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
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                return openBlock(), createElementBlock("div", {
                  key,
                  class: "column is-4"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(_component_VAvatar, {
                        picture: item.picture,
                        badge: item.badge,
                        color: item.color,
                        initials: item.initials,
                        size: "medium"
                      }, null, 8, ["picture", "badge", "color", "initials"]),
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("span", _hoisted_11, toDisplayString(item.username), 1),
                        createBaseVNode("span", null, toDisplayString(item.position), 1)
                      ]),
                      createVNode(_component_UserCardDropdown)
                    ])
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
