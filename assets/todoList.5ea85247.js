import { _ as _sfc_main$2 } from "./VAnimatedCheckbox.66f6b6bf.js";
import { d as defineComponent, r as ref, a9 as watch, o as openBlock, b as createElementBlock, G as Fragment, J as renderList, v as createVNode, e as createBaseVNode, E as toDisplayString, n as normalizeClass, F as renderSlot } from "./vendor.9ec557a4.js";
const _hoisted_1$1 = { class: "flex-meta is-light" };
const _hoisted_2$1 = { href: "#" };
const _hoisted_3$1 = { class: "flex-end" };
const _hoisted_4$1 = { class: "tag is-rounded" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    todos: { type: Array, required: false, default: () => [] },
    modelValue: { type: Array, required: false, default: () => [] },
    color: { type: null, required: false, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const completed = ref(props.modelValue);
    watch(completed, () => {
      var _a;
      emit("update:modelValue", (_a = completed.value) != null ? _a : []);
    });
    return (_ctx, _cache) => {
      const _component_VAnimatedCheckbox = _sfc_main$2;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.todos, (todo) => {
          return openBlock(), createElementBlock("div", {
            key: todo.id,
            class: "inner-list-item media-flex-center"
          }, [
            createVNode(_component_VAnimatedCheckbox, {
              modelValue: completed.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => completed.value = $event),
              value: todo.title,
              color: __props.color
            }, null, 8, ["modelValue", "value", "color"]),
            createBaseVNode("div", _hoisted_1$1, [
              createBaseVNode("a", _hoisted_2$1, toDisplayString(todo.title), 1),
              createBaseVNode("span", null, toDisplayString(todo.time), 1)
            ]),
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("span", _hoisted_4$1, toDisplayString(todo.status), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1 = { class: "widget-head" };
const _hoisted_2 = { class: "dark-inverted" };
const _hoisted_3 = { class: "tabbed-controls" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "tabbed-naver" }, null, -1);
const _hoisted_5 = { class: "inner-list" };
const _hoisted_6 = { class: "inner-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: false, default: "\u0627\u0628\u0632\u0627\u0631\u06A9 \u0644\u06CC\u0633\u062A" },
    labels: { type: Array, required: false, default: () => ["\u0627\u062E\u06CC\u0631", "\u0645\u062D\u0628\u0648\u0628"] },
    straight: { type: Boolean, required: false },
    toggled: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const state = ref(props.toggled);
    const toggleTabs = () => {
      state.value = !state.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["list-widget tabbed-widget", [__props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h3", _hoisted_2, toDisplayString(__props.title), 1),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("a", {
              class: normalizeClass(["tabbed-control", [!state.value && "is-active"]]),
              onClick: toggleTabs
            }, [
              createBaseVNode("span", null, toDisplayString(__props.labels[0]), 1)
            ], 2),
            createBaseVNode("a", {
              class: normalizeClass(["tabbed-control", [state.value && "is-active"]]),
              onClick: toggleTabs
            }, [
              createBaseVNode("span", null, toDisplayString(__props.labels[1]), 1)
            ], 2),
            _hoisted_4
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["inner-list-wrapper", [!state.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "tab1")
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["inner-list-wrapper", [state.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "tab2")
          ])
        ], 2)
      ], 2);
    };
  }
});
const todoList1 = ref([
  {
    id: 0,
    completed: true,
    title: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627\u06CC\u06A9",
    time: "\u062F\u0631 8:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 1,
    completed: false,
    title: "\u062A\u0645\u0627\u0645 \u06A9\u0631\u062F\u0646 \u0628\u0631\u0631\u0633\u06CC \u0645\u0633\u062A\u0646\u062F\u0627\u062A",
    time: "\u062F\u0631 11:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 2,
    completed: false,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u062F\u0631 \u062E\u0635\u0648\u0635 \u067E\u0631\u0648\u0698\u0647",
    time: "\u062F\u0631 12:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 3,
    completed: false,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0631\u0636\u0648\u0627\u0646",
    time: "\u062F\u0631 3:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 4,
    completed: false,
    title: "\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u067E\u06CC\u0634\u200C\u0646\u0648\u06CC\u0633 \u067E\u0627\u06CC\u0627\u0646\u06CC",
    time: "\u062F\u0631 6:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  }
]);
const todoList2 = ref([
  {
    id: 0,
    completed: true,
    title: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627\u06CC\u06A9",
    time: "\u062F\u0631 8:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 1,
    completed: false,
    title: "\u062A\u0645\u0627\u0645 \u06A9\u0631\u062F\u0646 \u0628\u0631\u0631\u0633\u06CC \u0645\u0633\u062A\u0646\u062F\u0627\u062A",
    time: "\u062F\u0631 11:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 2,
    completed: true,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u062F\u0631 \u062E\u0635\u0648\u0635 \u067E\u0631\u0648\u0698\u0647",
    time: "\u062F\u0631 12:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 3,
    completed: true,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0631\u0636\u0648\u0627\u0646",
    time: "\u062F\u0631 3:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 4,
    completed: false,
    title: "\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u067E\u06CC\u0634\u200C\u0646\u0648\u06CC\u0633 \u067E\u0627\u06CC\u0627\u0646\u06CC",
    time: "\u062F\u0631 6:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  }
]);
const todoList3 = ref([
  {
    id: 0,
    completed: true,
    title: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627\u06CC\u06A9",
    time: "\u062F\u0631 8:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 1,
    completed: false,
    title: "\u062A\u0645\u0627\u0645 \u06A9\u0631\u062F\u0646 \u0628\u0631\u0631\u0633\u06CC \u0645\u0633\u062A\u0646\u062F\u0627\u062A",
    time: "\u062F\u0631 11:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 2,
    completed: false,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u062F\u0631 \u062E\u0635\u0648\u0635 \u067E\u0631\u0648\u0698\u0647",
    time: "\u062F\u0631 12:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 3,
    completed: false,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0631\u0636\u0648\u0627\u0646",
    time: "\u062F\u0631 3:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 4,
    completed: false,
    title: "\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u067E\u06CC\u0634\u200C\u0646\u0648\u06CC\u0633 \u067E\u0627\u06CC\u0627\u0646\u06CC",
    time: "\u062F\u0631 6:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  }
]);
const todoList4 = ref([
  {
    id: 0,
    completed: true,
    title: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627\u06CC\u06A9",
    time: "\u062F\u0631 8:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 1,
    completed: false,
    title: "\u062A\u0645\u0627\u0645 \u06A9\u0631\u062F\u0646 \u0628\u0631\u0631\u0633\u06CC \u0645\u0633\u062A\u0646\u062F\u0627\u062A",
    time: "\u062F\u0631 11:30 \u0635\u0628\u062D",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 2,
    completed: true,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u062F\u0631 \u062E\u0635\u0648\u0635 \u067E\u0631\u0648\u0698\u0647",
    time: "\u062F\u0631 12:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 3,
    completed: true,
    title: "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0631\u0636\u0648\u0627\u0646",
    time: "\u062F\u0631 3:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  },
  {
    id: 4,
    completed: false,
    title: "\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u067E\u06CC\u0634\u200C\u0646\u0648\u06CC\u0633 \u067E\u0627\u06CC\u0627\u0646\u06CC",
    time: "\u062F\u0631 6:00 \u0628.\u0638",
    status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
  }
]);
export { _sfc_main$1 as _, todoList4 as a, _sfc_main as b, todoList1 as c, todoList2 as d, todoList3 as t };
