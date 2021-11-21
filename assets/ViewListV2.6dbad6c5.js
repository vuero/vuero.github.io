import { c as __unplugin_components_1, d as _sfc_main$1, l as _sfc_main$2, b as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$4 } from "./VFlexPagination.440ca280.js";
import { d as defineComponent, r as ref, h as computed, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, x as withCtx, y as withDirectives, I as vModelText, n as normalizeClass, t as unref, G as Fragment, J as renderList, E as toDisplayString, D as createCommentVNode, ai as TransitionGroup, N as createBlock, B as createTextVNode } from "./vendor.9ec557a4.js";
import { _ as _imports_16 } from "./having-coffee.dc5ee276.js";
import { _ as _imports_3 } from "./having-coffee-dark.c71483cf.js";
var _imports_0 = "/assets/search-2.4f147bb8.svg";
var _imports_1 = "/assets/search-2-dark.84e80fe9.svg";
const retails = [
  {
    id: "1",
    picture: "/demo/photos/1.jpg",
    name: "\u06F1\u06F3\u06F9\u06F6 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0631\u062F\u0645\u0648\u0646\u062F",
    location: "\u06F1\u06F3\u06F9\u06F6 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0631\u062F\u0645\u0648\u0646\u062F, \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12, \u0633\u0648\u0626\u06CC\u062A 102, \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    rating: 4,
    details: {
      rooms: 5,
      beds: 3,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "2",
    picture: "/demo/photos/2.jpg",
    name: "\u06F2\u06F4 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0644\u0628\u0648\u0631\u06CC",
    location: "24 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0644\u0628\u0648\u0631\u06CC, \u0633\u0648\u0626\u06CC\u062A43, \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      wifi: true,
      cleaning: true
    }
  },
  {
    id: "3",
    picture: "/demo/photos/3.jpg",
    name: "\u06F6\u06F2 \u062E\u06CC\u0627\u0628\u0627\u0646 \u062C\u0627\u0646 \u0648\u0627\u0644\u0628\u0631\u06AF",
    location: "62 \u062E\u06CC\u0627\u0628\u0627\u0646 \u062C\u0627\u0646 \u0648\u0627\u0644\u0628\u0631\u06AF, \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 10, \u0633\u0648\u0626\u06CC\u062A24, \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    rating: 5,
    details: {
      rooms: 4,
      beds: 2,
      bathrooms: 2
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "4",
    picture: "/demo/photos/4.jpg",
    name: "\u06F4\u06F8 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0646\u0647\u062A\u0646",
    location: "48 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0646\u0647\u062A\u0646, \u0633\u0648\u0626\u06CC\u062AG12, \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
    rating: 5,
    details: {
      rooms: 5,
      beds: 4,
      bathrooms: 3
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "5",
    picture: "/demo/photos/5.jpg",
    name: "\u06F1\u06F2 \u062E\u06CC\u0627\u0628\u0627\u0646 \u062E\u06CC\u0631\u06CC\u0647",
    location: "12 \u062E\u06CC\u0627\u0628\u0627\u0646 \u062E\u06CC\u0631\u06CC\u0647, \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 49, \u0628\u0631\u0648\u06A9\u0644\u06CC\u0646",
    rating: 4,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      cleaning: true
    }
  },
  {
    id: "6",
    picture: "/demo/photos/6.jpg",
    name: "\u06F2\u06F3 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0646\u0627\u0646\u0648\u0627\u06CC\u06CC",
    location: "23 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0646\u0627\u0646\u0648\u0627\u06CC\u06CC, \u0633\u0648\u0626\u06CC\u062A121, \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true,
      otherGreatCoolThing: true
    }
  },
  {
    id: "7",
    picture: "/demo/photos/7.jpg",
    name: "\u06F1\u06F0\u06F2\u06F8 \u062E\u06CC\u0627\u0628\u0627\u0646 \u067E\u0627\u0633\u0627\u062F\u0646\u0627",
    location: "1028 \u062E\u06CC\u0627\u0628\u0627\u0646 \u067E\u0627\u0633\u0627\u062F\u0646\u0627, \u0633\u0648\u0626\u06CC\u062AF 24, \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
    rating: 5,
    details: {
      rooms: 7,
      beds: 5,
      bathrooms: 3
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true
    }
  },
  {
    id: "8",
    picture: "/demo/photos/8.jpg",
    name: "\u06F5\u06F4 \u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u06CC\u0633\u0627",
    location: "54 \u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u06CC\u0633\u0627, \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 2, \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
    rating: 5,
    details: {
      rooms: 2,
      beds: 1,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true
    }
  },
  {
    id: "9",
    picture: "/demo/photos/9.jpg",
    name: "\u06F1\u06F2 \u0645\u0646\u0637\u0642\u0647 \u0642\u062F\u06CC\u0645\u06CC \u0634\u0647\u0631",
    location: "112 \u0645\u0646\u0637\u0642\u0647 \u0642\u062F\u06CC\u0645\u06CC \u0634\u0647\u0631, \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 5 \u0633\u0648\u0626\u06CC\u062A42, \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true
    }
  },
  {
    id: "10",
    picture: "/demo/photos/10.jpg",
    name: "\u06F5\u06F1 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0633\u0646\u062A \u0644\u0626\u0648\u0646\u0627\u0631\u062F",
    location: "51 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0633\u0646\u062A \u0644\u0626\u0648\u0646\u0627\u0631\u062F, \u0633\u0648\u0626\u06CC\u062A23, \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
    rating: 5,
    details: {
      rooms: 4,
      beds: 2,
      bathrooms: 1
    },
    comodities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true
    }
  }
];
var ViewListV2_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "tabs-inner" };
const _hoisted_3 = { class: "tabs" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u0641\u0639\u0627\u0644", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", null, "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_9 = { class: "page-content-inner" };
const _hoisted_10 = { class: "list-view list-view-v2" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_13 = { class: "list-view-inner" };
const _hoisted_14 = { class: "list-view-item-inner" };
const _hoisted_15 = ["src"];
const _hoisted_16 = { class: "meta-left" };
const _hoisted_17 = { class: "rating" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_21 = { class: "icon-list" };
const _hoisted_22 = { key: 0 };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-car"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", null, "\u067E\u0627\u0631\u06A9\u06CC\u0646\u06AF", -1);
const _hoisted_25 = [
  _hoisted_23,
  _hoisted_24
];
const _hoisted_26 = { key: 1 };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-signal"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u0627\u06CC \u0641\u0627\u06CC", -1);
const _hoisted_29 = [
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = { key: 2 };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-air-flow"
}, null, -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", null, "\u0628\u062E\u0627\u0631\u06CC", -1);
const _hoisted_33 = [
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = { key: 3 };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-sun"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", null, "\u062E\u0634\u06A9 \u06A9\u0646", -1);
const _hoisted_37 = [
  _hoisted_35,
  _hoisted_36
];
const _hoisted_38 = { key: 4 };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", null, "4 \u0628\u06CC\u0634\u062A\u0631", -1);
const _hoisted_41 = [
  _hoisted_39,
  _hoisted_40
];
const _hoisted_42 = { key: 5 };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", null, "3 \u0628\u06CC\u0634\u062A\u0631", -1);
const _hoisted_45 = [
  _hoisted_43,
  _hoisted_44
];
const _hoisted_46 = { key: 6 };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("span", null, "2 \u0628\u06CC\u0634\u062A\u0631", -1);
const _hoisted_49 = [
  _hoisted_47,
  _hoisted_48
];
const _hoisted_50 = { key: 7 };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-more"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", null, "1 \u0628\u06CC\u0634\u062A\u0631", -1);
const _hoisted_53 = [
  _hoisted_51,
  _hoisted_52
];
const _hoisted_54 = { class: "meta-right" };
const _hoisted_55 = { class: "buttons" };
const _hoisted_56 = /* @__PURE__ */ createTextVNode("\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631");
const _hoisted_57 = /* @__PURE__ */ createTextVNode("\u0647\u0645\u06CC\u0646 \u0627\u0644\u0627\u0646 \u0631\u0632\u0631\u0648 \u06A9\u0646\u06CC\u062F");
const _hoisted_58 = { class: "list-view-inner" };
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_16,
  alt: ""
}, null, -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_3,
  alt: ""
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("active");
    const filters = ref("");
    const filteredData = computed(() => {
      if (!filters.value) {
        return retails;
      } else {
        return retails.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i")) || item.location.match(new RegExp(filters.value, "i")) || "parking".match(new RegExp(filters.value, "i")) && item.comodities.parking || "wifi".match(new RegExp(filters.value, "i")) && item.comodities.wifi || "heater".match(new RegExp(filters.value, "i")) && item.comodities.heater || "cleaning".match(new RegExp(filters.value, "i")) && item.comodities.cleaning;
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$1;
      const _component_VPlaceholderPage = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VFlexPagination = _sfc_main$4;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
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
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("ul", null, [
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "active" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "active")
                  }, _hoisted_5)
                ], 2),
                createBaseVNode("li", {
                  class: normalizeClass([activeTab.value === "inactive" && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "inactive")
                  }, _hoisted_7)
                ], 2),
                _hoisted_8
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
              subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_11,
                _hoisted_12
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", {
              id: "active-items-tab",
              class: normalizeClass(["tab-content", [activeTab.value === "active" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_13, [
                createVNode(TransitionGroup, {
                  name: "list-complete",
                  tag: "div"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: "list-view-item"
                      }, [
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("img", {
                            src: item.picture,
                            alt: ""
                          }, null, 8, _hoisted_15),
                          createBaseVNode("div", _hoisted_16, [
                            createBaseVNode("h3", null, [
                              createBaseVNode("span", null, toDisplayString(item.name), 1),
                              createBaseVNode("span", _hoisted_17, [
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 1 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 2 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 3 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 4 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2),
                                createBaseVNode("i", {
                                  class: normalizeClass(["fas fa-star", [item.rating >= 5 && "active"]]),
                                  "aria-hidden": "true"
                                }, null, 2)
                              ])
                            ]),
                            createBaseVNode("p", null, [
                              _hoisted_18,
                              createBaseVNode("span", null, toDisplayString(item.location), 1)
                            ]),
                            createBaseVNode("span", null, [
                              createBaseVNode("span", null, toDisplayString(item.details.rooms > 1 ? `${item.details.rooms} \u0627\u062A\u0627\u0642` : `${item.details.rooms} \u0627\u062A\u0627\u0642`), 1),
                              _hoisted_19,
                              createBaseVNode("span", null, toDisplayString(item.details.beds > 1 ? `${item.details.beds} \u0627\u062A\u0627\u0642 \u062E\u0648\u0627\u0628` : `${item.details.beds} \u0627\u062A\u0627\u0642 \u062E\u0648\u0627\u0628`), 1),
                              _hoisted_20,
                              createBaseVNode("span", null, toDisplayString(item.details.bathrooms > 1 ? `${item.details.bathrooms} \u062D\u0645\u0627\u0645` : `${item.details.bathrooms} \u062D\u0645\u0627\u0645`), 1)
                            ]),
                            createBaseVNode("div", _hoisted_21, [
                              item.comodities.parking ? (openBlock(), createElementBlock("span", _hoisted_22, _hoisted_25)) : createCommentVNode("", true),
                              item.comodities.wifi ? (openBlock(), createElementBlock("span", _hoisted_26, _hoisted_29)) : createCommentVNode("", true),
                              item.comodities.heater ? (openBlock(), createElementBlock("span", _hoisted_30, _hoisted_33)) : createCommentVNode("", true),
                              item.comodities.cleaning ? (openBlock(), createElementBlock("span", _hoisted_34, _hoisted_37)) : createCommentVNode("", true),
                              item.comodities.other && item.comodities.otherThing && item.comodities.otherCoolThing && item.comodities.otherGreatCoolThing ? (openBlock(), createElementBlock("span", _hoisted_38, _hoisted_41)) : item.comodities.other && item.comodities.otherThing && item.comodities.otherCoolThing ? (openBlock(), createElementBlock("span", _hoisted_42, _hoisted_45)) : item.comodities.other && item.comodities.otherThing ? (openBlock(), createElementBlock("span", _hoisted_46, _hoisted_49)) : item.comodities.other ? (openBlock(), createElementBlock("span", _hoisted_50, _hoisted_53)) : createCommentVNode("", true)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_54, [
                            createBaseVNode("div", _hoisted_55, [
                              createVNode(_component_VButton, { light: "" }, {
                                default: withCtx(() => [
                                  _hoisted_56
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VButton, {
                                color: "primary",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_57
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              unref(filteredData).length > 5 ? (openBlock(), createBlock(_component_VFlexPagination, {
                key: 0,
                "item-per-page": 10,
                "total-items": 873,
                "current-page": 42,
                "max-links-displayed": 7
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", {
              id: "inactive-items-tab",
              class: normalizeClass(["tab-content", [activeTab.value === "inactive" && "is-active"]])
            }, [
              createBaseVNode("div", _hoisted_58, [
                createVNode(_component_VPlaceholderPage, {
                  title: "\u0647\u06CC\u0686 \u0627\u0645\u0644\u0627\u06A9 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.",
                  subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0627\u0645\u0644\u0627\u06A9 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u06CC\u06A9 \u0645\u0644\u06A9 \u0631\u0627 \u0627\u0632 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0644\u06A9 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0647 \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0641\u0639\u0627\u0644 \u06A9\u0646\u06CC\u062F.",
                  larger: ""
                }, {
                  image: withCtx(() => [
                    _hoisted_59,
                    _hoisted_60
                  ]),
                  _: 1
                })
              ])
            ], 2)
          ])
        ])
      ], 64);
    };
  }
});
export { _sfc_main as _ };
