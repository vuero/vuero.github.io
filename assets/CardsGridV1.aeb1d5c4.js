import { j as _imports_0, k as _imports_1, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, l as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VAvatar.879e77ac.js";
import { _ as _sfc_main$5 } from "./VProgress.21a77a58.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, ai as TransitionGroup, B as createTextVNode } from "./vendor.9ec557a4.js";
const users = [
  {
    id: "13",
    name: "\u062A\u0627\u0631\u0627 \u062E\u0627\u0634\u0642\u0686\u06CC",
    shortname: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0686\u0631\u0686\u06CC\u0644",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/13.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg"
    },
    progress: 65,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "37",
    name: "\u062D\u0628\u06CC\u0628 \u0641\u0627\u062A\u062D",
    shortname: "\u0647\u0644\u0645\u0648\u062A",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/37.jpg",
      badge: "/images/icons/flags/france.svg"
    },
    progress: 38,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "25",
    name: "\u0645\u0644\u0627\u0646\u06CC \u0648\u0644\u06CC \u0632\u0627\u062F\u0647",
    shortname: "\u0645\u0644\u0627\u0646\u06CC",
    location: "\u0633\u0646 \u062E\u0648\u0632\u0647",
    role: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/25.jpg",
      badge: "/images/icons/stacks/js.svg"
    },
    progress: 58,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "29",
    name: "\u062D\u06A9\u06CC\u0645 \u06A9\u0644\u0645 \u0641\u0631\u0648\u0634",
    shortname: "\u062D\u06A9\u06CC\u0645",
    location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
    role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/29.jpg",
      badge: "/images/icons/stacks/python.svg"
    },
    progress: 85,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "39",
    name: "\u0639\u0644\u06CC \u0698\u0627\u0646\u062F\u0627\u0631\u0645",
    shortname: "\u0639\u0644\u06CC",
    location: "\u0627\u0635\u0641\u0647\u0627\u0646",
    role: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/39.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg"
    },
    progress: 28,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "40",
    name: "\u062C\u0645\u06CC\u0644\u0647 \u0645\u0631\u062F\u067E\u0631\u0633\u062A",
    shortname: "\u062C\u0645\u06CC\u0644\u0647",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/40.jpg",
      badge: "/images/icons/stacks/android.svg"
    },
    progress: 67,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "19",
    name: "\u0627\u0631\u0633\u0637\u0648 \u0632\u0627\u0647\u062F",
    shortname: "\u0627\u0631\u0633\u0637\u0648",
    location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
    role: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/19.jpg",
      badge: "/images/icons/flags/germany.svg"
    },
    progress: 56,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "9",
    name: "Ana Baker",
    shortname: "\u0622\u0646\u0627",
    location: "\u0632\u0646\u062C\u0627\u0646\u060C \u0627\u0628\u0647\u0631",
    role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/9.jpg",
      badge: "/images/icons/stacks/photoshop.svg"
    },
    progress: 12,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "5",
    name: "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC",
    shortname: "\u0645\u0631\u06CC\u0645",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/5.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg"
    },
    progress: 29,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "32",
    name: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9\u0627\u0631\u06AF\u0631",
    shortname: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/32.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg"
    },
    progress: 91,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "36",
    name: "\u0628\u0647\u0627\u062F\u0631 \u0644\u0648\u0627\u0634 \u067E\u0632",
    shortname: "\u0628\u0647\u0627\u062F\u0631",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/36.jpg",
      badge: "/images/icons/stacks/reactjs.svg"
    },
    progress: 44,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "38",
    name: "\u062D\u0644\u06CC\u0645\u0647 \u062F\u0627\u0644\u0627\u0633",
    shortname: "\u062D\u0644\u06CC\u0645\u0647",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    role: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/38.jpg",
      badge: "/images/icons/stacks/vuejs.svg"
    },
    progress: 61,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "26",
    name: "\u06A9\u0631\u06CC\u0645 \u0648\u06CC\u0646\u0633\u062A\u0648\u0646",
    shortname: "\u06A9\u0631\u06CC\u0645",
    location: "\u0645\u0644\u0628\u0648\u0631\u0646, \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627",
    role: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/26.jpg",
      badge: "/images/icons/stacks/html5.svg"
    },
    progress: 53,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "16",
    name: "\u062C\u06CC\u0633\u0648\u0646 \u0645\u0639\u0645\u0648\u0644\u06CC",
    shortname: "\u062C\u06CC\u0633\u0648\u0646",
    location: "\u062A\u06AF\u0632\u0627\u0633",
    role: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/16.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg"
    },
    progress: 78,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "23",
    name: "\u0627\u06CC\u0631\u0627\u0646 \u0648\u0637\u0646\u062E\u0648\u0627\u0647",
    shortname: "\u0631\u06CC\u062D\u0627\u0646\u0647",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/23.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg"
    },
    progress: 36,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "28",
    name: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0627\u0644\u0627\u0646",
    shortname: "\u0627\u062F\u0648\u0627\u0631\u062F",
    location: "\u067E\u0627\u0631\u06CC\u0633, \u0641\u0631\u0627\u0646\u0633\u0647",
    role: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/28.jpg",
      badge: "/images/icons/stacks/angular.svg"
    },
    progress: 49,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "7",
    name: "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633",
    shortname: "\u0622\u0644\u06CC\u0633",
    location: "\u0627\u0644\u0628\u0631\u0632\u060C \u06A9\u0631\u062C",
    role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/7.jpg",
      badge: "/images/icons/stacks/csharp.svg"
    },
    progress: 78,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  },
  {
    id: "22",
    name: "\u062F\u0627\u0648\u0648\u062F \u0647\u06CC\u0686\u06A9\u0633",
    shortname: "\u062F\u0627\u0648\u0648\u062F",
    location: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
    bio: "\u0645\u062A\u0646\u06CC \u0645\u062E\u062A\u0635\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u06A9\u0627\u0631\u0628\u0631 \u0648 \u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC \u0627\u0648.",
    medias: {
      avatar: "/demo/avatars/22.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg"
    },
    progress: 17,
    social: [
      {
        channel: "Linkedin",
        url: "https://linkedin.com",
        icon: "fab fa-linkedin-in"
      },
      {
        channel: "Twitter",
        url: "https://twitter.com",
        icon: "fab fa-twitter"
      },
      {
        channel: "\u062F\u0631\u06CC\u0628\u0644",
        url: "https://dribbble.com",
        icon: "fab fa-dribbble"
      },
      {
        channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        url: "https://github.com",
        icon: "fab fa-github"
      }
    ]
  }
];
var CardsGridV1_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631", -1);
const _hoisted_5 = { class: "card-grid card-grid-v1" };
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
const _hoisted_9 = { class: "card-grid-item-body" };
const _hoisted_10 = { class: "left" };
const _hoisted_11 = { class: "meta" };
const _hoisted_12 = { class: "dark-inverted" };
const _hoisted_13 = { class: "right" };
const _hoisted_14 = { class: "social-links" };
const _hoisted_15 = ["href"];
const _hoisted_16 = { class: "card-grid-item-footer" };
const _hoisted_17 = { class: "left" };
const _hoisted_18 = { class: "progress-stats" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u067E\u06CC\u0634\u0631\u0641\u062A", -1);
const _hoisted_20 = { class: "progress-bar" };
const _hoisted_21 = { class: "right" };
const _hoisted_22 = { class: "buttons" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return users;
      } else {
        return users.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.role.match(new RegExp(filters.value, "i")) || item.medias.badge.match(new RegExp(filters.value, "i"));
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
      const _component_VProgress = _sfc_main$5;
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
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "column is-6"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(_component_VAvatar, {
                          size: "big",
                          picture: item.medias.avatar,
                          badge: item.medias.badge
                        }, null, 8, ["picture", "badge"]),
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("span", _hoisted_12, toDisplayString(item.name), 1),
                          createBaseVNode("span", null, toDisplayString(item.role), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.social, (channel, channelIndex) => {
                            return openBlock(), createElementBlock("a", {
                              key: channelIndex,
                              href: channel.url,
                              class: "social-link"
                            }, [
                              createBaseVNode("i", {
                                "aria-hidden": "true",
                                class: normalizeClass(channel.icon)
                              }, null, 2)
                            ], 8, _hoisted_15);
                          }), 128))
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("div", _hoisted_18, [
                          _hoisted_19,
                          createBaseVNode("span", null, toDisplayString(item.progress) + "%", 1)
                        ]),
                        createBaseVNode("div", _hoisted_20, [
                          createVNode(_component_VProgress, {
                            size: "tiny",
                            value: item.progress
                          }, null, 8, ["value"])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("div", _hoisted_22, [
                          createVNode(_component_VButton, {
                            "dark-outlined": "",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_23
                            ]),
                            _: 1
                          })
                        ])
                      ])
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
