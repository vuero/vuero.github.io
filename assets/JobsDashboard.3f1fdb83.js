import { c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, h as _sfc_main$6 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VCheckbox.206c9408.js";
import { _ as _sfc_main$4 } from "./VTag.ff081b8f.js";
import { _ as _sfc_main$5 } from "./VTags.e7e39237.js";
import { d as defineComponent, r as ref, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, A as isRef, G as Fragment, J as renderList, E as toDisplayString, N as createBlock, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
const jobs = [
  {
    logo: "/demo/photos/brands/airbnb.svg",
    title: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/slack.svg",
    title: "\u0637\u0631\u0627\u062D \u0645\u062D\u0635\u0648\u0644 \u0627\u0631\u0634\u062F",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/github.svg",
    title: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/google.svg",
    title: "\u0637\u0631\u0627\u062D \u0645\u062D\u0635\u0648\u0644",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/facebook.svg",
    title: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/tnw.svg",
    title: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/dribbble.svg",
    title: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/atlassian.svg",
    title: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  },
  {
    logo: "/demo/photos/brands/gitlab.svg",
    title: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    description: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0627\u0646\u0639 \u06A9\u0646\u0646\u062F\u0647 \u0648 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644\u06CC \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0637\u0631\u0627\u062D\u06CC \u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F ...",
    categories: [
      {
        name: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A"
      },
      {
        name: "\u062D\u062F\u0627\u0642\u0644 \u06CC\u06A9 \u0633\u0627\u0644"
      },
      {
        name: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"
      }
    ]
  }
];
var JobsDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "jobs-dashboard" };
const _hoisted_2 = { class: "jobs-dashboard-wrapper" };
const _hoisted_3 = { class: "search-menu" };
const _hoisted_4 = { class: "search-bar" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="search-location"><i class="iconify" data-icon="feather:map-pin"></i> \u0644\u0633 \u0622\u0646\u062C\u0644\u0633 </div><div class="search-job"><i class="iconify" data-icon="feather:briefcase"></i><input type="text" placeholder="\u0646\u0648\u0639 \u0634\u063A\u0644"></div><div class="search-salary"><i class="iconify" data-icon="feather:dollar-sign"></i><input type="text" placeholder="\u0628\u0627\u0632\u0647 \u062D\u0642\u0648\u0642"></div><button class="search-button">\u062C\u0633\u062A\u062C\u0648</button>', 4);
const _hoisted_9 = { class: "main-container" };
const _hoisted_10 = { class: "search-type" };
const _hoisted_11 = { class: "alert" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "alert-title" }, "\u0627\u06CC\u062C\u0627\u062F \u0627\u0639\u0644\u0627\u0646 \u0645\u0648\u0642\u0639\u06CC\u062A \u0634\u063A\u0644\u06CC", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "alert-subtitle" }, " \u0628\u0627 \u0627\u06CC\u062C\u0627\u062F \u0627\u0639\u0644\u0627\u0646\u060C \u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627\u06CC \u0634\u063A\u0644\u06CC \u062C\u062F\u06CC\u062F \u0628\u0647 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F \u0648 \u0647\u06CC\u0686 \u0641\u0631\u0635\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u06CC \u0631\u0627 \u0627\u0632 \u062F\u0633\u062A \u0646\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u0627\u062F. ", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input",
  placeholder: "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u0627\u06CC\u062C\u0627\u062F \u0627\u0639\u0644\u0627\u0646");
