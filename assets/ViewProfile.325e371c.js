import { _ as _sfc_main$1 } from "./VAvatar.879e77ac.js";
import { b as _sfc_main$2, c as __unplugin_components_1 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$3 } from "./VPeity.920acf33.js";
import { _ as _sfc_main$4 } from "./VIconWrap.809aa90c.js";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3 } from "./github.42edfd30.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, t as unref, C as createStaticVNode, B as createTextVNode } from "./vendor.9ec557a4.js";
var ViewProfile_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "profile-wrapper" };
const _hoisted_2 = { class: "profile-header has-text-centered" };
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h3 class="title is-4 is-narrow is-thin">\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC</h3><p class="light-text"> \u0633\u0644\u0627\u0645 \u0628\u0647 \u0647\u0645\u0647 \u060C \u0645\u0646 \u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644 \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9 \u0647\u0633\u062A\u0645 \u0648 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u0641\u0631\u0635\u062A \u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u062F\u0631 \u062A\u062C\u0627\u0631\u062A \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0647\u0633\u062A\u0645. </p><div class="profile-stats"><div class="profile-stat"><i aria-hidden="true" class="lnil lnil-users-alt"></i><span>500+ \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A</span></div><div class="separator"></div><div class="profile-stat"><i aria-hidden="true" class="lnil lnil-checkmark-circle"></i><span>78 \u067E\u0631\u0648\u0698\u0647</span></div><div class="separator"></div><div class="socials"><a><i aria-hidden="true" class="fab fa-facebook-f"></i></a><a><i aria-hidden="true" class="fab fa-twitter"></i></a><a><i aria-hidden="true" class="fab fa-linkedin-in"></i></a></div></div>', 3);
const _hoisted_6 = { class: "profile-body" };
const _hoisted_7 = { class: "columns" };
const _hoisted_8 = { class: "column is-8" };
const _hoisted_9 = { class: "profile-card" };
const _hoisted_10 = { class: "profile-card-section" };
const _hoisted_11 = { class: "section-title" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h4", null, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "section-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "description" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F. \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0645\u06CC \u062A\u0648\u0627\u0646 \u0627\u0645\u06CC\u062F \u062F\u0627\u0634\u062A \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0648 \u062F\u0634\u0648\u0627\u0631\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0627\u0631\u0627\u0626\u0647 \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627 \u0648 \u0634\u0631\u0627\u06CC\u0637 \u0633\u062E\u062A \u062A\u0627\u06CC\u067E \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u062F \u0648\u0632\u0645\u0627\u0646 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0634\u0627\u0645\u0644 \u062D\u0631\u0648\u0641\u0686\u06CC\u0646\u06CC \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC \u0648 \u062C\u0648\u0627\u0628\u06AF\u0648\u06CC \u0633\u0648\u0627\u0644\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0647 \u0627\u0647\u0644 \u062F\u0646\u06CC\u0627\u06CC \u0645\u0648\u062C\u0648\u062F \u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u0627\u0633\u0627 \u0645\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F. ")
], -1);
const _hoisted_15 = { class: "profile-card-section" };
const _hoisted_16 = { class: "section-title" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("h4", null, "\u062A\u062C\u0631\u0628\u06CC\u0627\u062A", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_19 = { class: "section-content" };
const _hoisted_20 = { class: "experience-wrapper" };
const _hoisted_21 = { class: "experience-item" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062F\u0641\u062A\u0631 \u0645\u0631\u06A9\u0632\u06CC \u0627\u06CC\u0631 \u0628\u06CC \u0627\u0646 \u0628\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644")
], -1);
const _hoisted_23 = { class: "experience-item" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0641\u06CC\u0633\u0628\u0648\u06A9"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644")
], -1);
const _hoisted_25 = { class: "experience-item" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u0637\u0644\u0633\u06CC\u0646"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_27 = { class: "experience-item" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F3\u06F8\u06F8"),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F0")
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_29 = { class: "more-button has-text-centered" };
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u0628\u06CC\u0634\u062A\u0631 \u0628\u0628\u06CC\u0646\u06CC\u062F");
const _hoisted_31 = { class: "profile-card-section" };
const _hoisted_32 = { class: "section-title" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0632\u0628\u0627\u0646\u200C\u0647\u0627", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_35 = { class: "section-content" };
const _hoisted_36 = { class: "languages-wrapper" };
const _hoisted_37 = { class: "languages-item" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0641\u0627\u0631\u0633\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06AF\u0648\u06CC\u0646\u062F\u0647 \u0628\u0648\u0645\u06CC \u060C \u0631\u0648\u0627\u0646")
], -1);
const _hoisted_39 = { class: "languages-item" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06AF\u0648\u06CC\u0646\u062F\u0647 \u0628\u0648\u0645\u06CC \u060C \u0631\u0648\u0627\u0646")
], -1);
const _hoisted_41 = { class: "languages-item" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0641\u0631\u0627\u0646\u0633\u0648\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0631\u0648\u0627\u0646 \u060C \u0645\u06A9\u062A\u0648\u0628 \u0648 \u06AF\u0641\u062A\u0627\u0631\u06CC")
], -1);
const _hoisted_43 = { class: "languages-item" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0622\u0644\u0645\u0627\u0646\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u0645\u0628\u062A\u062F\u06CC")
], -1);
const _hoisted_45 = { class: "languages-item" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627\u06CC\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u0645\u0628\u062A\u062F\u06CC")
], -1);
const _hoisted_47 = { class: "profile-card-section" };
const _hoisted_48 = { class: "section-title" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627", -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_51 = { class: "section-content" };
const _hoisted_52 = { class: "skills-wrapper" };
const _hoisted_53 = { class: "skills-item" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("div", { class: "skill-info" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062C\u0627\u0648\u0627 \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"),
  /* @__PURE__ */ createBaseVNode("span", null, "7 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647")
], -1);
const _hoisted_55 = { class: "people" };
const _hoisted_56 = { class: "skills-item" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "skill-info" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644"),
  /* @__PURE__ */ createBaseVNode("span", null, "4 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647")
], -1);
const _hoisted_58 = { class: "people" };
const _hoisted_59 = { class: "skills-item" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "skill-info" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Html 5"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647")
], -1);
const _hoisted_61 = { class: "people" };
const _hoisted_62 = { class: "skills-item" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("div", { class: "skill-info" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "CSS 3"),
  /* @__PURE__ */ createBaseVNode("span", null, "10+ \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647")
], -1);
const _hoisted_64 = { class: "people" };
const _hoisted_65 = { class: "more-button has-text-centered" };
const _hoisted_66 = /* @__PURE__ */ createTextVNode("\u0628\u06CC\u0634\u062A\u0631 \u0628\u0628\u06CC\u0646\u06CC\u062F");
const _hoisted_67 = { class: "profile-card" };
const _hoisted_68 = { class: "profile-card-section no-padding" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u062A\u0648\u0635\u06CC\u0647\u200C\u0646\u0627\u0645\u0647\u200C\u0647\u0627"),
  /* @__PURE__ */ createBaseVNode("a", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-pencil"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_70 = { class: "section-content" };
const _hoisted_71 = { class: "recommendations-wrapper" };
const _hoisted_72 = { class: "recommendations-item" };
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647", -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ", -1);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0631\u06CC\u0645"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06F2 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F0")
], -1);
const _hoisted_76 = { class: "recommendations-item" };
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, " \u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC ", -1);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("p", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. ", -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u06CC\u0644 \u06AF\u06CC\u062A\u0633"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u06F6 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F0")
], -1);
const _hoisted_80 = { class: "column is-4" };
const _hoisted_81 = { class: "profile-card" };
const _hoisted_82 = { class: "profile-card-section no-padding" };
const _hoisted_83 = { class: "section-title" };
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A", -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("label", { class: "form-switch is-success" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "checkbox",
    class: "is-switch",
    checked: ""
  }),
  /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
], -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("div", { class: "section-content" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "network-notifications" }, [
    /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "\u0627\u0639\u0644\u0627\u0646 \u0628\u0647 \u0634\u0628\u06A9\u0647 \u0634\u0645\u0627\u061F"),
    /* @__PURE__ */ createBaseVNode("p", null, " \u0627\u06CC\u0646 \u062A\u0646\u0638\u06CC\u0645 \u0631\u0627 \u0641\u0639\u0627\u0644 \u06CC\u0627 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u06CC\u062C\u0627\u062F \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u062F\u0631 \u0646\u0645\u0627\u06CC\u0647 \u062E\u0648\u062F \u060C \u0634\u0628\u06A9\u0647 \u0634\u0645\u0627 \u0645\u0637\u0644\u0639 \u0634\u0648\u062F. ")
  ])
], -1);
const _hoisted_87 = { class: "profile-card" };
const _hoisted_88 = { class: "profile-card-section no-padding" };
const _hoisted_89 = { class: "section-title" };
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0628\u0632\u0627\u0631", -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647", -1);
const _hoisted_93 = { class: "section-content" };
const _hoisted_94 = { class: "tools-wrapper" };
const _hoisted_95 = { class: "tools-item" };
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0622\u062F\u0648\u0628\u06CC \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u067E\u06CC\u0634\u0631\u0641\u062A\u0647")
], -1);
const _hoisted_97 = { class: "tools-item" };
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u062C\u06CC\u0631\u0627"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u0645\u062A\u0648\u0633\u0637")
], -1);
const _hoisted_99 = { class: "tools-item" };
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0622\u0641\u06CC\u0633"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0633\u0637\u062D \u062A\u062E\u0635\u0635\u06CC")
], -1);
const _hoisted_101 = { class: "profile-card" };
const _hoisted_102 = { class: "profile-card-section no-padding" };
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0628\u0627\u0632\u062F\u06CC\u062F\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "\u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u0647\u0645\u0647")
], -1);
const _hoisted_104 = { class: "section-content" };
const _hoisted_105 = { class: "people-wrapper" };
const _hoisted_106 = {
  href: "#",
  class: "people-item"
};
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0645\u0644\u0627\u0646\u06CC"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_108 = {
  href: "#",
  class: "people-item"
};
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062D\u06A9\u06CC\u0645"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_110 = {
  href: "#",
  class: "people-item"
};
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u062D\u0644\u06CC\u0645\u0647"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628")
], -1);
const _hoisted_112 = {
  href: "#",
  class: "people-item"
};
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0627\u062F\u0648\u0627\u0631\u062F"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631")
], -1);
const _hoisted_114 = {
  href: "#",
  class: "people-item"
};
const _hoisted_115 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "\u0644\u0631\u06CC \u067E\u06CC\u062C"),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$2;
      const _component_VPeity = _sfc_main$3;
      const _component_VIconWrap = _sfc_main$4;
      const _component_VControl = __unplugin_components_1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VAvatar, {
            size: "xl",
            picture: "/images/avatars/svg/vuero-1.svg",
            badge: "/images/icons/flags/united-states-of-america.svg"
          }),
          _hoisted_3
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    _hoisted_12,
                    createVNode(_component_RouterLink, { to: { name: "sidebar-layouts-profile-edit" } }, {
                      default: withCtx(() => [
                        _hoisted_13
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_14
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    _hoisted_17,
                    createVNode(_component_RouterLink, { to: { name: "sidebar-layouts-profile-edit-experience" } }, {
                      default: withCtx(() => [
                        _hoisted_18
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("img", {
                          src: _imports_0,
                          alt: "",
                          onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_22
                      ]),
                      createBaseVNode("div", _hoisted_23, [
                        createBaseVNode("img", {
                          src: _imports_1,
                          alt: "",
                          onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_24
                      ]),
                      createBaseVNode("div", _hoisted_25, [
                        createBaseVNode("img", {
                          src: _imports_2,
                          alt: "",
                          onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_26
                      ]),
                      createBaseVNode("div", _hoisted_27, [
                        createBaseVNode("img", {
                          src: _imports_3,
                          alt: "",
                          onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                        }, null, 32),
                        _hoisted_28
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_29, [
                      createVNode(_component_VButton, { light: "" }, {
                        default: withCtx(() => [
                          _hoisted_30
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_31, [
                  createBaseVNode("div", _hoisted_32, [
                    _hoisted_33,
                    createVNode(_component_RouterLink, { to: { name: "sidebar-layouts-profile-edit-skills" } }, {
                      default: withCtx(() => [
                        _hoisted_34
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_35, [
                    createBaseVNode("div", _hoisted_36, [
                      createBaseVNode("div", _hoisted_37, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/flags/iran.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "donut",
                              values: [100, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              radius: 8,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_38
                      ]),
                      createBaseVNode("div", _hoisted_39, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/flags/united-states-of-america.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "donut",
                              values: [100, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              radius: 8,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_40
                      ]),
                      createBaseVNode("div", _hoisted_41, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/flags/france.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "donut",
                              values: [80, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_42
                      ]),
                      createBaseVNode("div", _hoisted_43, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/flags/germany.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "donut",
                              values: [30, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_44
                      ]),
                      createBaseVNode("div", _hoisted_45, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/flags/spain.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "donut",
                              values: [40, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_46
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("div", _hoisted_48, [
                    _hoisted_49,
                    createVNode(_component_RouterLink, { to: { name: "sidebar-layouts-profile-edit-skills" } }, {
                      default: withCtx(() => [
                        _hoisted_50
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_51, [
                    createBaseVNode("div", _hoisted_52, [
                      createBaseVNode("div", _hoisted_53, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/js.svg" }),
                        _hoisted_54,
                        createBaseVNode("div", _hoisted_55, [
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "BT",
                            color: "warning"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/18.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "JD",
                            color: "info"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/7.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "38"
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_56, [
                        createVNode(_component_VIconWrap, {
                          icon: "lnil lnil-burger-alt",
                          placeholder: ""
                        }),
                        _hoisted_57,
                        createBaseVNode("div", _hoisted_58, [
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/21.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "AT",
                            color: "success"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/39.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/23.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "27"
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_59, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/html5.svg" }),
                        _hoisted_60,
                        createBaseVNode("div", _hoisted_61, [
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/38.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/11.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "SC",
                            color: "h-purple"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/13.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "19"
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_62, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/css3.svg" }),
                        _hoisted_63,
                        createBaseVNode("div", _hoisted_64, [
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/21.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "SC",
                            color: "h-purple"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/5.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            picture: "/demo/avatars/7.jpg"
                          }),
                          createVNode(_component_VAvatar, {
                            size: "small",
                            initials: "31"
                          })
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_65, [
                      createVNode(_component_VButton, { light: "" }, {
                        default: withCtx(() => [
                          _hoisted_66
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_67, [
                createBaseVNode("div", _hoisted_68, [
                  _hoisted_69,
                  createBaseVNode("div", _hoisted_70, [
                    createBaseVNode("div", _hoisted_71, [
                      createBaseVNode("div", _hoisted_72, [
                        createVNode(_component_VAvatar, {
                          size: "large",
                          picture: "/demo/avatars/5.jpg",
                          badge: "/images/icons/flags/united-states-of-america.svg"
                        }),
                        _hoisted_73,
                        _hoisted_74,
                        _hoisted_75
                      ]),
                      createBaseVNode("div", _hoisted_76, [
                        createVNode(_component_VAvatar, {
                          size: "large",
                          picture: "/demo/avatars/18.jpg",
                          badge: "/images/icons/flags/united-states-of-america.svg"
                        }),
                        _hoisted_77,
                        _hoisted_78,
                        _hoisted_79
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_80, [
              createBaseVNode("div", _hoisted_81, [
                createBaseVNode("div", _hoisted_82, [
                  createBaseVNode("div", _hoisted_83, [
                    _hoisted_84,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        _hoisted_85
                      ]),
                      _: 1
                    })
                  ]),
                  _hoisted_86
                ])
              ]),
              createBaseVNode("div", _hoisted_87, [
                createBaseVNode("div", _hoisted_88, [
                  createBaseVNode("div", _hoisted_89, [
                    _hoisted_90,
                    createVNode(_component_RouterLink, { to: { name: "sidebar-layouts-profile-edit-skills" } }, {
                      default: withCtx(() => [
                        _hoisted_91
                      ]),
                      _: 1
                    }),
                    _hoisted_92
                  ]),
                  createBaseVNode("div", _hoisted_93, [
                    createBaseVNode("div", _hoisted_94, [
                      createBaseVNode("div", _hoisted_95, [
                        createVNode(_component_VIconWrap, { picture: "/images/icons/stacks/illustrator.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "pie",
                              values: [80, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_96
                      ]),
                      createBaseVNode("div", _hoisted_97, [
                        createVNode(_component_VIconWrap, { picture: "/demo/photos/brands/jira.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "pie",
                              values: [60, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_98
                      ]),
                      createBaseVNode("div", _hoisted_99, [
                        createVNode(_component_VIconWrap, { picture: "/demo/photos/brands/office.svg" }, {
                          after: withCtx(() => [
                            createVNode(_component_VPeity, {
                              type: "pie",
                              values: [95, 100],
                              fill: ["var(--primary)", "transparent"],
                              height: 50,
                              "inner-radius": 22,
                              width: 50
                            }, null, 8, ["fill"])
                          ]),
                          _: 1
                        }),
                        _hoisted_100
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_101, [
                createBaseVNode("div", _hoisted_102, [
                  _hoisted_103,
                  createBaseVNode("div", _hoisted_104, [
                    createBaseVNode("div", _hoisted_105, [
                      createBaseVNode("a", _hoisted_106, [
                        createVNode(_component_VAvatar, {
                          picture: "/demo/avatars/25.jpg",
                          badge: "/images/icons/stacks/js.svg"
                        }),
                        _hoisted_107
                      ]),
                      createBaseVNode("a", _hoisted_108, [
                        createVNode(_component_VAvatar, {
                          picture: "/demo/avatars/29.jpg",
                          badge: "/images/icons/stacks/python.svg"
                        }),
                        _hoisted_109
                      ]),
                      createBaseVNode("a", _hoisted_110, [
                        createVNode(_component_VAvatar, {
                          picture: "/demo/avatars/38.jpg",
                          badge: "/images/icons/stacks/vuejs.svg"
                        }),
                        _hoisted_111
                      ]),
                      createBaseVNode("a", _hoisted_112, [
                        createVNode(_component_VAvatar, {
                          picture: "/demo/avatars/28.jpg",
                          badge: "/images/icons/stacks/angular.svg"
                        }),
                        _hoisted_113
                      ]),
                      createBaseVNode("a", _hoisted_114, [
                        createVNode(_component_VAvatar, {
                          picture: "/demo/avatars/19.jpg",
                          badge: "/images/icons/stacks/cplus.svg"
                        }),
                        _hoisted_115
                      ])
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
