import { j as _imports_0, k as _imports_1, c as __unplugin_components_1, d as _sfc_main$1, b as _sfc_main$2, l as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VAvatar.879e77ac.js";
import { d as defineComponent, r as ref, h as computed, q as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, ai as TransitionGroup } from "./vendor.9ec557a4.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
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
    image: "/demo/photos/29.jpg",
    author: {
      id: 31,
      avatar: "/demo/avatars/31.jpg",
      name: "\u06CC\u0627\u0633\u06CC\u0646",
      initials: "YA",
      color: "info"
    }
  }
];
var CardsGridV4_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u0645\u0637\u0644\u0628 \u062C\u062F\u06CC\u062F", -1);
const _hoisted_5 = { class: "card-grid card-grid-v4" };
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
const _hoisted_8 = {
  href: "#",
  class: "card-grid-item"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = { class: "card-grid-item-content" };
const _hoisted_11 = { class: "dark-inverted" };
const _hoisted_12 = { class: "card-grid-item-footer" };
const _hoisted_13 = { class: "meta" };
const _hoisted_14 = { class: "dark-inverted" };
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
    const optionsSingle = [
      "\u0647\u0645\u0647 \u0645\u0637\u0627\u0644\u0628",
      "\u0645\u0637\u0627\u0644\u0628 \u0627\u062E\u06CC\u0631",
      "\u0645\u0637\u0627\u0644\u0628 \u0642\u062F\u06CC\u0645\u06CC",
      "\u0645\u0637\u0627\u0644\u0628 \u0645\u062D\u0628\u0648\u0628"
    ];
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
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "column is-3"
                }, [
                  createBaseVNode("a", _hoisted_8, [
                    createBaseVNode("img", {
                      src: item.image,
                      alt: "",
                      onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(useViaPlaceholderError)(event, "400x300"))
                    }, null, 40, _hoisted_9),
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("h3", _hoisted_11, toDisplayString(item.title), 1)
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_VAvatar, {
                        picture: item.author.avatar,
                        size: "small"
                      }, null, 8, ["picture"]),
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("span", _hoisted_14, toDisplayString(item.author.name), 1),
                        createBaseVNode("span", null, toDisplayString(item.published), 1)
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