const _hoisted_16 = { class: "job-time" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "job-time-title" }, "\u0646\u0648\u0639 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u06CC", -1);
const _hoisted_18 = { class: "job-wrapper" };
const _hoisted_19 = { class: "type-container" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "56", -1);
const _hoisted_21 = { class: "type-container" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "43", -1);
const _hoisted_23 = { class: "type-container" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "24", -1);
const _hoisted_25 = { class: "type-container" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "27", -1);
const _hoisted_27 = { class: "type-container" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "76", -1);
const _hoisted_29 = { class: "type-container" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "28", -1);
const _hoisted_31 = { class: "job-time" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "job-time-title" }, "\u0633\u0637\u062D \u0634\u063A\u0644\u06CC", -1);
const _hoisted_33 = { class: "job-wrapper" };
const _hoisted_34 = { class: "type-container" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "98", -1);
const _hoisted_36 = { class: "type-container" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "44", -1);
const _hoisted_38 = { class: "type-container" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "35", -1);
const _hoisted_40 = { class: "type-container" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "29", -1);
const _hoisted_42 = { class: "type-container" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "26", -1);
const _hoisted_44 = { class: "type-container" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "56", -1);
const _hoisted_46 = { class: "job-time" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "job-time-title" }, "\u0628\u0627\u0632\u0647 \u062D\u0642\u0648\u0642", -1);
const _hoisted_48 = { class: "job-wrapper" };
const _hoisted_49 = { class: "type-container" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "49", -1);
const _hoisted_51 = { class: "type-container" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "67", -1);
const _hoisted_53 = { class: "type-container" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "24", -1);
const _hoisted_55 = { class: "type-container" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "27", -1);
const _hoisted_57 = { class: "type-container" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "76", -1);
const _hoisted_59 = { class: "type-container" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "22", -1);
const _hoisted_61 = { class: "type-container" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("span", { class: "job-number" }, "18", -1);
const _hoisted_63 = { class: "searched-jobs" };
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("div", { class: "searched-bar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "searched-count" }, "\u0646\u0645\u0627\u06CC\u0634 \u06F4\u06F6 \u0645\u0648\u0642\u0639\u06CC\u062A \u0634\u063A\u0644\u06CC"),
  /* @__PURE__ */ createBaseVNode("div", { class: "searched-link" }, [
    /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647")
  ])
], -1);
const _hoisted_65 = { class: "job-cards" };
const _hoisted_66 = { class: "job-card-header" };
const _hoisted_67 = ["src"];
const _hoisted_68 = { class: "job-card-title" };
const _hoisted_69 = { class: "job-card-subtitle" };
const _hoisted_70 = { class: "job-detail-buttons" };
const _hoisted_71 = { class: "job-card-buttons" };
const _hoisted_72 = /* @__PURE__ */ createTextVNode("\u062F\u0631\u062E\u0648\u0627\u0633\u062A");
const _hoisted_73 = /* @__PURE__ */ createTextVNode("\u067E\u06CC\u0627\u0645\u200C\u0647\u0627");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let tagsValue = [];
    const tagsOptions = [
      { value: "web-developer", label: "\u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC" },
      { value: "uiux-designer", label: "\u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC" },
      { value: "backend-developer", label: "\u0628\u06A9 \u0627\u0646\u062F" }
    ];
    const jobType = ref(["job-type-2"]);
    const jobSeniority = ref(["job-seniority-3", "job-seniority-4"]);
    const jobSalary = ref(["job-salary-5", "job-salary-6"]);
    return (_ctx, _cache) => {
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_V_Control = __unplugin_components_1;
      const _component_V_Field = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_V_Checkbox = _sfc_main$3;
      const _component_V_Tag = _sfc_main$4;
      const _component_V_Tags = _sfc_main$5;
      const _component_VButtons = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_V_Field, { class: "is-autocomplete-select is-curved-select" }, {
                default: withCtx(() => [
                  createVNode(_component_V_Control, { icon: "feather:search" }, {
                    default: withCtx(() => [
                      createVNode(_component_Multiselect, {
                        modelValue: unref(tagsValue),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(tagsValue) ? tagsValue.value = $event : tagsValue = $event),
                        mode: "tags",
                        searchable: true,
                        "create-tag": true,
                        options: tagsOptions,
                        placeholder: ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _hoisted_5
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                _hoisted_12,
                _hoisted_13,
                createVNode(_component_V_Field, null, {
                  default: withCtx(() => [
                    createVNode(_component_V_Control, { icon: "feather:briefcase" }, {
                      default: withCtx(() => [
                        _hoisted_14
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  fullwidth: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_15
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_16, [
                _hoisted_17,
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("div", _hoisted_19, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => jobType.value = $event),
                      value: "job-type-1",
                      label: "\u0634\u063A\u0644\u200C\u0647\u0627\u06CC \u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_20
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => jobType.value = $event),
                      value: "job-type-2",
                      label: "\u0634\u063A\u0644\u200C\u0647\u0627\u06CC \u067E\u0627\u0631\u0647 \u0648\u0642\u062A",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_22
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => jobType.value = $event),
                      value: "job-type-3",
                      label: "\u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627\u06CC \u062F\u0648\u0631\u06A9\u0627\u0631\u06CC",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_24
                  ]),
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => jobType.value = $event),
                      value: "job-type-4",
                      label: "\u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0648\u0631\u0632\u06CC",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_26
                  ]),
                  createBaseVNode("div", _hoisted_27, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => jobType.value = $event),
                      value: "job-type-5",
                      label: "\u067E\u06CC\u0645\u0627\u0646\u06A9\u0627\u0631\u06CC",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_28
                  ]),
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobType.value,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => jobType.value = $event),
                      value: "job-type-6",
                      label: "\u0645\u0647\u0627\u0631\u062A \u0622\u0645\u0648\u0632\u06CC",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_30
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_31, [
                _hoisted_32,
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("div", _hoisted_34, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-1",
                      label: "\u0633\u0637\u062D \u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u06CC",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_35
                  ]),
                  createBaseVNode("div", _hoisted_36, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-2",
                      label: "\u0633\u0637\u062D \u062A\u0627\u0632\u0647 \u0648\u0627\u0631\u062F",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_37
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-3",
                      label: "\u0633\u0637\u062D \u0645\u062A\u0648\u0633\u0637",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_39
                  ]),
                  createBaseVNode("div", _hoisted_40, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-4",
                      label: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_41
                  ]),
                  createBaseVNode("div", _hoisted_42, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-5",
                      label: "\u0645\u062F\u06CC\u0631\u0627\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_43
                  ]),
                  createBaseVNode("div", _hoisted_44, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSeniority.value,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => jobSeniority.value = $event),
                      value: "job-seniority-6",
                      label: "\u0633\u0637\u062D \u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u06CC",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_45
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                _hoisted_47,
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("div", _hoisted_49, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => jobSalary.value = $event),
                      value: "job-salary-1",
                      label: "3 \u0645\u06CC\u0644\u06CC\u0648\u0646 - 5 \u0645\u06CC\u0644\u06CC\u0648\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_50
                  ]),
                  createBaseVNode("div", _hoisted_51, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => jobSalary.value = $event),
                      value: "job-salary-2",
                      label: "5 \u0645\u06CC\u0644\u06CC\u0648\u0646 - 7 \u0645\u06CC\u0644\u06CC\u0648\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_52
                  ]),
                  createBaseVNode("div", _hoisted_53, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => jobSalary.value = $event),
                      value: "job-salary-3",
                      label: "7 \u0645\u06CC\u0644\u06CC\u0648\u0646 - 10 \u0645\u06CC\u0644\u06CC\u0648\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_54
                  ]),
                  createBaseVNode("div", _hoisted_55, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => jobSalary.value = $event),
                      value: "job-salary-4",
                      label: "10 \u0645\u06CC\u0644\u06CC\u0648\u0646 - 15 \u0645\u06CC\u0644\u06CC\u0648\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_56
                  ]),
                  createBaseVNode("div", _hoisted_57, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => jobSalary.value = $event),
                      value: "job-salary-5",
                      label: "15 \u0645\u06CC\u0644\u06CC\u0648\u0646 - 20 \u0645\u06CC\u0644\u06CC\u0648\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_58
                  ]),
                  createBaseVNode("div", _hoisted_59, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => jobSalary.value = $event),
                      value: "job-salary-6",
                      label: "20 \u0645\u06CC\u0644\u06CC\u0648\u0646 - 25 \u0645\u06CC\u0644\u06CC\u0648\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_60
                  ]),
                  createBaseVNode("div", _hoisted_61, [
                    createVNode(_component_V_Checkbox, {
                      modelValue: jobSalary.value,
                      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => jobSalary.value = $event),
                      value: "job-salary-7",
                      label: "25 \u0645\u06CC\u0644\u06CC\u0648\u0646 - 30 \u0645\u06CC\u0644\u06CC\u0648\u0646",
                      color: "primary",
                      paddingless: ""
                    }, null, 8, ["modelValue"]),
                    _hoisted_62
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_63, [
              _hoisted_64,
              createBaseVNode("div", _hoisted_65, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jobs), (job, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "job-card"
                  }, [
                    createBaseVNode("div", _hoisted_66, [
                      createBaseVNode("img", {
                        class: "job-card-logo",
                        src: job.logo,
                        alt: ""
                      }, null, 8, _hoisted_67)
                    ]),
                    createBaseVNode("div", _hoisted_68, toDisplayString(job.title), 1),
                    createBaseVNode("div", _hoisted_69, toDisplayString(job.description), 1),
                    createBaseVNode("div", _hoisted_70, [
                      createVNode(_component_V_Tags, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(job.categories, (category, catIndex) => {
                            return openBlock(), createBlock(_component_V_Tag, {
                              key: catIndex,
                              color: "solid",
                              label: category.name,
                              curved: ""
                            }, null, 8, ["label"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_71, [
                      createVNode(_component_VButtons, null, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            color: "primary",
                            raised: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_72
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VButton, { "dark-outlined": "" }, {
                            default: withCtx(() => [
                              _hoisted_73
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
