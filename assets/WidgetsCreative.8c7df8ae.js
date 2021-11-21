import { a as _sfc_main$8, _ as _sfc_main$b } from "./IllustrationWidget.7d59da5f.js";
import { _ as _sfc_main$9 } from "./ContactWidget.5dbccff2.js";
import { _ as _sfc_main$6 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, G as Fragment, J as renderList, v as createVNode, E as toDisplayString, n as normalizeClass, C as createStaticVNode, r as ref, t as unref, x as withCtx } from "./vendor.9ec557a4.js";
import { _ as _sfc_main$a } from "./UIWidgetToolbarDropdown.92a1dd6c.js";
import { _ as _sfc_main$c } from "./UIWidget.2cde634f.js";
import { _ as _sfc_main$7 } from "./VTag.ff081b8f.js";
import { _ as _sfc_main$d } from "./UIWidgetToolbarIcon.bb1978dd.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
import { a as followersStats } from "./followers.d693ba3c.js";
const _hoisted_1$5 = /* @__PURE__ */ createStaticVNode('<div class="field"><div class="control"><input type="text" class="input" placeholder="\u062C\u0633\u062A\u062C\u0648..."><button class="search-button"><i aria-hidden="true" class="iconify" data-icon="feather:search"></i></button></div></div>', 1);
const _hoisted_2$5 = { class: "avatar-list" };
const _hoisted_3$3 = { class: "meta" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    avatars: { type: Array, required: true },
    squared: { type: Boolean, required: false },
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$6;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget avatar-list-widget", [props.straight && "is-straight"]])
      }, [
        _hoisted_1$5,
        createBaseVNode("div", _hoisted_2$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.avatars, (avatar) => {
            return openBlock(), createElementBlock("div", {
              key: avatar.id,
              class: "avatar-list-item"
            }, [
              createVNode(_component_VAvatar, {
                picture: avatar.picture,
                squared: props.squared
              }, null, 8, ["picture", "squared"]),
              createBaseVNode("div", _hoisted_3$3, [
                createBaseVNode("span", null, toDisplayString(avatar.name), 1)
              ])
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
});
const _hoisted_1$4 = { class: "social-buttons" };
const _hoisted_2$4 = ["onClick"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    buttons: { type: Array, required: false, default: () => [] },
    activeTab: { type: Number, required: false, default: 0 },
    rounded: { type: Boolean, required: false },
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const tab = ref(props.activeTab);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget social-buttons-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.buttons, (button, index) => {
            return openBlock(), createElementBlock("div", {
              key: button.id,
              class: "social-button"
            }, [
              createBaseVNode("a", {
                class: normalizeClass(["inner-button is-facebook", [
                  tab.value === index && "is-active",
                  "is-" + button.network,
                  props.rounded && "is-rounded"
                ]]),
                onClick: ($event) => tab.value = index
              }, [
                createBaseVNode("i", {
                  "aria-hidden": "true",
                  class: normalizeClass(button.icon)
                }, null, 2)
              ], 10, _hoisted_2$4)
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
});
const _hoisted_1$3 = { class: "widget-toolbar" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "\u0633\u0628\u062F \u062E\u0631\u06CC\u062F \u0634\u0645\u0627")
], -1);
const _hoisted_3$2 = { class: "right" };
const _hoisted_4$2 = { class: "cart-items" };
const _hoisted_5$1 = { class: "meta" };
const _hoisted_6$1 = { class: "text" };
const _hoisted_7 = { class: "price" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "cart-button" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "button v-button is-primary is-raised is-bold is-fullwidth" }, " \u0627\u062F\u0627\u0645\u0647\u200C\u06CC \u062E\u0631\u06CC\u062F ")
], -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    products: { type: Array, required: true },
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$7;
      const _component_VAvatar = _sfc_main$6;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cart-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          _hoisted_2$3,
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(_component_VTag, {
              label: props.products.length + " \u0642\u0644\u0645",
              color: "orange",
              curved: ""
            }, null, 8, ["label"])
          ])
        ]),
        createBaseVNode("div", _hoisted_4$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.products, (product) => {
            return openBlock(), createElementBlock("div", {
              key: product.id,
              class: "cart-item"
            }, [
              createVNode(_component_VAvatar, {
                picture: product.picture,
                size: "large",
                squared: ""
              }, null, 8, ["picture"]),
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("span", _hoisted_6$1, toDisplayString(product.name), 1),
                createBaseVNode("span", _hoisted_7, toDisplayString(product.price) + " \u062A\u0648\u0645\u0627\u0646", 1)
              ])
            ]);
          }), 128))
        ]),
        _hoisted_8
      ], 2);
    };
  }
});
const _hoisted_1$2 = { class: "creative-list" };
const _hoisted_2$2 = { class: "meta" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    list: { type: Array, required: false, default: () => [] },
    squared: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.list, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.id,
            class: normalizeClass(["creative-list-item", "is-" + item.color])
          }, [
            createVNode(_component_VAvatar, {
              picture: item.picture,
              squared: props.squared
            }, null, 8, ["picture", "squared"]),
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("span", null, toDisplayString(item.name), 1)
            ])
          ], 2);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "img-container" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = /* @__PURE__ */ createStaticVNode('<div class="actions"><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:message-square"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:phone"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:video"></i></a></div>', 1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    picture: { type: String, required: true },
    badge: { type: String, required: true },
    username: { type: String, required: true },
    straight: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["widget call-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("img", {
            class: "main",
            src: props.picture,
            alt: ""
          }, null, 8, _hoisted_2$1),
          createBaseVNode("img", {
            class: "badge",
            src: props.badge,
            alt: "",
            onErrorOnce: _cache[0] || (_cache[0] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
          }, null, 40, _hoisted_3$1)
        ]),
        createBaseVNode("h3", null, "\u062A\u0645\u0627\u0633 \u0628\u0627 " + toDisplayString(props.username) + "\u061F", 1),
        _hoisted_4$1
      ], 2);
    };
  }
});
const avatarList = [
  {
    id: 0,
    picture: "/demo/avatars/26.jpg",
    name: "\u06A9\u0631\u06CC\u0645"
  },
  {
    id: 1,
    picture: "/demo/avatars/7.jpg",
    name: "\u0622\u0644\u06CC\u0633"
  },
  {
    id: 2,
    picture: "/images/avatars/svg/vuero-1.svg",
    name: "\u062C\u0645\u0627\u0644"
  }
];
const avatarListCreative = [
  {
    id: 0,
    picture: "/demo/avatars/26.jpg",
    name: "\u06A9\u0631\u06CC\u0645",
    color: "orange"
  },
  {
    id: 1,
    picture: "/demo/avatars/7.jpg",
    name: "\u0622\u0644\u06CC\u0633",
    color: "purple"
  },
  {
    id: 2,
    picture: "/images/avatars/svg/vuero-1.svg",
    name: "\u062C\u0645\u0627\u0644",
    color: "green"
  }
];
const socialButtonList1 = [
  {
    id: 0,
    icon: "fab fa-facebook-f",
    network: "facebook"
  },
  {
    id: 1,
    icon: "fab fa-linkedin-in",
    network: "linkedin"
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    network: "twitter"
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    network: "instagram"
  }
];
const socialButtonList2 = [
  {
    id: 0,
    icon: "fab fa-invision",
    network: "invision"
  },
  {
    id: 1,
    icon: "fab fa-github",
    network: "github"
  },
  {
    id: 2,
    icon: "fab fa-atlassian",
    network: "atlassian"
  },
  {
    id: 3,
    icon: "fab fa-bootstrap",
    network: "bootstrap"
  }
];
const products = [
  {
    id: 0,
    picture: "https://fossil.scene7.com/is/image/FossilPartners/FTW4025_main?$sfcc_fos_large$",
    name: "\u0633\u0627\u0639\u062A \u0645\u0686\u06CC \u0645\u062A\u0635\u0644 \u0646\u0633\u0644 \u067E\u0646\u062C\u0645",
    price: "1,319,290"
  },
  {
    id: 1,
    picture: "https://dyw7ncnq1en5l.cloudfront.net/optim/produits/1739/29391/fossil-q-founder_3ccf4c8115134000__450_400.jpg",
    name: "\u0686\u0631\u0645 F-28 \u0622\u0646\u0627\u0644\u0648\u06AF",
    price: "1,259,490"
  }
];
var Widget1 = "/assets/1.548e52cf.svg";
var Widget2 = "/assets/2.9c72653d.svg";
var Widget3 = "/assets/3.5a3223fd.svg";
var Widget4 = "/assets/type-1.3595e752.svg";
var Widget5 = "/assets/5.00c50641.svg";
var Widget7 = "/assets/7.e98c4a2d.svg";
var Widget8 = "/assets/8.e0b8858e.svg";
var WidgetsCreative_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "columns is-multiline widget-demo-columns" };
const _hoisted_2 = { class: "column is-3" };
const _hoisted_3 = { class: "column is-3" };
const _hoisted_4 = { class: "column is-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "widget-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0647 \u0632\u0648\u062F\u06CC \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC \u0634\u0648\u062F \u060C \u0627\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u062F\u0631 \u067E\u0627\u06CC\u0627\u0646 \u0633\u0627\u0644 \u062A\u0639\u0637\u06CC\u0644\u0627\u062A \u06A9\u0631\u06CC\u0633\u0645\u0633. "),
  /* @__PURE__ */ createBaseVNode("p", { class: "hashtags" }, [
    /* @__PURE__ */ createBaseVNode("a", null, "#\u06A9\u06CC\u062A_\u0631\u0627\u0628\u0637_\u06A9\u0627\u0631\u0628\u0631\u06CC"),
    /* @__PURE__ */ createBaseVNode("a", null, "#\u062F\u0627\u0634\u0628\u0648\u0631\u062F"),
    /* @__PURE__ */ createBaseVNode("a", null, "#\u0628\u0648\u0644\u0645\u0627")
  ])
], -1);
const _hoisted_6 = { class: "column is-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_IllustrationWidget = _sfc_main$8;
      const _component_ContactWidget = _sfc_main$9;
      const _component_AvatarListWidget = _sfc_main$5;
      const _component_SocialButtonsWidget = _sfc_main$4;
      const _component_UIWidgetToolbarDropdown = _sfc_main$a;
      const _component_UIWidgetFollowerStats = _sfc_main$b;
      const _component_UIWidget = _sfc_main$c;
      const _component_CartWidget = _sfc_main$3;
      const _component_UIWidgetToolbarIcon = _sfc_main$d;
      const _component_UIWidgetCreativeList = _sfc_main$2;
      const _component_CallWidget = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v1",
            title: "\u0634\u0645\u0627 \u06F2 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u06CC\u062F",
            text: "\u062A\u0628\u0631\u06CC\u06A9 \u0645\u06CC \u06AF\u0648\u06CC\u0645 \u060C \u0632\u062D\u0645\u0627\u062A \u0634\u0645\u0627 \u0628\u0647 \u062B\u0645\u0631 \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A. \u0647\u0645\u06CC\u0646\u0637\u0648\u0631 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647!",
            picture: unref(Widget1),
            "badge-left": unref(Widget2),
            "badge-right": unref(Widget3)
          }, null, 8, ["picture", "badge-left", "badge-right"]),
          createVNode(_component_ContactWidget, {
            picture: "/images/avatars/svg/vuero-1.svg",
            username: "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
            email: "jamal@email.io",
            company: "\u0634\u0631\u06A9\u062A \u062A\u0639\u0627\u0648\u0646\u06CC \u0628\u0631\u0627\u062F\u0631\u0627\u0646 \u062E\u0627\u0634\u0642\u0686\u06CC",
            position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
            location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
            phone: "\u06F0\u06F0\u06F1-\u06F4\u06F4\u06F4-\u06F5\u06F1\u06F5\u06F6"
          }),
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v2",
            title: "\u0634\u0645\u0627 \u06F2 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u06CC\u062F",
            text: "\u062A\u0628\u0631\u06CC\u06A9 \u0645\u06CC \u06AF\u0648\u06CC\u0645 \u060C \u0632\u062D\u0645\u0627\u062A \u0634\u0645\u0627 \u0628\u0647 \u062B\u0645\u0631 \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A. \u0647\u0645\u06CC\u0646\u0637\u0648\u0631 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647!",
            picture: unref(Widget7)
          }, null, 8, ["picture"]),
          createVNode(_component_AvatarListWidget, {
            avatars: unref(avatarList),
            squared: ""
          }, null, 8, ["avatars"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v2",
            title: "\u0634\u0645\u0627 \u06F2 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u06CC\u062F",
            text: "\u062A\u0628\u0631\u06CC\u06A9 \u0645\u06CC \u06AF\u0648\u06CC\u0645 \u060C \u0632\u062D\u0645\u0627\u062A \u0634\u0645\u0627 \u0628\u0647 \u062B\u0645\u0631 \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A. \u0647\u0645\u06CC\u0646\u0637\u0648\u0631 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647!",
            picture: unref(Widget4)
          }, null, 8, ["picture"]),
          createVNode(_component_SocialButtonsWidget, { buttons: unref(socialButtonList1) }, null, 8, ["buttons"]),
          createVNode(_component_AvatarListWidget, { avatars: unref(avatarList) }, null, 8, ["avatars"]),
          createVNode(_component_UIWidget, { class: "followers-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "\u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetFollowerStats, { channels: unref(followersStats) }, null, 8, ["channels"])
            ]),
            _: 1
          }),
          createVNode(_component_CartWidget, { products: unref(products) }, null, 8, ["products"])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_UIWidget, { class: "text-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarIcon, {
                title: "@vuero",
                icon: "feather:twitter"
              })
            ]),
            body: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v3",
            title: "\u0634\u0645\u0627 \u06F2 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u06CC\u062F",
            text: "\u062A\u0628\u0631\u06CC\u06A9 \u0645\u06CC \u06AF\u0648\u06CC\u0645 \u060C \u0632\u062D\u0645\u0627\u062A \u0634\u0645\u0627 \u0628\u0647 \u062B\u0645\u0631 \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A. \u0647\u0645\u06CC\u0646\u0637\u0648\u0631 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647!",
            picture: unref(Widget5)
          }, null, 8, ["picture"]),
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
          }),
          createVNode(_component_SocialButtonsWidget, {
            buttons: unref(socialButtonList2),
            rounded: ""
          }, null, 8, ["buttons"]),
          createVNode(_component_UIWidget, { class: "creative-list-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0637\u0631\u0627\u062D\u0627\u0646" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetCreativeList, {
                list: unref(avatarListCreative),
                squared: ""
              }, null, 8, ["list"])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_UIWidget, { class: "creative-list-widget" }, {
            header: withCtx(() => [
              createVNode(_component_UIWidgetToolbarDropdown, { title: "\u0637\u0631\u0627\u062D\u0627\u0646" })
            ]),
            body: withCtx(() => [
              createVNode(_component_UIWidgetCreativeList, { list: unref(avatarListCreative) }, null, 8, ["list"])
            ]),
            _: 1
          }),
          createVNode(_component_CallWidget, {
            picture: "/@src/assets/illustrations/widgets/6.svg",
            badge: "/demo/avatars/7.jpg",
            username: "\u0622\u0644\u06CC\u0633"
          }),
          createVNode(_component_IllustrationWidget, {
            class: "illustration-widget-v2",
            title: "\u0634\u0645\u0627 \u06F2 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u06CC\u062F",
            text: "\u062A\u0628\u0631\u06CC\u06A9 \u0645\u06CC \u06AF\u0648\u06CC\u0645 \u060C \u0632\u062D\u0645\u0627\u062A \u0634\u0645\u0627 \u0628\u0647 \u062B\u0645\u0631 \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A. \u0647\u0645\u06CC\u0646\u0637\u0648\u0631 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647!",
            picture: unref(Widget8)
          }, null, 8, ["picture"])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
