var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { d as defineComponent, r as ref, ab as onMounted, ac as onUnmounted, j as h } from "./vendor.9ec557a4.js";
/*!
 * FilePond 4.30.3
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const isNode = (value) => value instanceof HTMLElement;
const createStore = (initialState, queries2 = [], actions2 = []) => {
  const state2 = __spreadValues({}, initialState);
  const actionQueue = [];
  const dispatchQueue = [];
  const getState = () => __spreadValues({}, state2);
  const processActionQueue = () => {
    const queue = [...actionQueue];
    actionQueue.length = 0;
    return queue;
  };
  const processDispatchQueue = () => {
    const queue = [...dispatchQueue];
    dispatchQueue.length = 0;
    queue.forEach(({ type, data: data2 }) => {
      dispatch(type, data2);
    });
  };
  const dispatch = (type, data2, isBlocking) => {
    if (isBlocking && !document.hidden) {
      dispatchQueue.push({ type, data: data2 });
      return;
    }
    if (actionHandlers[type]) {
      actionHandlers[type](data2);
    }
    actionQueue.push({
      type,
      data: data2
    });
  };
  const query = (str, ...args) => queryHandles[str] ? queryHandles[str](...args) : null;
  const api = {
    getState,
    processActionQueue,
    processDispatchQueue,
    dispatch,
    query
  };
  let queryHandles = {};
  queries2.forEach((query2) => {
    queryHandles = __spreadValues(__spreadValues({}, query2(state2)), queryHandles);
  });
  let actionHandlers = {};
  actions2.forEach((action) => {
    actionHandlers = __spreadValues(__spreadValues({}, action(dispatch, query, state2)), actionHandlers);
  });
  return api;
};
const defineProperty = (obj, property, definition) => {
  if (typeof definition === "function") {
    obj[property] = definition;
    return;
  }
  Object.defineProperty(obj, property, __spreadValues({}, definition));
};
const forin = (obj, cb) => {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    cb(key, obj[key]);
  }
};
const createObject = (definition) => {
  const obj = {};
  forin(definition, (property) => {
    defineProperty(obj, property, definition[property]);
  });
  return obj;
};
const attr = (node, name2, value = null) => {
  if (value === null) {
    return node.getAttribute(name2) || node.hasAttribute(name2);
  }
  node.setAttribute(name2, value);
};
const ns$2 = "http://www.w3.org/2000/svg";
const svgElements = ["svg", "path"];
const isSVGElement = (tag) => svgElements.includes(tag);
const createElement = (tag, className, attributes = {}) => {
  if (typeof className === "object") {
    attributes = className;
    className = null;
  }
  const element = isSVGElement(tag) ? document.createElementNS(ns$2, tag) : document.createElement(tag);
  if (className) {
    if (isSVGElement(tag)) {
      attr(element, "class", className);
    } else {
      element.className = className;
    }
  }
  forin(attributes, (name2, value) => {
    attr(element, name2, value);
  });
  return element;
};
const appendChild = (parent) => (child, index) => {
  if (typeof index !== "undefined" && parent.children[index]) {
    parent.insertBefore(child, parent.children[index]);
  } else {
    parent.appendChild(child);
  }
};
const appendChildView = (parent, childViews) => (view, index) => {
  if (typeof index !== "undefined") {
    childViews.splice(index, 0, view);
  } else {
    childViews.push(view);
  }
  return view;
};
const removeChildView = (parent, childViews) => (view) => {
  childViews.splice(childViews.indexOf(view), 1);
  if (view.element.parentNode) {
    parent.removeChild(view.element);
  }
  return view;
};
const IS_BROWSER$2 = (() => typeof window !== "undefined" && typeof window.document !== "undefined")();
const isBrowser$8 = () => IS_BROWSER$2;
const testElement = isBrowser$8() ? createElement("svg") : {};
const getChildCount = "children" in testElement ? (el) => el.children.length : (el) => el.childNodes.length;
const getViewRect = (elementRect, childViews, offset, scale) => {
  const left = offset[0] || elementRect.left;
  const top = offset[1] || elementRect.top;
  const right = left + elementRect.width;
  const bottom = top + elementRect.height * (scale[1] || 1);
  const rect = {
    element: __spreadValues({}, elementRect),
    inner: {
      left: elementRect.left,
      top: elementRect.top,
      right: elementRect.right,
      bottom: elementRect.bottom
    },
    outer: {
      left,
      top,
      right,
      bottom
    }
  };
  childViews.filter((childView) => !childView.isRectIgnored()).map((childView) => childView.rect).forEach((childViewRect) => {
    expandRect(rect.inner, __spreadValues({}, childViewRect.inner));
    expandRect(rect.outer, __spreadValues({}, childViewRect.outer));
  });
  calculateRectSize(rect.inner);
  rect.outer.bottom += rect.element.marginBottom;
  rect.outer.right += rect.element.marginRight;
  calculateRectSize(rect.outer);
  return rect;
};
const expandRect = (parent, child) => {
  child.top += parent.top;
  child.right += parent.left;
  child.bottom += parent.top;
  child.left += parent.left;
  if (child.bottom > parent.bottom) {
    parent.bottom = child.bottom;
  }
  if (child.right > parent.right) {
    parent.right = child.right;
  }
};
const calculateRectSize = (rect) => {
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
};
const isNumber = (value) => typeof value === "number";
const thereYet = (position, destination, velocity, errorMargin = 1e-3) => {
  return Math.abs(position - destination) < errorMargin && Math.abs(velocity) < errorMargin;
};
const spring = ({ stiffness = 0.5, damping = 0.75, mass = 10 } = {}) => {
  let target = null;
  let position = null;
  let velocity = 0;
  let resting = false;
  const interpolate = (ts, skipToEndState) => {
    if (resting)
      return;
    if (!(isNumber(target) && isNumber(position))) {
      resting = true;
      velocity = 0;
      return;
    }
    const f = -(position - target) * stiffness;
    velocity += f / mass;
    position += velocity;
    velocity *= damping;
    if (thereYet(position, target, velocity) || skipToEndState) {
      position = target;
      velocity = 0;
      resting = true;
      api.onupdate(position);
      api.oncomplete(position);
    } else {
      api.onupdate(position);
    }
  };
  const setTarget = (value) => {
    if (isNumber(value) && !isNumber(position)) {
      position = value;
    }
    if (target === null) {
      target = value;
      position = value;
    }
    target = value;
    if (position === target || typeof target === "undefined") {
      resting = true;
      velocity = 0;
      api.onupdate(position);
      api.oncomplete(position);
      return;
    }
    resting = false;
  };
  const api = createObject({
    interpolate,
    target: {
      set: setTarget,
      get: () => target
    },
    resting: {
      get: () => resting
    },
    onupdate: (value) => {
    },
    oncomplete: (value) => {
    }
  });
  return api;
};
const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const tween = ({ duration = 500, easing = easeInOutQuad, delay = 0 } = {}) => {
  let start = null;
  let t;
  let p;
  let resting = true;
  let reverse = false;
  let target = null;
  const interpolate = (ts, skipToEndState) => {
    if (resting || target === null)
      return;
    if (start === null) {
      start = ts;
    }
    if (ts - start < delay)
      return;
    t = ts - start - delay;
    if (t >= duration || skipToEndState) {
      t = 1;
      p = reverse ? 0 : 1;
      api.onupdate(p * target);
      api.oncomplete(p * target);
      resting = true;
    } else {
      p = t / duration;
      api.onupdate((t >= 0 ? easing(reverse ? 1 - p : p) : 0) * target);
    }
  };
  const api = createObject({
    interpolate,
    target: {
      get: () => reverse ? 0 : target,
      set: (value) => {
        if (target === null) {
          target = value;
          api.onupdate(value);
          api.oncomplete(value);
          return;
        }
        if (value < target) {
          target = 1;
          reverse = true;
        } else {
          reverse = false;
          target = value;
        }
        resting = false;
        start = null;
      }
    },
    resting: {
      get: () => resting
    },
    onupdate: (value) => {
    },
    oncomplete: (value) => {
    }
  });
  return api;
};
const animator = {
  spring,
  tween
};
const createAnimator = (definition, category, property) => {
  const def = definition[category] && typeof definition[category][property] === "object" ? definition[category][property] : definition[category] || definition;
  const type = typeof def === "string" ? def : def.type;
  const props = typeof def === "object" ? __spreadValues({}, def) : {};
  return animator[type] ? animator[type](props) : null;
};
const addGetSet = (keys, obj, props, overwrite = false) => {
  obj = Array.isArray(obj) ? obj : [obj];
  obj.forEach((o) => {
    keys.forEach((key) => {
      let name2 = key;
      let getter = () => props[key];
      let setter = (value) => props[key] = value;
      if (typeof key === "object") {
        name2 = key.key;
        getter = key.getter || getter;
        setter = key.setter || setter;
      }
      if (o[name2] && !overwrite) {
        return;
      }
      o[name2] = {
        get: getter,
        set: setter
      };
    });
  });
};
const animations = ({ mixinConfig, viewProps, viewInternalAPI, viewExternalAPI }) => {
  const initialProps = __spreadValues({}, viewProps);
  const animations2 = [];
  forin(mixinConfig, (property, animation) => {
    const animator2 = createAnimator(animation);
    if (!animator2) {
      return;
    }
    animator2.onupdate = (value) => {
      viewProps[property] = value;
    };
    animator2.target = initialProps[property];
    const prop = {
      key: property,
      setter: (value) => {
        if (animator2.target === value) {
          return;
        }
        animator2.target = value;
      },
      getter: () => viewProps[property]
    };
    addGetSet([prop], [viewInternalAPI, viewExternalAPI], viewProps, true);
    animations2.push(animator2);
  });
  return {
    write: (ts) => {
      let skipToEndState = document.hidden;
      let resting = true;
      animations2.forEach((animation) => {
        if (!animation.resting)
          resting = false;
        animation.interpolate(ts, skipToEndState);
      });
      return resting;
    },
    destroy: () => {
    }
  };
};
const addEvent = (element) => (type, fn2) => {
  element.addEventListener(type, fn2);
};
const removeEvent = (element) => (type, fn2) => {
  element.removeEventListener(type, fn2);
};
const listeners = ({
  mixinConfig,
  viewProps,
  viewInternalAPI,
  viewExternalAPI,
  viewState,
  view
}) => {
  const events = [];
  const add = addEvent(view.element);
  const remove = removeEvent(view.element);
  viewExternalAPI.on = (type, fn2) => {
    events.push({
      type,
      fn: fn2
    });
    add(type, fn2);
  };
  viewExternalAPI.off = (type, fn2) => {
    events.splice(events.findIndex((event) => event.type === type && event.fn === fn2), 1);
    remove(type, fn2);
  };
  return {
    write: () => {
      return true;
    },
    destroy: () => {
      events.forEach((event) => {
        remove(event.type, event.fn);
      });
    }
  };
};
const apis = ({ mixinConfig, viewProps, viewExternalAPI }) => {
  addGetSet(mixinConfig, viewExternalAPI, viewProps);
};
const isDefined$2 = (value) => value != null;
const defaults = {
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  originX: 0,
  originY: 0
};
const styles = ({ mixinConfig, viewProps, viewInternalAPI, viewExternalAPI, view }) => {
  const initialProps = __spreadValues({}, viewProps);
  const currentProps = {};
  addGetSet(mixinConfig, [viewInternalAPI, viewExternalAPI], viewProps);
  const getOffset = () => [viewProps["translateX"] || 0, viewProps["translateY"] || 0];
  const getScale = () => [viewProps["scaleX"] || 0, viewProps["scaleY"] || 0];
  const getRect = () => view.rect ? getViewRect(view.rect, view.childViews, getOffset(), getScale()) : null;
  viewInternalAPI.rect = { get: getRect };
  viewExternalAPI.rect = { get: getRect };
  mixinConfig.forEach((key) => {
    viewProps[key] = typeof initialProps[key] === "undefined" ? defaults[key] : initialProps[key];
  });
  return {
    write: () => {
      if (!propsHaveChanged(currentProps, viewProps)) {
        return;
      }
      applyStyles(view.element, viewProps);
      Object.assign(currentProps, __spreadValues({}, viewProps));
      return true;
    },
    destroy: () => {
    }
  };
};
const propsHaveChanged = (currentProps, newProps) => {
  if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
    return true;
  }
  for (const prop in newProps) {
    if (newProps[prop] !== currentProps[prop]) {
      return true;
    }
  }
  return false;
};
const applyStyles = (element, {
  opacity,
  perspective,
  translateX,
  translateY,
  scaleX,
  scaleY,
  rotateX,
  rotateY,
  rotateZ,
  originX,
  originY,
  width,
  height
}) => {
  let transforms2 = "";
  let styles2 = "";
  if (isDefined$2(originX) || isDefined$2(originY)) {
    styles2 += `transform-origin: ${originX || 0}px ${originY || 0}px;`;
  }
  if (isDefined$2(perspective)) {
    transforms2 += `perspective(${perspective}px) `;
  }
  if (isDefined$2(translateX) || isDefined$2(translateY)) {
    transforms2 += `translate3d(${translateX || 0}px, ${translateY || 0}px, 0) `;
  }
  if (isDefined$2(scaleX) || isDefined$2(scaleY)) {
    transforms2 += `scale3d(${isDefined$2(scaleX) ? scaleX : 1}, ${isDefined$2(scaleY) ? scaleY : 1}, 1) `;
  }
  if (isDefined$2(rotateZ)) {
    transforms2 += `rotateZ(${rotateZ}rad) `;
  }
  if (isDefined$2(rotateX)) {
    transforms2 += `rotateX(${rotateX}rad) `;
  }
  if (isDefined$2(rotateY)) {
    transforms2 += `rotateY(${rotateY}rad) `;
  }
  if (transforms2.length) {
    styles2 += `transform:${transforms2};`;
  }
  if (isDefined$2(opacity)) {
    styles2 += `opacity:${opacity};`;
    if (opacity === 0) {
      styles2 += `visibility:hidden;`;
    }
    if (opacity < 1) {
      styles2 += `pointer-events:none;`;
    }
  }
  if (isDefined$2(height)) {
    styles2 += `height:${height}px;`;
  }
  if (isDefined$2(width)) {
    styles2 += `width:${width}px;`;
  }
  const elementCurrentStyle = element.elementCurrentStyle || "";
  if (styles2.length !== elementCurrentStyle.length || styles2 !== elementCurrentStyle) {
    element.style.cssText = styles2;
    element.elementCurrentStyle = styles2;
  }
};
const Mixins = {
  styles,
  listeners,
  animations,
  apis
};
const updateRect$2 = (rect = {}, element = {}, style = {}) => {
  if (!element.layoutCalculated) {
    rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
    rect.marginTop = parseInt(style.marginTop, 10) || 0;
    rect.marginRight = parseInt(style.marginRight, 10) || 0;
    rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
    rect.marginLeft = parseInt(style.marginLeft, 10) || 0;
    element.layoutCalculated = true;
  }
  rect.left = element.offsetLeft || 0;
  rect.top = element.offsetTop || 0;
  rect.width = element.offsetWidth || 0;
  rect.height = element.offsetHeight || 0;
  rect.right = rect.left + rect.width;
  rect.bottom = rect.top + rect.height;
  rect.scrollTop = element.scrollTop;
  rect.hidden = element.offsetParent === null;
  return rect;
};
const createView = ({
  tag = "div",
  name: name2 = null,
  attributes = {},
  read = () => {
  },
  write: write2 = () => {
  },
  create: create2 = () => {
  },
  destroy: destroy2 = () => {
  },
  filterFrameActionsForChild = (child, actions2) => actions2,
  didCreateView = () => {
  },
  didWriteView = () => {
  },
  ignoreRect = false,
  ignoreRectUpdate = false,
  mixins = []
} = {}) => (store, props = {}) => {
  const element = createElement(tag, `filepond--${name2}`, attributes);
  const style = window.getComputedStyle(element, null);
  const rect = updateRect$2();
  let frameRect = null;
  let isResting = false;
  const childViews = [];
  const activeMixins = [];
  const ref2 = {};
  const state2 = {};
  const writers = [
    write2
  ];
  const readers = [
    read
  ];
  const destroyers = [
    destroy2
  ];
  const getElement = () => element;
  const getChildViews = () => childViews.concat();
  const getReference = () => ref2;
  const createChildView = (store2) => (view, props2) => view(store2, props2);
  const getRect = () => {
    if (frameRect) {
      return frameRect;
    }
    frameRect = getViewRect(rect, childViews, [0, 0], [1, 1]);
    return frameRect;
  };
  const getStyle = () => style;
  const _read = () => {
    frameRect = null;
    childViews.forEach((child) => child._read());
    const shouldUpdate = !(ignoreRectUpdate && rect.width && rect.height);
    if (shouldUpdate) {
      updateRect$2(rect, element, style);
    }
    const api = { root: internalAPI, props, rect };
    readers.forEach((reader) => reader(api));
  };
  const _write = (ts, frameActions, shouldOptimize) => {
    let resting = frameActions.length === 0;
    writers.forEach((writer) => {
      const writerResting = writer({
        props,
        root: internalAPI,
        actions: frameActions,
        timestamp: ts,
        shouldOptimize
      });
      if (writerResting === false) {
        resting = false;
      }
    });
    activeMixins.forEach((mixin) => {
      const mixinResting = mixin.write(ts);
      if (mixinResting === false) {
        resting = false;
      }
    });
    childViews.filter((child) => !!child.element.parentNode).forEach((child) => {
      const childResting = child._write(ts, filterFrameActionsForChild(child, frameActions), shouldOptimize);
      if (!childResting) {
        resting = false;
      }
    });
    childViews.forEach((child, index) => {
      if (child.element.parentNode) {
        return;
      }
      internalAPI.appendChild(child.element, index);
      child._read();
      child._write(ts, filterFrameActionsForChild(child, frameActions), shouldOptimize);
      resting = false;
    });
    isResting = resting;
    didWriteView({
      props,
      root: internalAPI,
      actions: frameActions,
      timestamp: ts
    });
    return resting;
  };
  const _destroy = () => {
    activeMixins.forEach((mixin) => mixin.destroy());
    destroyers.forEach((destroyer) => {
      destroyer({ root: internalAPI, props });
    });
    childViews.forEach((child) => child._destroy());
  };
  const sharedAPIDefinition = {
    element: {
      get: getElement
    },
    style: {
      get: getStyle
    },
    childViews: {
      get: getChildViews
    }
  };
  const internalAPIDefinition = __spreadProps(__spreadValues({}, sharedAPIDefinition), {
    rect: {
      get: getRect
    },
    ref: {
      get: getReference
    },
    is: (needle) => name2 === needle,
    appendChild: appendChild(element),
    createChildView: createChildView(store),
    linkView: (view) => {
      childViews.push(view);
      return view;
    },
    unlinkView: (view) => {
      childViews.splice(childViews.indexOf(view), 1);
    },
    appendChildView: appendChildView(element, childViews),
    removeChildView: removeChildView(element, childViews),
    registerWriter: (writer) => writers.push(writer),
    registerReader: (reader) => readers.push(reader),
    registerDestroyer: (destroyer) => destroyers.push(destroyer),
    invalidateLayout: () => element.layoutCalculated = false,
    dispatch: store.dispatch,
    query: store.query
  });
  const externalAPIDefinition = {
    element: {
      get: getElement
    },
    childViews: {
      get: getChildViews
    },
    rect: {
      get: getRect
    },
    resting: {
      get: () => isResting
    },
    isRectIgnored: () => ignoreRect,
    _read,
    _write,
    _destroy
  };
  const mixinAPIDefinition = __spreadProps(__spreadValues({}, sharedAPIDefinition), {
    rect: {
      get: () => rect
    }
  });
  Object.keys(mixins).sort((a, b) => {
    if (a === "styles") {
      return 1;
    } else if (b === "styles") {
      return -1;
    }
    return 0;
  }).forEach((key) => {
    const mixinAPI = Mixins[key]({
      mixinConfig: mixins[key],
      viewProps: props,
      viewState: state2,
      viewInternalAPI: internalAPIDefinition,
      viewExternalAPI: externalAPIDefinition,
      view: createObject(mixinAPIDefinition)
    });
    if (mixinAPI) {
      activeMixins.push(mixinAPI);
    }
  });
  const internalAPI = createObject(internalAPIDefinition);
  create2({
    root: internalAPI,
    props
  });
  const childCount = getChildCount(element);
  childViews.forEach((child, index) => {
    internalAPI.appendChild(child.element, childCount + index);
  });
  didCreateView(internalAPI);
  return createObject(externalAPIDefinition);
};
const createPainter = (read, write2, fps = 60) => {
  const name2 = "__framePainter";
  if (window[name2]) {
    window[name2].readers.push(read);
    window[name2].writers.push(write2);
    return;
  }
  window[name2] = {
    readers: [read],
    writers: [write2]
  };
  const painter = window[name2];
  const interval = 1e3 / fps;
  let last = null;
  let id = null;
  let requestTick = null;
  let cancelTick = null;
  const setTimerType = () => {
    if (document.hidden) {
      requestTick = () => window.setTimeout(() => tick(performance.now()), interval);
      cancelTick = () => window.clearTimeout(id);
    } else {
      requestTick = () => window.requestAnimationFrame(tick);
      cancelTick = () => window.cancelAnimationFrame(id);
    }
  };
  document.addEventListener("visibilitychange", () => {
    if (cancelTick)
      cancelTick();
    setTimerType();
    tick(performance.now());
  });
  const tick = (ts) => {
    id = requestTick(tick);
    if (!last) {
      last = ts;
    }
    const delta = ts - last;
    if (delta <= interval) {
      return;
    }
    last = ts - delta % interval;
    painter.readers.forEach((read2) => read2());
    painter.writers.forEach((write3) => write3(ts));
  };
  setTimerType();
  tick(performance.now());
  return {
    pause: () => {
      cancelTick(id);
    }
  };
};
const createRoute = (routes, fn2) => ({ root: root2, props, actions: actions2 = [], timestamp, shouldOptimize }) => {
  actions2.filter((action) => routes[action.type]).forEach((action) => routes[action.type]({ root: root2, props, action: action.data, timestamp, shouldOptimize }));
  if (fn2) {
    fn2({ root: root2, props, actions: actions2, timestamp, shouldOptimize });
  }
};
const insertBefore = (newNode, referenceNode) => referenceNode.parentNode.insertBefore(newNode, referenceNode);
const insertAfter = (newNode, referenceNode) => {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};
const isArray = (value) => Array.isArray(value);
const isEmpty = (value) => value == null;
const trim = (str) => str.trim();
const toString = (value) => "" + value;
const toArray = (value, splitter = ",") => {
  if (isEmpty(value)) {
    return [];
  }
  if (isArray(value)) {
    return value;
  }
  return toString(value).split(splitter).map(trim).filter((str) => str.length);
};
const isBoolean = (value) => typeof value === "boolean";
const toBoolean = (value) => isBoolean(value) ? value : value === "true";
const isString = (value) => typeof value === "string";
const toNumber = (value) => isNumber(value) ? value : isString(value) ? toString(value).replace(/[a-z]+/gi, "") : 0;
const toInt = (value) => parseInt(toNumber(value), 10);
const toFloat = (value) => parseFloat(toNumber(value));
const isInt = (value) => isNumber(value) && isFinite(value) && Math.floor(value) === value;
const toBytes = (value, base = 1e3) => {
  if (isInt(value)) {
    return value;
  }
  let naturalFileSize = toString(value).trim();
  if (/MB$/i.test(naturalFileSize)) {
    naturalFileSize = naturalFileSize.replace(/MB$i/, "").trim();
    return toInt(naturalFileSize) * base * base;
  }
  if (/KB/i.test(naturalFileSize)) {
    naturalFileSize = naturalFileSize.replace(/KB$i/, "").trim();
    return toInt(naturalFileSize) * base;
  }
  return toInt(naturalFileSize);
};
const isFunction = (value) => typeof value === "function";
const toFunctionReference = (string) => {
  let ref2 = self;
  let levels = string.split(".");
  let level = null;
  while (level = levels.shift()) {
    ref2 = ref2[level];
    if (!ref2) {
      return null;
    }
  }
  return ref2;
};
const methods = {
  process: "POST",
  patch: "PATCH",
  revert: "DELETE",
  fetch: "GET",
  restore: "GET",
  load: "GET"
};
const createServerAPI = (outline) => {
  const api = {};
  api.url = isString(outline) ? outline : outline.url || "";
  api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 0;
  api.headers = outline.headers ? outline.headers : {};
  forin(methods, (key) => {
    api[key] = createAction(key, outline[key], methods[key], api.timeout, api.headers);
  });
  api.process = outline.process || isString(outline) || outline.url ? api.process : null;
  api.remove = outline.remove || null;
  delete api.headers;
  return api;
};
const createAction = (name2, outline, method, timeout, headers) => {
  if (outline === null) {
    return null;
  }
  if (typeof outline === "function") {
    return outline;
  }
  const action = {
    url: method === "GET" || method === "PATCH" ? `?${name2}=` : "",
    method,
    headers,
    withCredentials: false,
    timeout,
    onload: null,
    ondata: null,
    onerror: null
  };
  if (isString(outline)) {
    action.url = outline;
    return action;
  }
  Object.assign(action, outline);
  if (isString(action.headers)) {
    const parts = action.headers.split(/:(.+)/);
    action.headers = {
      header: parts[0],
      value: parts[1]
    };
  }
  action.withCredentials = toBoolean(action.withCredentials);
  return action;
};
const toServerAPI = (value) => createServerAPI(value);
const isNull = (value) => value === null;
const isObject = (value) => typeof value === "object" && value !== null;
const isAPI = (value) => {
  return isObject(value) && isString(value.url) && isObject(value.process) && isObject(value.revert) && isObject(value.restore) && isObject(value.fetch);
};
const getType = (value) => {
  if (isArray(value)) {
    return "array";
  }
  if (isNull(value)) {
    return "null";
  }
  if (isInt(value)) {
    return "int";
  }
  if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
    return "bytes";
  }
  if (isAPI(value)) {
    return "api";
  }
  return typeof value;
};
const replaceSingleQuotes = (str) => str.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",');
const conversionTable = {
  array: toArray,
  boolean: toBoolean,
  int: (value) => getType(value) === "bytes" ? toBytes(value) : toInt(value),
  number: toFloat,
  float: toFloat,
  bytes: toBytes,
  string: (value) => isFunction(value) ? value : toString(value),
  function: (value) => toFunctionReference(value),
  serverapi: toServerAPI,
  object: (value) => {
    try {
      return JSON.parse(replaceSingleQuotes(value));
    } catch (e) {
      return null;
    }
  }
};
const convertTo = (value, type) => conversionTable[type](value);
const getValueByType = (newValue, defaultValue, valueType) => {
  if (newValue === defaultValue) {
    return newValue;
  }
  let newValueType = getType(newValue);
  if (newValueType !== valueType) {
    const convertedValue = convertTo(newValue, valueType);
    newValueType = getType(convertedValue);
    if (convertedValue === null) {
      throw `Trying to assign value with incorrect type to "${option}", allowed type: "${valueType}"`;
    } else {
      newValue = convertedValue;
    }
  }
  return newValue;
};
const createOption = (defaultValue, valueType) => {
  let currentValue = defaultValue;
  return {
    enumerable: true,
    get: () => currentValue,
    set: (newValue) => {
      currentValue = getValueByType(newValue, defaultValue, valueType);
    }
  };
};
const createOptions = (options) => {
  const obj = {};
  forin(options, (prop) => {
    const optionDefinition = options[prop];
    obj[prop] = createOption(optionDefinition[0], optionDefinition[1]);
  });
  return createObject(obj);
};
const createInitialState = (options) => ({
  items: [],
  listUpdateTimeout: null,
  itemUpdateTimeout: null,
  processingQueue: [],
  options: createOptions(options)
});
const fromCamels = (string, separator = "-") => string.split(/(?=[A-Z])/).map((part) => part.toLowerCase()).join(separator);
const createOptionAPI = (store, options) => {
  const obj = {};
  forin(options, (key) => {
    obj[key] = {
      get: () => store.getState().options[key],
      set: (value) => {
        store.dispatch(`SET_${fromCamels(key, "_").toUpperCase()}`, {
          value
        });
      }
    };
  });
  return obj;
};
const createOptionActions = (options) => (dispatch, query, state2) => {
  const obj = {};
  forin(options, (key) => {
    const name2 = fromCamels(key, "_").toUpperCase();
    obj[`SET_${name2}`] = (action) => {
      try {
        state2.options[key] = action.value;
      } catch (e) {
      }
      dispatch(`DID_SET_${name2}`, { value: state2.options[key] });
    };
  });
  return obj;
};
const createOptionQueries = (options) => (state2) => {
  const obj = {};
  forin(options, (key) => {
    obj[`GET_${fromCamels(key, "_").toUpperCase()}`] = (action) => state2.options[key];
  });
  return obj;
};
const InteractionMethod = {
  API: 1,
  DROP: 2,
  BROWSE: 3,
  PASTE: 4,
  NONE: 5
};
const getUniqueId$1 = () => Math.random().toString(36).substr(2, 9);
const arrayRemove = (arr, index) => arr.splice(index, 1);
const run = (cb, sync) => {
  if (sync) {
    cb();
  } else if (document.hidden) {
    Promise.resolve(1).then(cb);
  } else {
    setTimeout(cb, 0);
  }
};
const on = () => {
  const listeners2 = [];
  const off = (event, cb) => {
    arrayRemove(listeners2, listeners2.findIndex((listener) => listener.event === event && (listener.cb === cb || !cb)));
  };
  const fire = (event, args, sync) => {
    listeners2.filter((listener) => listener.event === event).map((listener) => listener.cb).forEach((cb) => run(() => cb(...args), sync));
  };
  return {
    fireSync: (event, ...args) => {
      fire(event, args, true);
    },
    fire: (event, ...args) => {
      fire(event, args, false);
    },
    on: (event, cb) => {
      listeners2.push({ event, cb });
    },
    onOnce: (event, cb) => {
      listeners2.push({
        event,
        cb: (...args) => {
          off(event, cb);
          cb(...args);
        }
      });
    },
    off
  };
};
const copyObjectPropertiesToObject = (src, target, excluded) => {
  Object.getOwnPropertyNames(src).filter((property) => !excluded.includes(property)).forEach((key) => Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(src, key)));
};
const PRIVATE = [
  "fire",
  "process",
  "revert",
  "load",
  "on",
  "off",
  "onOnce",
  "retryLoad",
  "extend",
  "archive",
  "archived",
  "release",
  "released",
  "requestProcessing",
  "freeze"
];
const createItemAPI = (item2) => {
  const api = {};
  copyObjectPropertiesToObject(item2, api, PRIVATE);
  return api;
};
const removeReleasedItems = (items) => {
  items.forEach((item2, index) => {
    if (item2.released) {
      arrayRemove(items, index);
    }
  });
};
const ItemStatus = {
  INIT: 1,
  IDLE: 2,
  PROCESSING_QUEUED: 9,
  PROCESSING: 3,
  PROCESSING_COMPLETE: 5,
  PROCESSING_ERROR: 6,
  PROCESSING_REVERT_ERROR: 10,
  LOADING: 7,
  LOAD_ERROR: 8
};
const FileOrigin = {
  INPUT: 1,
  LIMBO: 2,
  LOCAL: 3
};
const getNonNumeric = (str) => /[^0-9]+/.exec(str);
const getDecimalSeparator = () => getNonNumeric(1.1 .toLocaleString())[0];
const getThousandsSeparator = () => {
  const decimalSeparator = getDecimalSeparator();
  const thousandsStringWithSeparator = 1e3 .toLocaleString();
  const thousandsStringWithoutSeparator = 1e3 .toString();
  if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
    return getNonNumeric(thousandsStringWithSeparator)[0];
  }
  return decimalSeparator === "." ? "," : ".";
};
const Type = {
  BOOLEAN: "boolean",
  INT: "int",
  NUMBER: "number",
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  FUNCTION: "function",
  ACTION: "action",
  SERVER_API: "serverapi",
  REGEX: "regex"
};
const filters = [];
const applyFilterChain = (key, value, utils) => new Promise((resolve, reject) => {
  const matchingFilters = filters.filter((f) => f.key === key).map((f) => f.cb);
  if (matchingFilters.length === 0) {
    resolve(value);
    return;
  }
  const initialFilter = matchingFilters.shift();
  matchingFilters.reduce((current, next) => current.then((value2) => next(value2, utils)), initialFilter(value, utils)).then((value2) => resolve(value2)).catch((error2) => reject(error2));
});
const applyFilters = (key, value, utils) => filters.filter((f) => f.key === key).map((f) => f.cb(value, utils));
const addFilter = (key, cb) => filters.push({ key, cb });
const extendDefaultOptions = (additionalOptions) => Object.assign(defaultOptions$1, additionalOptions);
const getOptions = () => __spreadValues({}, defaultOptions$1);
const setOptions = (opts) => {
  forin(opts, (key, value) => {
    if (!defaultOptions$1[key]) {
      return;
    }
    defaultOptions$1[key][0] = getValueByType(value, defaultOptions$1[key][0], defaultOptions$1[key][1]);
  });
};
const defaultOptions$1 = {
  id: [null, Type.STRING],
  name: ["filepond", Type.STRING],
  disabled: [false, Type.BOOLEAN],
  className: [null, Type.STRING],
  required: [false, Type.BOOLEAN],
  captureMethod: [null, Type.STRING],
  allowSyncAcceptAttribute: [true, Type.BOOLEAN],
  allowDrop: [true, Type.BOOLEAN],
  allowBrowse: [true, Type.BOOLEAN],
  allowPaste: [true, Type.BOOLEAN],
  allowMultiple: [false, Type.BOOLEAN],
  allowReplace: [true, Type.BOOLEAN],
  allowRevert: [true, Type.BOOLEAN],
  allowRemove: [true, Type.BOOLEAN],
  allowProcess: [true, Type.BOOLEAN],
  allowReorder: [false, Type.BOOLEAN],
  allowDirectoriesOnly: [false, Type.BOOLEAN],
  storeAsFile: [false, Type.BOOLEAN],
  forceRevert: [false, Type.BOOLEAN],
  maxFiles: [null, Type.INT],
  checkValidity: [false, Type.BOOLEAN],
  itemInsertLocationFreedom: [true, Type.BOOLEAN],
  itemInsertLocation: ["before", Type.STRING],
  itemInsertInterval: [75, Type.INT],
  dropOnPage: [false, Type.BOOLEAN],
  dropOnElement: [true, Type.BOOLEAN],
  dropValidation: [false, Type.BOOLEAN],
  ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], Type.ARRAY],
  instantUpload: [true, Type.BOOLEAN],
  maxParallelUploads: [2, Type.INT],
  allowMinimumUploadDuration: [true, Type.BOOLEAN],
  chunkUploads: [false, Type.BOOLEAN],
  chunkForce: [false, Type.BOOLEAN],
  chunkSize: [5e6, Type.INT],
  chunkRetryDelays: [[500, 1e3, 3e3], Type.ARRAY],
  server: [null, Type.SERVER_API],
  fileSizeBase: [1e3, Type.INT],
  labelFileSizeBytes: ["bytes", Type.STRING],
  labelFileSizeKilobytes: ["KB", Type.STRING],
  labelFileSizeMegabytes: ["MB", Type.STRING],
  labelFileSizeGigabytes: ["GB", Type.STRING],
  labelDecimalSeparator: [getDecimalSeparator(), Type.STRING],
  labelThousandsSeparator: [getThousandsSeparator(), Type.STRING],
  labelIdle: [
    'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
    Type.STRING
  ],
  labelInvalidField: ["Field contains invalid files", Type.STRING],
  labelFileWaitingForSize: ["Waiting for size", Type.STRING],
  labelFileSizeNotAvailable: ["Size not available", Type.STRING],
  labelFileCountSingular: ["file in list", Type.STRING],
  labelFileCountPlural: ["files in list", Type.STRING],
  labelFileLoading: ["Loading", Type.STRING],
  labelFileAdded: ["Added", Type.STRING],
  labelFileLoadError: ["Error during load", Type.STRING],
  labelFileRemoved: ["Removed", Type.STRING],
  labelFileRemoveError: ["Error during remove", Type.STRING],
  labelFileProcessing: ["Uploading", Type.STRING],
  labelFileProcessingComplete: ["Upload complete", Type.STRING],
  labelFileProcessingAborted: ["Upload cancelled", Type.STRING],
  labelFileProcessingError: ["Error during upload", Type.STRING],
  labelFileProcessingRevertError: ["Error during revert", Type.STRING],
  labelTapToCancel: ["tap to cancel", Type.STRING],
  labelTapToRetry: ["tap to retry", Type.STRING],
  labelTapToUndo: ["tap to undo", Type.STRING],
  labelButtonRemoveItem: ["Remove", Type.STRING],
  labelButtonAbortItemLoad: ["Abort", Type.STRING],
  labelButtonRetryItemLoad: ["Retry", Type.STRING],
  labelButtonAbortItemProcessing: ["Cancel", Type.STRING],
  labelButtonUndoItemProcessing: ["Undo", Type.STRING],
  labelButtonRetryItemProcessing: ["Retry", Type.STRING],
  labelButtonProcessItem: ["Upload", Type.STRING],
  iconRemove: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  iconProcess: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
    Type.STRING
  ],
  iconRetry: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  iconUndo: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  iconDone: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  oninit: [null, Type.FUNCTION],
  onwarning: [null, Type.FUNCTION],
  onerror: [null, Type.FUNCTION],
  onactivatefile: [null, Type.FUNCTION],
  oninitfile: [null, Type.FUNCTION],
  onaddfilestart: [null, Type.FUNCTION],
  onaddfileprogress: [null, Type.FUNCTION],
  onaddfile: [null, Type.FUNCTION],
  onprocessfilestart: [null, Type.FUNCTION],
  onprocessfileprogress: [null, Type.FUNCTION],
  onprocessfileabort: [null, Type.FUNCTION],
  onprocessfilerevert: [null, Type.FUNCTION],
  onprocessfile: [null, Type.FUNCTION],
  onprocessfiles: [null, Type.FUNCTION],
  onremovefile: [null, Type.FUNCTION],
  onpreparefile: [null, Type.FUNCTION],
  onupdatefiles: [null, Type.FUNCTION],
  onreorderfiles: [null, Type.FUNCTION],
  beforeDropFile: [null, Type.FUNCTION],
  beforeAddFile: [null, Type.FUNCTION],
  beforeRemoveFile: [null, Type.FUNCTION],
  beforePrepareFile: [null, Type.FUNCTION],
  stylePanelLayout: [null, Type.STRING],
  stylePanelAspectRatio: [null, Type.STRING],
  styleItemPanelAspectRatio: [null, Type.STRING],
  styleButtonRemoveItemPosition: ["left", Type.STRING],
  styleButtonProcessItemPosition: ["right", Type.STRING],
  styleLoadIndicatorPosition: ["right", Type.STRING],
  styleProgressIndicatorPosition: ["right", Type.STRING],
  styleButtonRemoveItemAlign: [false, Type.BOOLEAN],
  files: [[], Type.ARRAY],
  credits: [["https://pqina.nl/", "Powered by PQINA"], Type.ARRAY]
};
const getItemByQuery = (items, query) => {
  if (isEmpty(query)) {
    return items[0] || null;
  }
  if (isInt(query)) {
    return items[query] || null;
  }
  if (typeof query === "object") {
    query = query.id;
  }
  return items.find((item2) => item2.id === query) || null;
};
const getNumericAspectRatioFromString = (aspectRatio) => {
  if (isEmpty(aspectRatio)) {
    return aspectRatio;
  }
  if (/:/.test(aspectRatio)) {
    const parts = aspectRatio.split(":");
    return parts[1] / parts[0];
  }
  return parseFloat(aspectRatio);
};
const getActiveItems = (items) => items.filter((item2) => !item2.archived);
const Status = {
  EMPTY: 0,
  IDLE: 1,
  ERROR: 2,
  BUSY: 3,
  READY: 4
};
let res = null;
const canUpdateFileInput = () => {
  if (res === null) {
    try {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(new File(["hello world"], "This_Works.txt"));
      const el = document.createElement("input");
      el.setAttribute("type", "file");
      el.files = dataTransfer.files;
      res = el.files.length === 1;
    } catch (err) {
      res = false;
    }
  }
  return res;
};
const ITEM_ERROR = [
  ItemStatus.LOAD_ERROR,
  ItemStatus.PROCESSING_ERROR,
  ItemStatus.PROCESSING_REVERT_ERROR
];
const ITEM_BUSY = [
  ItemStatus.LOADING,
  ItemStatus.PROCESSING,
  ItemStatus.PROCESSING_QUEUED,
  ItemStatus.INIT
];
const ITEM_READY = [ItemStatus.PROCESSING_COMPLETE];
const isItemInErrorState = (item2) => ITEM_ERROR.includes(item2.status);
const isItemInBusyState = (item2) => ITEM_BUSY.includes(item2.status);
const isItemInReadyState = (item2) => ITEM_READY.includes(item2.status);
const isAsync = (state2) => isObject(state2.options.server) && (isObject(state2.options.server.process) || isFunction(state2.options.server.process));
const queries = (state2) => ({
  GET_STATUS: () => {
    const items = getActiveItems(state2.items);
    const { EMPTY, ERROR, BUSY, IDLE, READY } = Status;
    if (items.length === 0)
      return EMPTY;
    if (items.some(isItemInErrorState))
      return ERROR;
    if (items.some(isItemInBusyState))
      return BUSY;
    if (items.some(isItemInReadyState))
      return READY;
    return IDLE;
  },
  GET_ITEM: (query) => getItemByQuery(state2.items, query),
  GET_ACTIVE_ITEM: (query) => getItemByQuery(getActiveItems(state2.items), query),
  GET_ACTIVE_ITEMS: () => getActiveItems(state2.items),
  GET_ITEMS: () => state2.items,
  GET_ITEM_NAME: (query) => {
    const item2 = getItemByQuery(state2.items, query);
    return item2 ? item2.filename : null;
  },
  GET_ITEM_SIZE: (query) => {
    const item2 = getItemByQuery(state2.items, query);
    return item2 ? item2.fileSize : null;
  },
  GET_STYLES: () => Object.keys(state2.options).filter((key) => /^style/.test(key)).map((option2) => ({
    name: option2,
    value: state2.options[option2]
  })),
  GET_PANEL_ASPECT_RATIO: () => {
    const isShapeCircle = /circle/.test(state2.options.stylePanelLayout);
    const aspectRatio = isShapeCircle ? 1 : getNumericAspectRatioFromString(state2.options.stylePanelAspectRatio);
    return aspectRatio;
  },
  GET_ITEM_PANEL_ASPECT_RATIO: () => state2.options.styleItemPanelAspectRatio,
  GET_ITEMS_BY_STATUS: (status) => getActiveItems(state2.items).filter((item2) => item2.status === status),
  GET_TOTAL_ITEMS: () => getActiveItems(state2.items).length,
  SHOULD_UPDATE_FILE_INPUT: () => state2.options.storeAsFile && canUpdateFileInput() && !isAsync(state2),
  IS_ASYNC: () => isAsync(state2),
  GET_FILE_SIZE_LABELS: (query) => ({
    labelBytes: query("GET_LABEL_FILE_SIZE_BYTES") || void 0,
    labelKilobytes: query("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
    labelMegabytes: query("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
    labelGigabytes: query("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
  })
});
const hasRoomForItem = (state2) => {
  const count = getActiveItems(state2.items).length;
  if (!state2.options.allowMultiple) {
    return count === 0;
  }
  const maxFileCount = state2.options.maxFiles;
  if (maxFileCount === null) {
    return true;
  }
  if (count < maxFileCount) {
    return true;
  }
  return false;
};
const limit = (value, min, max) => Math.max(Math.min(max, value), min);
const arrayInsert = (arr, index, item2) => arr.splice(index, 0, item2);
const insertItem = (items, item2, index) => {
  if (isEmpty(item2)) {
    return null;
  }
  if (typeof index === "undefined") {
    items.push(item2);
    return item2;
  }
  index = limit(index, 0, items.length);
  arrayInsert(items, index, item2);
  return item2;
};
const isBase64DataURI = (str) => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(str);
const getFilenameFromURL = (url) => url.split("/").pop().split("?").shift();
const getExtensionFromFilename = (name2) => name2.split(".").pop();
const guesstimateExtension = (type) => {
  if (typeof type !== "string") {
    return "";
  }
  const subtype = type.split("/").pop();
  if (/svg/.test(subtype)) {
    return "svg";
  }
  if (/zip|compressed/.test(subtype)) {
    return "zip";
  }
  if (/plain/.test(subtype)) {
    return "txt";
  }
  if (/msword/.test(subtype)) {
    return "doc";
  }
  if (/[a-z]+/.test(subtype)) {
    if (subtype === "jpeg") {
      return "jpg";
    }
    return subtype;
  }
  return "";
};
const leftPad = (value, padding = "") => (padding + value).slice(-padding.length);
const getDateString = (date = new Date()) => `${date.getFullYear()}-${leftPad(date.getMonth() + 1, "00")}-${leftPad(date.getDate(), "00")}_${leftPad(date.getHours(), "00")}-${leftPad(date.getMinutes(), "00")}-${leftPad(date.getSeconds(), "00")}`;
const getFileFromBlob = (blob2, filename, type = null, extension = null) => {
  const file2 = typeof type === "string" ? blob2.slice(0, blob2.size, type) : blob2.slice(0, blob2.size, blob2.type);
  file2.lastModifiedDate = new Date();
  if (blob2._relativePath)
    file2._relativePath = blob2._relativePath;
  if (!isString(filename)) {
    filename = getDateString();
  }
  if (filename && extension === null && getExtensionFromFilename(filename)) {
    file2.name = filename;
  } else {
    extension = extension || guesstimateExtension(file2.type);
    file2.name = filename + (extension ? "." + extension : "");
  }
  return file2;
};
const getBlobBuilder$1 = () => {
  return window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
};
const createBlob$1 = (arrayBuffer, mimeType) => {
  const BB = getBlobBuilder$1();
  if (BB) {
    const bb = new BB();
    bb.append(arrayBuffer);
    return bb.getBlob(mimeType);
  }
  return new Blob([arrayBuffer], {
    type: mimeType
  });
};
const getBlobFromByteStringWithMimeType = (byteString, mimeType) => {
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return createBlob$1(ab, mimeType);
};
const getMimeTypeFromBase64DataURI = (dataURI) => {
  return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
};
const getBase64DataFromBase64DataURI = (dataURI) => {
  const data2 = dataURI.split(",")[1];
  return data2.replace(/\s/g, "");
};
const getByteStringFromBase64DataURI = (dataURI) => {
  return atob(getBase64DataFromBase64DataURI(dataURI));
};
const getBlobFromBase64DataURI = (dataURI) => {
  const mimeType = getMimeTypeFromBase64DataURI(dataURI);
  const byteString = getByteStringFromBase64DataURI(dataURI);
  return getBlobFromByteStringWithMimeType(byteString, mimeType);
};
const getFileFromBase64DataURI = (dataURI, filename, extension) => {
  return getFileFromBlob(getBlobFromBase64DataURI(dataURI), filename, null, extension);
};
const getFileNameFromHeader = (header) => {
  if (!/^content-disposition:/i.test(header))
    return null;
  const matches = header.split(/filename=|filename\*=.+''/).splice(1).map((name2) => name2.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter((name2) => name2.length);
  return matches.length ? decodeURI(matches[matches.length - 1]) : null;
};
const getFileSizeFromHeader = (header) => {
  if (/content-length:/i.test(header)) {
    const size = header.match(/[0-9]+/)[0];
    return size ? parseInt(size, 10) : null;
  }
  return null;
};
const getTranfserIdFromHeader = (header) => {
  if (/x-content-transfer-id:/i.test(header)) {
    const id = (header.split(":")[1] || "").trim();
    return id || null;
  }
  return null;
};
const getFileInfoFromHeaders = (headers) => {
  const info = {
    source: null,
    name: null,
    size: null
  };
  const rows = headers.split("\n");
  for (let header of rows) {
    const name2 = getFileNameFromHeader(header);
    if (name2) {
      info.name = name2;
      continue;
    }
    const size = getFileSizeFromHeader(header);
    if (size) {
      info.size = size;
      continue;
    }
    const source = getTranfserIdFromHeader(header);
    if (source) {
      info.source = source;
      continue;
    }
  }
  return info;
};
const createFileLoader = (fetchFn) => {
  const state2 = {
    source: null,
    complete: false,
    progress: 0,
    size: null,
    timestamp: null,
    duration: 0,
    request: null
  };
  const getProgress = () => state2.progress;
  const abort = () => {
    if (state2.request && state2.request.abort) {
      state2.request.abort();
    }
  };
  const load = () => {
    const source = state2.source;
    api.fire("init", source);
    if (source instanceof File) {
      api.fire("load", source);
    } else if (source instanceof Blob) {
      api.fire("load", getFileFromBlob(source, source.name));
    } else if (isBase64DataURI(source)) {
      api.fire("load", getFileFromBase64DataURI(source));
    } else {
      loadURL(source);
    }
  };
  const loadURL = (url) => {
    if (!fetchFn) {
      api.fire("error", {
        type: "error",
        body: "Can't load URL",
        code: 400
      });
      return;
    }
    state2.timestamp = Date.now();
    state2.request = fetchFn(url, (response) => {
      state2.duration = Date.now() - state2.timestamp;
      state2.complete = true;
      if (response instanceof Blob) {
        response = getFileFromBlob(response, response.name || getFilenameFromURL(url));
      }
      api.fire("load", response instanceof Blob ? response : response ? response.body : null);
    }, (error2) => {
      api.fire("error", typeof error2 === "string" ? {
        type: "error",
        code: 0,
        body: error2
      } : error2);
    }, (computable, current, total) => {
      if (total) {
        state2.size = total;
      }
      state2.duration = Date.now() - state2.timestamp;
      if (!computable) {
        state2.progress = null;
        return;
      }
      state2.progress = current / total;
      api.fire("progress", state2.progress);
    }, () => {
      api.fire("abort");
    }, (response) => {
      const fileinfo = getFileInfoFromHeaders(typeof response === "string" ? response : response.headers);
      api.fire("meta", {
        size: state2.size || fileinfo.size,
        filename: fileinfo.name,
        source: fileinfo.source
      });
    });
  };
  const api = __spreadProps(__spreadValues({}, on()), {
    setSource: (source) => state2.source = source,
    getProgress,
    abort,
    load
  });
  return api;
};
const isGet = (method) => /GET|HEAD/.test(method);
const sendRequest = (data2, url, options) => {
  const api = {
    onheaders: () => {
    },
    onprogress: () => {
    },
    onload: () => {
    },
    ontimeout: () => {
    },
    onerror: () => {
    },
    onabort: () => {
    },
    abort: () => {
      aborted = true;
      xhr.abort();
    }
  };
  let aborted = false;
  let headersReceived = false;
  options = __spreadValues({
    method: "POST",
    headers: {},
    withCredentials: false
  }, options);
  url = encodeURI(url);
  if (isGet(options.method) && data2) {
    url = `${url}${encodeURIComponent(typeof data2 === "string" ? data2 : JSON.stringify(data2))}`;
  }
  const xhr = new XMLHttpRequest();
  const process = isGet(options.method) ? xhr : xhr.upload;
  process.onprogress = (e) => {
    if (aborted) {
      return;
    }
    api.onprogress(e.lengthComputable, e.loaded, e.total);
  };
  xhr.onreadystatechange = () => {
    if (xhr.readyState < 2) {
      return;
    }
    if (xhr.readyState === 4 && xhr.status === 0) {
      return;
    }
    if (headersReceived) {
      return;
    }
    headersReceived = true;
    api.onheaders(xhr);
  };
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      api.onload(xhr);
    } else {
      api.onerror(xhr);
    }
  };
  xhr.onerror = () => api.onerror(xhr);
  xhr.onabort = () => {
    aborted = true;
    api.onabort();
  };
  xhr.ontimeout = () => api.ontimeout(xhr);
  xhr.open(options.method, url, true);
  if (isInt(options.timeout)) {
    xhr.timeout = options.timeout;
  }
  Object.keys(options.headers).forEach((key) => {
    const value = unescape(encodeURIComponent(options.headers[key]));
    xhr.setRequestHeader(key, value);
  });
  if (options.responseType) {
    xhr.responseType = options.responseType;
  }
  if (options.withCredentials) {
    xhr.withCredentials = true;
  }
  xhr.send(data2);
  return api;
};
const createResponse = (type, code, body, headers) => ({
  type,
  code,
  body,
  headers
});
const createTimeoutResponse = (cb) => (xhr) => {
  cb(createResponse("error", 0, "Timeout", xhr.getAllResponseHeaders()));
};
const hasQS = (str) => /\?/.test(str);
const buildURL = (...parts) => {
  let url = "";
  parts.forEach((part) => {
    url += hasQS(url) && hasQS(part) ? part.replace(/\?/, "&") : part;
  });
  return url;
};
const createFetchFunction = (apiUrl = "", action) => {
  if (typeof action === "function") {
    return action;
  }
  if (!action || !isString(action.url)) {
    return null;
  }
  const onload = action.onload || ((res2) => res2);
  const onerror = action.onerror || ((res2) => null);
  return (url, load, error2, progress, abort, headers) => {
    const request = sendRequest(url, buildURL(apiUrl, action.url), __spreadProps(__spreadValues({}, action), {
      responseType: "blob"
    }));
    request.onload = (xhr) => {
      const headers2 = xhr.getAllResponseHeaders();
      const filename = getFileInfoFromHeaders(headers2).name || getFilenameFromURL(url);
      load(createResponse("load", xhr.status, action.method === "HEAD" ? null : getFileFromBlob(onload(xhr.response), filename), headers2));
    };
    request.onerror = (xhr) => {
      error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    };
    request.onheaders = (xhr) => {
      headers(createResponse("headers", xhr.status, null, xhr.getAllResponseHeaders()));
    };
    request.ontimeout = createTimeoutResponse(error2);
    request.onprogress = progress;
    request.onabort = abort;
    return request;
  };
};
const ChunkStatus = {
  QUEUED: 0,
  COMPLETE: 1,
  PROCESSING: 2,
  ERROR: 3,
  WAITING: 4
};
const processFileChunked = (apiUrl, action, name2, file2, metadata, load, error2, progress, abort, transfer, options) => {
  const chunks = [];
  const { chunkTransferId, chunkServer, chunkSize, chunkRetryDelays } = options;
  const state2 = {
    serverId: chunkTransferId,
    aborted: false
  };
  const ondata = action.ondata || ((fd) => fd);
  const onload = action.onload || ((xhr, method) => method === "HEAD" ? xhr.getResponseHeader("Upload-Offset") : xhr.response);
  const onerror = action.onerror || ((res2) => null);
  const requestTransferId = (cb) => {
    const formData = new FormData();
    if (isObject(metadata))
      formData.append(name2, JSON.stringify(metadata));
    const headers = typeof action.headers === "function" ? action.headers(file2, metadata) : __spreadProps(__spreadValues({}, action.headers), {
      "Upload-Length": file2.size
    });
    const requestParams = __spreadProps(__spreadValues({}, action), {
      headers
    });
    const request = sendRequest(ondata(formData), buildURL(apiUrl, action.url), requestParams);
    request.onload = (xhr) => cb(onload(xhr, requestParams.method));
    request.onerror = (xhr) => error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    request.ontimeout = createTimeoutResponse(error2);
  };
  const requestTransferOffset = (cb) => {
    const requestUrl = buildURL(apiUrl, chunkServer.url, state2.serverId);
    const headers = typeof action.headers === "function" ? action.headers(state2.serverId) : __spreadValues({}, action.headers);
    const requestParams = {
      headers,
      method: "HEAD"
    };
    const request = sendRequest(null, requestUrl, requestParams);
    request.onload = (xhr) => cb(onload(xhr, requestParams.method));
    request.onerror = (xhr) => error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    request.ontimeout = createTimeoutResponse(error2);
  };
  const lastChunkIndex = Math.floor(file2.size / chunkSize);
  for (let i = 0; i <= lastChunkIndex; i++) {
    const offset = i * chunkSize;
    const data2 = file2.slice(offset, offset + chunkSize, "application/offset+octet-stream");
    chunks[i] = {
      index: i,
      size: data2.size,
      offset,
      data: data2,
      file: file2,
      progress: 0,
      retries: [...chunkRetryDelays],
      status: ChunkStatus.QUEUED,
      error: null,
      request: null,
      timeout: null
    };
  }
  const completeProcessingChunks = () => load(state2.serverId);
  const canProcessChunk = (chunk) => chunk.status === ChunkStatus.QUEUED || chunk.status === ChunkStatus.ERROR;
  const processChunk = (chunk) => {
    if (state2.aborted)
      return;
    chunk = chunk || chunks.find(canProcessChunk);
    if (!chunk) {
      if (chunks.every((chunk2) => chunk2.status === ChunkStatus.COMPLETE)) {
        completeProcessingChunks();
      }
      return;
    }
    chunk.status = ChunkStatus.PROCESSING;
    chunk.progress = null;
    const ondata2 = chunkServer.ondata || ((fd) => fd);
    const onerror2 = chunkServer.onerror || ((res2) => null);
    const requestUrl = buildURL(apiUrl, chunkServer.url, state2.serverId);
    const headers = typeof chunkServer.headers === "function" ? chunkServer.headers(chunk) : __spreadProps(__spreadValues({}, chunkServer.headers), {
      "Content-Type": "application/offset+octet-stream",
      "Upload-Offset": chunk.offset,
      "Upload-Length": file2.size,
      "Upload-Name": file2.name
    });
    const request = chunk.request = sendRequest(ondata2(chunk.data), requestUrl, __spreadProps(__spreadValues({}, chunkServer), {
      headers
    }));
    request.onload = () => {
      chunk.status = ChunkStatus.COMPLETE;
      chunk.request = null;
      processChunks();
    };
    request.onprogress = (lengthComputable, loaded, total) => {
      chunk.progress = lengthComputable ? loaded : null;
      updateTotalProgress();
    };
    request.onerror = (xhr) => {
      chunk.status = ChunkStatus.ERROR;
      chunk.request = null;
      chunk.error = onerror2(xhr.response) || xhr.statusText;
      if (!retryProcessChunk(chunk)) {
        error2(createResponse("error", xhr.status, onerror2(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
      }
    };
    request.ontimeout = (xhr) => {
      chunk.status = ChunkStatus.ERROR;
      chunk.request = null;
      if (!retryProcessChunk(chunk)) {
        createTimeoutResponse(error2)(xhr);
      }
    };
    request.onabort = () => {
      chunk.status = ChunkStatus.QUEUED;
      chunk.request = null;
      abort();
    };
  };
  const retryProcessChunk = (chunk) => {
    if (chunk.retries.length === 0)
      return false;
    chunk.status = ChunkStatus.WAITING;
    clearTimeout(chunk.timeout);
    chunk.timeout = setTimeout(() => {
      processChunk(chunk);
    }, chunk.retries.shift());
    return true;
  };
  const updateTotalProgress = () => {
    const totalBytesTransfered = chunks.reduce((p, chunk) => {
      if (p === null || chunk.progress === null)
        return null;
      return p + chunk.progress;
    }, 0);
    if (totalBytesTransfered === null)
      return progress(false, 0, 0);
    const totalSize = chunks.reduce((total, chunk) => total + chunk.size, 0);
    progress(true, totalBytesTransfered, totalSize);
  };
  const processChunks = () => {
    const totalProcessing = chunks.filter((chunk) => chunk.status === ChunkStatus.PROCESSING).length;
    if (totalProcessing >= 1)
      return;
    processChunk();
  };
  const abortChunks = () => {
    chunks.forEach((chunk) => {
      clearTimeout(chunk.timeout);
      if (chunk.request) {
        chunk.request.abort();
      }
    });
  };
  if (!state2.serverId) {
    requestTransferId((serverId) => {
      if (state2.aborted)
        return;
      transfer(serverId);
      state2.serverId = serverId;
      processChunks();
    });
  } else {
    requestTransferOffset((offset) => {
      if (state2.aborted)
        return;
      chunks.filter((chunk) => chunk.offset < offset).forEach((chunk) => {
        chunk.status = ChunkStatus.COMPLETE;
        chunk.progress = chunk.size;
      });
      processChunks();
    });
  }
  return {
    abort: () => {
      state2.aborted = true;
      abortChunks();
    }
  };
};
const createFileProcessorFunction = (apiUrl, action, name2, options) => (file2, metadata, load, error2, progress, abort, transfer) => {
  if (!file2)
    return;
  const canChunkUpload = options.chunkUploads;
  const shouldChunkUpload = canChunkUpload && file2.size > options.chunkSize;
  const willChunkUpload = canChunkUpload && (shouldChunkUpload || options.chunkForce);
  if (file2 instanceof Blob && willChunkUpload)
    return processFileChunked(apiUrl, action, name2, file2, metadata, load, error2, progress, abort, transfer, options);
  const ondata = action.ondata || ((fd) => fd);
  const onload = action.onload || ((res2) => res2);
  const onerror = action.onerror || ((res2) => null);
  const headers = typeof action.headers === "function" ? action.headers(file2, metadata) || {} : __spreadValues({}, action.headers);
  const requestParams = __spreadProps(__spreadValues({}, action), {
    headers
  });
  var formData = new FormData();
  if (isObject(metadata)) {
    formData.append(name2, JSON.stringify(metadata));
  }
  (file2 instanceof Blob ? [{ name: null, file: file2 }] : file2).forEach((item2) => {
    formData.append(name2, item2.file, item2.name === null ? item2.file.name : `${item2.name}${item2.file.name}`);
  });
  const request = sendRequest(ondata(formData), buildURL(apiUrl, action.url), requestParams);
  request.onload = (xhr) => {
    load(createResponse("load", xhr.status, onload(xhr.response), xhr.getAllResponseHeaders()));
  };
  request.onerror = (xhr) => {
    error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
  };
  request.ontimeout = createTimeoutResponse(error2);
  request.onprogress = progress;
  request.onabort = abort;
  return request;
};
const createProcessorFunction = (apiUrl = "", action, name2, options) => {
  if (typeof action === "function")
    return (...params) => action(name2, ...params, options);
  if (!action || !isString(action.url))
    return null;
  return createFileProcessorFunction(apiUrl, action, name2, options);
};
const createRevertFunction = (apiUrl = "", action) => {
  if (typeof action === "function") {
    return action;
  }
  if (!action || !isString(action.url)) {
    return (uniqueFileId, load) => load();
  }
  const onload = action.onload || ((res2) => res2);
  const onerror = action.onerror || ((res2) => null);
  return (uniqueFileId, load, error2) => {
    const request = sendRequest(uniqueFileId, apiUrl + action.url, action);
    request.onload = (xhr) => {
      load(createResponse("load", xhr.status, onload(xhr.response), xhr.getAllResponseHeaders()));
    };
    request.onerror = (xhr) => {
      error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    };
    request.ontimeout = createTimeoutResponse(error2);
    return request;
  };
};
const getRandomNumber = (min = 0, max = 1) => min + Math.random() * (max - min);
const createPerceivedPerformanceUpdater = (cb, duration = 1e3, offset = 0, tickMin = 25, tickMax = 250) => {
  let timeout = null;
  const start = Date.now();
  const tick = () => {
    let runtime = Date.now() - start;
    let delay = getRandomNumber(tickMin, tickMax);
    if (runtime + delay > duration) {
      delay = runtime + delay - duration;
    }
    let progress = runtime / duration;
    if (progress >= 1 || document.hidden) {
      cb(1);
      return;
    }
    cb(progress);
    timeout = setTimeout(tick, delay);
  };
  if (duration > 0)
    tick();
  return {
    clear: () => {
      clearTimeout(timeout);
    }
  };
};
const createFileProcessor = (processFn, options) => {
  const state2 = {
    complete: false,
    perceivedProgress: 0,
    perceivedPerformanceUpdater: null,
    progress: null,
    timestamp: null,
    perceivedDuration: 0,
    duration: 0,
    request: null,
    response: null
  };
  const { allowMinimumUploadDuration } = options;
  const process = (file2, metadata) => {
    const progressFn = () => {
      if (state2.duration === 0 || state2.progress === null)
        return;
      api.fire("progress", api.getProgress());
    };
    const completeFn = () => {
      state2.complete = true;
      api.fire("load-perceived", state2.response.body);
    };
    api.fire("start");
    state2.timestamp = Date.now();
    state2.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater((progress) => {
      state2.perceivedProgress = progress;
      state2.perceivedDuration = Date.now() - state2.timestamp;
      progressFn();
      if (state2.response && state2.perceivedProgress === 1 && !state2.complete) {
        completeFn();
      }
    }, allowMinimumUploadDuration ? getRandomNumber(750, 1500) : 0);
    state2.request = processFn(file2, metadata, (response) => {
      state2.response = isObject(response) ? response : {
        type: "load",
        code: 200,
        body: `${response}`,
        headers: {}
      };
      state2.duration = Date.now() - state2.timestamp;
      state2.progress = 1;
      api.fire("load", state2.response.body);
      if (!allowMinimumUploadDuration || allowMinimumUploadDuration && state2.perceivedProgress === 1) {
        completeFn();
      }
    }, (error2) => {
      state2.perceivedPerformanceUpdater.clear();
      api.fire("error", isObject(error2) ? error2 : {
        type: "error",
        code: 0,
        body: `${error2}`
      });
    }, (computable, current, total) => {
      state2.duration = Date.now() - state2.timestamp;
      state2.progress = computable ? current / total : null;
      progressFn();
    }, () => {
      state2.perceivedPerformanceUpdater.clear();
      api.fire("abort", state2.response ? state2.response.body : null);
    }, (transferId) => {
      api.fire("transfer", transferId);
    });
  };
  const abort = () => {
    if (!state2.request)
      return;
    state2.perceivedPerformanceUpdater.clear();
    if (state2.request.abort)
      state2.request.abort();
    state2.complete = true;
  };
  const reset = () => {
    abort();
    state2.complete = false;
    state2.perceivedProgress = 0;
    state2.progress = 0;
    state2.timestamp = null;
    state2.perceivedDuration = 0;
    state2.duration = 0;
    state2.request = null;
    state2.response = null;
  };
  const getProgress = allowMinimumUploadDuration ? () => state2.progress ? Math.min(state2.progress, state2.perceivedProgress) : null : () => state2.progress || null;
  const getDuration = allowMinimumUploadDuration ? () => Math.min(state2.duration, state2.perceivedDuration) : () => state2.duration;
  const api = __spreadProps(__spreadValues({}, on()), {
    process,
    abort,
    getProgress,
    getDuration,
    reset
  });
  return api;
};
const getFilenameWithoutExtension$1 = (name2) => name2.substr(0, name2.lastIndexOf(".")) || name2;
const createFileStub = (source) => {
  let data2 = [source.name, source.size, source.type];
  if (source instanceof Blob || isBase64DataURI(source)) {
    data2[0] = source.name || getDateString();
  } else if (isBase64DataURI(source)) {
    data2[1] = source.length;
    data2[2] = getMimeTypeFromBase64DataURI(source);
  } else if (isString(source)) {
    data2[0] = getFilenameFromURL(source);
    data2[1] = 0;
    data2[2] = "application/octet-stream";
  }
  return {
    name: data2[0],
    size: data2[1],
    type: data2[2]
  };
};
const isFile = (value) => !!(value instanceof File || value instanceof Blob && value.name);
const deepCloneObject = (src) => {
  if (!isObject(src))
    return src;
  const target = isArray(src) ? [] : {};
  for (const key in src) {
    if (!src.hasOwnProperty(key))
      continue;
    const v = src[key];
    target[key] = v && isObject(v) ? deepCloneObject(v) : v;
  }
  return target;
};
const createItem = (origin = null, serverFileReference = null, file2 = null) => {
  const id = getUniqueId$1();
  const state2 = {
    archived: false,
    frozen: false,
    released: false,
    source: null,
    file: file2,
    serverFileReference,
    transferId: null,
    processingAborted: false,
    status: serverFileReference ? ItemStatus.PROCESSING_COMPLETE : ItemStatus.INIT,
    activeLoader: null,
    activeProcessor: null
  };
  let abortProcessingRequestComplete = null;
  const metadata = {};
  const setStatus = (status) => state2.status = status;
  const fire = (event, ...params) => {
    if (state2.released || state2.frozen)
      return;
    api.fire(event, ...params);
  };
  const getFileExtension = () => getExtensionFromFilename(state2.file.name);
  const getFileType = () => state2.file.type;
  const getFileSize = () => state2.file.size;
  const getFile = () => state2.file;
  const load = (source, loader, onload) => {
    state2.source = source;
    api.fireSync("init");
    if (state2.file) {
      api.fireSync("load-skip");
      return;
    }
    state2.file = createFileStub(source);
    loader.on("init", () => {
      fire("load-init");
    });
    loader.on("meta", (meta) => {
      state2.file.size = meta.size;
      state2.file.filename = meta.filename;
      if (meta.source) {
        origin = FileOrigin.LIMBO;
        state2.serverFileReference = meta.source;
        state2.status = ItemStatus.PROCESSING_COMPLETE;
      }
      fire("load-meta");
    });
    loader.on("progress", (progress) => {
      setStatus(ItemStatus.LOADING);
      fire("load-progress", progress);
    });
    loader.on("error", (error2) => {
      setStatus(ItemStatus.LOAD_ERROR);
      fire("load-request-error", error2);
    });
    loader.on("abort", () => {
      setStatus(ItemStatus.INIT);
      fire("load-abort");
    });
    loader.on("load", (file3) => {
      state2.activeLoader = null;
      const success = (result) => {
        state2.file = isFile(result) ? result : state2.file;
        if (origin === FileOrigin.LIMBO && state2.serverFileReference) {
          setStatus(ItemStatus.PROCESSING_COMPLETE);
        } else {
          setStatus(ItemStatus.IDLE);
        }
        fire("load");
      };
      const error2 = (result) => {
        state2.file = file3;
        fire("load-meta");
        setStatus(ItemStatus.LOAD_ERROR);
        fire("load-file-error", result);
      };
      if (state2.serverFileReference) {
        success(file3);
        return;
      }
      onload(file3, success, error2);
    });
    loader.setSource(source);
    state2.activeLoader = loader;
    loader.load();
  };
  const retryLoad = () => {
    if (!state2.activeLoader) {
      return;
    }
    state2.activeLoader.load();
  };
  const abortLoad = () => {
    if (state2.activeLoader) {
      state2.activeLoader.abort();
      return;
    }
    setStatus(ItemStatus.INIT);
    fire("load-abort");
  };
  const process = (processor, onprocess) => {
    if (state2.processingAborted) {
      state2.processingAborted = false;
      return;
    }
    setStatus(ItemStatus.PROCESSING);
    abortProcessingRequestComplete = null;
    if (!(state2.file instanceof Blob)) {
      api.on("load", () => {
        process(processor, onprocess);
      });
      return;
    }
    processor.on("load", (serverFileReference2) => {
      state2.transferId = null;
      state2.serverFileReference = serverFileReference2;
    });
    processor.on("transfer", (transferId) => {
      state2.transferId = transferId;
    });
    processor.on("load-perceived", (serverFileReference2) => {
      state2.activeProcessor = null;
      state2.transferId = null;
      state2.serverFileReference = serverFileReference2;
      setStatus(ItemStatus.PROCESSING_COMPLETE);
      fire("process-complete", serverFileReference2);
    });
    processor.on("start", () => {
      fire("process-start");
    });
    processor.on("error", (error3) => {
      state2.activeProcessor = null;
      setStatus(ItemStatus.PROCESSING_ERROR);
      fire("process-error", error3);
    });
    processor.on("abort", (serverFileReference2) => {
      state2.activeProcessor = null;
      state2.serverFileReference = serverFileReference2;
      setStatus(ItemStatus.IDLE);
      fire("process-abort");
      if (abortProcessingRequestComplete) {
        abortProcessingRequestComplete();
      }
    });
    processor.on("progress", (progress) => {
      fire("process-progress", progress);
    });
    const success = (file3) => {
      if (state2.archived)
        return;
      processor.process(file3, __spreadValues({}, metadata));
    };
    const error2 = console.error;
    onprocess(state2.file, success, error2);
    state2.activeProcessor = processor;
  };
  const requestProcessing = () => {
    state2.processingAborted = false;
    setStatus(ItemStatus.PROCESSING_QUEUED);
  };
  const abortProcessing = () => new Promise((resolve) => {
    if (!state2.activeProcessor) {
      state2.processingAborted = true;
      setStatus(ItemStatus.IDLE);
      fire("process-abort");
      resolve();
      return;
    }
    abortProcessingRequestComplete = () => {
      resolve();
    };
    state2.activeProcessor.abort();
  });
  const revert = (revertFileUpload, forceRevert) => new Promise((resolve, reject) => {
    const serverTransferId = state2.serverFileReference !== null ? state2.serverFileReference : state2.transferId;
    if (serverTransferId === null) {
      resolve();
      return;
    }
    revertFileUpload(serverTransferId, () => {
      state2.serverFileReference = null;
      state2.transferId = null;
      resolve();
    }, (error2) => {
      if (!forceRevert) {
        resolve();
        return;
      }
      setStatus(ItemStatus.PROCESSING_REVERT_ERROR);
      fire("process-revert-error");
      reject(error2);
    });
    setStatus(ItemStatus.IDLE);
    fire("process-revert");
  });
  const setMetadata = (key, value, silent) => {
    const keys = key.split(".");
    const root2 = keys[0];
    const last = keys.pop();
    let data2 = metadata;
    keys.forEach((key2) => data2 = data2[key2]);
    if (JSON.stringify(data2[last]) === JSON.stringify(value))
      return;
    data2[last] = value;
    fire("metadata-update", {
      key: root2,
      value: metadata[root2],
      silent
    });
  };
  const getMetadata = (key) => deepCloneObject(key ? metadata[key] : metadata);
  const api = __spreadProps(__spreadValues({
    id: { get: () => id },
    origin: { get: () => origin, set: (value) => origin = value },
    serverId: { get: () => state2.serverFileReference },
    transferId: { get: () => state2.transferId },
    status: { get: () => state2.status },
    filename: { get: () => state2.file.name },
    filenameWithoutExtension: { get: () => getFilenameWithoutExtension$1(state2.file.name) },
    fileExtension: { get: getFileExtension },
    fileType: { get: getFileType },
    fileSize: { get: getFileSize },
    file: { get: getFile },
    relativePath: { get: () => state2.file._relativePath },
    source: { get: () => state2.source },
    getMetadata,
    setMetadata: (key, value, silent) => {
      if (isObject(key)) {
        const data2 = key;
        Object.keys(data2).forEach((key2) => {
          setMetadata(key2, data2[key2], value);
        });
        return key;
      }
      setMetadata(key, value, silent);
      return value;
    },
    extend: (name2, handler) => itemAPI[name2] = handler,
    abortLoad,
    retryLoad,
    requestProcessing,
    abortProcessing,
    load,
    process,
    revert
  }, on()), {
    freeze: () => state2.frozen = true,
    release: () => state2.released = true,
    released: { get: () => state2.released },
    archive: () => state2.archived = true,
    archived: { get: () => state2.archived }
  });
  const itemAPI = createObject(api);
  return itemAPI;
};
const getItemIndexByQuery = (items, query) => {
  if (isEmpty(query)) {
    return 0;
  }
  if (!isString(query)) {
    return -1;
  }
  return items.findIndex((item2) => item2.id === query);
};
const getItemById = (items, itemId) => {
  const index = getItemIndexByQuery(items, itemId);
  if (index < 0) {
    return;
  }
  return items[index] || null;
};
const fetchBlob = (url, load, error2, progress, abort, headers) => {
  const request = sendRequest(null, url, {
    method: "GET",
    responseType: "blob"
  });
  request.onload = (xhr) => {
    const headers2 = xhr.getAllResponseHeaders();
    const filename = getFileInfoFromHeaders(headers2).name || getFilenameFromURL(url);
    load(createResponse("load", xhr.status, getFileFromBlob(xhr.response, filename), headers2));
  };
  request.onerror = (xhr) => {
    error2(createResponse("error", xhr.status, xhr.statusText, xhr.getAllResponseHeaders()));
  };
  request.onheaders = (xhr) => {
    headers(createResponse("headers", xhr.status, null, xhr.getAllResponseHeaders()));
  };
  request.ontimeout = createTimeoutResponse(error2);
  request.onprogress = progress;
  request.onabort = abort;
  return request;
};
const getDomainFromURL = (url) => {
  if (url.indexOf("//") === 0) {
    url = location.protocol + url;
  }
  return url.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0];
};
const isExternalURL = (url) => (url.indexOf(":") > -1 || url.indexOf("//") > -1) && getDomainFromURL(location.href) !== getDomainFromURL(url);
const dynamicLabel = (label) => (...params) => isFunction(label) ? label(...params) : label;
const isMockItem = (item2) => !isFile(item2.file);
const listUpdated = (dispatch, state2) => {
  clearTimeout(state2.listUpdateTimeout);
  state2.listUpdateTimeout = setTimeout(() => {
    dispatch("DID_UPDATE_ITEMS", { items: getActiveItems(state2.items) });
  }, 0);
};
const optionalPromise = (fn2, ...params) => new Promise((resolve) => {
  if (!fn2) {
    return resolve(true);
  }
  const result = fn2(...params);
  if (result == null) {
    return resolve(true);
  }
  if (typeof result === "boolean") {
    return resolve(result);
  }
  if (typeof result.then === "function") {
    result.then(resolve);
  }
});
const sortItems = (state2, compare) => {
  state2.items.sort((a, b) => compare(createItemAPI(a), createItemAPI(b)));
};
const getItemByQueryFromState = (state2, itemHandler) => (_a = {}) => {
  var _b = _a, {
    query,
    success = () => {
    },
    failure = () => {
    }
  } = _b, options = __objRest(_b, [
    "query",
    "success",
    "failure"
  ]);
  const item2 = getItemByQuery(state2.items, query);
  if (!item2) {
    failure({
      error: createResponse("error", 0, "Item not found"),
      file: null
    });
    return;
  }
  itemHandler(item2, success, failure, options || {});
};
const actions = (dispatch, query, state2) => ({
  ABORT_ALL: () => {
    getActiveItems(state2.items).forEach((item2) => {
      item2.freeze();
      item2.abortLoad();
      item2.abortProcessing();
    });
  },
  DID_SET_FILES: ({ value = [] }) => {
    const files = value.map((file2) => ({
      source: file2.source ? file2.source : file2,
      options: file2.options
    }));
    let activeItems = getActiveItems(state2.items);
    activeItems.forEach((item2) => {
      if (!files.find((file2) => file2.source === item2.source || file2.source === item2.file)) {
        dispatch("REMOVE_ITEM", { query: item2, remove: false });
      }
    });
    activeItems = getActiveItems(state2.items);
    files.forEach((file2, index) => {
      if (activeItems.find((item2) => item2.source === file2.source || item2.file === file2.source))
        return;
      dispatch("ADD_ITEM", __spreadProps(__spreadValues({}, file2), {
        interactionMethod: InteractionMethod.NONE,
        index
      }));
    });
  },
  DID_UPDATE_ITEM_METADATA: ({ id, action, change }) => {
    if (change.silent)
      return;
    clearTimeout(state2.itemUpdateTimeout);
    state2.itemUpdateTimeout = setTimeout(() => {
      const item2 = getItemById(state2.items, id);
      if (!query("IS_ASYNC")) {
        applyFilterChain("SHOULD_PREPARE_OUTPUT", false, {
          item: item2,
          query,
          action,
          change
        }).then((shouldPrepareOutput) => {
          const beforePrepareFile = query("GET_BEFORE_PREPARE_FILE");
          if (beforePrepareFile)
            shouldPrepareOutput = beforePrepareFile(item2, shouldPrepareOutput);
          if (!shouldPrepareOutput)
            return;
          dispatch("REQUEST_PREPARE_OUTPUT", {
            query: id,
            item: item2,
            success: (file2) => {
              dispatch("DID_PREPARE_OUTPUT", { id, file: file2 });
            }
          }, true);
        });
        return;
      }
      if (item2.origin === FileOrigin.LOCAL) {
        dispatch("DID_LOAD_ITEM", {
          id: item2.id,
          error: null,
          serverFileReference: item2.source
        });
      }
      const upload = () => {
        setTimeout(() => {
          dispatch("REQUEST_ITEM_PROCESSING", { query: id });
        }, 32);
      };
      const revert = (doUpload) => {
        item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT")).then(doUpload ? upload : () => {
        }).catch(() => {
        });
      };
      const abort = (doUpload) => {
        item2.abortProcessing().then(doUpload ? upload : () => {
        });
      };
      if (item2.status === ItemStatus.PROCESSING_COMPLETE) {
        return revert(state2.options.instantUpload);
      }
      if (item2.status === ItemStatus.PROCESSING) {
        return abort(state2.options.instantUpload);
      }
      if (state2.options.instantUpload) {
        upload();
      }
    }, 0);
  },
  MOVE_ITEM: ({ query: query2, index }) => {
    const item2 = getItemByQuery(state2.items, query2);
    if (!item2)
      return;
    const currentIndex = state2.items.indexOf(item2);
    index = limit(index, 0, state2.items.length - 1);
    if (currentIndex === index)
      return;
    state2.items.splice(index, 0, state2.items.splice(currentIndex, 1)[0]);
  },
  SORT: ({ compare }) => {
    sortItems(state2, compare);
    dispatch("DID_SORT_ITEMS", {
      items: query("GET_ACTIVE_ITEMS")
    });
  },
  ADD_ITEMS: ({ items, index, interactionMethod, success = () => {
  }, failure = () => {
  } }) => {
    let currentIndex = index;
    if (index === -1 || typeof index === "undefined") {
      const insertLocation = query("GET_ITEM_INSERT_LOCATION");
      const totalItems = query("GET_TOTAL_ITEMS");
      currentIndex = insertLocation === "before" ? 0 : totalItems;
    }
    const ignoredFiles = query("GET_IGNORED_FILES");
    const isValidFile = (source) => isFile(source) ? !ignoredFiles.includes(source.name.toLowerCase()) : !isEmpty(source);
    const validItems = items.filter(isValidFile);
    const promises = validItems.map((source) => new Promise((resolve, reject) => {
      dispatch("ADD_ITEM", {
        interactionMethod,
        source: source.source || source,
        success: resolve,
        failure: reject,
        index: currentIndex++,
        options: source.options || {}
      });
    }));
    Promise.all(promises).then(success).catch(failure);
  },
  ADD_ITEM: ({
    source,
    index = -1,
    interactionMethod,
    success = () => {
    },
    failure = () => {
    },
    options = {}
  }) => {
    if (isEmpty(source)) {
      failure({
        error: createResponse("error", 0, "No source"),
        file: null
      });
      return;
    }
    if (isFile(source) && state2.options.ignoredFiles.includes(source.name.toLowerCase())) {
      return;
    }
    if (!hasRoomForItem(state2)) {
      if (state2.options.allowMultiple || !state2.options.allowMultiple && !state2.options.allowReplace) {
        const error2 = createResponse("warning", 0, "Max files");
        dispatch("DID_THROW_MAX_FILES", {
          source,
          error: error2
        });
        failure({ error: error2, file: null });
        return;
      }
      const item3 = getActiveItems(state2.items)[0];
      if (item3.status === ItemStatus.PROCESSING_COMPLETE || item3.status === ItemStatus.PROCESSING_REVERT_ERROR) {
        const forceRevert = query("GET_FORCE_REVERT");
        item3.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), forceRevert).then(() => {
          if (!forceRevert)
            return;
          dispatch("ADD_ITEM", {
            source,
            index,
            interactionMethod,
            success,
            failure,
            options
          });
        }).catch(() => {
        });
        if (forceRevert)
          return;
      }
      dispatch("REMOVE_ITEM", { query: item3.id });
    }
    const origin = options.type === "local" ? FileOrigin.LOCAL : options.type === "limbo" ? FileOrigin.LIMBO : FileOrigin.INPUT;
    const item2 = createItem(origin, origin === FileOrigin.INPUT ? null : source, options.file);
    Object.keys(options.metadata || {}).forEach((key) => {
      item2.setMetadata(key, options.metadata[key]);
    });
    applyFilters("DID_CREATE_ITEM", item2, { query, dispatch });
    const itemInsertLocation = query("GET_ITEM_INSERT_LOCATION");
    if (!state2.options.itemInsertLocationFreedom) {
      index = itemInsertLocation === "before" ? -1 : state2.items.length;
    }
    insertItem(state2.items, item2, index);
    if (isFunction(itemInsertLocation) && source) {
      sortItems(state2, itemInsertLocation);
    }
    const id = item2.id;
    item2.on("init", () => {
      dispatch("DID_INIT_ITEM", { id });
    });
    item2.on("load-init", () => {
      dispatch("DID_START_ITEM_LOAD", { id });
    });
    item2.on("load-meta", () => {
      dispatch("DID_UPDATE_ITEM_META", { id });
    });
    item2.on("load-progress", (progress) => {
      dispatch("DID_UPDATE_ITEM_LOAD_PROGRESS", { id, progress });
    });
    item2.on("load-request-error", (error2) => {
      const mainStatus = dynamicLabel(state2.options.labelFileLoadError)(error2);
      if (error2.code >= 400 && error2.code < 500) {
        dispatch("DID_THROW_ITEM_INVALID", {
          id,
          error: error2,
          status: {
            main: mainStatus,
            sub: `${error2.code} (${error2.body})`
          }
        });
        failure({ error: error2, file: createItemAPI(item2) });
        return;
      }
      dispatch("DID_THROW_ITEM_LOAD_ERROR", {
        id,
        error: error2,
        status: {
          main: mainStatus,
          sub: state2.options.labelTapToRetry
        }
      });
    });
    item2.on("load-file-error", (error2) => {
      dispatch("DID_THROW_ITEM_INVALID", {
        id,
        error: error2.status,
        status: error2.status
      });
      failure({ error: error2.status, file: createItemAPI(item2) });
    });
    item2.on("load-abort", () => {
      dispatch("REMOVE_ITEM", { query: id });
    });
    item2.on("load-skip", () => {
      dispatch("COMPLETE_LOAD_ITEM", {
        query: id,
        item: item2,
        data: {
          source,
          success
        }
      });
    });
    item2.on("load", () => {
      const handleAdd = (shouldAdd) => {
        if (!shouldAdd) {
          dispatch("REMOVE_ITEM", {
            query: id
          });
          return;
        }
        item2.on("metadata-update", (change) => {
          dispatch("DID_UPDATE_ITEM_METADATA", { id, change });
        });
        applyFilterChain("SHOULD_PREPARE_OUTPUT", false, { item: item2, query }).then((shouldPrepareOutput) => {
          const beforePrepareFile = query("GET_BEFORE_PREPARE_FILE");
          if (beforePrepareFile)
            shouldPrepareOutput = beforePrepareFile(item2, shouldPrepareOutput);
          const loadComplete = () => {
            dispatch("COMPLETE_LOAD_ITEM", {
              query: id,
              item: item2,
              data: {
                source,
                success
              }
            });
            listUpdated(dispatch, state2);
          };
          if (shouldPrepareOutput) {
            dispatch("REQUEST_PREPARE_OUTPUT", {
              query: id,
              item: item2,
              success: (file2) => {
                dispatch("DID_PREPARE_OUTPUT", { id, file: file2 });
                loadComplete();
              }
            }, true);
            return;
          }
          loadComplete();
        });
      };
      applyFilterChain("DID_LOAD_ITEM", item2, { query, dispatch }).then(() => {
        optionalPromise(query("GET_BEFORE_ADD_FILE"), createItemAPI(item2)).then(handleAdd);
      }).catch((e) => {
        if (!e || !e.error || !e.status)
          return handleAdd(false);
        dispatch("DID_THROW_ITEM_INVALID", {
          id,
          error: e.error,
          status: e.status
        });
      });
    });
    item2.on("process-start", () => {
      dispatch("DID_START_ITEM_PROCESSING", { id });
    });
    item2.on("process-progress", (progress) => {
      dispatch("DID_UPDATE_ITEM_PROCESS_PROGRESS", { id, progress });
    });
    item2.on("process-error", (error2) => {
      dispatch("DID_THROW_ITEM_PROCESSING_ERROR", {
        id,
        error: error2,
        status: {
          main: dynamicLabel(state2.options.labelFileProcessingError)(error2),
          sub: state2.options.labelTapToRetry
        }
      });
    });
    item2.on("process-revert-error", (error2) => {
      dispatch("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
        id,
        error: error2,
        status: {
          main: dynamicLabel(state2.options.labelFileProcessingRevertError)(error2),
          sub: state2.options.labelTapToRetry
        }
      });
    });
    item2.on("process-complete", (serverFileReference) => {
      dispatch("DID_COMPLETE_ITEM_PROCESSING", {
        id,
        error: null,
        serverFileReference
      });
      dispatch("DID_DEFINE_VALUE", { id, value: serverFileReference });
    });
    item2.on("process-abort", () => {
      dispatch("DID_ABORT_ITEM_PROCESSING", { id });
    });
    item2.on("process-revert", () => {
      dispatch("DID_REVERT_ITEM_PROCESSING", { id });
      dispatch("DID_DEFINE_VALUE", { id, value: null });
    });
    dispatch("DID_ADD_ITEM", { id, index, interactionMethod });
    listUpdated(dispatch, state2);
    const { url, load, restore, fetch } = state2.options.server || {};
    item2.load(source, createFileLoader(origin === FileOrigin.INPUT ? isString(source) && isExternalURL(source) ? fetch ? createFetchFunction(url, fetch) : fetchBlob : fetchBlob : origin === FileOrigin.LIMBO ? createFetchFunction(url, restore) : createFetchFunction(url, load)), (file2, success2, error2) => {
      applyFilterChain("LOAD_FILE", file2, { query }).then(success2).catch(error2);
    });
  },
  REQUEST_PREPARE_OUTPUT: ({ item: item2, success, failure = () => {
  } }) => {
    const err = {
      error: createResponse("error", 0, "Item not found"),
      file: null
    };
    if (item2.archived)
      return failure(err);
    applyFilterChain("PREPARE_OUTPUT", item2.file, { query, item: item2 }).then((result) => {
      applyFilterChain("COMPLETE_PREPARE_OUTPUT", result, { query, item: item2 }).then((result2) => {
        if (item2.archived)
          return failure(err);
        success(result2);
      });
    });
  },
  COMPLETE_LOAD_ITEM: ({ item: item2, data: data2 }) => {
    const { success, source } = data2;
    const itemInsertLocation = query("GET_ITEM_INSERT_LOCATION");
    if (isFunction(itemInsertLocation) && source) {
      sortItems(state2, itemInsertLocation);
    }
    dispatch("DID_LOAD_ITEM", {
      id: item2.id,
      error: null,
      serverFileReference: item2.origin === FileOrigin.INPUT ? null : source
    });
    success(createItemAPI(item2));
    if (item2.origin === FileOrigin.LOCAL) {
      dispatch("DID_LOAD_LOCAL_ITEM", { id: item2.id });
      return;
    }
    if (item2.origin === FileOrigin.LIMBO) {
      dispatch("DID_COMPLETE_ITEM_PROCESSING", {
        id: item2.id,
        error: null,
        serverFileReference: source
      });
      dispatch("DID_DEFINE_VALUE", {
        id: item2.id,
        value: item2.serverId || source
      });
      return;
    }
    if (query("IS_ASYNC") && state2.options.instantUpload) {
      dispatch("REQUEST_ITEM_PROCESSING", { query: item2.id });
    }
  },
  RETRY_ITEM_LOAD: getItemByQueryFromState(state2, (item2) => {
    item2.retryLoad();
  }),
  REQUEST_ITEM_PREPARE: getItemByQueryFromState(state2, (item2, success, failure) => {
    dispatch("REQUEST_PREPARE_OUTPUT", {
      query: item2.id,
      item: item2,
      success: (file2) => {
        dispatch("DID_PREPARE_OUTPUT", { id: item2.id, file: file2 });
        success({
          file: item2,
          output: file2
        });
      },
      failure
    }, true);
  }),
  REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2, success, failure) => {
    const itemCanBeQueuedForProcessing = item2.status === ItemStatus.IDLE || item2.status === ItemStatus.PROCESSING_ERROR;
    if (!itemCanBeQueuedForProcessing) {
      const processNow = () => dispatch("REQUEST_ITEM_PROCESSING", { query: item2, success, failure });
      const process = () => document.hidden ? processNow() : setTimeout(processNow, 32);
      if (item2.status === ItemStatus.PROCESSING_COMPLETE || item2.status === ItemStatus.PROCESSING_REVERT_ERROR) {
        item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT")).then(process).catch(() => {
        });
      } else if (item2.status === ItemStatus.PROCESSING) {
        item2.abortProcessing().then(process);
      }
      return;
    }
    if (item2.status === ItemStatus.PROCESSING_QUEUED)
      return;
    item2.requestProcessing();
    dispatch("DID_REQUEST_ITEM_PROCESSING", { id: item2.id });
    dispatch("PROCESS_ITEM", { query: item2, success, failure }, true);
  }),
  PROCESS_ITEM: getItemByQueryFromState(state2, (item2, success, failure) => {
    const maxParallelUploads = query("GET_MAX_PARALLEL_UPLOADS");
    const totalCurrentUploads = query("GET_ITEMS_BY_STATUS", ItemStatus.PROCESSING).length;
    if (totalCurrentUploads === maxParallelUploads) {
      state2.processingQueue.push({
        id: item2.id,
        success,
        failure
      });
      return;
    }
    if (item2.status === ItemStatus.PROCESSING)
      return;
    const processNext = () => {
      const queueEntry = state2.processingQueue.shift();
      if (!queueEntry)
        return;
      const { id, success: success2, failure: failure2 } = queueEntry;
      const itemReference = getItemByQuery(state2.items, id);
      if (!itemReference || itemReference.archived) {
        processNext();
        return;
      }
      dispatch("PROCESS_ITEM", { query: id, success: success2, failure: failure2 }, true);
    };
    item2.onOnce("process-complete", () => {
      success(createItemAPI(item2));
      processNext();
      const server = state2.options.server;
      const instantUpload = state2.options.instantUpload;
      if (instantUpload && item2.origin === FileOrigin.LOCAL && isFunction(server.remove)) {
        const noop = () => {
        };
        item2.origin = FileOrigin.LIMBO;
        state2.options.server.remove(item2.source, noop, noop);
      }
      const allItemsProcessed = query("GET_ITEMS_BY_STATUS", ItemStatus.PROCESSING_COMPLETE).length === state2.items.length;
      if (allItemsProcessed) {
        dispatch("DID_COMPLETE_ITEM_PROCESSING_ALL");
      }
    });
    item2.onOnce("process-error", (error2) => {
      failure({ error: error2, file: createItemAPI(item2) });
      processNext();
    });
    const options = state2.options;
    item2.process(createFileProcessor(createProcessorFunction(options.server.url, options.server.process, options.name, {
      chunkTransferId: item2.transferId,
      chunkServer: options.server.patch,
      chunkUploads: options.chunkUploads,
      chunkForce: options.chunkForce,
      chunkSize: options.chunkSize,
      chunkRetryDelays: options.chunkRetryDelays
    }), {
      allowMinimumUploadDuration: query("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
    }), (file2, success2, error2) => {
      applyFilterChain("PREPARE_OUTPUT", file2, { query, item: item2 }).then((file3) => {
        dispatch("DID_PREPARE_OUTPUT", { id: item2.id, file: file3 });
        success2(file3);
      }).catch(error2);
    });
  }),
  RETRY_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    dispatch("REQUEST_ITEM_PROCESSING", { query: item2 });
  }),
  REQUEST_REMOVE_ITEM: getItemByQueryFromState(state2, (item2) => {
    optionalPromise(query("GET_BEFORE_REMOVE_FILE"), createItemAPI(item2)).then((shouldRemove) => {
      if (!shouldRemove) {
        return;
      }
      dispatch("REMOVE_ITEM", { query: item2 });
    });
  }),
  RELEASE_ITEM: getItemByQueryFromState(state2, (item2) => {
    item2.release();
  }),
  REMOVE_ITEM: getItemByQueryFromState(state2, (item2, success, failure, options) => {
    const removeFromView = () => {
      const id = item2.id;
      getItemById(state2.items, id).archive();
      dispatch("DID_REMOVE_ITEM", { error: null, id, item: item2 });
      listUpdated(dispatch, state2);
      success(createItemAPI(item2));
    };
    const server = state2.options.server;
    if (item2.origin === FileOrigin.LOCAL && server && isFunction(server.remove) && options.remove !== false) {
      dispatch("DID_START_ITEM_REMOVE", { id: item2.id });
      server.remove(item2.source, () => removeFromView(), (status) => {
        dispatch("DID_THROW_ITEM_REMOVE_ERROR", {
          id: item2.id,
          error: createResponse("error", 0, status, null),
          status: {
            main: dynamicLabel(state2.options.labelFileRemoveError)(status),
            sub: state2.options.labelTapToRetry
          }
        });
      });
    } else {
      if (options.revert && item2.origin !== FileOrigin.LOCAL && item2.serverId !== null || state2.options.chunkUploads && item2.file.size > state2.options.chunkSize || state2.options.chunkUploads && state2.options.chunkForce) {
        item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT"));
      }
      removeFromView();
    }
  }),
  ABORT_ITEM_LOAD: getItemByQueryFromState(state2, (item2) => {
    item2.abortLoad();
  }),
  ABORT_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    if (item2.serverId) {
      dispatch("REVERT_ITEM_PROCESSING", { id: item2.id });
      return;
    }
    item2.abortProcessing().then(() => {
      const shouldRemove = state2.options.instantUpload;
      if (shouldRemove) {
        dispatch("REMOVE_ITEM", { query: item2.id });
      }
    });
  }),
  REQUEST_REVERT_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    if (!state2.options.instantUpload) {
      dispatch("REVERT_ITEM_PROCESSING", { query: item2 });
      return;
    }
    const handleRevert2 = (shouldRevert) => {
      if (!shouldRevert)
        return;
      dispatch("REVERT_ITEM_PROCESSING", { query: item2 });
    };
    const fn2 = query("GET_BEFORE_REMOVE_FILE");
    if (!fn2) {
      return handleRevert2(true);
    }
    const requestRemoveResult = fn2(createItemAPI(item2));
    if (requestRemoveResult == null) {
      return handleRevert2(true);
    }
    if (typeof requestRemoveResult === "boolean") {
      return handleRevert2(requestRemoveResult);
    }
    if (typeof requestRemoveResult.then === "function") {
      requestRemoveResult.then(handleRevert2);
    }
  }),
  REVERT_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT")).then(() => {
      const shouldRemove = state2.options.instantUpload || isMockItem(item2);
      if (shouldRemove) {
        dispatch("REMOVE_ITEM", { query: item2.id });
      }
    }).catch(() => {
    });
  }),
  SET_OPTIONS: ({ options }) => {
    const optionKeys = Object.keys(options);
    const prioritizedOptionKeys = PrioritizedOptions.filter((key) => optionKeys.includes(key));
    const orderedOptionKeys = [
      ...prioritizedOptionKeys,
      ...Object.keys(options).filter((key) => !prioritizedOptionKeys.includes(key))
    ];
    orderedOptionKeys.forEach((key) => {
      dispatch(`SET_${fromCamels(key, "_").toUpperCase()}`, {
        value: options[key]
      });
    });
  }
});
const PrioritizedOptions = [
  "server"
];
const formatFilename = (name2) => name2;
const createElement$1 = (tagName) => {
  return document.createElement(tagName);
};
const text = (node, value) => {
  let textNode = node.childNodes[0];
  if (!textNode) {
    textNode = document.createTextNode(value);
    node.appendChild(textNode);
  } else if (value !== textNode.nodeValue) {
    textNode.nodeValue = value;
  }
};
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees % 360 - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};
const describeArc = (x, y, radius, startAngle, endAngle, arcSweep) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
};
const percentageArc = (x, y, radius, from, to) => {
  let arcSweep = 1;
  if (to > from && to - from <= 0.5) {
    arcSweep = 0;
  }
  if (from > to && from - to >= 0.5) {
    arcSweep = 0;
  }
  return describeArc(x, y, radius, Math.min(0.9999, from) * 360, Math.min(0.9999, to) * 360, arcSweep);
};
const create = ({ root: root2, props }) => {
  props.spin = false;
  props.progress = 0;
  props.opacity = 0;
  const svg2 = createElement("svg");
  root2.ref.path = createElement("path", {
    "stroke-width": 2,
    "stroke-linecap": "round"
  });
  svg2.appendChild(root2.ref.path);
  root2.ref.svg = svg2;
  root2.appendChild(svg2);
};
const write = ({ root: root2, props }) => {
  if (props.opacity === 0) {
    return;
  }
  if (props.align) {
    root2.element.dataset.align = props.align;
  }
  const ringStrokeWidth = parseInt(attr(root2.ref.path, "stroke-width"), 10);
  const size = root2.rect.element.width * 0.5;
  let ringFrom = 0;
  let ringTo = 0;
  if (props.spin) {
    ringFrom = 0;
    ringTo = 0.5;
  } else {
    ringFrom = 0;
    ringTo = props.progress;
  }
  const coordinates = percentageArc(size, size, size - ringStrokeWidth, ringFrom, ringTo);
  attr(root2.ref.path, "d", coordinates);
  attr(root2.ref.path, "stroke-opacity", props.spin || props.progress > 0 ? 1 : 0);
};
const progressIndicator = createView({
  tag: "div",
  name: "progress-indicator",
  ignoreRectUpdate: true,
  ignoreRect: true,
  create,
  write,
  mixins: {
    apis: ["progress", "spin", "align"],
    styles: ["opacity"],
    animations: {
      opacity: { type: "tween", duration: 500 },
      progress: {
        type: "spring",
        stiffness: 0.95,
        damping: 0.65,
        mass: 10
      }
    }
  }
});
const create$1 = ({ root: root2, props }) => {
  root2.element.innerHTML = (props.icon || "") + `<span>${props.label}</span>`;
  props.isDisabled = false;
};
const write$1 = ({ root: root2, props }) => {
  const { isDisabled } = props;
  const shouldDisable = root2.query("GET_DISABLED") || props.opacity === 0;
  if (shouldDisable && !isDisabled) {
    props.isDisabled = true;
    attr(root2.element, "disabled", "disabled");
  } else if (!shouldDisable && isDisabled) {
    props.isDisabled = false;
    root2.element.removeAttribute("disabled");
  }
};
const fileActionButton = createView({
  tag: "button",
  attributes: {
    type: "button"
  },
  ignoreRect: true,
  ignoreRectUpdate: true,
  name: "file-action-button",
  mixins: {
    apis: ["label"],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    },
    listeners: true
  },
  create: create$1,
  write: write$1
});
const toNaturalFileSize = (bytes, decimalSeparator = ".", base = 1e3, options = {}) => {
  const {
    labelBytes = "bytes",
    labelKilobytes = "KB",
    labelMegabytes = "MB",
    labelGigabytes = "GB"
  } = options;
  bytes = Math.round(Math.abs(bytes));
  const KB = base;
  const MB = base * base;
  const GB = base * base * base;
  if (bytes < KB) {
    return `${bytes} ${labelBytes}`;
  }
  if (bytes < MB) {
    return `${Math.floor(bytes / KB)} ${labelKilobytes}`;
  }
  if (bytes < GB) {
    return `${removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator)} ${labelMegabytes}`;
  }
  return `${removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator)} ${labelGigabytes}`;
};
const removeDecimalsWhenZero = (value, decimalCount, separator) => {
  return value.toFixed(decimalCount).split(".").filter((part) => part !== "0").join(separator);
};
const create$2 = ({ root: root2, props }) => {
  const fileName = createElement$1("span");
  fileName.className = "filepond--file-info-main";
  attr(fileName, "aria-hidden", "true");
  root2.appendChild(fileName);
  root2.ref.fileName = fileName;
  const fileSize = createElement$1("span");
  fileSize.className = "filepond--file-info-sub";
  root2.appendChild(fileSize);
  root2.ref.fileSize = fileSize;
  text(fileSize, root2.query("GET_LABEL_FILE_WAITING_FOR_SIZE"));
  text(fileName, formatFilename(root2.query("GET_ITEM_NAME", props.id)));
};
const updateFile = ({ root: root2, props }) => {
  text(root2.ref.fileSize, toNaturalFileSize(root2.query("GET_ITEM_SIZE", props.id), ".", root2.query("GET_FILE_SIZE_BASE"), root2.query("GET_FILE_SIZE_LABELS", root2.query)));
  text(root2.ref.fileName, formatFilename(root2.query("GET_ITEM_NAME", props.id)));
};
const updateFileSizeOnError = ({ root: root2, props }) => {
  if (isInt(root2.query("GET_ITEM_SIZE", props.id))) {
    updateFile({ root: root2, props });
    return;
  }
  text(root2.ref.fileSize, root2.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
};
const fileInfo = createView({
  name: "file-info",
  ignoreRect: true,
  ignoreRectUpdate: true,
  write: createRoute({
    DID_LOAD_ITEM: updateFile,
    DID_UPDATE_ITEM_META: updateFile,
    DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
    DID_THROW_ITEM_INVALID: updateFileSizeOnError
  }),
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", __spreadProps(__spreadValues({}, root2), { view: root2 }));
  },
  create: create$2,
  mixins: {
    styles: ["translateX", "translateY"],
    animations: {
      translateX: "spring",
      translateY: "spring"
    }
  }
});
const toPercentage = (value) => Math.round(value * 100);
const create$3 = ({ root: root2 }) => {
  const main = createElement$1("span");
  main.className = "filepond--file-status-main";
  root2.appendChild(main);
  root2.ref.main = main;
  const sub = createElement$1("span");
  sub.className = "filepond--file-status-sub";
  root2.appendChild(sub);
  root2.ref.sub = sub;
  didSetItemLoadProgress({ root: root2, action: { progress: null } });
};
const didSetItemLoadProgress = ({ root: root2, action }) => {
  const title = action.progress === null ? root2.query("GET_LABEL_FILE_LOADING") : `${root2.query("GET_LABEL_FILE_LOADING")} ${toPercentage(action.progress)}%`;
  text(root2.ref.main, title);
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_CANCEL"));
};
const didSetItemProcessProgress = ({ root: root2, action }) => {
  const title = action.progress === null ? root2.query("GET_LABEL_FILE_PROCESSING") : `${root2.query("GET_LABEL_FILE_PROCESSING")} ${toPercentage(action.progress)}%`;
  text(root2.ref.main, title);
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_CANCEL"));
};
const didRequestItemProcessing = ({ root: root2 }) => {
  text(root2.ref.main, root2.query("GET_LABEL_FILE_PROCESSING"));
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_CANCEL"));
};
const didAbortItemProcessing = ({ root: root2 }) => {
  text(root2.ref.main, root2.query("GET_LABEL_FILE_PROCESSING_ABORTED"));
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_RETRY"));
};
const didCompleteItemProcessing = ({ root: root2 }) => {
  text(root2.ref.main, root2.query("GET_LABEL_FILE_PROCESSING_COMPLETE"));
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_UNDO"));
};
const clear = ({ root: root2 }) => {
  text(root2.ref.main, "");
  text(root2.ref.sub, "");
};
const error = ({ root: root2, action }) => {
  text(root2.ref.main, action.status.main);
  text(root2.ref.sub, action.status.sub);
};
const fileStatus = createView({
  name: "file-status",
  ignoreRect: true,
  ignoreRectUpdate: true,
  write: createRoute({
    DID_LOAD_ITEM: clear,
    DID_REVERT_ITEM_PROCESSING: clear,
    DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
    DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
    DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
    DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
    DID_THROW_ITEM_LOAD_ERROR: error,
    DID_THROW_ITEM_INVALID: error,
    DID_THROW_ITEM_PROCESSING_ERROR: error,
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: error,
    DID_THROW_ITEM_REMOVE_ERROR: error
  }),
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", __spreadProps(__spreadValues({}, root2), { view: root2 }));
  },
  create: create$3,
  mixins: {
    styles: ["translateX", "translateY", "opacity"],
    animations: {
      opacity: { type: "tween", duration: 250 },
      translateX: "spring",
      translateY: "spring"
    }
  }
});
const Buttons = {
  AbortItemLoad: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
    action: "ABORT_ITEM_LOAD",
    className: "filepond--action-abort-item-load",
    align: "LOAD_INDICATOR_POSITION"
  },
  RetryItemLoad: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
    action: "RETRY_ITEM_LOAD",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-load",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  RemoveItem: {
    label: "GET_LABEL_BUTTON_REMOVE_ITEM",
    action: "REQUEST_REMOVE_ITEM",
    icon: "GET_ICON_REMOVE",
    className: "filepond--action-remove-item",
    align: "BUTTON_REMOVE_ITEM_POSITION"
  },
  ProcessItem: {
    label: "GET_LABEL_BUTTON_PROCESS_ITEM",
    action: "REQUEST_ITEM_PROCESSING",
    icon: "GET_ICON_PROCESS",
    className: "filepond--action-process-item",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  AbortItemProcessing: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
    action: "ABORT_ITEM_PROCESSING",
    className: "filepond--action-abort-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  RetryItemProcessing: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
    action: "RETRY_ITEM_PROCESSING",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  RevertItemProcessing: {
    label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
    action: "REQUEST_REVERT_ITEM_PROCESSING",
    icon: "GET_ICON_UNDO",
    className: "filepond--action-revert-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  }
};
const ButtonKeys = [];
forin(Buttons, (key) => {
  ButtonKeys.push(key);
});
const calculateFileInfoOffset = (root2) => {
  if (getRemoveIndicatorAligment(root2) === "right")
    return 0;
  const buttonRect = root2.ref.buttonRemoveItem.rect.element;
  return buttonRect.hidden ? null : buttonRect.width + buttonRect.left;
};
const calculateButtonWidth = (root2) => {
  const buttonRect = root2.ref.buttonAbortItemLoad.rect.element;
  return buttonRect.width;
};
const calculateFileVerticalCenterOffset = (root2) => Math.floor(root2.ref.buttonRemoveItem.rect.element.height / 4);
const calculateFileHorizontalCenterOffset = (root2) => Math.floor(root2.ref.buttonRemoveItem.rect.element.left / 2);
const getLoadIndicatorAlignment = (root2) => root2.query("GET_STYLE_LOAD_INDICATOR_POSITION");
const getProcessIndicatorAlignment = (root2) => root2.query("GET_STYLE_PROGRESS_INDICATOR_POSITION");
const getRemoveIndicatorAligment = (root2) => root2.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION");
const DefaultStyle = {
  buttonAbortItemLoad: { opacity: 0 },
  buttonRetryItemLoad: { opacity: 0 },
  buttonRemoveItem: { opacity: 0 },
  buttonProcessItem: { opacity: 0 },
  buttonAbortItemProcessing: { opacity: 0 },
  buttonRetryItemProcessing: { opacity: 0 },
  buttonRevertItemProcessing: { opacity: 0 },
  loadProgressIndicator: { opacity: 0, align: getLoadIndicatorAlignment },
  processProgressIndicator: { opacity: 0, align: getProcessIndicatorAlignment },
  processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
  info: { translateX: 0, translateY: 0, opacity: 0 },
  status: { translateX: 0, translateY: 0, opacity: 0 }
};
const IdleStyle = {
  buttonRemoveItem: { opacity: 1 },
  buttonProcessItem: { opacity: 1 },
  info: { translateX: calculateFileInfoOffset },
  status: { translateX: calculateFileInfoOffset }
};
const ProcessingStyle = {
  buttonAbortItemProcessing: { opacity: 1 },
  processProgressIndicator: { opacity: 1 },
  status: { opacity: 1 }
};
const StyleMap = {
  DID_THROW_ITEM_INVALID: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { translateX: calculateFileInfoOffset, opacity: 1 }
  },
  DID_START_ITEM_LOAD: {
    buttonAbortItemLoad: { opacity: 1 },
    loadProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_LOAD_ERROR: {
    buttonRetryItemLoad: { opacity: 1 },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { opacity: 1 }
  },
  DID_START_ITEM_REMOVE: {
    processProgressIndicator: { opacity: 1, align: getRemoveIndicatorAligment },
    info: { translateX: calculateFileInfoOffset },
    status: { opacity: 0 }
  },
  DID_THROW_ITEM_REMOVE_ERROR: {
    processProgressIndicator: { opacity: 0, align: getRemoveIndicatorAligment },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { opacity: 1, translateX: calculateFileInfoOffset }
  },
  DID_LOAD_ITEM: IdleStyle,
  DID_LOAD_LOCAL_ITEM: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { translateX: calculateFileInfoOffset }
  },
  DID_START_ITEM_PROCESSING: ProcessingStyle,
  DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
  DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
  DID_COMPLETE_ITEM_PROCESSING: {
    buttonRevertItemProcessing: { opacity: 1 },
    info: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_PROCESSING_ERROR: {
    buttonRemoveItem: { opacity: 1 },
    buttonRetryItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset }
  },
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
    buttonRevertItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { opacity: 1 }
  },
  DID_ABORT_ITEM_PROCESSING: {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { opacity: 1 }
  },
  DID_REVERT_ITEM_PROCESSING: IdleStyle
};
const processingCompleteIndicatorView = createView({
  create: ({ root: root2 }) => {
    root2.element.innerHTML = root2.query("GET_ICON_DONE");
  },
  name: "processing-complete-indicator",
  ignoreRect: true,
  mixins: {
    styles: ["scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
});
const create$4 = ({ root: root2, props }) => {
  const LocalButtons = Object.keys(Buttons).reduce((prev, curr) => {
    prev[curr] = __spreadValues({}, Buttons[curr]);
    return prev;
  }, {});
  const { id } = props;
  const allowRevert = root2.query("GET_ALLOW_REVERT");
  const allowRemove = root2.query("GET_ALLOW_REMOVE");
  const allowProcess = root2.query("GET_ALLOW_PROCESS");
  const instantUpload = root2.query("GET_INSTANT_UPLOAD");
  const isAsync2 = root2.query("IS_ASYNC");
  const alignRemoveItemButton = root2.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
  let buttonFilter;
  if (isAsync2) {
    if (allowProcess && !allowRevert) {
      buttonFilter = (key) => !/RevertItemProcessing/.test(key);
    } else if (!allowProcess && allowRevert) {
      buttonFilter = (key) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(key);
    } else if (!allowProcess && !allowRevert) {
      buttonFilter = (key) => !/Process/.test(key);
    }
  } else {
    buttonFilter = (key) => !/Process/.test(key);
  }
  const enabledButtons = buttonFilter ? ButtonKeys.filter(buttonFilter) : ButtonKeys.concat();
  if (instantUpload && allowRevert) {
    LocalButtons["RevertItemProcessing"].label = "GET_LABEL_BUTTON_REMOVE_ITEM";
    LocalButtons["RevertItemProcessing"].icon = "GET_ICON_REMOVE";
  }
  if (isAsync2 && !allowRevert) {
    const map2 = StyleMap["DID_COMPLETE_ITEM_PROCESSING"];
    map2.info.translateX = calculateFileHorizontalCenterOffset;
    map2.info.translateY = calculateFileVerticalCenterOffset;
    map2.status.translateY = calculateFileVerticalCenterOffset;
    map2.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  if (isAsync2 && !allowProcess) {
    [
      "DID_START_ITEM_PROCESSING",
      "DID_REQUEST_ITEM_PROCESSING",
      "DID_UPDATE_ITEM_PROCESS_PROGRESS",
      "DID_THROW_ITEM_PROCESSING_ERROR"
    ].forEach((key) => {
      StyleMap[key].status.translateY = calculateFileVerticalCenterOffset;
    });
    StyleMap["DID_THROW_ITEM_PROCESSING_ERROR"].status.translateX = calculateButtonWidth;
  }
  if (alignRemoveItemButton && allowRevert) {
    LocalButtons["RevertItemProcessing"].align = "BUTTON_REMOVE_ITEM_POSITION";
    const map2 = StyleMap["DID_COMPLETE_ITEM_PROCESSING"];
    map2.info.translateX = calculateFileInfoOffset;
    map2.status.translateY = calculateFileVerticalCenterOffset;
    map2.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  if (!allowRemove) {
    LocalButtons["RemoveItem"].disabled = true;
  }
  forin(LocalButtons, (key, definition) => {
    const buttonView = root2.createChildView(fileActionButton, {
      label: root2.query(definition.label),
      icon: root2.query(definition.icon),
      opacity: 0
    });
    if (enabledButtons.includes(key)) {
      root2.appendChildView(buttonView);
    }
    if (definition.disabled) {
      buttonView.element.setAttribute("disabled", "disabled");
      buttonView.element.setAttribute("hidden", "hidden");
    }
    buttonView.element.dataset.align = root2.query(`GET_STYLE_${definition.align}`);
    buttonView.element.classList.add(definition.className);
    buttonView.on("click", (e) => {
      e.stopPropagation();
      if (definition.disabled)
        return;
      root2.dispatch(definition.action, { query: id });
    });
    root2.ref[`button${key}`] = buttonView;
  });
  root2.ref.processingCompleteIndicator = root2.appendChildView(root2.createChildView(processingCompleteIndicatorView));
  root2.ref.processingCompleteIndicator.element.dataset.align = root2.query(`GET_STYLE_BUTTON_PROCESS_ITEM_POSITION`);
  root2.ref.info = root2.appendChildView(root2.createChildView(fileInfo, { id }));
  root2.ref.status = root2.appendChildView(root2.createChildView(fileStatus, { id }));
  const loadIndicatorView = root2.appendChildView(root2.createChildView(progressIndicator, {
    opacity: 0,
    align: root2.query(`GET_STYLE_LOAD_INDICATOR_POSITION`)
  }));
  loadIndicatorView.element.classList.add("filepond--load-indicator");
  root2.ref.loadProgressIndicator = loadIndicatorView;
  const progressIndicatorView = root2.appendChildView(root2.createChildView(progressIndicator, {
    opacity: 0,
    align: root2.query(`GET_STYLE_PROGRESS_INDICATOR_POSITION`)
  }));
  progressIndicatorView.element.classList.add("filepond--process-indicator");
  root2.ref.processProgressIndicator = progressIndicatorView;
  root2.ref.activeStyles = [];
};
const write$2 = ({ root: root2, actions: actions2, props }) => {
  route({ root: root2, actions: actions2, props });
  let action = actions2.concat().filter((action2) => /^DID_/.test(action2.type)).reverse().find((action2) => StyleMap[action2.type]);
  if (action) {
    root2.ref.activeStyles = [];
    const stylesToApply = StyleMap[action.type];
    forin(DefaultStyle, (name2, defaultStyles) => {
      const control = root2.ref[name2];
      forin(defaultStyles, (key, defaultValue) => {
        const value = stylesToApply[name2] && typeof stylesToApply[name2][key] !== "undefined" ? stylesToApply[name2][key] : defaultValue;
        root2.ref.activeStyles.push({ control, key, value });
      });
    });
  }
  root2.ref.activeStyles.forEach(({ control, key, value }) => {
    control[key] = typeof value === "function" ? value(root2) : value;
  });
};
const route = createRoute({
  DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: root2, action }) => {
    root2.ref.buttonAbortItemProcessing.label = action.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: root2, action }) => {
    root2.ref.buttonAbortItemLoad.label = action.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: root2, action }) => {
    root2.ref.buttonAbortItemRemoval.label = action.value;
  },
  DID_REQUEST_ITEM_PROCESSING: ({ root: root2 }) => {
    root2.ref.processProgressIndicator.spin = true;
    root2.ref.processProgressIndicator.progress = 0;
  },
  DID_START_ITEM_LOAD: ({ root: root2 }) => {
    root2.ref.loadProgressIndicator.spin = true;
    root2.ref.loadProgressIndicator.progress = 0;
  },
  DID_START_ITEM_REMOVE: ({ root: root2 }) => {
    root2.ref.processProgressIndicator.spin = true;
    root2.ref.processProgressIndicator.progress = 0;
  },
  DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: root2, action }) => {
    root2.ref.loadProgressIndicator.spin = false;
    root2.ref.loadProgressIndicator.progress = action.progress;
  },
  DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: root2, action }) => {
    root2.ref.processProgressIndicator.spin = false;
    root2.ref.processProgressIndicator.progress = action.progress;
  }
});
const file = createView({
  create: create$4,
  write: write$2,
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", __spreadProps(__spreadValues({}, root2), { view: root2 }));
  },
  name: "file"
});
const create$5 = ({ root: root2, props }) => {
  root2.ref.fileName = createElement$1("legend");
  root2.appendChild(root2.ref.fileName);
  root2.ref.file = root2.appendChildView(root2.createChildView(file, { id: props.id }));
  root2.ref.data = false;
};
const didLoadItem = ({ root: root2, props }) => {
  text(root2.ref.fileName, formatFilename(root2.query("GET_ITEM_NAME", props.id)));
};
const fileWrapper = createView({
  create: create$5,
  ignoreRect: true,
  write: createRoute({
    DID_LOAD_ITEM: didLoadItem
  }),
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", __spreadProps(__spreadValues({}, root2), { view: root2 }));
  },
  tag: "fieldset",
  name: "file-wrapper"
});
const PANEL_SPRING_PROPS = { type: "spring", damping: 0.6, mass: 7 };
const create$6 = ({ root: root2, props }) => {
  [
    {
      name: "top"
    },
    {
      name: "center",
      props: {
        translateY: null,
        scaleY: null
      },
      mixins: {
        animations: {
          scaleY: PANEL_SPRING_PROPS
        },
        styles: ["translateY", "scaleY"]
      }
    },
    {
      name: "bottom",
      props: {
        translateY: null
      },
      mixins: {
        animations: {
          translateY: PANEL_SPRING_PROPS
        },
        styles: ["translateY"]
      }
    }
  ].forEach((section) => {
    createSection(root2, section, props.name);
  });
  root2.element.classList.add(`filepond--${props.name}`);
  root2.ref.scalable = null;
};
const createSection = (root2, section, className) => {
  const viewConstructor = createView({
    name: `panel-${section.name} filepond--${className}`,
    mixins: section.mixins,
    ignoreRectUpdate: true
  });
  const view = root2.createChildView(viewConstructor, section.props);
  root2.ref[section.name] = root2.appendChildView(view);
};
const write$3 = ({ root: root2, props }) => {
  if (root2.ref.scalable === null || props.scalable !== root2.ref.scalable) {
    root2.ref.scalable = isBoolean(props.scalable) ? props.scalable : true;
    root2.element.dataset.scalable = root2.ref.scalable;
  }
  if (!props.height)
    return;
  const topRect = root2.ref.top.rect.element;
  const bottomRect = root2.ref.bottom.rect.element;
  const height = Math.max(topRect.height + bottomRect.height, props.height);
  root2.ref.center.translateY = topRect.height;
  root2.ref.center.scaleY = (height - topRect.height - bottomRect.height) / 100;
  root2.ref.bottom.translateY = height - bottomRect.height;
};
const panel = createView({
  name: "panel",
  read: ({ root: root2, props }) => props.heightCurrent = root2.ref.bottom.translateY,
  write: write$3,
  create: create$6,
  ignoreRect: true,
  mixins: {
    apis: ["height", "heightCurrent", "scalable"]
  }
});
const createDragHelper = (items) => {
  const itemIds = items.map((item2) => item2.id);
  let prevIndex = void 0;
  return {
    setIndex: (index) => {
      prevIndex = index;
    },
    getIndex: () => prevIndex,
    getItemIndex: (item2) => itemIds.indexOf(item2.id)
  };
};
const ITEM_TRANSLATE_SPRING = {
  type: "spring",
  stiffness: 0.75,
  damping: 0.45,
  mass: 10
};
const ITEM_SCALE_SPRING = "spring";
const StateMap = {
  DID_START_ITEM_LOAD: "busy",
  DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
  DID_THROW_ITEM_INVALID: "load-invalid",
  DID_THROW_ITEM_LOAD_ERROR: "load-error",
  DID_LOAD_ITEM: "idle",
  DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
  DID_START_ITEM_REMOVE: "busy",
  DID_START_ITEM_PROCESSING: "busy processing",
  DID_REQUEST_ITEM_PROCESSING: "busy processing",
  DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
  DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
  DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
  DID_ABORT_ITEM_PROCESSING: "cancelled",
  DID_REVERT_ITEM_PROCESSING: "idle"
};
const create$7 = ({ root: root2, props }) => {
  root2.ref.handleClick = (e) => root2.dispatch("DID_ACTIVATE_ITEM", { id: props.id });
  root2.element.id = `filepond--item-${props.id}`;
  root2.element.addEventListener("click", root2.ref.handleClick);
  root2.ref.container = root2.appendChildView(root2.createChildView(fileWrapper, { id: props.id }));
  root2.ref.panel = root2.appendChildView(root2.createChildView(panel, { name: "item-panel" }));
  root2.ref.panel.height = null;
  props.markedForRemoval = false;
  if (!root2.query("GET_ALLOW_REORDER"))
    return;
  root2.element.dataset.dragState = "idle";
  const grab = (e) => {
    if (!e.isPrimary)
      return;
    let removedActivateListener = false;
    const origin = {
      x: e.pageX,
      y: e.pageY
    };
    props.dragOrigin = {
      x: root2.translateX,
      y: root2.translateY
    };
    props.dragCenter = {
      x: e.offsetX,
      y: e.offsetY
    };
    const dragState = createDragHelper(root2.query("GET_ACTIVE_ITEMS"));
    root2.dispatch("DID_GRAB_ITEM", { id: props.id, dragState });
    const drag = (e2) => {
      if (!e2.isPrimary)
        return;
      e2.stopPropagation();
      e2.preventDefault();
      props.dragOffset = {
        x: e2.pageX - origin.x,
        y: e2.pageY - origin.y
      };
      const dist = props.dragOffset.x * props.dragOffset.x + props.dragOffset.y * props.dragOffset.y;
      if (dist > 16 && !removedActivateListener) {
        removedActivateListener = true;
        root2.element.removeEventListener("click", root2.ref.handleClick);
      }
      root2.dispatch("DID_DRAG_ITEM", { id: props.id, dragState });
    };
    const drop2 = (e2) => {
      if (!e2.isPrimary)
        return;
      document.removeEventListener("pointermove", drag);
      document.removeEventListener("pointerup", drop2);
      props.dragOffset = {
        x: e2.pageX - origin.x,
        y: e2.pageY - origin.y
      };
      root2.dispatch("DID_DROP_ITEM", { id: props.id, dragState });
      if (removedActivateListener) {
        setTimeout(() => root2.element.addEventListener("click", root2.ref.handleClick), 0);
      }
    };
    document.addEventListener("pointermove", drag);
    document.addEventListener("pointerup", drop2);
  };
  root2.element.addEventListener("pointerdown", grab);
};
const route$1 = createRoute({
  DID_UPDATE_PANEL_HEIGHT: ({ root: root2, action }) => {
    root2.height = action.height;
  }
});
const write$4 = createRoute({
  DID_GRAB_ITEM: ({ root: root2, props }) => {
    props.dragOrigin = {
      x: root2.translateX,
      y: root2.translateY
    };
  },
  DID_DRAG_ITEM: ({ root: root2 }) => {
    root2.element.dataset.dragState = "drag";
  },
  DID_DROP_ITEM: ({ root: root2, props }) => {
    props.dragOffset = null;
    props.dragOrigin = null;
    root2.element.dataset.dragState = "drop";
  }
}, ({ root: root2, actions: actions2, props, shouldOptimize }) => {
  if (root2.element.dataset.dragState === "drop") {
    if (root2.scaleX <= 1) {
      root2.element.dataset.dragState = "idle";
    }
  }
  let action = actions2.concat().filter((action2) => /^DID_/.test(action2.type)).reverse().find((action2) => StateMap[action2.type]);
  if (action && action.type !== props.currentState) {
    props.currentState = action.type;
    root2.element.dataset.filepondItemState = StateMap[props.currentState] || "";
  }
  const aspectRatio = root2.query("GET_ITEM_PANEL_ASPECT_RATIO") || root2.query("GET_PANEL_ASPECT_RATIO");
  if (!aspectRatio) {
    route$1({ root: root2, actions: actions2, props });
    if (!root2.height && root2.ref.container.rect.element.height > 0) {
      root2.height = root2.ref.container.rect.element.height;
    }
  } else if (!shouldOptimize) {
    root2.height = root2.rect.element.width * aspectRatio;
  }
  if (shouldOptimize) {
    root2.ref.panel.height = null;
  }
  root2.ref.panel.height = root2.height;
});
const item = createView({
  create: create$7,
  write: write$4,
  destroy: ({ root: root2, props }) => {
    root2.element.removeEventListener("click", root2.ref.handleClick);
    root2.dispatch("RELEASE_ITEM", { query: props.id });
  },
  tag: "li",
  name: "item",
  mixins: {
    apis: [
      "id",
      "interactionMethod",
      "markedForRemoval",
      "spawnDate",
      "dragCenter",
      "dragOrigin",
      "dragOffset"
    ],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
    animations: {
      scaleX: ITEM_SCALE_SPRING,
      scaleY: ITEM_SCALE_SPRING,
      translateX: ITEM_TRANSLATE_SPRING,
      translateY: ITEM_TRANSLATE_SPRING,
      opacity: { type: "tween", duration: 150 }
    }
  }
});
var getItemsPerRow = (horizontalSpace, itemWidth) => {
  return Math.max(1, Math.floor((horizontalSpace + 1) / itemWidth));
};
const getItemIndexByPosition = (view, children, positionInView) => {
  if (!positionInView)
    return;
  const horizontalSpace = view.rect.element.width;
  const l = children.length;
  let last = null;
  if (l === 0 || positionInView.top < children[0].rect.element.top)
    return -1;
  const item2 = children[0];
  const itemRect = item2.rect.element;
  const itemHorizontalMargin = itemRect.marginLeft + itemRect.marginRight;
  const itemWidth = itemRect.width + itemHorizontalMargin;
  const itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
  if (itemsPerRow === 1) {
    for (let index = 0; index < l; index++) {
      const child = children[index];
      const childMid = child.rect.outer.top + child.rect.element.height * 0.5;
      if (positionInView.top < childMid) {
        return index;
      }
    }
    return l;
  }
  const itemVerticalMargin = itemRect.marginTop + itemRect.marginBottom;
  const itemHeight = itemRect.height + itemVerticalMargin;
  for (let index = 0; index < l; index++) {
    const indexX = index % itemsPerRow;
    const indexY = Math.floor(index / itemsPerRow);
    const offsetX = indexX * itemWidth;
    const offsetY = indexY * itemHeight;
    const itemTop = offsetY - itemRect.marginTop;
    const itemRight = offsetX + itemWidth;
    const itemBottom = offsetY + itemHeight + itemRect.marginBottom;
    if (positionInView.top < itemBottom && positionInView.top > itemTop) {
      if (positionInView.left < itemRight) {
        return index;
      } else if (index !== l - 1) {
        last = index;
      } else {
        last = null;
      }
    }
  }
  if (last !== null) {
    return last;
  }
  return l;
};
const dropAreaDimensions = {
  height: 0,
  width: 0,
  get getHeight() {
    return this.height;
  },
  set setHeight(val) {
    if (this.height === 0 || val === 0)
      this.height = val;
  },
  get getWidth() {
    return this.width;
  },
  set setWidth(val) {
    if (this.width === 0 || val === 0)
      this.width = val;
  },
  setDimensions: function(height, width) {
    if (this.height === 0 || height === 0)
      this.height = height;
    if (this.width === 0 || width === 0)
      this.width = width;
  }
};
const create$8 = ({ root: root2 }) => {
  attr(root2.element, "role", "list");
  root2.ref.lastItemSpanwDate = Date.now();
};
const addItemView = ({ root: root2, action }) => {
  const { id, index, interactionMethod } = action;
  root2.ref.addIndex = index;
  const now = Date.now();
  let spawnDate = now;
  let opacity = 1;
  if (interactionMethod !== InteractionMethod.NONE) {
    opacity = 0;
    const cooldown = root2.query("GET_ITEM_INSERT_INTERVAL");
    const dist = now - root2.ref.lastItemSpanwDate;
    spawnDate = dist < cooldown ? now + (cooldown - dist) : now;
  }
  root2.ref.lastItemSpanwDate = spawnDate;
  root2.appendChildView(root2.createChildView(item, {
    spawnDate,
    id,
    opacity,
    interactionMethod
  }), index);
};
const moveItem = (item2, x, y, vx = 0, vy = 1) => {
  if (item2.dragOffset) {
    item2.translateX = null;
    item2.translateY = null;
    item2.translateX = item2.dragOrigin.x + item2.dragOffset.x;
    item2.translateY = item2.dragOrigin.y + item2.dragOffset.y;
    item2.scaleX = 1.025;
    item2.scaleY = 1.025;
  } else {
    item2.translateX = x;
    item2.translateY = y;
    if (Date.now() > item2.spawnDate) {
      if (item2.opacity === 0) {
        introItemView(item2, x, y, vx, vy);
      }
      item2.scaleX = 1;
      item2.scaleY = 1;
      item2.opacity = 1;
    }
  }
};
const introItemView = (item2, x, y, vx, vy) => {
  if (item2.interactionMethod === InteractionMethod.NONE) {
    item2.translateX = null;
    item2.translateX = x;
    item2.translateY = null;
    item2.translateY = y;
  } else if (item2.interactionMethod === InteractionMethod.DROP) {
    item2.translateX = null;
    item2.translateX = x - vx * 20;
    item2.translateY = null;
    item2.translateY = y - vy * 10;
    item2.scaleX = 0.8;
    item2.scaleY = 0.8;
  } else if (item2.interactionMethod === InteractionMethod.BROWSE) {
    item2.translateY = null;
    item2.translateY = y - 30;
  } else if (item2.interactionMethod === InteractionMethod.API) {
    item2.translateX = null;
    item2.translateX = x - 30;
    item2.translateY = null;
  }
};
const removeItemView = ({ root: root2, action }) => {
  const { id } = action;
  const view = root2.childViews.find((child) => child.id === id);
  if (!view) {
    return;
  }
  view.scaleX = 0.9;
  view.scaleY = 0.9;
  view.opacity = 0;
  view.markedForRemoval = true;
};
const getItemHeight = (child) => child.rect.element.height + child.rect.element.marginBottom * 0.5 + child.rect.element.marginTop * 0.5;
const getItemWidth = (child) => child.rect.element.width + child.rect.element.marginLeft * 0.5 + child.rect.element.marginRight * 0.5;
const dragItem = ({ root: root2, action }) => {
  const { id, dragState } = action;
  const item2 = root2.query("GET_ITEM", { id });
  const view = root2.childViews.find((child) => child.id === id);
  const numItems = root2.childViews.length;
  const oldIndex = dragState.getItemIndex(item2);
  if (!view)
    return;
  const dragPosition = {
    x: view.dragOrigin.x + view.dragOffset.x + view.dragCenter.x,
    y: view.dragOrigin.y + view.dragOffset.y + view.dragCenter.y
  };
  const dragHeight = getItemHeight(view);
  const dragWidth = getItemWidth(view);
  let cols = Math.floor(root2.rect.outer.width / dragWidth);
  if (cols > numItems)
    cols = numItems;
  const rows = Math.floor(numItems / cols + 1);
  dropAreaDimensions.setHeight = dragHeight * rows;
  dropAreaDimensions.setWidth = dragWidth * cols;
  var location2 = {
    y: Math.floor(dragPosition.y / dragHeight),
    x: Math.floor(dragPosition.x / dragWidth),
    getGridIndex: function getGridIndex() {
      if (dragPosition.y > dropAreaDimensions.getHeight || dragPosition.y < 0 || dragPosition.x > dropAreaDimensions.getWidth || dragPosition.x < 0)
        return oldIndex;
      return this.y * cols + this.x;
    },
    getColIndex: function getColIndex() {
      const items = root2.query("GET_ACTIVE_ITEMS");
      const visibleChildren = root2.childViews.filter((child) => child.rect.element.height);
      const children = items.map((item3) => visibleChildren.find((childView) => childView.id === item3.id));
      const currentIndex2 = children.findIndex((child) => child === view);
      const dragHeight2 = getItemHeight(view);
      const l = children.length;
      let idx = l;
      let childHeight = 0;
      let childBottom = 0;
      let childTop = 0;
      for (let i = 0; i < l; i++) {
        childHeight = getItemHeight(children[i]);
        childTop = childBottom;
        childBottom = childTop + childHeight;
        if (dragPosition.y < childBottom) {
          if (currentIndex2 > i) {
            if (dragPosition.y < childTop + dragHeight2) {
              idx = i;
              break;
            }
            continue;
          }
          idx = i;
          break;
        }
      }
      return idx;
    }
  };
  const index = cols > 1 ? location2.getGridIndex() : location2.getColIndex();
  root2.dispatch("MOVE_ITEM", { query: view, index });
  const currentIndex = dragState.getIndex();
  if (currentIndex === void 0 || currentIndex !== index) {
    dragState.setIndex(index);
    if (currentIndex === void 0)
      return;
    root2.dispatch("DID_REORDER_ITEMS", {
      items: root2.query("GET_ACTIVE_ITEMS"),
      origin: oldIndex,
      target: index
    });
  }
};
const route$2 = createRoute({
  DID_ADD_ITEM: addItemView,
  DID_REMOVE_ITEM: removeItemView,
  DID_DRAG_ITEM: dragItem
});
const write$5 = ({ root: root2, props, actions: actions2, shouldOptimize }) => {
  route$2({ root: root2, props, actions: actions2 });
  const { dragCoordinates } = props;
  const horizontalSpace = root2.rect.element.width;
  const visibleChildren = root2.childViews.filter((child) => child.rect.element.height);
  const children = root2.query("GET_ACTIVE_ITEMS").map((item2) => visibleChildren.find((child) => child.id === item2.id)).filter((item2) => item2);
  const dragIndex = dragCoordinates ? getItemIndexByPosition(root2, children, dragCoordinates) : null;
  const addIndex = root2.ref.addIndex || null;
  root2.ref.addIndex = null;
  let dragIndexOffset = 0;
  let removeIndexOffset = 0;
  let addIndexOffset = 0;
  if (children.length === 0)
    return;
  const childRect = children[0].rect.element;
  const itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
  const itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
  const itemWidth = childRect.width + itemHorizontalMargin;
  const itemHeight = childRect.height + itemVerticalMargin;
  const itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
  if (itemsPerRow === 1) {
    let offsetY = 0;
    let dragOffset = 0;
    children.forEach((child, index) => {
      if (dragIndex) {
        let dist = index - dragIndex;
        if (dist === -2) {
          dragOffset = -itemVerticalMargin * 0.25;
        } else if (dist === -1) {
          dragOffset = -itemVerticalMargin * 0.75;
        } else if (dist === 0) {
          dragOffset = itemVerticalMargin * 0.75;
        } else if (dist === 1) {
          dragOffset = itemVerticalMargin * 0.25;
        } else {
          dragOffset = 0;
        }
      }
      if (shouldOptimize) {
        child.translateX = null;
        child.translateY = null;
      }
      if (!child.markedForRemoval) {
        moveItem(child, 0, offsetY + dragOffset);
      }
      let itemHeight2 = child.rect.element.height + itemVerticalMargin;
      let visualHeight = itemHeight2 * (child.markedForRemoval ? child.opacity : 1);
      offsetY += visualHeight;
    });
  } else {
    let prevX = 0;
    let prevY = 0;
    children.forEach((child, index) => {
      if (index === dragIndex) {
        dragIndexOffset = 1;
      }
      if (index === addIndex) {
        addIndexOffset += 1;
      }
      if (child.markedForRemoval && child.opacity < 0.5) {
        removeIndexOffset -= 1;
      }
      const visualIndex = index + addIndexOffset + dragIndexOffset + removeIndexOffset;
      const indexX = visualIndex % itemsPerRow;
      const indexY = Math.floor(visualIndex / itemsPerRow);
      const offsetX = indexX * itemWidth;
      const offsetY = indexY * itemHeight;
      const vectorX = Math.sign(offsetX - prevX);
      const vectorY = Math.sign(offsetY - prevY);
      prevX = offsetX;
      prevY = offsetY;
      if (child.markedForRemoval)
        return;
      if (shouldOptimize) {
        child.translateX = null;
        child.translateY = null;
      }
      moveItem(child, offsetX, offsetY, vectorX, vectorY);
    });
  }
};
const filterSetItemActions = (child, actions2) => actions2.filter((action) => {
  if (action.data && action.data.id) {
    return child.id === action.data.id;
  }
  return true;
});
const list = createView({
  create: create$8,
  write: write$5,
  tag: "ul",
  name: "list",
  didWriteView: ({ root: root2 }) => {
    root2.childViews.filter((view) => view.markedForRemoval && view.opacity === 0 && view.resting).forEach((view) => {
      view._destroy();
      root2.removeChildView(view);
    });
  },
  filterFrameActionsForChild: filterSetItemActions,
  mixins: {
    apis: ["dragCoordinates"]
  }
});
const create$9 = ({ root: root2, props }) => {
  root2.ref.list = root2.appendChildView(root2.createChildView(list));
  props.dragCoordinates = null;
  props.overflowing = false;
};
const storeDragCoordinates = ({ root: root2, props, action }) => {
  if (!root2.query("GET_ITEM_INSERT_LOCATION_FREEDOM"))
    return;
  props.dragCoordinates = {
    left: action.position.scopeLeft - root2.ref.list.rect.element.left,
    top: action.position.scopeTop - (root2.rect.outer.top + root2.rect.element.marginTop + root2.rect.element.scrollTop)
  };
};
const clearDragCoordinates = ({ props }) => {
  props.dragCoordinates = null;
};
const route$3 = createRoute({
  DID_DRAG: storeDragCoordinates,
  DID_END_DRAG: clearDragCoordinates
});
const write$6 = ({ root: root2, props, actions: actions2 }) => {
  route$3({ root: root2, props, actions: actions2 });
  root2.ref.list.dragCoordinates = props.dragCoordinates;
  if (props.overflowing && !props.overflow) {
    props.overflowing = false;
    root2.element.dataset.state = "";
    root2.height = null;
  }
  if (props.overflow) {
    const newHeight = Math.round(props.overflow);
    if (newHeight !== root2.height) {
      props.overflowing = true;
      root2.element.dataset.state = "overflow";
      root2.height = newHeight;
    }
  }
};
const listScroller = createView({
  create: create$9,
  write: write$6,
  name: "list-scroller",
  mixins: {
    apis: ["overflow", "dragCoordinates"],
    styles: ["height", "translateY"],
    animations: {
      translateY: "spring"
    }
  }
});
const attrToggle = (element, name2, state2, enabledValue = "") => {
  if (state2) {
    attr(element, name2, enabledValue);
  } else {
    element.removeAttribute(name2);
  }
};
const resetFileInput = (input) => {
  if (!input || input.value === "") {
    return;
  }
  try {
    input.value = "";
  } catch (err) {
  }
  if (input.value) {
    const form = createElement$1("form");
    const parentNode = input.parentNode;
    const ref2 = input.nextSibling;
    form.appendChild(input);
    form.reset();
    if (ref2) {
      parentNode.insertBefore(input, ref2);
    } else {
      parentNode.appendChild(input);
    }
  }
};
const create$a = ({ root: root2, props }) => {
  root2.element.id = `filepond--browser-${props.id}`;
  attr(root2.element, "name", root2.query("GET_NAME"));
  attr(root2.element, "aria-controls", `filepond--assistant-${props.id}`);
  attr(root2.element, "aria-labelledby", `filepond--drop-label-${props.id}`);
  setAcceptedFileTypes({ root: root2, action: { value: root2.query("GET_ACCEPTED_FILE_TYPES") } });
  toggleAllowMultiple({ root: root2, action: { value: root2.query("GET_ALLOW_MULTIPLE") } });
  toggleDirectoryFilter({ root: root2, action: { value: root2.query("GET_ALLOW_DIRECTORIES_ONLY") } });
  toggleDisabled({ root: root2 });
  toggleRequired({ root: root2, action: { value: root2.query("GET_REQUIRED") } });
  setCaptureMethod({ root: root2, action: { value: root2.query("GET_CAPTURE_METHOD") } });
  root2.ref.handleChange = (e) => {
    if (!root2.element.value) {
      return;
    }
    const files = Array.from(root2.element.files).map((file2) => {
      file2._relativePath = file2.webkitRelativePath;
      return file2;
    });
    setTimeout(() => {
      props.onload(files);
      resetFileInput(root2.element);
    }, 250);
  };
  root2.element.addEventListener("change", root2.ref.handleChange);
};
const setAcceptedFileTypes = ({ root: root2, action }) => {
  if (!root2.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE"))
    return;
  attrToggle(root2.element, "accept", !!action.value, action.value ? action.value.join(",") : "");
};
const toggleAllowMultiple = ({ root: root2, action }) => {
  attrToggle(root2.element, "multiple", action.value);
};
const toggleDirectoryFilter = ({ root: root2, action }) => {
  attrToggle(root2.element, "webkitdirectory", action.value);
};
const toggleDisabled = ({ root: root2 }) => {
  const isDisabled = root2.query("GET_DISABLED");
  const doesAllowBrowse = root2.query("GET_ALLOW_BROWSE");
  const disableField = isDisabled || !doesAllowBrowse;
  attrToggle(root2.element, "disabled", disableField);
};
const toggleRequired = ({ root: root2, action }) => {
  if (!action.value) {
    attrToggle(root2.element, "required", false);
  } else if (root2.query("GET_TOTAL_ITEMS") === 0) {
    attrToggle(root2.element, "required", true);
  }
};
const setCaptureMethod = ({ root: root2, action }) => {
  attrToggle(root2.element, "capture", !!action.value, action.value === true ? "" : action.value);
};
const updateRequiredStatus = ({ root: root2 }) => {
  const { element } = root2;
  if (root2.query("GET_TOTAL_ITEMS") > 0) {
    attrToggle(element, "required", false);
    attrToggle(element, "name", false);
  } else {
    attrToggle(element, "name", true, root2.query("GET_NAME"));
    const shouldCheckValidity = root2.query("GET_CHECK_VALIDITY");
    if (shouldCheckValidity) {
      element.setCustomValidity("");
    }
    if (root2.query("GET_REQUIRED")) {
      attrToggle(element, "required", true);
    }
  }
};
const updateFieldValidityStatus = ({ root: root2 }) => {
  const shouldCheckValidity = root2.query("GET_CHECK_VALIDITY");
  if (!shouldCheckValidity)
    return;
  root2.element.setCustomValidity(root2.query("GET_LABEL_INVALID_FIELD"));
};
const browser = createView({
  tag: "input",
  name: "browser",
  ignoreRect: true,
  ignoreRectUpdate: true,
  attributes: {
    type: "file"
  },
  create: create$a,
  destroy: ({ root: root2 }) => {
    root2.element.removeEventListener("change", root2.ref.handleChange);
  },
  write: createRoute({
    DID_LOAD_ITEM: updateRequiredStatus,
    DID_REMOVE_ITEM: updateRequiredStatus,
    DID_THROW_ITEM_INVALID: updateFieldValidityStatus,
    DID_SET_DISABLED: toggleDisabled,
    DID_SET_ALLOW_BROWSE: toggleDisabled,
    DID_SET_ALLOW_DIRECTORIES_ONLY: toggleDirectoryFilter,
    DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
    DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
    DID_SET_CAPTURE_METHOD: setCaptureMethod,
    DID_SET_REQUIRED: toggleRequired
  })
});
const Key = {
  ENTER: 13,
  SPACE: 32
};
const create$b = ({ root: root2, props }) => {
  const label = createElement$1("label");
  attr(label, "for", `filepond--browser-${props.id}`);
  attr(label, "id", `filepond--drop-label-${props.id}`);
  attr(label, "aria-hidden", "true");
  root2.ref.handleKeyDown = (e) => {
    const isActivationKey = e.keyCode === Key.ENTER || e.keyCode === Key.SPACE;
    if (!isActivationKey)
      return;
    e.preventDefault();
    root2.ref.label.click();
  };
  root2.ref.handleClick = (e) => {
    const isLabelClick = e.target === label || label.contains(e.target);
    if (isLabelClick)
      return;
    root2.ref.label.click();
  };
  label.addEventListener("keydown", root2.ref.handleKeyDown);
  root2.element.addEventListener("click", root2.ref.handleClick);
  updateLabelValue(label, props.caption);
  root2.appendChild(label);
  root2.ref.label = label;
};
const updateLabelValue = (label, value) => {
  label.innerHTML = value;
  const clickable = label.querySelector(".filepond--label-action");
  if (clickable) {
    attr(clickable, "tabindex", "0");
  }
  return value;
};
const dropLabel = createView({
  name: "drop-label",
  ignoreRect: true,
  create: create$b,
  destroy: ({ root: root2 }) => {
    root2.ref.label.addEventListener("keydown", root2.ref.handleKeyDown);
    root2.element.removeEventListener("click", root2.ref.handleClick);
  },
  write: createRoute({
    DID_SET_LABEL_IDLE: ({ root: root2, action }) => {
      updateLabelValue(root2.ref.label, action.value);
    }
  }),
  mixins: {
    styles: ["opacity", "translateX", "translateY"],
    animations: {
      opacity: { type: "tween", duration: 150 },
      translateX: "spring",
      translateY: "spring"
    }
  }
});
const blob = createView({
  name: "drip-blob",
  ignoreRect: true,
  mixins: {
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
});
const addBlob = ({ root: root2 }) => {
  const centerX = root2.rect.element.width * 0.5;
  const centerY = root2.rect.element.height * 0.5;
  root2.ref.blob = root2.appendChildView(root2.createChildView(blob, {
    opacity: 0,
    scaleX: 2.5,
    scaleY: 2.5,
    translateX: centerX,
    translateY: centerY
  }));
};
const moveBlob = ({ root: root2, action }) => {
  if (!root2.ref.blob) {
    addBlob({ root: root2 });
    return;
  }
  root2.ref.blob.translateX = action.position.scopeLeft;
  root2.ref.blob.translateY = action.position.scopeTop;
  root2.ref.blob.scaleX = 1;
  root2.ref.blob.scaleY = 1;
  root2.ref.blob.opacity = 1;
};
const hideBlob = ({ root: root2 }) => {
  if (!root2.ref.blob) {
    return;
  }
  root2.ref.blob.opacity = 0;
};
const explodeBlob = ({ root: root2 }) => {
  if (!root2.ref.blob) {
    return;
  }
  root2.ref.blob.scaleX = 2.5;
  root2.ref.blob.scaleY = 2.5;
  root2.ref.blob.opacity = 0;
};
const write$7 = ({ root: root2, props, actions: actions2 }) => {
  route$4({ root: root2, props, actions: actions2 });
  const { blob: blob2 } = root2.ref;
  if (actions2.length === 0 && blob2 && blob2.opacity === 0) {
    root2.removeChildView(blob2);
    root2.ref.blob = null;
  }
};
const route$4 = createRoute({
  DID_DRAG: moveBlob,
  DID_DROP: explodeBlob,
  DID_END_DRAG: hideBlob
});
const drip = createView({
  ignoreRect: true,
  ignoreRectUpdate: true,
  name: "drip",
  write: write$7
});
const setInputFiles = (element, files) => {
  try {
    const dataTransfer = new DataTransfer();
    files.forEach((file2) => {
      if (file2 instanceof File) {
        dataTransfer.items.add(file2);
      } else {
        dataTransfer.items.add(new File([file2], file2.name, {
          type: file2.type
        }));
      }
    });
    element.files = dataTransfer.files;
  } catch (err) {
    return false;
  }
  return true;
};
const create$c = ({ root: root2 }) => root2.ref.fields = {};
const getField = (root2, id) => root2.ref.fields[id];
const syncFieldPositionsWithItems = (root2) => {
  root2.query("GET_ACTIVE_ITEMS").forEach((item2) => {
    if (!root2.ref.fields[item2.id])
      return;
    root2.element.appendChild(root2.ref.fields[item2.id]);
  });
};
const didReorderItems = ({ root: root2 }) => syncFieldPositionsWithItems(root2);
const didAddItem = ({ root: root2, action }) => {
  const fileItem = root2.query("GET_ITEM", action.id);
  const isLocalFile = fileItem.origin === FileOrigin.LOCAL;
  const shouldUseFileInput = !isLocalFile && root2.query("SHOULD_UPDATE_FILE_INPUT");
  const dataContainer = createElement$1("input");
  dataContainer.type = shouldUseFileInput ? "file" : "hidden";
  dataContainer.name = root2.query("GET_NAME");
  dataContainer.disabled = root2.query("GET_DISABLED");
  root2.ref.fields[action.id] = dataContainer;
  syncFieldPositionsWithItems(root2);
};
const didLoadItem$1 = ({ root: root2, action }) => {
  const field = getField(root2, action.id);
  if (!field)
    return;
  if (action.serverFileReference !== null)
    field.value = action.serverFileReference;
  if (!root2.query("SHOULD_UPDATE_FILE_INPUT"))
    return;
  const fileItem = root2.query("GET_ITEM", action.id);
  setInputFiles(field, [fileItem.file]);
};
const didPrepareOutput = ({ root: root2, action }) => {
  if (!root2.query("SHOULD_UPDATE_FILE_INPUT"))
    return;
  setTimeout(() => {
    const field = getField(root2, action.id);
    if (!field)
      return;
    setInputFiles(field, [action.file]);
  }, 0);
};
const didSetDisabled = ({ root: root2 }) => {
  root2.element.disabled = root2.query("GET_DISABLED");
};
const didRemoveItem = ({ root: root2, action }) => {
  const field = getField(root2, action.id);
  if (!field)
    return;
  if (field.parentNode)
    field.parentNode.removeChild(field);
  delete root2.ref.fields[action.id];
};
const didDefineValue = ({ root: root2, action }) => {
  const field = getField(root2, action.id);
  if (!field)
    return;
  if (action.value === null) {
    field.removeAttribute("value");
  } else {
    field.value = action.value;
  }
  syncFieldPositionsWithItems(root2);
};
const write$8 = createRoute({
  DID_SET_DISABLED: didSetDisabled,
  DID_ADD_ITEM: didAddItem,
  DID_LOAD_ITEM: didLoadItem$1,
  DID_REMOVE_ITEM: didRemoveItem,
  DID_DEFINE_VALUE: didDefineValue,
  DID_PREPARE_OUTPUT: didPrepareOutput,
  DID_REORDER_ITEMS: didReorderItems,
  DID_SORT_ITEMS: didReorderItems
});
const data$1 = createView({
  tag: "fieldset",
  name: "data",
  create: create$c,
  write: write$8,
  ignoreRect: true
});
const getRootNode = (element) => "getRootNode" in element ? element.getRootNode() : document;
const images = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"];
const text$1 = ["css", "csv", "html", "txt"];
const map = {
  zip: "zip|compressed",
  epub: "application/epub+zip"
};
const guesstimateMimeType = (extension = "") => {
  extension = extension.toLowerCase();
  if (images.includes(extension)) {
    return "image/" + (extension === "jpg" ? "jpeg" : extension === "svg" ? "svg+xml" : extension);
  }
  if (text$1.includes(extension)) {
    return "text/" + extension;
  }
  return map[extension] || "";
};
const requestDataTransferItems = (dataTransfer) => new Promise((resolve, reject) => {
  const links = getLinks(dataTransfer);
  if (links.length && !hasFiles(dataTransfer)) {
    return resolve(links);
  }
  getFiles(dataTransfer).then(resolve);
});
const hasFiles = (dataTransfer) => {
  if (dataTransfer.files)
    return dataTransfer.files.length > 0;
  return false;
};
const getFiles = (dataTransfer) => new Promise((resolve, reject) => {
  const promisedFiles = (dataTransfer.items ? Array.from(dataTransfer.items) : []).filter((item2) => isFileSystemItem(item2)).map((item2) => getFilesFromItem(item2));
  if (!promisedFiles.length) {
    resolve(dataTransfer.files ? Array.from(dataTransfer.files) : []);
    return;
  }
  Promise.all(promisedFiles).then((returnedFileGroups) => {
    const files = [];
    returnedFileGroups.forEach((group) => {
      files.push.apply(files, group);
    });
    resolve(files.filter((file2) => file2).map((file2) => {
      if (!file2._relativePath)
        file2._relativePath = file2.webkitRelativePath;
      return file2;
    }));
  }).catch(console.error);
});
const isFileSystemItem = (item2) => {
  if (isEntry(item2)) {
    const entry = getAsEntry(item2);
    if (entry) {
      return entry.isFile || entry.isDirectory;
    }
  }
  return item2.kind === "file";
};
const getFilesFromItem = (item2) => new Promise((resolve, reject) => {
  if (isDirectoryEntry(item2)) {
    getFilesInDirectory(getAsEntry(item2)).then(resolve).catch(reject);
    return;
  }
  resolve([item2.getAsFile()]);
});
const getFilesInDirectory = (entry) => new Promise((resolve, reject) => {
  const files = [];
  let dirCounter = 0;
  let fileCounter = 0;
  const resolveIfDone = () => {
    if (fileCounter === 0 && dirCounter === 0) {
      resolve(files);
    }
  };
  const readEntries = (dirEntry) => {
    dirCounter++;
    const directoryReader = dirEntry.createReader();
    const readBatch = () => {
      directoryReader.readEntries((entries) => {
        if (entries.length === 0) {
          dirCounter--;
          resolveIfDone();
          return;
        }
        entries.forEach((entry2) => {
          if (entry2.isDirectory) {
            readEntries(entry2);
          } else {
            fileCounter++;
            entry2.file((file2) => {
              const correctedFile = correctMissingFileType(file2);
              if (entry2.fullPath)
                correctedFile._relativePath = entry2.fullPath;
              files.push(correctedFile);
              fileCounter--;
              resolveIfDone();
            });
          }
        });
        readBatch();
      }, reject);
    };
    readBatch();
  };
  readEntries(entry);
});
const correctMissingFileType = (file2) => {
  if (file2.type.length)
    return file2;
  const date = file2.lastModifiedDate;
  const name2 = file2.name;
  const type = guesstimateMimeType(getExtensionFromFilename(file2.name));
  if (!type.length)
    return file2;
  file2 = file2.slice(0, file2.size, type);
  file2.name = name2;
  file2.lastModifiedDate = date;
  return file2;
};
const isDirectoryEntry = (item2) => isEntry(item2) && (getAsEntry(item2) || {}).isDirectory;
const isEntry = (item2) => "webkitGetAsEntry" in item2;
const getAsEntry = (item2) => item2.webkitGetAsEntry();
const getLinks = (dataTransfer) => {
  let links = [];
  try {
    links = getLinksFromTransferMetaData(dataTransfer);
    if (links.length) {
      return links;
    }
    links = getLinksFromTransferURLData(dataTransfer);
  } catch (e) {
  }
  return links;
};
const getLinksFromTransferURLData = (dataTransfer) => {
  let data2 = dataTransfer.getData("url");
  if (typeof data2 === "string" && data2.length) {
    return [data2];
  }
  return [];
};
const getLinksFromTransferMetaData = (dataTransfer) => {
  let data2 = dataTransfer.getData("text/html");
  if (typeof data2 === "string" && data2.length) {
    const matches = data2.match(/src\s*=\s*"(.+?)"/);
    if (matches) {
      return [matches[1]];
    }
  }
  return [];
};
const dragNDropObservers = [];
const eventPosition = (e) => ({
  pageLeft: e.pageX,
  pageTop: e.pageY,
  scopeLeft: e.offsetX || e.layerX,
  scopeTop: e.offsetY || e.layerY
});
const createDragNDropClient = (element, scopeToObserve, filterElement) => {
  const observer = getDragNDropObserver(scopeToObserve);
  const client = {
    element,
    filterElement,
    state: null,
    ondrop: () => {
    },
    onenter: () => {
    },
    ondrag: () => {
    },
    onexit: () => {
    },
    onload: () => {
    },
    allowdrop: () => {
    }
  };
  client.destroy = observer.addListener(client);
  return client;
};
const getDragNDropObserver = (element) => {
  const observer = dragNDropObservers.find((item2) => item2.element === element);
  if (observer) {
    return observer;
  }
  const newObserver = createDragNDropObserver(element);
  dragNDropObservers.push(newObserver);
  return newObserver;
};
const createDragNDropObserver = (element) => {
  const clients = [];
  const routes = {
    dragenter,
    dragover,
    dragleave,
    drop
  };
  const handlers = {};
  forin(routes, (event, createHandler) => {
    handlers[event] = createHandler(element, clients);
    element.addEventListener(event, handlers[event], false);
  });
  const observer = {
    element,
    addListener: (client) => {
      clients.push(client);
      return () => {
        clients.splice(clients.indexOf(client), 1);
        if (clients.length === 0) {
          dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);
          forin(routes, (event) => {
            element.removeEventListener(event, handlers[event], false);
          });
        }
      };
    }
  };
  return observer;
};
const elementFromPoint = (root2, point) => {
  if (!("elementFromPoint" in root2)) {
    root2 = document;
  }
  return root2.elementFromPoint(point.x, point.y);
};
const isEventTarget = (e, target) => {
  const root2 = getRootNode(target);
  const elementAtPosition = elementFromPoint(root2, {
    x: e.pageX - window.pageXOffset,
    y: e.pageY - window.pageYOffset
  });
  return elementAtPosition === target || target.contains(elementAtPosition);
};
let initialTarget = null;
const setDropEffect = (dataTransfer, effect) => {
  try {
    dataTransfer.dropEffect = effect;
  } catch (e) {
  }
};
const dragenter = (root2, clients) => (e) => {
  e.preventDefault();
  initialTarget = e.target;
  clients.forEach((client) => {
    const { element, onenter } = client;
    if (isEventTarget(e, element)) {
      client.state = "enter";
      onenter(eventPosition(e));
    }
  });
};
const dragover = (root2, clients) => (e) => {
  e.preventDefault();
  const dataTransfer = e.dataTransfer;
  requestDataTransferItems(dataTransfer).then((items) => {
    let overDropTarget = false;
    clients.some((client) => {
      const { filterElement, element, onenter, onexit, ondrag, allowdrop } = client;
      setDropEffect(dataTransfer, "copy");
      const allowsTransfer = allowdrop(items);
      if (!allowsTransfer) {
        setDropEffect(dataTransfer, "none");
        return;
      }
      if (isEventTarget(e, element)) {
        overDropTarget = true;
        if (client.state === null) {
          client.state = "enter";
          onenter(eventPosition(e));
          return;
        }
        client.state = "over";
        if (filterElement && !allowsTransfer) {
          setDropEffect(dataTransfer, "none");
          return;
        }
        ondrag(eventPosition(e));
      } else {
        if (filterElement && !overDropTarget) {
          setDropEffect(dataTransfer, "none");
        }
        if (client.state) {
          client.state = null;
          onexit(eventPosition(e));
        }
      }
    });
  });
};
const drop = (root2, clients) => (e) => {
  e.preventDefault();
  const dataTransfer = e.dataTransfer;
  requestDataTransferItems(dataTransfer).then((items) => {
    clients.forEach((client) => {
      const { filterElement, element, ondrop, onexit, allowdrop } = client;
      client.state = null;
      if (filterElement && !isEventTarget(e, element))
        return;
      if (!allowdrop(items))
        return onexit(eventPosition(e));
      ondrop(eventPosition(e), items);
    });
  });
};
const dragleave = (root2, clients) => (e) => {
  if (initialTarget !== e.target) {
    return;
  }
  clients.forEach((client) => {
    const { onexit } = client;
    client.state = null;
    onexit(eventPosition(e));
  });
};
const createHopper = (scope, validateItems, options) => {
  scope.classList.add("filepond--hopper");
  const { catchesDropsOnPage, requiresDropOnElement, filterItems = (items) => items } = options;
  const client = createDragNDropClient(scope, catchesDropsOnPage ? document.documentElement : scope, requiresDropOnElement);
  let lastState = "";
  let currentState = "";
  client.allowdrop = (items) => {
    return validateItems(filterItems(items));
  };
  client.ondrop = (position, items) => {
    const filteredItems = filterItems(items);
    if (!validateItems(filteredItems)) {
      api.ondragend(position);
      return;
    }
    currentState = "drag-drop";
    api.onload(filteredItems, position);
  };
  client.ondrag = (position) => {
    api.ondrag(position);
  };
  client.onenter = (position) => {
    currentState = "drag-over";
    api.ondragstart(position);
  };
  client.onexit = (position) => {
    currentState = "drag-exit";
    api.ondragend(position);
  };
  const api = {
    updateHopperState: () => {
      if (lastState !== currentState) {
        scope.dataset.hopperState = currentState;
        lastState = currentState;
      }
    },
    onload: () => {
    },
    ondragstart: () => {
    },
    ondrag: () => {
    },
    ondragend: () => {
    },
    destroy: () => {
      client.destroy();
    }
  };
  return api;
};
let listening = false;
const listeners$1 = [];
const handlePaste = (e) => {
  const activeEl = document.activeElement;
  if (activeEl && /textarea|input/i.test(activeEl.nodeName)) {
    let inScope = false;
    let element = activeEl;
    while (element !== document.body) {
      if (element.classList.contains("filepond--root")) {
        inScope = true;
        break;
      }
      element = element.parentNode;
    }
    if (!inScope)
      return;
  }
  requestDataTransferItems(e.clipboardData).then((files) => {
    if (!files.length) {
      return;
    }
    listeners$1.forEach((listener) => listener(files));
  });
};
const listen = (cb) => {
  if (listeners$1.includes(cb)) {
    return;
  }
  listeners$1.push(cb);
  if (listening) {
    return;
  }
  listening = true;
  document.addEventListener("paste", handlePaste);
};
const unlisten = (listener) => {
  arrayRemove(listeners$1, listeners$1.indexOf(listener));
  if (listeners$1.length === 0) {
    document.removeEventListener("paste", handlePaste);
    listening = false;
  }
};
const createPaster = () => {
  const cb = (files) => {
    api.onload(files);
  };
  const api = {
    destroy: () => {
      unlisten(cb);
    },
    onload: () => {
    }
  };
  listen(cb);
  return api;
};
const create$d = ({ root: root2, props }) => {
  root2.element.id = `filepond--assistant-${props.id}`;
  attr(root2.element, "role", "status");
  attr(root2.element, "aria-live", "polite");
  attr(root2.element, "aria-relevant", "additions");
};
let addFilesNotificationTimeout = null;
let notificationClearTimeout = null;
const filenames = [];
const assist = (root2, message) => {
  root2.element.textContent = message;
};
const clear$1 = (root2) => {
  root2.element.textContent = "";
};
const listModified = (root2, filename, label) => {
  const total = root2.query("GET_TOTAL_ITEMS");
  assist(root2, `${label} ${filename}, ${total} ${total === 1 ? root2.query("GET_LABEL_FILE_COUNT_SINGULAR") : root2.query("GET_LABEL_FILE_COUNT_PLURAL")}`);
  clearTimeout(notificationClearTimeout);
  notificationClearTimeout = setTimeout(() => {
    clear$1(root2);
  }, 1500);
};
const isUsingFilePond = (root2) => root2.element.parentNode.contains(document.activeElement);
const itemAdded = ({ root: root2, action }) => {
  if (!isUsingFilePond(root2)) {
    return;
  }
  root2.element.textContent = "";
  const item2 = root2.query("GET_ITEM", action.id);
  filenames.push(item2.filename);
  clearTimeout(addFilesNotificationTimeout);
  addFilesNotificationTimeout = setTimeout(() => {
    listModified(root2, filenames.join(", "), root2.query("GET_LABEL_FILE_ADDED"));
    filenames.length = 0;
  }, 750);
};
const itemRemoved = ({ root: root2, action }) => {
  if (!isUsingFilePond(root2)) {
    return;
  }
  const item2 = action.item;
  listModified(root2, item2.filename, root2.query("GET_LABEL_FILE_REMOVED"));
};
const itemProcessed = ({ root: root2, action }) => {
  const item2 = root2.query("GET_ITEM", action.id);
  const filename = item2.filename;
  const label = root2.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
  assist(root2, `${filename} ${label}`);
};
const itemProcessedUndo = ({ root: root2, action }) => {
  const item2 = root2.query("GET_ITEM", action.id);
  const filename = item2.filename;
  const label = root2.query("GET_LABEL_FILE_PROCESSING_ABORTED");
  assist(root2, `${filename} ${label}`);
};
const itemError = ({ root: root2, action }) => {
  const item2 = root2.query("GET_ITEM", action.id);
  const filename = item2.filename;
  assist(root2, `${action.status.main} ${filename} ${action.status.sub}`);
};
const assistant = createView({
  create: create$d,
  ignoreRect: true,
  ignoreRectUpdate: true,
  write: createRoute({
    DID_LOAD_ITEM: itemAdded,
    DID_REMOVE_ITEM: itemRemoved,
    DID_COMPLETE_ITEM_PROCESSING: itemProcessed,
    DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
    DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,
    DID_THROW_ITEM_REMOVE_ERROR: itemError,
    DID_THROW_ITEM_LOAD_ERROR: itemError,
    DID_THROW_ITEM_INVALID: itemError,
    DID_THROW_ITEM_PROCESSING_ERROR: itemError
  }),
  tag: "span",
  name: "assistant"
});
const toCamels = (string, separator = "-") => string.replace(new RegExp(`${separator}.`, "g"), (sub) => sub.charAt(1).toUpperCase());
const debounce = (func, interval = 16, immidiateOnly = true) => {
  let last = Date.now();
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    const dist = Date.now() - last;
    const fn2 = () => {
      last = Date.now();
      func(...args);
    };
    if (dist < interval) {
      if (!immidiateOnly) {
        timeout = setTimeout(fn2, interval - dist);
      }
    } else {
      fn2();
    }
  };
};
const MAX_FILES_LIMIT = 1e6;
const prevent = (e) => e.preventDefault();
const create$e = ({ root: root2, props }) => {
  const id = root2.query("GET_ID");
  if (id) {
    root2.element.id = id;
  }
  const className = root2.query("GET_CLASS_NAME");
  if (className) {
    className.split(" ").filter((name2) => name2.length).forEach((name2) => {
      root2.element.classList.add(name2);
    });
  }
  root2.ref.label = root2.appendChildView(root2.createChildView(dropLabel, __spreadProps(__spreadValues({}, props), {
    translateY: null,
    caption: root2.query("GET_LABEL_IDLE")
  })));
  root2.ref.list = root2.appendChildView(root2.createChildView(listScroller, { translateY: null }));
  root2.ref.panel = root2.appendChildView(root2.createChildView(panel, { name: "panel-root" }));
  root2.ref.assistant = root2.appendChildView(root2.createChildView(assistant, __spreadValues({}, props)));
  root2.ref.data = root2.appendChildView(root2.createChildView(data$1, __spreadValues({}, props)));
  root2.ref.measure = createElement$1("div");
  root2.ref.measure.style.height = "100%";
  root2.element.appendChild(root2.ref.measure);
  root2.ref.bounds = null;
  root2.query("GET_STYLES").filter((style) => !isEmpty(style.value)).map(({ name: name2, value }) => {
    root2.element.dataset[name2] = value;
  });
  root2.ref.widthPrevious = null;
  root2.ref.widthUpdated = debounce(() => {
    root2.ref.updateHistory = [];
    root2.dispatch("DID_RESIZE_ROOT");
  }, 250);
  root2.ref.previousAspectRatio = null;
  root2.ref.updateHistory = [];
  const canHover = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
  const hasPointerEvents = "PointerEvent" in window;
  if (root2.query("GET_ALLOW_REORDER") && hasPointerEvents && !canHover) {
    root2.element.addEventListener("touchmove", prevent, { passive: false });
    root2.element.addEventListener("gesturestart", prevent);
  }
  const credits = root2.query("GET_CREDITS");
  const hasCredits = credits.length === 2;
  if (hasCredits) {
    const frag = document.createElement("a");
    frag.className = "filepond--credits";
    frag.setAttribute("aria-hidden", "true");
    frag.href = credits[0];
    frag.tabindex = -1;
    frag.target = "_blank";
    frag.rel = "noopener noreferrer";
    frag.textContent = credits[1];
    root2.element.appendChild(frag);
    root2.ref.credits = frag;
  }
};
const write$9 = ({ root: root2, props, actions: actions2 }) => {
  route$5({ root: root2, props, actions: actions2 });
  actions2.filter((action) => /^DID_SET_STYLE_/.test(action.type)).filter((action) => !isEmpty(action.data.value)).map(({ type, data: data2 }) => {
    const name2 = toCamels(type.substr(8).toLowerCase(), "_");
    root2.element.dataset[name2] = data2.value;
    root2.invalidateLayout();
  });
  if (root2.rect.element.hidden)
    return;
  if (root2.rect.element.width !== root2.ref.widthPrevious) {
    root2.ref.widthPrevious = root2.rect.element.width;
    root2.ref.widthUpdated();
  }
  let bounds = root2.ref.bounds;
  if (!bounds) {
    bounds = root2.ref.bounds = calculateRootBoundingBoxHeight(root2);
    root2.element.removeChild(root2.ref.measure);
    root2.ref.measure = null;
  }
  const { hopper, label, list: list2, panel: panel2 } = root2.ref;
  if (hopper) {
    hopper.updateHopperState();
  }
  const aspectRatio = root2.query("GET_PANEL_ASPECT_RATIO");
  const isMultiItem = root2.query("GET_ALLOW_MULTIPLE");
  const totalItems = root2.query("GET_TOTAL_ITEMS");
  const maxItems = isMultiItem ? root2.query("GET_MAX_FILES") || MAX_FILES_LIMIT : 1;
  const atMaxCapacity = totalItems === maxItems;
  const addAction = actions2.find((action) => action.type === "DID_ADD_ITEM");
  if (atMaxCapacity && addAction) {
    const interactionMethod = addAction.data.interactionMethod;
    label.opacity = 0;
    if (isMultiItem) {
      label.translateY = -40;
    } else {
      if (interactionMethod === InteractionMethod.API) {
        label.translateX = 40;
      } else if (interactionMethod === InteractionMethod.BROWSE) {
        label.translateY = 40;
      } else {
        label.translateY = 30;
      }
    }
  } else if (!atMaxCapacity) {
    label.opacity = 1;
    label.translateX = 0;
    label.translateY = 0;
  }
  const listItemMargin = calculateListItemMargin(root2);
  const listHeight = calculateListHeight(root2);
  const labelHeight = label.rect.element.height;
  const currentLabelHeight = !isMultiItem || atMaxCapacity ? 0 : labelHeight;
  const listMarginTop = atMaxCapacity ? list2.rect.element.marginTop : 0;
  const listMarginBottom = totalItems === 0 ? 0 : list2.rect.element.marginBottom;
  const visualHeight = currentLabelHeight + listMarginTop + listHeight.visual + listMarginBottom;
  const boundsHeight = currentLabelHeight + listMarginTop + listHeight.bounds + listMarginBottom;
  list2.translateY = Math.max(0, currentLabelHeight - list2.rect.element.marginTop) - listItemMargin.top;
  if (aspectRatio) {
    const width = root2.rect.element.width;
    const height = width * aspectRatio;
    if (aspectRatio !== root2.ref.previousAspectRatio) {
      root2.ref.previousAspectRatio = aspectRatio;
      root2.ref.updateHistory = [];
    }
    const history = root2.ref.updateHistory;
    history.push(width);
    const MAX_BOUNCES = 2;
    if (history.length > MAX_BOUNCES * 2) {
      const l = history.length;
      const bottom = l - 10;
      let bounces = 0;
      for (let i = l; i >= bottom; i--) {
        if (history[i] === history[i - 2]) {
          bounces++;
        }
        if (bounces >= MAX_BOUNCES) {
          return;
        }
      }
    }
    panel2.scalable = false;
    panel2.height = height;
    const listAvailableHeight = height - currentLabelHeight - (listMarginBottom - listItemMargin.bottom) - (atMaxCapacity ? listMarginTop : 0);
    if (listHeight.visual > listAvailableHeight) {
      list2.overflow = listAvailableHeight;
    } else {
      list2.overflow = null;
    }
    root2.height = height;
  } else if (bounds.fixedHeight) {
    panel2.scalable = false;
    const listAvailableHeight = bounds.fixedHeight - currentLabelHeight - (listMarginBottom - listItemMargin.bottom) - (atMaxCapacity ? listMarginTop : 0);
    if (listHeight.visual > listAvailableHeight) {
      list2.overflow = listAvailableHeight;
    } else {
      list2.overflow = null;
    }
  } else if (bounds.cappedHeight) {
    const isCappedHeight = visualHeight >= bounds.cappedHeight;
    const panelHeight = Math.min(bounds.cappedHeight, visualHeight);
    panel2.scalable = true;
    panel2.height = isCappedHeight ? panelHeight : panelHeight - listItemMargin.top - listItemMargin.bottom;
    const listAvailableHeight = panelHeight - currentLabelHeight - (listMarginBottom - listItemMargin.bottom) - (atMaxCapacity ? listMarginTop : 0);
    if (visualHeight > bounds.cappedHeight && listHeight.visual > listAvailableHeight) {
      list2.overflow = listAvailableHeight;
    } else {
      list2.overflow = null;
    }
    root2.height = Math.min(bounds.cappedHeight, boundsHeight - listItemMargin.top - listItemMargin.bottom);
  } else {
    const itemMargin = totalItems > 0 ? listItemMargin.top + listItemMargin.bottom : 0;
    panel2.scalable = true;
    panel2.height = Math.max(labelHeight, visualHeight - itemMargin);
    root2.height = Math.max(labelHeight, boundsHeight - itemMargin);
  }
  if (root2.ref.credits && panel2.heightCurrent)
    root2.ref.credits.style.transform = `translateY(${panel2.heightCurrent}px)`;
};
const calculateListItemMargin = (root2) => {
  const item2 = root2.ref.list.childViews[0].childViews[0];
  return item2 ? {
    top: item2.rect.element.marginTop,
    bottom: item2.rect.element.marginBottom
  } : {
    top: 0,
    bottom: 0
  };
};
const calculateListHeight = (root2) => {
  let visual = 0;
  let bounds = 0;
  const scrollList = root2.ref.list;
  const itemList = scrollList.childViews[0];
  const visibleChildren = itemList.childViews.filter((child) => child.rect.element.height);
  const children = root2.query("GET_ACTIVE_ITEMS").map((item2) => visibleChildren.find((child) => child.id === item2.id)).filter((item2) => item2);
  if (children.length === 0)
    return { visual, bounds };
  const horizontalSpace = itemList.rect.element.width;
  const dragIndex = getItemIndexByPosition(itemList, children, scrollList.dragCoordinates);
  const childRect = children[0].rect.element;
  const itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
  const itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
  const itemWidth = childRect.width + itemHorizontalMargin;
  const itemHeight = childRect.height + itemVerticalMargin;
  const newItem = typeof dragIndex !== "undefined" && dragIndex >= 0 ? 1 : 0;
  const removedItem = children.find((child) => child.markedForRemoval && child.opacity < 0.45) ? -1 : 0;
  const verticalItemCount = children.length + newItem + removedItem;
  const itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
  if (itemsPerRow === 1) {
    children.forEach((item2) => {
      const height = item2.rect.element.height + itemVerticalMargin;
      bounds += height;
      visual += height * item2.opacity;
    });
  } else {
    bounds = Math.ceil(verticalItemCount / itemsPerRow) * itemHeight;
    visual = bounds;
  }
  return { visual, bounds };
};
const calculateRootBoundingBoxHeight = (root2) => {
  const height = root2.ref.measureHeight || null;
  const cappedHeight = parseInt(root2.style.maxHeight, 10) || null;
  const fixedHeight = height === 0 ? null : height;
  return {
    cappedHeight,
    fixedHeight
  };
};
const exceedsMaxFiles = (root2, items) => {
  const allowReplace = root2.query("GET_ALLOW_REPLACE");
  const allowMultiple = root2.query("GET_ALLOW_MULTIPLE");
  const totalItems = root2.query("GET_TOTAL_ITEMS");
  let maxItems = root2.query("GET_MAX_FILES");
  const totalBrowseItems = items.length;
  if (!allowMultiple && totalBrowseItems > 1) {
    return true;
  }
  maxItems = allowMultiple ? maxItems : allowReplace ? maxItems : 1;
  const hasMaxItems = isInt(maxItems);
  if (hasMaxItems && totalItems + totalBrowseItems > maxItems) {
    root2.dispatch("DID_THROW_MAX_FILES", {
      source: items,
      error: createResponse("warning", 0, "Max files")
    });
    return true;
  }
  return false;
};
const getDragIndex = (list2, children, position) => {
  const itemList = list2.childViews[0];
  return getItemIndexByPosition(itemList, children, {
    left: position.scopeLeft - itemList.rect.element.left,
    top: position.scopeTop - (list2.rect.outer.top + list2.rect.element.marginTop + list2.rect.element.scrollTop)
  });
};
const toggleDrop = (root2) => {
  const isAllowed = root2.query("GET_ALLOW_DROP");
  const isDisabled = root2.query("GET_DISABLED");
  const enabled = isAllowed && !isDisabled;
  if (enabled && !root2.ref.hopper) {
    const hopper = createHopper(root2.element, (items) => {
      const beforeDropFile = root2.query("GET_BEFORE_DROP_FILE") || (() => true);
      const dropValidation = root2.query("GET_DROP_VALIDATION");
      return dropValidation ? items.every((item2) => applyFilters("ALLOW_HOPPER_ITEM", item2, {
        query: root2.query
      }).every((result) => result === true) && beforeDropFile(item2)) : true;
    }, {
      filterItems: (items) => {
        const ignoredFiles = root2.query("GET_IGNORED_FILES");
        return items.filter((item2) => {
          if (isFile(item2)) {
            return !ignoredFiles.includes(item2.name.toLowerCase());
          }
          return true;
        });
      },
      catchesDropsOnPage: root2.query("GET_DROP_ON_PAGE"),
      requiresDropOnElement: root2.query("GET_DROP_ON_ELEMENT")
    });
    hopper.onload = (items, position) => {
      const list2 = root2.ref.list.childViews[0];
      const visibleChildren = list2.childViews.filter((child) => child.rect.element.height);
      const children = root2.query("GET_ACTIVE_ITEMS").map((item2) => visibleChildren.find((child) => child.id === item2.id)).filter((item2) => item2);
      applyFilterChain("ADD_ITEMS", items, { dispatch: root2.dispatch }).then((queue) => {
        if (exceedsMaxFiles(root2, queue))
          return false;
        root2.dispatch("ADD_ITEMS", {
          items: queue,
          index: getDragIndex(root2.ref.list, children, position),
          interactionMethod: InteractionMethod.DROP
        });
      });
      root2.dispatch("DID_DROP", { position });
      root2.dispatch("DID_END_DRAG", { position });
    };
    hopper.ondragstart = (position) => {
      root2.dispatch("DID_START_DRAG", { position });
    };
    hopper.ondrag = debounce((position) => {
      root2.dispatch("DID_DRAG", { position });
    });
    hopper.ondragend = (position) => {
      root2.dispatch("DID_END_DRAG", { position });
    };
    root2.ref.hopper = hopper;
    root2.ref.drip = root2.appendChildView(root2.createChildView(drip));
  } else if (!enabled && root2.ref.hopper) {
    root2.ref.hopper.destroy();
    root2.ref.hopper = null;
    root2.removeChildView(root2.ref.drip);
  }
};
const toggleBrowse = (root2, props) => {
  const isAllowed = root2.query("GET_ALLOW_BROWSE");
  const isDisabled = root2.query("GET_DISABLED");
  const enabled = isAllowed && !isDisabled;
  if (enabled && !root2.ref.browser) {
    root2.ref.browser = root2.appendChildView(root2.createChildView(browser, __spreadProps(__spreadValues({}, props), {
      onload: (items) => {
        applyFilterChain("ADD_ITEMS", items, {
          dispatch: root2.dispatch
        }).then((queue) => {
          if (exceedsMaxFiles(root2, queue))
            return false;
          root2.dispatch("ADD_ITEMS", {
            items: queue,
            index: -1,
            interactionMethod: InteractionMethod.BROWSE
          });
        });
      }
    })), 0);
  } else if (!enabled && root2.ref.browser) {
    root2.removeChildView(root2.ref.browser);
    root2.ref.browser = null;
  }
};
const togglePaste = (root2) => {
  const isAllowed = root2.query("GET_ALLOW_PASTE");
  const isDisabled = root2.query("GET_DISABLED");
  const enabled = isAllowed && !isDisabled;
  if (enabled && !root2.ref.paster) {
    root2.ref.paster = createPaster();
    root2.ref.paster.onload = (items) => {
      applyFilterChain("ADD_ITEMS", items, { dispatch: root2.dispatch }).then((queue) => {
        if (exceedsMaxFiles(root2, queue))
          return false;
        root2.dispatch("ADD_ITEMS", {
          items: queue,
          index: -1,
          interactionMethod: InteractionMethod.PASTE
        });
      });
    };
  } else if (!enabled && root2.ref.paster) {
    root2.ref.paster.destroy();
    root2.ref.paster = null;
  }
};
const route$5 = createRoute({
  DID_SET_ALLOW_BROWSE: ({ root: root2, props }) => {
    toggleBrowse(root2, props);
  },
  DID_SET_ALLOW_DROP: ({ root: root2 }) => {
    toggleDrop(root2);
  },
  DID_SET_ALLOW_PASTE: ({ root: root2 }) => {
    togglePaste(root2);
  },
  DID_SET_DISABLED: ({ root: root2, props }) => {
    toggleDrop(root2);
    togglePaste(root2);
    toggleBrowse(root2, props);
    const isDisabled = root2.query("GET_DISABLED");
    if (isDisabled) {
      root2.element.dataset.disabled = "disabled";
    } else {
      root2.element.removeAttribute("data-disabled");
    }
  }
});
const root = createView({
  name: "root",
  read: ({ root: root2 }) => {
    if (root2.ref.measure) {
      root2.ref.measureHeight = root2.ref.measure.offsetHeight;
    }
  },
  create: create$e,
  write: write$9,
  destroy: ({ root: root2 }) => {
    if (root2.ref.paster) {
      root2.ref.paster.destroy();
    }
    if (root2.ref.hopper) {
      root2.ref.hopper.destroy();
    }
    root2.element.removeEventListener("touchmove", prevent);
    root2.element.removeEventListener("gesturestart", prevent);
  },
  mixins: {
    styles: ["height"]
  }
});
const createApp = (initialOptions = {}) => {
  let originalElement = null;
  const defaultOptions2 = getOptions();
  const store = createStore(createInitialState(defaultOptions2), [queries, createOptionQueries(defaultOptions2)], [actions, createOptionActions(defaultOptions2)]);
  store.dispatch("SET_OPTIONS", { options: initialOptions });
  const visibilityHandler = () => {
    if (document.hidden)
      return;
    store.dispatch("KICK");
  };
  document.addEventListener("visibilitychange", visibilityHandler);
  let resizeDoneTimer = null;
  let isResizing = false;
  let isResizingHorizontally = false;
  let initialWindowWidth = null;
  let currentWindowWidth = null;
  const resizeHandler = () => {
    if (!isResizing) {
      isResizing = true;
    }
    clearTimeout(resizeDoneTimer);
    resizeDoneTimer = setTimeout(() => {
      isResizing = false;
      initialWindowWidth = null;
      currentWindowWidth = null;
      if (isResizingHorizontally) {
        isResizingHorizontally = false;
        store.dispatch("DID_STOP_RESIZE");
      }
    }, 500);
  };
  window.addEventListener("resize", resizeHandler);
  const view = root(store, { id: getUniqueId$1() });
  let isResting = false;
  let isHidden = false;
  const readWriteApi = {
    _read: () => {
      if (isResizing) {
        currentWindowWidth = window.innerWidth;
        if (!initialWindowWidth) {
          initialWindowWidth = currentWindowWidth;
        }
        if (!isResizingHorizontally && currentWindowWidth !== initialWindowWidth) {
          store.dispatch("DID_START_RESIZE");
          isResizingHorizontally = true;
        }
      }
      if (isHidden && isResting) {
        isResting = view.element.offsetParent === null;
      }
      if (isResting)
        return;
      view._read();
      isHidden = view.rect.element.hidden;
    },
    _write: (ts) => {
      const actions2 = store.processActionQueue().filter((action) => !/^SET_/.test(action.type));
      if (isResting && !actions2.length)
        return;
      routeActionsToEvents(actions2);
      isResting = view._write(ts, actions2, isResizingHorizontally);
      removeReleasedItems(store.query("GET_ITEMS"));
      if (isResting) {
        store.processDispatchQueue();
      }
    }
  };
  const createEvent = (name2) => (data2) => {
    const event = {
      type: name2
    };
    if (!data2) {
      return event;
    }
    if (data2.hasOwnProperty("error")) {
      event.error = data2.error ? __spreadValues({}, data2.error) : null;
    }
    if (data2.status) {
      event.status = __spreadValues({}, data2.status);
    }
    if (data2.file) {
      event.output = data2.file;
    }
    if (data2.source) {
      event.file = data2.source;
    } else if (data2.item || data2.id) {
      const item2 = data2.item ? data2.item : store.query("GET_ITEM", data2.id);
      event.file = item2 ? createItemAPI(item2) : null;
    }
    if (data2.items) {
      event.items = data2.items.map(createItemAPI);
    }
    if (/progress/.test(name2)) {
      event.progress = data2.progress;
    }
    if (data2.hasOwnProperty("origin") && data2.hasOwnProperty("target")) {
      event.origin = data2.origin;
      event.target = data2.target;
    }
    return event;
  };
  const eventRoutes = {
    DID_DESTROY: createEvent("destroy"),
    DID_INIT: createEvent("init"),
    DID_THROW_MAX_FILES: createEvent("warning"),
    DID_INIT_ITEM: createEvent("initfile"),
    DID_START_ITEM_LOAD: createEvent("addfilestart"),
    DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent("addfileprogress"),
    DID_LOAD_ITEM: createEvent("addfile"),
    DID_THROW_ITEM_INVALID: [createEvent("error"), createEvent("addfile")],
    DID_THROW_ITEM_LOAD_ERROR: [createEvent("error"), createEvent("addfile")],
    DID_THROW_ITEM_REMOVE_ERROR: [createEvent("error"), createEvent("removefile")],
    DID_PREPARE_OUTPUT: createEvent("preparefile"),
    DID_START_ITEM_PROCESSING: createEvent("processfilestart"),
    DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent("processfileprogress"),
    DID_ABORT_ITEM_PROCESSING: createEvent("processfileabort"),
    DID_COMPLETE_ITEM_PROCESSING: createEvent("processfile"),
    DID_COMPLETE_ITEM_PROCESSING_ALL: createEvent("processfiles"),
    DID_REVERT_ITEM_PROCESSING: createEvent("processfilerevert"),
    DID_THROW_ITEM_PROCESSING_ERROR: [createEvent("error"), createEvent("processfile")],
    DID_REMOVE_ITEM: createEvent("removefile"),
    DID_UPDATE_ITEMS: createEvent("updatefiles"),
    DID_ACTIVATE_ITEM: createEvent("activatefile"),
    DID_REORDER_ITEMS: createEvent("reorderfiles")
  };
  const exposeEvent = (event) => {
    const detail = __spreadValues({ pond: exports }, event);
    delete detail.type;
    view.element.dispatchEvent(new CustomEvent(`FilePond:${event.type}`, {
      detail,
      bubbles: true,
      cancelable: true,
      composed: true
    }));
    const params = [];
    if (event.hasOwnProperty("error")) {
      params.push(event.error);
    }
    if (event.hasOwnProperty("file")) {
      params.push(event.file);
    }
    const filtered = ["type", "error", "file"];
    Object.keys(event).filter((key) => !filtered.includes(key)).forEach((key) => params.push(event[key]));
    exports.fire(event.type, ...params);
    const handler = store.query(`GET_ON${event.type.toUpperCase()}`);
    if (handler) {
      handler(...params);
    }
  };
  const routeActionsToEvents = (actions2) => {
    if (!actions2.length)
      return;
    actions2.filter((action) => eventRoutes[action.type]).forEach((action) => {
      const routes = eventRoutes[action.type];
      (Array.isArray(routes) ? routes : [routes]).forEach((route2) => {
        if (action.type === "DID_INIT_ITEM") {
          exposeEvent(route2(action.data));
        } else {
          setTimeout(() => {
            exposeEvent(route2(action.data));
          }, 0);
        }
      });
    });
  };
  const setOptions2 = (options) => store.dispatch("SET_OPTIONS", { options });
  const getFile = (query) => store.query("GET_ACTIVE_ITEM", query);
  const prepareFile = (query) => new Promise((resolve, reject) => {
    store.dispatch("REQUEST_ITEM_PREPARE", {
      query,
      success: (item2) => {
        resolve(item2);
      },
      failure: (error2) => {
        reject(error2);
      }
    });
  });
  const addFile = (source, options = {}) => new Promise((resolve, reject) => {
    addFiles([{ source, options }], { index: options.index }).then((items) => resolve(items && items[0])).catch(reject);
  });
  const isFilePondFile = (obj) => obj.file && obj.id;
  const removeFile = (query, options) => {
    if (typeof query === "object" && !isFilePondFile(query) && !options) {
      options = query;
      query = void 0;
    }
    store.dispatch("REMOVE_ITEM", __spreadProps(__spreadValues({}, options), { query }));
    return store.query("GET_ACTIVE_ITEM", query) === null;
  };
  const addFiles = (...args) => new Promise((resolve, reject) => {
    const sources = [];
    const options = {};
    if (isArray(args[0])) {
      sources.push.apply(sources, args[0]);
      Object.assign(options, args[1] || {});
    } else {
      const lastArgument = args[args.length - 1];
      if (typeof lastArgument === "object" && !(lastArgument instanceof Blob)) {
        Object.assign(options, args.pop());
      }
      sources.push(...args);
    }
    store.dispatch("ADD_ITEMS", {
      items: sources,
      index: options.index,
      interactionMethod: InteractionMethod.API,
      success: resolve,
      failure: reject
    });
  });
  const getFiles2 = () => store.query("GET_ACTIVE_ITEMS");
  const processFile = (query) => new Promise((resolve, reject) => {
    store.dispatch("REQUEST_ITEM_PROCESSING", {
      query,
      success: (item2) => {
        resolve(item2);
      },
      failure: (error2) => {
        reject(error2);
      }
    });
  });
  const prepareFiles = (...args) => {
    const queries2 = Array.isArray(args[0]) ? args[0] : args;
    const items = queries2.length ? queries2 : getFiles2();
    return Promise.all(items.map(prepareFile));
  };
  const processFiles = (...args) => {
    const queries2 = Array.isArray(args[0]) ? args[0] : args;
    if (!queries2.length) {
      const files = getFiles2().filter((item2) => !(item2.status === ItemStatus.IDLE && item2.origin === FileOrigin.LOCAL) && item2.status !== ItemStatus.PROCESSING && item2.status !== ItemStatus.PROCESSING_COMPLETE && item2.status !== ItemStatus.PROCESSING_REVERT_ERROR);
      return Promise.all(files.map(processFile));
    }
    return Promise.all(queries2.map(processFile));
  };
  const removeFiles = (...args) => {
    const queries2 = Array.isArray(args[0]) ? args[0] : args;
    let options;
    if (typeof queries2[queries2.length - 1] === "object") {
      options = queries2.pop();
    } else if (Array.isArray(args[0])) {
      options = args[1];
    }
    const files = getFiles2();
    if (!queries2.length)
      return Promise.all(files.map((file2) => removeFile(file2, options)));
    const mappedQueries = queries2.map((query) => isNumber(query) ? files[query] ? files[query].id : null : query).filter((query) => query);
    return mappedQueries.map((q) => removeFile(q, options));
  };
  const exports = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, on()), readWriteApi), createOptionAPI(store, defaultOptions2)), {
    setOptions: setOptions2,
    addFile,
    addFiles,
    getFile,
    processFile,
    prepareFile,
    removeFile,
    moveFile: (query, index) => store.dispatch("MOVE_ITEM", { query, index }),
    getFiles: getFiles2,
    processFiles,
    removeFiles,
    prepareFiles,
    sort: (compare) => store.dispatch("SORT", { compare }),
    browse: () => {
      var input = view.element.querySelector("input[type=file]");
      if (input) {
        input.click();
      }
    },
    destroy: () => {
      exports.fire("destroy", view.element);
      store.dispatch("ABORT_ALL");
      view._destroy();
      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener("visibilitychange", visibilityHandler);
      store.dispatch("DID_DESTROY");
    },
    insertBefore: (element) => insertBefore(view.element, element),
    insertAfter: (element) => insertAfter(view.element, element),
    appendTo: (element) => element.appendChild(view.element),
    replaceElement: (element) => {
      insertBefore(view.element, element);
      element.parentNode.removeChild(element);
      originalElement = element;
    },
    restoreElement: () => {
      if (!originalElement) {
        return;
      }
      insertAfter(originalElement, view.element);
      view.element.parentNode.removeChild(view.element);
      originalElement = null;
    },
    isAttachedTo: (element) => view.element === element || originalElement === element,
    element: {
      get: () => view.element
    },
    status: {
      get: () => store.query("GET_STATUS")
    }
  });
  store.dispatch("DID_INIT");
  return createObject(exports);
};
const createAppObject = (customOptions = {}) => {
  const defaultOptions2 = {};
  forin(getOptions(), (key, value) => {
    defaultOptions2[key] = value[0];
  });
  const app = createApp(__spreadValues(__spreadValues({}, defaultOptions2), customOptions));
  return app;
};
const lowerCaseFirstLetter = (string) => string.charAt(0).toLowerCase() + string.slice(1);
const attributeNameToPropertyName = (attributeName) => toCamels(attributeName.replace(/^data-/, ""));
const mapObject = (object, propertyMap) => {
  forin(propertyMap, (selector, mapping) => {
    forin(object, (property, value) => {
      const selectorRegExp = new RegExp(selector);
      const matches = selectorRegExp.test(property);
      if (!matches) {
        return;
      }
      delete object[property];
      if (mapping === false) {
        return;
      }
      if (isString(mapping)) {
        object[mapping] = value;
        return;
      }
      const group = mapping.group;
      if (isObject(mapping) && !object[group]) {
        object[group] = {};
      }
      object[group][lowerCaseFirstLetter(property.replace(selectorRegExp, ""))] = value;
    });
    if (mapping.mapping) {
      mapObject(object[mapping.group], mapping.mapping);
    }
  });
};
const getAttributesAsObject = (node, attributeMapping = {}) => {
  const attributes = [];
  forin(node.attributes, (index) => {
    attributes.push(node.attributes[index]);
  });
  const output = attributes.filter((attribute) => attribute.name).reduce((obj, attribute) => {
    const value = attr(node, attribute.name);
    obj[attributeNameToPropertyName(attribute.name)] = value === attribute.name ? true : value;
    return obj;
  }, {});
  mapObject(output, attributeMapping);
  return output;
};
const createAppAtElement = (element, options = {}) => {
  const attributeMapping = {
    "^class$": "className",
    "^multiple$": "allowMultiple",
    "^capture$": "captureMethod",
    "^webkitdirectory$": "allowDirectoriesOnly",
    "^server": {
      group: "server",
      mapping: {
        "^process": {
          group: "process"
        },
        "^revert": {
          group: "revert"
        },
        "^fetch": {
          group: "fetch"
        },
        "^restore": {
          group: "restore"
        },
        "^load": {
          group: "load"
        }
      }
    },
    "^type$": false,
    "^files$": false
  };
  applyFilters("SET_ATTRIBUTE_TO_OPTION_MAP", attributeMapping);
  const mergedOptions = __spreadValues({}, options);
  const attributeOptions = getAttributesAsObject(element.nodeName === "FIELDSET" ? element.querySelector("input[type=file]") : element, attributeMapping);
  Object.keys(attributeOptions).forEach((key) => {
    if (isObject(attributeOptions[key])) {
      if (!isObject(mergedOptions[key])) {
        mergedOptions[key] = {};
      }
      Object.assign(mergedOptions[key], attributeOptions[key]);
    } else {
      mergedOptions[key] = attributeOptions[key];
    }
  });
  mergedOptions.files = (options.files || []).concat(Array.from(element.querySelectorAll("input:not([type=file])")).map((input) => ({
    source: input.value,
    options: {
      type: input.dataset.type
    }
  })));
  const app = createAppObject(mergedOptions);
  if (element.files) {
    Array.from(element.files).forEach((file2) => {
      app.addFile(file2);
    });
  }
  app.replaceElement(element);
  return app;
};
const createApp$1 = (...args) => isNode(args[0]) ? createAppAtElement(...args) : createAppObject(...args);
const PRIVATE_METHODS = ["fire", "_read", "_write"];
const createAppAPI = (app) => {
  const api = {};
  copyObjectPropertiesToObject(app, api, PRIVATE_METHODS);
  return api;
};
const replaceInString = (string, replacements) => string.replace(/(?:{([a-zA-Z]+)})/g, (match, group) => replacements[group]);
const createWorker$1 = (fn2) => {
  const workerBlob = new Blob(["(", fn2.toString(), ")()"], {
    type: "application/javascript"
  });
  const workerURL = URL.createObjectURL(workerBlob);
  const worker = new Worker(workerURL);
  return {
    transfer: (message, cb) => {
    },
    post: (message, cb, transferList) => {
      const id = getUniqueId$1();
      worker.onmessage = (e) => {
        if (e.data.id === id) {
          cb(e.data.message);
        }
      };
      worker.postMessage({
        id,
        message
      }, transferList);
    },
    terminate: () => {
      worker.terminate();
      URL.revokeObjectURL(workerURL);
    }
  };
};
const loadImage$2 = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    resolve(img);
  };
  img.onerror = (e) => {
    reject(e);
  };
  img.src = url;
});
const renameFile = (file2, name2) => {
  const renamedFile = file2.slice(0, file2.size, file2.type);
  renamedFile.lastModifiedDate = file2.lastModifiedDate;
  renamedFile.name = name2;
  return renamedFile;
};
const copyFile = (file2) => renameFile(file2, file2.name);
const registeredPlugins = [];
const createAppPlugin = (plugin2) => {
  if (registeredPlugins.includes(plugin2)) {
    return;
  }
  registeredPlugins.push(plugin2);
  const pluginOutline = plugin2({
    addFilter,
    utils: {
      Type,
      forin,
      isString,
      isFile,
      toNaturalFileSize,
      replaceInString,
      getExtensionFromFilename,
      getFilenameWithoutExtension: getFilenameWithoutExtension$1,
      guesstimateMimeType,
      getFileFromBlob,
      getFilenameFromURL,
      createRoute,
      createWorker: createWorker$1,
      createView,
      createItemAPI,
      loadImage: loadImage$2,
      copyFile,
      renameFile,
      createBlob: createBlob$1,
      applyFilterChain,
      text,
      getNumericAspectRatioFromString
    },
    views: {
      fileActionButton
    }
  });
  extendDefaultOptions(pluginOutline.options);
};
const isOperaMini = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]";
const hasPromises = () => "Promise" in window;
const hasBlobSlice = () => "slice" in Blob.prototype;
const hasCreateObjectURL = () => "URL" in window && "createObjectURL" in window.URL;
const hasVisibility = () => "visibilityState" in document;
const hasTiming = () => "performance" in window;
const hasCSSSupports = () => "supports" in (window.CSS || {});
const isIE11 = () => /MSIE|Trident/.test(window.navigator.userAgent);
const supported = (() => {
  const isSupported = isBrowser$8() && !isOperaMini() && hasVisibility() && hasPromises() && hasBlobSlice() && hasCreateObjectURL() && hasTiming() && (hasCSSSupports() || isIE11());
  return () => isSupported;
})();
const state = {
  apps: []
};
const name = "filepond";
const fn = () => {
};
let OptionTypes = {};
let create$f = fn;
let destroy = fn;
let parse = fn;
let find = fn;
let registerPlugin = fn;
let getOptions$1 = fn;
let setOptions$1 = fn;
if (supported()) {
  createPainter(() => {
    state.apps.forEach((app) => app._read());
  }, (ts) => {
    state.apps.forEach((app) => app._write(ts));
  });
  const dispatch = () => {
    document.dispatchEvent(new CustomEvent("FilePond:loaded", {
      detail: {
        supported,
        create: create$f,
        destroy,
        parse,
        find,
        registerPlugin,
        setOptions: setOptions$1
      }
    }));
    document.removeEventListener("DOMContentLoaded", dispatch);
  };
  if (document.readyState !== "loading") {
    setTimeout(() => dispatch(), 0);
  } else {
    document.addEventListener("DOMContentLoaded", dispatch);
  }
  const updateOptionTypes = () => forin(getOptions(), (key, value) => {
    OptionTypes[key] = value[1];
  });
  OptionTypes = {};
  updateOptionTypes();
  create$f = (...args) => {
    const app = createApp$1(...args);
    app.on("destroy", destroy);
    state.apps.push(app);
    return createAppAPI(app);
  };
  destroy = (hook) => {
    const indexToRemove = state.apps.findIndex((app) => app.isAttachedTo(hook));
    if (indexToRemove >= 0) {
      const app = state.apps.splice(indexToRemove, 1)[0];
      app.restoreElement();
      return true;
    }
    return false;
  };
  parse = (context) => {
    const matchedHooks = Array.from(context.querySelectorAll(`.${name}`));
    const newHooks = matchedHooks.filter((newHook) => !state.apps.find((app) => app.isAttachedTo(newHook)));
    return newHooks.map((hook) => create$f(hook));
  };
  find = (hook) => {
    const app = state.apps.find((app2) => app2.isAttachedTo(hook));
    if (!app) {
      return null;
    }
    return createAppAPI(app);
  };
  registerPlugin = (...plugins2) => {
    plugins2.forEach(createAppPlugin);
    updateOptionTypes();
  };
  getOptions$1 = () => {
    const opts = {};
    forin(getOptions(), (key, value) => {
      opts[key] = value[0];
    });
    return opts;
  };
  setOptions$1 = (opts) => {
    if (isObject(opts)) {
      state.apps.forEach((app) => {
        app.setOptions(opts);
      });
      setOptions(opts);
    }
    return getOptions$1();
  };
}
/*!
 * FilePondPluginFileValidateSize 2.2.5
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const plugin$7 = ({ addFilter: addFilter2, utils }) => {
  const { Type: Type2, replaceInString: replaceInString2, toNaturalFileSize: toNaturalFileSize2 } = utils;
  addFilter2("ALLOW_HOPPER_ITEM", (file2, { query }) => {
    if (!query("GET_ALLOW_FILE_SIZE_VALIDATION")) {
      return true;
    }
    const sizeMax = query("GET_MAX_FILE_SIZE");
    if (sizeMax !== null && file2.size >= sizeMax) {
      return false;
    }
    const sizeMin = query("GET_MIN_FILE_SIZE");
    if (sizeMin !== null && file2.size <= sizeMin) {
      return false;
    }
    return true;
  });
  addFilter2("LOAD_FILE", (file2, { query }) => new Promise((resolve, reject) => {
    if (!query("GET_ALLOW_FILE_SIZE_VALIDATION")) {
      return resolve(file2);
    }
    const fileFilter = query("GET_FILE_VALIDATE_SIZE_FILTER");
    if (fileFilter && !fileFilter(file2)) {
      return resolve(file2);
    }
    const sizeMax = query("GET_MAX_FILE_SIZE");
    if (sizeMax !== null && file2.size >= sizeMax) {
      reject({
        status: {
          main: query("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),
          sub: replaceInString2(query("GET_LABEL_MAX_FILE_SIZE"), {
            filesize: toNaturalFileSize2(sizeMax, ".", query("GET_FILE_SIZE_BASE"), query("GET_FILE_SIZE_LABELS", query))
          })
        }
      });
      return;
    }
    const sizeMin = query("GET_MIN_FILE_SIZE");
    if (sizeMin !== null && file2.size <= sizeMin) {
      reject({
        status: {
          main: query("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),
          sub: replaceInString2(query("GET_LABEL_MIN_FILE_SIZE"), {
            filesize: toNaturalFileSize2(sizeMin, ".", query("GET_FILE_SIZE_BASE"), query("GET_FILE_SIZE_LABELS", query))
          })
        }
      });
      return;
    }
    const totalSizeMax = query("GET_MAX_TOTAL_FILE_SIZE");
    if (totalSizeMax !== null) {
      const currentTotalSize = query("GET_ACTIVE_ITEMS").reduce((total, item2) => {
        return total + item2.fileSize;
      }, 0);
      if (currentTotalSize > totalSizeMax) {
        reject({
          status: {
            main: query("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),
            sub: replaceInString2(query("GET_LABEL_MAX_TOTAL_FILE_SIZE"), {
              filesize: toNaturalFileSize2(totalSizeMax, ".", query("GET_FILE_SIZE_BASE"), query("GET_FILE_SIZE_LABELS", query))
            })
          }
        });
        return;
      }
    }
    resolve(file2);
  }));
  return {
    options: {
      allowFileSizeValidation: [true, Type2.BOOLEAN],
      maxFileSize: [null, Type2.INT],
      minFileSize: [null, Type2.INT],
      maxTotalFileSize: [null, Type2.INT],
      fileValidateSizeFilter: [null, Type2.FUNCTION],
      labelMinFileSizeExceeded: ["File is too small", Type2.STRING],
      labelMinFileSize: ["Minimum file size is {filesize}", Type2.STRING],
      labelMaxFileSizeExceeded: ["File is too large", Type2.STRING],
      labelMaxFileSize: ["Maximum file size is {filesize}", Type2.STRING],
      labelMaxTotalFileSizeExceeded: ["Maximum total size exceeded", Type2.STRING],
      labelMaxTotalFileSize: ["Maximum total file size is {filesize}", Type2.STRING]
    }
  };
};
const isBrowser$7 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$7) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin$7 }));
}
/*!
 * FilePondPluginFileValidateType 1.2.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const plugin$6 = ({ addFilter: addFilter2, utils }) => {
  const {
    Type: Type2,
    isString: isString2,
    replaceInString: replaceInString2,
    guesstimateMimeType: guesstimateMimeType2,
    getExtensionFromFilename: getExtensionFromFilename2,
    getFilenameFromURL: getFilenameFromURL2
  } = utils;
  const mimeTypeMatchesWildCard = (mimeType, wildcard) => {
    const mimeTypeGroup = (/^[^/]+/.exec(mimeType) || []).pop();
    const wildcardGroup = wildcard.slice(0, -2);
    return mimeTypeGroup === wildcardGroup;
  };
  const isValidMimeType = (acceptedTypes, userInputType) => acceptedTypes.some((acceptedType) => {
    if (/\*$/.test(acceptedType)) {
      return mimeTypeMatchesWildCard(userInputType, acceptedType);
    }
    return acceptedType === userInputType;
  });
  const getItemType = (item2) => {
    let type = "";
    if (isString2(item2)) {
      const filename = getFilenameFromURL2(item2);
      const extension = getExtensionFromFilename2(filename);
      if (extension) {
        type = guesstimateMimeType2(extension);
      }
    } else {
      type = item2.type;
    }
    return type;
  };
  const validateFile = (item2, acceptedFileTypes, typeDetector) => {
    if (acceptedFileTypes.length === 0) {
      return true;
    }
    const type = getItemType(item2);
    if (!typeDetector) {
      return isValidMimeType(acceptedFileTypes, type);
    }
    return new Promise((resolve, reject) => {
      typeDetector(item2, type).then((detectedType) => {
        if (isValidMimeType(acceptedFileTypes, detectedType)) {
          resolve();
        } else {
          reject();
        }
      }).catch(reject);
    });
  };
  const applyMimeTypeMap = (map2) => (acceptedFileType) => map2[acceptedFileType] === null ? false : map2[acceptedFileType] || acceptedFileType;
  addFilter2("SET_ATTRIBUTE_TO_OPTION_MAP", (map2) => Object.assign(map2, {
    accept: "acceptedFileTypes"
  }));
  addFilter2("ALLOW_HOPPER_ITEM", (file2, { query }) => {
    if (!query("GET_ALLOW_FILE_TYPE_VALIDATION")) {
      return true;
    }
    return validateFile(file2, query("GET_ACCEPTED_FILE_TYPES"));
  });
  addFilter2("LOAD_FILE", (file2, { query }) => new Promise((resolve, reject) => {
    if (!query("GET_ALLOW_FILE_TYPE_VALIDATION")) {
      resolve(file2);
      return;
    }
    const acceptedFileTypes = query("GET_ACCEPTED_FILE_TYPES");
    const typeDetector = query("GET_FILE_VALIDATE_TYPE_DETECT_TYPE");
    const validationResult = validateFile(file2, acceptedFileTypes, typeDetector);
    const handleRejection = () => {
      const acceptedFileTypesMapped = acceptedFileTypes.map(applyMimeTypeMap(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter((label) => label !== false);
      reject({
        status: {
          main: query("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
          sub: replaceInString2(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"), {
            allTypes: acceptedFileTypesMapped.join(", "),
            allButLastType: acceptedFileTypesMapped.slice(0, -1).join(", "),
            lastType: acceptedFileTypesMapped[acceptedFileTypesMapped.length - 1]
          })
        }
      });
    };
    if (typeof validationResult === "boolean") {
      if (!validationResult) {
        return handleRejection();
      }
      return resolve(file2);
    }
    validationResult.then(() => {
      resolve(file2);
    }).catch(handleRejection);
  }));
  return {
    options: {
      allowFileTypeValidation: [true, Type2.BOOLEAN],
      acceptedFileTypes: [[], Type2.ARRAY],
      labelFileTypeNotAllowed: ["File is of invalid type", Type2.STRING],
      fileValidateTypeLabelExpectedTypes: [
        "Expects {allButLastType} or {lastType}",
        Type2.STRING
      ],
      fileValidateTypeLabelExpectedTypesMap: [{}, Type2.OBJECT],
      fileValidateTypeDetectType: [null, Type2.FUNCTION]
    }
  };
};
const isBrowser$6 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$6) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin$6 }));
}
/*!
 * FilePondPluginImageExifOrientation 1.0.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const isJPEG = (file2) => /^image\/jpeg/.test(file2.type);
const Marker = {
  JPEG: 65496,
  APP1: 65505,
  EXIF: 1165519206,
  TIFF: 18761,
  Orientation: 274,
  Unknown: 65280
};
const getUint16 = (view, offset, little = false) => view.getUint16(offset, little);
const getUint32 = (view, offset, little = false) => view.getUint32(offset, little);
const getImageOrientation = (file2) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = function(e) {
    const view = new DataView(e.target.result);
    if (getUint16(view, 0) !== Marker.JPEG) {
      resolve(-1);
      return;
    }
    const length = view.byteLength;
    let offset = 2;
    while (offset < length) {
      const marker = getUint16(view, offset);
      offset += 2;
      if (marker === Marker.APP1) {
        if (getUint32(view, offset += 2) !== Marker.EXIF) {
          break;
        }
        const little = getUint16(view, offset += 6) === Marker.TIFF;
        offset += getUint32(view, offset + 4, little);
        const tags = getUint16(view, offset, little);
        offset += 2;
        for (let i = 0; i < tags; i++) {
          if (getUint16(view, offset + i * 12, little) === Marker.Orientation) {
            resolve(getUint16(view, offset + i * 12 + 8, little));
            return;
          }
        }
      } else if ((marker & Marker.Unknown) !== Marker.Unknown) {
        break;
      } else {
        offset += getUint16(view, offset);
      }
    }
    resolve(-1);
  };
  reader.readAsArrayBuffer(file2.slice(0, 64 * 1024));
});
const IS_BROWSER$1 = (() => typeof window !== "undefined" && typeof window.document !== "undefined")();
const isBrowser$5 = () => IS_BROWSER$1;
const testSrc = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";
let shouldCorrect = void 0;
const testImage = isBrowser$5() ? new Image() : {};
testImage.onload = () => shouldCorrect = testImage.naturalWidth > testImage.naturalHeight;
testImage.src = testSrc;
const shouldCorrectImageExifOrientation = () => shouldCorrect;
const plugin$5 = ({ addFilter: addFilter2, utils }) => {
  const { Type: Type2, isFile: isFile2 } = utils;
  addFilter2("DID_LOAD_ITEM", (item2, { query }) => new Promise((resolve, reject) => {
    const file2 = item2.file;
    if (!isFile2(file2) || !isJPEG(file2) || !query("GET_ALLOW_IMAGE_EXIF_ORIENTATION") || !shouldCorrectImageExifOrientation()) {
      return resolve(item2);
    }
    getImageOrientation(file2).then((orientation) => {
      item2.setMetadata("exif", { orientation });
      resolve(item2);
    });
  }));
  return {
    options: {
      allowImageExifOrientation: [true, Type2.BOOLEAN]
    }
  };
};
const isBrowser$1$1 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$1$1) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin$5 }));
}
/*!
 * FilePondPluginImageCrop 2.0.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const isImage$3 = (file2) => /^image/.test(file2.type);
const plugin$4 = ({ addFilter: addFilter2, utils }) => {
  const { Type: Type2, isFile: isFile2, getNumericAspectRatioFromString: getNumericAspectRatioFromString2 } = utils;
  const allowCrop = (item2, query) => !(!isImage$3(item2.file) || !query("GET_ALLOW_IMAGE_CROP"));
  const isObject2 = (value) => typeof value === "object";
  const isNumber2 = (value) => typeof value === "number";
  const updateCrop = (item2, obj) => item2.setMetadata("crop", Object.assign({}, item2.getMetadata("crop"), obj));
  addFilter2("DID_CREATE_ITEM", (item2, { query }) => {
    item2.extend("setImageCrop", (crop) => {
      if (!allowCrop(item2, query) || !isObject2(center))
        return;
      item2.setMetadata("crop", crop);
      return crop;
    });
    item2.extend("setImageCropCenter", (center2) => {
      if (!allowCrop(item2, query) || !isObject2(center2))
        return;
      return updateCrop(item2, { center: center2 });
    });
    item2.extend("setImageCropZoom", (zoom) => {
      if (!allowCrop(item2, query) || !isNumber2(zoom))
        return;
      return updateCrop(item2, { zoom: Math.max(1, zoom) });
    });
    item2.extend("setImageCropRotation", (rotation) => {
      if (!allowCrop(item2, query) || !isNumber2(rotation))
        return;
      return updateCrop(item2, { rotation });
    });
    item2.extend("setImageCropFlip", (flip) => {
      if (!allowCrop(item2, query) || !isObject2(flip))
        return;
      return updateCrop(item2, { flip });
    });
    item2.extend("setImageCropAspectRatio", (newAspectRatio) => {
      if (!allowCrop(item2, query) || typeof newAspectRatio === "undefined")
        return;
      const currentCrop = item2.getMetadata("crop");
      const aspectRatio = getNumericAspectRatioFromString2(newAspectRatio);
      const newCrop = {
        center: {
          x: 0.5,
          y: 0.5
        },
        flip: currentCrop ? Object.assign({}, currentCrop.flip) : {
          horizontal: false,
          vertical: false
        },
        rotation: 0,
        zoom: 1,
        aspectRatio
      };
      item2.setMetadata("crop", newCrop);
      return newCrop;
    });
  });
  addFilter2("DID_LOAD_ITEM", (item2, { query }) => new Promise((resolve, reject) => {
    const file2 = item2.file;
    if (!isFile2(file2) || !isImage$3(file2) || !query("GET_ALLOW_IMAGE_CROP")) {
      return resolve(item2);
    }
    const crop = item2.getMetadata("crop");
    if (crop) {
      return resolve(item2);
    }
    const humanAspectRatio = query("GET_IMAGE_CROP_ASPECT_RATIO");
    item2.setMetadata("crop", {
      center: {
        x: 0.5,
        y: 0.5
      },
      flip: {
        horizontal: false,
        vertical: false
      },
      rotation: 0,
      zoom: 1,
      aspectRatio: humanAspectRatio ? getNumericAspectRatioFromString2(humanAspectRatio) : null
    });
    resolve(item2);
  }));
  return {
    options: {
      allowImageCrop: [true, Type2.BOOLEAN],
      imageCropAspectRatio: [null, Type2.STRING]
    }
  };
};
const isBrowser$4 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$4) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin$4 }));
}
/*!
 * FilePondPluginImageEdit 1.6.3
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const isPreviewableImage$1 = (file2) => /^image/.test(file2.type);
const plugin$3 = (_) => {
  const { addFilter: addFilter2, utils, views } = _;
  const { Type: Type2, createRoute: createRoute2, createItemAPI: createItemAPI2 = (item2) => item2 } = utils;
  const { fileActionButton: fileActionButton2 } = views;
  addFilter2("SHOULD_REMOVE_ON_REVERT", (shouldRemove, { item: item2, query }) => new Promise((resolve) => {
    const { file: file2 } = item2;
    const canEdit = query("GET_ALLOW_IMAGE_EDIT") && query("GET_IMAGE_EDIT_ALLOW_EDIT") && isPreviewableImage$1(file2);
    resolve(!canEdit);
  }));
  addFilter2("DID_LOAD_ITEM", (item2, { query, dispatch }) => new Promise((resolve, reject) => {
    if (item2.origin > 1) {
      resolve(item2);
      return;
    }
    const { file: file2 } = item2;
    if (!query("GET_ALLOW_IMAGE_EDIT") || !query("GET_IMAGE_EDIT_INSTANT_EDIT")) {
      resolve(item2);
      return;
    }
    if (!isPreviewableImage$1(file2)) {
      resolve(item2);
      return;
    }
    const createEditorResponseHandler = (item3, resolve2, reject2) => (userDidConfirm) => {
      editRequestQueue.shift();
      if (userDidConfirm) {
        resolve2(item3);
      } else {
        reject2(item3);
      }
      dispatch("KICK");
      requestEdit();
    };
    const requestEdit = () => {
      if (!editRequestQueue.length)
        return;
      const { item: item3, resolve: resolve2, reject: reject2 } = editRequestQueue[0];
      dispatch("EDIT_ITEM", {
        id: item3.id,
        handleEditorResponse: createEditorResponseHandler(item3, resolve2, reject2)
      });
    };
    queueEditRequest({ item: item2, resolve, reject });
    if (editRequestQueue.length === 1) {
      requestEdit();
    }
  }));
  addFilter2("DID_CREATE_ITEM", (item2, { query, dispatch }) => {
    item2.extend("edit", () => {
      dispatch("EDIT_ITEM", { id: item2.id });
    });
  });
  const editRequestQueue = [];
  const queueEditRequest = (editRequest) => {
    editRequestQueue.push(editRequest);
    return editRequest;
  };
  addFilter2("CREATE_VIEW", (viewAPI) => {
    const { is, view, query } = viewAPI;
    if (!query("GET_ALLOW_IMAGE_EDIT"))
      return;
    const canShowImagePreview = query("GET_ALLOW_IMAGE_PREVIEW");
    const shouldExtendView = is("file-info") && !canShowImagePreview || is("file") && canShowImagePreview;
    if (!shouldExtendView)
      return;
    const editor = query("GET_IMAGE_EDIT_EDITOR");
    if (!editor)
      return;
    if (!editor.filepondCallbackBridge) {
      editor.outputData = true;
      editor.outputFile = false;
      editor.filepondCallbackBridge = {
        onconfirm: editor.onconfirm || (() => {
        }),
        oncancel: editor.oncancel || (() => {
        })
      };
    }
    const openEditor = ({ root: root2, props, action }) => {
      const { id } = props;
      const { handleEditorResponse } = action;
      editor.cropAspectRatio = root2.query("GET_IMAGE_CROP_ASPECT_RATIO") || editor.cropAspectRatio;
      editor.outputCanvasBackgroundColor = root2.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR") || editor.outputCanvasBackgroundColor;
      const item2 = root2.query("GET_ITEM", id);
      if (!item2)
        return;
      const file2 = item2.file;
      const crop = item2.getMetadata("crop");
      const cropDefault = {
        center: {
          x: 0.5,
          y: 0.5
        },
        flip: {
          horizontal: false,
          vertical: false
        },
        zoom: 1,
        rotation: 0,
        aspectRatio: null
      };
      const resize = item2.getMetadata("resize");
      const filter = item2.getMetadata("filter") || null;
      const filters2 = item2.getMetadata("filters") || null;
      const colors = item2.getMetadata("colors") || null;
      const markup = item2.getMetadata("markup") || null;
      const imageParameters = {
        crop: crop || cropDefault,
        size: resize ? {
          upscale: resize.upscale,
          mode: resize.mode,
          width: resize.size.width,
          height: resize.size.height
        } : null,
        filter: filters2 ? filters2.id || filters2.matrix : root2.query("GET_ALLOW_IMAGE_FILTER") && root2.query("GET_IMAGE_FILTER_COLOR_MATRIX") && !colors ? filter : null,
        color: colors,
        markup
      };
      editor.onconfirm = ({ data: data2 }) => {
        const { crop: crop2, size, filter: filter2, color, colorMatrix, markup: markup2 } = data2;
        const metadata = {};
        if (crop2) {
          metadata.crop = crop2;
        }
        if (size) {
          const initialSize = (item2.getMetadata("resize") || {}).size;
          const targetSize = {
            width: size.width,
            height: size.height
          };
          if (!(targetSize.width && targetSize.height) && initialSize) {
            targetSize.width = initialSize.width;
            targetSize.height = initialSize.height;
          }
          if (targetSize.width || targetSize.height) {
            metadata.resize = {
              upscale: size.upscale,
              mode: size.mode,
              size: targetSize
            };
          }
        }
        if (markup2) {
          metadata.markup = markup2;
        }
        metadata.colors = color;
        metadata.filters = filter2;
        metadata.filter = colorMatrix;
        item2.setMetadata(metadata);
        editor.filepondCallbackBridge.onconfirm(data2, createItemAPI2(item2));
        if (!handleEditorResponse)
          return;
        editor.onclose = () => {
          handleEditorResponse(true);
          editor.onclose = null;
        };
      };
      editor.oncancel = () => {
        editor.filepondCallbackBridge.oncancel(createItemAPI2(item2));
        if (!handleEditorResponse)
          return;
        editor.onclose = () => {
          handleEditorResponse(false);
          editor.onclose = null;
        };
      };
      editor.open(file2, imageParameters);
    };
    const didLoadItem2 = ({ root: root2, props }) => {
      if (!query("GET_IMAGE_EDIT_ALLOW_EDIT"))
        return;
      const { id } = props;
      const item2 = query("GET_ITEM", id);
      if (!item2)
        return;
      const file2 = item2.file;
      if (!isPreviewableImage$1(file2))
        return;
      root2.ref.handleEdit = (e) => {
        e.stopPropagation();
        root2.dispatch("EDIT_ITEM", { id });
      };
      if (canShowImagePreview) {
        const buttonView = view.createChildView(fileActionButton2, {
          label: "edit",
          icon: query("GET_IMAGE_EDIT_ICON_EDIT"),
          opacity: 0
        });
        buttonView.element.classList.add("filepond--action-edit-item");
        buttonView.element.dataset.align = query("GET_STYLE_IMAGE_EDIT_BUTTON_EDIT_ITEM_POSITION");
        buttonView.on("click", root2.ref.handleEdit);
        root2.ref.buttonEditItem = view.appendChildView(buttonView);
      } else {
        const filenameElement = view.element.querySelector(".filepond--file-info-main");
        const editButton = document.createElement("button");
        editButton.className = "filepond--action-edit-item-alt";
        editButton.innerHTML = query("GET_IMAGE_EDIT_ICON_EDIT") + "<span>edit</span>";
        editButton.addEventListener("click", root2.ref.handleEdit);
        filenameElement.appendChild(editButton);
        root2.ref.editButton = editButton;
      }
    };
    view.registerDestroyer(({ root: root2 }) => {
      if (root2.ref.buttonEditItem) {
        root2.ref.buttonEditItem.off("click", root2.ref.handleEdit);
      }
      if (root2.ref.editButton) {
        root2.ref.editButton.removeEventListener("click", root2.ref.handleEdit);
      }
    });
    const routes = {
      EDIT_ITEM: openEditor,
      DID_LOAD_ITEM: didLoadItem2
    };
    if (canShowImagePreview) {
      const didPreviewUpdate = ({ root: root2 }) => {
        if (!root2.ref.buttonEditItem)
          return;
        root2.ref.buttonEditItem.opacity = 1;
      };
      routes.DID_IMAGE_PREVIEW_SHOW = didPreviewUpdate;
    }
    view.registerWriter(createRoute2(routes));
  });
  return {
    options: {
      allowImageEdit: [true, Type2.BOOLEAN],
      styleImageEditButtonEditItemPosition: ["bottom center", Type2.STRING],
      imageEditInstantEdit: [false, Type2.BOOLEAN],
      imageEditAllowEdit: [true, Type2.BOOLEAN],
      imageEditIconEdit: [
        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M8.5 17h1.586l7-7L15.5 8.414l-7 7V17zm-1.707-2.707l8-8a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 10.5 19h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707z" fill="currentColor" fill-rule="nonzero"/></svg>',
        Type2.STRING
      ],
      imageEditEditor: [null, Type2.OBJECT]
    }
  };
};
const isBrowser$3 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$3) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin$3 }));
}
/*!
 * FilePondPluginImagePreview 4.6.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const isPreviewableImage = (file2) => /^image/.test(file2.type);
const vectorMultiply$1 = (v, amount) => createVector$2(v.x * amount, v.y * amount);
const vectorAdd$1 = (a, b) => createVector$2(a.x + b.x, a.y + b.y);
const vectorNormalize$1 = (v) => {
  const l = Math.sqrt(v.x * v.x + v.y * v.y);
  if (l === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  return createVector$2(v.x / l, v.y / l);
};
const vectorRotate$1 = (v, radians, origin) => {
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const t = createVector$2(v.x - origin.x, v.y - origin.y);
  return createVector$2(origin.x + cos * t.x - sin * t.y, origin.y + sin * t.x + cos * t.y);
};
const createVector$2 = (x = 0, y = 0) => ({ x, y });
const getMarkupValue$1 = (value, size, scalar = 1, axis) => {
  if (typeof value === "string") {
    return parseFloat(value) * scalar;
  }
  if (typeof value === "number") {
    return value * (axis ? size[axis] : Math.min(size.width, size.height));
  }
  return;
};
const getMarkupStyles$1 = (markup, size, scale) => {
  const lineStyle = markup.borderStyle || markup.lineStyle || "solid";
  const fill = markup.backgroundColor || markup.fontColor || "transparent";
  const stroke = markup.borderColor || markup.lineColor || "transparent";
  const strokeWidth = getMarkupValue$1(markup.borderWidth || markup.lineWidth, size, scale);
  const lineCap = markup.lineCap || "round";
  const lineJoin = markup.lineJoin || "round";
  const dashes = typeof lineStyle === "string" ? "" : lineStyle.map((v) => getMarkupValue$1(v, size, scale)).join(",");
  const opacity = markup.opacity || 1;
  return {
    "stroke-linecap": lineCap,
    "stroke-linejoin": lineJoin,
    "stroke-width": strokeWidth || 0,
    "stroke-dasharray": dashes,
    stroke,
    fill,
    opacity
  };
};
const isDefined$1 = (value) => value != null;
const getMarkupRect$1 = (rect, size, scalar = 1) => {
  let left = getMarkupValue$1(rect.x, size, scalar, "width") || getMarkupValue$1(rect.left, size, scalar, "width");
  let top = getMarkupValue$1(rect.y, size, scalar, "height") || getMarkupValue$1(rect.top, size, scalar, "height");
  let width = getMarkupValue$1(rect.width, size, scalar, "width");
  let height = getMarkupValue$1(rect.height, size, scalar, "height");
  let right = getMarkupValue$1(rect.right, size, scalar, "width");
  let bottom = getMarkupValue$1(rect.bottom, size, scalar, "height");
  if (!isDefined$1(top)) {
    if (isDefined$1(height) && isDefined$1(bottom)) {
      top = size.height - height - bottom;
    } else {
      top = bottom;
    }
  }
  if (!isDefined$1(left)) {
    if (isDefined$1(width) && isDefined$1(right)) {
      left = size.width - width - right;
    } else {
      left = right;
    }
  }
  if (!isDefined$1(width)) {
    if (isDefined$1(left) && isDefined$1(right)) {
      width = size.width - left - right;
    } else {
      width = 0;
    }
  }
  if (!isDefined$1(height)) {
    if (isDefined$1(top) && isDefined$1(bottom)) {
      height = size.height - top - bottom;
    } else {
      height = 0;
    }
  }
  return {
    x: left || 0,
    y: top || 0,
    width: width || 0,
    height: height || 0
  };
};
const pointsToPathShape$1 = (points) => points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
const setAttributes$1 = (element, attr2) => Object.keys(attr2).forEach((key) => element.setAttribute(key, attr2[key]));
const ns$1 = "http://www.w3.org/2000/svg";
const svg$1 = (tag, attr2) => {
  const element = document.createElementNS(ns$1, tag);
  if (attr2) {
    setAttributes$1(element, attr2);
  }
  return element;
};
const updateRect$1 = (element) => setAttributes$1(element, __spreadValues(__spreadValues({}, element.rect), element.styles));
const updateEllipse$1 = (element) => {
  const cx = element.rect.x + element.rect.width * 0.5;
  const cy = element.rect.y + element.rect.height * 0.5;
  const rx = element.rect.width * 0.5;
  const ry = element.rect.height * 0.5;
  return setAttributes$1(element, __spreadValues({
    cx,
    cy,
    rx,
    ry
  }, element.styles));
};
const IMAGE_FIT_STYLE$1 = {
  contain: "xMidYMid meet",
  cover: "xMidYMid slice"
};
const updateImage$1 = (element, markup) => {
  setAttributes$1(element, __spreadProps(__spreadValues(__spreadValues({}, element.rect), element.styles), {
    preserveAspectRatio: IMAGE_FIT_STYLE$1[markup.fit] || "none"
  }));
};
const TEXT_ANCHOR$1 = {
  left: "start",
  center: "middle",
  right: "end"
};
const updateText$1 = (element, markup, size, scale) => {
  const fontSize = getMarkupValue$1(markup.fontSize, size, scale);
  const fontFamily = markup.fontFamily || "sans-serif";
  const fontWeight = markup.fontWeight || "normal";
  const textAlign = TEXT_ANCHOR$1[markup.textAlign] || "start";
  setAttributes$1(element, __spreadProps(__spreadValues(__spreadValues({}, element.rect), element.styles), {
    "stroke-width": 0,
    "font-weight": fontWeight,
    "font-size": fontSize,
    "font-family": fontFamily,
    "text-anchor": textAlign
  }));
  if (element.text !== markup.text) {
    element.text = markup.text;
    element.textContent = markup.text.length ? markup.text : " ";
  }
};
const updateLine$1 = (element, markup, size, scale) => {
  setAttributes$1(element, __spreadProps(__spreadValues(__spreadValues({}, element.rect), element.styles), {
    fill: "none"
  }));
  const line = element.childNodes[0];
  const begin = element.childNodes[1];
  const end = element.childNodes[2];
  const origin = element.rect;
  const target = {
    x: element.rect.x + element.rect.width,
    y: element.rect.y + element.rect.height
  };
  setAttributes$1(line, {
    x1: origin.x,
    y1: origin.y,
    x2: target.x,
    y2: target.y
  });
  if (!markup.lineDecoration)
    return;
  begin.style.display = "none";
  end.style.display = "none";
  const v = vectorNormalize$1({
    x: target.x - origin.x,
    y: target.y - origin.y
  });
  const l = getMarkupValue$1(0.05, size, scale);
  if (markup.lineDecoration.indexOf("arrow-begin") !== -1) {
    const arrowBeginRotationPoint = vectorMultiply$1(v, l);
    const arrowBeginCenter = vectorAdd$1(origin, arrowBeginRotationPoint);
    const arrowBeginA = vectorRotate$1(origin, 2, arrowBeginCenter);
    const arrowBeginB = vectorRotate$1(origin, -2, arrowBeginCenter);
    setAttributes$1(begin, {
      style: "display:block;",
      d: `M${arrowBeginA.x},${arrowBeginA.y} L${origin.x},${origin.y} L${arrowBeginB.x},${arrowBeginB.y}`
    });
  }
  if (markup.lineDecoration.indexOf("arrow-end") !== -1) {
    const arrowEndRotationPoint = vectorMultiply$1(v, -l);
    const arrowEndCenter = vectorAdd$1(target, arrowEndRotationPoint);
    const arrowEndA = vectorRotate$1(target, 2, arrowEndCenter);
    const arrowEndB = vectorRotate$1(target, -2, arrowEndCenter);
    setAttributes$1(end, {
      style: "display:block;",
      d: `M${arrowEndA.x},${arrowEndA.y} L${target.x},${target.y} L${arrowEndB.x},${arrowEndB.y}`
    });
  }
};
const updatePath$1 = (element, markup, size, scale) => {
  setAttributes$1(element, __spreadProps(__spreadValues({}, element.styles), {
    fill: "none",
    d: pointsToPathShape$1(markup.points.map((point) => ({
      x: getMarkupValue$1(point.x, size, scale, "width"),
      y: getMarkupValue$1(point.y, size, scale, "height")
    })))
  }));
};
const createShape$1 = (node) => (markup) => svg$1(node, { id: markup.id });
const createImage$1 = (markup) => {
  const shape = svg$1("image", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    opacity: "0"
  });
  shape.onload = () => {
    shape.setAttribute("opacity", markup.opacity || 1);
  };
  shape.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", markup.src);
  return shape;
};
const createLine$1 = (markup) => {
  const shape = svg$1("g", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  });
  const line = svg$1("line");
  shape.appendChild(line);
  const begin = svg$1("path");
  shape.appendChild(begin);
  const end = svg$1("path");
  shape.appendChild(end);
  return shape;
};
const CREATE_TYPE_ROUTES$1 = {
  image: createImage$1,
  rect: createShape$1("rect"),
  ellipse: createShape$1("ellipse"),
  text: createShape$1("text"),
  path: createShape$1("path"),
  line: createLine$1
};
const UPDATE_TYPE_ROUTES$1 = {
  rect: updateRect$1,
  ellipse: updateEllipse$1,
  image: updateImage$1,
  text: updateText$1,
  path: updatePath$1,
  line: updateLine$1
};
const createMarkupByType$1 = (type, markup) => CREATE_TYPE_ROUTES$1[type](markup);
const updateMarkupByType$1 = (element, type, markup, size, scale) => {
  if (type !== "path") {
    element.rect = getMarkupRect$1(markup, size, scale);
  }
  element.styles = getMarkupStyles$1(markup, size, scale);
  UPDATE_TYPE_ROUTES$1[type](element, markup, size, scale);
};
const MARKUP_RECT$1 = [
  "x",
  "y",
  "left",
  "top",
  "right",
  "bottom",
  "width",
  "height"
];
const toOptionalFraction$1 = (value) => typeof value === "string" && /%/.test(value) ? parseFloat(value) / 100 : value;
const prepareMarkup$1 = (markup) => {
  const [type, props] = markup;
  const rect = props.points ? {} : MARKUP_RECT$1.reduce((prev, curr) => {
    prev[curr] = toOptionalFraction$1(props[curr]);
    return prev;
  }, {});
  return [
    type,
    __spreadValues(__spreadValues({
      zIndex: 0
    }, props), rect)
  ];
};
const sortMarkupByZIndex$1 = (a, b) => {
  if (a[1].zIndex > b[1].zIndex) {
    return 1;
  }
  if (a[1].zIndex < b[1].zIndex) {
    return -1;
  }
  return 0;
};
const createMarkupView = (_) => _.utils.createView({
  name: "image-preview-markup",
  tag: "svg",
  ignoreRect: true,
  mixins: {
    apis: ["width", "height", "crop", "markup", "resize", "dirty"]
  },
  write: ({ root: root2, props }) => {
    if (!props.dirty)
      return;
    const { crop, resize, markup } = props;
    const viewWidth = props.width;
    const viewHeight = props.height;
    let cropWidth = crop.width;
    let cropHeight = crop.height;
    if (resize) {
      const { size: size2 } = resize;
      let outputWidth = size2 && size2.width;
      let outputHeight = size2 && size2.height;
      const outputFit = resize.mode;
      const outputUpscale = resize.upscale;
      if (outputWidth && !outputHeight)
        outputHeight = outputWidth;
      if (outputHeight && !outputWidth)
        outputWidth = outputHeight;
      const shouldUpscale = cropWidth < outputWidth && cropHeight < outputHeight;
      if (!shouldUpscale || shouldUpscale && outputUpscale) {
        let scalarWidth = outputWidth / cropWidth;
        let scalarHeight = outputHeight / cropHeight;
        if (outputFit === "force") {
          cropWidth = outputWidth;
          cropHeight = outputHeight;
        } else {
          let scalar;
          if (outputFit === "cover") {
            scalar = Math.max(scalarWidth, scalarHeight);
          } else if (outputFit === "contain") {
            scalar = Math.min(scalarWidth, scalarHeight);
          }
          cropWidth = cropWidth * scalar;
          cropHeight = cropHeight * scalar;
        }
      }
    }
    const size = {
      width: viewWidth,
      height: viewHeight
    };
    root2.element.setAttribute("width", size.width);
    root2.element.setAttribute("height", size.height);
    const scale = Math.min(viewWidth / cropWidth, viewHeight / cropHeight);
    root2.element.innerHTML = "";
    const markupFilter = root2.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");
    markup.filter(markupFilter).map(prepareMarkup$1).sort(sortMarkupByZIndex$1).forEach((markup2) => {
      const [type, settings] = markup2;
      const element = createMarkupByType$1(type, settings);
      updateMarkupByType$1(element, type, settings, size, scale);
      root2.element.appendChild(element);
    });
  }
});
const createVector$1$1 = (x, y) => ({ x, y });
const vectorDot$1 = (a, b) => a.x * b.x + a.y * b.y;
const vectorSubtract$1 = (a, b) => createVector$1$1(a.x - b.x, a.y - b.y);
const vectorDistanceSquared$1 = (a, b) => vectorDot$1(vectorSubtract$1(a, b), vectorSubtract$1(a, b));
const vectorDistance$1 = (a, b) => Math.sqrt(vectorDistanceSquared$1(a, b));
const getOffsetPointOnEdge$1 = (length, rotation) => {
  const a = length;
  const A = 1.5707963267948966;
  const B = rotation;
  const C = 1.5707963267948966 - rotation;
  const sinA = Math.sin(A);
  const sinB = Math.sin(B);
  const sinC = Math.sin(C);
  const cosC = Math.cos(C);
  const ratio = a / sinA;
  const b = ratio * sinB;
  const c = ratio * sinC;
  return createVector$1$1(cosC * b, cosC * c);
};
const getRotatedRectSize$1 = (rect, rotation) => {
  const w = rect.width;
  const h2 = rect.height;
  const hor = getOffsetPointOnEdge$1(w, rotation);
  const ver = getOffsetPointOnEdge$1(h2, rotation);
  const tl = createVector$1$1(rect.x + Math.abs(hor.x), rect.y - Math.abs(hor.y));
  const tr = createVector$1$1(rect.x + rect.width + Math.abs(ver.y), rect.y + Math.abs(ver.x));
  const bl = createVector$1$1(rect.x - Math.abs(ver.y), rect.y + rect.height - Math.abs(ver.x));
  return {
    width: vectorDistance$1(tl, tr),
    height: vectorDistance$1(tl, bl)
  };
};
const calculateCanvasSize$1 = (image, canvasAspectRatio, zoom = 1) => {
  const imageAspectRatio = image.height / image.width;
  let canvasWidth = 1;
  let canvasHeight = canvasAspectRatio;
  let imgWidth = 1;
  let imgHeight = imageAspectRatio;
  if (imgHeight > canvasHeight) {
    imgHeight = canvasHeight;
    imgWidth = imgHeight / imageAspectRatio;
  }
  const scalar = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const width = image.width / (zoom * scalar * imgWidth);
  const height = width * canvasAspectRatio;
  return {
    width,
    height
  };
};
const getImageRectZoomFactor$1 = (imageRect, cropRect, rotation, center2) => {
  const cx = center2.x > 0.5 ? 1 - center2.x : center2.x;
  const cy = center2.y > 0.5 ? 1 - center2.y : center2.y;
  const imageWidth = cx * 2 * imageRect.width;
  const imageHeight = cy * 2 * imageRect.height;
  const rotatedCropSize = getRotatedRectSize$1(cropRect, rotation);
  return Math.max(rotatedCropSize.width / imageWidth, rotatedCropSize.height / imageHeight);
};
const getCenteredCropRect$1 = (container, aspectRatio) => {
  let width = container.width;
  let height = width * aspectRatio;
  if (height > container.height) {
    height = container.height;
    width = height / aspectRatio;
  }
  const x = (container.width - width) * 0.5;
  const y = (container.height - height) * 0.5;
  return {
    x,
    y,
    width,
    height
  };
};
const getCurrentCropSize = (imageSize, crop = {}) => {
  let { zoom, rotation, center: center2, aspectRatio } = crop;
  if (!aspectRatio)
    aspectRatio = imageSize.height / imageSize.width;
  const canvasSize = calculateCanvasSize$1(imageSize, aspectRatio, zoom);
  const canvasCenter = {
    x: canvasSize.width * 0.5,
    y: canvasSize.height * 0.5
  };
  const stage = {
    x: 0,
    y: 0,
    width: canvasSize.width,
    height: canvasSize.height,
    center: canvasCenter
  };
  const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
  const stageZoomFactor = getImageRectZoomFactor$1(imageSize, getCenteredCropRect$1(stage, aspectRatio), rotation, shouldLimit ? center2 : { x: 0.5, y: 0.5 });
  const scale = zoom * stageZoomFactor;
  return {
    widthFloat: canvasSize.width / scale,
    heightFloat: canvasSize.height / scale,
    width: Math.round(canvasSize.width / scale),
    height: Math.round(canvasSize.height / scale)
  };
};
const IMAGE_SCALE_SPRING_PROPS = {
  type: "spring",
  stiffness: 0.5,
  damping: 0.45,
  mass: 10
};
const createBitmapView = (_) => _.utils.createView({
  name: "image-bitmap",
  ignoreRect: true,
  mixins: { styles: ["scaleX", "scaleY"] },
  create: ({ root: root2, props }) => {
    root2.appendChild(props.image);
  }
});
const createImageCanvasWrapper = (_) => _.utils.createView({
  name: "image-canvas-wrapper",
  tag: "div",
  ignoreRect: true,
  mixins: {
    apis: ["crop", "width", "height"],
    styles: [
      "originX",
      "originY",
      "translateX",
      "translateY",
      "scaleX",
      "scaleY",
      "rotateZ"
    ],
    animations: {
      originX: IMAGE_SCALE_SPRING_PROPS,
      originY: IMAGE_SCALE_SPRING_PROPS,
      scaleX: IMAGE_SCALE_SPRING_PROPS,
      scaleY: IMAGE_SCALE_SPRING_PROPS,
      translateX: IMAGE_SCALE_SPRING_PROPS,
      translateY: IMAGE_SCALE_SPRING_PROPS,
      rotateZ: IMAGE_SCALE_SPRING_PROPS
    }
  },
  create: ({ root: root2, props }) => {
    props.width = props.image.width;
    props.height = props.image.height;
    root2.ref.bitmap = root2.appendChildView(root2.createChildView(createBitmapView(_), { image: props.image }));
  },
  write: ({ root: root2, props }) => {
    const { flip } = props.crop;
    const { bitmap } = root2.ref;
    bitmap.scaleX = flip.horizontal ? -1 : 1;
    bitmap.scaleY = flip.vertical ? -1 : 1;
  }
});
const createClipView = (_) => _.utils.createView({
  name: "image-clip",
  tag: "div",
  ignoreRect: true,
  mixins: {
    apis: [
      "crop",
      "markup",
      "resize",
      "width",
      "height",
      "dirty",
      "background"
    ],
    styles: ["width", "height", "opacity"],
    animations: {
      opacity: { type: "tween", duration: 250 }
    }
  },
  didWriteView: function({ root: root2, props }) {
    if (!props.background)
      return;
    root2.element.style.backgroundColor = props.background;
  },
  create: ({ root: root2, props }) => {
    root2.ref.image = root2.appendChildView(root2.createChildView(createImageCanvasWrapper(_), Object.assign({}, props)));
    root2.ref.createMarkup = () => {
      if (root2.ref.markup)
        return;
      root2.ref.markup = root2.appendChildView(root2.createChildView(createMarkupView(_), Object.assign({}, props)));
    };
    root2.ref.destroyMarkup = () => {
      if (!root2.ref.markup)
        return;
      root2.removeChildView(root2.ref.markup);
      root2.ref.markup = null;
    };
    const transparencyIndicator = root2.query("GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR");
    if (transparencyIndicator === null)
      return;
    if (transparencyIndicator === "grid") {
      root2.element.dataset.transparencyIndicator = transparencyIndicator;
    } else {
      root2.element.dataset.transparencyIndicator = "color";
    }
  },
  write: ({ root: root2, props, shouldOptimize }) => {
    const { crop, markup, resize, dirty, width, height } = props;
    root2.ref.image.crop = crop;
    const stage = {
      x: 0,
      y: 0,
      width,
      height,
      center: {
        x: width * 0.5,
        y: height * 0.5
      }
    };
    const image = {
      width: root2.ref.image.width,
      height: root2.ref.image.height
    };
    const origin = {
      x: crop.center.x * image.width,
      y: crop.center.y * image.height
    };
    const translation = {
      x: stage.center.x - image.width * crop.center.x,
      y: stage.center.y - image.height * crop.center.y
    };
    const rotation = Math.PI * 2 + crop.rotation % (Math.PI * 2);
    const cropAspectRatio = crop.aspectRatio || image.height / image.width;
    const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
    const stageZoomFactor = getImageRectZoomFactor$1(image, getCenteredCropRect$1(stage, cropAspectRatio), rotation, shouldLimit ? crop.center : { x: 0.5, y: 0.5 });
    const scale = crop.zoom * stageZoomFactor;
    if (markup && markup.length) {
      root2.ref.createMarkup();
      root2.ref.markup.width = width;
      root2.ref.markup.height = height;
      root2.ref.markup.resize = resize;
      root2.ref.markup.dirty = dirty;
      root2.ref.markup.markup = markup;
      root2.ref.markup.crop = getCurrentCropSize(image, crop);
    } else if (root2.ref.markup) {
      root2.ref.destroyMarkup();
    }
    const imageView = root2.ref.image;
    if (shouldOptimize) {
      imageView.originX = null;
      imageView.originY = null;
      imageView.translateX = null;
      imageView.translateY = null;
      imageView.rotateZ = null;
      imageView.scaleX = null;
      imageView.scaleY = null;
      return;
    }
    imageView.originX = origin.x;
    imageView.originY = origin.y;
    imageView.translateX = translation.x;
    imageView.translateY = translation.y;
    imageView.rotateZ = rotation;
    imageView.scaleX = scale;
    imageView.scaleY = scale;
  }
});
const createImageView = (_) => _.utils.createView({
  name: "image-preview",
  tag: "div",
  ignoreRect: true,
  mixins: {
    apis: ["image", "crop", "markup", "resize", "dirty", "background"],
    styles: ["translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: IMAGE_SCALE_SPRING_PROPS,
      scaleY: IMAGE_SCALE_SPRING_PROPS,
      translateY: IMAGE_SCALE_SPRING_PROPS,
      opacity: { type: "tween", duration: 400 }
    }
  },
  create: ({ root: root2, props }) => {
    root2.ref.clip = root2.appendChildView(root2.createChildView(createClipView(_), {
      id: props.id,
      image: props.image,
      crop: props.crop,
      markup: props.markup,
      resize: props.resize,
      dirty: props.dirty,
      background: props.background
    }));
  },
  write: ({ root: root2, props, shouldOptimize }) => {
    const { clip } = root2.ref;
    const { image, crop, markup, resize, dirty } = props;
    clip.crop = crop;
    clip.markup = markup;
    clip.resize = resize;
    clip.dirty = dirty;
    clip.opacity = shouldOptimize ? 0 : 1;
    if (shouldOptimize || root2.rect.element.hidden)
      return;
    const imageAspectRatio = image.height / image.width;
    let aspectRatio = crop.aspectRatio || imageAspectRatio;
    const containerWidth = root2.rect.inner.width;
    const containerHeight = root2.rect.inner.height;
    let fixedPreviewHeight = root2.query("GET_IMAGE_PREVIEW_HEIGHT");
    const minPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MIN_HEIGHT");
    const maxPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MAX_HEIGHT");
    const panelAspectRatio = root2.query("GET_PANEL_ASPECT_RATIO");
    const allowMultiple = root2.query("GET_ALLOW_MULTIPLE");
    if (panelAspectRatio && !allowMultiple) {
      fixedPreviewHeight = containerWidth * panelAspectRatio;
      aspectRatio = panelAspectRatio;
    }
    let clipHeight = fixedPreviewHeight !== null ? fixedPreviewHeight : Math.max(minPreviewHeight, Math.min(containerWidth * aspectRatio, maxPreviewHeight));
    let clipWidth = clipHeight / aspectRatio;
    if (clipWidth > containerWidth) {
      clipWidth = containerWidth;
      clipHeight = clipWidth * aspectRatio;
    }
    if (clipHeight > containerHeight) {
      clipHeight = containerHeight;
      clipWidth = containerHeight / aspectRatio;
    }
    clip.width = clipWidth;
    clip.height = clipHeight;
  }
});
let SVG_MASK = `<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`;
let SVGMaskUniqueId = 0;
const createImageOverlayView = (fpAPI) => fpAPI.utils.createView({
  name: "image-preview-overlay",
  tag: "div",
  ignoreRect: true,
  create: ({ root: root2, props }) => {
    let mask = SVG_MASK;
    if (document.querySelector("base")) {
      const url = window.location.href.replace(window.location.hash, "");
      mask = mask.replace(/url\(\#/g, "url(" + url + "#");
    }
    SVGMaskUniqueId++;
    root2.element.classList.add(`filepond--image-preview-overlay-${props.status}`);
    root2.element.innerHTML = mask.replace(/__UID__/g, SVGMaskUniqueId);
  },
  mixins: {
    styles: ["opacity"],
    animations: {
      opacity: { type: "spring", mass: 25 }
    }
  }
});
const BitmapWorker = function() {
  self.onmessage = (e) => {
    createImageBitmap(e.data.message.file).then((bitmap) => {
      self.postMessage({ id: e.data.id, message: bitmap }, [bitmap]);
    });
  };
};
const ColorMatrixWorker = function() {
  self.onmessage = (e) => {
    const imageData = e.data.message.imageData;
    const matrix = e.data.message.colorMatrix;
    const data2 = imageData.data;
    const l = data2.length;
    const m11 = matrix[0];
    const m12 = matrix[1];
    const m13 = matrix[2];
    const m14 = matrix[3];
    const m15 = matrix[4];
    const m21 = matrix[5];
    const m22 = matrix[6];
    const m23 = matrix[7];
    const m24 = matrix[8];
    const m25 = matrix[9];
    const m31 = matrix[10];
    const m32 = matrix[11];
    const m33 = matrix[12];
    const m34 = matrix[13];
    const m35 = matrix[14];
    const m41 = matrix[15];
    const m42 = matrix[16];
    const m43 = matrix[17];
    const m44 = matrix[18];
    const m45 = matrix[19];
    let index = 0, r = 0, g = 0, b = 0, a = 0;
    for (; index < l; index += 4) {
      r = data2[index] / 255;
      g = data2[index + 1] / 255;
      b = data2[index + 2] / 255;
      a = data2[index + 3] / 255;
      data2[index] = Math.max(0, Math.min((r * m11 + g * m12 + b * m13 + a * m14 + m15) * 255, 255));
      data2[index + 1] = Math.max(0, Math.min((r * m21 + g * m22 + b * m23 + a * m24 + m25) * 255, 255));
      data2[index + 2] = Math.max(0, Math.min((r * m31 + g * m32 + b * m33 + a * m34 + m35) * 255, 255));
      data2[index + 3] = Math.max(0, Math.min((r * m41 + g * m42 + b * m43 + a * m44 + m45) * 255, 255));
    }
    self.postMessage({ id: e.data.id, message: imageData }, [
      imageData.data.buffer
    ]);
  };
};
const getImageSize$2 = (url, cb) => {
  let image = new Image();
  image.onload = () => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    image = null;
    cb(width, height);
  };
  image.src = url;
};
const transforms = {
  1: () => [1, 0, 0, 1, 0, 0],
  2: (width) => [-1, 0, 0, 1, width, 0],
  3: (width, height) => [-1, 0, 0, -1, width, height],
  4: (width, height) => [1, 0, 0, -1, 0, height],
  5: () => [0, 1, 1, 0, 0, 0],
  6: (width, height) => [0, 1, -1, 0, height, 0],
  7: (width, height) => [0, -1, -1, 0, height, width],
  8: (width) => [0, -1, 1, 0, 0, width]
};
const fixImageOrientation = (ctx, width, height, orientation) => {
  if (orientation === -1) {
    return;
  }
  ctx.transform.apply(ctx, transforms[orientation](width, height));
};
const createPreviewImage = (data2, width, height, orientation) => {
  width = Math.round(width);
  height = Math.round(height);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (orientation >= 5 && orientation <= 8) {
    [width, height] = [height, width];
  }
  fixImageOrientation(ctx, width, height, orientation);
  ctx.drawImage(data2, 0, 0, width, height);
  return canvas;
};
const isBitmap = (file2) => /^image/.test(file2.type) && !/svg/.test(file2.type);
const MAX_WIDTH = 10;
const MAX_HEIGHT = 10;
const calculateAverageColor = (image) => {
  const scalar = Math.min(MAX_WIDTH / image.width, MAX_HEIGHT / image.height);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width = Math.ceil(image.width * scalar);
  const height = canvas.height = Math.ceil(image.height * scalar);
  ctx.drawImage(image, 0, 0, width, height);
  let data2 = null;
  try {
    data2 = ctx.getImageData(0, 0, width, height).data;
  } catch (e) {
    return null;
  }
  const l = data2.length;
  let r = 0;
  let g = 0;
  let b = 0;
  let i = 0;
  for (; i < l; i += 4) {
    r += data2[i] * data2[i];
    g += data2[i + 1] * data2[i + 1];
    b += data2[i + 2] * data2[i + 2];
  }
  r = averageColor(r, l);
  g = averageColor(g, l);
  b = averageColor(b, l);
  return { r, g, b };
};
const averageColor = (c, l) => Math.floor(Math.sqrt(c / (l / 4)));
const cloneCanvas = (origin, target) => {
  target = target || document.createElement("canvas");
  target.width = origin.width;
  target.height = origin.height;
  const ctx = target.getContext("2d");
  ctx.drawImage(origin, 0, 0);
  return target;
};
const cloneImageData = (imageData) => {
  let id;
  try {
    id = new ImageData(imageData.width, imageData.height);
  } catch (e) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    id = ctx.createImageData(imageData.width, imageData.height);
  }
  id.data.set(new Uint8ClampedArray(imageData.data));
  return id;
};
const loadImage$1 = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    resolve(img);
  };
  img.onerror = (e) => {
    reject(e);
  };
  img.src = url;
});
const createImageWrapperView = (_) => {
  const OverlayView = createImageOverlayView(_);
  const ImageView = createImageView(_);
  const { createWorker: createWorker2 } = _.utils;
  const applyFilter = (root2, filter, target) => new Promise((resolve) => {
    if (!root2.ref.imageData) {
      root2.ref.imageData = target.getContext("2d").getImageData(0, 0, target.width, target.height);
    }
    const imageData = cloneImageData(root2.ref.imageData);
    if (!filter || filter.length !== 20) {
      target.getContext("2d").putImageData(imageData, 0, 0);
      return resolve();
    }
    const worker = createWorker2(ColorMatrixWorker);
    worker.post({
      imageData,
      colorMatrix: filter
    }, (response) => {
      target.getContext("2d").putImageData(response, 0, 0);
      worker.terminate();
      resolve();
    }, [imageData.data.buffer]);
  });
  const removeImageView = (root2, imageView) => {
    root2.removeChildView(imageView);
    imageView.image.width = 1;
    imageView.image.height = 1;
    imageView._destroy();
  };
  const shiftImage = ({ root: root2 }) => {
    const imageView = root2.ref.images.shift();
    imageView.opacity = 0;
    imageView.translateY = -15;
    root2.ref.imageViewBin.push(imageView);
    return imageView;
  };
  const pushImage = ({ root: root2, props, image }) => {
    const id = props.id;
    const item2 = root2.query("GET_ITEM", { id });
    if (!item2)
      return;
    const crop = item2.getMetadata("crop") || {
      center: {
        x: 0.5,
        y: 0.5
      },
      flip: {
        horizontal: false,
        vertical: false
      },
      zoom: 1,
      rotation: 0,
      aspectRatio: null
    };
    const background = root2.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");
    let markup;
    let resize;
    let dirty = false;
    if (root2.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")) {
      markup = item2.getMetadata("markup") || [];
      resize = item2.getMetadata("resize");
      dirty = true;
    }
    const imageView = root2.appendChildView(root2.createChildView(ImageView, {
      id,
      image,
      crop,
      resize,
      markup,
      dirty,
      background,
      opacity: 0,
      scaleX: 1.15,
      scaleY: 1.15,
      translateY: 15
    }), root2.childViews.length);
    root2.ref.images.push(imageView);
    imageView.opacity = 1;
    imageView.scaleX = 1;
    imageView.scaleY = 1;
    imageView.translateY = 0;
    setTimeout(() => {
      root2.dispatch("DID_IMAGE_PREVIEW_SHOW", { id });
    }, 250);
  };
  const updateImage2 = ({ root: root2, props }) => {
    const item2 = root2.query("GET_ITEM", { id: props.id });
    if (!item2)
      return;
    const imageView = root2.ref.images[root2.ref.images.length - 1];
    imageView.crop = item2.getMetadata("crop");
    imageView.background = root2.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");
    if (root2.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")) {
      imageView.dirty = true;
      imageView.resize = item2.getMetadata("resize");
      imageView.markup = item2.getMetadata("markup");
    }
  };
  const didUpdateItemMetadata = ({ root: root2, props, action }) => {
    if (!/crop|filter|markup|resize/.test(action.change.key))
      return;
    if (!root2.ref.images.length)
      return;
    const item2 = root2.query("GET_ITEM", { id: props.id });
    if (!item2)
      return;
    if (/filter/.test(action.change.key)) {
      const imageView = root2.ref.images[root2.ref.images.length - 1];
      applyFilter(root2, action.change.value, imageView.image);
      return;
    }
    if (/crop|markup|resize/.test(action.change.key)) {
      const crop = item2.getMetadata("crop");
      const image = root2.ref.images[root2.ref.images.length - 1];
      if (crop && crop.aspectRatio && image.crop && image.crop.aspectRatio && Math.abs(crop.aspectRatio - image.crop.aspectRatio) > 1e-5) {
        const imageView = shiftImage({ root: root2 });
        pushImage({ root: root2, props, image: cloneCanvas(imageView.image) });
      } else {
        updateImage2({ root: root2, props });
      }
    }
  };
  const canCreateImageBitmap = (file2) => {
    const userAgent = window.navigator.userAgent;
    const isFirefox = userAgent.match(/Firefox\/([0-9]+)\./);
    const firefoxVersion = isFirefox ? parseInt(isFirefox[1]) : null;
    if (firefoxVersion <= 58)
      return false;
    return "createImageBitmap" in window && isBitmap(file2);
  };
  const didCreatePreviewContainer = ({ root: root2, props }) => {
    const { id } = props;
    const item2 = root2.query("GET_ITEM", id);
    if (!item2)
      return;
    const fileURL = URL.createObjectURL(item2.file);
    getImageSize$2(fileURL, (width, height) => {
      root2.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE", {
        id,
        width,
        height
      });
    });
  };
  const drawPreview = ({ root: root2, props }) => {
    const { id } = props;
    const item2 = root2.query("GET_ITEM", id);
    if (!item2)
      return;
    const fileURL = URL.createObjectURL(item2.file);
    const loadPreviewFallback = () => {
      loadImage$1(fileURL).then(previewImageLoaded);
    };
    const previewImageLoaded = (imageData) => {
      URL.revokeObjectURL(fileURL);
      const exif = item2.getMetadata("exif") || {};
      const orientation = exif.orientation || -1;
      let { width, height } = imageData;
      if (!width || !height)
        return;
      if (orientation >= 5 && orientation <= 8) {
        [width, height] = [height, width];
      }
      const pixelDensityFactor = Math.max(1, window.devicePixelRatio * 0.75);
      const zoomFactor = root2.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR");
      const scaleFactor = zoomFactor * pixelDensityFactor;
      const previewImageRatio = height / width;
      const previewContainerWidth = root2.rect.element.width;
      const previewContainerHeight = root2.rect.element.height;
      let imageWidth = previewContainerWidth;
      let imageHeight = imageWidth * previewImageRatio;
      if (previewImageRatio > 1) {
        imageWidth = Math.min(width, previewContainerWidth * scaleFactor);
        imageHeight = imageWidth * previewImageRatio;
      } else {
        imageHeight = Math.min(height, previewContainerHeight * scaleFactor);
        imageWidth = imageHeight / previewImageRatio;
      }
      const previewImage = createPreviewImage(imageData, imageWidth, imageHeight, orientation);
      const done = () => {
        const averageColor2 = root2.query("GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR") ? calculateAverageColor(data) : null;
        item2.setMetadata("color", averageColor2, true);
        if ("close" in imageData) {
          imageData.close();
        }
        root2.ref.overlayShadow.opacity = 1;
        pushImage({ root: root2, props, image: previewImage });
      };
      const filter = item2.getMetadata("filter");
      if (filter) {
        applyFilter(root2, filter, previewImage).then(done);
      } else {
        done();
      }
    };
    if (canCreateImageBitmap(item2.file)) {
      const worker = createWorker2(BitmapWorker);
      worker.post({
        file: item2.file
      }, (imageBitmap) => {
        worker.terminate();
        if (!imageBitmap) {
          loadPreviewFallback();
          return;
        }
        previewImageLoaded(imageBitmap);
      });
    } else {
      loadPreviewFallback();
    }
  };
  const didDrawPreview = ({ root: root2 }) => {
    const image = root2.ref.images[root2.ref.images.length - 1];
    image.translateY = 0;
    image.scaleX = 1;
    image.scaleY = 1;
    image.opacity = 1;
  };
  const restoreOverlay = ({ root: root2 }) => {
    root2.ref.overlayShadow.opacity = 1;
    root2.ref.overlayError.opacity = 0;
    root2.ref.overlaySuccess.opacity = 0;
  };
  const didThrowError = ({ root: root2 }) => {
    root2.ref.overlayShadow.opacity = 0.25;
    root2.ref.overlayError.opacity = 1;
  };
  const didCompleteProcessing = ({ root: root2 }) => {
    root2.ref.overlayShadow.opacity = 0.25;
    root2.ref.overlaySuccess.opacity = 1;
  };
  const create2 = ({ root: root2 }) => {
    root2.ref.images = [];
    root2.ref.imageData = null;
    root2.ref.imageViewBin = [];
    root2.ref.overlayShadow = root2.appendChildView(root2.createChildView(OverlayView, {
      opacity: 0,
      status: "idle"
    }));
    root2.ref.overlaySuccess = root2.appendChildView(root2.createChildView(OverlayView, {
      opacity: 0,
      status: "success"
    }));
    root2.ref.overlayError = root2.appendChildView(root2.createChildView(OverlayView, {
      opacity: 0,
      status: "failure"
    }));
  };
  return _.utils.createView({
    name: "image-preview-wrapper",
    create: create2,
    styles: ["height"],
    apis: ["height"],
    destroy: ({ root: root2 }) => {
      root2.ref.images.forEach((imageView) => {
        imageView.image.width = 1;
        imageView.image.height = 1;
      });
    },
    didWriteView: ({ root: root2 }) => {
      root2.ref.images.forEach((imageView) => {
        imageView.dirty = false;
      });
    },
    write: _.utils.createRoute({
      DID_IMAGE_PREVIEW_DRAW: didDrawPreview,
      DID_IMAGE_PREVIEW_CONTAINER_CREATE: didCreatePreviewContainer,
      DID_FINISH_CALCULATE_PREVIEWSIZE: drawPreview,
      DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata,
      DID_THROW_ITEM_LOAD_ERROR: didThrowError,
      DID_THROW_ITEM_PROCESSING_ERROR: didThrowError,
      DID_THROW_ITEM_INVALID: didThrowError,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteProcessing,
      DID_START_ITEM_PROCESSING: restoreOverlay,
      DID_REVERT_ITEM_PROCESSING: restoreOverlay
    }, ({ root: root2 }) => {
      const viewsToRemove = root2.ref.imageViewBin.filter((imageView) => imageView.opacity === 0);
      root2.ref.imageViewBin = root2.ref.imageViewBin.filter((imageView) => imageView.opacity > 0);
      viewsToRemove.forEach((imageView) => removeImageView(root2, imageView));
      viewsToRemove.length = 0;
    })
  });
};
const plugin$2 = (fpAPI) => {
  const { addFilter: addFilter2, utils } = fpAPI;
  const { Type: Type2, createRoute: createRoute2, isFile: isFile2 } = utils;
  const imagePreviewView = createImageWrapperView(fpAPI);
  addFilter2("CREATE_VIEW", (viewAPI) => {
    const { is, view, query } = viewAPI;
    if (!is("file") || !query("GET_ALLOW_IMAGE_PREVIEW"))
      return;
    const didLoadItem2 = ({ root: root2, props }) => {
      const { id } = props;
      const item2 = query("GET_ITEM", id);
      if (!item2 || !isFile2(item2.file) || item2.archived)
        return;
      const file2 = item2.file;
      if (!isPreviewableImage(file2))
        return;
      if (!query("GET_IMAGE_PREVIEW_FILTER_ITEM")(item2))
        return;
      const supportsCreateImageBitmap = "createImageBitmap" in (window || {});
      const maxPreviewFileSize = query("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");
      if (!supportsCreateImageBitmap && (maxPreviewFileSize && file2.size > maxPreviewFileSize))
        return;
      root2.ref.imagePreview = view.appendChildView(view.createChildView(imagePreviewView, { id }));
      const fixedPreviewHeight = root2.query("GET_IMAGE_PREVIEW_HEIGHT");
      if (fixedPreviewHeight) {
        root2.dispatch("DID_UPDATE_PANEL_HEIGHT", {
          id: item2.id,
          height: fixedPreviewHeight
        });
      }
      const queue = !supportsCreateImageBitmap && file2.size > query("GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE");
      root2.dispatch("DID_IMAGE_PREVIEW_CONTAINER_CREATE", { id }, queue);
    };
    const rescaleItem = (root2, props) => {
      if (!root2.ref.imagePreview)
        return;
      let { id } = props;
      const item2 = root2.query("GET_ITEM", { id });
      if (!item2)
        return;
      const panelAspectRatio = root2.query("GET_PANEL_ASPECT_RATIO");
      const itemPanelAspectRatio = root2.query("GET_ITEM_PANEL_ASPECT_RATIO");
      const fixedHeight = root2.query("GET_IMAGE_PREVIEW_HEIGHT");
      if (panelAspectRatio || itemPanelAspectRatio || fixedHeight)
        return;
      let { imageWidth, imageHeight } = root2.ref;
      if (!imageWidth || !imageHeight)
        return;
      const minPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MIN_HEIGHT");
      const maxPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MAX_HEIGHT");
      const exif = item2.getMetadata("exif") || {};
      const orientation = exif.orientation || -1;
      if (orientation >= 5 && orientation <= 8)
        [imageWidth, imageHeight] = [imageHeight, imageWidth];
      if (!isBitmap(item2.file) || root2.query("GET_IMAGE_PREVIEW_UPSCALE")) {
        const scalar = 2048 / imageWidth;
        imageWidth *= scalar;
        imageHeight *= scalar;
      }
      const imageAspectRatio = imageHeight / imageWidth;
      const previewAspectRatio = (item2.getMetadata("crop") || {}).aspectRatio || imageAspectRatio;
      let previewHeightMax = Math.max(minPreviewHeight, Math.min(imageHeight, maxPreviewHeight));
      const itemWidth = root2.rect.element.width;
      const previewHeight = Math.min(itemWidth * previewAspectRatio, previewHeightMax);
      root2.dispatch("DID_UPDATE_PANEL_HEIGHT", {
        id: item2.id,
        height: previewHeight
      });
    };
    const didResizeView = ({ root: root2 }) => {
      root2.ref.shouldRescale = true;
    };
    const didUpdateItemMetadata = ({ root: root2, action }) => {
      if (action.change.key !== "crop")
        return;
      root2.ref.shouldRescale = true;
    };
    const didCalculatePreviewSize = ({ root: root2, action }) => {
      root2.ref.imageWidth = action.width;
      root2.ref.imageHeight = action.height;
      root2.ref.shouldRescale = true;
      root2.ref.shouldDrawPreview = true;
      root2.dispatch("KICK");
    };
    view.registerWriter(createRoute2({
      DID_RESIZE_ROOT: didResizeView,
      DID_STOP_RESIZE: didResizeView,
      DID_LOAD_ITEM: didLoadItem2,
      DID_IMAGE_PREVIEW_CALCULATE_SIZE: didCalculatePreviewSize,
      DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata
    }, ({ root: root2, props }) => {
      if (!root2.ref.imagePreview)
        return;
      if (root2.rect.element.hidden)
        return;
      if (root2.ref.shouldRescale) {
        rescaleItem(root2, props);
        root2.ref.shouldRescale = false;
      }
      if (root2.ref.shouldDrawPreview) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            root2.dispatch("DID_FINISH_CALCULATE_PREVIEWSIZE", {
              id: props.id
            });
          });
        });
        root2.ref.shouldDrawPreview = false;
      }
    }));
  });
  return {
    options: {
      allowImagePreview: [true, Type2.BOOLEAN],
      imagePreviewFilterItem: [() => true, Type2.FUNCTION],
      imagePreviewHeight: [null, Type2.INT],
      imagePreviewMinHeight: [44, Type2.INT],
      imagePreviewMaxHeight: [256, Type2.INT],
      imagePreviewMaxFileSize: [null, Type2.INT],
      imagePreviewZoomFactor: [2, Type2.INT],
      imagePreviewUpscale: [false, Type2.BOOLEAN],
      imagePreviewMaxInstantPreviewFileSize: [1e6, Type2.INT],
      imagePreviewTransparencyIndicator: [null, Type2.STRING],
      imagePreviewCalculateAverageImageColor: [false, Type2.BOOLEAN],
      imagePreviewMarkupShow: [true, Type2.BOOLEAN],
      imagePreviewMarkupFilter: [() => true, Type2.FUNCTION]
    }
  };
};
const isBrowser$2 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$2) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin$2 }));
}
/*!
 * FilePondPluginImageResize 2.0.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const isImage$2 = (file2) => /^image/.test(file2.type);
const getImageSize$1 = (url, cb) => {
  let image = new Image();
  image.onload = () => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    image = null;
    cb({ width, height });
  };
  image.onerror = () => cb(null);
  image.src = url;
};
const plugin$1 = ({ addFilter: addFilter2, utils }) => {
  const { Type: Type2 } = utils;
  addFilter2("DID_LOAD_ITEM", (item2, { query }) => new Promise((resolve, reject) => {
    const file2 = item2.file;
    if (!isImage$2(file2) || !query("GET_ALLOW_IMAGE_RESIZE")) {
      return resolve(item2);
    }
    const mode = query("GET_IMAGE_RESIZE_MODE");
    const width = query("GET_IMAGE_RESIZE_TARGET_WIDTH");
    const height = query("GET_IMAGE_RESIZE_TARGET_HEIGHT");
    const upscale = query("GET_IMAGE_RESIZE_UPSCALE");
    if (width === null && height === null)
      return resolve(item2);
    const targetWidth = width === null ? height : width;
    const targetHeight = height === null ? targetWidth : height;
    const fileURL = URL.createObjectURL(file2);
    getImageSize$1(fileURL, (size) => {
      URL.revokeObjectURL(fileURL);
      if (!size)
        return resolve(item2);
      let { width: imageWidth, height: imageHeight } = size;
      const orientation = (item2.getMetadata("exif") || {}).orientation || -1;
      if (orientation >= 5 && orientation <= 8) {
        [imageWidth, imageHeight] = [imageHeight, imageWidth];
      }
      if (imageWidth === targetWidth && imageHeight === targetHeight)
        return resolve(item2);
      if (!upscale) {
        if (mode === "cover") {
          if (imageWidth <= targetWidth || imageHeight <= targetHeight)
            return resolve(item2);
        } else if (imageWidth <= targetWidth && imageHeight <= targetWidth) {
          return resolve(item2);
        }
      }
      item2.setMetadata("resize", {
        mode,
        upscale,
        size: {
          width: targetWidth,
          height: targetHeight
        }
      });
      resolve(item2);
    });
  }));
  return {
    options: {
      allowImageResize: [true, Type2.BOOLEAN],
      imageResizeMode: ["cover", Type2.STRING],
      imageResizeUpscale: [true, Type2.BOOLEAN],
      imageResizeTargetWidth: [null, Type2.INT],
      imageResizeTargetHeight: [null, Type2.INT]
    }
  };
};
const isBrowser$1 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$1) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin$1 }));
}
/*!
 * FilePondPluginImageTransform 3.8.7
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const isImage = (file2) => /^image/.test(file2.type);
const getFilenameWithoutExtension = (name2) => name2.substr(0, name2.lastIndexOf(".")) || name2;
const ExtensionMap = {
  jpeg: "jpg",
  "svg+xml": "svg"
};
const renameFileToMatchMimeType = (filename, mimeType) => {
  const name2 = getFilenameWithoutExtension(filename);
  const type = mimeType.split("/")[1];
  const extension = ExtensionMap[type] || type;
  return `${name2}.${extension}`;
};
const getValidOutputMimeType = (type) => /jpeg|png|svg\+xml/.test(type) ? type : "image/jpeg";
const isImage$1 = (file2) => /^image/.test(file2.type);
const MATRICES = {
  1: () => [1, 0, 0, 1, 0, 0],
  2: (width) => [-1, 0, 0, 1, width, 0],
  3: (width, height) => [-1, 0, 0, -1, width, height],
  4: (width, height) => [1, 0, 0, -1, 0, height],
  5: () => [0, 1, 1, 0, 0, 0],
  6: (width, height) => [0, 1, -1, 0, height, 0],
  7: (width, height) => [0, -1, -1, 0, height, width],
  8: (width) => [0, -1, 1, 0, 0, width]
};
const getImageOrientationMatrix = (width, height, orientation) => {
  if (orientation === -1) {
    orientation = 1;
  }
  return MATRICES[orientation](width, height);
};
const createVector = (x, y) => ({ x, y });
const vectorDot = (a, b) => a.x * b.x + a.y * b.y;
const vectorSubtract = (a, b) => createVector(a.x - b.x, a.y - b.y);
const vectorDistanceSquared = (a, b) => vectorDot(vectorSubtract(a, b), vectorSubtract(a, b));
const vectorDistance = (a, b) => Math.sqrt(vectorDistanceSquared(a, b));
const getOffsetPointOnEdge = (length, rotation) => {
  const a = length;
  const A = 1.5707963267948966;
  const B = rotation;
  const C = 1.5707963267948966 - rotation;
  const sinA = Math.sin(A);
  const sinB = Math.sin(B);
  const sinC = Math.sin(C);
  const cosC = Math.cos(C);
  const ratio = a / sinA;
  const b = ratio * sinB;
  const c = ratio * sinC;
  return createVector(cosC * b, cosC * c);
};
const getRotatedRectSize = (rect, rotation) => {
  const w = rect.width;
  const h2 = rect.height;
  const hor = getOffsetPointOnEdge(w, rotation);
  const ver = getOffsetPointOnEdge(h2, rotation);
  const tl = createVector(rect.x + Math.abs(hor.x), rect.y - Math.abs(hor.y));
  const tr = createVector(rect.x + rect.width + Math.abs(ver.y), rect.y + Math.abs(ver.x));
  const bl = createVector(rect.x - Math.abs(ver.y), rect.y + rect.height - Math.abs(ver.x));
  return {
    width: vectorDistance(tl, tr),
    height: vectorDistance(tl, bl)
  };
};
const getImageRectZoomFactor = (imageRect, cropRect, rotation = 0, center2 = { x: 0.5, y: 0.5 }) => {
  const cx = center2.x > 0.5 ? 1 - center2.x : center2.x;
  const cy = center2.y > 0.5 ? 1 - center2.y : center2.y;
  const imageWidth = cx * 2 * imageRect.width;
  const imageHeight = cy * 2 * imageRect.height;
  const rotatedCropSize = getRotatedRectSize(cropRect, rotation);
  return Math.max(rotatedCropSize.width / imageWidth, rotatedCropSize.height / imageHeight);
};
const getCenteredCropRect = (container, aspectRatio) => {
  let width = container.width;
  let height = width * aspectRatio;
  if (height > container.height) {
    height = container.height;
    width = height / aspectRatio;
  }
  const x = (container.width - width) * 0.5;
  const y = (container.height - height) * 0.5;
  return {
    x,
    y,
    width,
    height
  };
};
const calculateCanvasSize = (image, canvasAspectRatio, zoom = 1) => {
  const imageAspectRatio = image.height / image.width;
  let canvasWidth = 1;
  let canvasHeight = canvasAspectRatio;
  let imgWidth = 1;
  let imgHeight = imageAspectRatio;
  if (imgHeight > canvasHeight) {
    imgHeight = canvasHeight;
    imgWidth = imgHeight / imageAspectRatio;
  }
  const scalar = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const width = image.width / (zoom * scalar * imgWidth);
  const height = width * canvasAspectRatio;
  return {
    width,
    height
  };
};
const canvasRelease = (canvas) => {
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1, 1);
};
const isFlipped = (flip) => flip && (flip.horizontal || flip.vertical);
const getBitmap = (image, orientation, flip) => {
  if (orientation <= 1 && !isFlipped(flip)) {
    image.width = image.naturalWidth;
    image.height = image.naturalHeight;
    return image;
  }
  const canvas = document.createElement("canvas");
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  const swapped = orientation >= 5 && orientation <= 8;
  if (swapped) {
    canvas.width = height;
    canvas.height = width;
  } else {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d");
  if (orientation) {
    ctx.transform.apply(ctx, getImageOrientationMatrix(width, height, orientation));
  }
  if (isFlipped(flip)) {
    const matrix = [1, 0, 0, 1, 0, 0];
    if (!swapped && flip.horizontal || swapped & flip.vertical) {
      matrix[0] = -1;
      matrix[4] = width;
    }
    if (!swapped && flip.vertical || swapped && flip.horizontal) {
      matrix[3] = -1;
      matrix[5] = height;
    }
    ctx.transform(...matrix);
  }
  ctx.drawImage(image, 0, 0, width, height);
  return canvas;
};
const imageToImageData = (imageElement, orientation, crop = {}, options = {}) => {
  const { canvasMemoryLimit, background = null } = options;
  const zoom = crop.zoom || 1;
  const bitmap = getBitmap(imageElement, orientation, crop.flip);
  const imageSize = {
    width: bitmap.width,
    height: bitmap.height
  };
  const aspectRatio = crop.aspectRatio || imageSize.height / imageSize.width;
  let canvasSize = calculateCanvasSize(imageSize, aspectRatio, zoom);
  if (canvasMemoryLimit) {
    const requiredMemory = canvasSize.width * canvasSize.height;
    if (requiredMemory > canvasMemoryLimit) {
      const scalar = Math.sqrt(canvasMemoryLimit) / Math.sqrt(requiredMemory);
      imageSize.width = Math.floor(imageSize.width * scalar);
      imageSize.height = Math.floor(imageSize.height * scalar);
      canvasSize = calculateCanvasSize(imageSize, aspectRatio, zoom);
    }
  }
  const canvas = document.createElement("canvas");
  const canvasCenter = {
    x: canvasSize.width * 0.5,
    y: canvasSize.height * 0.5
  };
  const stage = {
    x: 0,
    y: 0,
    width: canvasSize.width,
    height: canvasSize.height,
    center: canvasCenter
  };
  const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
  const scale = zoom * getImageRectZoomFactor(imageSize, getCenteredCropRect(stage, aspectRatio), crop.rotation, shouldLimit ? crop.center : { x: 0.5, y: 0.5 });
  canvas.width = Math.round(canvasSize.width / scale);
  canvas.height = Math.round(canvasSize.height / scale);
  canvasCenter.x /= scale;
  canvasCenter.y /= scale;
  const imageOffset = {
    x: canvasCenter.x - imageSize.width * (crop.center ? crop.center.x : 0.5),
    y: canvasCenter.y - imageSize.height * (crop.center ? crop.center.y : 0.5)
  };
  const ctx = canvas.getContext("2d");
  if (background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.translate(canvasCenter.x, canvasCenter.y);
  ctx.rotate(crop.rotation || 0);
  ctx.drawImage(bitmap, imageOffset.x - canvasCenter.x, imageOffset.y - canvasCenter.y, imageSize.width, imageSize.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  canvasRelease(canvas);
  return imageData;
};
const IS_BROWSER = (() => typeof window !== "undefined" && typeof window.document !== "undefined")();
if (IS_BROWSER) {
  if (!HTMLCanvasElement.prototype.toBlob) {
    Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
      value: function(callback, type, quality) {
        var dataURL = this.toDataURL(type, quality).split(",")[1];
        setTimeout(function() {
          var binStr = atob(dataURL);
          var len = binStr.length;
          var arr = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }
          callback(new Blob([arr], { type: type || "image/png" }));
        });
      }
    });
  }
}
const canvasToBlob = (canvas, options, beforeCreateBlob = null) => new Promise((resolve) => {
  const promisedImage = beforeCreateBlob ? beforeCreateBlob(canvas) : canvas;
  Promise.resolve(promisedImage).then((canvas2) => {
    canvas2.toBlob(resolve, options.type, options.quality);
  });
});
const vectorMultiply = (v, amount) => createVector$1(v.x * amount, v.y * amount);
const vectorAdd = (a, b) => createVector$1(a.x + b.x, a.y + b.y);
const vectorNormalize = (v) => {
  const l = Math.sqrt(v.x * v.x + v.y * v.y);
  if (l === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  return createVector$1(v.x / l, v.y / l);
};
const vectorRotate = (v, radians, origin) => {
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const t = createVector$1(v.x - origin.x, v.y - origin.y);
  return createVector$1(origin.x + cos * t.x - sin * t.y, origin.y + sin * t.x + cos * t.y);
};
const createVector$1 = (x = 0, y = 0) => ({ x, y });
const getMarkupValue = (value, size, scalar = 1, axis) => {
  if (typeof value === "string") {
    return parseFloat(value) * scalar;
  }
  if (typeof value === "number") {
    return value * (axis ? size[axis] : Math.min(size.width, size.height));
  }
  return;
};
const getMarkupStyles = (markup, size, scale) => {
  const lineStyle = markup.borderStyle || markup.lineStyle || "solid";
  const fill = markup.backgroundColor || markup.fontColor || "transparent";
  const stroke = markup.borderColor || markup.lineColor || "transparent";
  const strokeWidth = getMarkupValue(markup.borderWidth || markup.lineWidth, size, scale);
  const lineCap = markup.lineCap || "round";
  const lineJoin = markup.lineJoin || "round";
  const dashes = typeof lineStyle === "string" ? "" : lineStyle.map((v) => getMarkupValue(v, size, scale)).join(",");
  const opacity = markup.opacity || 1;
  return {
    "stroke-linecap": lineCap,
    "stroke-linejoin": lineJoin,
    "stroke-width": strokeWidth || 0,
    "stroke-dasharray": dashes,
    stroke,
    fill,
    opacity
  };
};
const isDefined = (value) => value != null;
const getMarkupRect = (rect, size, scalar = 1) => {
  let left = getMarkupValue(rect.x, size, scalar, "width") || getMarkupValue(rect.left, size, scalar, "width");
  let top = getMarkupValue(rect.y, size, scalar, "height") || getMarkupValue(rect.top, size, scalar, "height");
  let width = getMarkupValue(rect.width, size, scalar, "width");
  let height = getMarkupValue(rect.height, size, scalar, "height");
  let right = getMarkupValue(rect.right, size, scalar, "width");
  let bottom = getMarkupValue(rect.bottom, size, scalar, "height");
  if (!isDefined(top)) {
    if (isDefined(height) && isDefined(bottom)) {
      top = size.height - height - bottom;
    } else {
      top = bottom;
    }
  }
  if (!isDefined(left)) {
    if (isDefined(width) && isDefined(right)) {
      left = size.width - width - right;
    } else {
      left = right;
    }
  }
  if (!isDefined(width)) {
    if (isDefined(left) && isDefined(right)) {
      width = size.width - left - right;
    } else {
      width = 0;
    }
  }
  if (!isDefined(height)) {
    if (isDefined(top) && isDefined(bottom)) {
      height = size.height - top - bottom;
    } else {
      height = 0;
    }
  }
  return {
    x: left || 0,
    y: top || 0,
    width: width || 0,
    height: height || 0
  };
};
const pointsToPathShape = (points) => points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
const setAttributes = (element, attr2) => Object.keys(attr2).forEach((key) => element.setAttribute(key, attr2[key]));
const ns = "http://www.w3.org/2000/svg";
const svg = (tag, attr2) => {
  const element = document.createElementNS(ns, tag);
  if (attr2) {
    setAttributes(element, attr2);
  }
  return element;
};
const updateRect = (element) => setAttributes(element, __spreadValues(__spreadValues({}, element.rect), element.styles));
const updateEllipse = (element) => {
  const cx = element.rect.x + element.rect.width * 0.5;
  const cy = element.rect.y + element.rect.height * 0.5;
  const rx = element.rect.width * 0.5;
  const ry = element.rect.height * 0.5;
  return setAttributes(element, __spreadValues({
    cx,
    cy,
    rx,
    ry
  }, element.styles));
};
const IMAGE_FIT_STYLE = {
  contain: "xMidYMid meet",
  cover: "xMidYMid slice"
};
const updateImage = (element, markup) => {
  setAttributes(element, __spreadProps(__spreadValues(__spreadValues({}, element.rect), element.styles), {
    preserveAspectRatio: IMAGE_FIT_STYLE[markup.fit] || "none"
  }));
};
const TEXT_ANCHOR = {
  left: "start",
  center: "middle",
  right: "end"
};
const updateText = (element, markup, size, scale) => {
  const fontSize = getMarkupValue(markup.fontSize, size, scale);
  const fontFamily = markup.fontFamily || "sans-serif";
  const fontWeight = markup.fontWeight || "normal";
  const textAlign = TEXT_ANCHOR[markup.textAlign] || "start";
  setAttributes(element, __spreadProps(__spreadValues(__spreadValues({}, element.rect), element.styles), {
    "stroke-width": 0,
    "font-weight": fontWeight,
    "font-size": fontSize,
    "font-family": fontFamily,
    "text-anchor": textAlign
  }));
  if (element.text !== markup.text) {
    element.text = markup.text;
    element.textContent = markup.text.length ? markup.text : " ";
  }
};
const updateLine = (element, markup, size, scale) => {
  setAttributes(element, __spreadProps(__spreadValues(__spreadValues({}, element.rect), element.styles), {
    fill: "none"
  }));
  const line = element.childNodes[0];
  const begin = element.childNodes[1];
  const end = element.childNodes[2];
  const origin = element.rect;
  const target = {
    x: element.rect.x + element.rect.width,
    y: element.rect.y + element.rect.height
  };
  setAttributes(line, {
    x1: origin.x,
    y1: origin.y,
    x2: target.x,
    y2: target.y
  });
  if (!markup.lineDecoration)
    return;
  begin.style.display = "none";
  end.style.display = "none";
  const v = vectorNormalize({
    x: target.x - origin.x,
    y: target.y - origin.y
  });
  const l = getMarkupValue(0.05, size, scale);
  if (markup.lineDecoration.indexOf("arrow-begin") !== -1) {
    const arrowBeginRotationPoint = vectorMultiply(v, l);
    const arrowBeginCenter = vectorAdd(origin, arrowBeginRotationPoint);
    const arrowBeginA = vectorRotate(origin, 2, arrowBeginCenter);
    const arrowBeginB = vectorRotate(origin, -2, arrowBeginCenter);
    setAttributes(begin, {
      style: "display:block;",
      d: `M${arrowBeginA.x},${arrowBeginA.y} L${origin.x},${origin.y} L${arrowBeginB.x},${arrowBeginB.y}`
    });
  }
  if (markup.lineDecoration.indexOf("arrow-end") !== -1) {
    const arrowEndRotationPoint = vectorMultiply(v, -l);
    const arrowEndCenter = vectorAdd(target, arrowEndRotationPoint);
    const arrowEndA = vectorRotate(target, 2, arrowEndCenter);
    const arrowEndB = vectorRotate(target, -2, arrowEndCenter);
    setAttributes(end, {
      style: "display:block;",
      d: `M${arrowEndA.x},${arrowEndA.y} L${target.x},${target.y} L${arrowEndB.x},${arrowEndB.y}`
    });
  }
};
const updatePath = (element, markup, size, scale) => {
  setAttributes(element, __spreadProps(__spreadValues({}, element.styles), {
    fill: "none",
    d: pointsToPathShape(markup.points.map((point) => ({
      x: getMarkupValue(point.x, size, scale, "width"),
      y: getMarkupValue(point.y, size, scale, "height")
    })))
  }));
};
const createShape = (node) => (markup) => svg(node, { id: markup.id });
const createImage = (markup) => {
  const shape = svg("image", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    opacity: "0"
  });
  shape.onload = () => {
    shape.setAttribute("opacity", markup.opacity || 1);
  };
  shape.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", markup.src);
  return shape;
};
const createLine = (markup) => {
  const shape = svg("g", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  });
  const line = svg("line");
  shape.appendChild(line);
  const begin = svg("path");
  shape.appendChild(begin);
  const end = svg("path");
  shape.appendChild(end);
  return shape;
};
const CREATE_TYPE_ROUTES = {
  image: createImage,
  rect: createShape("rect"),
  ellipse: createShape("ellipse"),
  text: createShape("text"),
  path: createShape("path"),
  line: createLine
};
const UPDATE_TYPE_ROUTES = {
  rect: updateRect,
  ellipse: updateEllipse,
  image: updateImage,
  text: updateText,
  path: updatePath,
  line: updateLine
};
const createMarkupByType = (type, markup) => CREATE_TYPE_ROUTES[type](markup);
const updateMarkupByType = (element, type, markup, size, scale) => {
  if (type !== "path") {
    element.rect = getMarkupRect(markup, size, scale);
  }
  element.styles = getMarkupStyles(markup, size, scale);
  UPDATE_TYPE_ROUTES[type](element, markup, size, scale);
};
const sortMarkupByZIndex = (a, b) => {
  if (a[1].zIndex > b[1].zIndex) {
    return 1;
  }
  if (a[1].zIndex < b[1].zIndex) {
    return -1;
  }
  return 0;
};
const cropSVG = (blob2, crop = {}, markup, options) => new Promise((resolve) => {
  const { background = null } = options;
  const fr = new FileReader();
  fr.onloadend = () => {
    const text2 = fr.result;
    const original = document.createElement("div");
    original.style.cssText = `position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;`;
    original.innerHTML = text2;
    const originalNode = original.querySelector("svg");
    document.body.appendChild(original);
    const bBox = originalNode.getBBox();
    original.parentNode.removeChild(original);
    const titleNode = original.querySelector("title");
    const viewBoxAttribute = originalNode.getAttribute("viewBox") || "";
    const widthAttribute = originalNode.getAttribute("width") || "";
    const heightAttribute = originalNode.getAttribute("height") || "";
    let width = parseFloat(widthAttribute) || null;
    let height = parseFloat(heightAttribute) || null;
    const widthUnits = (widthAttribute.match(/[a-z]+/) || [])[0] || "";
    const heightUnits = (heightAttribute.match(/[a-z]+/) || [])[0] || "";
    const viewBoxList = viewBoxAttribute.split(" ").map(parseFloat);
    const viewBox = viewBoxList.length ? {
      x: viewBoxList[0],
      y: viewBoxList[1],
      width: viewBoxList[2],
      height: viewBoxList[3]
    } : bBox;
    let imageWidth = width != null ? width : viewBox.width;
    let imageHeight = height != null ? height : viewBox.height;
    originalNode.style.overflow = "visible";
    originalNode.setAttribute("width", imageWidth);
    originalNode.setAttribute("height", imageHeight);
    let markupSVG = "";
    if (markup && markup.length) {
      const size = {
        width: imageWidth,
        height: imageHeight
      };
      markupSVG = markup.sort(sortMarkupByZIndex).reduce((prev, shape) => {
        const el = createMarkupByType(shape[0], shape[1]);
        updateMarkupByType(el, shape[0], shape[1], size);
        el.removeAttribute("id");
        if (el.getAttribute("opacity") === 1) {
          el.removeAttribute("opacity");
        }
        return prev + "\n" + el.outerHTML + "\n";
      }, "");
      markupSVG = `

<g>${markupSVG.replace(/&nbsp;/g, " ")}</g>

`;
    }
    const aspectRatio = crop.aspectRatio || imageHeight / imageWidth;
    const canvasWidth = imageWidth;
    const canvasHeight = canvasWidth * aspectRatio;
    const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
    const cropCenterX = crop.center ? crop.center.x : 0.5;
    const cropCenterY = crop.center ? crop.center.y : 0.5;
    const canvasZoomFactor = getImageRectZoomFactor({
      width: imageWidth,
      height: imageHeight
    }, getCenteredCropRect({
      width: canvasWidth,
      height: canvasHeight
    }, aspectRatio), crop.rotation, shouldLimit ? { x: cropCenterX, y: cropCenterY } : {
      x: 0.5,
      y: 0.5
    });
    const scale = crop.zoom * canvasZoomFactor;
    const rotation = crop.rotation * (180 / Math.PI);
    const canvasCenter = {
      x: canvasWidth * 0.5,
      y: canvasHeight * 0.5
    };
    const imageOffset = {
      x: canvasCenter.x - imageWidth * cropCenterX,
      y: canvasCenter.y - imageHeight * cropCenterY
    };
    const cropTransforms = [
      `rotate(${rotation} ${canvasCenter.x} ${canvasCenter.y})`,
      `translate(${canvasCenter.x} ${canvasCenter.y})`,
      `scale(${scale})`,
      `translate(${-canvasCenter.x} ${-canvasCenter.y})`,
      `translate(${imageOffset.x} ${imageOffset.y})`
    ];
    const cropFlipHorizontal = crop.flip && crop.flip.horizontal;
    const cropFlipVertical = crop.flip && crop.flip.vertical;
    const flipTransforms = [
      `scale(${cropFlipHorizontal ? -1 : 1} ${cropFlipVertical ? -1 : 1})`,
      `translate(${cropFlipHorizontal ? -imageWidth : 0} ${cropFlipVertical ? -imageHeight : 0})`
    ];
    const transformed = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvasWidth}${widthUnits}" height="${canvasHeight}${heightUnits}" 
viewBox="0 0 ${canvasWidth} ${canvasHeight}" ${background ? 'style="background:' + background + '" ' : ""}
preserveAspectRatio="xMinYMin"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns="http://www.w3.org/2000/svg">
<!-- Generated by PQINA - https://pqina.nl/ -->
<title>${titleNode ? titleNode.textContent : ""}</title>
<g transform="${cropTransforms.join(" ")}">
<g transform="${flipTransforms.join(" ")}">
${originalNode.outerHTML}${markupSVG}
</g>
</g>
</svg>`;
    resolve(transformed);
  };
  fr.readAsText(blob2);
});
const objectToImageData = (obj) => {
  let imageData;
  try {
    imageData = new ImageData(obj.width, obj.height);
  } catch (e) {
    const canvas = document.createElement("canvas");
    imageData = canvas.getContext("2d").createImageData(obj.width, obj.height);
  }
  imageData.data.set(obj.data);
  return imageData;
};
const TransformWorker = () => {
  const TRANSFORMS = { resize, filter };
  const applyTransforms = (transforms2, imageData) => {
    transforms2.forEach((transform2) => {
      imageData = TRANSFORMS[transform2.type](imageData, transform2.data);
    });
    return imageData;
  };
  const transform = (data2, cb) => {
    let transforms2 = data2.transforms;
    let filterTransform = null;
    transforms2.forEach((transform2) => {
      if (transform2.type === "filter") {
        filterTransform = transform2;
      }
    });
    if (filterTransform) {
      let resizeTransform = null;
      transforms2.forEach((transform2) => {
        if (transform2.type === "resize") {
          resizeTransform = transform2;
        }
      });
      if (resizeTransform) {
        resizeTransform.data.matrix = filterTransform.data;
        transforms2 = transforms2.filter((transform2) => transform2.type !== "filter");
      }
    }
    cb(applyTransforms(transforms2, data2.imageData));
  };
  self.onmessage = (e) => {
    transform(e.data.message, (response) => {
      self.postMessage({ id: e.data.id, message: response }, [response.data.buffer]);
    });
  };
  const br = 1;
  const bg = 1;
  const bb = 1;
  function applyFilterMatrix(index, data2, m) {
    const ir = data2[index] / 255;
    const ig = data2[index + 1] / 255;
    const ib = data2[index + 2] / 255;
    const ia = data2[index + 3] / 255;
    const mr = ir * m[0] + ig * m[1] + ib * m[2] + ia * m[3] + m[4];
    const mg = ir * m[5] + ig * m[6] + ib * m[7] + ia * m[8] + m[9];
    const mb = ir * m[10] + ig * m[11] + ib * m[12] + ia * m[13] + m[14];
    const ma = ir * m[15] + ig * m[16] + ib * m[17] + ia * m[18] + m[19];
    const or = Math.max(0, mr * ma) + br * (1 - ma);
    const og = Math.max(0, mg * ma) + bg * (1 - ma);
    const ob = Math.max(0, mb * ma) + bb * (1 - ma);
    data2[index] = Math.max(0, Math.min(1, or)) * 255;
    data2[index + 1] = Math.max(0, Math.min(1, og)) * 255;
    data2[index + 2] = Math.max(0, Math.min(1, ob)) * 255;
  }
  const identityMatrix = self.JSON.stringify([
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0
  ]);
  function isIdentityMatrix(filter2) {
    return self.JSON.stringify(filter2 || []) === identityMatrix;
  }
  function filter(imageData, matrix) {
    if (!matrix || isIdentityMatrix(matrix))
      return imageData;
    const data2 = imageData.data;
    const l = data2.length;
    const m11 = matrix[0];
    const m12 = matrix[1];
    const m13 = matrix[2];
    const m14 = matrix[3];
    const m15 = matrix[4];
    const m21 = matrix[5];
    const m22 = matrix[6];
    const m23 = matrix[7];
    const m24 = matrix[8];
    const m25 = matrix[9];
    const m31 = matrix[10];
    const m32 = matrix[11];
    const m33 = matrix[12];
    const m34 = matrix[13];
    const m35 = matrix[14];
    const m41 = matrix[15];
    const m42 = matrix[16];
    const m43 = matrix[17];
    const m44 = matrix[18];
    const m45 = matrix[19];
    let index = 0, r = 0, g = 0, b = 0, a = 0, mr = 0, mg = 0, mb = 0, ma = 0, or = 0, og = 0, ob = 0;
    for (; index < l; index += 4) {
      r = data2[index] / 255;
      g = data2[index + 1] / 255;
      b = data2[index + 2] / 255;
      a = data2[index + 3] / 255;
      mr = r * m11 + g * m12 + b * m13 + a * m14 + m15;
      mg = r * m21 + g * m22 + b * m23 + a * m24 + m25;
      mb = r * m31 + g * m32 + b * m33 + a * m34 + m35;
      ma = r * m41 + g * m42 + b * m43 + a * m44 + m45;
      or = Math.max(0, mr * ma) + br * (1 - ma);
      og = Math.max(0, mg * ma) + bg * (1 - ma);
      ob = Math.max(0, mb * ma) + bb * (1 - ma);
      data2[index] = Math.max(0, Math.min(1, or)) * 255;
      data2[index + 1] = Math.max(0, Math.min(1, og)) * 255;
      data2[index + 2] = Math.max(0, Math.min(1, ob)) * 255;
    }
    return imageData;
  }
  function resize(imageData, data2) {
    let { mode = "contain", upscale = false, width, height, matrix } = data2;
    matrix = !matrix || isIdentityMatrix(matrix) ? null : matrix;
    if (!width && !height) {
      return filter(imageData, matrix);
    }
    if (width === null) {
      width = height;
    } else if (height === null) {
      height = width;
    }
    if (mode !== "force") {
      let scalarWidth = width / imageData.width;
      let scalarHeight = height / imageData.height;
      let scalar = 1;
      if (mode === "cover") {
        scalar = Math.max(scalarWidth, scalarHeight);
      } else if (mode === "contain") {
        scalar = Math.min(scalarWidth, scalarHeight);
      }
      if (scalar > 1 && upscale === false) {
        return filter(imageData, matrix);
      }
      width = imageData.width * scalar;
      height = imageData.height * scalar;
    }
    const originWidth = imageData.width;
    const originHeight = imageData.height;
    const targetWidth = Math.round(width);
    const targetHeight = Math.round(height);
    const inputData = imageData.data;
    const outputData = new Uint8ClampedArray(targetWidth * targetHeight * 4);
    const ratioWidth = originWidth / targetWidth;
    const ratioHeight = originHeight / targetHeight;
    const ratioWidthHalf = Math.ceil(ratioWidth * 0.5);
    const ratioHeightHalf = Math.ceil(ratioHeight * 0.5);
    for (let j = 0; j < targetHeight; j++) {
      for (let i = 0; i < targetWidth; i++) {
        let x2 = (i + j * targetWidth) * 4;
        let weight = 0;
        let weights = 0;
        let weightsAlpha = 0;
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 0;
        let centerY = (j + 0.5) * ratioHeight;
        for (let yy = Math.floor(j * ratioHeight); yy < (j + 1) * ratioHeight; yy++) {
          let dy = Math.abs(centerY - (yy + 0.5)) / ratioHeightHalf;
          let centerX = (i + 0.5) * ratioWidth;
          let w0 = dy * dy;
          for (let xx = Math.floor(i * ratioWidth); xx < (i + 1) * ratioWidth; xx++) {
            let dx = Math.abs(centerX - (xx + 0.5)) / ratioWidthHalf;
            let w = Math.sqrt(w0 + dx * dx);
            if (w >= -1 && w <= 1) {
              weight = 2 * w * w * w - 3 * w * w + 1;
              if (weight > 0) {
                dx = 4 * (xx + yy * originWidth);
                let ref2 = inputData[dx + 3];
                a += weight * ref2;
                weightsAlpha += weight;
                if (ref2 < 255) {
                  weight = weight * ref2 / 250;
                }
                r += weight * inputData[dx];
                g += weight * inputData[dx + 1];
                b += weight * inputData[dx + 2];
                weights += weight;
              }
            }
          }
        }
        outputData[x2] = r / weights;
        outputData[x2 + 1] = g / weights;
        outputData[x2 + 2] = b / weights;
        outputData[x2 + 3] = a / weightsAlpha;
        matrix && applyFilterMatrix(x2, outputData, matrix);
      }
    }
    return {
      data: outputData,
      width: targetWidth,
      height: targetHeight
    };
  }
};
const correctOrientation = (view, offset) => {
  if (view.getUint32(offset + 4, false) !== 1165519206)
    return;
  offset += 4;
  const intelByteAligned = view.getUint16(offset += 6, false) === 18761;
  offset += view.getUint32(offset + 4, intelByteAligned);
  const tags = view.getUint16(offset, intelByteAligned);
  offset += 2;
  for (let i = 0; i < tags; i++) {
    if (view.getUint16(offset + i * 12, intelByteAligned) === 274) {
      view.setUint16(offset + i * 12 + 8, 1, intelByteAligned);
      return true;
    }
  }
  return false;
};
const readData = (data2) => {
  const view = new DataView(data2);
  if (view.getUint16(0) !== 65496)
    return null;
  let offset = 2;
  let marker;
  let markerLength;
  let orientationCorrected = false;
  while (offset < view.byteLength) {
    marker = view.getUint16(offset, false);
    markerLength = view.getUint16(offset + 2, false) + 2;
    const isData = marker >= 65504 && marker <= 65519 || marker === 65534;
    if (!isData) {
      break;
    }
    if (!orientationCorrected) {
      orientationCorrected = correctOrientation(view, offset);
    }
    if (offset + markerLength > view.byteLength) {
      break;
    }
    offset += markerLength;
  }
  return data2.slice(0, offset);
};
const getImageHead = (file2) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = () => resolve(readData(reader.result) || null);
  reader.readAsArrayBuffer(file2.slice(0, 256 * 1024));
});
const getBlobBuilder = () => {
  return window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
};
const createBlob = (arrayBuffer, mimeType) => {
  const BB = getBlobBuilder();
  if (BB) {
    const bb = new BB();
    bb.append(arrayBuffer);
    return bb.getBlob(mimeType);
  }
  return new Blob([arrayBuffer], {
    type: mimeType
  });
};
const getUniqueId = () => Math.random().toString(36).substr(2, 9);
const createWorker = (fn2) => {
  const workerBlob = new Blob(["(", fn2.toString(), ")()"], { type: "application/javascript" });
  const workerURL = URL.createObjectURL(workerBlob);
  const worker = new Worker(workerURL);
  const trips = [];
  return {
    transfer: () => {
    },
    post: (message, cb, transferList) => {
      const id = getUniqueId();
      trips[id] = cb;
      worker.onmessage = (e) => {
        const cb2 = trips[e.data.id];
        if (!cb2)
          return;
        cb2(e.data.message);
        delete trips[e.data.id];
      };
      worker.postMessage({
        id,
        message
      }, transferList);
    },
    terminate: () => {
      worker.terminate();
      URL.revokeObjectURL(workerURL);
    }
  };
};
const loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    resolve(img);
  };
  img.onerror = (e) => {
    reject(e);
  };
  img.src = url;
});
const chain = (funcs) => funcs.reduce((promise, func) => promise.then((result) => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]));
const canvasApplyMarkup = (canvas, markup) => new Promise((resolve) => {
  const size = {
    width: canvas.width,
    height: canvas.height
  };
  const ctx = canvas.getContext("2d");
  const drawers = markup.sort(sortMarkupByZIndex).map((item2) => () => new Promise((resolve2) => {
    const result = TYPE_DRAW_ROUTES[item2[0]](ctx, size, item2[1], resolve2);
    if (result)
      resolve2();
  }));
  chain(drawers).then(() => resolve(canvas));
});
const applyMarkupStyles = (ctx, styles2) => {
  ctx.beginPath();
  ctx.lineCap = styles2["stroke-linecap"];
  ctx.lineJoin = styles2["stroke-linejoin"];
  ctx.lineWidth = styles2["stroke-width"];
  if (styles2["stroke-dasharray"].length) {
    ctx.setLineDash(styles2["stroke-dasharray"].split(","));
  }
  ctx.fillStyle = styles2["fill"];
  ctx.strokeStyle = styles2["stroke"];
  ctx.globalAlpha = styles2.opacity || 1;
};
const drawMarkupStyles = (ctx) => {
  ctx.fill();
  ctx.stroke();
  ctx.globalAlpha = 1;
};
const drawRect = (ctx, size, markup) => {
  const rect = getMarkupRect(markup, size);
  const styles2 = getMarkupStyles(markup, size);
  applyMarkupStyles(ctx, styles2);
  ctx.rect(rect.x, rect.y, rect.width, rect.height);
  drawMarkupStyles(ctx);
  return true;
};
const drawEllipse = (ctx, size, markup) => {
  const rect = getMarkupRect(markup, size);
  const styles2 = getMarkupStyles(markup, size);
  applyMarkupStyles(ctx, styles2);
  const x = rect.x, y = rect.y, w = rect.width, h2 = rect.height, kappa = 0.5522848, ox = w / 2 * kappa, oy = h2 / 2 * kappa, xe = x + w, ye = y + h2, xm = x + w / 2, ym = y + h2 / 2;
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  drawMarkupStyles(ctx);
  return true;
};
const drawImage = (ctx, size, markup, done) => {
  const rect = getMarkupRect(markup, size);
  const styles2 = getMarkupStyles(markup, size);
  applyMarkupStyles(ctx, styles2);
  const image = new Image();
  const isCrossOriginImage = new URL(markup.src, window.location.href).origin !== window.location.origin;
  if (isCrossOriginImage)
    image.crossOrigin = "";
  image.onload = () => {
    if (markup.fit === "cover") {
      const ar = rect.width / rect.height;
      const width = ar > 1 ? image.width : image.height * ar;
      const height = ar > 1 ? image.width / ar : image.height;
      const x = image.width * 0.5 - width * 0.5;
      const y = image.height * 0.5 - height * 0.5;
      ctx.drawImage(image, x, y, width, height, rect.x, rect.y, rect.width, rect.height);
    } else if (markup.fit === "contain") {
      const scalar = Math.min(rect.width / image.width, rect.height / image.height);
      const width = scalar * image.width;
      const height = scalar * image.height;
      const x = rect.x + rect.width * 0.5 - width * 0.5;
      const y = rect.y + rect.height * 0.5 - height * 0.5;
      ctx.drawImage(image, 0, 0, image.width, image.height, x, y, width, height);
    } else {
      ctx.drawImage(image, 0, 0, image.width, image.height, rect.x, rect.y, rect.width, rect.height);
    }
    drawMarkupStyles(ctx);
    done();
  };
  image.src = markup.src;
};
const drawText = (ctx, size, markup) => {
  const rect = getMarkupRect(markup, size);
  const styles2 = getMarkupStyles(markup, size);
  applyMarkupStyles(ctx, styles2);
  const fontSize = getMarkupValue(markup.fontSize, size);
  const fontFamily = markup.fontFamily || "sans-serif";
  const fontWeight = markup.fontWeight || "normal";
  const textAlign = markup.textAlign || "left";
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.textAlign = textAlign;
  ctx.fillText(markup.text, rect.x, rect.y);
  drawMarkupStyles(ctx);
  return true;
};
const drawPath = (ctx, size, markup) => {
  const styles2 = getMarkupStyles(markup, size);
  applyMarkupStyles(ctx, styles2);
  ctx.beginPath();
  const points = markup.points.map((point) => ({
    x: getMarkupValue(point.x, size, 1, "width"),
    y: getMarkupValue(point.y, size, 1, "height")
  }));
  ctx.moveTo(points[0].x, points[0].y);
  const l = points.length;
  for (let i = 1; i < l; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  drawMarkupStyles(ctx);
  return true;
};
const drawLine = (ctx, size, markup) => {
  const rect = getMarkupRect(markup, size);
  const styles2 = getMarkupStyles(markup, size);
  applyMarkupStyles(ctx, styles2);
  ctx.beginPath();
  const origin = {
    x: rect.x,
    y: rect.y
  };
  const target = {
    x: rect.x + rect.width,
    y: rect.y + rect.height
  };
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(target.x, target.y);
  const v = vectorNormalize({
    x: target.x - origin.x,
    y: target.y - origin.y
  });
  const l = 0.04 * Math.min(size.width, size.height);
  if (markup.lineDecoration.indexOf("arrow-begin") !== -1) {
    const arrowBeginRotationPoint = vectorMultiply(v, l);
    const arrowBeginCenter = vectorAdd(origin, arrowBeginRotationPoint);
    const arrowBeginA = vectorRotate(origin, 2, arrowBeginCenter);
    const arrowBeginB = vectorRotate(origin, -2, arrowBeginCenter);
    ctx.moveTo(arrowBeginA.x, arrowBeginA.y);
    ctx.lineTo(origin.x, origin.y);
    ctx.lineTo(arrowBeginB.x, arrowBeginB.y);
  }
  if (markup.lineDecoration.indexOf("arrow-end") !== -1) {
    const arrowEndRotationPoint = vectorMultiply(v, -l);
    const arrowEndCenter = vectorAdd(target, arrowEndRotationPoint);
    const arrowEndA = vectorRotate(target, 2, arrowEndCenter);
    const arrowEndB = vectorRotate(target, -2, arrowEndCenter);
    ctx.moveTo(arrowEndA.x, arrowEndA.y);
    ctx.lineTo(target.x, target.y);
    ctx.lineTo(arrowEndB.x, arrowEndB.y);
  }
  drawMarkupStyles(ctx);
  return true;
};
const TYPE_DRAW_ROUTES = {
  rect: drawRect,
  ellipse: drawEllipse,
  image: drawImage,
  text: drawText,
  line: drawLine,
  path: drawPath
};
const imageDataToCanvas = (imageData) => {
  const image = document.createElement("canvas");
  image.width = imageData.width;
  image.height = imageData.height;
  const ctx = image.getContext("2d");
  ctx.putImageData(imageData, 0, 0);
  return image;
};
const transformImage = (file2, instructions, options = {}) => new Promise((resolve, reject) => {
  if (!file2 || !isImage$1(file2))
    return reject({ status: "not an image file", file: file2 });
  const { stripImageHead, beforeCreateBlob, afterCreateBlob, canvasMemoryLimit } = options;
  const { crop, size, filter, markup, output } = instructions;
  const orientation = instructions.image && instructions.image.orientation ? Math.max(1, Math.min(8, instructions.image.orientation)) : null;
  const qualityAsPercentage = output && output.quality;
  const quality = qualityAsPercentage === null ? null : qualityAsPercentage / 100;
  const type = output && output.type || null;
  const background = output && output.background || null;
  const transforms2 = [];
  if (size && (typeof size.width === "number" || typeof size.height === "number")) {
    transforms2.push({ type: "resize", data: size });
  }
  if (filter && filter.length === 20) {
    transforms2.push({ type: "filter", data: filter });
  }
  const resolveWithBlob = (blob2) => {
    const promisedBlob = afterCreateBlob ? afterCreateBlob(blob2) : blob2;
    Promise.resolve(promisedBlob).then(resolve);
  };
  const toBlob = (imageData, options2) => {
    const canvas = imageDataToCanvas(imageData);
    const promisedCanvas = markup.length ? canvasApplyMarkup(canvas, markup) : canvas;
    Promise.resolve(promisedCanvas).then((canvas2) => {
      canvasToBlob(canvas2, options2, beforeCreateBlob).then((blob2) => {
        canvasRelease(canvas2);
        if (stripImageHead)
          return resolveWithBlob(blob2);
        getImageHead(file2).then((imageHead) => {
          if (imageHead !== null) {
            blob2 = new Blob([imageHead, blob2.slice(20)], { type: blob2.type });
          }
          resolveWithBlob(blob2);
        });
      }).catch(reject);
    });
  };
  if (/svg/.test(file2.type) && type === null) {
    return cropSVG(file2, crop, markup, { background }).then((text2) => {
      resolve(createBlob(text2, "image/svg+xml"));
    });
  }
  const url = URL.createObjectURL(file2);
  loadImage(url).then((image) => {
    URL.revokeObjectURL(url);
    const imageData = imageToImageData(image, orientation, crop, {
      canvasMemoryLimit,
      background
    });
    const outputFormat = {
      quality,
      type: type || file2.type
    };
    if (!transforms2.length) {
      return toBlob(imageData, outputFormat);
    }
    const worker = createWorker(TransformWorker);
    worker.post({
      transforms: transforms2,
      imageData
    }, (response) => {
      toBlob(objectToImageData(response), outputFormat);
      worker.terminate();
    }, [imageData.data.buffer]);
  }).catch(reject);
});
const MARKUP_RECT = ["x", "y", "left", "top", "right", "bottom", "width", "height"];
const toOptionalFraction = (value) => typeof value === "string" && /%/.test(value) ? parseFloat(value) / 100 : value;
const prepareMarkup = (markup) => {
  const [type, props] = markup;
  const rect = props.points ? {} : MARKUP_RECT.reduce((prev, curr) => {
    prev[curr] = toOptionalFraction(props[curr]);
    return prev;
  }, {});
  return [
    type,
    __spreadValues(__spreadValues({
      zIndex: 0
    }, props), rect)
  ];
};
const getImageSize = (file2) => new Promise((resolve, reject) => {
  const imageElement = new Image();
  imageElement.src = URL.createObjectURL(file2);
  const measure = () => {
    const width = imageElement.naturalWidth;
    const height = imageElement.naturalHeight;
    const hasSize = width && height;
    if (!hasSize)
      return;
    URL.revokeObjectURL(imageElement.src);
    clearInterval(intervalId);
    resolve({ width, height });
  };
  imageElement.onerror = (err) => {
    URL.revokeObjectURL(imageElement.src);
    clearInterval(intervalId);
    reject(err);
  };
  const intervalId = setInterval(measure, 1);
  measure();
});
if (typeof window !== "undefined" && typeof window.document !== "undefined") {
  if (!HTMLCanvasElement.prototype.toBlob) {
    Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
      value: function(cb, type, quality) {
        const canvas = this;
        setTimeout(() => {
          const dataURL = canvas.toDataURL(type, quality).split(",")[1];
          const binStr = atob(dataURL);
          let index = binStr.length;
          const data2 = new Uint8Array(index);
          while (index--) {
            data2[index] = binStr.charCodeAt(index);
          }
          cb(new Blob([data2], { type: type || "image/png" }));
        });
      }
    });
  }
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
const isIOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const plugin = ({ addFilter: addFilter2, utils }) => {
  const { Type: Type2, forin: forin2, getFileFromBlob: getFileFromBlob2, isFile: isFile2 } = utils;
  const TRANSFORM_LIST = ["crop", "resize", "filter", "markup", "output"];
  const createVariantCreator = (updateMetadata) => (transform, file2, metadata) => transform(file2, updateMetadata ? updateMetadata(metadata) : metadata);
  const isDefaultCrop = (crop) => crop.aspectRatio === null && crop.rotation === 0 && crop.zoom === 1 && crop.center && crop.center.x === 0.5 && crop.center.y === 0.5 && crop.flip && crop.flip.horizontal === false && crop.flip.vertical === false;
  addFilter2("SHOULD_PREPARE_OUTPUT", (shouldPrepareOutput, { query }) => new Promise((resolve) => {
    resolve(!query("IS_ASYNC"));
  }));
  const shouldTransformFile = (query, file2, item2) => new Promise((resolve) => {
    if (!query("GET_ALLOW_IMAGE_TRANSFORM") || item2.archived || !isFile2(file2) || !isImage(file2)) {
      return resolve(false);
    }
    getImageSize(file2).then(() => {
      const fn2 = query("GET_IMAGE_TRANSFORM_IMAGE_FILTER");
      if (fn2) {
        const filterResult = fn2(file2);
        if (filterResult == null) {
          return handleRevert(true);
        }
        if (typeof filterResult === "boolean") {
          return resolve(filterResult);
        }
        if (typeof filterResult.then === "function") {
          return filterResult.then(resolve);
        }
      }
      resolve(true);
    }).catch((err) => {
      resolve(false);
    });
  });
  addFilter2("DID_CREATE_ITEM", (item2, { query, dispatch }) => {
    if (!query("GET_ALLOW_IMAGE_TRANSFORM"))
      return;
    item2.extend("requestPrepare", () => new Promise((resolve, reject) => {
      dispatch("REQUEST_PREPARE_OUTPUT", {
        query: item2.id,
        item: item2,
        success: resolve,
        failure: reject
      }, true);
    }));
  });
  addFilter2("PREPARE_OUTPUT", (file2, { query, item: item2 }) => new Promise((resolve) => {
    shouldTransformFile(query, file2, item2).then((shouldTransform) => {
      if (!shouldTransform)
        return resolve(file2);
      const variants = [];
      if (query("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL")) {
        variants.push(() => new Promise((resolve2) => {
          resolve2({
            name: query("GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME"),
            file: file2
          });
        }));
      }
      if (query("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT")) {
        variants.push((transform2, file3, metadata) => new Promise((resolve2) => {
          transform2(file3, metadata).then((file4) => resolve2({
            name: query("GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME"),
            file: file4
          }));
        }));
      }
      const variantsDefinition = query("GET_IMAGE_TRANSFORM_VARIANTS") || {};
      forin2(variantsDefinition, (key, fn2) => {
        const createVariant = createVariantCreator(fn2);
        variants.push((transform2, file3, metadata) => new Promise((resolve2) => {
          createVariant(transform2, file3, metadata).then((file4) => resolve2({ name: key, file: file4 }));
        }));
      });
      const qualityAsPercentage = query("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY");
      const qualityMode = query("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE");
      const quality = qualityAsPercentage === null ? null : qualityAsPercentage / 100;
      const type = query("GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE");
      const clientTransforms = query("GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS") || TRANSFORM_LIST;
      item2.setMetadata("output", {
        type,
        quality,
        client: clientTransforms
      }, true);
      const transform = (file3, metadata) => new Promise((resolve2, reject) => {
        const filteredMetadata = __spreadValues({}, metadata);
        Object.keys(filteredMetadata).filter((instruction) => instruction !== "exif").forEach((instruction) => {
          if (clientTransforms.indexOf(instruction) === -1) {
            delete filteredMetadata[instruction];
          }
        });
        const { resize, exif, output, crop, filter, markup } = filteredMetadata;
        const instructions = {
          image: {
            orientation: exif ? exif.orientation : null
          },
          output: output && (output.type || typeof output.quality === "number" || output.background) ? {
            type: output.type,
            quality: typeof output.quality === "number" ? output.quality * 100 : null,
            background: output.background || query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR") || null
          } : void 0,
          size: resize && (resize.size.width || resize.size.height) ? __spreadValues({
            mode: resize.mode,
            upscale: resize.upscale
          }, resize.size) : void 0,
          crop: crop && !isDefaultCrop(crop) ? __spreadValues({}, crop) : void 0,
          markup: markup && markup.length ? markup.map(prepareMarkup) : [],
          filter
        };
        if (instructions.output) {
          const willChangeType = output.type ? output.type !== file3.type : false;
          const canChangeQuality = /\/jpe?g$/.test(file3.type);
          const willChangeQuality = output.quality !== null ? canChangeQuality && qualityMode === "always" : false;
          const willModifyImageData = !!(instructions.size || instructions.crop || instructions.filter || willChangeType || willChangeQuality);
          if (!willModifyImageData)
            return resolve2(file3);
        }
        const options = {
          beforeCreateBlob: query("GET_IMAGE_TRANSFORM_BEFORE_CREATE_BLOB"),
          afterCreateBlob: query("GET_IMAGE_TRANSFORM_AFTER_CREATE_BLOB"),
          canvasMemoryLimit: query("GET_IMAGE_TRANSFORM_CANVAS_MEMORY_LIMIT"),
          stripImageHead: query("GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD")
        };
        transformImage(file3, instructions, options).then((blob2) => {
          const out = getFileFromBlob2(blob2, renameFileToMatchMimeType(file3.name, getValidOutputMimeType(blob2.type)));
          resolve2(out);
        }).catch(reject);
      });
      const variantPromises = variants.map((create2) => create2(transform, file2, item2.getMetadata()));
      Promise.all(variantPromises).then((files) => {
        resolve(files.length === 1 && files[0].name === null ? files[0].file : files);
      });
    });
  }));
  return {
    options: {
      allowImageTransform: [true, Type2.BOOLEAN],
      imageTransformImageFilter: [null, Type2.FUNCTION],
      imageTransformOutputMimeType: [null, Type2.STRING],
      imageTransformOutputQuality: [null, Type2.INT],
      imageTransformOutputStripImageHead: [true, Type2.BOOLEAN],
      imageTransformClientTransforms: [null, Type2.ARRAY],
      imageTransformOutputQualityMode: ["always", Type2.STRING],
      imageTransformVariants: [null, Type2.OBJECT],
      imageTransformVariantsIncludeDefault: [true, Type2.BOOLEAN],
      imageTransformVariantsDefaultName: [null, Type2.STRING],
      imageTransformVariantsIncludeOriginal: [false, Type2.BOOLEAN],
      imageTransformVariantsOriginalName: ["original_", Type2.STRING],
      imageTransformBeforeCreateBlob: [null, Type2.FUNCTION],
      imageTransformAfterCreateBlob: [null, Type2.FUNCTION],
      imageTransformCanvasMemoryLimit: [isBrowser && isIOS ? 4096 * 4096 : null, Type2.INT],
      imageTransformCanvasBackgroundColor: [null, Type2.STRING]
    }
  };
};
if (isBrowser) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin }));
}
var filepond_min = "";
var filepondPluginImagePreview_min = "";
var filepondPluginImageEdit_min = "";
const plugins = [
  plugin$7,
  plugin$6,
  plugin$5,
  plugin$4,
  plugin$3,
  plugin$2,
  plugin$1,
  plugin
];
registerPlugin(...plugins);
const types = {
  boolean: Boolean,
  int: Number,
  number: Number,
  string: String,
  array: Array,
  object: Object,
  function: Function,
  serverapi: Object
};
const getNativeConstructorFromType = (type) => {
  if (!type) {
    return String;
  }
  return types[type];
};
const _OptionTypes = OptionTypes;
const propsOptions = {};
const eventNames = [];
const defaultOptions = getOptions$1();
for (const prop in _OptionTypes) {
  if (/^on/.test(prop)) {
    eventNames.push(prop.replace("on", ""));
    continue;
  }
  propsOptions[prop] = {
    type: getNativeConstructorFromType(_OptionTypes[prop]),
    default: () => defaultOptions[prop]
  };
}
const _sfc_main = defineComponent({
  name: "VFilePond",
  props: __spreadProps(__spreadValues({}, propsOptions), {
    size: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "small", "tiny"].indexOf(value) === -1) {
          console.warn(`VFilePond: invalid "${value}" size. Should be small, tiny or undefined`);
          return false;
        }
        return true;
      }
    }
  }),
  emits: ["input", ...eventNames],
  setup(props, { emit }) {
    const pond = ref();
    const inputElement = ref();
    const pondOptions = Object.assign({}, __spreadValues({}, props));
    onMounted(() => {
      if (inputElement.value && supported()) {
        pond.value = create$f(inputElement.value, __spreadProps(__spreadValues({}, pondOptions), {
          fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {
            if (pondOptions.acceptedFileTypes) {
              const index = pondOptions.acceptedFileTypes.findIndex((allowedType) => allowedType === type);
              if (index > -1) {
                resolve(type);
                return;
              }
            }
            reject();
          })
        }));
        for (const eventName of eventNames) {
          const event = eventName;
          if (event) {
            pond.value.on(event, (...event2) => {
              emit("input", pond.value ? pond.value.getFiles() : []);
              emit(eventName, ...event2);
            });
          }
        }
      }
    });
    onUnmounted(() => {
      if (pond.value) {
        for (const eventName of eventNames) {
          const event = eventName;
          if (event) {
            pond.value.off(event, (event2) => {
              emit(eventName, event2);
            });
          }
        }
        pond.value.destroy();
      }
    });
    return () => {
      const input = h("input", {
        type: "file",
        ref: inputElement,
        id: pondOptions.id,
        name: pondOptions.name,
        class: pondOptions.className,
        required: pondOptions.required,
        accept: pondOptions.acceptedFileTypes,
        multiple: pondOptions.allowMultiple,
        capture: pondOptions.captureMethod
      });
      const wrapper = h("div", { class: "filepond--wrapper" }, [input]);
      return h("div", {
        class: ["filepond-profile-wrap", props.size && `is-${props.size}`]
      }, [wrapper]);
    };
  }
});
export { _sfc_main as _ };
