import { c as __unplugin_components_1, b as _sfc_main$3 } from "./index.4d6c8e1a.js";
import { _ as _sfc_main$2 } from "./VAvatarStack.8507ceb8.js";
import { _ as __unplugin_components_0 } from "./VDropdown.5214d40f.js";
import { d as defineComponent, o as openBlock, N as createBlock, x as withCtx, e as createBaseVNode, B as createTextVNode, at as commonjsGlobal, a5 as reactive, r as ref, h as computed, ab as onMounted, b as createElementBlock, v as createVNode, y as withDirectives, I as vModelText, t as unref, n as normalizeClass, E as toDisplayString, D as createCommentVNode, G as Fragment, J as renderList } from "./vendor.9ec557a4.js";
import { u as useViaPlaceholderError } from "./useViaPlaceholderError.be9c33a4.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "dropdown-item has-child" }, [
  /* @__PURE__ */ createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A "),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:chevron-right"
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "child-dropdown" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("div", { class: "column-setting" }, [
            /* @__PURE__ */ createBaseVNode("label", { class: "form-switch" }, [
              /* @__PURE__ */ createBaseVNode("input", {
                type: "checkbox",
                class: "is-switch"
              }),
              /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
            ]),
            /* @__PURE__ */ createBaseVNode("div", { class: "text" }, [
              /* @__PURE__ */ createBaseVNode("span", null, "Lock"),
              /* @__PURE__ */ createBaseVNode("span", null, "Locks the column")
            ])
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("div", { class: "column-setting" }, [
            /* @__PURE__ */ createBaseVNode("label", { class: "form-switch" }, [
              /* @__PURE__ */ createBaseVNode("input", {
                type: "checkbox",
                class: "is-switch",
                checked: ""
              }),
              /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
            ]),
            /* @__PURE__ */ createBaseVNode("div", { class: "text" }, [
              /* @__PURE__ */ createBaseVNode("span", null, "\u0627\u0639\u0644\u0627\u0646\u0627\u062A"),
              /* @__PURE__ */ createBaseVNode("span", null, "Enables or disables notifications")
            ])
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("div", { class: "column-setting" }, [
            /* @__PURE__ */ createBaseVNode("label", { class: "form-switch" }, [
              /* @__PURE__ */ createBaseVNode("input", {
                type: "checkbox",
                class: "is-switch"
              }),
              /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
            ]),
            /* @__PURE__ */ createBaseVNode("div", { class: "text" }, [
              /* @__PURE__ */ createBaseVNode("span", null, "Sorting"),
              /* @__PURE__ */ createBaseVNode("span", null, "Enables or disables sorting")
            ])
          ])
        ])
      ])
    ])
  ])
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["rename", "collapse"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_VDropdown = __unplugin_components_0;
      return openBlock(), createBlock(_component_VDropdown, {
        icon: "feather:more-vertical",
        right: ""
      }, {
        content: withCtx(() => [
          createBaseVNode("a", {
            class: "dropdown-item kanban-rename kill-drop",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("rename"))
          }, " Rename "),
          createBaseVNode("a", {
            class: "dropdown-item kanban-collapse kill-drop",
            onClick: _cache[1] || (_cache[1] = ($event) => emit("collapse"))
          }, " Collapse "),
          _hoisted_1$1,
          _hoisted_2$1
        ]),
        _: 1
      });
    };
  }
});
var _imports_0 = "/assets/progress.447db90e.svg";
var _imports_1 = "/assets/new-dark.738eda80.svg";
var _imports_2 = "/assets/progress.ca1c1b20.svg";
var _imports_3 = "/assets/progress-dark.3e29b80d.svg";
var _imports_4 = "/assets/ready.b0069117.svg";
var _imports_5 = "/assets/ready-dark.fa4ea28e.svg";
var _imports_6 = "/assets/test.98f93a45.svg";
var _imports_7 = "/assets/test-dark.a30014a5.svg";
var _imports_8 = "/assets/complete.7fcfba28.svg";
var _imports_9 = "/assets/complete-dark.3346be1a.svg";
var atoa$1 = function atoa(a, n) {
  return Array.prototype.slice.call(a, n);
};
var si = typeof setImmediate === "function", tick;
if (si) {
  tick = function(fn) {
    setImmediate(fn);
  };
} else {
  tick = function(fn) {
    setTimeout(fn, 0);
  };
}
var tickyBrowser = tick;
var ticky = tickyBrowser;
var debounce$1 = function debounce(fn, args, ctx) {
  if (!fn) {
    return;
  }
  ticky(function run() {
    fn.apply(ctx || null, args || []);
  });
};
var atoa2 = atoa$1;
var debounce2 = debounce$1;
var emitter$1 = function emitter(thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === void 0) {
    thing = {};
  }
  thing.on = function(type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function(type, fn) {
    fn._once = true;
    thing.on(type, fn);
    return thing;
  };
  thing.off = function(type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) {
        return thing;
      }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function() {
    var args = atoa2(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function(type) {
    var et = (evt[type] || []).slice(0);
    return function() {
      var args = atoa2(arguments);
      var ctx = this || thing;
      if (type === "error" && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args;
      }
      et.forEach(function emitter3(listen) {
        if (opts.async) {
          debounce2(listen, args, ctx);
        } else {
          listen.apply(ctx, args);
        }
        if (listen._once) {
          thing.off(type, listen);
        }
      });
      return thing;
    };
  };
  return thing;
};
var NativeCustomEvent = commonjsGlobal.CustomEvent;
function useNative() {
  try {
    var p = new NativeCustomEvent("cat", { detail: { foo: "bar" } });
    return p.type === "cat" && p.detail.foo === "bar";
  } catch (e) {
  }
  return false;
}
var customEvent$1 = useNative() ? NativeCustomEvent : typeof document !== "undefined" && typeof document.createEvent === "function" ? function CustomEvent(type, params) {
  var e = document.createEvent("CustomEvent");
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} : function CustomEvent2(type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
};
var eventmap$1 = [];
var eventname = "";
var ron = /^on/;
for (eventname in commonjsGlobal) {
  if (ron.test(eventname)) {
    eventmap$1.push(eventname.slice(2));
  }
}
var eventmap_1 = eventmap$1;
var customEvent = customEvent$1;
var eventmap = eventmap_1;
var doc$1 = commonjsGlobal.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];
if (!commonjsGlobal.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}
var crossvent$1 = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};
function addEventEasy(el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}
function addEventHard(el, type, fn) {
  return el.attachEvent("on" + type, wrap(el, type, fn));
}
function removeEventEasy(el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}
function removeEventHard(el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent("on" + type, listener);
  }
}
function fabricateEvent(el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent("on" + type, e);
  }
  function makeClassicEvent() {
    var e2;
    if (doc$1.createEvent) {
      e2 = doc$1.createEvent("Event");
      e2.initEvent(type, true, true);
    } else if (doc$1.createEventObject) {
      e2 = doc$1.createEventObject();
    }
    return e2;
  }
  function makeCustomEvent() {
    return new customEvent(type, { detail: model });
  }
}
function wrapperFactory(el, type, fn) {
  return function wrapper(originalEvent) {
    var e = originalEvent || commonjsGlobal.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault() {
      e.returnValue = false;
    };
    e.stopPropagation = e.stopPropagation || function stopPropagation() {
      e.cancelBubble = true;
    };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}
function wrap(el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper,
    element: el,
    type,
    fn
  });
  return wrapper;
}
function unwrap(el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1);
    return wrapper;
  }
}
function find(el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}
var cache = {};
var start = "(?:^|\\s)";
var end = "(?:\\s|$)";
function lookupClass(className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, "g");
  }
  return cached;
}
function addClass(el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += " " + className;
  }
}
function rmClass(el, className) {
  el.className = el.className.replace(lookupClass(className), " ").trim();
}
var classes$1 = {
  add: addClass,
  rm: rmClass
};
var emitter2 = emitter$1;
var crossvent = crossvent$1;
var classes = classes$1;
var doc = document;
var documentElement = doc.documentElement;
function dragula$1(initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror;
  var _source;
  var _item;
  var _offsetX;
  var _offsetY;
  var _moveX;
  var _moveY;
  var _initialSibling;
  var _currentSibling;
  var _copy;
  var _renderTimer;
  var _lastDropTarget = null;
  var _grabbed;
  var o = options || {};
  if (o.moves === void 0) {
    o.moves = always;
  }
  if (o.accepts === void 0) {
    o.accepts = always;
  }
  if (o.invalid === void 0) {
    o.invalid = invalidTarget;
  }
  if (o.containers === void 0) {
    o.containers = initialContainers || [];
  }
  if (o.isContainer === void 0) {
    o.isContainer = never;
  }
  if (o.copy === void 0) {
    o.copy = false;
  }
  if (o.copySortSource === void 0) {
    o.copySortSource = false;
  }
  if (o.revertOnSpill === void 0) {
    o.revertOnSpill = false;
  }
  if (o.removeOnSpill === void 0) {
    o.removeOnSpill = false;
  }
  if (o.direction === void 0) {
    o.direction = "vertical";
  }
  if (o.ignoreInputTextSelection === void 0) {
    o.ignoreInputTextSelection = true;
  }
  if (o.mirrorContainer === void 0) {
    o.mirrorContainer = doc.body;
  }
  var drake = emitter2({
    containers: o.containers,
    start: manualStart,
    end: end2,
    cancel,
    remove,
    destroy,
    canMove,
    dragging: false
  });
  if (o.removeOnSpill === true) {
    drake.on("over", spillOver).on("out", spillOut);
  }
  events();
  return drake;
  function isContainer(el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }
  function events(remove2) {
    var op = remove2 ? "remove" : "add";
    touchy(documentElement, op, "mousedown", grab);
    touchy(documentElement, op, "mouseup", release);
  }
  function eventualMovements(remove2) {
    var op = remove2 ? "remove" : "add";
    touchy(documentElement, op, "mousemove", startBecauseMouseMoved);
  }
  function movements(remove2) {
    var op = remove2 ? "remove" : "add";
    crossvent[op](documentElement, "selectstart", preventGrabbed);
    crossvent[op](documentElement, "click", preventGrabbed);
  }
  function destroy() {
    events(true);
    release({});
  }
  function preventGrabbed(e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }
  function grab(e) {
    _moveX = e.clientX;
    _moveY = e.clientY;
    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return;
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === "mousedown") {
      if (isInput(item)) {
        item.focus();
      } else {
        e.preventDefault();
      }
    }
  }
  function startBecauseMouseMoved(e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return;
    }
    if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && (e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0))) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord("clientX", e) || 0;
      var clientY = getCoord("clientY", e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }
    var grabbed = _grabbed;
    eventualMovements(true);
    movements();
    end2();
    start2(grabbed);
    var offset = getOffset(_item);
    _offsetX = getCoord("pageX", e) - offset.left;
    _offsetY = getCoord("pageY", e) - offset.top;
    classes.add(_copy || _item, "gu-transit");
    renderMirrorImage();
    drag(e);
  }
  function canStart(item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return;
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item);
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }
    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }
    return {
      item,
      source
    };
  }
  function canMove(item) {
    return !!canStart(item);
  }
  function manualStart(item) {
    var context = canStart(item);
    if (context) {
      start2(context);
    }
  }
  function start2(context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit("cloned", _copy, context.item, "copy");
    }
    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);
    drake.dragging = true;
    drake.emit("drag", _item, _source);
  }
  function invalidTarget() {
    return false;
  }
  function end2() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }
  function ungrab() {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }
  function release(e) {
    ungrab();
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord("clientX", e) || 0;
    var clientY = getCoord("clientY", e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && (_copy && o.copySortSource || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }
  function drop(item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit("cancel", item, _source, _source);
    } else {
      drake.emit("drop", item, target, _source, _currentSibling);
    }
    cleanup();
  }
  function remove() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? "cancel" : "remove", item, parent, _source);
    cleanup();
  }
  function cancel(revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit("cancel", item, _source, _source);
    } else {
      drake.emit("drop", item, parent, _source, _currentSibling);
    }
    cleanup();
  }
  function cleanup() {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, "gu-transit");
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit("out", item, _lastDropTarget, _source);
    }
    drake.emit("dragend", item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }
  function isInitialPlacement(target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }
  function findDropTarget(elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;
    function accepted() {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }
      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true;
      }
      return o.accepts(_item, target, _source, reference);
    }
  }
  function drag(e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();
    var clientX = getCoord("clientX", e) || 0;
    var clientY = getCoord("clientY", e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;
    _mirror.style.left = x + "px";
    _mirror.style.top = y + "px";
    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit("shadow", item, dropTarget, _source);
    }
    function moved(type) {
      drake.emit(type, item, _lastDropTarget, _source);
    }
    function over() {
      if (changed) {
        moved("over");
      }
    }
    function out() {
      if (_lastDropTarget) {
        moved("out");
      }
    }
  }
  function spillOver(el) {
    classes.rm(el, "gu-hide");
  }
  function spillOut(el) {
    if (drake.dragging) {
      classes.add(el, "gu-hide");
    }
  }
  function renderMirrorImage() {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + "px";
    _mirror.style.height = getRectHeight(rect) + "px";
    classes.rm(_mirror, "gu-transit");
    classes.add(_mirror, "gu-mirror");
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, "add", "mousemove", drag);
    classes.add(o.mirrorContainer, "gu-unselectable");
    drake.emit("cloned", _mirror, _item, "mirror");
  }
  function removeMirrorImage() {
    if (_mirror) {
      classes.rm(o.mirrorContainer, "gu-unselectable");
      touchy(documentElement, "remove", "mousemove", drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }
  function getImmediateChild(dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }
  function getReference(dropTarget, target, x, y) {
    var horizontal = o.direction === "horizontal";
    var reference = target !== dropTarget ? inside() : outside();
    return reference;
    function outside() {
      var len2 = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len2; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && rect.left + rect.width / 2 > x) {
          return el;
        }
        if (!horizontal && rect.top + rect.height / 2 > y) {
          return el;
        }
      }
      return null;
    }
    function inside() {
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }
    function resolve(after) {
      return after ? nextEl(target) : target;
    }
  }
  function isCopy(item, container) {
    return typeof o.copy === "boolean" ? o.copy : o.copy(item, container);
  }
}
function touchy(el, op, type, fn) {
  var touch = {
    mouseup: "touchend",
    mousedown: "touchstart",
    mousemove: "touchmove"
  };
  var pointers = {
    mouseup: "pointerup",
    mousedown: "pointerdown",
    mousemove: "pointermove"
  };
  var microsoft = {
    mouseup: "MSPointerUp",
    mousedown: "MSPointerDown",
    mousemove: "MSPointerMove"
  };
  if (commonjsGlobal.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (commonjsGlobal.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}
function whichMouseButton(e) {
  if (e.touches !== void 0) {
    return e.touches.length;
  }
  if (e.which !== void 0 && e.which !== 0) {
    return e.which;
  }
  if (e.buttons !== void 0) {
    return e.buttons;
  }
  var button = e.button;
  if (button !== void 0) {
    return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
  }
}
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll("scrollLeft", "pageXOffset"),
    top: rect.top + getScroll("scrollTop", "pageYOffset")
  };
}
function getScroll(scrollProp, offsetProp) {
  if (typeof commonjsGlobal[offsetProp] !== "undefined") {
    return commonjsGlobal[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}
function getElementBehindPoint(point, x, y) {
  point = point || {};
  var state = point.className || "";
  var el;
  point.className += " gu-hide";
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}
function never() {
  return false;
}
function always() {
  return true;
}
function getRectWidth(rect) {
  return rect.width || rect.right - rect.left;
}
function getRectHeight(rect) {
  return rect.height || rect.bottom - rect.top;
}
function getParent(el) {
  return el.parentNode === doc ? null : el.parentNode;
}
function isInput(el) {
  return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || isEditable(el);
}
function isEditable(el) {
  if (!el) {
    return false;
  }
  if (el.contentEditable === "false") {
    return false;
  }
  if (el.contentEditable === "true") {
    return true;
  }
  return isEditable(getParent(el));
}
function nextEl(el) {
  return el.nextElementSibling || manually();
  function manually() {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}
function getEventHost(e) {
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}
function getCoord(coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: "clientX",
    pageY: "clientY"
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}
var dragula_1 = dragula$1;
const tasks = reactive([
  {
    id: "1",
    title: "\u0646\u0645\u0648\u0646\u0647 \u0627\u0648\u0644\u06CC\u0647 \u0631\u0627 \u0628\u0627 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A JWT \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F",
    state: "new",
    dueDate: "3 \u0647\u0641\u062A\u0647",
    participants: [
      {
        color: "warning",
        picture: "/demo/avatars/7.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "\u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 React \u06CC\u06A9 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u0644\u06CC\u0633\u062A TODO \u0637\u0631\u0627\u062D\u06CC \u06A9\u0646\u06CC\u062F",
    state: "new",
    dueDate: "3 \u0647\u0641\u062A\u0647",
    participants: [
      {
        color: "info",
        picture: "/images/avatars/svg/vuero-1.svg"
      }
    ]
  },
  {
    id: "3",
    title: "\u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC REST API \u06A9\u0627\u0631\u0628\u0631\u0627\u0646",
    state: "progress",
    dueDate: "3 \u0631\u0648\u0632",
    participants: [
      {
        color: "danger",
        picture: "/demo/avatars/12.jpg"
      },
      {
        color: void 0,
        picture: "/demo/avatars/26.jpg"
      },
      {
        color: void 0,
        picture: "/demo/avatars/19.jpg"
      }
    ]
  },
  {
    id: "4",
    title: "\u0628\u0631\u0631\u0633\u06CC \u0648\u0627\u06CC\u0631\u0641\u0631\u06CC\u0645\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647",
    state: "progress",
    dueDate: "1 \u0647\u0641\u062A\u0647",
    participants: [
      {
        color: "success",
        picture: "/demo/avatars/13.jpg"
      }
    ]
  },
  {
    id: "5",
    title: "\u067E\u0627\u0646\u0648\u06CC\u0633 \u062C\u062F\u06CC\u062F \u0631\u0627 \u062F\u0631 \u0647\u0645\u0647 \u0635\u0641\u062D\u0627\u062A \u067E\u06CC\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u06A9\u0646\u06CC\u062F",
    state: "progress",
    dueDate: "5 \u0631\u0648\u0632",
    participants: [
      {
        color: "info",
        picture: "/demo/avatars/16.jpg"
      }
    ]
  },
  {
    id: "6",
    title: "\u0627\u062C\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC REST API",
    state: "ready",
    dueDate: "2 \u0631\u0648\u0632",
    participants: [
      {
        color: "warning",
        picture: "/images/avatars/svg/vuero-1.svg"
      }
    ]
  },
  {
    id: "7",
    title: "\u0637\u0631\u0627\u062D\u06CC \u0645\u062C\u062F\u062F \u0635\u0641\u062D\u0647 \u0644\u0646\u062F\u06CC\u0646\u06AF",
    state: "completed",
    dueDate: "\u0633\u0631\u0648\u0642\u062A",
    participants: [
      {
        color: "success",
        picture: "/demo/avatars/12.jpg"
      }
    ]
  },
  {
    id: "8",
    title: "\u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC \u0627\u062C\u0631\u0627\u06CC REST API",
    state: "completed",
    dueDate: "\u0633\u0631\u0648\u0642\u062A",
    participants: [
      {
        color: "danger",
        picture: "/demo/avatars/18.jpg"
      },
      {
        picture: "/demo/avatars/9.jpg"
      }
    ]
  },
  {
    id: "9",
    title: "\u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u0645\u062C\u062F\u062F \u067E\u0627\u06CC\u06AF\u0627\u0647 \u062F\u0627\u062F\u0647",
    state: "completed",
    dueDate: "\u0633\u0631\u0648\u0642\u062A",
    participants: [
      {
        color: "primary",
        picture: "/demo/avatars/13.jpg"
      }
    ]
  },
  {
    id: "10",
    title: "\u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0645\u0627\u06CC\u0634\u06CC Firebase",
    state: "completed",
    dueDate: "\u0633\u0631\u0648\u0642\u062A",
    participants: [
      {
        color: "warning",
        picture: "/demo/avatars/16.jpg"
      }
    ]
  }
]);
var dragula = "";
var KanbanApp_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content kanban-content is-relative" };
const _hoisted_2 = { class: "kanban-toolbar" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u062A\u0633\u06A9 \u062C\u062F\u06CC\u062F ");
const _hoisted_4 = { class: "columns is-kanban-wrapper" };
const _hoisted_5 = { class: "collapsed-content" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "task-count" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "collapsed-text" }, "\u062C\u062F\u06CC\u062F", -1);
const _hoisted_10 = { class: "expanded-content" };
const _hoisted_11 = { class: "column-title" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input is-small rename-input is-hidden"
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "column-name" }, "\u062C\u062F\u06CC\u062F", -1);
const _hoisted_14 = { class: "task-count" };
const _hoisted_15 = {
  key: 0,
  class: "kanban-empty"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", { class: "empty-text" }, " \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u06A9\u0627\u0631 \u062C\u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. ", -1);
const _hoisted_19 = [
  _hoisted_16,
  _hoisted_17,
  _hoisted_18
];
const _hoisted_20 = ["data-id"];
const _hoisted_21 = { class: "card-body" };
const _hoisted_22 = { class: "card-title" };
const _hoisted_23 = { class: "new-avatar" };
const _hoisted_24 = ["src"];
const _hoisted_25 = { class: "card-footer" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("a", { class: "card-footer-item" }, "\u0645\u0634\u0627\u0647\u062F\u0647", -1);
const _hoisted_27 = ["onClick"];
const _hoisted_28 = { class: "collapsed-content" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_30 = [
  _hoisted_29
];
const _hoisted_31 = { class: "task-count" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "collapsed-text" }, "\u062F\u0631\u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645", -1);
const _hoisted_33 = { class: "expanded-content" };
const _hoisted_34 = { class: "column-title" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input is-small rename-input is-hidden"
}, null, -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", { class: "column-name" }, "\u062F\u0631\u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645", -1);
const _hoisted_37 = { class: "task-count" };
const _hoisted_38 = {
  key: 0,
  class: "kanban-empty"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image light-image-block",
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image dark-image-block",
  src: _imports_3,
  alt: ""
}, null, -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", { class: "empty-text" }, " \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0648\u0638\u06CC\u0641\u0647 \u0627\u06CC \u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645 \u0646\u06CC\u0633\u062A. ", -1);
const _hoisted_42 = [
  _hoisted_39,
  _hoisted_40,
  _hoisted_41
];
const _hoisted_43 = ["data-id"];
const _hoisted_44 = { class: "card-body" };
const _hoisted_45 = { class: "card-title" };
const _hoisted_46 = { class: "kanban-card-stats" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_48 = { class: "collapsed-content" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_50 = [
  _hoisted_49
];
const _hoisted_51 = { class: "task-count" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("div", { class: "collapsed-text" }, "\u0622\u0645\u0627\u062F\u0647 \u0628\u0647 \u06A9\u0627\u0631", -1);
const _hoisted_53 = { class: "expanded-content" };
const _hoisted_54 = { class: "column-title" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input is-small rename-input is-hidden"
}, null, -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("span", { class: "column-name" }, "\u0622\u0645\u0627\u062F\u0647 \u0628\u0647 \u06A9\u0627\u0631", -1);
const _hoisted_57 = { class: "task-count" };
const _hoisted_58 = {
  key: 0,
  class: "kanban-empty"
};
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image light-image-block",
  src: _imports_4,
  alt: ""
}, null, -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image dark-image-block",
  src: _imports_5,
  alt: ""
}, null, -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", { class: "empty-text" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0648\u0638\u06CC\u0641\u0647 \u0627\u06CC \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0622\u0645\u0627\u062F\u0647 \u0639\u0644\u0627\u0645\u062A \u06AF\u0630\u0627\u0631\u06CC \u0646\u0634\u062F\u0647 \u0627\u0633\u062A."),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    class: "button v-button is-outlined is-rounded is-fullwidth"
  }, " \u0627\u06CC\u062C\u0627\u062F \u062A\u0633\u06A9 ")
], -1);
const _hoisted_62 = [
  _hoisted_59,
  _hoisted_60,
  _hoisted_61
];
const _hoisted_63 = ["data-id"];
const _hoisted_64 = { class: "card-body" };
const _hoisted_65 = { class: "card-title" };
const _hoisted_66 = { class: "kanban-card-stats" };
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_68 = { class: "collapsed-content" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_70 = [
  _hoisted_69
];
const _hoisted_71 = { class: "task-count" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("div", { class: "collapsed-text" }, "\u062F\u0631 \u0628\u0631\u0631\u0633\u06CC", -1);
const _hoisted_73 = { class: "expanded-content" };
const _hoisted_74 = { class: "column-title" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input is-small rename-input is-hidden"
}, null, -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("span", { class: "column-name" }, "\u062F\u0631 \u0628\u0631\u0631\u0633\u06CC", -1);
const _hoisted_77 = { class: "task-count" };
const _hoisted_78 = {
  key: 0,
  class: "kanban-empty"
};
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image light-image-block",
  src: _imports_6,
  alt: ""
}, null, -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image dark-image-block",
  src: _imports_7,
  alt: ""
}, null, -1);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", { class: "empty-text" }, " \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0648\u0638\u06CC\u0641\u0647 \u0627\u06CC \u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC \u0646\u06CC\u0633\u062A. ", -1);
const _hoisted_82 = [
  _hoisted_79,
  _hoisted_80,
  _hoisted_81
];
const _hoisted_83 = ["data-id"];
const _hoisted_84 = { class: "card-body" };
const _hoisted_85 = { class: "card-title" };
const _hoisted_86 = { class: "kanban-card-stats" };
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_88 = { class: "collapsed-content" };
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_90 = [
  _hoisted_89
];
const _hoisted_91 = { class: "task-count" };
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("div", { class: "collapsed-text" }, "\u0627\u062A\u0645\u0627\u0645 \u06CC\u0627\u0641\u062A\u0647", -1);
const _hoisted_93 = { class: "expanded-content" };
const _hoisted_94 = { class: "column-title" };
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("input", {
  type: "text",
  class: "input is-small rename-input is-hidden"
}, null, -1);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode("span", { class: "column-name" }, "\u0627\u062A\u0645\u0627\u0645 \u06CC\u0627\u0641\u062A\u0647", -1);
const _hoisted_97 = { class: "task-count" };
const _hoisted_98 = {
  key: 0,
  class: "kanban-empty"
};
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image light-image-block",
  src: _imports_8,
  alt: ""
}, null, -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("img", {
  class: "empty-state theme-image dark-image-block",
  src: _imports_9,
  alt: ""
}, null, -1);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("p", { class: "empty-text" }, "\u0647\u06CC\u0686 \u067E\u0627\u062F\u0627\u0634 \u06A9\u0627\u0645\u0644 \u0646\u062F\u0627\u0631\u06CC\u062F.", -1);
const _hoisted_102 = [
  _hoisted_99,
  _hoisted_100,
  _hoisted_101
];
const _hoisted_103 = ["data-id"];
const _hoisted_104 = { class: "card-body" };
const _hoisted_105 = { class: "card-title" };
const _hoisted_106 = { class: "kanban-card-stats" };
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const newContainer = ref();
    const progressContainer = ref();
    const readyContainer = ref();
    const reviewContainer = ref();
    const completedContainer = ref();
    const search = ref("");
    const isColumnNewCollapsed = ref(false);
    const isColumnProgressCollapsed = ref(false);
    const isColumnReadyCollapsed = ref(false);
    const isColumnReviewCollapsed = ref(false);
    const isColumnCompletedCollapsed = ref(false);
    const filteredTasks = computed(() => {
      if (!search.value) {
        return tasks;
      } else {
        return tasks.filter((item) => {
          return item.title.match(new RegExp(search.value, "i"));
        });
      }
    });
    const participants = computed(() => {
      return tasks.reduce((accumulator, task) => {
        for (const participant of task.participants) {
          const exists = accumulator.find((value) => {
            return value.picture === participant.picture;
          });
          if (!exists) {
            accumulator.push(participant);
          }
        }
        return accumulator;
      }, []);
    });
    const newTasks = computed(() => {
      return filteredTasks.value.filter((task) => task.state === "new");
    });
    const progressTasks = computed(() => {
      return filteredTasks.value.filter((task) => task.state === "progress");
    });
    const readyTasks = computed(() => {
      return filteredTasks.value.filter((task) => task.state === "ready");
    });
    const reviewTasks = computed(() => {
      return filteredTasks.value.filter((task) => task.state === "review");
    });
    const completedTasks = computed(() => {
      return filteredTasks.value.filter((task) => task.state === "completed");
    });
    onMounted(() => {
      if (newContainer.value && progressContainer.value && readyContainer.value && reviewContainer.value && completedContainer.value) {
        const drake = dragula_1([
          newContainer.value,
          progressContainer.value,
          readyContainer.value,
          reviewContainer.value,
          completedContainer.value
        ], {
          invalid: (el) => {
            const _el = el;
            if (_el) {
              if (_el.classList.contains("kanban-card")) {
                const id = _el.dataset.id;
                if (id) {
                  const task = tasks.find((task2) => {
                    return task2.id === id;
                  });
                  if (task) {
                    return task.state === "completed" || task.state === "new";
                  }
                }
              }
              return _el.classList.contains("kanban-empty");
            }
            return true;
          }
        });
        drake.on("drop", (el, target) => {
          const _target = target;
          const _el = el;
          if (_el && _target) {
            const id = _el.dataset.id;
            const state = _target.dataset.state;
            if (id && state) {
              const task = tasks.find((task2) => {
                return task2.id === id;
              });
              if (task) {
                task.state = state;
              }
            }
          }
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VAvatarStack = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_KanbanDropdown = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
                class: "input",
                placeholder: "\u062C\u0633\u062A\u062C\u0648..."
              }, null, 512), [
                [vModelText, search.value]
              ])
            ]),
            _: 1
          }),
          createVNode(_component_VAvatarStack, {
            avatars: unref(participants),
            size: "small"
          }, null, 8, ["avatars"]),
          createVNode(_component_VButton, {
            color: "primary",
            raised: "",
            bold: ""
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", {
            class: normalizeClass(["column", [
              isColumnNewCollapsed.value && "is-1 is-mini",
              !isColumnNewCollapsed.value && "is-one-fifth"
            ]])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["kanban-column", [
                isColumnNewCollapsed.value && "is-collapsed",
                unref(newTasks).length === 0 && "is-empty"
              ]])
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", {
                  class: "expand-button",
                  onClick: _cache[1] || (_cache[1] = ($event) => isColumnNewCollapsed.value = false)
                }, _hoisted_7),
                createBaseVNode("div", null, [
                  createBaseVNode("span", _hoisted_8, toDisplayString(unref(newTasks).length), 1)
                ]),
                _hoisted_9
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  _hoisted_12,
                  createBaseVNode("h3", null, [
                    _hoisted_13,
                    createBaseVNode("span", _hoisted_14, toDisplayString(unref(newTasks).length), 1)
                  ]),
                  createVNode(_component_KanbanDropdown, {
                    onCollapse: _cache[2] || (_cache[2] = ($event) => isColumnNewCollapsed.value = true)
                  })
                ]),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["newContainer"] = _value;
                    newContainer.value = _value;
                  },
                  "data-state": "new"
                }, [
                  unref(newTasks).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_15, _hoisted_19)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(newTasks), (task) => {
                    return openBlock(), createElementBlock("div", {
                      key: task.id,
                      "data-id": task.id,
                      class: "kanban-card is-new"
                    }, [
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("h4", _hoisted_22, toDisplayString(task.title), 1),
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("div", {
                            class: normalizeClass(["avatar-wrapper", [
                              task.participants[0].color && `is-${task.participants[0].color}`
                            ]])
                          }, [
                            createBaseVNode("img", {
                              class: "task-owner",
                              src: task.participants[0].picture,
                              alt: "",
                              onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(useViaPlaceholderError)(event, "62x62"))
                            }, null, 40, _hoisted_24)
                          ], 2)
                        ])
                      ]),
                      createBaseVNode("footer", _hoisted_25, [
                        _hoisted_26,
                        createBaseVNode("a", {
                          class: "card-footer-item",
                          onClick: ($event) => task.state = "progress"
                        }, " \u062A\u0627\u0626\u06CC\u062F ", 8, _hoisted_27)
                      ])
                    ], 8, _hoisted_20);
                  }), 128))
                ], 512)
              ])
            ], 2)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["column", [
              isColumnProgressCollapsed.value && "is-1 is-mini",
              !isColumnProgressCollapsed.value && "is-one-fifth"
            ]])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["kanban-column can-drag", [
                isColumnProgressCollapsed.value && "is-collapsed",
                unref(progressTasks).length === 0 && "is-empty"
              ]])
            }, [
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", {
                  class: "expand-button",
                  onClick: _cache[4] || (_cache[4] = ($event) => isColumnProgressCollapsed.value = false)
                }, _hoisted_30),
                createBaseVNode("div", null, [
                  createBaseVNode("span", _hoisted_31, toDisplayString(unref(progressTasks).length), 1)
                ]),
                _hoisted_32
              ]),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  _hoisted_35,
                  createBaseVNode("h3", null, [
                    _hoisted_36,
                    createBaseVNode("span", _hoisted_37, toDisplayString(unref(progressTasks).length), 1)
                  ]),
                  createVNode(_component_KanbanDropdown, {
                    onCollapse: _cache[5] || (_cache[5] = ($event) => isColumnProgressCollapsed.value = true)
                  })
                ]),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["progressContainer"] = _value;
                    progressContainer.value = _value;
                  },
                  "data-state": "progress"
                }, [
                  unref(progressTasks).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_38, _hoisted_42)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(progressTasks), (task) => {
                    return openBlock(), createElementBlock("div", {
                      key: task.id,
                      class: "kanban-card gelatine",
                      "data-id": task.id
                    }, [
                      createBaseVNode("div", _hoisted_44, [
                        createBaseVNode("h4", _hoisted_45, toDisplayString(task.title), 1),
                        createBaseVNode("div", _hoisted_46, [
                          createBaseVNode("span", null, [
                            _hoisted_47,
                            createTextVNode(" " + toDisplayString(task.dueDate), 1)
                          ]),
                          createVNode(_component_VAvatarStack, {
                            size: "small",
                            avatars: task.participants
                          }, null, 8, ["avatars"])
                        ])
                      ])
                    ], 8, _hoisted_43);
                  }), 128))
                ], 512)
              ])
            ], 2)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["column", [
              isColumnReadyCollapsed.value && "is-1 is-mini",
              !isColumnReadyCollapsed.value && "is-one-fifth"
            ]])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["kanban-column can-drag", [
                isColumnReadyCollapsed.value && "is-collapsed",
                unref(readyTasks).length === 0 && "is-empty"
              ]])
            }, [
              createBaseVNode("div", _hoisted_48, [
                createBaseVNode("div", {
                  class: "expand-button",
                  onClick: _cache[6] || (_cache[6] = ($event) => isColumnReadyCollapsed.value = false)
                }, _hoisted_50),
                createBaseVNode("div", null, [
                  createBaseVNode("span", _hoisted_51, toDisplayString(unref(readyTasks).length), 1)
                ]),
                _hoisted_52
              ]),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("div", _hoisted_54, [
                  _hoisted_55,
                  createBaseVNode("h3", null, [
                    _hoisted_56,
                    createBaseVNode("span", _hoisted_57, toDisplayString(unref(readyTasks).length), 1)
                  ]),
                  createVNode(_component_KanbanDropdown, {
                    onCollapse: _cache[7] || (_cache[7] = ($event) => isColumnReadyCollapsed.value = true)
                  })
                ]),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["readyContainer"] = _value;
                    readyContainer.value = _value;
                  },
                  "data-state": "ready"
                }, [
                  unref(readyTasks).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_58, _hoisted_62)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(readyTasks), (task) => {
                    return openBlock(), createElementBlock("div", {
                      key: task.id,
                      "data-id": task.id,
                      class: "kanban-card gelatine"
                    }, [
                      createBaseVNode("div", _hoisted_64, [
                        createBaseVNode("h4", _hoisted_65, toDisplayString(task.title), 1),
                        createBaseVNode("div", _hoisted_66, [
                          createBaseVNode("span", null, [
                            _hoisted_67,
                            createTextVNode(" " + toDisplayString(task.dueDate), 1)
                          ]),
                          createVNode(_component_VAvatarStack, {
                            size: "small",
                            avatars: task.participants
                          }, null, 8, ["avatars"])
                        ])
                      ])
                    ], 8, _hoisted_63);
                  }), 128))
                ], 512)
              ])
            ], 2)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["column", [
              isColumnReviewCollapsed.value && "is-1 is-mini",
              !isColumnReviewCollapsed.value && "is-one-fifth"
            ]])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["kanban-column can-drag", [
                isColumnReviewCollapsed.value && "is-collapsed",
                unref(reviewTasks).length === 0 && "is-empty"
              ]])
            }, [
              createBaseVNode("div", _hoisted_68, [
                createBaseVNode("div", {
                  class: "expand-button",
                  onClick: _cache[8] || (_cache[8] = ($event) => isColumnReviewCollapsed.value = false)
                }, _hoisted_70),
                createBaseVNode("div", null, [
                  createBaseVNode("span", _hoisted_71, toDisplayString(unref(reviewTasks).length), 1)
                ]),
                _hoisted_72
              ]),
              createBaseVNode("div", _hoisted_73, [
                createBaseVNode("div", _hoisted_74, [
                  _hoisted_75,
                  createBaseVNode("h3", null, [
                    _hoisted_76,
                    createBaseVNode("span", _hoisted_77, toDisplayString(unref(reviewTasks).length), 1)
                  ]),
                  createVNode(_component_KanbanDropdown, {
                    onCollapse: _cache[9] || (_cache[9] = ($event) => isColumnReviewCollapsed.value = true)
                  })
                ]),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["reviewContainer"] = _value;
                    reviewContainer.value = _value;
                  },
                  "data-state": "review"
                }, [
                  unref(reviewTasks).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_78, _hoisted_82)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(reviewTasks), (task) => {
                    return openBlock(), createElementBlock("div", {
                      key: task.id,
                      "data-id": task.id,
                      class: "kanban-card gelatine"
                    }, [
                      createBaseVNode("div", _hoisted_84, [
                        createBaseVNode("h4", _hoisted_85, toDisplayString(task.title), 1),
                        createBaseVNode("div", _hoisted_86, [
                          createBaseVNode("span", null, [
                            _hoisted_87,
                            createTextVNode(" " + toDisplayString(task.dueDate), 1)
                          ]),
                          createVNode(_component_VAvatarStack, {
                            size: "small",
                            avatars: task.participants
                          }, null, 8, ["avatars"])
                        ])
                      ])
                    ], 8, _hoisted_83);
                  }), 128))
                ], 512)
              ])
            ], 2)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["column", [
              isColumnCompletedCollapsed.value && "is-1 is-mini",
              !isColumnCompletedCollapsed.value && "is-one-fifth"
            ]])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["kanban-column", [
                isColumnCompletedCollapsed.value && "is-collapsed",
                unref(completedTasks).length === 0 && "is-empty"
              ]])
            }, [
              createBaseVNode("div", _hoisted_88, [
                createBaseVNode("div", {
                  class: "expand-button",
                  onClick: _cache[10] || (_cache[10] = ($event) => isColumnCompletedCollapsed.value = false)
                }, _hoisted_90),
                createBaseVNode("div", null, [
                  createBaseVNode("span", _hoisted_91, toDisplayString(unref(completedTasks).length), 1)
                ]),
                _hoisted_92
              ]),
              createBaseVNode("div", _hoisted_93, [
                createBaseVNode("div", _hoisted_94, [
                  _hoisted_95,
                  createBaseVNode("h3", null, [
                    _hoisted_96,
                    createBaseVNode("span", _hoisted_97, toDisplayString(unref(completedTasks).length), 1)
                  ]),
                  createVNode(_component_KanbanDropdown, {
                    onCollapse: _cache[11] || (_cache[11] = ($event) => isColumnCompletedCollapsed.value = true)
                  })
                ]),
                createBaseVNode("div", {
                  ref: (_value, _refs) => {
                    _refs["completedContainer"] = _value;
                    completedContainer.value = _value;
                  },
                  "data-state": "completed"
                }, [
                  unref(completedTasks).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_98, _hoisted_102)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(completedTasks), (task) => {
                    return openBlock(), createElementBlock("div", {
                      key: task.id,
                      "data-id": task.id,
                      class: "kanban-card gelatine"
                    }, [
                      createBaseVNode("div", _hoisted_104, [
                        createBaseVNode("h4", _hoisted_105, toDisplayString(task.title), 1),
                        createBaseVNode("div", _hoisted_106, [
                          createBaseVNode("span", null, [
                            _hoisted_107,
                            createTextVNode(" " + toDisplayString(task.dueDate), 1)
                          ]),
                          createVNode(_component_VAvatarStack, {
                            size: "small",
                            avatars: task.participants
                          }, null, 8, ["avatars"])
                        ])
                      ])
                    ], 8, _hoisted_103);
                  }), 128))
                ], 512)
              ])
            ], 2)
          ], 2)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
