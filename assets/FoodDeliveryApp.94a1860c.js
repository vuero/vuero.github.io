import { _ as _sfc_main$1 } from "./VPlaceholderSection.00317a29.js";
import { _ as _sfc_main$2 } from "./VAvatar.879e77ac.js";
import { b as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./UIWidgetToolbarDropdown.92a1dd6c.js";
import { _ as _sfc_main$5, a as _sfc_main$7 } from "./IllustrationWidget.7d59da5f.js";
import { _ as _sfc_main$6 } from "./UIWidget.2cde634f.js";
import { _ as _sfc_main$8 } from "./UIWidgetToolbarIcon.bb1978dd.js";
import { _ as _sfc_main$9 } from "./ContactWidget.5dbccff2.js";
import { i as iconList, _ as _sfc_main$a } from "./menuList.b8beb818.js";
import { t as tns } from "./tiny-slider.3c41456c.js";
import { a as followersStats } from "./followers.d693ba3c.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { d as defineComponent, r as ref, ab as onMounted, ac as onUnmounted, o as openBlock, b as createElementBlock, e as createBaseVNode, G as Fragment, J as renderList, E as toDisplayString, t as unref, n as normalizeClass, v as createVNode, x as withCtx, B as createTextVNode, C as createStaticVNode } from "./vendor.9ec557a4.js";
var _imports_0 = "/assets/header.aaad1ac5.svg";
var _imports_1 = "/assets/cart-placeholder.f1c5932f.svg";
var FoodWidget = "/assets/widget.bce5cf66.svg";
const foodPills = [
  {
    id: 0,
    icon: "/images/icons/food/icon-1.svg",
    label: "\u0647\u0645\u0647"
  },
  {
    id: 1,
    icon: "/images/icons/food/icon-2.svg",
    label: "\u067E\u06CC\u062A\u0632\u0627"
  },
  {
    id: 2,
    icon: "/images/icons/food/icon-3.svg",
    label: "\u0622\u0633\u06CC\u0627\u06CC\u06CC"
  },
  {
    id: 3,
    icon: "/images/icons/food/icon-4.svg",
    label: "\u0641\u0633\u062A \u0641\u0648\u062F"
  },
  {
    id: 4,
    icon: "/images/icons/food/icon-5.svg",
    label: "\u06A9\u0628\u0627\u0628\u06CC"
  },
  {
    id: 5,
    icon: "/images/icons/food/icon-6.svg",
    label: "\u06A9\u06CC\u06A9"
  },
  {
    id: 6,
    icon: "/images/icons/food/icon-7.svg",
    label: "\u062A\u0627\u06CC\u0644\u0646\u062F\u06CC"
  },
  {
    id: 7,
    icon: "/images/icons/food/icon-8.svg",
    label: "\u0633\u0648\u0634\u06CC"
  },
  {
    id: 8,
    icon: "/images/icons/food/icon-9.svg",
    label: "\u0645\u06CC\u0648\u0647\u200C\u062C\u0627\u062A"
  },
  {
    id: 9,
    icon: "/images/icons/food/icon-10.svg",
    label: "\u06AF\u06CC\u0627\u0647\u06CC"
  },
  {
    id: 10,
    icon: "/images/icons/food/icon-11.svg",
    label: "\u0645\u06CC\u0627\u0646 \u0648\u0639\u062F\u0647"
  },
  {
    id: 11,
    icon: "/images/icons/food/icon-12.svg",
    label: "\u067E\u0627\u0633\u062A\u0627"
  },
  {
    id: 12,
    icon: "/images/icons/food/icon-13.svg",
    label: "\u0641\u06CC\u0634"
  },
  {
    id: 0,
    icon: "/images/icons/food/icon-1.svg",
    label: "\u0647\u0645\u0647"
  },
  {
    id: 1,
    icon: "/images/icons/food/icon-2.svg",
    label: "\u067E\u06CC\u062A\u0632\u0627"
  },
  {
    id: 2,
    icon: "/images/icons/food/icon-3.svg",
    label: "\u0622\u0633\u06CC\u0627\u06CC\u06CC"
  },
  {
    id: 3,
    icon: "/images/icons/food/icon-4.svg",
    label: "\u0641\u0633\u062A \u0641\u0648\u062F"
  },
  {
    id: 4,
    icon: "/images/icons/food/icon-5.svg",
    label: "\u06A9\u0628\u0627\u0628\u06CC"
  },
  {
    id: 5,
    icon: "/images/icons/food/icon-6.svg",
    label: "\u06A9\u06CC\u06A9"
  },
  {
    id: 6,
    icon: "/images/icons/food/icon-7.svg",
    label: "\u062A\u0627\u06CC\u0644\u0646\u062F\u06CC"
  },
  {
    id: 7,
    icon: "/images/icons/food/icon-8.svg",
    label: "\u0633\u0648\u0634\u06CC"
  },
  {
    id: 8,
    icon: "/images/icons/food/icon-9.svg",
    label: "\u0645\u06CC\u0648\u0647\u200C\u062C\u0627\u062A"
  },
  {
    id: 9,
    icon: "/images/icons/food/icon-10.svg",
    label: "\u06AF\u06CC\u0627\u0647\u06CC"
  },
  {
    id: 10,
    icon: "/images/icons/food/icon-11.svg",
    label: "\u0645\u06CC\u0627\u0646 \u0648\u0639\u062F\u0647"
  },
  {
    id: 11,
    icon: "/images/icons/food/icon-12.svg",
    label: "\u067E\u0627\u0633\u062A\u0627"
  },
  {
    id: 12,
    icon: "/images/icons/food/icon-13.svg",
    label: "\u0645\u0627\u0647\u06CC"
  }
];
const restaurants = [
  {
    id: 0,
    name: "\u0645\u0627\u0631\u06CC\u0648 \u067E\u0627\u0644\u0627\u0633",
    picture: "/demo/photos/food/1.jpg",
    deliveryTime: 45,
    category: "\u067E\u06CC\u062A\u0632\u0627",
    icon: "/images/icons/food/icon-2.svg",
    rating: 4.9
  },
  {
    id: 1,
    name: "\u062C\u06CC\u0645\u06CC \u0641\u0633\u062A \u0641\u0648\u062F",
    picture: "/demo/photos/food/2.jpg",
    deliveryTime: 30,
    category: "\u0641\u0633\u062A \u0641\u0648\u062F",
    icon: "/images/icons/food/icon-4.svg",
    rating: 4.5
  },
  {
    id: 2,
    name: "\u0645\u06CC\u0648\u0647 \u06AF\u0631\u062F\u0648\u0646",
    picture: "/demo/photos/food/3.jpg",
    deliveryTime: 45,
    category: "\u0645\u06CC\u0648\u0647\u200C\u062C\u0627\u062A",
    icon: "/images/icons/food/icon-9.svg",
    rating: 4.8
  },
  {
    id: 3,
    name: "\u0628\u0647\u0634\u062A \u0633\u0628\u0632",
    picture: "/demo/photos/food/4.jpg",
    deliveryTime: 20,
    category: "\u06AF\u06CC\u0627\u0647\u06CC",
    icon: "/images/icons/food/icon-10.svg",
    rating: 5
  },
  {
    id: 4,
    name: "\u0645\u0633\u062A\u0631 \u0633\u0627\u0644\u0627\u062F",
    picture: "/demo/photos/food/5.jpg",
    deliveryTime: 30,
    category: "\u06AF\u06CC\u0627\u0647\u06CC",
    icon: "/images/icons/food/icon-10.svg",
    rating: 4.8
  },
  {
    id: 5,
    name: "\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627 \u06A9\u0648\u0686\u0648\u0644\u0648",
    picture: "/demo/photos/food/6.jpg",
    deliveryTime: 50,
    category: "\u067E\u0627\u0633\u062A\u0627",
    icon: "/images/icons/food/icon-12.svg",
    rating: 1.1
  },
  {
    id: 6,
    name: "\u0645\u0633\u062A\u0631 \u0646\u0648\u062F\u0644",
    picture: "/demo/photos/food/7.jpg",
    deliveryTime: 15,
    category: "\u062A\u0627\u06CC\u0644\u0646\u062F\u06CC",
    icon: "/images/icons/food/icon-7.svg",
    rating: 4.9
  },
  {
    id: 7,
    name: "\u062C\u0631\u06CC \u0628\u0631\u06AF\u0631",
    picture: "/demo/photos/food/8.jpg",
    deliveryTime: 20,
    category: "\u0641\u0633\u062A \u0641\u0648\u062F",
    icon: "/images/icons/food/icon-4.svg",
    rating: 5
  },
  {
    id: 8,
    name: "\u063A\u0630\u0627\u0647\u0627\u06CC \u062F\u0631\u06CC\u0627\u06CC\u06CC",
    picture: "/demo/photos/food/9.jpg",
    deliveryTime: 55,
    category: "\u0645\u0627\u0647\u06CC",
    icon: "/images/icons/food/icon-13.svg",
    rating: 1.7
  },
  {
    id: 9,
    name: "\u06A9\u0648\u0686\u0648\u0644\u0648\u0647\u0627\u06CC \u062E\u0648\u0634\u0645\u0632\u0647",
    picture: "/demo/photos/food/10.jpg",
    deliveryTime: 45,
    category: "\u06A9\u06CC\u06A9",
    icon: "/images/icons/food/icon-6.svg",
    rating: 5
  },
  {
    id: 10,
    name: "\u0641\u0633\u062A \u0647\u0627\u0631\u0645\u0627\u0646",
    picture: "/demo/photos/food/11.jpg",
    deliveryTime: 15,
    category: "\u0641\u0633\u062A \u0641\u0648\u062F",
    icon: "/images/icons/food/icon-4.svg",
    rating: 5
  },
  {
    id: 11,
    name: "\u06A9\u06CC\u06A9 \u0628\u0633\u062A\u0646\u06CC",
    picture: "/demo/photos/food/12.jpg",
    deliveryTime: 30,
    category: "\u06A9\u06CC\u06A9",
    icon: "/images/icons/food/icon-6.svg",
    rating: 4.2
  },
  {
    id: 12,
    name: "\u0627\u0648\u0633\u0627\u06A9\u0627 \u0633\u0648\u0634\u06CC",
    picture: "/demo/photos/food/13.jpg",
    deliveryTime: 30,
    category: "\u0633\u0648\u0634\u06CC",
    icon: "/images/icons/food/icon-8.svg",
    rating: 4.9
  },
  {
    id: 13,
    name: "\u063A\u0630\u0627 \u062F\u0631\u0645\u0627\u0646\u06CC",
    picture: "/demo/photos/food/14.jpg",
    deliveryTime: 10,
    category: "\u06AF\u06CC\u0627\u0647\u06CC",
    icon: "/images/icons/food/icon-10.svg",
    rating: 3.8
  },
  {
    id: 14,
    name: "\u06AF\u06CC\u0627\u0647\u0648\u06CC\u0686",
    picture: "/demo/photos/food/15.jpg",
    deliveryTime: 30,
    category: "\u06AF\u06CC\u0627\u0647\u06CC",
    icon: "/images/icons/food/icon-10.svg",
    rating: 4.5
  },
  {
    id: 15,
    name: "\u0633\u0627\u0646\u0634\u0627\u06CC\u0646",
    picture: "/demo/photos/food/16.jpg",
    deliveryTime: 45,
    category: "\u06A9\u06CC\u06A9",
    icon: "/images/icons/food/icon-6.svg",
    rating: 4.9
  },
  {
    id: 16,
    name: "\u0641\u0633\u062A \u0641\u0648\u062F \u0635\u0641\u0631 \u062F\u0631\u062C\u0647",
    picture: "/demo/photos/food/17.jpg",
    deliveryTime: 45,
    category: "\u0641\u0633\u062A \u0641\u0648\u062F",
    icon: "/images/icons/food/icon-4.svg",
    rating: 1
  },
  {
    id: 17,
    name: "\u0628\u0627\u0646\u06A9\u0648\u06A9",
    picture: "/demo/photos/food/18.jpg",
    deliveryTime: 30,
    category: "\u062A\u0627\u06CC\u0644\u0646\u062F\u06CC",
    icon: "/images/icons/food/icon-7.svg",
    rating: 4.5
  }
];
var foodDelivery = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  foodPills,
  restaurants
});
var FoodDeliveryApp_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "food-delivery-dashboard" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "header-image" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "header-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, [
      /* @__PURE__ */ createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0628\u0631\u0627\u06CC \u06F3\u06F0 \u0631\u0648\u0632 "),
      /* @__PURE__ */ createBaseVNode("span", {
        role: "img",
        "aria-label": "Party Popper"
      }, "\u{1F389}")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0645\u062F\u062A \u06F3\u06F0 \u0631\u0648\u0632 \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0628\u0627\u0644\u0627\u06CC \u06F1\u06F0\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 \u0628\u0635\u0648\u0631\u062A \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u0646\u062F \u0634\u062F "),
    /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u062F\u0627\u0646\u06CC\u062F"),
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "fas fa-arrow-left"
      })
    ])
  ])
], -1);
const _hoisted_4 = { class: "left-body" };
const _hoisted_5 = { class: "restaurants" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "restaurants-toolbar" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right" })
], -1);
const _hoisted_7 = { class: "food-pills" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-right"
}, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-left"
}, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "food-pill-icon" };
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "restaurants-list" };
const _hoisted_16 = { class: "columns is-multiline" };
const _hoisted_17 = { class: "restaurants-list-item" };
const _hoisted_18 = { class: "image-container" };
const _hoisted_19 = ["src"];
const _hoisted_20 = { class: "timer" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0642\u06CC\u0642\u0647", -1);
const _hoisted_22 = { class: "meta-container" };
const _hoisted_23 = { class: "meta-icon" };
const _hoisted_24 = ["src"];
const _hoisted_25 = { class: "meta-content" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle"
}, null, -1);
const _hoisted_27 = { class: "rating" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-star"
}, null, -1);
const _hoisted_29 = { class: "mr-1" };
const _hoisted_30 = { class: "right fixed-parent" };
const _hoisted_31 = { class: "sticky-panel fixed-child" };
const _hoisted_32 = { class: "widget icon-toolbar-widget" };
const _hoisted_33 = { class: "icon-toolbar" };
const _hoisted_34 = { class: "toolbar-icon" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:shopping-cart"
}, null, -1);
const _hoisted_36 = [
  _hoisted_35
];
const _hoisted_37 = { class: "toolbar-icon" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = { class: "toolbar-icon" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_42 = [
  _hoisted_41
];
const _hoisted_43 = { class: "toolbar-icon" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:settings"
}, null, -1);
const _hoisted_45 = [
  _hoisted_44
];
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<div class="widget-toolbar"><div class="left"><h3 class="is-bigger">\u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0645\u0646</h3></div><div class="right"><span class="tag is-curved">0 \u0622\u06CC\u062A\u0645</span></div></div>', 1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_49 = { class: "cart-items has-slimscroll is-hidden" };
const _hoisted_50 = { class: "cart-item" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text" }, " \u062F\u0648\u0628\u0644 \u0627\u06CC\u06A9\u0633 \u0644\u0627\u0631\u062C \u0628\u0631\u06AF\u0631 "),
  /* @__PURE__ */ createBaseVNode("span", { class: "price" }, "15 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 * 1")
], -1);
const _hoisted_52 = { class: "cart-item" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text" }, " \u0686\u0631\u06CC \u06A9\u06CC\u06A9 "),
  /* @__PURE__ */ createBaseVNode("span", { class: "price" }, "8 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 * 3")
], -1);
const _hoisted_54 = { class: "cart-item" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text" }, " \u0641\u0631\u0627\u06CC \u0686\u06CC\u06A9 "),
  /* @__PURE__ */ createBaseVNode("span", { class: "price" }, "79 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 * 2")
], -1);
const _hoisted_56 = { class: "cart-button" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "total" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "label" }, "\u0645\u062C\u0645\u0648\u0639"),
  /* @__PURE__ */ createBaseVNode("span", null, "0 \u062A\u0648\u0645\u0627\u0646")
], -1);
const _hoisted_58 = /* @__PURE__ */ createTextVNode(" \u0627\u062F\u0627\u0645\u0647 \u0633\u0641\u0627\u0631\u0634 ");
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0627\u0648\u0644\u060C \u06A9\u0648\u0686\u0647 \u062F\u0648\u0645\u060C \u067E\u0644\u0627\u06A9 3"),
  /* @__PURE__ */ createBaseVNode("p", null, "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeSection = ref("cart");
    let slider;
    const sliderElement = ref();
    const nextButtonElement = ref();
    const prevButtonElement = ref();
    const onIndexChanged = (info) => {
      const indexPrev = info.indexCached;
      const indexCurrent = info.index;
      info.slideItems[indexPrev].classList.remove("active");
      info.slideItems[indexCurrent].classList.add("active");
    };
    onMounted(() => {
      if (sliderElement.value && nextButtonElement.value && prevButtonElement.value) {
        slider = tns({
          container: sliderElement.value,
          controls: true,
          nav: false,
          mouseDrag: true,
          nextButton: nextButtonElement.value,
          prevButton: prevButtonElement.value,
          fixedWidth: 98,
          swipeAngle: false,
          items: 1,
          center: false,
          loop: true
        });
        slider.events.on("indexChanged", onIndexChanged);
      }
    });
    const goTo = (index) => {
      if (slider) {
        slider.goTo(index);
      }
    };
    onUnmounted(() => {
      if (slider) {
        slider.events.off("indexChanged", onIndexChanged);
        slider.destroy();
      }
    });
    return (_ctx, _cache) => {
      const _component_VPlaceholderSection = _sfc_main$1;
      const _component_VAvatar = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_UIWidgetToolbarDropdown = _sfc_main$4;
      const _component_UIWidgetFollowerStats = _sfc_main$5;
      const _component_UIWidget = _sfc_main$6;
      const _component_IllustrationWidget = _sfc_main$7;
      const _component_UIWidgetToolbarIcon = _sfc_main$8;
      const _component_ContactWidget = _sfc_main$9;
      const _component_UIWidgetIconList = _sfc_main$a;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["prevButtonElement"] = _value;
                    prevButtonElement.value = _value;
                  },
                  class: "slick-custom is-prev slick-arrow"
                }, _hoisted_9, 512),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["nextButtonElement"] = _value;
                    nextButtonElement.value = _value;
                  },
                  class: "slick-custom is-next slick-arrow"
                }, _hoisted_11, 512),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["sliderElement"] = _value;
                    sliderElement.value = _value;
                  },
                  class: "food-pills-inner pill-carousel"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(foodDelivery).foodPills, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.id,
                      class: "food-pill",
                      onClick: ($event) => goTo(index)
                    }, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("img", {
                          src: item.icon,
                          alt: ""
                        }, null, 8, _hoisted_14)
                      ]),
                      createBaseVNode("span", null, toDisplayString(item.label), 1)
                    ], 8, _hoisted_12);
                  }), 128))
                ], 512)
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(foodDelivery).restaurants, (restaurant) => {
                    return openBlock(), createElementBlock("div", {
                      key: restaurant.id,
                      class: "column is-4"
                    }, [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("div", _hoisted_18, [
                          createBaseVNode("img", {
                            src: restaurant.picture,
                            alt: "",
                            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "800x450"))
                          }, null, 40, _hoisted_19),
                          createBaseVNode("div", _hoisted_20, [
                            createBaseVNode("div", null, [
                              createBaseVNode("span", null, toDisplayString(restaurant.deliveryTime), 1),
                              _hoisted_21
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("div", _hoisted_23, [
                            createBaseVNode("img", {
                              src: restaurant.icon,
                              alt: "",
                              onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(useViaPlaceholderError)(event, "                            "))
                            }, null, 40, _hoisted_24)
                          ]),
                          createBaseVNode("div", _hoisted_25, [
                            createBaseVNode("h4", null, toDisplayString(restaurant.name), 1),
                            createBaseVNode("p", null, [
                              createBaseVNode("span", null, toDisplayString(restaurant.category), 1),
                              _hoisted_26,
                              createBaseVNode("span", _hoisted_27, [
                                _hoisted_28,
                                createBaseVNode("span", _hoisted_29, toDisplayString(restaurant.rating), 1)
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "cart" && "is-active"]]),
                    onClick: _cache[2] || (_cache[2] = ($event) => activeSection.value = "cart")
                  }, _hoisted_36, 2)
                ]),
                createBaseVNode("div", _hoisted_37, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "activity" && "is-active"]]),
                    onClick: _cache[3] || (_cache[3] = ($event) => activeSection.value = "activity")
                  }, _hoisted_39, 2)
                ]),
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "address" && "is-active"]]),
                    onClick: _cache[4] || (_cache[4] = ($event) => activeSection.value = "address")
                  }, _hoisted_42, 2)
                ]),
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("a", {
                    class: normalizeClass(["inner-icon", [activeSection.value === "settings" && "is-active"]]),
                    onClick: _cache[5] || (_cache[5] = ($event) => activeSection.value = "settings")
                  }, _hoisted_45, 2)
                ])
              ])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["cart-widget side-section", [activeSection.value === "cart" && "is-active"]])
            }, [
              _hoisted_46,
              createVNode(_component_VPlaceholderSection, {
                title: "\u0628\u062F\u0648\u0646 \u0633\u0641\u0627\u0631\u0634",
                subtitle: "\u0633\u0628\u062F \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0634\u0645\u0627 \u062E\u0627\u0644\u06CC \u0627\u0633\u062A. \u0628\u0647 \u0645\u062D\u0636 \u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u0641\u0627\u0631\u0634\u06CC \u0627\u06CC\u0646\u062C\u0627 \u0646\u0645\u0627\u06CC\u0634 \u062E\u0648\u0627\u0647\u062F \u06CC\u0627\u0641\u062A."
              }, {
                image: withCtx(() => [
                  _hoisted_47,
                  _hoisted_48
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_49, [
                createBaseVNode("div", _hoisted_50, [
                  createVNode(_component_VAvatar, {
                    picture: "/demo/photos/food/1.jpg",
                    size: "medium",
                    squared: ""
                  }),
                  _hoisted_51
                ]),
                createBaseVNode("div", _hoisted_52, [
                  createVNode(_component_VAvatar, {
                    picture: "/demo/photos/food/2.jpg",
                    size: "medium",
                    squared: ""
                  }),
                  _hoisted_53
                ]),
                createBaseVNode("div", _hoisted_54, [
                  createVNode(_component_VAvatar, {
                    picture: "/demo/photos/food/3.jpg",
                    size: "medium",
                    squared: ""
                  }),
                  _hoisted_55
                ])
              ]),
              createBaseVNode("div", _hoisted_56, [
                _hoisted_57,
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  bold: "",
                  fullwidth: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_58
                  ]),
                  _: 1
                })
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["side-section", [activeSection.value === "activity" && "is-active"]])
            }, [
              createVNode(_component_UIWidget, { class: "followers-widget" }, {
                header: withCtx(() => [
                  createVNode(_component_UIWidgetToolbarDropdown, { title: "\u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646" })
                ]),
                body: withCtx(() => [
                  createVNode(_component_UIWidgetFollowerStats, { channels: unref(followersStats) }, null, 8, ["channels"])
                ]),
                _: 1
              }),
              createVNode(_component_IllustrationWidget, {
                class: "illustration-widget-v2",
                title: "\u0634\u0645\u0627 2 \u062C\u0627\u06CC\u0632\u0647\u200C\u06CC \u062C\u062F\u06CC\u062F \u06AF\u0631\u0641\u062A\u0647\u200C\u0627\u06CC\u062F",
                text: "\u062A\u0628\u0631\u06CC\u06A9 \u0645\u06CC \u06AF\u0648\u06CC\u0645 \u060C \u0632\u062D\u0645\u0627\u062A \u0634\u0645\u0627 \u0628\u0647 \u062B\u0645\u0631 \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A. \u0647\u0645\u06CC\u0646\u0637\u0648\u0631 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647!",
                picture: unref(FoodWidget)
              }, null, 8, ["picture"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["side-section", [activeSection.value === "address" && "is-active"]])
            }, [
              createVNode(_component_UIWidget, { class: "text-widget" }, {
                header: withCtx(() => [
                  createVNode(_component_UIWidgetToolbarIcon, {
                    title: "\u0627\u0631\u0633\u0627\u0644 \u0628\u0647",
                    icon: "feather:map-pin"
                  })
                ]),
                body: withCtx(() => [
                  _hoisted_59
                ]),
                _: 1
              }),
              createVNode(_component_ContactWidget, {
                picture: "/images/avatars/svg/vuero-1.svg",
                username: "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
                email: "jamal@email.io",
                company: "\u0634\u0631\u06A9\u062A \u062A\u0639\u0627\u0648\u0646\u06CC \u0628\u0631\u0627\u062F\u0631\u0627\u0646 \u062E\u0627\u0634\u0642\u0686\u06CC",
                position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
                location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
                phone: "\u06F0\u06F0\u06F1-\u06F4\u06F4\u06F4-\u06F5\u06F1\u06F5\u06F6",
                squared: "",
                reversed: ""
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["side-section", [activeSection.value === "settings" && "is-active"]])
            }, [
              createVNode(_component_UIWidget, { class: "icon-list-widget" }, {
                body: withCtx(() => [
                  createVNode(_component_UIWidgetIconList, { list: unref(iconList) }, null, 8, ["list"])
                ]),
                _: 1
              })
            ], 2)
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
