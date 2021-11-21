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
import { M as Module, u as useStorage, c as createI18n$1, d as defineComponent, a as useRouter, r as ref, o as openBlock, b as createElementBlock, e as createBaseVNode, n as normalizeClass, p as pushScopeId, f as popScopeId, g as useCssVars, h as computed, j as h, R as RouterLink, k as useMediaQuery, l as usePreferredDark, w as watchEffect, V as VueScrollTo, m as useWindowScroll, q as resolveComponent, s as withModifiers, t as unref, v as createVNode, x as withCtx, y as withDirectives, z as vModelCheckbox, A as isRef, B as createTextVNode, C as createStaticVNode, D as createCommentVNode, E as toDisplayString, F as renderSlot, G as Fragment, H as debouncedWatch, I as vModelText, J as renderList, K as useHead, L as resolveDirective, N as createBlock, O as createRouter$1, P as createWebHistory, Q as nprogress$1, S as defineStore, T as axios, U as provide, W as Notyf, X as v, Y as n, Z as useI18n, _ as Transition, $ as createHead, a0 as createPinia, a1 as createApp$1, a2 as RouterView, a3 as resolveDynamicComponent, a4 as Vue3PersianDatetimePicker } from "./vendor.9ec557a4.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const Iconify = Module.default || Module;
const collections = JSON.parse('[{"prefix":"feather","width":24,"height":24,"icons":{"activity":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 12h-4l-3 9L9 3l-3 9H2\\"/></g>"},"airplay":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\\"/><path d=\\"M12 15l5 6H7l5-6z\\"/></g>"},"alert-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8v4\\"/><path d=\\"M12 16h.01\\"/></g>"},"alert-octagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z\\"/><path d=\\"M12 8v4\\"/><path d=\\"M12 16h.01\\"/></g>"},"alert-triangle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\"/><path d=\\"M12 9v4\\"/><path d=\\"M12 17h.01\\"/></g>"},"align-center":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 10H6\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M18 18H6\\"/></g>"},"align-justify":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 10H3\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M21 18H3\\"/></g>"},"align-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 10H3\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M17 18H3\\"/></g>"},"align-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 10H7\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M21 18H7\\"/></g>"},"anchor":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"5\\" r=\\"3\\"/><path d=\\"M12 22V8\\"/><path d=\\"M5 12H2a10 10 0 0 0 20 0h-3\\"/></g>"},"aperture":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M14.31 8l5.74 9.94\\"/><path d=\\"M9.69 8h11.48\\"/><path d=\\"M7.38 12l5.74-9.94\\"/><path d=\\"M9.69 16L3.95 6.06\\"/><path d=\\"M14.31 16H2.83\\"/><path d=\\"M16.62 12l-5.74 9.94\\"/></g>"},"archive":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 8v13H3V8\\"/><path d=\\"M1 3h22v5H1z\\"/><path d=\\"M10 12h4\\"/></g>"},"arrow-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 5v14\\"/><path d=\\"M19 12l-7 7l-7-7\\"/></g>"},"arrow-down-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 12l4 4l4-4\\"/><path d=\\"M12 8v8\\"/></g>"},"arrow-down-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 7L7 17\\"/><path d=\\"M17 17H7V7\\"/></g>"},"arrow-down-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7 7l10 10\\"/><path d=\\"M17 7v10H7\\"/></g>"},"arrow-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 12H5\\"/><path d=\\"M12 19l-7-7l7-7\\"/></g>"},"arrow-left-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8l-4 4l4 4\\"/><path d=\\"M16 12H8\\"/></g>"},"arrow-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 12h14\\"/><path d=\\"M12 5l7 7l-7 7\\"/></g>"},"arrow-right-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 16l4-4l-4-4\\"/><path d=\\"M8 12h8\\"/></g>"},"arrow-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 19V5\\"/><path d=\\"M5 12l7-7l7 7\\"/></g>"},"arrow-up-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M16 12l-4-4l-4 4\\"/><path d=\\"M12 16V8\\"/></g>"},"arrow-up-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 17L7 7\\"/><path d=\\"M7 17V7h10\\"/></g>"},"arrow-up-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7 17L17 7\\"/><path d=\\"M7 7h10v10\\"/></g>"},"at-sign":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\\"/></g>"},"award":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"8\\" r=\\"7\\"/><path d=\\"M8.21 13.89L7 23l5-3l5 3l-1.21-9.12\\"/></g>"},"bar-chart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 20V10\\"/><path d=\\"M18 20V4\\"/><path d=\\"M6 20v-4\\"/></g>"},"bar-chart-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 20V10\\"/><path d=\\"M12 20V4\\"/><path d=\\"M6 20v-6\\"/></g>"},"battery":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"6\\" width=\\"18\\" height=\\"12\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M23 13v-2\\"/></g>"},"battery-charging":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\\"/><path d=\\"M23 13v-2\\"/><path d=\\"M11 6l-4 6h6l-4 6\\"/></g>"},"bell":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\\"/><path d=\\"M13.73 21a2 2 0 0 1-3.46 0\\"/></g>"},"bell-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13.73 21a2 2 0 0 1-3.46 0\\"/><path d=\\"M18.63 13A17.89 17.89 0 0 1 18 8\\"/><path d=\\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\\"/><path d=\\"M18 8a6 6 0 0 0-9.33-5\\"/><path d=\\"M1 1l22 22\\"/></g>"},"bluetooth":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6.5 6.5l11 11L12 23V1l5.5 5.5l-11 11\\"/></g>"},"bold":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 4h8a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6z\\"/><path d=\\"M6 12h9a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6z\\"/></g>"},"book":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\\"/><path d=\\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\\"/></g>"},"book-open":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\\"/><path d=\\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\\"/></g>"},"bookmark":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 21l-7-5l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\\"/></g>"},"box":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05\\"/><path d=\\"M12 22.08V12\\"/></g>"},"briefcase":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"7\\" width=\\"20\\" height=\\"14\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\\"/></g>"},"calendar":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"4\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 2v4\\"/><path d=\\"M8 2v4\\"/><path d=\\"M3 10h18\\"/></g>"},"camera":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\\"/><circle cx=\\"12\\" cy=\\"13\\" r=\\"4\\"/></g>"},"camera-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 1l22 22\\"/><path d=\\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\\"/></g>"},"cast":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\\"/><path d=\\"M2 20h.01\\"/></g>"},"check":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 6L9 17l-5-5\\"/></g>"},"check-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\"/><path d=\\"M22 4L12 14.01l-3-3\\"/></g>"},"check-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 11l3 3L22 4\\"/><path d=\\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\\"/></g>"},"chevron-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 9l6 6l6-6\\"/></g>"},"chevron-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 18l-6-6l6-6\\"/></g>"},"chevron-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 18l6-6l-6-6\\"/></g>"},"chevron-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 15l-6-6l-6 6\\"/></g>"},"chevrons-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7 13l5 5l5-5\\"/><path d=\\"M7 6l5 5l5-5\\"/></g>"},"chevrons-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 17l-5-5l5-5\\"/><path d=\\"M18 17l-5-5l5-5\\"/></g>"},"chevrons-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 17l5-5l-5-5\\"/><path d=\\"M6 17l5-5l-5-5\\"/></g>"},"chevrons-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 11l-5-5l-5 5\\"/><path d=\\"M17 18l-5-5l-5 5\\"/></g>"},"chrome":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M21.17 8H12\\"/><path d=\\"M3.95 6.06L8.54 14\\"/><path d=\\"M10.88 21.94L15.46 14\\"/></g>"},"circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/></g>"},"clipboard":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\\"/><rect x=\\"8\\" y=\\"2\\" width=\\"8\\" height=\\"4\\" rx=\\"1\\" ry=\\"1\\"/></g>"},"clock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 6v6l4 2\\"/></g>"},"cloud-drizzle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 19v2\\"/><path d=\\"M8 13v2\\"/><path d=\\"M16 19v2\\"/><path d=\\"M16 13v2\\"/><path d=\\"M12 21v2\\"/><path d=\\"M12 15v2\\"/><path d=\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\"/></g>"},"cloud-lightning":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\\"/><path d=\\"M13 11l-4 6h6l-4 6\\"/></g>"},"cloud-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\\"/><path d=\\"M1 1l22 22\\"/></g>"},"cloud-rain":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 13v8\\"/><path d=\\"M8 13v8\\"/><path d=\\"M12 15v8\\"/><path d=\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\"/></g>"},"cloud-snow":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\\"/><path d=\\"M8 16h.01\\"/><path d=\\"M8 20h.01\\"/><path d=\\"M12 18h.01\\"/><path d=\\"M12 22h.01\\"/><path d=\\"M16 16h.01\\"/><path d=\\"M16 20h.01\\"/></g>"},"code":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 18l6-6l-6-6\\"/><path d=\\"M8 6l-6 6l6 6\\"/></g>"},"codepen":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2l10 6.5v7L12 22L2 15.5v-7L12 2z\\"/><path d=\\"M12 22v-6.5\\"/><path d=\\"M22 8.5l-10 7l-10-7\\"/><path d=\\"M2 15.5l10-7l10 7\\"/><path d=\\"M12 2v6.5\\"/></g>"},"codesandbox":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M7.5 4.21l4.5 2.6l4.5-2.6\\"/><path d=\\"M7.5 19.79V14.6L3 12\\"/><path d=\\"M21 12l-4.5 2.6v5.19\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05\\"/><path d=\\"M12 22.08V12\\"/></g>"},"coffee":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 8h1a4 4 0 0 1 0 8h-1\\"/><path d=\\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\\"/><path d=\\"M6 1v3\\"/><path d=\\"M10 1v3\\"/><path d=\\"M14 1v3\\"/></g>"},"columns":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\\"/></g>"},"command":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a3 3 0 0 0-3-3z\\"/></g>"},"compass":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M16.24 7.76l-2.12 6.36l-6.36 2.12l2.12-6.36l6.36-2.12z\\"/></g>"},"copy":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"9\\" y=\\"9\\" width=\\"13\\" height=\\"13\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\\"/></g>"},"corner-down-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 10l-5 5l5 5\\"/><path d=\\"M20 4v7a4 4 0 0 1-4 4H4\\"/></g>"},"corner-down-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 10l5 5l-5 5\\"/><path d=\\"M4 4v7a4 4 0 0 0 4 4h12\\"/></g>"},"corner-left-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 15l-5 5l-5-5\\"/><path d=\\"M20 4h-7a4 4 0 0 0-4 4v12\\"/></g>"},"corner-left-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 9L9 4L4 9\\"/><path d=\\"M20 20h-7a4 4 0 0 1-4-4V4\\"/></g>"},"corner-right-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 15l5 5l5-5\\"/><path d=\\"M4 4h7a4 4 0 0 1 4 4v12\\"/></g>"},"corner-right-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 9l5-5l5 5\\"/><path d=\\"M4 20h7a4 4 0 0 0 4-4V4\\"/></g>"},"corner-up-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 14L4 9l5-5\\"/><path d=\\"M20 20v-7a4 4 0 0 0-4-4H4\\"/></g>"},"corner-up-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 14l5-5l-5-5\\"/><path d=\\"M4 20v-7a4 4 0 0 1 4-4h12\\"/></g>"},"cpu":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"4\\" y=\\"4\\" width=\\"16\\" height=\\"16\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 9h6v6H9z\\"/><path d=\\"M9 1v3\\"/><path d=\\"M15 1v3\\"/><path d=\\"M9 20v3\\"/><path d=\\"M15 20v3\\"/><path d=\\"M20 9h3\\"/><path d=\\"M20 14h3\\"/><path d=\\"M1 9h3\\"/><path d=\\"M1 14h3\\"/></g>"},"credit-card":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"4\\" width=\\"22\\" height=\\"16\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M1 10h22\\"/></g>"},"crop":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6.13 1L6 16a2 2 0 0 0 2 2h15\\"/><path d=\\"M1 6.13L16 6a2 2 0 0 1 2 2v15\\"/></g>"},"crosshair":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M22 12h-4\\"/><path d=\\"M6 12H2\\"/><path d=\\"M12 6V2\\"/><path d=\\"M12 22v-4\\"/></g>"},"database":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><ellipse cx=\\"12\\" cy=\\"5\\" rx=\\"9\\" ry=\\"3\\"/><path d=\\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\\"/><path d=\\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\\"/></g>"},"delete":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 4H8l-7 8l7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\\"/><path d=\\"M18 9l-6 6\\"/><path d=\\"M12 9l6 6\\"/></g>"},"disc":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/></g>"},"dollar-sign":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 1v22\\"/><path d=\\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\\"/></g>"},"download":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\"/><path d=\\"M7 10l5 5l5-5\\"/><path d=\\"M12 15V3\\"/></g>"},"download-cloud":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 17l4 4l4-4\\"/><path d=\\"M12 12v9\\"/><path d=\\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\\"/></g>"},"droplet":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\\"/></g>"},"edit":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\"/><path d=\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z\\"/></g>"},"edit-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5L17 3z\\"/></g>"},"edit-3":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 20h9\\"/><path d=\\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1l1-4L16.5 3.5z\\"/></g>"},"external-link":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\\"/><path d=\\"M15 3h6v6\\"/><path d=\\"M10 14L21 3\\"/></g>"},"eye":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8z\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/></g>"},"eye-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\\"/><path d=\\"M1 1l22 22\\"/></g>"},"facebook":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\"/></g>"},"fast-forward":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 19l9-7l-9-7v14z\\"/><path d=\\"M2 19l9-7l-9-7v14z\\"/></g>"},"feather":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\\"/><path d=\\"M16 8L2 22\\"/><path d=\\"M17.5 15H9\\"/></g>"},"figma":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\\"/><path d=\\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\\"/><path d=\\"M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0z\\"/><path d=\\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\\"/><path d=\\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\\"/></g>"},"file":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\\"/><path d=\\"M13 2v7h7\\"/></g>"},"file-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6\\"/><path d=\\"M9 15h6\\"/></g>"},"file-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6\\"/><path d=\\"M12 18v-6\\"/><path d=\\"M9 15h6\\"/></g>"},"file-text":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6\\"/><path d=\\"M16 13H8\\"/><path d=\\"M16 17H8\\"/><path d=\\"M10 9H8\\"/></g>"},"film":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"2\\" width=\\"20\\" height=\\"20\\" rx=\\"2.18\\" ry=\\"2.18\\"/><path d=\\"M7 2v20\\"/><path d=\\"M17 2v20\\"/><path d=\\"M2 12h20\\"/><path d=\\"M2 7h5\\"/><path d=\\"M2 17h5\\"/><path d=\\"M17 17h5\\"/><path d=\\"M17 7h5\\"/></g>"},"filter":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 3H2l8 9.46V19l4 2v-8.54L22 3z\\"/></g>"},"flag":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 15s1-1 4-1s5 2 8 2s4-1 4-1V3s-1 1-4 1s-5-2-8-2s-4 1-4 1z\\"/><path d=\\"M4 22v-7\\"/></g>"},"folder":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/></g>"},"folder-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/><path d=\\"M9 14h6\\"/></g>"},"folder-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/><path d=\\"M12 11v6\\"/><path d=\\"M9 14h6\\"/></g>"},"framer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\\"/></g>"},"frown":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M16 16s-1.5-2-4-2s-4 2-4 2\\"/><path d=\\"M9 9h.01\\"/><path d=\\"M15 9h.01\\"/></g>"},"gift":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 12v10H4V12\\"/><path d=\\"M2 7h20v5H2z\\"/><path d=\\"M12 22V7\\"/><path d=\\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\\"/><path d=\\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\\"/></g>"},"git-branch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 3v12\\"/><circle cx=\\"18\\" cy=\\"6\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><path d=\\"M18 9a9 9 0 0 1-9 9\\"/></g>"},"git-commit":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M1.05 12H7\\"/><path d=\\"M17.01 12h5.95\\"/></g>"},"git-merge":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"18\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><path d=\\"M6 21V9a9 9 0 0 0 9 9\\"/></g>"},"git-pull-request":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"18\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><path d=\\"M13 6h3a2 2 0 0 1 2 2v7\\"/><path d=\\"M6 9v12\\"/></g>"},"github":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\\"/></g>"},"gitlab":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22.65 14.39L12 22.13L1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78l2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0a.42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0a.42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\\"/></g>"},"globe":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M2 12h20\\"/><path d=\\"M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z\\"/></g>"},"grid":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 3h7v7H3z\\"/><path d=\\"M14 3h7v7h-7z\\"/><path d=\\"M14 14h7v7h-7z\\"/><path d=\\"M3 14h7v7H3z\\"/></g>"},"hard-drive":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 12H2\\"/><path d=\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\"/><path d=\\"M6 16h.01\\"/><path d=\\"M10 16h.01\\"/></g>"},"hash":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 9h16\\"/><path d=\\"M4 15h16\\"/><path d=\\"M10 3L8 21\\"/><path d=\\"M16 3l-2 18\\"/></g>"},"headphones":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 18v-6a9 9 0 0 1 18 0v6\\"/><path d=\\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\\"/></g>"},"heart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78z\\"/></g>"},"help-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\\"/><path d=\\"M12 17h.01\\"/></g>"},"hexagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/></g>"},"home":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\"/><path d=\\"M9 22V12h6v10\\"/></g>"},"image":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\"/><path d=\\"M21 15l-5-5L5 21\\"/></g>"},"inbox":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 12h-6l-2 3h-4l-2-3H2\\"/><path d=\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\"/></g>"},"info":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 16v-4\\"/><path d=\\"M12 8h.01\\"/></g>"},"instagram":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"2\\" width=\\"20\\" height=\\"20\\" rx=\\"5\\" ry=\\"5\\"/><path d=\\"M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z\\"/><path d=\\"M17.5 6.5h.01\\"/></g>"},"italic":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 4h-9\\"/><path d=\\"M14 20H5\\"/><path d=\\"M15 4L9 20\\"/></g>"},"key":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778a5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\\"/></g>"},"layers":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2L2 7l10 5l10-5l-10-5z\\"/><path d=\\"M2 17l10 5l10-5\\"/><path d=\\"M2 12l10 5l10-5\\"/></g>"},"layout":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M3 9h18\\"/><path d=\\"M9 21V9\\"/></g>"},"life-buoy":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M4.93 4.93l4.24 4.24\\"/><path d=\\"M14.83 14.83l4.24 4.24\\"/><path d=\\"M14.83 9.17l4.24-4.24\\"/><path d=\\"M14.83 9.17l3.53-3.53\\"/><path d=\\"M4.93 19.07l4.24-4.24\\"/></g>"},"link":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\\"/><path d=\\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\\"/></g>"},"link-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 7h3a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5a5 5 0 0 1 5-5h3\\"/><path d=\\"M8 12h8\\"/></g>"},"linkedin":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\\"/><path d=\\"M2 9h4v12H2z\\"/><circle cx=\\"4\\" cy=\\"4\\" r=\\"2\\"/></g>"},"list":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 6h13\\"/><path d=\\"M8 12h13\\"/><path d=\\"M8 18h13\\"/><path d=\\"M3 6h.01\\"/><path d=\\"M3 12h.01\\"/><path d=\\"M3 18h.01\\"/></g>"},"loader":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2v4\\"/><path d=\\"M12 18v4\\"/><path d=\\"M4.93 4.93l2.83 2.83\\"/><path d=\\"M16.24 16.24l2.83 2.83\\"/><path d=\\"M2 12h4\\"/><path d=\\"M18 12h4\\"/><path d=\\"M4.93 19.07l2.83-2.83\\"/><path d=\\"M16.24 7.76l2.83-2.83\\"/></g>"},"lock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"11\\" width=\\"18\\" height=\\"11\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 11V7a5 5 0 0 1 10 0v4\\"/></g>"},"log-in":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\\"/><path d=\\"M10 17l5-5l-5-5\\"/><path d=\\"M15 12H3\\"/></g>"},"log-out":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\\"/><path d=\\"M16 17l5-5l-5-5\\"/><path d=\\"M21 12H9\\"/></g>"},"mail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\"/><path d=\\"M22 6l-10 7L2 6\\"/></g>"},"map":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 6v16l7-4l8 4l7-4V2l-7 4l-8-4l-7 4z\\"/><path d=\\"M8 2v16\\"/><path d=\\"M16 6v16\\"/></g>"},"map-pin":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\\"/><circle cx=\\"12\\" cy=\\"10\\" r=\\"3\\"/></g>"},"maximize":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\\"/></g>"},"maximize-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 3h6v6\\"/><path d=\\"M9 21H3v-6\\"/><path d=\\"M21 3l-7 7\\"/><path d=\\"M3 21l7-7\\"/></g>"},"meh":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 15h8\\"/><path d=\\"M9 9h.01\\"/><path d=\\"M15 9h.01\\"/></g>"},"menu":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 12h18\\"/><path d=\\"M3 6h18\\"/><path d=\\"M3 18h18\\"/></g>"},"message-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\\"/></g>"},"message-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\"/></g>"},"mic":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\\"/><path d=\\"M19 10v2a7 7 0 0 1-14 0v-2\\"/><path d=\\"M12 19v4\\"/><path d=\\"M8 23h8\\"/></g>"},"mic-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 1l22 22\\"/><path d=\\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\\"/><path d=\\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\\"/><path d=\\"M12 19v4\\"/><path d=\\"M8 23h8\\"/></g>"},"minimize":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\\"/></g>"},"minimize-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 14h6v6\\"/><path d=\\"M20 10h-6V4\\"/><path d=\\"M14 10l7-7\\"/><path d=\\"M3 21l7-7\\"/></g>"},"minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 12h14\\"/></g>"},"minus-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 12h8\\"/></g>"},"minus-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M8 12h8\\"/></g>"},"monitor":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"3\\" width=\\"20\\" height=\\"14\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M8 21h8\\"/><path d=\\"M12 17v4\\"/></g>"},"moon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z\\"/></g>"},"more-horizontal":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"19\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"5\\" cy=\\"12\\" r=\\"1\\"/></g>"},"more-vertical":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"5\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"19\\" r=\\"1\\"/></g>"},"mouse-pointer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 3l7.07 16.97l2.51-7.39l7.39-2.51L3 3z\\"/><path d=\\"M13 13l6 6\\"/></g>"},"move":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 9l-3 3l3 3\\"/><path d=\\"M9 5l3-3l3 3\\"/><path d=\\"M15 19l-3 3l-3-3\\"/><path d=\\"M19 9l3 3l-3 3\\"/><path d=\\"M2 12h20\\"/><path d=\\"M12 2v20\\"/></g>"},"music":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 18V5l12-2v13\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"18\\" cy=\\"16\\" r=\\"3\\"/></g>"},"navigation":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 11l19-9l-9 19l-2-8l-8-2z\\"/></g>"},"navigation-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2l7 19l-7-4l-7 4l7-19z\\"/></g>"},"octagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z\\"/></g>"},"package":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16.5 9.4l-9-5.19\\"/><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05\\"/><path d=\\"M12 22.08V12\\"/></g>"},"paperclip":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\\"/></g>"},"pause":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 4h4v16H6z\\"/><path d=\\"M14 4h4v16h-4z\\"/></g>"},"pause-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M10 15V9\\"/><path d=\\"M14 15V9\\"/></g>"},"pen-tool":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 19l7-7l3 3l-7 7l-3-3z\\"/><path d=\\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\\"/><path d=\\"M2 2l7.586 7.586\\"/><circle cx=\\"11\\" cy=\\"11\\" r=\\"2\\"/></g>"},"percent":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 5L5 19\\"/><circle cx=\\"6.5\\" cy=\\"6.5\\" r=\\"2.5\\"/><circle cx=\\"17.5\\" cy=\\"17.5\\" r=\\"2.5\\"/></g>"},"phone":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-call":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-forwarded":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 1l4 4l-4 4\\"/><path d=\\"M15 5h8\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-incoming":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 2v6h6\\"/><path d=\\"M23 1l-7 7\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-missed":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 1l-6 6\\"/><path d=\\"M17 1l6 6\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7a2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91\\"/><path d=\\"M23 1L1 23\\"/></g>"},"phone-outgoing":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 7V1h-6\\"/><path d=\\"M16 8l7-7\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"pie-chart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21.21 15.89A10 10 0 1 1 8 2.83\\"/><path d=\\"M22 12A10 10 0 0 0 12 2v10z\\"/></g>"},"play":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 3l14 9l-14 9V3z\\"/></g>"},"play-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M10 8l6 4l-6 4V8z\\"/></g>"},"plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 5v14\\"/><path d=\\"M5 12h14\\"/></g>"},"plus-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8v8\\"/><path d=\\"M8 12h8\\"/></g>"},"pocket":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\\"/><path d=\\"M8 10l4 4l4-4\\"/></g>"},"power":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18.36 6.64a9 9 0 1 1-12.73 0\\"/><path d=\\"M12 2v10\\"/></g>"},"printer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 9V2h12v7\\"/><path d=\\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\\"/><path d=\\"M6 14h12v8H6z\\"/></g>"},"radio":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"2\\"/><path d=\\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\\"/></g>"},"refresh-ccw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 4v6h6\\"/><path d=\\"M23 20v-6h-6\\"/><path d=\\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\\"/></g>"},"refresh-cw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 4v6h-6\\"/><path d=\\"M1 20v-6h6\\"/><path d=\\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\\"/></g>"},"repeat":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 1l4 4l-4 4\\"/><path d=\\"M3 11V9a4 4 0 0 1 4-4h14\\"/><path d=\\"M7 23l-4-4l4-4\\"/><path d=\\"M21 13v2a4 4 0 0 1-4 4H3\\"/></g>"},"rewind":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 19l-9-7l9-7v14z\\"/><path d=\\"M22 19l-9-7l9-7v14z\\"/></g>"},"rotate-ccw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 4v6h6\\"/><path d=\\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\\"/></g>"},"rotate-cw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 4v6h-6\\"/><path d=\\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\\"/></g>"},"rss":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 11a9 9 0 0 1 9 9\\"/><path d=\\"M4 4a16 16 0 0 1 16 16\\"/><circle cx=\\"5\\" cy=\\"19\\" r=\\"1\\"/></g>"},"save":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\\"/><path d=\\"M17 21v-8H7v8\\"/><path d=\\"M7 3v5h8\\"/></g>"},"scissors":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><path d=\\"M20 4L8.12 15.88\\"/><path d=\\"M14.47 14.48L20 20\\"/><path d=\\"M8.12 8.12L12 12\\"/></g>"},"search":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"M21 21l-4.35-4.35\\"/></g>"},"send":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 2L11 13\\"/><path d=\\"M22 2l-7 20l-4-9l-9-4l20-7z\\"/></g>"},"server":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"2\\" width=\\"20\\" height=\\"8\\" rx=\\"2\\" ry=\\"2\\"/><rect x=\\"2\\" y=\\"14\\" width=\\"20\\" height=\\"8\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M6 6h.01\\"/><path d=\\"M6 18h.01\\"/></g>"},"settings":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/><path d=\\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\\"/></g>"},"share":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\\"/><path d=\\"M16 6l-4-4l-4 4\\"/><path d=\\"M12 2v13\\"/></g>"},"share-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"18\\" cy=\\"5\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"12\\" r=\\"3\\"/><circle cx=\\"18\\" cy=\\"19\\" r=\\"3\\"/><path d=\\"M8.59 13.51l6.83 3.98\\"/><path d=\\"M15.41 6.51l-6.82 3.98\\"/></g>"},"shield":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10z\\"/></g>"},"shield-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3l-3.16 1.18\\"/><path d=\\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\\"/><path d=\\"M1 1l22 22\\"/></g>"},"shopping-bag":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\\"/><path d=\\"M3 6h18\\"/><path d=\\"M16 10a4 4 0 0 1-8 0\\"/></g>"},"shopping-cart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"9\\" cy=\\"21\\" r=\\"1\\"/><circle cx=\\"20\\" cy=\\"21\\" r=\\"1\\"/><path d=\\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\\"/></g>"},"shuffle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 3h5v5\\"/><path d=\\"M4 20L21 3\\"/><path d=\\"M21 16v5h-5\\"/><path d=\\"M15 15l6 6\\"/><path d=\\"M4 4l5 5\\"/></g>"},"sidebar":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 3v18\\"/></g>"},"skip-back":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 20L9 12l10-8v16z\\"/><path d=\\"M5 19V5\\"/></g>"},"skip-forward":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 4l10 8l-10 8V4z\\"/><path d=\\"M19 5v14\\"/></g>"},"slack":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\\"/><path d=\\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z\\"/><path d=\\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\\"/><path d=\\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5S2.67 14 3.5 14z\\"/><path d=\\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\\"/><path d=\\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z\\"/><path d=\\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\\"/><path d=\\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5S7.67 5 8.5 5z\\"/></g>"},"slash":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M4.93 4.93l14.14 14.14\\"/></g>"},"sliders":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 21v-7\\"/><path d=\\"M4 10V3\\"/><path d=\\"M12 21v-9\\"/><path d=\\"M12 8V3\\"/><path d=\\"M20 21v-5\\"/><path d=\\"M20 12V3\\"/><path d=\\"M1 14h6\\"/><path d=\\"M9 8h6\\"/><path d=\\"M17 16h6\\"/></g>"},"smartphone":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"5\\" y=\\"2\\" width=\\"14\\" height=\\"20\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M12 18h.01\\"/></g>"},"smile":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 14s1.5 2 4 2s4-2 4-2\\"/><path d=\\"M9 9h.01\\"/><path d=\\"M15 9h.01\\"/></g>"},"speaker":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"4\\" y=\\"2\\" width=\\"16\\" height=\\"20\\" rx=\\"2\\" ry=\\"2\\"/><circle cx=\\"12\\" cy=\\"14\\" r=\\"4\\"/><path d=\\"M12 6h.01\\"/></g>"},"square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/></g>"},"star":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z\\"/></g>"},"stop-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M9 9h6v6H9z\\"/></g>"},"sun":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"5\\"/><path d=\\"M12 1v2\\"/><path d=\\"M12 21v2\\"/><path d=\\"M4.22 4.22l1.42 1.42\\"/><path d=\\"M18.36 18.36l1.42 1.42\\"/><path d=\\"M1 12h2\\"/><path d=\\"M21 12h2\\"/><path d=\\"M4.22 19.78l1.42-1.42\\"/><path d=\\"M18.36 5.64l1.42-1.42\\"/></g>"},"sunrise":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 18a5 5 0 0 0-10 0\\"/><path d=\\"M12 2v7\\"/><path d=\\"M4.22 10.22l1.42 1.42\\"/><path d=\\"M1 18h2\\"/><path d=\\"M21 18h2\\"/><path d=\\"M18.36 11.64l1.42-1.42\\"/><path d=\\"M23 22H1\\"/><path d=\\"M8 6l4-4l4 4\\"/></g>"},"sunset":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 18a5 5 0 0 0-10 0\\"/><path d=\\"M12 9V2\\"/><path d=\\"M4.22 10.22l1.42 1.42\\"/><path d=\\"M1 18h2\\"/><path d=\\"M21 18h2\\"/><path d=\\"M18.36 11.64l1.42-1.42\\"/><path d=\\"M23 22H1\\"/><path d=\\"M16 5l-4 4l-4-4\\"/></g>"},"tablet":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"4\\" y=\\"2\\" width=\\"16\\" height=\\"20\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M12 18h.01\\"/></g>"},"tag":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\\"/><path d=\\"M7 7h.01\\"/></g>"},"target":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"6\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"2\\"/></g>"},"terminal":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 17l6-6l-6-6\\"/><path d=\\"M12 19h8\\"/></g>"},"thermometer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\\"/></g>"},"thumbs-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\\"/></g>"},"thumbs-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\\"/></g>"},"toggle-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"5\\" width=\\"22\\" height=\\"14\\" rx=\\"7\\" ry=\\"7\\"/><circle cx=\\"8\\" cy=\\"12\\" r=\\"3\\"/></g>"},"toggle-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"5\\" width=\\"22\\" height=\\"14\\" rx=\\"7\\" ry=\\"7\\"/><circle cx=\\"16\\" cy=\\"12\\" r=\\"3\\"/></g>"},"tool":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\\"/></g>"},"trash":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 6h18\\"/><path d=\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\"/></g>"},"trash-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 6h18\\"/><path d=\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\"/><path d=\\"M10 11v6\\"/><path d=\\"M14 11v6\\"/></g>"},"trello":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 7h3v9H7z\\"/><path d=\\"M14 7h3v5h-3z\\"/></g>"},"trending-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 18l-9.5-9.5l-5 5L1 6\\"/><path d=\\"M17 18h6v-6\\"/></g>"},"trending-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 6l-9.5 9.5l-5-5L1 18\\"/><path d=\\"M17 6h6v6\\"/></g>"},"triangle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\"/></g>"},"truck":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 3h15v13H1z\\"/><path d=\\"M16 8h4l3 3v5h-7V8z\\"/><circle cx=\\"5.5\\" cy=\\"18.5\\" r=\\"2.5\\"/><circle cx=\\"18.5\\" cy=\\"18.5\\" r=\\"2.5\\"/></g>"},"tv":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"7\\" width=\\"20\\" height=\\"15\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M17 2l-5 5l-5-5\\"/></g>"},"twitch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\\"/></g>"},"twitter":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\\"/></g>"},"type":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 7V4h16v3\\"/><path d=\\"M9 20h6\\"/><path d=\\"M12 4v16\\"/></g>"},"umbrella":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\\"/></g>"},"underline":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 3v7a6 6 0 0 0 6 6a6 6 0 0 0 6-6V3\\"/><path d=\\"M4 21h16\\"/></g>"},"unlock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"11\\" width=\\"18\\" height=\\"11\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 11V7a5 5 0 0 1 9.9-1\\"/></g>"},"upload":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\"/><path d=\\"M17 8l-5-5l-5 5\\"/><path d=\\"M12 3v12\\"/></g>"},"upload-cloud":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 16l-4-4l-4 4\\"/><path d=\\"M12 12v9\\"/><path d=\\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\\"/><path d=\\"M16 16l-4-4l-4 4\\"/></g>"},"user":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\"/><circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\"/></g>"},"user-check":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M17 11l2 2l4-4\\"/></g>"},"user-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M23 11h-6\\"/></g>"},"user-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M20 8v6\\"/><path d=\\"M23 11h-6\\"/></g>"},"user-x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M18 8l5 5\\"/><path d=\\"M23 8l-5 5\\"/></g>"},"users":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"9\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M23 21v-2a4 4 0 0 0-3-3.87\\"/><path d=\\"M16 3.13a4 4 0 0 1 0 7.75\\"/></g>"},"video":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 7l-7 5l7 5V7z\\"/><rect x=\\"1\\" y=\\"5\\" width=\\"15\\" height=\\"14\\" rx=\\"2\\" ry=\\"2\\"/></g>"},"video-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\\"/><path d=\\"M1 1l22 22\\"/></g>"},"voicemail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"5.5\\" cy=\\"11.5\\" r=\\"4.5\\"/><circle cx=\\"18.5\\" cy=\\"11.5\\" r=\\"4.5\\"/><path d=\\"M5.5 16h13\\"/></g>"},"volume":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/></g>"},"volume-1":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/><path d=\\"M15.54 8.46a5 5 0 0 1 0 7.07\\"/></g>"},"volume-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/><path d=\\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\\"/></g>"},"volume-x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/><path d=\\"M23 9l-6 6\\"/><path d=\\"M17 9l6 6\\"/></g>"},"watch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"7\\"/><path d=\\"M12 9v3l1.5 1.5\\"/><path d=\\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\\"/></g>"},"wifi":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 12.55a11 11 0 0 1 14.08 0\\"/><path d=\\"M1.42 9a16 16 0 0 1 21.16 0\\"/><path d=\\"M8.53 16.11a6 6 0 0 1 6.95 0\\"/><path d=\\"M12 20h.01\\"/></g>"},"wifi-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 1l22 22\\"/><path d=\\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\\"/><path d=\\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\\"/><path d=\\"M10.71 5.05A16 16 0 0 1 22.58 9\\"/><path d=\\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\\"/><path d=\\"M8.53 16.11a6 6 0 0 1 6.95 0\\"/><path d=\\"M12 20h.01\\"/></g>"},"wind":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\\"/></g>"},"x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 6L6 18\\"/><path d=\\"M6 6l12 12\\"/></g>"},"x-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M15 9l-6 6\\"/><path d=\\"M9 9l6 6\\"/></g>"},"x-octagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z\\"/><path d=\\"M15 9l-6 6\\"/><path d=\\"M9 9l6 6\\"/></g>"},"x-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 9l6 6\\"/><path d=\\"M15 9l-6 6\\"/></g>"},"youtube":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z\\"/><path d=\\"M9.75 15.02l5.75-3.27l-5.75-3.27v6.54z\\"/></g>"},"zap":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 2L3 14h9l-1 8l10-12h-9l1-8z\\"/></g>"},"zap-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12.41 6.75L13 2l-2.43 2.92\\"/><path d=\\"M18.57 12.91L21 10h-5.34\\"/><path d=\\"M8 8l-5 6h9l-1 8l5-6\\"/><path d=\\"M1 1l22 22\\"/></g>"},"zoom-in":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"M21 21l-4.35-4.35\\"/><path d=\\"M11 8v6\\"/><path d=\\"M8 11h6\\"/></g>"},"zoom-out":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"M21 21l-4.35-4.35\\"/><path d=\\"M8 11h6\\"/></g>"}}},{"prefix":"el","width":1200,"height":1200,"icons":{}},{"prefix":"fa-brands","width":448,"height":512,"icons":{"amazon":{"body":"<path d=\\"M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5c0 109.5 138.3 114 183.5 43.2c6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32C140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5c40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2c0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31c-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2c-10.8 1-13 2-14-.3c-2.3-5.7 21.7-15.5 37.5-17.5c15.7-1.8 41-.8 46 5.7c3.7 5.1 0 27.1-6.5 43.1z\\" fill=\\"currentColor\\"/>"},"discord":{"body":"<path d=\\"M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241z\\" fill=\\"currentColor\\"/>","width":640},"dribbble":{"body":"<path d=\\"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978z\\" fill=\\"currentColor\\"/>","width":512},"facebook-f":{"body":"<path d=\\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\\" fill=\\"currentColor\\"/>","width":320},"github":{"body":"<path d=\\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z\\" fill=\\"currentColor\\"/>","width":496},"github-alt":{"body":"<path d=\\"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1s10.9-55.1 36.7-55.1s36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95c-37.9 76.6-142.1 74.8-216.7 74.8c-75.8 0-186.2 2.7-225.6-74.8c-14.6-29-20.2-63.1-20.2-95c0-41.9 13.9-81.5 41.5-113.6c-5.2-15.8-7.7-32.4-7.7-48.8c0-21.5 4.9-32.3 14.6-51.8c45.3 0 74.3 9 108.8 36c29-6.9 58.8-10 88.7-10c27 0 54.2 2.9 80.4 9.2c34-26.7 63-35.2 107.8-35.2c9.8 19.5 14.6 30.3 14.6 51.8c0 16.4-2.6 32.7-7.7 48.2c27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6c-18.9 0-37 3.4-56 6c-14.9 2.3-29.8 3.2-45.1 3.2c-15.2 0-30.1-.9-45.1-3.2c-18.7-2.6-37-6-56-6c-46.8 0-73.5 38.7-73.5 82.6c0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1s36.7-34.2 36.7-55.1s-10.9-55.1-36.7-55.1z\\" fill=\\"currentColor\\"/>","width":480},"google-plus-g":{"body":"<path d=\\"M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599c-65.484 0-118.92 54.221-118.92 121.277c0 67.056 53.436 121.277 118.92 121.277c75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z\\" fill=\\"currentColor\\"/>","width":640},"instagram":{"body":"<path d=\\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\\" fill=\\"currentColor\\"/>"},"invision":{"body":"<path d=\\"M407.4 32H40.6C18.2 32 0 50.2 0 72.6v366.8C0 461.8 18.2 480 40.6 480h366.8c22.4 0 40.6-18.2 40.6-40.6V72.6c0-22.4-18.2-40.6-40.6-40.6zM176.1 145.6c.4 23.4-22.4 27.3-26.6 27.4c-14.9 0-27.1-12-27.1-27c.1-35.2 53.1-35.5 53.7-.4zM332.8 377c-65.6 0-34.1-74-25-106.6c14.1-46.4-45.2-59-59.9.7l-25.8 103.3H177l8.1-32.5c-31.5 51.8-94.6 44.4-94.6-4.3c.1-14.3.9-14 23-104.1H81.7l9.7-35.6h76.4c-33.6 133.7-32.6 126.9-32.9 138.2c0 20.9 40.9 13.5 57.4-23.2l19.8-79.4h-32.3l9.7-35.6h68.8l-8.9 40.5c40.5-75.5 127.9-47.8 101.8 38c-14.2 51.1-14.6 50.7-14.9 58.8c0 15.5 17.5 22.6 31.8-16.9L386 325c-10.5 36.7-29.4 52-53.2 52z\\" fill=\\"currentColor\\"/>"},"linkedin-in":{"body":"<path d=\\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z\\" fill=\\"currentColor\\"/>"},"reddit-alien":{"body":"<path d=\\"M440.3 203.5c-15 0-28.2 6.2-37.9 15.9c-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2c22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8c-9.7-10.1-23.4-16.3-38.4-16.3c-55.6 0-73.8 74.6-22.9 100.1c-1.8 7.9-2.6 16.3-2.6 24.7c0 83.8 94.4 151.7 210.3 151.7c116.4 0 210.8-67.9 210.8-151.7c0-8.4-.9-17.2-3.1-25.1c49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7c21.6 0 39.2 17.6 39.2 39.7c0 21.6-17.6 39.2-39.2 39.2c-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0c-4-3.5-4-9.7 0-13.7c3.5-3.5 9.7-3.5 13.2 0c27.8 28.5 120 29 149 0c3.5-3.5 9.7-3.5 13.2 0c4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2c0-22 17.6-39.7 39.2-39.7c22 0 39.7 17.6 39.7 39.7c-.1 21.5-17.7 39.2-39.7 39.2z\\" fill=\\"currentColor\\"/>","width":512},"tumblr":{"body":"<path d=\\"M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7c-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16c62-21.8 81.5-76 84.3-117.1c.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8c4.8-1.9 9-3.2 12.7-2.2c3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z\\" fill=\\"currentColor\\"/>","width":320},"twitter":{"body":"<path d=\\"M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z\\" fill=\\"currentColor\\"/>","width":512},"youtube":{"body":"<path d=\\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z\\" fill=\\"currentColor\\"/>","width":576}}},{"prefix":"ion","width":512,"height":512,"icons":{"reload-outline":{"body":"<path d=\\"M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><path d=\\"M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"fa","width":1536,"height":1536,"icons":{"angle-down":{"body":"<path d=\\"M1011 480q0 13-10 23L535 969q-10 10-23 10t-23-10L23 503q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393l393-393q10-10 23-10t23 10l50 50q10 10 10 23z\\" fill=\\"currentColor\\"/>","width":1024,"height":1280,"inlineTop":-256},"angle-up":{"body":"<path d=\\"M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z\\" fill=\\"currentColor\\"/>","width":1024,"height":1280,"inlineTop":-256}}},{"prefix":"fluent","width":24,"height":24,"icons":{"chevron-up-down-20-filled":{"body":"<g fill=\\"none\\"><path d=\\"M15.103 7.304a.75.75 0 0 1-1.133.976L10 4.31L6.03 8.28l-.084.073A.75.75 0 0 1 4.97 7.22l4.5-4.5l.084-.073a.75.75 0 0 1 .976.073l4.5 4.5l.073.084zM4.897 12.696a.75.75 0 0 1 1.133-.976L10 15.69l3.97-3.97l.084-.073a.75.75 0 0 1 .976 1.133l-4.5 4.5l-.084.073a.75.75 0 0 1-.976-.073l-4.5-4.5l-.073-.084z\\" fill=\\"currentColor\\"/></g>","width":20,"height":20}}},{"prefix":"fa-solid","width":512,"height":512,"icons":{"biking":{"body":"<path d=\\"M400 96a48 48 0 1 0-48-48a48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57l58.25-49.92zm116 39a128 128 0 1 0 128 128a128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128a128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64z\\" fill=\\"currentColor\\"/>","width":640},"dumbbell":{"body":"<path d=\\"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z\\" fill=\\"currentColor\\"/>","width":640},"running":{"body":"<path d=\\"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48s21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52l-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37l-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17l-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09c3.19 1 6.41 1.48 9.58 1.48c13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14l31.31-78.28l20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z\\" fill=\\"currentColor\\"/>","width":416},"skiing":{"body":"<path d=\\"M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48s21.5 48 48 48zm73 356.1c-9.4-9.4-24.6-9.4-33.9 0c-12.1 12.1-30.5 15.4-45.1 8.7l-135.8-70.2l49.2-73.8c12.7-19 10.2-44.5-6-60.6L293 215.7l-107-53.1c-2.9 19.9 3.4 40 17.7 54.4l75.1 75.2l-45.9 68.8L35 258.7c-11.7-6-26.2-1.5-32.3 10.3c-6.1 11.8-1.5 26.3 10.3 32.3l391.9 202.5c11.9 5.5 24.5 8.1 37.1 8.1c23.2 0 46-9 63-26c9.3-9.3 9.3-24.5 0-33.8zM120 91.6l-11.5 22.5c14.4 7.3 31.2 4.9 42.8-4.8l47.2 23.4c-.1.1-.1.2-.2.3l114.5 56.8l32.4-13l6.4 19.1c4 12.1 12.6 22 24 27.7l58.1 29c15.9 7.9 35 1.5 42.9-14.3c7.9-15.8 1.5-35-14.3-42.9l-52.1-26.1l-17.1-51.2c-8.1-24.2-40.9-56.6-84.5-39.2l-81.2 32.5l-62.5-31c.3-14.5-7.2-28.6-20.9-35.6l-11.1 21.7h-.2l-34.4-7c-1.8-.4-3.7.2-5 1.7c-1.9 2.2-1.7 5.5.5 7.4l26.2 23z\\" fill=\\"currentColor\\"/>"},"swimmer":{"body":"<path d=\\"M189.61 310.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c16.02-14.77 34.5-22.58 53.46-22.58h16.3c18.96 0 37.45 7.81 53.46 22.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c14.86-13.71 31.88-21.12 49.39-22.16l-112.84-80.6l18-12.86c3.64-2.58 8.28-3.52 12.62-2.61l100.35 21.53c25.91 5.53 51.44-10.97 57-36.88c5.55-25.92-10.95-51.44-36.88-57L437.68 98.47c-30.73-6.58-63.02.12-88.56 18.38l-80.02 57.17c-10.38 7.39-19.36 16.44-26.72 26.94L173.75 299c5.47 3.23 10.82 6.93 15.86 11.58zM624 352h-16c-26.04 0-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 343.58 442.04 352 416 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 343.58 250.04 352 224 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 343.58 58.04 352 32 352H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-512-96c44.18 0 80-35.82 80-80s-35.82-80-80-80s-80 35.82-80 80s35.82 80 80 80z\\" fill=\\"currentColor\\"/>","width":640}}}]');
collections.forEach((c) => Iconify.addCollection(c));
var nprogress = "";
var _default$1 = "";
var _default = "";
var simplebar = "";
var tinySlider = "";
var notyf_min = "";
var tippy = "";
var svgArrow = "";
var border = "";
var backdrop = "";
var light = "";
var main = "";
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var messages = {
  "de": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sprache ausw\xE4hlen"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Jetzt mitmachen"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Beginnen Sie mit der Erstellung Ihres Kontos"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Erhalten Sie Werbeangebote"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ich habe bereits ein Konto"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrieren"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mailadresse"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Passwort"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Passwort\xFCberpr\xFCfung"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ihr Name, Vorname ist erforderlich"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Geben Sie Ihre E-Mail ein, sie wird f\xFCr die Anmeldung ben\xF6tigt"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bitte geben Sie eine g\xFCltige E-Mail ein"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Geben Sie Ihr Passwort mit mindestens 8 Zeichen ein, es wird f\xFCr die Anmeldung ben\xF6tigt"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Das Passwort sollte mindestens 8 Zeichen enthalten"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bitte best\xE4tigen Sie Ihr Passwort"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Das Passwort stimmt nicht \xFCberein"]);
          }
        }
      }
    }
  },
  "en": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select Language"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Join Us Now."]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Start by creating your account"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Receive promotional offers"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["I already have an account"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sign Up"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Email Address"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Password"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Password Verification"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Your name first name is required"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enter your email, it will be required to login"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Please, enter a valid email"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enter your password with at least 8 characters, it will be required to login"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["The password should contains at least 8 characters"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Please, confirm your password"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["The password does not match"]);
          }
        }
      }
    }
  },
  "es-MX": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccione el idioma"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xDAnete a nosotros ahora"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Empieza creando tu cuenta"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recibe ofertas promocionales"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ya tengo una cuenta"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrarse"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Direcci\xF3n de correo electr\xF3nico"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contrase\xF1a"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Verificaci\xF3n de contrase\xF1a"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Su nombre es obligatorio"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su correo electr\xF3nico, ser\xE1 necesario para iniciar la sesi\xF3n"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, introduzca un correo electr\xF3nico v\xE1lido"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su contrase\xF1a con al menos 8 caracteres, ser\xE1 necesaria para iniciar la sesi\xF3n"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a debe contener al menos 8 caracteres"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, confirme su contrase\xF1a"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a no coincide"]);
          }
        }
      }
    }
  },
  "es": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccione el idioma"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xDAnete a nosotros ahora"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Empieza creando tu cuenta"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recibe ofertas promocionales"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ya tengo una cuenta"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrarse"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Direcci\xF3n de correo electr\xF3nico"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contrase\xF1a"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Verificaci\xF3n de contrase\xF1a"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Su nombre es obligatorio"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su correo electr\xF3nico, ser\xE1 necesario para iniciar la sesi\xF3n"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, introduzca un correo electr\xF3nico v\xE1lido"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su contrase\xF1a con al menos 8 caracteres, ser\xE1 necesaria para iniciar la sesi\xF3n"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a debe contener al menos 8 caracteres"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, confirme su contrase\xF1a"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a no coincide"]);
          }
        }
      }
    }
  },
  "fa": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627 \u0628\u0647 \u062C\u0645\u0639 \u0645\u0627 \u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F."]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062F\u0631 \u0627\u0628\u062A\u062F\u0627 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0631\u0627\u06CC \u062E\u0648\u062F \u0628\u0633\u0627\u0632\u06CC\u062F"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062F\u0631\u06CC\u0627\u0641\u062A \u0622\u06AF\u0647\u06CC\u200C\u0647\u0627\u06CC \u062A\u062E\u0641\u06CC\u0641"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u0646 \u0627\u0632 \u0642\u0628\u0644 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0633\u0627\u062E\u062A\u0647\u200C\u0627\u0645"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062B\u0628\u062A \u0646\u0627\u0645"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0646\u0627\u0645"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u06AF\u0630\u0631\u0648\u0627\u0698\u0647"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062A\u0623\u06CC\u06CC\u062F \u06AF\u0630\u0631\u0648\u0627\u0698\u0647"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0646\u0627\u0645 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0627\u06CC\u0645\u06CC\u0644 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0644\u0637\u0641\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u0639\u062A\u0628\u0631\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0644\u0637\u0641\u0627 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647\u200C\u0627\u06CC \u06A9\u0647 \u062F\u0627\u0631\u0627\u06CC \u062D\u062F\u0627\u0642\u0644 \u06F8 \u062D\u0631\u0641 \u0628\u0627\u0634\u062F \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u06AF\u0630\u0631\u0648\u0627\u0698\u0647 \u062F\u0627\u0631\u0627\u06CC \u062D\u062F\u0627\u0642\u0644 \u06F8 \u062D\u0631\u0641 \u0628\u0627\u0634\u062F"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0644\u0637\u0641\u0627 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647 \u0631\u0627 \u062A\u0623\u06CC\u06CC\u062F \u06A9\u0646\u06CC\u062F"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u06AF\u0630\u0631\u0648\u0627\u0698\u0647\u200C\u0647\u0627 \u06CC\u06A9\u0633\u0627\u0646 \u0646\u06CC\u0633\u062A\u0646\u062F"]);
          }
        }
      }
    },
    "status": {
      "Offline": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0622\u0641\u0644\u0627\u06CC\u0646"]);
      },
      "offline": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0622\u0641\u0644\u0627\u06CC\u0646"]);
      },
      "Online": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0622\u0646\u0644\u0627\u06CC\u0646"]);
      },
      "online": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0622\u0646\u0644\u0627\u06CC\u0646"]);
      },
      "Busy": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0645\u0634\u063A\u0648\u0644"]);
      },
      "busy": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0645\u0634\u063A\u0648\u0644"]);
      },
      "Available": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062F\u0631 \u062F\u0633\u062A\u0631\u0633"]);
      },
      "available": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062F\u0631 \u062F\u0633\u062A\u0631\u0633"]);
      }
    },
    "roles": {
      "manager": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0645\u062F\u06CC\u0631"]);
      },
      "reader": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062E\u0648\u0627\u0646\u0646\u062F\u0647"]);
      },
      "owner": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0645\u0627\u0644\u06A9"]);
      },
      "collaborator": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0647\u0645\u06A9\u0627\u0631"]);
      }
    }
  },
  "fr": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\xE9lectionnez une langue"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rejoignez-nous maintenant"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Commencez par cr\xE9er votre compte"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recevez des offres promotionnelles"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["J'ai d\xE9j\xE0 un compte"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cr\xE9er un compte"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nom"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Adresse \xE9lectronique"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mot de passe"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["V\xE9rification du mot de passe"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Votre nom, pr\xE9nom est obligatoire"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Entrez votre email, il sera n\xE9cessaire pour vous connecter"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Veuillez entrer une adresse \xE9lectronique valide"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Entrez votre mot de passe avec au moins 8 caract\xE8res, il vous sera demand\xE9 pour vous connecter"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Le mot de passe doit contenir au moins 8 caract\xE8res"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Veuillez confirmer votre mot de passe"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Le mot de passe ne correspond pas"]);
          }
        }
      }
    }
  },
  "zh-CN": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9009\u62E9\u8BED\u8A00"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u73B0\u5728\u5C31\u52A0\u5165\u6211\u4EEC"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4ECE\u521B\u5EFA\u4F60\u7684\u8D26\u6237\u5F00\u59CB"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u63A5\u6536\u4FC3\u9500\u4F18\u60E0"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6211\u5DF2\u7ECF\u6709\u4E00\u4E2A\u8D26\u6237"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6CE8\u518C"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u59D3\u540D"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7535\u5B50\u90AE\u4EF6\u5730\u5740"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BC6\u7801"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BC6\u7801\u9A8C\u8BC1"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u60A8\u7684\u59D3\u540D\u662F\u5FC5\u586B\u7684"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8F93\u5165\u4F60\u7684\u7535\u5B50\u90AE\u4EF6\uFF0C\u5B83\u5C06\u662F\u767B\u5F55\u7684\u5FC5\u8981\u6761\u4EF6"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801\uFF0C\u81F3\u5C11\u67098\u4E2A\u5B57\u7B26\uFF0C\u767B\u5F55\u65F6\u5FC5\u987B\u8F93\u5165"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5BC6\u7801\u5E94\u81F3\u5C11\u5305\u542B8\u4E2A\u5B57\u7B26"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u786E\u8BA4\u60A8\u7684\u5BC6\u7801"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BE5\u5BC6\u7801\u4E0D\u5339\u914D"]);
          }
        }
      }
    }
  }
};
function createI18n() {
  const defaultLocale = useStorage("locale", "fa");
  const i18n = createI18n$1({
    locale: defaultLocale.value,
    fallbackLocale: "fa",
    messages
  });
  return i18n;
}
var AnimatedLogo_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _withScopeId$2 = (n2) => (pushScopeId("data-v-47361cec"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$b = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("path", {
    class: "right",
    d: "M67.3,55.7L75.6,70l3.7,6.4l22.1,38.3l35.9-0.1L78.2,14.1L61.2,45L67.3,55.7z M130.1,114.5l-21.3,0.1"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    class: "left",
    d: "M39.1,145.9l11.7-20.3l2.7-4.7l3.7-6.4l22.1-38.3L61.2,45L3.6,145.9H39.1z M64.8,51.5l2.5,4.2l8.3,14.2V70\n			L64.8,51.5z"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    class: "bottom",
    d: "M39,145.9h117.4l-19.1-31.4l-80.1,0.1L39,145.9z M53.4,121l-10.6,18.5l7.9-13.9L53.4,121z"
  })
], -1));
const _hoisted_2$a = [
  _hoisted_1$b
];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    light: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const isLoading = ref(false);
    router.beforeEach(() => {
      isLoading.value = true;
    });
    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 200);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        id: "OBJECTS",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 160 160",
        style: { "enable-background": "new 0 0 160 160" },
        "xml:space": "preserve",
        class: normalizeClass([props.light && "is-light"])
      }, [
        createBaseVNode("g", {
          class: normalizeClass([isLoading.value && "is-roll"])
        }, _hoisted_2$a, 2)
      ], 2);
    };
  }
});
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-47361cec"]]);
const CssUnitRe = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;
var VPlaceload_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    width: { type: String, required: false, default: "100%" },
    height: { type: String, required: false, default: "10px" },
    disabled: { type: Boolean, required: false },
    centered: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "5f472bef": props.width,
      "0e8f8ec0": __props.height
    }));
    if (props.width.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${props.width}" width. Should be a valid css unit value.`);
    }
    if (props.height.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${props.height}" height. Should be a valid css unit value.`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["content-shape", [props.centered && "is-centered", !props.disabled && "loads"]])
      }, null, 2);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-18376a5b"]]);
const _sfc_main$e = defineComponent({
  props: {
    to: {
      type: [Object, String],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    iconCaret: {
      type: String,
      default: void 0
    },
    placeload: {
      type: String,
      default: void 0,
      validator: (value) => {
        if (value.match(CssUnitRe) === null) {
          console.warn(`VButton: invalid "${value}" placeload. Should be a valid css unit value.`);
        }
        return true;
      }
    },
    color: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([
          void 0,
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "white",
          "dark",
          "light"
        ].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" color. Should be primary, info, success, warning, danger, dark, light, white or undefined`);
          return false;
        }
        return true;
      }
    },
    size: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "big", "huge"].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" size. Should be big, huge or undefined`);
          return false;
        }
        return true;
      }
    },
    dark: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "1", "2", "3", "4", "5", "6"].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`);
          return false;
        }
        return true;
      }
    },
    rounded: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    elevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    darkOutlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    lower: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    const classes = computed(() => {
      var _a;
      const defaultClasses = (_a = attrs == null ? void 0 : attrs.class) != null ? _a : [];
      return [
        ...defaultClasses,
        "button",
        "v-button",
        props.disabled && "is-disabled",
        props.rounded && "is-rounded",
        props.bold && "is-bold",
        props.size && `is-${props.size}`,
        props.lower && "is-lower",
        props.fullwidth && "is-fullwidth",
        props.outlined && "is-outlined",
        props.dark && `is-dark-bg-${props.dark}`,
        props.darkOutlined && "is-dark-outlined",
        props.raised && "is-raised",
        props.elevated && "is-elevated",
        props.loading && !props.placeload && "is-loading",
        props.color && `is-${props.color}`,
        props.light && "is-light"
      ];
    });
    const isIconify = computed(() => props.icon && props.icon.indexOf(":") !== -1);
    const isCaretIconify = computed(() => props.iconCaret && props.iconCaret.indexOf(":") !== -1);
    const getChildrens = () => {
      var _a;
      const childrens = [];
      let iconWrapper;
      if (isIconify.value) {
        const icon = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.icon
        });
        iconWrapper = h("span", { class: "icon" }, icon);
      } else if (props.icon) {
        const icon = h("i", { "aria-hidden": true, class: props.icon });
        iconWrapper = h("span", { class: "icon" }, icon);
      }
      let caretWrapper;
      if (isCaretIconify.value) {
        const caret = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.iconCaret
        });
        caretWrapper = h("span", { class: "caret" }, caret);
      } else if (props.iconCaret) {
        const caret = h("i", { "aria-hidden": true, class: props.iconCaret });
        caretWrapper = h("span", { class: "caret" }, caret);
      }
      if (iconWrapper) {
        childrens.push(iconWrapper);
      }
      if (props.placeload) {
        childrens.push(h(__unplugin_components_0, {
          width: props.placeload
        }));
      } else {
        childrens.push(h("span", (_a = slots.default) == null ? void 0 : _a.call(slots)));
      }
      if (caretWrapper) {
        childrens.push(caretWrapper);
      }
      return childrens;
    };
    return () => {
      if (props.to) {
        return h(RouterLink, __spreadProps(__spreadValues({}, attrs), {
          "aria-hidden": !!props.placeload && true,
          to: props.to,
          class: ["button", ...classes.value]
        }), {
          default: getChildrens
        });
      } else if (props.href) {
        return h("a", __spreadProps(__spreadValues({}, attrs), {
          "aria-hidden": !!props.placeload && true,
          href: props.href,
          class: classes.value
        }), {
          default: getChildrens
        });
      }
      return h("button", __spreadProps(__spreadValues({
        type: "button"
      }, attrs), {
        "aria-hidden": !!props.placeload && true,
        disabled: props.disabled,
        class: ["button", ...classes.value]
      }), {
        default: getChildrens
      });
    };
  }
});
const isLargeScreen = useMediaQuery("(min-width: 1023px)");
const isMediumScreen = useMediaQuery("(min-width: 767px)");
const DARK_MODE_BODY_CLASS = "is-dark";
const preferredDark = usePreferredDark();
const colorSchema = useStorage("color-schema", "auto");
const isDark = computed({
  get() {
    return colorSchema.value === "auto" ? preferredDark.value : colorSchema.value === "dark";
  },
  set(v2) {
    if (v2 === preferredDark.value)
      colorSchema.value = "auto";
    else
      colorSchema.value = v2 ? "dark" : "light";
  }
});
const toggleDarkModeHandler = (event) => {
  const target = event.target;
  isDark.value = !target.checked;
};
watchEffect(() => {
  const body = document.documentElement;
  if (isDark.value) {
    body.classList.add(DARK_MODE_BODY_CLASS);
  } else {
    body.classList.remove(DARK_MODE_BODY_CLASS);
  }
});
const _hoisted_1$a = { class: "navbar-brand" };
const _hoisted_2$9 = { class: "brand-icon" };
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_6$6 = [
  _hoisted_3$9,
  _hoisted_4$7,
  _hoisted_5$6
];
const _hoisted_7$6 = { class: "navbar-start" };
const _hoisted_8$6 = /* @__PURE__ */ createBaseVNode("div", { class: "navbar-item" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://www.rtl-theme.com/user-profile/vuero/",
    class: "nav-link is-active"
  }, " \u0633\u0641\u0627\u0631\u0634 \u062F\u0647\u06CC\u062F ")
], -1);
const _hoisted_9$5 = { class: "navbar-item" };
const _hoisted_10$5 = /* @__PURE__ */ createTextVNode(" \u062F\u0645\u0648\u0647\u0627 ");
const _hoisted_11$4 = { class: "navbar-item" };
const _hoisted_12$4 = /* @__PURE__ */ createTextVNode(" \u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627\u06CC UI ");
const _hoisted_13$4 = /* @__PURE__ */ createBaseVNode("div", { class: "navbar-item" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://docs.vuero.ir",
    class: "nav-link"
  }, "\u0631\u0627\u0647\u0646\u0645\u0627")
], -1);
const _hoisted_14$4 = /* @__PURE__ */ createBaseVNode("div", { class: "navbar-item" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://support.vuero.ir",
    class: "nav-link"
  }, "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC")
], -1);
const _hoisted_15$4 = { class: "navbar-end" };
const _hoisted_16$4 = { class: "navbar-item is-theme-toggle" };
const _hoisted_17$4 = { class: "theme-toggle" };
const _hoisted_18$3 = /* @__PURE__ */ createStaticVNode('<span class="toggler"><span class="dark"><i aria-hidden="true" class="iconify" data-icon="feather:moon"></i></span><span class="light"><i aria-hidden="true" class="iconify" data-icon="feather:sun"></i></span></span>', 1);
const _hoisted_19$3 = { class: "navbar-item" };
const _hoisted_20$3 = /* @__PURE__ */ createTextVNode(" \u0648\u0631\u0648\u062F ");
const _hoisted_21$2 = { class: "navbar-item" };
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("strong", null, "\u062B\u0628\u062A \u0646\u0627\u0645", -1);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isMobileNavOpen = ref(false);
    useRouter();
    const scrollTo = VueScrollTo.scrollTo;
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    watchEffect(() => {
      if (isLargeScreen.value) {
        isMobileNavOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$e;
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(["navbar is-fixed-top is-transparent", [!unref(isScrolling) && "is-docked", isMobileNavOpen.value && "is-solid"]]),
        "aria-label": "main navigation"
      }, [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("a", {
            href: "/",
            class: "navbar-item",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(scrollTo)("#app", 800), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_2$9, [
              createVNode(_component_AnimatedLogo, {
                width: "34px",
                height: "34px"
              })
            ])
          ]),
          createBaseVNode("a", {
            role: "button",
            class: normalizeClass([[isMobileNavOpen.value && "is-active"], "navbar-burger burger"]),
            "aria-label": "menu",
            "aria-expanded": "false",
            tabindex: "0",
            onClick: _cache[1] || (_cache[1] = ($event) => isMobileNavOpen.value = !isMobileNavOpen.value)
          }, _hoisted_6$6, 2)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["navbar-menu", [isMobileNavOpen.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_7$6, [
            _hoisted_8$6,
            createBaseVNode("div", _hoisted_9$5, [
              createVNode(_component_RouterLink, {
                to: {
                  name: "index",
                  hash: "#vuero-demos"
                },
                class: "nav-link is-scroll",
                onClickPassive: _cache[2] || (_cache[2] = () => {
                  unref(scrollTo)("#vuero-demos", 800, { offset: -50 });
                  isMobileNavOpen.value = false;
                })
              }, {
                default: withCtx(() => [
                  _hoisted_10$5
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_11$4, [
              createVNode(_component_RouterLink, {
                to: {
                  name: "index",
                  hash: "#vuero-components"
                },
                class: "nav-link is-scroll",
                onClickPassive: _cache[3] || (_cache[3] = () => {
                  unref(scrollTo)("#vuero-components", 800, { offset: -50 });
                  isMobileNavOpen.value = false;
                })
              }, {
                default: withCtx(() => [
                  _hoisted_12$4
                ]),
                _: 1
              })
            ]),
            _hoisted_13$4,
            _hoisted_14$4
          ]),
          createBaseVNode("div", _hoisted_15$4, [
            createBaseVNode("div", _hoisted_16$4, [
              createBaseVNode("label", _hoisted_17$4, [
                withDirectives(createBaseVNode("input", {
                  id: "navbar-night-toggle--daynight",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(isDark) ? isDark.value = $event : null),
                  type: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, unref(isDark)]
                ]),
                _hoisted_18$3
              ])
            ]),
            createBaseVNode("div", _hoisted_19$3, [
              createVNode(_component_RouterLink, {
                to: { name: "auth-login-1" },
                class: "nav-link"
              }, {
                default: withCtx(() => [
                  _hoisted_20$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_21$2, [
              createVNode(_component_VButton, {
                to: { name: "auth-signup-1" },
                color: "primary",
                rounded: "",
                raised: ""
              }, {
                default: withCtx(() => [
                  _hoisted_22$2
                ]),
                _: 1
              })
            ])
          ])
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1$9 = { class: "v-popover-profile has-loader" };
const _hoisted_2$8 = { class: "profile-popover-block" };
const _hoisted_3$8 = { class: "profile-popover-wrapper" };
const _hoisted_4$6 = {
  key: 0,
  class: "popover-avatar"
};
const _hoisted_5$5 = ["src"];
const _hoisted_6$5 = { class: "popover-meta" };
const _hoisted_7$5 = { class: "stack-meta" };
const _hoisted_8$5 = { class: "stackname dark-inverted" };
const _hoisted_9$4 = {
  key: 0,
  class: "job-title mb-1"
};
const _hoisted_10$4 = { class: "bio" };
const _hoisted_11$3 = { class: "popover-actions" };
const _hoisted_12$3 = ["href"];
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:link"
}, null, -1);
const _hoisted_14$3 = [
  _hoisted_13$3
];
const _hoisted_15$3 = ["href"];
const _hoisted_16$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:github"
}, null, -1);
const _hoisted_17$3 = [
  _hoisted_16$3
];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    stack: { type: Object, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("div", _hoisted_3$8, [
            __props.stack.logo ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
              createBaseVNode("img", {
                class: "avatar",
                src: __props.stack.logo,
                alt: ""
              }, null, 8, _hoisted_5$5)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_6$5, [
              createBaseVNode("span", _hoisted_7$5, [
                createBaseVNode("span", _hoisted_8$5, toDisplayString(__props.stack.name), 1)
              ]),
              __props.stack.subtitle ? (openBlock(), createElementBlock("span", _hoisted_9$4, toDisplayString(__props.stack.subtitle), 1)) : createCommentVNode("", true),
              createBaseVNode("span", _hoisted_10$4, toDisplayString(__props.stack.description), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_11$3, [
            __props.stack.homepage ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "popover-icon",
              href: __props.stack.homepage
            }, _hoisted_14$3, 8, _hoisted_12$3)) : createCommentVNode("", true),
            __props.stack.github ? (openBlock(), createElementBlock("a", {
              key: 1,
              class: "popover-icon",
              href: __props.stack.github
            }, _hoisted_17$3, 8, _hoisted_15$3)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    align: { type: String, required: false, default: void 0 },
    addons: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["buttons", [props.addons && "has-addons", props.align && `is-${props.align}`]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var VControl_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n2) => (pushScopeId("data-v-aad2da70"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$8 = {
  key: 0,
  class: "form-icon"
};
const _hoisted_2$7 = ["data-icon"];
const _hoisted_3$7 = {
  key: 1,
  class: "validation-icon is-success"
};
const _hoisted_4$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:check"
}, null, -1));
const _hoisted_5$4 = [
  _hoisted_4$5
];
const _hoisted_6$4 = {
  key: 2,
  class: "validation-icon is-error"
};
const _hoisted_7$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1));
const _hoisted_8$4 = [
  _hoisted_7$4
];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    icon: { type: String, required: false, default: void 0 },
    isValid: { type: Boolean, required: false },
    hasError: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    expanded: { type: Boolean, required: false },
    textaddon: { type: Boolean, required: false },
    nogrow: { type: Boolean, required: false },
    subcontrol: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["control", [
          __props.icon && "has-icon",
          __props.loading && "is-loading",
          __props.expanded && "is-expanded",
          __props.nogrow && "is-nogrow",
          __props.textaddon && "is-textarea-addon",
          __props.isValid && "has-validation has-success",
          __props.hasError && "has-validation has-error",
          __props.subcontrol && "subcontrol"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        __props.icon ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
          unref(isIconify) ? (openBlock(), createElementBlock("i", {
            key: 0,
            "aria-hidden": "true",
            class: "iconify",
            "data-icon": __props.icon
          }, null, 8, _hoisted_2$7)) : (openBlock(), createElementBlock("i", {
            key: 1,
            "aria-hidden": "true",
            class: normalizeClass(__props.icon)
          }, null, 2))
        ])) : createCommentVNode("", true),
        __props.isValid ? (openBlock(), createElementBlock("div", _hoisted_3$7, _hoisted_5$4)) : __props.hasError ? (openBlock(), createElementBlock("div", _hoisted_6$4, _hoisted_8$4)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "extra", {}, void 0, true)
      ], 2);
    };
  }
});
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-aad2da70"]]);
const _hoisted_1$7 = { class: "field-label is-normal" };
const _hoisted_2$6 = { class: "label" };
const _hoisted_3$6 = { class: "field-body" };
const _hoisted_4$4 = { class: "label" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    label: { type: String, required: false, default: void 0 },
    addons: { type: Boolean, required: false },
    textaddon: { type: Boolean, required: false },
    grouped: { type: Boolean, required: false },
    multiline: { type: Boolean, required: false },
    horizontal: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", [
          props.addons && "has-addons",
          props.textaddon && "has-textarea-addon",
          props.grouped && "is-grouped",
          props.grouped && props.multiline && "is-grouped-multiline",
          props.horizontal && "is-horizontal"
        ]])
      }, [
        typeof props.label === "string" && props.horizontal ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1$7, [
            createBaseVNode("label", _hoisted_2$6, toDisplayString(props.label), 1)
          ]),
          createBaseVNode("div", _hoisted_3$6, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 64)) : typeof props.label === "string" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("label", _hoisted_4$4, toDisplayString(props.label), 1),
          renderSlot(_ctx.$slots, "default")
        ], 64)) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 2);
    };
  }
});
var VFlex_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$6 = { class: "v-flex" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    inline: { type: Boolean, required: false },
    flexDirection: { type: String, required: false, default: "row" },
    flexWrap: { type: String, required: false, default: "nowrap" },
    justifyContent: { type: String, required: false, default: "normal" },
    alignItems: { type: String, required: false, default: "normal" },
    alignContent: { type: String, required: false, default: "normal" },
    rowGap: { type: String, required: false, default: "normal" },
    columnGap: { type: String, required: false, default: "normal" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "3e3bf628": unref(display),
      "54feccb2": props.flexDirection,
      "52495737": props.flexWrap,
      "78bf6fc6": props.justifyContent,
      "61222e0f": props.alignItems,
      "5be32308": props.alignContent,
      "5d475a20": props.rowGap,
      "3fcea268": props.columnGap
    }));
    const display = computed(() => props.inline ? "inline-flex" : "flex");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "page-placeholder" };
const _hoisted_2$5 = { class: "placeholder-content" };
const _hoisted_3$5 = { class: "dark-inverted" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false, default: void 0 },
    larger: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          renderSlot(_ctx.$slots, "image"),
          createBaseVNode("h3", _hoisted_3$5, toDisplayString(props.title), 1),
          props.subtitle ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass([props.larger && "is-larger"])
          }, toDisplayString(props.subtitle), 3)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "action")
        ])
      ]);
    };
  }
});
var _imports_0$1 = "/assets/search-4.0609e428.svg";
var _imports_1$1 = "/assets/search-4-dark.33c0a6fe.svg";
var _imports_2$2 = "/images/icons/components/layout-1.svg";
var _imports_3$2 = "/images/icons/components/layout-1-dark.svg";
var _imports_4$1 = "/images/icons/components/layout-2.svg";
var _imports_5$1 = "/images/icons/components/layout-2-dark.svg";
var _imports_6 = "/images/icons/components/layout-3.svg";
var _imports_7 = "/images/icons/components/layout-3-dark.svg";
var sidebar = [
  {
    name: "\u067E\u06CC\u0627\u0645 \u0631\u0633\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 210,
    "new": false,
    route: {
      name: "messaging-v1",
      path: "/messaging-v1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/messaging-v1-light.webp",
      dark: "/images/screenshots/sidebar/messaging-v1-dark.webp"
    }
  },
  {
    name: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06F1",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 211,
    "new": true,
    route: {
      name: "sidebar-maps-1",
      path: "/sidebar/maps-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/maps-v1-light.webp",
      dark: "/images/screenshots/sidebar/maps-v1-dark.webp"
    }
  },
  {
    name: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06F2",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 212,
    "new": true,
    route: {
      name: "sidebar-maps-2",
      path: "/sidebar/maps-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/maps-v2-light.webp",
      dark: "/images/screenshots/sidebar/maps-v2-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0627\u06A9\u0634\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 590,
    "new": false,
    route: {
      name: "sidebar-layouts-action-page-1",
      path: "/sidebar/layouts/action-page-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/action-page-v1-light.webp",
      dark: "/images/screenshots/sidebar/action-page-v1-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0627\u06A9\u0634\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 600,
    "new": false,
    route: {
      name: "sidebar-layouts-action-page-2",
      path: "/sidebar/layouts/action-page-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/action-page-v2-light.webp",
      dark: "/images/screenshots/sidebar/action-page-v2-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 360,
    "new": false,
    route: {
      name: "sidebar-layouts-form-layouts-1",
      path: "/sidebar/layouts/form-layouts-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/form-v1-light.webp",
      dark: "/images/screenshots/sidebar/form-v1-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 370,
    "new": false,
    route: {
      name: "sidebar-layouts-form-layouts-2",
      path: "/sidebar/layouts/form-layouts-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/form-v2-light.webp",
      dark: "/images/screenshots/sidebar/form-v2-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 380,
    "new": false,
    route: {
      name: "sidebar-layouts-form-layouts-3",
      path: "/sidebar/layouts/form-layouts-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/form-v3-light.webp",
      dark: "/images/screenshots/sidebar/form-v3-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 390,
    "new": false,
    route: {
      name: "sidebar-layouts-form-layouts-4",
      path: "/sidebar/layouts/form-layouts-4"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/form-v4-light.webp",
      dark: "/images/screenshots/sidebar/form-v4-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F5",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 395,
    "new": false,
    route: {
      name: "sidebar-layouts-form-layouts-5",
      path: "/sidebar/layouts/form-layouts-5"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/form-v5-light.webp",
      dark: "/images/screenshots/sidebar/form-v5-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 400,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-cards-1",
      path: "/sidebar/layouts/grid-cards-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-card-v1-light.webp",
      dark: "/images/screenshots/sidebar/grid-card-v1-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 410,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-cards-2",
      path: "/sidebar/layouts/grid-cards-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-card-v2-light.webp",
      dark: "/images/screenshots/sidebar/grid-card-v2-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 420,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-cards-3",
      path: "/sidebar/layouts/grid-cards-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-card-v3-light.webp",
      dark: "/images/screenshots/sidebar/grid-card-v3-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 430,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-cards-4",
      path: "/sidebar/layouts/grid-cards-4"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-card-v4-light.webp",
      dark: "/images/screenshots/sidebar/grid-card-v4-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 440,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-tiles-1",
      path: "/sidebar/layouts/grid-tiles-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-tiles-v1-light.webp",
      dark: "/images/screenshots/sidebar/grid-tiles-v1-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 450,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-tiles-2",
      path: "/sidebar/layouts/grid-tiles-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-tiles-v2-light.webp",
      dark: "/images/screenshots/sidebar/grid-tiles-v2-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 460,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-tiles-3",
      path: "/sidebar/layouts/grid-tiles-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-tiles-v3-light.webp",
      dark: "/images/screenshots/sidebar/grid-tiles-v3-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 470,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-users-1",
      path: "/sidebar/layouts/grid-users-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-users-v1-light.webp",
      dark: "/images/screenshots/sidebar/grid-users-v1-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 480,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-users-2",
      path: "/sidebar/layouts/grid-users-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-users-v2-light.webp",
      dark: "/images/screenshots/sidebar/grid-users-v2-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 490,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-users-3",
      path: "/sidebar/layouts/grid-users-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-users-v3-light.webp",
      dark: "/images/screenshots/sidebar/grid-users-v3-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 500,
    "new": false,
    route: {
      name: "sidebar-layouts-grid-users-4",
      path: "/sidebar/layouts/grid-users-4"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/grid-users-v4-light.webp",
      dark: "/images/screenshots/sidebar/grid-users-v4-dark.webp"
    }
  },
  {
    name: "\u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646 \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 320,
    "new": false,
    route: {
      name: "sidebar-layouts-onboarding-welcome",
      path: "/sidebar/layouts/onboarding-welcome"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/onboarding-standard-light.webp",
      dark: "/images/screenshots/sidebar/onboarding-standard-dark.webp"
    }
  },
  {
    name: "\u062A\u062E\u062A\u0647 \u06A9\u0627\u0646\u0628\u0627\u0646",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 650,
    "new": false,
    route: {
      name: "sidebar-layouts-kanban-board",
      path: "/sidebar/layouts/kanban-board"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/kanban-board-light.webp",
      dark: "/images/screenshots/sidebar/kanban-board-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 320,
    "new": false,
    route: {
      name: "sidebar-layouts-list-datatable-1",
      path: "/sidebar/layouts/list-datatable-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-datatable-v1-light.webp",
      dark: "/images/screenshots/sidebar/list-datatable-v1-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 330,
    "new": false,
    route: {
      name: "sidebar-layouts-list-datatable-2",
      path: "/sidebar/layouts/list-datatable-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-datatable-v2-light.webp",
      dark: "/images/screenshots/sidebar/list-datatable-v2-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 340,
    "new": false,
    route: {
      name: "sidebar-layouts-list-datatable-3",
      path: "/sidebar/layouts/list-datatable-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-datatable-v3-light.webp",
      dark: "/images/screenshots/sidebar/list-datatable-v3-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 350,
    "new": false,
    route: {
      name: "sidebar-layouts-list-datatable-4",
      path: "/sidebar/layouts/list-datatable-4"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-datatable-v4-light.webp",
      dark: "/images/screenshots/sidebar/list-datatable-v4-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 290,
    "new": false,
    route: {
      name: "sidebar-layouts-list-flex-1",
      path: "/sidebar/layouts/list-flex-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-flex-v1-light.webp",
      dark: "/images/screenshots/sidebar/list-flex-v1-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 300,
    "new": false,
    route: {
      name: "sidebar-layouts-list-flex-2",
      path: "/sidebar/layouts/list-flex-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-flex-v2-light.webp",
      dark: "/images/screenshots/sidebar/list-flex-v2-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 310,
    "new": false,
    route: {
      name: "sidebar-layouts-list-flex-3",
      path: "/sidebar/layouts/list-flex-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-flex-v3-light.webp",
      dark: "/images/screenshots/sidebar/list-flex-v3-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC (\u0648\u06CC\u0648 \u0644\u06CC\u0633\u062A\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1)",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 250,
    "new": false,
    route: {
      name: "sidebar-layouts",
      path: "/sidebar/layouts/"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/homepage-list-view-v1--light.webp",
      dark: "/images/screenshots/sidebar/homepage-list-view-v1--dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0648 \u0644\u06CC\u0633\u062A\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 260,
    "new": false,
    route: {
      name: "sidebar-layouts-list-view-2",
      path: "/sidebar/layouts/list-view-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-view-v2-light.webp",
      dark: "/images/screenshots/sidebar/list-view-v2-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0648 \u0644\u06CC\u0633\u062A\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 270,
    "new": false,
    route: {
      name: "sidebar-layouts-list-view-3",
      path: "/sidebar/layouts/list-view-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-view-v3-light.webp",
      dark: "/images/screenshots/sidebar/list-view-v3-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0648 \u0644\u06CC\u0633\u062A\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 280,
    "new": false,
    route: {
      name: "sidebar-layouts-list-view-4",
      path: "/sidebar/layouts/list-view-4"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/list-view-v4-light.webp",
      dark: "/images/screenshots/sidebar/list-view-v4-dark.webp"
    }
  },
  {
    name: "\u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 700,
    "new": false,
    route: {
      name: "sidebar-layouts-onboarding-page-1",
      path: "/sidebar/layouts/onboarding-page-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/onboarding-page-v1-light.webp",
      dark: "/images/screenshots/sidebar/onboarding-page-v1-dark.webp"
    }
  },
  {
    name: "\u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 710,
    "new": false,
    route: {
      name: "sidebar-layouts-onboarding-page-2",
      path: "/sidebar/layouts/onboarding-page-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/onboarding-page-v2-light.webp",
      dark: "/images/screenshots/sidebar/onboarding-page-v2-dark.webp"
    }
  },
  {
    name: "\u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 720,
    "new": false,
    route: {
      name: "sidebar-layouts-onboarding-page-3",
      path: "/sidebar/layouts/onboarding-page-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/onboarding-page-v3-light.webp",
      dark: "/images/screenshots/sidebar/onboarding-page-v3-dark.webp"
    }
  },
  {
    name: "\u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 730,
    "new": false,
    route: {
      name: "sidebar-layouts-onboarding-page-4",
      path: "/sidebar/layouts/onboarding-page-4"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/onboarding-page-v4-light.webp",
      dark: "/images/screenshots/sidebar/onboarding-page-v4-dark.webp"
    }
  },
  {
    name: "\u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F5",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 740,
    "new": false,
    route: {
      name: "sidebar-layouts-onboarding-page-5",
      path: "/sidebar/layouts/onboarding-page-5"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/onboarding-page-v5-light.webp",
      dark: "/images/screenshots/sidebar/onboarding-page-v5-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 520,
    "new": false,
    route: {
      name: "sidebar-layouts-profile-edit",
      path: "/sidebar/layouts/profile-edit"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/profile-edit-light.webp",
      dark: "/images/screenshots/sidebar/profile-edit-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062A\u062C\u0631\u0628\u06CC\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 530,
    "new": false,
    route: {
      name: "sidebar-layouts-profile-edit-experience",
      path: "/sidebar/layouts/profile-edit/experience"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/profile-edit-experience-light.webp",
      dark: "/images/screenshots/sidebar/profile-edit-experience-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 540,
    "new": false,
    route: {
      name: "sidebar-layouts-profile-edit-skills",
      path: "/sidebar/layouts/profile-edit/skills"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/profile-edit-skills-light.webp",
      dark: "/images/screenshots/sidebar/profile-edit-skills-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 550,
    "new": false,
    route: {
      name: "sidebar-layouts-profile-edit-settings",
      path: "/sidebar/layouts/profile-edit/settings"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/profile-edit-settings-light.webp",
      dark: "/images/screenshots/sidebar/profile-edit-settings-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0627\u0639\u0644\u0627\u0646\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 270,
    "new": false,
    route: {
      name: "sidebar-layouts-profile-notifications",
      path: "/sidebar/layouts/profile-notifications"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/profile-notifications-light.webp",
      dark: "/images/screenshots/sidebar/profile-notifications-dark.webp"
    }
  },
  {
    name: "\u062A\u0646\u0638\u0645\u06CC\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 280,
    "new": false,
    route: {
      name: "sidebar-layouts-profile-settings",
      path: "/sidebar/layouts/profile-settings"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/profile-settings-light.webp",
      dark: "/images/screenshots/sidebar/profile-settings-dark.webp"
    }
  },
  {
    name: "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 510,
    "new": false,
    route: {
      name: "sidebar-layouts-profile-view",
      path: "/sidebar/layouts/profile-view"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/profile-view-light.webp",
      dark: "/images/screenshots/sidebar/profile-view-dark.webp"
    }
  },
  {
    name: "\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u0648\u0698\u0647",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 640,
    "new": false,
    route: {
      name: "sidebar-layouts-projects-details",
      path: "/sidebar/layouts/projects-details"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/projects-details-light.webp",
      dark: "/images/screenshots/sidebar/projects-details-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 600,
    "new": false,
    route: {
      name: "sidebar-layouts-projects-projects-1",
      path: "/sidebar/layouts/projects-projects-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/projects-list-v1-light.webp",
      dark: "/images/screenshots/sidebar/projects-list-v1-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 610,
    "new": false,
    route: {
      name: "sidebar-layouts-projects-projects-2",
      path: "/sidebar/layouts/projects-projects-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/projects-list-v2-light.webp",
      dark: "/images/screenshots/sidebar/projects-list-v2-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 620,
    "new": false,
    route: {
      name: "sidebar-layouts-projects-projects-3",
      path: "/sidebar/layouts/projects-projects-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/projects-list-v3-light.webp",
      dark: "/images/screenshots/sidebar/projects-list-v3-dark.webp"
    }
  },
  {
    name: "SaaS \u067E\u0631\u062F\u0627\u062E\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 580,
    "new": false,
    route: {
      name: "sidebar-layouts-saas-billing",
      path: "/sidebar/layouts/saas-billing"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/saas-billing-light.webp",
      dark: "/images/screenshots/sidebar/saas-billing-dark.webp"
    }
  },
  {
    name: "\u062C\u0633\u062A\u062C\u0648\u06CC \u062E\u0627\u0644\u06CC",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 570,
    "new": false,
    route: {
      name: "sidebar-layouts-search-empty",
      path: "/sidebar/layouts/search-empty"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/search-empty-light.webp",
      dark: "/images/screenshots/sidebar/search-empty-dark.webp"
    }
  },
  {
    name: "\u0646\u062A\u0627\u06CC\u062C \u062C\u0633\u062A\u062C\u0648",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 560,
    "new": false,
    route: {
      name: "sidebar-layouts-search-results",
      path: "/sidebar/layouts/search-results"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/search-results-light.webp",
      dark: "/images/screenshots/sidebar/search-results-dark.webp"
    }
  },
  {
    name: "\u062A\u0623\u06CC\u06CC\u062F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 660,
    "new": false,
    route: {
      name: "sidebar-layouts-utility-account-confirm",
      path: "/sidebar/layouts/utility-account-confirm"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/account-confirm-light.webp",
      dark: "/images/screenshots/sidebar/account-confirm-dark.webp"
    }
  },
  {
    name: "\u0641\u0627\u06A9\u062A\u0648\u0631",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 680,
    "new": false,
    route: {
      name: "sidebar-layouts-utility-invoice",
      path: "/sidebar/layouts/utility-invoice"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/invoice-light.webp",
      dark: "/images/screenshots/sidebar/invoice-dark.webp"
    }
  },
  {
    name: "\u0627\u0631\u062A\u0642\u0627",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 670,
    "new": false,
    route: {
      name: "sidebar-layouts-utility-promotion",
      path: "/sidebar/layouts/utility-promotion"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/promotion-light.webp",
      dark: "/images/screenshots/sidebar/promotion-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u0644\u06CC\u0633\u062A",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 750,
    "new": true,
    route: {
      name: "sidebar-layouts-placeload-1",
      path: "/sidebar/layouts/placeload-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/placeload-list-light.webp",
      dark: "/images/screenshots/sidebar/placeload-list-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u062C\u062F\u0648\u0644",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 760,
    "new": true,
    route: {
      name: "sidebar-layouts-placeload-2",
      path: "/sidebar/layouts/placeload-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/placeload-table-light.webp",
      dark: "/images/screenshots/sidebar/placeload-table-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u0634\u0628\u06A9\u0647",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 770,
    "new": true,
    route: {
      name: "sidebar-layouts-placeload-3",
      path: "/sidebar/layouts/placeload-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/placeload-grid-light.webp",
      dark: "/images/screenshots/sidebar/placeload-grid-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u06A9\u0627\u0634\u06CC\u200C\u0647\u0627",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 780,
    "new": true,
    route: {
      name: "sidebar-layouts-placeload-4",
      path: "/sidebar/layouts/placeload-4"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/placeload-tiles-light.webp",
      dark: "/images/screenshots/sidebar/placeload-tiles-dark.webp"
    }
  },
  {
    name: "\u0627\u0631\u0633\u0627\u0644 \u063A\u0630\u0627",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 200,
    "new": false,
    route: {
      name: "sidebar-dashboards-food-delivery",
      path: "/sidebar/dashboards/food-delivery"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/food-delivery-light.webp",
      dark: "/images/screenshots/sidebar/food-delivery-dark.webp"
    }
  },
  {
    name: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 70,
    "new": false,
    route: {
      name: "sidebar-dashboards-banking-1",
      path: "/sidebar/dashboards/banking-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/banking-v1-light.webp",
      dark: "/images/screenshots/sidebar/banking-v1-dark.webp"
    }
  },
  {
    name: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 80,
    "new": false,
    route: {
      name: "sidebar-dashboards-banking-2",
      path: "/sidebar/dashboards/banking-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/banking-v2-light.webp",
      dark: "/images/screenshots/sidebar/banking-v2-dark.webp"
    }
  },
  {
    name: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 90,
    "new": false,
    route: {
      name: "sidebar-dashboards-banking-3",
      path: "/sidebar/dashboards/banking-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/banking-v3-light.webp",
      dark: "/images/screenshots/sidebar/banking-v3-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0627\u0632\u0647\u0627",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 100,
    "new": false,
    route: {
      name: "sidebar-dashboards-flights",
      path: "/sidebar/dashboards/flights"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/flights-light.webp",
      dark: "/images/screenshots/sidebar/flights-dark.webp"
    }
  },
  {
    name: "\u0634\u0631\u06A9\u062A",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 110,
    "new": false,
    route: {
      name: "sidebar-dashboards-company",
      path: "/sidebar/dashboards/company"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/company-light.webp",
      dark: "/images/screenshots/sidebar/company-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 120,
    "new": false,
    route: {
      name: "sidebar-dashboards-human-ressources",
      path: "/sidebar/dashboards/human-ressources"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/human-ressources-light.webp",
      dark: "/images/screenshots/sidebar/human-ressources-dark.webp"
    }
  },
  {
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u062F\u0648\u0631\u0647",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 130,
    "new": false,
    route: {
      name: "sidebar-dashboards-course",
      path: "/sidebar/dashboards/course"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/course-dashboard-light.webp",
      dark: "/images/screenshots/sidebar/course-dashboard-dark.webp"
    }
  },
  {
    name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645",
    category: "DASHBOARD",
    displayOrder: 131,
    "new": false,
    route: {
      name: "sidebar-dashboards-jobs",
      path: "/sidebar/dashboards/jobs"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/jobs-dashboard-light.webp",
      dark: "/images/screenshots/sidebar/jobs-dashboard-dark.webp"
    }
  },
  {
    name: "\u0646\u0645\u0648\u062F\u0627\u0631\u200C\u0647\u0627\u06CC Apex",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 220,
    "new": false,
    route: {
      name: "sidebar-dashboards-charts-apex",
      path: "/sidebar/dashboards/charts-apex"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/charts-apex-light.webp",
      dark: "/images/screenshots/sidebar/charts-apex-dark.webp"
    }
  },
  {
    name: "\u0646\u0645\u0648\u062F\u0627\u0631\u200C\u0647\u0627\u06CC BillboardsJS",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 230,
    "new": false,
    route: {
      name: "sidebar-dashboards-charts-billboardsjs",
      path: "/sidebar/dashboards/charts-billboardsjs"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/charts-billboardsjs-light.webp",
      dark: "/images/screenshots/sidebar/charts-billboardsjs-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 190,
    "new": false,
    route: {
      name: "sidebar-dashboards-ecommerce-1",
      path: "/sidebar/dashboards/ecommerce-1"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/ecommerce-v1-light.webp",
      dark: "/images/screenshots/sidebar/ecommerce-v1-dark.webp"
    }
  },
  {
    name: "\u062A\u062C\u0632\u06CC\u0647 \u0648 \u062A\u062D\u0644\u06CC\u0644",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 40,
    "new": false,
    route: {
      name: "sidebar-dashboards-analytics",
      path: "/sidebar/dashboards/analytics"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/analytics-light.webp",
      dark: "/images/screenshots/sidebar/analytics-dark.webp"
    }
  },
  {
    name: "\u0633\u0647\u0627\u0645",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 50,
    "new": false,
    route: {
      name: "sidebar-dashboards-stocks",
      path: "/sidebar/dashboards/stocks"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/stocks-light.webp",
      dark: "/images/screenshots/sidebar/stocks-dark.webp"
    }
  },
  {
    name: "\u062D\u0631\u0627\u062C\u06CC",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 60,
    "new": false,
    route: {
      name: "sidebar-dashboards-sales",
      path: "/sidebar/dashboards/sales"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/sales-light.webp",
      dark: "/images/screenshots/sidebar/sales-dark.webp"
    }
  },
  {
    name: "\u0627\u06CC\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 140,
    "new": false,
    route: {
      name: "sidebar-dashboards-influencer",
      path: "/sidebar/dashboards/influencer"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/influencer-light.webp",
      dark: "/images/screenshots/sidebar/influencer-dark.webp"
    }
  },
  {
    name: "\u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 150,
    "new": false,
    route: {
      name: "sidebar-dashboards-hobbies",
      path: "/sidebar/dashboards/hobbies"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/hobbies-light.webp",
      dark: "/images/screenshots/sidebar/hobbies-dark.webp"
    }
  },
  {
    name: "\u0633\u0644\u0627\u0645\u062A",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 160,
    "new": false,
    route: {
      name: "sidebar-dashboards-health",
      path: "/sidebar/dashboards/health"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/health-light.webp",
      dark: "/images/screenshots/sidebar/health-dark.webp"
    }
  },
  {
    name: "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 170,
    "new": false,
    route: {
      name: "sidebar-dashboards-writer",
      path: "/sidebar/dashboards/writer"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/writer-light.webp",
      dark: "/images/screenshots/sidebar/writer-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u062F\u0626\u0648",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 180,
    "new": false,
    route: {
      name: "sidebar-dashboards-video",
      path: "/sidebar/dashboards/video"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/video-light.webp",
      dark: "/images/screenshots/sidebar/video-dark.webp"
    }
  },
  {
    name: "Soccer league",
    category: "DASHBOARD",
    displayOrder: 181,
    "new": true,
    route: {
      name: "sidebar-dashboards-soccer",
      path: "/sidebar/dashboards/soccer"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/soccer-league-light.webp",
      dark: "/images/screenshots/sidebar/soccer-league-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC (\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1)",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 0,
    "new": false,
    route: {
      name: "sidebar-dashboards",
      path: "/sidebar/dashboards/"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/homepage-personal-v1--light.webp",
      dark: "/images/screenshots/sidebar/homepage-personal-v1--dark.webp"
    }
  },
  {
    name: "\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 10,
    "new": false,
    route: {
      name: "sidebar-dashboards-personal-2",
      path: "/sidebar/dashboards/personal-2"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/personal-v2-light.webp",
      dark: "/images/screenshots/sidebar/personal-v2-dark.webp"
    }
  },
  {
    name: "\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 20,
    "new": false,
    route: {
      name: "sidebar-dashboards-personal-3",
      path: "/sidebar/dashboards/personal-3"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/personal-v3-light.webp",
      dark: "/images/screenshots/sidebar/personal-v3-dark.webp"
    }
  },
  {
    name: "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u062E\u0644\u0627\u0642\u0627\u0646\u0647",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 250,
    "new": false,
    route: {
      name: "sidebar-dashboards-widgets-sample-creative",
      path: "/sidebar/dashboards/widgets-sample-creative"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/widgets-creative-light.webp",
      dark: "/images/screenshots/sidebar/widgets-creative-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 260,
    "new": false,
    route: {
      name: "sidebar-dashboards-widgets-sample-list",
      path: "/sidebar/dashboards/widgets-sample-list"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/widgets-list-light.webp",
      dark: "/images/screenshots/sidebar/widgets-list-dark.webp"
    }
  },
  {
    name: "\u0627\u0628\u0632\u0631\u0627\u06A9\u200C\u0647\u0627\u06CC \u0622\u0645\u0627\u0631\u06CC",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 270,
    "new": false,
    route: {
      name: "sidebar-dashboards-widgets-sample-stats",
      path: "/sidebar/dashboards/widgets-sample-stats"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/widgets-stats-light.webp",
      dark: "/images/screenshots/sidebar/widgets-stats-dark.webp"
    }
  },
  {
    name: "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 240,
    "new": false,
    route: {
      name: "sidebar-dashboards-widgets-sample-ui",
      path: "/sidebar/dashboards/widgets-sample-ui"
    },
    screenshot: {
      light: "/images/screenshots/sidebar/widgets-ui-light.webp",
      dark: "/images/screenshots/sidebar/widgets-ui-dark.webp"
    }
  }
];
var auth = [
  {
    name: "\u0648\u0631\u0648\u062F 1",
    category: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
    displayOrder: 0,
    "new": false,
    route: {
      name: "auth-login-1",
      path: "/auth/login-1"
    },
    screenshot: {
      light: "/images/screenshots/auth/login-1-light.webp",
      dark: "/images/screenshots/auth/login-1-dark.webp"
    }
  },
  {
    name: "\u0648\u0631\u0648\u062F 2",
    category: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
    displayOrder: 10,
    "new": false,
    route: {
      name: "auth-login-2",
      path: "/auth/login-2"
    },
    screenshot: {
      light: "/images/screenshots/auth/login-2-light.webp",
      dark: "/images/screenshots/auth/login-2-dark.webp"
    }
  },
  {
    name: "\u0648\u0631\u0648\u062F 3",
    category: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
    displayOrder: 20,
    "new": false,
    route: {
      name: "auth-login-3",
      path: "/auth/login-3"
    },
    screenshot: {
      light: "/images/screenshots/auth/login-3-light.webp",
      dark: "/images/screenshots/auth/login-3-dark.webp"
    }
  },
  {
    name: "\u062B\u0628\u062A \u0646\u0627\u0645 1",
    category: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
    displayOrder: 30,
    "new": false,
    route: {
      name: "auth-signup-1",
      path: "/auth/signup-1"
    },
    screenshot: {
      light: "/images/screenshots/auth/signup-1-light.webp",
      dark: "/images/screenshots/auth/signup-1-dark.webp"
    }
  },
  {
    name: "\u062B\u0628\u062A \u0646\u0627\u0645 2",
    category: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
    displayOrder: 40,
    "new": false,
    route: {
      name: "auth-signup-2",
      path: "/auth/signup-2"
    },
    screenshot: {
      light: "/images/screenshots/auth/signup-2-light.webp",
      dark: "/images/screenshots/auth/signup-2-dark.webp"
    }
  },
  {
    name: "\u062B\u0628\u062A \u0646\u0627\u0645 3",
    category: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
    displayOrder: 50,
    "new": false,
    route: {
      name: "auth-signup-3",
      path: "/auth/signup-3"
    },
    screenshot: {
      light: "/images/screenshots/auth/signup-3-light.webp",
      dark: "/images/screenshots/auth/signup-3-dark.webp"
    }
  }
];
var minimal = [
  {
    name: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 110,
    "new": false,
    route: {
      name: "index",
      path: "/"
    },
    screenshot: {
      light: "/images/screenshots/minimal/homepage-light.webp",
      dark: "/images/screenshots/minimal/homepage-dark.webp"
    }
  },
  {
    name: "\u0647\u06CC\u0631\u0648 \u0686\u067E",
    category: "\u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF",
    displayOrder: 0,
    "new": false,
    route: {
      name: "marketing-1",
      path: "/marketing-1"
    },
    screenshot: {
      light: "/images/screenshots/minimal/hero-left-light.webp",
      dark: "/images/screenshots/minimal/hero-left-dark.webp"
    }
  },
  {
    name: "\u0647\u06CC\u0631\u0648 \u0631\u0627\u0633\u062A",
    category: "\u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF",
    displayOrder: 10,
    "new": false,
    route: {
      name: "marketing-2",
      path: "/marketing-2"
    },
    screenshot: {
      light: "/images/screenshots/minimal/hero-right-light.webp",
      dark: "/images/screenshots/minimal/hero-right-dark.webp"
    }
  },
  {
    name: "\u0647\u06CC\u0631\u0648 \u0648\u0633\u0637 \u0686\u06CC\u0646",
    category: "\u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF",
    displayOrder: 20,
    "new": false,
    route: {
      name: "marketing-3",
      path: "/marketing-3"
    },
    screenshot: {
      light: "/images/screenshots/minimal/hero-centered-light.webp",
      dark: "/images/screenshots/minimal/hero-centered-dark.webp"
    }
  },
  {
    name: "\u067E\u06CC\u0627\u0645 \u0631\u0633\u0627\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 40,
    "new": false,
    route: {
      name: "messaging-v2",
      path: "/messaging-v2"
    },
    screenshot: {
      light: "/images/screenshots/minimal/messaging-v2-light.webp",
      dark: "/images/screenshots/minimal/messaging-v2-dark.webp"
    }
  },
  {
    name: "\u0648\u0636\u0639\u06CC\u062A",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 60,
    "new": false,
    route: {
      name: "status",
      path: "/status"
    },
    screenshot: {
      light: "/images/screenshots/minimal/status-light.webp",
      dark: "/images/screenshots/minimal/status-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0632\u0627\u0631\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1 (\u06AF\u0627\u0645 \u0646\u062E\u0633\u062A)",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 50,
    "new": false,
    route: {
      name: "wizard-v1",
      path: "/wizard-v1"
    },
    screenshot: {
      light: "/images/screenshots/minimal/wizard-v1-step-1--light.webp",
      dark: "/images/screenshots/minimal/wizard-v1-step-1--dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0632\u0627\u0631\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1 (\u06AF\u0627\u0645 \u062F\u0648\u0645)",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 51,
    "new": false,
    route: {
      name: "wizard-v1",
      path: "/wizard-v1",
      query: {
        step: 2
      }
    },
    screenshot: {
      light: "/images/screenshots/minimal/wizard-v1-step-2--light.webp",
      dark: "/images/screenshots/minimal/wizard-v1-step-2--dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0632\u0627\u0631\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1 (\u06AF\u0627\u0645 \u0633\u0648\u0645)",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 52,
    "new": false,
    route: {
      name: "wizard-v1",
      path: "/wizard-v1",
      query: {
        step: 3
      }
    },
    screenshot: {
      light: "/images/screenshots/minimal/wizard-v1-step-3--light.webp",
      dark: "/images/screenshots/minimal/wizard-v1-step-3--dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0632\u0627\u0631\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1 (\u06AF\u0627\u0645 \u0686\u0647\u0627\u0631\u0645)",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 53,
    "new": false,
    route: {
      name: "wizard-v1",
      path: "/wizard-v1",
      query: {
        step: 4
      }
    },
    screenshot: {
      light: "/images/screenshots/minimal/wizard-v1-step-4--light.webp",
      dark: "/images/screenshots/minimal/wizard-v1-step-4--dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0632\u0627\u0631\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1 (\u06AF\u0627\u0645 \u067E\u0646\u062C\u0645)",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 54,
    "new": false,
    route: {
      name: "wizard-v1",
      path: "/wizard-v1",
      query: {
        step: 5
      }
    },
    screenshot: {
      light: "/images/screenshots/minimal/wizard-v1-step-5--light.webp",
      dark: "/images/screenshots/minimal/wizard-v1-step-5--dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0632\u0627\u0631\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1 (\u06AF\u0627\u0645 \u0634\u0634\u0645)",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 55,
    "new": false,
    route: {
      name: "wizard-v1",
      path: "/wizard-v1",
      query: {
        step: 6
      }
    },
    screenshot: {
      light: "/images/screenshots/minimal/wizard-v1-step-6--light.webp",
      dark: "/images/screenshots/minimal/wizard-v1-step-6--dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u0632\u0627\u0631\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1 (\u06AF\u0627\u0645 \u0647\u0641\u062A\u0645)",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 56,
    "new": false,
    route: {
      name: "wizard-v1",
      path: "/wizard-v1",
      query: {
        step: 7
      }
    },
    screenshot: {
      light: "/images/screenshots/minimal/wizard-v1-step-7--light.webp",
      dark: "/images/screenshots/minimal/wizard-v1-step-7--dark.webp"
    }
  },
  {
    name: "\u0627\u06CC\u0646\u0628\u0627\u06A9\u0633",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 30,
    "new": false,
    route: {
      name: "inbox",
      path: "/inbox"
    },
    screenshot: {
      light: "/images/screenshots/minimal/inbox-light.webp",
      dark: "/images/screenshots/minimal/inbox-dark.webp"
    }
  },
  {
    name: "\u062E\u0637\u0627 \u06F1",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 70,
    "new": false,
    route: {
      name: "error-page-1",
      path: "/error/page-1"
    },
    screenshot: {
      light: "/images/screenshots/minimal/error-1-light.webp",
      dark: "/images/screenshots/minimal/error-1-dark.webp"
    }
  },
  {
    name: "\u062E\u0637\u0627 \u06F2",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 120,
    "new": false,
    route: {
      name: "error-page-2",
      path: "/error/page-2"
    },
    screenshot: {
      light: "/images/screenshots/minimal/error-2-light.webp",
      dark: "/images/screenshots/minimal/error-2-dark.webp"
    }
  },
  {
    name: "\u062E\u0637\u0627 \u06F3",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 80,
    "new": false,
    route: {
      name: "error-page-3",
      path: "/error/page-3"
    },
    screenshot: {
      light: "/images/screenshots/minimal/error-3-light.webp",
      dark: "/images/screenshots/minimal/error-3-dark.webp"
    }
  },
  {
    name: "\u062E\u0637\u0627 \u06F4",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 90,
    "new": false,
    route: {
      name: "error-page-4",
      path: "/error/page-4"
    },
    screenshot: {
      light: "/images/screenshots/minimal/error-4-light.webp",
      dark: "/images/screenshots/minimal/error-4-dark.webp"
    }
  },
  {
    name: "\u062E\u0637\u0627 \u06F5",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 100,
    "new": false,
    route: {
      name: "error-page-5",
      path: "/error/page-5"
    },
    screenshot: {
      light: "/images/screenshots/minimal/error-5-light.webp",
      dark: "/images/screenshots/minimal/error-5-dark.webp"
    }
  }
];
var templates = [
  {
    name: "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0645\u0639\u0645\u0648\u0644\u06CC",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 0,
    "new": false,
    route: {
      name: "sidebar-blank-page-1",
      path: "/sidebar-blank-page-1"
    },
    screenshot: {
      light: "/images/screenshots/templates/regular-sidebar-light.webp",
      dark: "/images/screenshots/templates/regular-sidebar-dark.webp"
    }
  },
  {
    name: "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0627\u0646\u062D\u0646\u0627\u062F\u0627\u0631",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 10,
    "new": false,
    route: {
      name: "sidebar-blank-page-2",
      path: "/sidebar-blank-page-2"
    },
    screenshot: {
      light: "/images/screenshots/templates/curved-sidebar-light.webp",
      dark: "/images/screenshots/templates/curved-sidebar-dark.webp"
    }
  },
  {
    name: "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0631\u0646\u06AF\u06CC\u0646",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 20,
    "new": false,
    route: {
      name: "sidebar-blank-page-3",
      path: "/sidebar-blank-page-3"
    },
    screenshot: {
      light: "/images/screenshots/templates/colored-sidebar-light.webp",
      dark: "/images/screenshots/templates/colored-sidebar-dark.webp"
    }
  },
  {
    name: "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0631\u0646\u06AF\u06CC\u0646 \u0627\u0646\u062D\u0646\u0627\u062F\u0627\u0631",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 30,
    "new": false,
    route: {
      name: "sidebar-blank-page-4",
      path: "/sidebar-blank-page-4"
    },
    screenshot: {
      light: "/images/screenshots/templates/curved-colored-sidebar-light.webp",
      dark: "/images/screenshots/templates/curved-colored-sidebar-dark.webp"
    }
  },
  {
    name: "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0628\u0627 \u0628\u0631\u0686\u0633\u0628\u200C\u0647\u0627",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 40,
    "new": false,
    route: {
      name: "sidebar-blank-page-5",
      path: "/sidebar-blank-page-5"
    },
    screenshot: {
      light: "/images/screenshots/templates/sidebar-labels-light.webp",
      dark: "/images/screenshots/templates/sidebar-labels-dark.webp"
    }
  },
  {
    name: "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0628\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u0648\u0636\u0639\u06CC\u062A",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 50,
    "new": false,
    route: {
      name: "sidebar-blank-page-6",
      path: "/sidebar-blank-page-6"
    },
    screenshot: {
      light: "/images/screenshots/templates/hover-labels-light.webp",
      dark: "/images/screenshots/templates/hover-labels-dark.webp"
    }
  },
  {
    name: "\u0633\u0627\u06CC\u062F\u0628\u0631 \u0634\u0646\u0627\u0648\u0631",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 60,
    "new": false,
    route: {
      name: "sidebar-blank-page-7",
      path: "/sidebar-blank-page-7"
    },
    screenshot: {
      light: "/images/screenshots/templates/floating-sidebar-light.webp",
      dark: "/images/screenshots/templates/floating-sidebar-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0648\u06CC \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 70,
    "new": false,
    route: {
      name: "navbar-blank-page-1",
      path: "/navbar-blank-page-1"
    },
    screenshot: {
      light: "/images/screenshots/templates/standard-navbar-light.webp",
      dark: "/images/screenshots/templates/standard-navbar-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0648\u06CC \u0634\u0646\u0627\u0648\u0631",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 80,
    "new": false,
    route: {
      name: "navbar-blank-page-2",
      path: "/navbar-blank-page-2"
    },
    screenshot: {
      light: "/images/screenshots/templates/fading-navbar-light.webp",
      dark: "/images/screenshots/templates/fading-navbar-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0648\u06CC \u0631\u0646\u06AF\u06CC\u0646",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 90,
    "new": false,
    route: {
      name: "navbar-blank-page-3",
      path: "/navbar-blank-page-3"
    },
    screenshot: {
      light: "/images/screenshots/templates/colored-navbar-light.webp",
      dark: "/images/screenshots/templates/colored-navbar-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0648\u06CC \u067E\u0627\u0626\u06CC\u0646 \u0631\u06CC\u0632",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 100,
    "new": false,
    route: {
      name: "navbar-blank-page-4",
      path: "/navbar-blank-page-4"
    },
    screenshot: {
      light: "/images/screenshots/templates/dropdown-navbar-light.webp",
      dark: "/images/screenshots/templates/dropdown-navbar-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0648\u06CC \u067E\u0627\u0626\u06CC\u0646 \u0631\u06CC\u0632 \u0631\u0646\u06AF\u06CC\u0646",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 110,
    "new": false,
    route: {
      name: "navbar-blank-page-5",
      path: "/navbar-blank-page-5"
    },
    screenshot: {
      light: "/images/screenshots/templates/colored-dropdown-navbar-light.webp",
      dark: "/images/screenshots/templates/colored-dropdown-navbar-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0648\u06CC \u062E\u0644\u0648\u062A",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 120,
    "new": false,
    route: {
      name: "navbar-blank-page-6",
      path: "/navbar-blank-page-6"
    },
    screenshot: {
      light: "/images/screenshots/templates/clean-navbar-light.webp",
      dark: "/images/screenshots/templates/clean-navbar-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0648\u06CC \u062E\u0644\u0648\u062A \u0648\u0633\u0637 \u0686\u06CC\u0646",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 130,
    "new": false,
    route: {
      name: "navbar-blank-page-7",
      path: "/navbar-blank-page-7"
    },
    screenshot: {
      light: "/images/screenshots/templates/clean-centered-navbar-light.webp",
      dark: "/images/screenshots/templates/clean-centered-navbar-dark.webp"
    }
  },
  {
    name: "\u062E\u0644\u0648\u062A \u0628\u062F\u0648\u0646 \u067E\u0633\u0632\u0645\u06CC\u0646\u0647",
    category: "\u0635\u0641\u062D\u0627\u062A",
    displayOrder: 140,
    "new": false,
    route: {
      name: "navbar-blank-page-8",
      path: "/navbar-blank-page-8"
    },
    screenshot: {
      light: "/images/screenshots/templates/clean-transparent-light.webp",
      dark: "/images/screenshots/templates/clean-transparent-dark.webp"
    }
  }
];
var navbar = [
  {
    name: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06F1",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 211,
    "new": true,
    route: {
      name: "navbar-maps-1",
      path: "/navbar/maps-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/maps-v1-light.webp",
      dark: "/images/screenshots/navbar/maps-v1-dark.webp"
    }
  },
  {
    name: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u06F2",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 212,
    "new": true,
    route: {
      name: "navbar-maps-2",
      path: "/navbar/maps-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/maps-v2-light.webp",
      dark: "/images/screenshots/navbar/maps-v2-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0627\u06A9\u0634\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 590,
    "new": false,
    route: {
      name: "navbar-layouts-action-page-1",
      path: "/navbar/layouts/action-page-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/action-page-v1-light.webp",
      dark: "/images/screenshots/navbar/action-page-v1-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0627\u06A9\u0634\u0646 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 600,
    "new": false,
    route: {
      name: "navbar-layouts-action-page-2",
      path: "/navbar/layouts/action-page-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/action-page-v2-light.webp",
      dark: "/images/screenshots/navbar/action-page-v2-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 360,
    "new": false,
    route: {
      name: "navbar-layouts-form-layouts-1",
      path: "/navbar/layouts/form-layouts-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/form-v1-light.webp",
      dark: "/images/screenshots/navbar/form-v1-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 370,
    "new": false,
    route: {
      name: "navbar-layouts-form-layouts-2",
      path: "/navbar/layouts/form-layouts-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/form-v2-light.webp",
      dark: "/images/screenshots/navbar/form-v2-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 380,
    "new": false,
    route: {
      name: "navbar-layouts-form-layouts-3",
      path: "/navbar/layouts/form-layouts-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/form-v3-light.webp",
      dark: "/images/screenshots/navbar/form-v3-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 390,
    "new": false,
    route: {
      name: "navbar-layouts-form-layouts-4",
      path: "/navbar/layouts/form-layouts-4"
    },
    screenshot: {
      light: "/images/screenshots/navbar/form-v4-light.webp",
      dark: "/images/screenshots/navbar/form-v4-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0645 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F5",
    category: "\u0641\u0631\u0645\u200C\u0647\u0627",
    displayOrder: 395,
    "new": false,
    route: {
      name: "navbar-layouts-form-layouts-5",
      path: "/navbar/layouts/form-layouts-5"
    },
    screenshot: {
      light: "/images/screenshots/navbar/form-v5-light.webp",
      dark: "/images/screenshots/navbar/form-v5-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 400,
    "new": false,
    route: {
      name: "navbar-layouts-grid-cards-1",
      path: "/navbar/layouts/grid-cards-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-card-v1-light.webp",
      dark: "/images/screenshots/navbar/grid-card-v1-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 410,
    "new": false,
    route: {
      name: "navbar-layouts-grid-cards-2",
      path: "/navbar/layouts/grid-cards-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-card-v2-light.webp",
      dark: "/images/screenshots/navbar/grid-card-v2-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 420,
    "new": false,
    route: {
      name: "navbar-layouts-grid-cards-3",
      path: "/navbar/layouts/grid-cards-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-card-v3-light.webp",
      dark: "/images/screenshots/navbar/grid-card-v3-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 430,
    "new": false,
    route: {
      name: "navbar-layouts-grid-cards-4",
      path: "/navbar/layouts/grid-cards-4"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-card-v4-light.webp",
      dark: "/images/screenshots/navbar/grid-card-v4-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 440,
    "new": false,
    route: {
      name: "navbar-layouts-grid-tiles-1",
      path: "/navbar/layouts/grid-tiles-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-tiles-v1-light.webp",
      dark: "/images/screenshots/navbar/grid-tiles-v1-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 450,
    "new": false,
    route: {
      name: "navbar-layouts-grid-tiles-2",
      path: "/navbar/layouts/grid-tiles-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-tiles-v2-light.webp",
      dark: "/images/screenshots/navbar/grid-tiles-v2-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 460,
    "new": false,
    route: {
      name: "navbar-layouts-grid-tiles-3",
      path: "/navbar/layouts/grid-tiles-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-tiles-v3-light.webp",
      dark: "/images/screenshots/navbar/grid-tiles-v3-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 470,
    "new": false,
    route: {
      name: "navbar-layouts-grid-users-1",
      path: "/navbar/layouts/grid-users-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-users-v1-light.webp",
      dark: "/images/screenshots/navbar/grid-users-v1-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 480,
    "new": false,
    route: {
      name: "navbar-layouts-grid-users-2",
      path: "/navbar/layouts/grid-users-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-users-v2-light.webp",
      dark: "/images/screenshots/navbar/grid-users-v2-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 490,
    "new": false,
    route: {
      name: "navbar-layouts-grid-users-3",
      path: "/navbar/layouts/grid-users-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-users-v3-light.webp",
      dark: "/images/screenshots/navbar/grid-users-v3-dark.webp"
    }
  },
  {
    name: "\u06A9\u0627\u0631\u0628\u0631\u0647\u0627\u06CC \u0634\u0628\u06A9\u0647\u200C\u0627\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 500,
    "new": false,
    route: {
      name: "navbar-layouts-grid-users-4",
      path: "/navbar/layouts/grid-users-4"
    },
    screenshot: {
      light: "/images/screenshots/navbar/grid-users-v4-light.webp",
      dark: "/images/screenshots/navbar/grid-users-v4-dark.webp"
    }
  },
  {
    name: "\u0637\u0631\u062D \u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 320,
    "new": false,
    route: {
      name: "navbar-layouts-onboarding-welcome",
      path: "/navbar/layouts/onboarding-welcome"
    },
    screenshot: {
      light: "/images/screenshots/navbar/onboarding-standard-light.webp",
      dark: "/images/screenshots/navbar/onboarding-standard-dark.webp"
    }
  },
  {
    name: "\u062A\u062E\u062A\u0647 \u06A9\u0627\u0646\u0628\u0627\u0646",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 650,
    "new": false,
    route: {
      name: "navbar-layouts-kanban-board",
      path: "/navbar/layouts/kanban-board"
    },
    screenshot: {
      light: "/images/screenshots/navbar/kanban-board-light.webp",
      dark: "/images/screenshots/navbar/kanban-board-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 320,
    "new": false,
    route: {
      name: "navbar-layouts-list-datatable-1",
      path: "/navbar/layouts/list-datatable-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-datatable-v1-light.webp",
      dark: "/images/screenshots/navbar/list-datatable-v1-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 330,
    "new": false,
    route: {
      name: "navbar-layouts-list-datatable-2",
      path: "/navbar/layouts/list-datatable-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-datatable-v2-light.webp",
      dark: "/images/screenshots/navbar/list-datatable-v2-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 340,
    "new": false,
    route: {
      name: "navbar-layouts-list-datatable-3",
      path: "/navbar/layouts/list-datatable-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-datatable-v3-light.webp",
      dark: "/images/screenshots/navbar/list-datatable-v3-dark.webp"
    }
  },
  {
    name: "\u062C\u062F\u0648\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 350,
    "new": false,
    route: {
      name: "navbar-layouts-list-datatable-4",
      path: "/navbar/layouts/list-datatable-4"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-datatable-v4-light.webp",
      dark: "/images/screenshots/navbar/list-datatable-v4-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 290,
    "new": false,
    route: {
      name: "navbar-layouts-list-flex-1",
      path: "/navbar/layouts/list-flex-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-flex-v1-light.webp",
      dark: "/images/screenshots/navbar/list-flex-v1-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 300,
    "new": false,
    route: {
      name: "navbar-layouts-list-flex-2",
      path: "/navbar/layouts/list-flex-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-flex-v2-light.webp",
      dark: "/images/screenshots/navbar/list-flex-v2-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 310,
    "new": false,
    route: {
      name: "navbar-layouts-list-flex-3",
      path: "/navbar/layouts/list-flex-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-flex-v3-light.webp",
      dark: "/images/screenshots/navbar/list-flex-v3-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC (\u0646\u0645\u0627\u06CC\u0634 \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1)",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 250,
    "new": false,
    route: {
      name: "navbar-layouts",
      path: "/navbar/layouts/"
    },
    screenshot: {
      light: "/images/screenshots/navbar/homepage-list-view-v1--light.webp",
      dark: "/images/screenshots/navbar/homepage-list-view-v1--dark.webp"
    }
  },
  {
    name: "\u0646\u0645\u0627\u06CC\u0634 \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 260,
    "new": false,
    route: {
      name: "navbar-layouts-list-view-2",
      path: "/navbar/layouts/list-view-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-view-v2-light.webp",
      dark: "/images/screenshots/navbar/list-view-v2-dark.webp"
    }
  },
  {
    name: "\u0646\u0645\u0627\u06CC\u0634 \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 270,
    "new": false,
    route: {
      name: "navbar-layouts-list-view-3",
      path: "/navbar/layouts/list-view-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-view-v3-light.webp",
      dark: "/images/screenshots/navbar/list-view-v3-dark.webp"
    }
  },
  {
    name: "\u0646\u0645\u0627\u06CC\u0634 \u0644\u06CC\u0633\u062A \u0648\u0627\u0631 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 280,
    "new": false,
    route: {
      name: "navbar-layouts-list-view-4",
      path: "/navbar/layouts/list-view-4"
    },
    screenshot: {
      light: "/images/screenshots/navbar/list-view-v4-light.webp",
      dark: "/images/screenshots/navbar/list-view-v4-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 700,
    "new": false,
    route: {
      name: "navbar-layouts-onboarding-page-1",
      path: "/navbar/layouts/onboarding-page-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/onboarding-page-v1-light.webp",
      dark: "/images/screenshots/navbar/onboarding-page-v1-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 710,
    "new": false,
    route: {
      name: "navbar-layouts-onboarding-page-2",
      path: "/navbar/layouts/onboarding-page-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/onboarding-page-v2-light.webp",
      dark: "/images/screenshots/navbar/onboarding-page-v2-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 720,
    "new": false,
    route: {
      name: "navbar-layouts-onboarding-page-3",
      path: "/navbar/layouts/onboarding-page-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/onboarding-page-v3-light.webp",
      dark: "/images/screenshots/navbar/onboarding-page-v3-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F4",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 730,
    "new": false,
    route: {
      name: "navbar-layouts-onboarding-page-4",
      path: "/navbar/layouts/onboarding-page-4"
    },
    screenshot: {
      light: "/images/screenshots/navbar/onboarding-page-v4-light.webp",
      dark: "/images/screenshots/navbar/onboarding-page-v4-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647\u200C\u06CC \u0686\u06CC\u062F\u0645\u0627\u0646 \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u06F5",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 740,
    "new": false,
    route: {
      name: "navbar-layouts-onboarding-page-5",
      path: "/navbar/layouts/onboarding-page-5"
    },
    screenshot: {
      light: "/images/screenshots/navbar/onboarding-page-v5-light.webp",
      dark: "/images/screenshots/navbar/onboarding-page-v5-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 520,
    "new": false,
    route: {
      name: "navbar-layouts-profile-edit",
      path: "/navbar/layouts/profile-edit"
    },
    screenshot: {
      light: "/images/screenshots/navbar/profile-edit-light.webp",
      dark: "/images/screenshots/navbar/profile-edit-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u062C\u0631\u0628\u06CC\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 530,
    "new": false,
    route: {
      name: "navbar-layouts-profile-edit-experience",
      path: "/navbar/layouts/profile-edit/experience"
    },
    screenshot: {
      light: "/images/screenshots/navbar/profile-edit-experience-light.webp",
      dark: "/images/screenshots/navbar/profile-edit-experience-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 540,
    "new": false,
    route: {
      name: "navbar-layouts-profile-edit-skills",
      path: "/navbar/layouts/profile-edit/skills"
    },
    screenshot: {
      light: "/images/screenshots/navbar/profile-edit-skills-light.webp",
      dark: "/images/screenshots/navbar/profile-edit-skills-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 550,
    "new": false,
    route: {
      name: "navbar-layouts-profile-edit-settings",
      path: "/navbar/layouts/profile-edit/settings"
    },
    screenshot: {
      light: "/images/screenshots/navbar/profile-edit-settings-light.webp",
      dark: "/images/screenshots/navbar/profile-edit-settings-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0627\u0639\u0644\u0627\u0646\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 270,
    "new": false,
    route: {
      name: "navbar-layouts-profile-notifications",
      path: "/navbar/layouts/profile-notifications"
    },
    screenshot: {
      light: "/images/screenshots/navbar/profile-notifications-light.webp",
      dark: "/images/screenshots/navbar/profile-notifications-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 280,
    "new": false,
    route: {
      name: "navbar-layouts-profile-settings",
      path: "/navbar/layouts/profile-settings"
    },
    screenshot: {
      light: "/images/screenshots/navbar/profile-settings-light.webp",
      dark: "/images/screenshots/navbar/profile-settings-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0645\u0634\u0627\u0647\u062F\u0647",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 510,
    "new": false,
    route: {
      name: "navbar-layouts-profile-view",
      path: "/navbar/layouts/profile-view"
    },
    screenshot: {
      light: "/images/screenshots/navbar/profile-view-light.webp",
      dark: "/images/screenshots/navbar/profile-view-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u062C\u0632\u0626\u06CC\u0627\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 640,
    "new": false,
    route: {
      name: "navbar-layouts-projects-details",
      path: "/navbar/layouts/projects-details"
    },
    screenshot: {
      light: "/images/screenshots/navbar/projects-details-light.webp",
      dark: "/images/screenshots/navbar/projects-details-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0644\u06CC\u0633\u062A \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 600,
    "new": false,
    route: {
      name: "navbar-layouts-projects-projects-1",
      path: "/navbar/layouts/projects-projects-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/projects-list-v1-light.webp",
      dark: "/images/screenshots/navbar/projects-list-v1-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0644\u06CC\u0633\u062A \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 610,
    "new": false,
    route: {
      name: "navbar-layouts-projects-projects-2",
      path: "/navbar/layouts/projects-projects-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/projects-list-v2-light.webp",
      dark: "/images/screenshots/navbar/projects-list-v2-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0644\u06CC\u0633\u062A \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 620,
    "new": false,
    route: {
      name: "navbar-layouts-projects-projects-3",
      path: "/navbar/layouts/projects-projects-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/projects-list-v3-light.webp",
      dark: "/images/screenshots/navbar/projects-list-v3-dark.webp"
    }
  },
  {
    name: "SaaS \u067E\u0631\u062F\u0627\u062E\u062A",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 580,
    "new": false,
    route: {
      name: "navbar-layouts-saas-billing",
      path: "/navbar/layouts/saas-billing"
    },
    screenshot: {
      light: "/images/screenshots/navbar/saas-billing-light.webp",
      dark: "/images/screenshots/navbar/saas-billing-dark.webp"
    }
  },
  {
    name: "\u062C\u0633\u062A\u062C\u0648 \u062E\u0627\u0644\u06CC",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 570,
    "new": false,
    route: {
      name: "navbar-layouts-search-empty",
      path: "/navbar/layouts/search-empty"
    },
    screenshot: {
      light: "/images/screenshots/navbar/search-empty-light.webp",
      dark: "/images/screenshots/navbar/search-empty-dark.webp"
    }
  },
  {
    name: "\u0646\u062A\u0627\u06CC\u062C \u062C\u0633\u062A\u062C\u0648",
    category: "\u0637\u0631\u062D\u200C\u0647\u0627",
    displayOrder: 560,
    "new": false,
    route: {
      name: "navbar-layouts-search-results",
      path: "/navbar/layouts/search-results"
    },
    screenshot: {
      light: "/images/screenshots/navbar/search-results-light.webp",
      dark: "/images/screenshots/navbar/search-results-dark.webp"
    }
  },
  {
    name: "\u062A\u0627\u0626\u06CC\u062F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 660,
    "new": false,
    route: {
      name: "navbar-layouts-utility-account-confirm",
      path: "/navbar/layouts/utility-account-confirm"
    },
    screenshot: {
      light: "/images/screenshots/navbar/account-confirm-light.webp",
      dark: "/images/screenshots/navbar/account-confirm-dark.webp"
    }
  },
  {
    name: "\u0641\u0627\u06A9\u062A\u0648\u0631",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 680,
    "new": false,
    route: {
      name: "navbar-layouts-utility-invoice",
      path: "/navbar/layouts/utility-invoice"
    },
    screenshot: {
      light: "/images/screenshots/navbar/invoice-light.webp",
      dark: "/images/screenshots/navbar/invoice-dark.webp"
    }
  },
  {
    name: "\u0627\u0631\u062A\u0642\u0627",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 670,
    "new": false,
    route: {
      name: "navbar-layouts-utility-promotion",
      path: "/navbar/layouts/utility-promotion"
    },
    screenshot: {
      light: "/images/screenshots/navbar/promotion-light.webp",
      dark: "/images/screenshots/navbar/promotion-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u0644\u06CC\u0633\u062A",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 750,
    "new": true,
    route: {
      name: "navbar-layouts-placeload-1",
      path: "/navbar/layouts/placeload-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/placeload-list-light.webp",
      dark: "/images/screenshots/navbar/placeload-list-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u062C\u062F\u0648\u0644",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 760,
    "new": true,
    route: {
      name: "navbar-layouts-placeload-2",
      path: "/navbar/layouts/placeload-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/placeload-table-light.webp",
      dark: "/images/screenshots/navbar/placeload-table-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u0634\u0628\u06A9\u0647",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 770,
    "new": true,
    route: {
      name: "navbar-layouts-placeload-3",
      path: "/navbar/layouts/placeload-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/placeload-grid-light.webp",
      dark: "/images/screenshots/navbar/placeload-grid-dark.webp"
    }
  },
  {
    name: "\u0644\u0648\u062F\u0631 \u062A\u0635\u0648\u06CC\u0631\u06CC \u06A9\u0627\u0634\u06CC\u200C\u0647\u0627",
    category: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
    displayOrder: 780,
    "new": true,
    route: {
      name: "navbar-layouts-placeload-4",
      path: "/navbar/layouts/placeload-4"
    },
    screenshot: {
      light: "/images/screenshots/navbar/placeload-tiles-light.webp",
      dark: "/images/screenshots/navbar/placeload-tiles-dark.webp"
    }
  },
  {
    name: "\u0627\u0631\u0633\u0627\u0644 \u063A\u0630\u0627",
    category: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
    displayOrder: 200,
    "new": false,
    route: {
      name: "navbar-dashboards-food-delivery",
      path: "/navbar/dashboards/food-delivery"
    },
    screenshot: {
      light: "/images/screenshots/navbar/food-delivery-light.webp",
      dark: "/images/screenshots/navbar/food-delivery-dark.webp"
    }
  },
  {
    name: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 70,
    "new": false,
    route: {
      name: "navbar-dashboards-banking-1",
      path: "/navbar/dashboards/banking-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/banking-v1-light.webp",
      dark: "/images/screenshots/navbar/banking-v1-dark.webp"
    }
  },
  {
    name: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 80,
    "new": false,
    route: {
      name: "navbar-dashboards-banking-2",
      path: "/navbar/dashboards/banking-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/banking-v2-light.webp",
      dark: "/images/screenshots/navbar/banking-v2-dark.webp"
    }
  },
  {
    name: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 90,
    "new": false,
    route: {
      name: "navbar-dashboards-banking-3",
      path: "/navbar/dashboards/banking-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/banking-v3-light.webp",
      dark: "/images/screenshots/navbar/banking-v3-dark.webp"
    }
  },
  {
    name: "\u067E\u0631\u0648\u0627\u0632\u200C\u0647\u0627",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 100,
    "new": false,
    route: {
      name: "navbar-dashboards-flights",
      path: "/navbar/dashboards/flights"
    },
    screenshot: {
      light: "/images/screenshots/navbar/flights-light.webp",
      dark: "/images/screenshots/navbar/flights-dark.webp"
    }
  },
  {
    name: "\u0634\u0631\u06A9\u062A",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 110,
    "new": false,
    route: {
      name: "navbar-dashboards-company",
      path: "/navbar/dashboards/company"
    },
    screenshot: {
      light: "/images/screenshots/navbar/company-light.webp",
      dark: "/images/screenshots/navbar/company-dark.webp"
    }
  },
  {
    name: "\u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 120,
    "new": false,
    route: {
      name: "navbar-dashboards-human-ressources",
      path: "/navbar/dashboards/human-ressources"
    },
    screenshot: {
      light: "/images/screenshots/navbar/human-ressources-light.webp",
      dark: "/images/screenshots/navbar/human-ressources-dark.webp"
    }
  },
  {
    name: "\u062F\u0627\u0634\u0628\u0631\u062F \u062F\u0648\u0631\u0647",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 130,
    "new": false,
    route: {
      name: "navbar-dashboards-course",
      path: "/navbar/dashboards/course"
    },
    screenshot: {
      light: "/images/screenshots/navbar/course-dashboard-light.webp",
      dark: "/images/screenshots/navbar/course-dashboard-dark.webp"
    }
  },
  {
    name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645",
    category: "DASHBOARD",
    displayOrder: 131,
    "new": false,
    route: {
      name: "navbar-dashboards-jobs",
      path: "/navbar/dashboards/jobs"
    },
    screenshot: {
      light: "/images/screenshots/navbar/jobs-dashboard-light.webp",
      dark: "/images/screenshots/navbar/jobs-dashboard-dark.webp"
    }
  },
  {
    name: "\u0686\u0627\u0631\u062A\u200C\u0647\u0627\u06CC Apex",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 220,
    "new": false,
    route: {
      name: "navbar-dashboards-charts-apex",
      path: "/navbar/dashboards/charts-apex"
    },
    screenshot: {
      light: "/images/screenshots/navbar/charts-apex-light.webp",
      dark: "/images/screenshots/navbar/charts-apex-dark.webp"
    }
  },
  {
    name: "\u0686\u0627\u0631\u062A\u200C\u0647\u0627\u06CC BillboardsJS",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 230,
    "new": false,
    route: {
      name: "navbar-dashboards-charts-billboardsjs",
      path: "/navbar/dashboards/charts-billboardsjs"
    },
    screenshot: {
      light: "/images/screenshots/navbar/charts-billboardsjs-light.webp",
      dark: "/images/screenshots/navbar/charts-billboardsjs-dark.webp"
    }
  },
  {
    name: "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 190,
    "new": false,
    route: {
      name: "navbar-dashboards-ecommerce-1",
      path: "/navbar/dashboards/ecommerce-1"
    },
    screenshot: {
      light: "/images/screenshots/navbar/ecommerce-v1-light.webp",
      dark: "/images/screenshots/navbar/ecommerce-v1-dark.webp"
    }
  },
  {
    name: "\u062A\u062C\u0632\u06CC\u0647 \u0648 \u062A\u062D\u0644\u06CC\u0644",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 40,
    "new": false,
    route: {
      name: "navbar-dashboards-analytics",
      path: "/navbar/dashboards/analytics"
    },
    screenshot: {
      light: "/images/screenshots/navbar/analytics-light.webp",
      dark: "/images/screenshots/navbar/analytics-dark.webp"
    }
  },
  {
    name: "\u0633\u0647\u0627\u0645",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 50,
    "new": false,
    route: {
      name: "navbar-dashboards-stocks",
      path: "/navbar/dashboards/stocks"
    },
    screenshot: {
      light: "/images/screenshots/navbar/stocks-light.webp",
      dark: "/images/screenshots/navbar/stocks-dark.webp"
    }
  },
  {
    name: "\u062D\u0631\u0627\u062C\u06CC",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 60,
    "new": false,
    route: {
      name: "navbar-dashboards-sales",
      path: "/navbar/dashboards/sales"
    },
    screenshot: {
      light: "/images/screenshots/navbar/sales-light.webp",
      dark: "/images/screenshots/navbar/sales-dark.webp"
    }
  },
  {
    name: "\u0627\u06CC\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 140,
    "new": false,
    route: {
      name: "navbar-dashboards-influencer",
      path: "/navbar/dashboards/influencer"
    },
    screenshot: {
      light: "/images/screenshots/navbar/influencer-light.webp",
      dark: "/images/screenshots/navbar/influencer-dark.webp"
    }
  },
  {
    name: "\u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 150,
    "new": false,
    route: {
      name: "navbar-dashboards-hobbies",
      path: "/navbar/dashboards/hobbies"
    },
    screenshot: {
      light: "/images/screenshots/navbar/hobbies-light.webp",
      dark: "/images/screenshots/navbar/hobbies-dark.webp"
    }
  },
  {
    name: "\u0633\u0644\u0627\u0645\u062A",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 160,
    "new": false,
    route: {
      name: "navbar-dashboards-health",
      path: "/navbar/dashboards/health"
    },
    screenshot: {
      light: "/images/screenshots/navbar/health-light.webp",
      dark: "/images/screenshots/navbar/health-dark.webp"
    }
  },
  {
    name: "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 170,
    "new": false,
    route: {
      name: "navbar-dashboards-writer",
      path: "/navbar/dashboards/writer"
    },
    screenshot: {
      light: "/images/screenshots/navbar/writer-light.webp",
      dark: "/images/screenshots/navbar/writer-dark.webp"
    }
  },
  {
    name: "\u0648\u06CC\u062F\u0626\u0648",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 180,
    "new": false,
    route: {
      name: "navbar-dashboards-video",
      path: "/navbar/dashboards/video"
    },
    screenshot: {
      light: "/images/screenshots/navbar/video-light.webp",
      dark: "/images/screenshots/navbar/video-dark.webp"
    }
  },
  {
    name: "Soccer league",
    category: "DASHBOARD",
    displayOrder: 181,
    "new": true,
    route: {
      name: "navbar-dashboards-soccer",
      path: "/navbar/dashboards/soccer"
    },
    screenshot: {
      light: "/images/screenshots/navbar/soccer-league-light.webp",
      dark: "/images/screenshots/navbar/soccer-league-dark.webp"
    }
  },
  {
    name: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC (\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F1)",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 0,
    "new": false,
    route: {
      name: "navbar-dashboards",
      path: "/navbar/dashboards/"
    },
    screenshot: {
      light: "/images/screenshots/navbar/homepage-personal-v1--light.webp",
      dark: "/images/screenshots/navbar/homepage-personal-v1--dark.webp"
    }
  },
  {
    name: "\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 10,
    "new": false,
    route: {
      name: "navbar-dashboards-personal-2",
      path: "/navbar/dashboards/personal-2"
    },
    screenshot: {
      light: "/images/screenshots/navbar/personal-v2-light.webp",
      dark: "/images/screenshots/navbar/personal-v2-dark.webp"
    }
  },
  {
    name: "\u0634\u062E\u0635\u06CC \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 20,
    "new": false,
    route: {
      name: "navbar-dashboards-personal-3",
      path: "/navbar/dashboards/personal-3"
    },
    screenshot: {
      light: "/images/screenshots/navbar/personal-v3-light.webp",
      dark: "/images/screenshots/navbar/personal-v3-dark.webp"
    }
  },
  {
    name: "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u062E\u0644\u0627\u0642\u0627\u0646\u0647",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 250,
    "new": false,
    route: {
      name: "navbar-dashboards-widgets-sample-creative",
      path: "/navbar/dashboards/widgets-sample-creative"
    },
    screenshot: {
      light: "/images/screenshots/navbar/widgets-creative-light.webp",
      dark: "/images/screenshots/navbar/widgets-creative-dark.webp"
    }
  },
  {
    name: "\u0644\u06CC\u0633\u062A \u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 260,
    "new": false,
    route: {
      name: "navbar-dashboards-widgets-sample-list",
      path: "/navbar/dashboards/widgets-sample-list"
    },
    screenshot: {
      light: "/images/screenshots/navbar/widgets-list-light.webp",
      dark: "/images/screenshots/navbar/widgets-list-dark.webp"
    }
  },
  {
    name: "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u0622\u0645\u0627\u0631",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 270,
    "new": false,
    route: {
      name: "navbar-dashboards-widgets-sample-stats",
      path: "/navbar/dashboards/widgets-sample-stats"
    },
    screenshot: {
      light: "/images/screenshots/navbar/widgets-stats-light.webp",
      dark: "/images/screenshots/navbar/widgets-stats-dark.webp"
    }
  },
  {
    name: "\u0627\u0628\u0632\u0627\u0631\u06A9\u200C\u0647\u0627\u06CC \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC",
    category: "\u062F\u0627\u0634\u0628\u0631\u062F",
    displayOrder: 240,
    "new": false,
    route: {
      name: "navbar-dashboards-widgets-sample-ui",
      path: "/navbar/dashboards/widgets-sample-ui"
    },
    screenshot: {
      light: "/images/screenshots/navbar/widgets-ui-light.webp",
      dark: "/images/screenshots/navbar/widgets-ui-dark.webp"
    }
  }
];
var LandingDemos_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n2) => (pushScopeId("data-v-8d12fd98"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$4 = { class: "vuero-demos" };
const _hoisted_2$4 = { class: "demo-search-section" };
const _hoisted_3$4 = { key: 0 };
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0$1,
  alt: ""
}, null, -1));
const _hoisted_5$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1$1,
  alt: ""
}, null, -1));
const _hoisted_6$3 = /* @__PURE__ */ createTextVNode(" Fill a request feature on github ");
const _hoisted_7$3 = {
  key: 1,
  class: "demo-section"
};
const _hoisted_8$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "demo-section-title" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image-block-l",
    src: _imports_2$2,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image-block-l",
    src: _imports_3$2,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "title-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u0637\u0631\u062D \u0633\u0627\u06CC\u062F\u0628\u0631\u062F\u0627\u0631"),
    /* @__PURE__ */ createBaseVNode("p", null, "\u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u06CC\u06A9 \u0645\u0646\u0648\u06CC \u0639\u0645\u0648\u062F\u06CC \u062F\u0631 \u0633\u0627\u06CC\u062F\u0628\u0631")
  ])
], -1));
const _hoisted_9$3 = { class: "columns is-multiline" };
const _hoisted_10$3 = { class: "vuero-demo-wrapper loaded" };
const _hoisted_11$2 = {
  key: 0,
  class: "new-tag"
};
const _hoisted_12$2 = ["src"];
const _hoisted_13$2 = ["src"];
const _hoisted_14$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "circle-overlay" }, null, -1));
const _hoisted_15$2 = { class: "demo-info has-text-centered" };
const _hoisted_16$2 = { class: "wrapper" };
const _hoisted_17$2 = { class: "demo-title" };
const _hoisted_18$2 = { class: "demo-link" };
const _hoisted_19$2 = /* @__PURE__ */ createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u062F\u0645\u0648 ");
const _hoisted_20$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-left"
}, null, -1));
const _hoisted_21$1 = {
  key: 2,
  class: "demo-section"
};
const _hoisted_22$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "demo-section-title" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image-block-l",
    src: _imports_4$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image-block-l",
    src: _imports_5$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "title-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u0637\u0631\u062D \u0645\u0646\u0648\u062F\u0627\u0631"),
    /* @__PURE__ */ createBaseVNode("p", null, "\u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u06CC\u06A9 \u0645\u0646\u0648\u06CC \u0627\u0641\u0642\u06CC \u062F\u0631 \u0628\u0627\u0644\u0627\u06CC \u0635\u0641\u062D\u0647")
  ])
], -1));
const _hoisted_23$1 = { class: "columns is-multiline" };
const _hoisted_24$1 = { class: "vuero-demo-wrapper loaded" };
const _hoisted_25$1 = {
  key: 0,
  class: "new-tag"
};
const _hoisted_26$1 = ["src"];
const _hoisted_27$1 = ["src"];
const _hoisted_28$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "circle-overlay" }, null, -1));
const _hoisted_29$1 = { class: "demo-info has-text-centered" };
const _hoisted_30$1 = { class: "wrapper" };
const _hoisted_31$1 = { class: "demo-title" };
const _hoisted_32$1 = { class: "demo-link" };
const _hoisted_33$1 = /* @__PURE__ */ createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u062F\u0645\u0648 ");
const _hoisted_34$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-left"
}, null, -1));
const _hoisted_35$1 = {
  key: 3,
  class: "demo-section"
};
const _hoisted_36$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "demo-section-title" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image-block-l",
    src: _imports_6,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image-block-l",
    src: _imports_7,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "title-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u0637\u0631\u062D \u0645\u06CC\u0646\u06CC\u0645\u0627\u0644"),
    /* @__PURE__ */ createBaseVNode("p", null, "\u0628\u062F\u0648\u0646 \u0647\u06CC\u0686 \u06AF\u0648\u0646\u0647 \u0645\u0646\u0648")
  ])
], -1));
const _hoisted_37$1 = { class: "columns is-multiline" };
const _hoisted_38$1 = { class: "vuero-demo-wrapper loaded" };
const _hoisted_39$1 = {
  key: 0,
  class: "new-tag"
};
const _hoisted_40$1 = ["src"];
const _hoisted_41$1 = ["src"];
const _hoisted_42$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "circle-overlay" }, null, -1));
const _hoisted_43$1 = { class: "demo-info has-text-centered" };
const _hoisted_44$1 = { class: "wrapper" };
const _hoisted_45$1 = { class: "demo-title" };
const _hoisted_46$1 = { class: "demo-link" };
const _hoisted_47$1 = /* @__PURE__ */ createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u062F\u0645\u0648 ");
const _hoisted_48$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-left"
}, null, -1));
const _hoisted_49$1 = {
  key: 4,
  class: "demo-section"
};
const _hoisted_50$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "demo-section-title" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image-block-l",
    src: _imports_6,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image-block-l",
    src: _imports_7,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "title-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "Auth"),
    /* @__PURE__ */ createBaseVNode("p", null, "Sign-In & Sign-Up templates")
  ])
], -1));
const _hoisted_51$1 = { class: "columns is-multiline" };
const _hoisted_52 = { class: "vuero-demo-wrapper loaded" };
const _hoisted_53 = {
  key: 0,
  class: "new-tag"
};
const _hoisted_54 = ["src"];
const _hoisted_55 = ["src"];
const _hoisted_56 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "circle-overlay" }, null, -1));
const _hoisted_57 = { class: "demo-info has-text-centered" };
const _hoisted_58 = { class: "wrapper" };
const _hoisted_59 = { class: "demo-title" };
const _hoisted_60 = { class: "demo-link" };
const _hoisted_61 = /* @__PURE__ */ createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u062F\u0645\u0648 ");
const _hoisted_62 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-left"
}, null, -1));
const _hoisted_63 = {
  key: 5,
  class: "demo-section"
};
const _hoisted_64 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "demo-section-title" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image-block-l",
    src: _imports_6,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image-block-l",
    src: _imports_7,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "title-meta" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u0635\u0641\u062D\u0627\u062A"),
    /* @__PURE__ */ createBaseVNode("p", null, "\u0635\u0641\u062D\u0627\u062A \u062E\u0627\u0644\u06CC \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0627\u0631\u062A \u0633\u0631\u06CC\u0639")
  ])
], -1));
const _hoisted_65 = { class: "columns is-multiline" };
const _hoisted_66 = { class: "vuero-demo-wrapper loaded" };
const _hoisted_67 = {
  key: 0,
  class: "new-tag"
};
const _hoisted_68 = ["src"];
const _hoisted_69 = ["src"];
const _hoisted_70 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "circle-overlay" }, null, -1));
const _hoisted_71 = { class: "demo-info has-text-centered" };
const _hoisted_72 = { class: "wrapper" };
const _hoisted_73 = { class: "demo-title" };
const _hoisted_74 = { class: "demo-link" };
const _hoisted_75 = /* @__PURE__ */ createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u06CC \u062F\u0645\u0648 ");
const _hoisted_76 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-angle-left"
}, null, -1));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    function useFilter(items, filter) {
      return computed(() => {
        if (!filter.value) {
          return items;
        }
        if (filter.value === "new") {
          return items.filter((demo) => demo.new);
        }
        const searchValue = filter.value.replace(/[^A-Za-z0-9]/g, "");
        const filterRe = new RegExp(searchValue, "i");
        return items.filter((demo) => {
          return demo.name.match(filterRe) || demo.category.match(filterRe);
        });
      });
    }
    function generateFeatureRequestLink(name2) {
      return `https://github.com/cssninjaStudio/vuero-public/issues/new?assignees=&labels=feature-request%2Ctriage&template=feature_request.yml&title=%5BFeature%5D%3A+%20${name2}`;
    }
    function displayOrder(a, b) {
      if (a.displayOrder < b.displayOrder) {
        return -1;
      }
      if (a.displayOrder > b.displayOrder) {
        return 1;
      }
      return 0;
    }
    const sidebarDemos = sidebar.sort(displayOrder);
    const authDemos = auth.sort(displayOrder);
    const minimalDemos = minimal.sort(displayOrder);
    const templatesDemos = templates.sort(displayOrder);
    const navbarDemos = navbar.sort(displayOrder);
    const totalDemos = sidebarDemos.length + authDemos.length + minimalDemos.length + templatesDemos.length + navbarDemos.length;
    const filterInput = ref("");
    const sidebarDemosFiltered = useFilter(sidebarDemos, filterInput);
    const authDemosFiltered = useFilter(authDemos, filterInput);
    const minimalDemosFiltered = useFilter(minimalDemos, filterInput);
    const templatesDemosFiltered = useFilter(templatesDemos, filterInput);
    const navbarDemosFiltered = useFilter(navbarDemos, filterInput);
    const totalResults = computed(() => {
      return sidebarDemosFiltered.value.length + authDemosFiltered.value.length + minimalDemosFiltered.value.length + templatesDemosFiltered.value.length + navbarDemosFiltered.value.length;
    });
    const searchLabel = computed(() => {
      if (!filterInput.value) {
        return `\u062C\u0633\u062A\u062C\u0648 \u062F\u0631 ${totalDemos} \u062F\u0645\u0648`;
      }
      if (!totalResults.value) {
        return `\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u0647\u0646\u0648\u0632 \u0628\u0631\u0627\u06CC "${filterInput.value}" \u062F\u0645\u0648 \u062F\u0631\u0633\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A.`;
      }
      return `${totalResults.value} \u062F\u0645\u0648 \u0627\u0632 ${totalDemos} \u0628\u0631\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634 \u0627\u0633\u062A`;
    });
    debouncedWatch(filterInput, () => {
      if (filterInput.value.length < 3) {
        return;
      }
      if (window && window.gtag) {
        window.gtag("event", "search", {
          search_term: filterInput.value
        });
        console.log(window.dataLayer);
      }
    }, { debounce: 300 });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_1;
      const _component_VField = _sfc_main$9;
      const _component_VFlex = _sfc_main$8;
      const _component_VButton = _sfc_main$e;
      const _component_VPlaceholderPage = _sfc_main$7;
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createVNode(_component_VFlex, { "justify-content": "center" }, {
            default: withCtx(() => [
              createVNode(_component_VField, { label: unref(searchLabel) }, {
                default: withCtx(() => [
                  createVNode(_component_VControl, { icon: "feather:search" }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterInput.value = $event),
                        type: "search",
                        class: "input is-rounded",
                        placeholder: "\u0641\u0648\u062A\u0628\u0627\u0644\u060C \u067E\u0631\u0648\u0627\u0632\u060C \u0641\u0631\u0648\u0634\u06AF\u0627\u0647\u060C \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 ..."
                      }, null, 512), [
                        [vModelText, filterInput.value]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          })
        ]),
        unref(totalResults) === 0 ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createVNode(_component_VPlaceholderPage, {
            title: "\u0645\u0627 \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645.",
            subtitle: "\u062E\u06CC\u0644\u06CC \u0628\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC \u0631\u0633\u062F \u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647 \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u06CC\u0645. \u0644\u0637\u0641\u0627\u064B \u0639\u0628\u0627\u0631\u062A\u0647\u0627 \u06CC\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_4$3,
              _hoisted_5$3
            ]),
            action: withCtx(() => [
              createVNode(_component_VButton, {
                href: generateFeatureRequestLink(filterInput.value),
                target: "_blank",
                icon: "feather:github"
              }, {
                default: withCtx(() => [
                  _hoisted_6$3
                ]),
                _: 1
              }, 8, ["href"])
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(sidebarDemosFiltered).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
          _hoisted_8$3,
          createBaseVNode("div", _hoisted_9$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarDemosFiltered), (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "column is-4 has-text-centered"
              }, [
                createBaseVNode("figure", _hoisted_10$3, [
                  item.new ? (openBlock(), createElementBlock("span", _hoisted_11$2, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                  createBaseVNode("img", {
                    class: "light-image-block-l",
                    src: item.screenshot.light,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_12$2),
                  createBaseVNode("img", {
                    class: "dark-image-block-l",
                    src: item.screenshot.dark,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_13$2),
                  _hoisted_14$2,
                  createBaseVNode("div", _hoisted_15$2, [
                    createBaseVNode("div", _hoisted_16$2, [
                      createBaseVNode("div", _hoisted_17$2, [
                        createBaseVNode("span", null, toDisplayString(item.category), 1),
                        createBaseVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_18$2, [
                        createVNode(_component_RouterLink, {
                          to: item.route
                        }, {
                          default: withCtx(() => [
                            _hoisted_19$2,
                            _hoisted_20$2
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        unref(navbarDemosFiltered).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_21$1, [
          _hoisted_22$1,
          createBaseVNode("div", _hoisted_23$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbarDemosFiltered), (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "column is-4 has-text-centered"
              }, [
                createBaseVNode("figure", _hoisted_24$1, [
                  item.new ? (openBlock(), createElementBlock("span", _hoisted_25$1, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                  createBaseVNode("img", {
                    class: "light-image-block-l",
                    src: item.screenshot.light,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_26$1),
                  createBaseVNode("img", {
                    class: "dark-image-block-l",
                    src: item.screenshot.dark,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_27$1),
                  _hoisted_28$1,
                  createBaseVNode("div", _hoisted_29$1, [
                    createBaseVNode("div", _hoisted_30$1, [
                      createBaseVNode("div", _hoisted_31$1, [
                        createBaseVNode("span", null, toDisplayString(item.category), 1),
                        createBaseVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_32$1, [
                        createVNode(_component_RouterLink, {
                          to: item.route
                        }, {
                          default: withCtx(() => [
                            _hoisted_33$1,
                            _hoisted_34$1
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        unref(minimalDemosFiltered).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_35$1, [
          _hoisted_36$1,
          createBaseVNode("div", _hoisted_37$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(minimalDemosFiltered), (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "column is-4 has-text-centered"
              }, [
                createBaseVNode("figure", _hoisted_38$1, [
                  item.new ? (openBlock(), createElementBlock("span", _hoisted_39$1, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                  createBaseVNode("img", {
                    class: "light-image-block-l",
                    src: item.screenshot.light,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_40$1),
                  createBaseVNode("img", {
                    class: "dark-image-block-l",
                    src: item.screenshot.dark,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_41$1),
                  _hoisted_42$1,
                  createBaseVNode("div", _hoisted_43$1, [
                    createBaseVNode("div", _hoisted_44$1, [
                      createBaseVNode("div", _hoisted_45$1, [
                        createBaseVNode("span", null, toDisplayString(item.category), 1),
                        createBaseVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_46$1, [
                        createVNode(_component_RouterLink, {
                          to: item.route
                        }, {
                          default: withCtx(() => [
                            _hoisted_47$1,
                            _hoisted_48$1
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        unref(authDemosFiltered).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_49$1, [
          _hoisted_50$1,
          createBaseVNode("div", _hoisted_51$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(authDemosFiltered), (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "column is-4 has-text-centered"
              }, [
                createBaseVNode("figure", _hoisted_52, [
                  item.new ? (openBlock(), createElementBlock("span", _hoisted_53, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                  createBaseVNode("img", {
                    class: "light-image-block-l",
                    src: item.screenshot.light,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_54),
                  createBaseVNode("img", {
                    class: "dark-image-block-l",
                    src: item.screenshot.dark,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_55),
                  _hoisted_56,
                  createBaseVNode("div", _hoisted_57, [
                    createBaseVNode("div", _hoisted_58, [
                      createBaseVNode("div", _hoisted_59, [
                        createBaseVNode("span", null, toDisplayString(item.category), 1),
                        createBaseVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_60, [
                        createVNode(_component_RouterLink, {
                          to: item.route
                        }, {
                          default: withCtx(() => [
                            _hoisted_61,
                            _hoisted_62
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        unref(templatesDemosFiltered).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_63, [
          _hoisted_64,
          createBaseVNode("div", _hoisted_65, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(templatesDemosFiltered), (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "column is-4 has-text-centered"
              }, [
                createBaseVNode("figure", _hoisted_66, [
                  item.new ? (openBlock(), createElementBlock("span", _hoisted_67, "\u062C\u062F\u06CC\u062F")) : createCommentVNode("", true),
                  createBaseVNode("img", {
                    class: "light-image-block-l",
                    src: item.screenshot.light,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_68),
                  createBaseVNode("img", {
                    class: "dark-image-block-l",
                    src: item.screenshot.dark,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, _hoisted_69),
                  _hoisted_70,
                  createBaseVNode("div", _hoisted_71, [
                    createBaseVNode("div", _hoisted_72, [
                      createBaseVNode("div", _hoisted_73, [
                        createBaseVNode("span", null, toDisplayString(item.category), 1),
                        createBaseVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_74, [
                        createVNode(_component_RouterLink, {
                          to: item.route
                        }, {
                          default: withCtx(() => [
                            _hoisted_75,
                            _hoisted_76
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8d12fd98"]]);
const elements = [
  {
    id: 1,
    link: "elements-colors",
    name: "\u0631\u0646\u06AF\u200C\u0647\u0627",
    media: {
      light: "/images/icons/components/colors.svg",
      dark: "/images/icons/components/colors-dark.svg"
    }
  },
  {
    id: 2,
    link: "components-tag",
    name: "VTag",
    media: {
      light: "/images/icons/components/badges.svg",
      dark: "/images/icons/components/badges-dark.svg"
    }
  },
  {
    id: 3,
    link: "elements-button",
    name: "VButton",
    media: {
      light: "/images/icons/components/buttons.svg",
      dark: "/images/icons/components/buttons-dark.svg"
    }
  },
  {
    id: 4,
    link: "components-content",
    name: "\u0645\u062D\u062A\u0648\u0627",
    media: {
      light: "/images/icons/components/content.svg",
      dark: "/images/icons/components/content-dark.svg"
    }
  },
  {
    id: 5,
    link: "elements-icons-fa",
    name: "\u0641\u0648\u0646\u062A \u0639\u0627\u0633\u0645",
    media: {
      light: "/images/icons/components/font-awesome.svg",
      dark: "/images/icons/components/font-awesome-dark.svg"
    }
  },
  {
    id: 6,
    link: "elements-icons-iconify",
    name: "Feather Icons",
    media: {
      light: "/images/icons/components/feather-icons.svg",
      dark: "/images/icons/components/feather-icons-dark.svg"
    }
  },
  {
    id: 7,
    link: "elements-icons-line-icons-regular",
    name: "Line Icons",
    media: {
      light: "/images/icons/components/line-icons.svg",
      dark: "/images/icons/components/line-icons-dark.svg"
    }
  },
  {
    id: 8,
    link: "elements-icons-line-icons",
    name: "\u0622\u06CC\u06A9\u0648\u0646\u200C\u0647\u0627\u06CC \u062E\u0637\u06CC \u0633\u0628\u06A9",
    media: {
      light: "/images/icons/components/line-icons.svg",
      dark: "/images/icons/components/line-icons-dark.svg"
    }
  },
  {
    id: 9,
    link: "components-card",
    name: "VCard",
    media: {
      light: "/images/icons/components/cards.svg",
      dark: "/images/icons/components/cards-dark.svg"
    }
  },
  {
    id: 10,
    link: "components-table",
    name: "\u0645\u06CC\u0632",
    media: {
      light: "/images/icons/components/tables.svg",
      dark: "/images/icons/components/tables-dark.svg"
    }
  },
  {
    id: 11,
    link: "components-tabs",
    name: "VTabs",
    media: {
      light: "/images/icons/components/tabs.svg",
      dark: "/images/icons/components/tabs-dark.svg"
    }
  },
  {
    id: 13,
    link: "elements-tooltip",
    name: "VTooltip",
    media: {
      light: "/images/icons/components/tooltip.svg",
      dark: "/images/icons/components/tooltip-dark.svg"
    }
  }
];
const forms = [
  {
    id: 1,
    link: "elements-forms-inputs",
    name: "\u0648\u0631\u0648\u062F\u06CC\u200C\u0647\u0627",
    media: {
      light: "/images/icons/components/inputs.svg",
      dark: "/images/icons/components/inputs-dark.svg"
    }
  },
  {
    id: 2,
    link: "elements-forms-addons",
    name: "\u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627\u06CC \u0648\u0631\u0648\u062F\u06CC",
    media: {
      light: "/images/icons/components/inputs-addons.svg",
      dark: "/images/icons/components/inputs-addons-dark.svg"
    }
  },
  {
    id: 3,
    link: "elements-forms-textarea",
    name: "\u0648\u06CC\u0631\u0627\u06CC\u0634\u06AF\u0631 \u0633\u0627\u062F\u0647",
    media: {
      light: "/images/icons/components/textarea.svg",
      dark: "/images/icons/components/textarea-dark.svg"
    }
  },
  {
    id: 4,
    link: "elements-forms-selects",
    name: "Select",
    media: {
      light: "/images/icons/components/selects.svg",
      dark: "/images/icons/components/selects-dark.svg"
    }
  },
  {
    id: 5,
    link: "elements-forms-file",
    name: "\u0648\u0631\u0648\u062F\u06CC \u0641\u0627\u06CC\u0644",
    media: {
      light: "/images/icons/components/file-input.svg",
      dark: "/images/icons/components/file-input-dark.svg"
    }
  },
  {
    id: 6,
    link: "elements-checkbox",
    name: "VCheckbox",
    media: {
      light: "/images/icons/components/toggles.svg",
      dark: "/images/icons/components/toggles-dark.svg"
    }
  },
  {
    id: 7,
    link: "elements-radio",
    name: "VRadio",
    media: {
      light: "/images/icons/components/toggles.svg",
      dark: "/images/icons/components/toggles-dark.svg"
    }
  },
  {
    id: 8,
    link: "elements-switch-block",
    name: "VSwitchBlock",
    media: {
      light: "/images/icons/components/switch.svg",
      dark: "/images/icons/components/switch-dark.svg"
    }
  },
  {
    id: 9,
    link: "sidebar-layouts-form-layouts-1",
    name: "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647 \u06F1",
    media: {
      light: "/images/icons/components/forms.svg",
      dark: "/images/icons/components/forms-dark.svg"
    }
  },
  {
    id: 10,
    link: "sidebar-layouts-form-layouts-2",
    name: "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647 \u06F2",
    media: {
      light: "/images/icons/components/forms.svg",
      dark: "/images/icons/components/forms-dark.svg"
    }
  },
  {
    id: 11,
    link: "sidebar-layouts-form-layouts-3",
    name: "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647 \u06F3",
    media: {
      light: "/images/icons/components/forms.svg",
      dark: "/images/icons/components/forms-dark.svg"
    }
  },
  {
    id: 12,
    link: "sidebar-layouts-form-layouts-4",
    name: "\u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u0641\u0631\u0645 \u0646\u0633\u062E\u0647 \u06F4",
    media: {
      light: "/images/icons/components/forms.svg",
      dark: "/images/icons/components/forms-dark.svg"
    }
  }
];
const components = [
  {
    id: 1,
    link: "components-avatar",
    name: "VAvatar",
    media: {
      light: "/images/icons/components/avatar.svg",
      dark: "/images/icons/components/avatar-dark.svg"
    }
  },
  {
    id: 2,
    link: "components-avatar-stack",
    name: "VAvatarStack",
    media: {
      light: "/images/icons/components/avatar.svg",
      dark: "/images/icons/components/avatar-dark.svg"
    }
  },
  {
    id: 3,
    link: "components-accordion",
    name: "VAccordion",
    media: {
      light: "/images/icons/components/accordion.svg",
      dark: "/images/icons/components/accordion-dark.svg"
    }
  },
  {
    id: 4,
    link: "components-collapse",
    name: "VCollapse",
    media: {
      light: "/images/icons/components/accordion.svg",
      dark: "/images/icons/components/accordion-dark.svg"
    }
  },
  {
    id: 5,
    link: "components-accordion-image",
    name: "VAccordionImages",
    media: {
      light: "/images/icons/components/accordion.svg",
      dark: "/images/icons/components/accordion-dark.svg"
    }
  },
  {
    id: 6,
    link: "components-block",
    name: "VBlock",
    media: {
      light: "/images/icons/components/blocks.svg",
      dark: "/images/icons/components/blocks-dark.svg"
    }
  },
  {
    id: 7,
    link: "components-breadcrumb",
    name: "VBreadcrumb",
    media: {
      light: "/images/icons/components/breadcrumb.svg",
      dark: "/images/icons/components/breadcrumb-dark.svg"
    }
  },
  {
    id: 8,
    link: "elements-button",
    name: "VButton",
    media: {
      light: "/images/icons/components/buttons.svg",
      dark: "/images/icons/components/buttons-dark.svg"
    }
  },
  {
    id: 9,
    link: "components-card-advanced",
    name: "VCardAdvanced",
    media: {
      light: "/images/icons/components/cards.svg",
      dark: "/images/icons/components/cards-dark.svg"
    }
  },
  {
    id: 10,
    link: "components-card-media",
    name: "VCardMedia",
    media: {
      light: "/images/icons/components/cards.svg",
      dark: "/images/icons/components/cards-dark.svg"
    }
  },
  {
    id: 11,
    link: "components-card-social",
    name: "VCardSocial",
    media: {
      light: "/images/icons/components/cards.svg",
      dark: "/images/icons/components/cards-dark.svg"
    }
  },
  {
    id: 12,
    link: "elements-dropdown",
    name: "VDropdown",
    media: {
      light: "/images/icons/components/dropdowns.svg",
      dark: "/images/icons/components/dropdowns-dark.svg"
    }
  },
  {
    id: 13,
    link: "components-icon-box",
    name: "VIconBox",
    media: {
      light: "/images/icons/components/icon-box.svg",
      dark: "/images/icons/components/icon-box-dark.svg"
    }
  },
  {
    id: 14,
    link: "elements-message",
    name: "VMessage",
    media: {
      light: "/images/icons/components/messages.svg",
      dark: "/images/icons/components/messages-dark.svg"
    }
  },
  {
    id: 15,
    link: "elements-modal",
    name: "VModal",
    media: {
      light: "/images/icons/components/modals.svg",
      dark: "/images/icons/components/modals-dark.svg"
    }
  },
  {
    id: 16,
    link: "elements-progress",
    name: "VProgress",
    media: {
      light: "/images/icons/components/progress.svg",
      dark: "/images/icons/components/progress-dark.svg"
    }
  },
  {
    id: 17,
    link: "components-flex-table",
    name: "VFlexTable",
    media: {
      light: "/images/icons/components/flex-tables.svg",
      dark: "/images/icons/components/flex-tables-dark.svg"
    }
  },
  {
    id: 18,
    link: "components-tag",
    name: "VTag",
    media: {
      light: "/images/icons/components/badges.svg",
      dark: "/images/icons/components/badges-dark.svg"
    }
  },
  {
    id: 19,
    link: "components-snack",
    name: "VSnack",
    media: {
      light: "/images/icons/components/snacks.svg",
      dark: "/images/icons/components/snacks-dark.svg"
    }
  }
];
const plugins = [
  {
    id: 1,
    link: "components-plugins-notif",
    name: "Notyf",
    media: {
      light: "/images/icons/components/toasts.svg",
      dark: "/images/icons/components/toasts-dark.svg"
    }
  },
  {
    id: 2,
    link: "components-plugins-photos-swipe",
    name: "Photo Swipe",
    media: {
      light: "/images/icons/components/lightbox.svg",
      dark: "/images/icons/components/lightbox-dark.svg"
    }
  },
  {
    id: 3,
    link: "components-plugins-simple-datatables",
    name: "VDatatable",
    media: {
      light: "/images/icons/components/tables.svg",
      dark: "/images/icons/components/tables-dark.svg"
    }
  },
  {
    id: 3,
    link: "elements-addons-calendar",
    name: "VCalendar",
    media: {
      light: "/images/icons/components/datepicker.svg",
      dark: "/images/icons/components/datepicker-dark.svg"
    }
  },
  {
    id: 4,
    link: "components-plugins-plyr",
    name: "VPlyr",
    media: {
      light: "/images/icons/components/video.svg",
      dark: "/images/icons/components/video-dark.svg"
    }
  },
  {
    id: 5,
    link: "elements-addons-vueform-multiselect",
    name: "VMultiselect",
    media: {
      light: "/images/icons/components/selects.svg",
      dark: "/images/icons/components/selects-dark.svg"
    }
  },
  {
    id: 6,
    link: "elements-addons-vueform-slider",
    name: "VSlider",
    media: {
      light: "/images/icons/components/slider.svg",
      dark: "/images/icons/components/slider-dark.svg"
    }
  },
  {
    id: 7,
    link: "components-plugins-tippy",
    name: "VTippy",
    media: {
      light: "/images/icons/components/popover.svg",
      dark: "/images/icons/components/popover-dark.svg"
    }
  },
  {
    id: 8,
    link: "elements-addons-ckeditor",
    name: "CKEditor 5",
    media: {
      light: "/images/icons/components/textarea.svg",
      dark: "/images/icons/components/textarea-dark.svg"
    }
  }
];
const _hoisted_1$3 = { class: "columns is-multiline" };
const _hoisted_2$3 = { class: "component" };
const _hoisted_3$3 = ["src"];
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = { class: "component-title" };
const _hoisted_6$2 = { class: "columns is-multiline" };
const _hoisted_7$2 = { class: "component" };
const _hoisted_8$2 = ["src"];
const _hoisted_9$2 = ["src"];
const _hoisted_10$2 = { class: "component-title" };
const _hoisted_11$1 = { class: "columns is-multiline" };
const _hoisted_12$1 = { class: "component" };
const _hoisted_13$1 = ["src"];
const _hoisted_14$1 = ["src"];
const _hoisted_15$1 = { class: "component-title" };
const _hoisted_16$1 = { class: "columns is-multiline" };
const _hoisted_17$1 = { class: "component" };
const _hoisted_18$1 = ["src"];
const _hoisted_19$1 = ["src"];
const _hoisted_20$1 = { class: "component-title" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    activeTab: { type: String, required: false, default: "elements" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          id: "demo-elements",
          class: normalizeClass([[props.activeTab === "elements" && "is-active"], "tab-content has-text-left"])
        }, [
          createBaseVNode("div", _hoisted_1$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(elements), (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: "column is-3"
              }, [
                createVNode(_component_RouterLink, {
                  to: { name: item.link },
                  class: "component-box"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$3, [
                      createBaseVNode("img", {
                        class: "light-image-l",
                        src: item.media.light,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_3$3),
                      createBaseVNode("img", {
                        class: "dark-image-l",
                        src: item.media.dark,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_4$2)
                    ]),
                    createBaseVNode("div", _hoisted_5$2, toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ])
        ], 2),
        createBaseVNode("div", {
          id: "demo-components",
          class: normalizeClass([[props.activeTab === "components" && "is-active"], "tab-content has-text-left"])
        }, [
          createBaseVNode("div", _hoisted_6$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(components), (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: "column is-3"
              }, [
                createVNode(_component_RouterLink, {
                  to: { name: item.link },
                  class: "component-box"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7$2, [
                      createBaseVNode("img", {
                        class: "light-image-l",
                        src: item.media.light,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_8$2),
                      createBaseVNode("img", {
                        class: "dark-image-l",
                        src: item.media.dark,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_9$2)
                    ]),
                    createBaseVNode("div", _hoisted_10$2, toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ])
        ], 2),
        createBaseVNode("div", {
          id: "demo-forms",
          class: normalizeClass([[props.activeTab === "forms" && "is-active"], "tab-content has-text-left"])
        }, [
          createBaseVNode("div", _hoisted_11$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(forms), (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: "column is-3"
              }, [
                createVNode(_component_RouterLink, {
                  to: { name: item.link },
                  class: "component-box"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_12$1, [
                      createBaseVNode("img", {
                        class: "light-image-l",
                        src: item.media.light,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_13$1),
                      createBaseVNode("img", {
                        class: "dark-image-l",
                        src: item.media.dark,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_14$1)
                    ]),
                    createBaseVNode("div", _hoisted_15$1, toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ])
        ], 2),
        createBaseVNode("div", {
          id: "plugins-sections",
          class: normalizeClass([[props.activeTab === "plugins" && "is-active"], "tab-content has-text-left"])
        }, [
          createBaseVNode("div", _hoisted_16$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(plugins), (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: "column is-3"
              }, [
                createVNode(_component_RouterLink, {
                  to: { name: item.link },
                  class: "component-box"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_17$1, [
                      createBaseVNode("img", {
                        class: "light-image-l",
                        src: item.media.light,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_18$1),
                      createBaseVNode("img", {
                        class: "dark-image-l",
                        src: item.media.dark,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, _hoisted_19$1)
                    ]),
                    createBaseVNode("div", _hoisted_20$1, toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ])
        ], 2)
      ], 64);
    };
  }
});
const _sfc_main$4 = {};
const _hoisted_1$2 = { class: "vuero-footer" };
const _hoisted_2$2 = { class: "container" };
const _hoisted_3$2 = /* @__PURE__ */ createStaticVNode('<div class="footer-head"><div class="head-text"><h3>\u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u067E\u0631\u0648\u0698\u0647\u200C\u064A \u062E\u0648\u062F \u0622\u0645\u0627\u062F\u0647 \u0647\u0633\u062A\u06CC\u062F\u061F</h3><p>\u0647\u0645 \u0627\u06A9\u0646\u0648\u0646 \u06CC\u06A9 \u0646\u0633\u062E\u0647 \u0627\u0632 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0631\u0627 \u0633\u0641\u0627\u0631\u0634 \u062F\u0647\u06CC\u062F</p></div><div class="head-action"><div class="buttons"><a href="https://www.rtl-theme.com/user-profile/vuero/" class="button v-button is-primary is-rounded raised action-button"> \u062E\u0631\u06CC\u062F \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 </a><a href="https://support.vuero.ir" class="button chat-button"> \u0645\u0634\u0627\u0648\u0631\u0647 \u0628\u0627 \u0645\u0627 </a></div></div></div>', 1);
const _hoisted_4$1 = { class: "columns footer-body" };
const _hoisted_5$1 = { class: "column is-4" };
const _hoisted_6$1 = { class: "p-t-10 p-b-10" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "footer-description p-t-10 p-b-10" }, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0648 \u062F\u0648\u0644\u0648\u067E\u0631\u0647\u0627 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0628\u0627 \u0628\u0647\u0631\u0647 \u0628\u0631\u062F\u0646 \u0627\u0632 \u0633\u06CC\u0633\u062A\u0645 \u0645\u0627\u0698\u0648\u0644\u0627\u0631 \u0622\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u062C\u0630\u0627\u0628\u06CC \u0631\u0627 \u062E\u0644\u0642 \u0646\u0645\u0648\u062F \u06A9\u0647 \u0627\u0646\u0648\u0627\u0639 \u0645\u0646\u0648\u0647\u0627 \u0648 \u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627 \u0631\u0627 \u062F\u0631 \u062E\u0648\u062F \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u0646\u062F. ", -1);
const _hoisted_8$1 = /* @__PURE__ */ createStaticVNode('<div><span class="moto"> \u0637\u0631\u0627\u062D\u06CC \u0648 \u062A\u0648\u0633\u0639\u0647 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 <i aria-hidden="true" class="fas fa-heart text-danger"></i> \u062A\u0648\u0633\u0637 CSS Ninja.</span><div class="social-links p-t-10 p-b-10"><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-facebook"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-twitter"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-linkedin"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-dribbble"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-github"></i></span></a></div></div>', 1);
const _hoisted_9$1 = /* @__PURE__ */ createStaticVNode('<div class="column is-6 is-offset-2"><div class="columns is-flex-tablet-p"><div class="column"><ul class="footer-column"><li class="column-header">\u0648\u06CC\u0648\u0626\u0650\u0631\u0648</li><li class="column-item"><a href="#">\u062E\u0627\u0646\u0647</a></li><li class="column-item"><a href="#">\u0642\u06CC\u0645\u062A\u200C\u0647\u0627</a></li><li class="column-item"><a href="#">\u0634\u0631\u0648\u0639 \u0628\u0647 \u06A9\u0627\u0631</a></li><li class="column-item"><a href="#">\u0631\u0627\u0647\u0646\u0645\u0627\u06CC\u06CC</a></li></ul></div><div class="column"><ul class="footer-column"><li class="column-header">\u0645\u0646\u0627\u0628\u0639</li><li class="column-item"><a href="#">\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC</a></li><li class="column-item"><a href="#">\u0645\u0631\u06A9\u0632 \u067E\u0634\u06CC\u062A\u0628\u0627\u0646\u06CC</a></li><li class="column-item"><a href="#">\u0633\u0648\u0627\u0644\u0627\u062A \u067E\u0631\u062A\u06A9\u0631\u0627\u0631</a></li><li class="column-item"><a href="#">\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062F\u0645\u0648</a></li></ul></div><div class="column"><ul class="footer-column"><li class="column-header">\u0642\u0648\u0627\u0646\u06CC\u0646</li><li class="column-item"><a href="#">\u0642\u0648\u0627\u0646\u06CC\u0646 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062E\u062F\u0645\u0627\u062A</a></li><li class="column-item"><a href="#">\u0633\u06CC\u0627\u0633\u062A \u062D\u0641\u0638 \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC</a></li><li class="column-item"><a href="#">\u062E\u062F\u0645\u0627\u062A SaaS</a></li></ul></div></div></div>', 1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "footer-copyright has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" \xA9 \u06F1\u06F4\u06F0\u06F0-\u06F1\u06F4\u06F0\u06F1 | "),
    /* @__PURE__ */ createBaseVNode("a", { href: "https://cssninja.io" }, "\u0633\u06CC \u0627\u0633 \u0627\u0633 \u0646\u06CC\u0646\u062C\u0627"),
    /* @__PURE__ */ createTextVNode(" | \u0647\u0645\u0647 \u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A. ")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_AnimatedLogo = __unplugin_components_0$1;
  return openBlock(), createElementBlock("footer", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      _hoisted_3$2,
      createBaseVNode("div", _hoisted_4$1, [
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(_component_AnimatedLogo, {
              width: "36px",
              height: "36px"
            }),
            _hoisted_7$1
          ]),
          _hoisted_8$1
        ]),
        _hoisted_9$1
      ]),
      _hoisted_10$1
    ])
  ]);
}
var __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "darker" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["minimal-wrapper", [props.theme]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var _imports_0 = "/assets/cut-circle.c37dc56f.svg";
var _imports_1 = "/assets/cut-circle-dark.22bb77fa.svg";
var _imports_2$1 = "/assets/app-1.e58b428f.webp";
var _imports_3$1 = "/assets/app-1-dark.604aaef3.webp";
var _imports_8 = "/images/icons/stacks/vuejs.svg";
var _imports_9$1 = "/images/icons/stacks/vite.svg";
var _imports_10$1 = "/images/icons/stacks/bulma.svg";
var _imports_11$1 = "/images/icons/stacks/sass.svg";
var _imports_12$1 = "/images/icons/stacks/typescript.svg";
var _imports_9 = "/images/icons/stacks/vuejs-solo.svg";
var _imports_10 = "/images/icons/stacks/typescript-square.svg";
var _imports_11 = "/images/icons/stacks/vscode.svg";
var _imports_12 = "/images/icons/stacks/eslint.svg";
var _imports_13 = "/images/icons/stacks/prettier.svg";
var _imports_14 = "/images/icons/stacks/stylelint.svg";
var _imports_15 = "/images/icons/stacks/stylelint-reverse.svg";
var _imports_16 = "/images/icons/stacks/iconify.svg";
var _imports_17 = "/images/icons/stacks/cypress.svg";
var _imports_18 = "/images/icons/stacks/pnpm-yarn.svg";
var _imports_19 = "/images/icons/stacks/docker-whale.svg";
var _imports_20 = "/images/icons/stacks/robot.svg";
var _imports_21 = "/images/icons/misc/success.svg";
var _imports_22 = "/images/icons/misc/error.svg";
var _imports_23 = "/images/icons/misc/folder.svg";
var _imports_24 = "/images/icons/misc/documentation.svg";
var _imports_25 = "/assets/feature-1.5f92edfd.webp";
var _imports_26 = "/assets/feature-1-dark.9ed63ab8.webp";
var _imports_2 = "/assets/feature-2.ba58c977.svg";
var _imports_3 = "/assets/feature-2-dark.1316c4d7.svg";
var _imports_4 = "/assets/feature-3.8af0f59b.svg";
var _imports_5 = "/assets/feature-3-dark.4f56d90d.svg";
var _imports_31 = "/assets/feature-4.1b299695.svg";
var _imports_32 = "/assets/feature-4-dark.7b9da566.svg";
var _imports_33 = "/assets/feature-5.a8ed9daf.svg";
var _imports_34 = "/assets/feature-5-dark.b6938903.svg";
var _imports_35 = "/assets/feature-6.b35573f6.svg";
var _imports_36 = "/assets/feature-6-dark.2bc6bbe1.svg";
var _imports_37 = "/images/icons/logos/envato.svg";
const name = "vuero";
const version = "2.1.0";
const license = "SEE LICENSE IN LICENSE.md";
const author = {
  name: "cssninjaStudio <hello@cssninja.io> (https://cssninja.io)"
};
const engines = {
  node: ">=14.17.0",
  npm: ">=7"
};
const gitHooks = {
  "pre-commit": "lint-staged",
  "commit-msg": "commitlint -e -V "
};
const scripts = {
  dev: "vite",
  "dev:force": "vite --force",
  build: "run-s build:*",
  "build:update-bulma-colors": "bulma-css-vars",
  "build:vite": "node --max_old_space_size=16384 ./node_modules/vite/bin/vite.js build",
  preview: "vite preview",
  lint: "run-s lint:doc:fix lint:eslint:fix lint:stylelint:fix lint:prettier:fix",
  "lint:prettier": 'prettier --check "./src/**/*.(ts|vue|css|scss)"',
  "lint:prettier:fix": 'prettier --write "./src/**/*.(ts|vue|css|scss)"',
  "lint:eslint": "eslint --ext .ts,.vue ./src",
  "lint:eslint:fix": "eslint --fix --ext .ts,.vue ./src",
  "lint:stylelint": "stylelint ./src/**/*.{vue,css,scss}",
  "lint:stylelint:fix": "stylelint ./src/**/*.{vue,css,scss} --fix",
  "lint:doc:fix": "run-s lint:doc:fix:*",
  "lint:doc:fix:eslint": "eslint --fix --ext .md ./documentation",
  "lint:doc:fix:prettier": 'prettier --write "./documentation/**/*.(md)"',
  test: "run-p test:lint test:tsc",
  "test:tsc": "vue-tsc --noEmit",
  "test:lint": "run-p lint:eslint lint:stylelint lint:prettier",
  "test:e2e": 'echo "[warning] no e2e test implemented yet"',
  "test:unit": 'echo "[warning] no unit test implemented yet"',
  cypress: "cypress",
  commit: "commit",
  release: "run-s test build release:*",
  "release:standard-version": "standard-version"
};
const dependencies = {
  "@ckeditor/ckeditor5-build-classic": "30.0.0",
  "@ckeditor/ckeditor5-vue": "2.0.1",
  "@iconify/iconify": "2.0.4",
  "@mapbox/mapbox-gl-geocoder": "4.7.4",
  "@popperjs/core": "2.10.2",
  "@vueform/multiselect": "2.2.0",
  "@vueform/slider": "2.0.5",
  "@vueuse/core": "6.5.3",
  "@vueuse/head": "0.6.0",
  apexcharts: "3.28.3",
  axios: "0.22.0",
  "billboard.js": "3.1.5",
  bulma: "0.9.3",
  "bulma-css-vars": "0.7.0",
  dayjs: "1.10.7",
  dragula: "3.7.3",
  dropzone: "5.9.3",
  filepond: "4.30.3",
  "filepond-plugin-file-validate-size": "2.2.5",
  "filepond-plugin-file-validate-type": "1.2.6",
  "filepond-plugin-image-crop": "2.0.6",
  "filepond-plugin-image-edit": "1.6.3",
  "filepond-plugin-image-exif-orientation": "1.0.11",
  "filepond-plugin-image-preview": "4.6.10",
  "filepond-plugin-image-resize": "2.0.10",
  "filepond-plugin-image-transform": "3.8.7",
  imask: "6.2.2",
  "mapbox-gl": "2.5.0",
  "markdown-it-emoji": "2.0.0",
  notyf: "3.10.0",
  nprogress: "0.2.0",
  photoswipe: "4.1.3",
  pinia: "^2.0.0-rc.11",
  "simple-datatables": "3.1.2",
  simplebar: "6.0.0-beta.10",
  "simplebar-vue": "2.0.0-beta.10",
  "tiny-slider": "2.9.3",
  "tippy.js": "6.3.2",
  tslib: "2.3.1",
  "v-calendar": "3.0.0-alpha.5",
  "vee-validate": "4.5.0-alpha.6",
  vivus: "0.4.6",
  vue: "3.2.19",
  "vue-accessible-color-picker": "3.0.0",
  "vue-i18n": "9.2.0-beta.11",
  "vue-router": "4.0.10",
  "vue-scrollto": "2.20.0",
  "vue-tippy": "6.0.0-alpha.33",
  "vue3-apexcharts": "1.4.1",
  "vue3-persian-datetime-picker": "^1.0.0",
  yup: "0.32.9"
};
const devDependencies = {
  "@commitlint/cli": "13.2.0",
  "@commitlint/config-conventional": "13.2.0",
  "@commitlint/prompt-cli": "13.2.0",
  "@iconify/json": "1.1.410",
  "@intlify/vite-plugin-vue-i18n": "2.4.0",
  "@types/dragula": "3.7.1",
  "@types/mapbox-gl": "2.4.2",
  "@types/mapbox__mapbox-gl-geocoder": "4.7.1",
  "@types/markdown-it": "12.2.1",
  "@types/node": "16.10.2",
  "@types/nprogress": "0.2.0",
  "@types/photoswipe": "4.1.2",
  "@types/prismjs": "1.16.6",
  "@types/simplebar": "5.3.3",
  "@types/vivus": "0.4.4",
  "@typescript-eslint/eslint-plugin": "4.33.0",
  "@typescript-eslint/parser": "4.33.0",
  "@vitejs/plugin-vue": "1.9.3",
  commitlint: "13.2.0",
  "cross-env": "7.0.3",
  cypress: "8.5.0",
  eslint: "7.32.0",
  "eslint-config-prettier": "8.3.0",
  "eslint-plugin-md": "1.0.19",
  "eslint-plugin-vue": "7.19.0",
  "eslint-plugin-vuejs-accessibility": "^0.7.1",
  "gray-matter": "4.0.3",
  "lint-staged": "11.2.0",
  "markdown-it": "12.2.0",
  "markdown-it-anchor": "8.3.1",
  "npm-run-all": "4.1.5",
  plyr: "3.6.8",
  prettier: "2.4.1",
  prismjs: "1.25.0",
  rimraf: "3.0.2",
  rollup: "2.58.0",
  "rollup-plugin-purgecss": "^4.0.3",
  sass: "1.32.13",
  "standard-version": "9.3.1",
  stylelint: "13.13.1",
  "stylelint-config-prettier": "8.0.2",
  "stylelint-config-standard": "22.0.0",
  "stylelint-scss": "3.21.0",
  typescript: "4.4.3",
  "unplugin-vue-components": "0.15.6",
  vite: "2.6.3",
  "vite-imagetools": "4.0.0",
  "vite-plugin-fonts": "0.2.2",
  "vite-plugin-imagemin": "0.4.6",
  "vite-plugin-pages": "0.18.1",
  "vite-plugin-purge-icons": "0.7.0",
  "vite-plugin-pwa": "0.11.3",
  "vite-plugin-radar": "0.2.0",
  "vue-tsc": "0.3.0",
  yorkie: "2.0.0"
};
const packageManager = "yarn@1.22.1";
var packageJson = {
  name,
  version,
  "private": true,
  license,
  author,
  engines,
  gitHooks,
  "lint-staged": {
    "*.ts": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.scss": [
      "stylelint",
      "prettier --write"
    ],
    "*.md": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.vue": [
      "eslint --fix",
      "prettier --write"
    ]
  },
  scripts,
  dependencies,
  devDependencies,
  packageManager
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "landing-page-wrapper" };
const _hoisted_2$1 = {
  id: "vuero-landing",
  class: "hero is-fullheight rounded-hero is-active"
};
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "absolute-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "header-inner" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "cut-circle light-image-l",
      src: _imports_0,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "cut-circle dark-image-l",
      src: _imports_1,
      alt: ""
    })
  ])
], -1);
const _hoisted_4 = { class: "hero-body has-text-centered" };
const _hoisted_5 = { class: "container" };
const _hoisted_6 = { class: "switch-wrapper" };
const _hoisted_7 = { class: "night-toggle night-toggle--daynight" };
const _hoisted_8 = ["checked"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("label", {
  class: "night-toggle--btn",
  for: "night-toggle--daynight"
}, [
  /* @__PURE__ */ createBaseVNode("span", { class: "night-toggle--feature" })
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-1 is-bold is-light is-bold" }, [
  /* @__PURE__ */ createTextVNode(" \u0627\u06CC\u0646 \u062C\u0647\u0627\u0646 \u06CC\u06A9 "),
  /* @__PURE__ */ createBaseVNode("span", null, "\u0648\u06CC\u0648\u0626\u0650\u0631\u0648"),
  /* @__PURE__ */ createTextVNode(" \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u062F. ")
], -1);
const _hoisted_11 = { class: "subtitle is-4 is-light" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" \u06A9\u06CC\u062A \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u067E\u0631\u0645\u06CC\u0648\u0645 \u0628\u0631\u0627\u06CC \u0648\u0628 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627. ");
const _hoisted_13 = { class: "tag is-primary is-rounded" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image-l hero-mockup",
  src: _imports_2$1,
  alt: ""
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image-l hero-mockup",
  src: _imports_3$1,
  alt: ""
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("canvas", { id: "demo-canvas" }, null, -1);
const _hoisted_17 = {
  id: "stacks-section",
  class: "section"
};
const _hoisted_18 = { class: "container" };
const _hoisted_19 = { class: "stacks" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_8,
    alt: ""
  })
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_9$1,
    alt: ""
  })
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_10$1,
    alt: ""
  })
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_11$1,
    alt: ""
  })
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_12$1,
    alt: ""
  })
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"),
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0647\u0645\u0647\u200C\u06CC \u0686\u06CC\u0632\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0644\u0627\u0632\u0645 \u062F\u0627\u0631\u06CC\u062F \u062A\u0627 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0633\u0627\u0632\u06CC\u062F.")
], -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "boxed-features" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex-card light-bordered hover-inset" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-toolbox"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0628\u06CC\u0634 \u0627\u0632 \u06F5\u06F0\u06F0 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u0648\u06CC\u0648"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0628\u0627\u0648\u0631 \u0646\u06A9\u0631\u062F\u0646\u06CC \u0627\u0632 \u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0627\u0632 \u062F\u0627\u0631\u06A9 \u0645\u0648\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-display-alt"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0628\u06CC\u0634 \u0627\u0632 \u06F2\u06F2\u06F0 \u062F\u0645\u0648\u06CC\u200C \u0645\u062A\u0641\u0627\u0648\u062A"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0627 \u062A\u0639\u062F\u0627\u062F \u0632\u06CC\u0627\u062F\u06CC \u062F\u0645\u0648\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u0646\u0627\u0633\u0628\u062A\u0631\u06CC\u0646 \u06AF\u0632\u06CC\u0646\u0647 \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0627\u0631\u062A \u0632\u062F\u0646 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-moon"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0627\u0632 \u062D\u0627\u0644\u062A \u0634\u0628"),
      /* @__PURE__ */ createBaseVNode("p", null, "\u062A\u0645\u0627\u0645 \u0627\u062C\u0632\u0627 \u0648 \u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u0642\u0627\u0644\u0628 \u062D\u0627\u0644\u062A \u0634\u0628 \u0631\u0627 \u062F\u0631 \u062E\u0648\u062F \u062F\u0627\u0631\u0646\u062F.")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered no-border-edge" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-rocket"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0645\u0627 \u0647\u0631 \u0645\u0634\u06A9\u0644 \u06A9\u0648\u0686\u06A9 \u0648 \u0628\u0632\u0631\u06AF\u06CC \u0633\u0631\u06CC\u0639 \u0631\u0641\u0639 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-code"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u06A9\u062F\u0647\u0627\u06CC \u0645\u0631\u062A\u0628 \u0648 \u0645\u0646\u0638\u0645"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u062A\u0639\u062F\u0627\u062F \u06A9\u062F\u0647\u0627\u06CC \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0633\u06CC\u0627\u0631 \u0632\u06CC\u0627\u062F \u0645\u06CC\u200C\u0628\u0627\u0634\u062F \u0627\u0645\u0627 \u0628\u0635\u0648\u0631\u062A \u0633\u0627\u062E\u062A\u0627\u0631\u0645\u0646\u062F \u0648 \u0645\u0646\u0633\u062C\u0645 \u0646\u0648\u0634\u062A\u0647 \u0648 \u0637\u0628\u0642\u0647\u200C\u0628\u0646\u062F\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u062A\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0622\u0646 \u0633\u0647\u0644 \u0628\u0627\u0634\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-plug"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0634\u0645\u0627\u06CC\u0644 \u067E\u0631\u0645\u06CC\u0648\u0645"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u062F\u0631 \u0628\u0627\u0637\u0646 \u062E\u0648\u062F \u0646\u0633\u062E\u0647\u200C\u06CC \u067E\u0631\u0645\u06CC\u0648\u0645 \u0645\u062C\u0645\u0648\u0639\u0647 \u0622\u06CC\u06A9\u0648\u0646\u200C\u0647\u0627\u06CC \u0644\u0627\u06CC\u0646 \u0631\u0627 \u062F\u0627\u0631\u062F (\u06A9\u0647 \u0627\u0631\u0632\u0634 \u0622\u0646 \u06F3\u06F0 \u062F\u0644\u0627\u0631 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F). ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-mobile-alt-2"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u06A9\u0627\u0645\u0644\u0627 \u0631\u06CC\u0633\u067E\u0627\u0646\u0633\u06CC\u0648"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647 \u0628\u0648\u0644\u0645\u0627 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u06A9\u0627\u0645\u0644\u0627 \u06A9\u0646\u0634\u06AF\u0631\u0627 \u0648 \u0645\u0648\u0628\u0627\u06CC\u0644 \u062F\u0648\u0633\u062A \u0645\u06CC\u200C\u0628\u0627\u0634\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell no-border-edge" }, [
      /* @__PURE__ */ createBaseVNode("i", {
        "aria-hidden": "true",
        class: "lnil lnil-file-name"
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062F\u0642\u06CC\u0642"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0648 \u062F\u0642\u06CC\u0642 \u062A\u0627 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u067E\u0631\u0648\u0698\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0633\u0631\u0639\u062A \u067E\u06CC\u0634 \u0628\u0628\u0631\u06CC\u062F. ")
    ])
  ])
], -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "cta-block" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "head-text" }, [
    /* @__PURE__ */ createBaseVNode("h3", null, "\u062E\u0631\u06CC\u062F \u0648\u06CC\u0648\u0626\u0650\u0631\u0648"),
    /* @__PURE__ */ createBaseVNode("p", null, "\u0642\u0627\u0628\u0644 \u062E\u0631\u06CC\u062F \u0627\u0632 \u0631\u0627\u0633\u062A\u200C\u0686\u06CC\u0646")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "head-action" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
      /* @__PURE__ */ createBaseVNode("a", {
        href: "https://www.rtl-theme.com/user-profile/vuero/",
        class: "button v-button is-primary is-rounded is-elevated action-button"
      }, " \u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627 \u0628\u062E\u0631\u06CC\u062F "),
      /* @__PURE__ */ createBaseVNode("a", {
        href: "https://support.vuero.ir",
        class: "button chat-button"
      }, " \u0645\u0634\u0627\u0648\u0631\u0647 \u0642\u0628\u0644 \u062E\u0631\u06CC\u062F ")
    ])
  ])
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "\u062A\u062C\u0631\u0628\u0647\u200C\u0627\u06CC \u0628\u06CC \u0646\u0638\u06CC\u0631 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646"),
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0628\u0632\u0627\u0631 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC.")
], -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "boxed-features is-flat pb-6" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex-card light-bordered hover-inset" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_9,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0648\u06CC\u0648 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0627 \u0648\u06CC\u0648 \u06F3 \u0648 \u0627\u06CC \u067E\u06CC \u0622\u06CC \u062A\u0631\u06A9\u06CC\u0628\u06CC \u0642\u062F\u0631\u062A\u0645\u0646\u062F \u0622\u0646 \u062A\u062C\u0631\u0628\u0647\u200C\u06CC \u062F\u0644\u067E\u0630\u06CC\u0631\u06CC \u062F\u0631 \u0633\u0627\u062E\u062A \u0648 \u062A\u0648\u0633\u0639\u0647\u200C\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u0627\u0634\u062A. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_10,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0627 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0622\u0633\u0627\u0646\u062A\u0631 \u0645\u06CC\u0634\u0648\u062F \u0627\u0645\u0627 \u0627\u06CC\u0646 \u06AF\u0632\u06CC\u0646\u0647 \u0627\u062E\u062A\u06CC\u0627\u0631\u06CC \u0627\u0633\u062A. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_9$1,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "Vite JS"),
      /* @__PURE__ */ createBaseVNode("p", null, "\u0628\u0647 \u06A9\u0645\u06A9 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F2 \u0627\u0632 \u0648\u0627\u06CC\u062A \u0647\u0645\u0647 \u0686\u06CC\u0632 \u062E\u06CC\u0644\u06CC \u0633\u0631\u06CC\u0639 \u0631\u0646\u062F\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F.")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_11,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0648\u06CC\u0648\u0698\u0627\u0644 \u0627\u0633\u062A\u0648\u062F\u06CC\u0648 \u06A9\u062F"),
      /* @__PURE__ */ createBaseVNode("p", null, "\u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0627 \u0648\u06CC\u0698\u0648\u0627\u0644 \u0627\u0633\u062A\u0648\u062F\u06CC\u0648 \u06A9\u062F \u0633\u0627\u0632\u06AF\u0627\u0631\u06CC \u06A9\u0627\u0645\u0644 \u062F\u0627\u0631\u062F.")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_12,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "ES Lint"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0627 ES Lint \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062D\u0627\u0635\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u06A9\u062F \u0634\u0645\u0627 \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F\u200C\u0647\u0627 \u0631\u0627 \u0631\u0639\u0627\u06CC\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell is-bordered" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_13,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "Prettier"),
      /* @__PURE__ */ createBaseVNode("p", null, " Prettier \u06A9\u062F \u0634\u0645\u0627 \u0631\u0627 \u0645\u0631\u062A\u0628 \u06A9\u0631\u062F\u0647 \u0648 \u0628\u0633\u06CC\u0627\u0631 \u0648 \u0645\u0631\u062A\u0628 \u0646\u06AF\u0647 \u0645\u06CC\u200C\u062F\u0627\u0631\u062F \u0648 \u062E\u0648\u0627\u0646\u062F\u0646 \u0622\u0646 \u0631\u0627\u062D\u062A\u200C\u062A\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        class: "light-image-block-l",
        src: _imports_14,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("img", {
        class: "dark-image-block-l",
        src: _imports_15,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "Stylelint"),
      /* @__PURE__ */ createBaseVNode("p", null, " Stylelint \u0627\u0633\u062A\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u0627 \u0641\u0631\u0645\u062A\u200C\u0628\u0646\u062F\u06CC \u0636\u0639\u06CC\u0641 \u0648 \u063A\u06CC\u0631\u0627\u0635\u0648\u0644\u06CC \u0631\u0627 \u062A\u0635\u062D\u06CC\u062D \u0645\u06CC\u200C\u06A9\u0646\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_16,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0622\u06CC\u06A9\u0627\u0646\u06CC\u0641\u0627\u06CC"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0622\u06CC\u06A9\u0627\u0646\u06CC\u0641\u0627\u06CC \u0634\u0645\u0627\u06CC\u0644 \u0648 \u0622\u06CC\u06A9\u0648\u0646\u200C\u0647\u0627 \u0631\u0627 \u062F\u0631 \u0648\u06CC\u0631\u0627\u06CC\u0634\u06AF\u0631 \u06A9\u062F \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F \u0648 \u0634\u0645\u0627 \u0647\u0645\u06CC\u0634\u0647 \u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u062F \u06A9\u0647 \u0686\u0647 \u0686\u06CC\u0632\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_17,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "Cypress"),
      /* @__PURE__ */ createBaseVNode("p", null, " Cypress \u0622\u0632\u0645\u0648\u0646 \u06A9\u062F \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u062F\u0647\u062F \u062A\u0627 \u0627\u0632 \u0635\u062D\u062A \u0639\u0645\u0644\u06A9\u0631\u062F \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062D\u0627\u0635\u0644 \u0634\u0648\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_18,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "Pnpm + Yarn"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u062E\u0648\u0628\u06CC \u0628\u0627 Pnpm \u0648 Yarn \u062A\u0637\u0627\u0628\u0642 \u062F\u0627\u0631\u062F \u0648 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0622\u0645\u062F\u06CC \u0628\u0631\u0627\u06CC \u0645\u0627\u0698\u0648\u0644\u200C\u0647\u0627 \u062F\u0627\u0631\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_19,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u062F\u0627\u06A9\u0631"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0648\u06CC\u0648\u0626\u0648\u0631 \u0647\u0645\u0631\u0627\u0647 \u062E\u0648\u062F \u0641\u0627\u06CC\u0644 \u062F\u0627\u06A9\u0631 \u0647\u0645 \u062F\u0627\u0631\u062F \u062A\u0627 \u062F\u067E\u0644\u0648\u0647\u0627 \u0622\u0633\u0627\u0646\u062A\u0631 \u0648 \u0633\u0631\u06CC\u0639\u062A\u0631 \u0635\u0648\u0631\u062A \u06AF\u06CC\u0631\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_20,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u062F\u0648\u0633\u062A\u200C\u062F\u0627\u0631 \u0633\u0626\u0648"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0628\u0647 \u0637\u0648\u0631 \u06A9\u0627\u0645\u0644 \u0628\u0627 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0633\u0627\u062E\u062A\u0627\u0631 \u06CC\u0627\u0641\u062A\u0647 \u062A\u0646\u0638\u06CC\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A \u062A\u0627 \u0646\u0645\u0627\u06CC\u0634 \u0633\u0627\u06CC\u062A \u0634\u0645\u0627 \u062F\u0631 \u0645\u0648\u062A\u0648\u0631\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648 \u0628\u0647\u062A\u0631 \u0635\u0648\u0631\u062A \u06AF\u06CC\u0631\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_21,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC Props"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0647\u200C\u06CC \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u0645\u06CC\u200C\u0634\u0648\u0646\u062F \u062A\u0627 \u0627\u0632 \u062E\u0637\u0627\u0647\u0627\u06CC \u063A\u06CC\u0631 \u0645\u0646\u062A\u0638\u0631\u0647 \u062C\u0644\u0648\u06AF\u06CC\u0631\u06CC \u0634\u0648\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_22,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062E\u0637\u0627"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u062F\u0631 \u0632\u0645\u0627\u0646 \u062A\u0648\u0633\u0639\u0647\u200C\u06CC \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0628\u0647 \u0645\u0646\u0638\u0648\u0631 \u0645\u062F\u06CC\u0631\u06CC\u062A \u062E\u0637\u0627 \u0631\u0639\u0627\u06CC\u062A \u06AF\u0631\u062F\u06CC\u062F\u0647 \u0627\u0633\u062A. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_23,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u067E\u0648\u0634\u0647\u200C\u0628\u0646\u062F\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0633\u0627\u062E\u062A\u0627\u0631 \u062A\u0645\u06CC\u0632 \u0648 \u0633\u0627\u0632\u0645\u0627\u0646 \u06CC\u0627\u0641\u062A\u0647 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0645\u06A9\u0627\u0646 \u0645\u06CC \u062F\u0647\u062F \u0647\u0631 \u0641\u0627\u06CC\u0644 \u06CC\u0627 \u0645\u062D\u062A\u0648\u0627\u06CC\u06CC \u0631\u0627 \u0628\u0647 \u0633\u0631\u0639\u062A \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "flex-cell" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_24,
        alt: ""
      }),
      /* @__PURE__ */ createBaseVNode("h3", null, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627"),
      /* @__PURE__ */ createBaseVNode("p", null, " \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0628\u0631\u0627\u06CC \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0646\u0645\u0648\u0646\u0647\u200C\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 \u062F\u0631 \u062F\u0627\u062E\u0644 \u062E\u0648\u062F \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u06AF\u0646\u062C\u0627\u0646\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
    ])
  ])
], -1);
const _hoisted_30 = { class: "section-title has-text-centered" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "\u0634\u0631\u0648\u0639 \u06A9\u0627\u0631 \u0628\u0627 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("h4", null, " \u0622\u0645\u0648\u0632\u0634 \u0646\u062D\u0648\u0647\u200C\u06CC \u0634\u0631\u0648\u0639 \u06A9\u0627\u0631 \u0628\u0627 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u0645\u0648\u062F\u0647 \u0648 \u0628\u0647 \u0635\u0641\u062D\u0647\u200C\u06CC \u06AF\u0641\u062A\u06AF\u0648\u06CC \u0645\u0627 \u062F\u0631 \u062F\u06CC\u0633\u06A9\u0648\u0631\u062F \u0648 \u06CC\u0627 \u0631\u06CC\u067E\u0648\u06CC \u06AF\u06CC\u062A\u200C\u0647\u0627\u0628 \u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F. ", -1);
const _hoisted_33 = { class: "mt-4" };
const _hoisted_34 = /* @__PURE__ */ createTextVNode(" \u06AF\u0641\u062A\u06AF\u0648\u06CC \u062F\u06CC\u0633\u06A9\u0648\u0631\u062F ");
const _hoisted_35 = /* @__PURE__ */ createTextVNode(" \u0631\u06CC\u067E\u0648\u06CC \u06AF\u06CC\u062A\u200C\u0647\u0627\u0628 ");
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "video-player-container-wrapper mb-6" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "h_iframe-aparat_embed_frame" }, [
    /* @__PURE__ */ createBaseVNode("span", { style: { "display": "block", "padding-top": "57%" } }),
    /* @__PURE__ */ createBaseVNode("iframe", {
      title: "getting started",
      src: "https://www.aparat.com/video/video/embed/videohash/LGbed/vt/frame",
      allowFullScreen: "true",
      webkitallowfullscreen: "true",
      mozallowfullscreen: "true"
    })
  ])
], -1);
const _hoisted_37 = {
  id: "vuero-demos",
  class: "section section-focus"
};
const _hoisted_38 = { class: "container" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "\u062F\u0645\u0648\u0647\u0627\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 \u0648 \u0628\u0631\u062C\u0633\u062A\u0647"),
  /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0646\u0648\u0627\u0639 \u0645\u062E\u062A\u0644\u0641\u06CC \u0627\u0632 \u0635\u0641\u062D\u0627\u062A \u062F\u0645\u0648 \u0631\u0627 \u0645\u0644\u0627\u062D\u0638\u0647 \u0628\u0641\u0631\u0645\u0627\u0626\u06CC\u062F.")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "section" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "container" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered" }, [
      /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "\u0645\u062D\u0635\u0648\u0644\u06CC \u0631\u062F\u0647 \u0628\u0627\u0644\u0627"),
      /* @__PURE__ */ createBaseVNode("h4", null, "\u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0627 \u062F\u0642\u062A \u0628\u0627\u0644\u0627 \u0648 \u0628\u0627 \u06A9\u06CC\u0641\u06CC\u062A \u0639\u0627\u0644\u06CC \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A.")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          class: "light-image-l featured-image",
          src: _imports_25,
          alt: ""
        }),
        /* @__PURE__ */ createBaseVNode("img", {
          class: "dark-image-l featured-image",
          src: _imports_26,
          alt: ""
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-5" }, [
        /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 "),
        /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0627 \u062F\u0642\u062A \u0637\u0631\u0627\u062D\u06CC \u0648 \u062A\u0648\u0633\u0639\u0647 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A \u0648 \u06CC\u06A9\u06CC \u0627\u0632 \u0628\u0647\u062A\u0631\u06CC\u0646\u200C\u0647\u0627\u06CC\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0628\u0627\u0632\u0627\u0631 \u067E\u06CC\u062F\u0627 \u062E\u0648\u0627\u0647\u06CC\u062F \u06A9\u0631\u062F. \u0638\u0627\u0647\u0631 \u0642\u062F\u0631\u062A\u0645\u0646\u062F \u0648 \u0645\u0627\u0698\u0648\u0644\u0627\u0631 \u0628\u0648\u062F\u0646 \u0622\u0646 \u0628\u0647 \u0634\u0645\u0627 \u0627\u06CC\u0646 \u0627\u0645\u06A9\u0627\u0646 \u0631\u0627 \u0645\u06CC\u200C\u062F\u0647\u062F \u06A9\u0647 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u0631\u0627 \u0628\u0633\u0627\u0632\u06CC\u062F. ")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered h-hidden-desktop h-hidden-tablet-p" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          class: "light-image-l featured-image",
          src: _imports_2,
          alt: ""
        }),
        /* @__PURE__ */ createBaseVNode("img", {
          class: "dark-image-l featured-image",
          src: _imports_3,
          alt: ""
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-5 is-offset-1" }, [
        /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " \u0648\u06A9\u062A\u0648\u0631\u200C\u0647\u0627\u06CC \u0634\u06CC\u06A9 "),
        /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u062A\u0635\u0627\u0648\u06CC\u0631 \u062F\u0631 \u0641\u0631\u0645\u062A SVG \u062F\u0627\u0631\u062F \u06A9\u0647 \u062F\u0631 \u062F\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 \u0622\u0645\u0627\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F \u0648 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u062F\u0631 \u062C\u0627\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u0648\u0646\u062F. ")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered h-hidden-mobile" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          class: "light-image-l featured-image",
          src: _imports_2,
          alt: ""
        }),
        /* @__PURE__ */ createBaseVNode("img", {
          class: "dark-image-l featured-image",
          src: _imports_3,
          alt: ""
        })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          class: "light-image-l featured-image",
          src: _imports_4,
          alt: ""
        }),
        /* @__PURE__ */ createBaseVNode("img", {
          class: "dark-image-l featured-image",
          src: _imports_5,
          alt: ""
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "column is-5" }, [
        /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0627 \u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0642\u06CC\u0642 "),
        /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0627 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u062E\u0648\u062F \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u0628\u0648\u0633\u06CC\u0644\u0647\u200C\u06CC \u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647\u200C\u06CC \u0628\u0648\u0644\u0645\u0627 \u062A\u0648\u0633\u0639\u0647 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F. \u0647\u0631 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u0628\u0627 \u062F\u0642\u062A \u0628\u0627\u0644\u0627 \u0633\u0627\u062E\u062A\u0647 \u0648 \u067E\u0631\u062F\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A \u0648 \u0630\u0627\u062A\u0627 \u0627\u0632 \u062D\u0627\u0644\u062A \u062F\u0627\u0631\u06A9 \u0645\u0648\u062F \u06CC\u0627 \u0647\u0645\u0627\u0646 \u062D\u0627\u0644\u062A \u0634\u0628 \u067E\u0634\u06CC\u0628\u0627\u0646\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. ")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "cta-block no-border" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "head-text" }, [
        /* @__PURE__ */ createBaseVNode("h3", null, "\u0646\u06CC\u0627\u0632 \u0628\u0647 \u0631\u0627\u0647\u0646\u0645\u0627\u06CC\u06CC \u0648 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0627\u0631\u06CC\u062F\u061F"),
        /* @__PURE__ */ createBaseVNode("p", null, "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0631\u0627 \u0628\u0628\u06CC\u0646\u06CC\u062F")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "head-action" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, [
          /* @__PURE__ */ createBaseVNode("a", {
            href: "https://docs.vuero.ir",
            class: "button v-button is-primary is-rounded is-elevated action-button"
          }, " \u0645\u0637\u0627\u0644\u0639\u0647\u200C\u06CC \u0631\u0627\u0647\u0646\u0645\u0627 "),
          /* @__PURE__ */ createBaseVNode("a", {
            href: "https://support.vuero.ir",
            class: "button chat-button is-secondary"
          }, " \u0645\u0634\u0627\u0648\u0631\u0647 \u0628\u0627 \u0645\u0627 ")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_41 = {
  id: "vuero-components",
  class: "section section-focus"
};
const _hoisted_42 = { class: "container" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 is-offset-3 has-text-centered" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered p-b-40" }, [
      /* @__PURE__ */ createBaseVNode("h2", { class: "title is-3" }, "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u0628\u0627 \u0642\u0627\u0628\u0644\u06CC\u062A \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u062C\u062F\u062F"),
      /* @__PURE__ */ createBaseVNode("h4", null, "\u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0628\u0637\u0646 \u062E\u0648\u062F \u062F\u0627\u0631\u062F.")
    ])
  ])
], -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered component-features is-flex-tablet-p" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "media-flex" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "right-icon" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-construction"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "flex-meta" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "\u0645\u0627\u0698\u0648\u0644\u0627\u0631"),
        /* @__PURE__ */ createBaseVNode("p", null, " \u0633\u0627\u062E\u062A\u0627\u0631 \u0648 \u062A\u0631\u06A9\u06CC\u0628 \u0627\u0633\u062A\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u062F\u0631 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0647 \u0644\u0637\u0641 sass \u0645\u0627\u0698\u0648\u0644\u0627\u0631 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F \u0648 \u0647\u0631 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u0627\u0633\u062A\u0627\u06CC\u0644 \u0645\u062E\u062A\u0635 \u0628\u0647 \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u062C\u062F\u0627\u06AF\u0627\u0646\u0647 \u062F\u0627\u0631\u062F. ")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "media-flex" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "right-icon" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-code"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "flex-meta" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "\u0646\u0645\u0648\u0646\u0647\u200C\u0647\u0627\u06CC \u06A9\u062F"),
        /* @__PURE__ */ createBaseVNode("p", null, " \u0686\u0646\u062F\u06CC\u0646 \u0646\u0645\u0648\u0646\u0647 \u0627\u0632 \u06A9\u062F\u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u062D\u06CC\u0627 \u06AF\u0631\u062F\u06CC\u062F\u0647 \u0627\u0633\u062A \u062A\u0627 \u0637\u0631\u0627\u062D\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627 \u0631\u0627\u062D\u062A \u0635\u0648\u0631\u062A \u06AF\u06CC\u0631\u062F. ")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "media-flex" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "right-icon" }, [
        /* @__PURE__ */ createBaseVNode("i", {
          "aria-hidden": "true",
          class: "lnil lnil-color-palette"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "flex-meta" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u0633\u062A\u0627\u06CC\u0644\u200C\u0628\u0646\u062F\u06CC \u0631\u0627\u062D\u062A \u0648 \u0622\u0633\u0627\u0646"),
        /* @__PURE__ */ createBaseVNode("p", null, " \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u06A9\u0644\u0627\u0633\u200C\u0647\u0627\u06CC \u0633\u06CC \u0627\u0633 \u0627\u0633 \u0628\u0631\u0627\u062D\u062A\u06CC \u0642\u0627\u0628\u0644\u06CC\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0631\u0646\u06AF \u0648 \u0627\u0633\u062A\u0627\u06CC\u0644 \u0631\u0648 \u062F\u0627\u0631\u0646\u062F \u0648 \u0628\u0627 \u06A9\u0644\u0627\u0633\u200C\u0647\u0627 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0646\u0648\u0634\u062A\u0646 \u06A9\u062F \u0632\u06CC\u0627\u062F\u06CC \u0646\u06CC\u0633\u062A. ")
      ])
    ])
  ])
], -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", { class: "p-t-40 p-b-40 has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://www.rtl-theme.com/user-profile/vuero/",
    class: "button v-button is-rounded is-primary is-elevated is-bold is-huge"
  }, " \u0647\u0645\u06CC\u0646 \u0627\u0644\u0627\u0646 \u062E\u0631\u06CC\u062F \u06A9\u0646\u06CC\u062F ")
], -1);
const _hoisted_46 = { class: "vuero-components p-t-40 p-b-60" };
const _hoisted_47 = { class: "vertical-tabs-wrapper" };
const _hoisted_48 = { class: "tabs" };
const _hoisted_49 = { class: "content-wrap" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("div", { class: "section" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "container" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered pt-40" }, [
      /* @__PURE__ */ createBaseVNode("h2", { class: "title is-3" }, " \u06F3 \u062F\u0644\u06CC\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u06A9\u0647 \u0628\u0627\u06CC\u062F \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0631\u0627 \u0633\u0641\u0627\u0631\u0634 \u062F\u0647\u06CC\u062F "),
      /* @__PURE__ */ createBaseVNode("h4", null, "\u0627\u06AF\u0631 \u0647\u0646\u0648\u0632 \u0645\u0631\u062F\u062F \u0647\u0633\u062A\u06CC\u062F \u0627\u06CC\u0646 \u0633\u0647 \u0648\u06CC\u0698\u06AF\u06CC \u062F\u06CC\u06AF\u0631 \u0631\u0627 \u0647\u0645 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F.")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "customers-choice p-t-40 p-b-40" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-5 is-offset-1 has-text-centered" }, [
          /* @__PURE__ */ createBaseVNode("img", {
            class: "light-image-l featured-image",
            src: _imports_31,
            alt: ""
          }),
          /* @__PURE__ */ createBaseVNode("img", {
            class: "dark-image-l featured-image",
            src: _imports_32,
            alt: ""
          })
        ]),
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-5" }, [
          /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " \u062D\u0631\u0641\u0647\u200C\u0627\u06CC "),
          /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0645\u062D\u0635\u0648\u0644\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0627\u0633\u062A. \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0648\u0628 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0628\u0627 \u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646 \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F\u0647\u0627 \u0648 \u06A9\u06CC\u0641\u06CC\u062A \u0628\u0627\u0644\u0627 \u0627\u0631\u0627\u0626\u0647 \u06AF\u0631\u062F\u06CC\u062F\u0647 \u0627\u0633\u062A. \u0648 \u0647\u0645\u0647\u200C\u06CC \u0627\u0628\u0632\u0627\u0631 \u0644\u0627\u0632\u0645 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0686\u0646\u06CC\u0646 \u0648\u0628\u200C\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u06CC \u0631\u0627 \u062F\u0631 \u062E\u0648\u062F \u062F\u0627\u0631\u062F. ")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-5 has-text-centered h-hidden-desktop h-hidden-tablet-p" }, [
          /* @__PURE__ */ createBaseVNode("img", {
            class: "light-image-l featured-image",
            src: _imports_33,
            alt: ""
          }),
          /* @__PURE__ */ createBaseVNode("img", {
            class: "dark-image-l featured-image",
            src: _imports_34,
            alt: ""
          })
        ]),
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-5 is-offset-1" }, [
          /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " \u062A\u0648\u0633\u0639\u0647\u200C\u06CC \u0633\u0631\u06CC\u0639 "),
          /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u062F\u0631 \u0628\u0637\u0646 \u062E\u0648\u062F Vitejs \u0631\u0627 \u062F\u0627\u0631\u062F \u06A9\u0647 \u0633\u0631\u0639\u062A \u067E\u06CC\u0634\u0628\u0631\u062F \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0627\u0644\u0627 \u0645\u06CC\u200C\u0628\u0631\u062F. \u0648\u0627\u06CC\u062A\u200C\u062C\u06CC\u200C\u0627\u0633 \u06A9\u0627\u0645\u067E\u0627\u06CC\u0644 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0648\u06CC\u0648\u060C \u0627\u0633\u062A\u0627\u06CC\u0644\u200C\u0647\u0627 \u0648 \u062A\u0627\u06CC\u067E \u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0631\u0627 \u0628\u0631 \u0639\u0647\u062F\u0647 \u062F\u0627\u0631\u062F \u0648 \u0628\u0627 \u0647\u0631 \u062A\u063A\u06CC\u06CC\u0631 \u0634\u0645\u0627 \u0635\u0641\u062D\u0647\u200C\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u062E\u0648\u062F\u06A9\u0627\u0631 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F. ")
        ]),
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-5 has-text-centered h-hidden-mobile" }, [
          /* @__PURE__ */ createBaseVNode("img", {
            class: "light-image-l featured-image",
            src: _imports_33,
            alt: ""
          }),
          /* @__PURE__ */ createBaseVNode("img", {
            class: "dark-image-l featured-image",
            src: _imports_34,
            alt: ""
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-5 is-offset-1 has-text-centered" }, [
          /* @__PURE__ */ createBaseVNode("img", {
            class: "light-image-l featured-image",
            src: _imports_35,
            alt: ""
          }),
          /* @__PURE__ */ createBaseVNode("img", {
            class: "dark-image-l featured-image",
            src: _imports_36,
            alt: ""
          })
        ]),
        /* @__PURE__ */ createBaseVNode("div", { class: "column is-5" }, [
          /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0647\u0645\u0647 \u062C\u0627\u0646\u0628\u0647 "),
          /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u062F\u0631 \u062A\u0645\u0627\u0645 \u0645\u062F\u062A \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0628\u0647\u062A\u0631\u06CC\u0646 \u062F\u0648\u0633\u062A \u0634\u0645\u0627 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F \u0686\u0631\u0627 \u06A9\u0647 \u0627\u06CC\u0646 \u0642\u0627\u0644\u0628 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0632\u0631\u06AF \u0648 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0627\u0631\u062F \u0648 \u0642\u0637\u0639\u0627\u064B \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0631\u0627\u0647\u0646\u0645\u0627\u06CC\u06CC \u062F\u0642\u06CC\u0642 \u0647\u0633\u062A \u062A\u0627 \u0627\u0632 \u0639\u0645\u0644\u06A9\u0631\u062F \u0647\u0645\u0647\u200C\u06CC \u0622\u0646\u0647\u0627 \u0633\u0631\u062F\u0631 \u0628\u06CC\u0627\u0648\u0631\u06CC\u062F. \u062D\u062A\u06CC \u0627\u06AF\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0645\u0628\u062A\u062F\u06CC \u0647\u0645 \u0628\u0627\u0634\u06CC\u062F \u0628\u0627 \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0648\u06CC\u0648\u0626\u0650\u0631\u0648 \u0647\u0645\u0647\u200C\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u0627\u0632\u0645 \u0628\u0631\u0627\u06CC \u06CC\u06A9 \u0634\u0631\u0648\u0639 \u0628\u06CC\u200C\u0646\u0638\u06CC\u0631 \u062F\u0631 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0634\u0645\u0627 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. ")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "cta-wrapper" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "cta-title" }, [
        /* @__PURE__ */ createBaseVNode("h3", null, "\u0627\u0632 \u0633\u0627\u06CC\u062A \u0631\u0627\u0633\u062A \u0686\u06CC\u0646 \u0633\u0641\u0627\u0631\u0634 \u0628\u062F\u0647\u06CC\u062F"),
        /* @__PURE__ */ createBaseVNode("a", {
          href: "https://www.rtl-theme.com/user-profile/vuero/",
          class: "custom-button"
        }, [
          /* @__PURE__ */ createBaseVNode("img", {
            src: _imports_37,
            alt: ""
          }),
          /* @__PURE__ */ createBaseVNode("span", null, "\u0647\u0645\u06CC\u0646 \u0627\u0644\u0627\u0646 \u062E\u0631\u06CC\u062F \u0628\u0632\u0646\u06CC\u062F")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { id: "backtotop" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    "aria-label": "back to top"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-angle-up"
    })
  ])
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const activeTab = ref("elements");
    useHead({
      title: "\u0648\u06CC\u0648\u0626\u0650\u0631\u0648 - \u06A9\u0627\u0645\u0644\u062A\u0631\u06CC\u0646 \u0633\u06CC\u0633\u062A\u0645 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0628\u0627 \u0648\u06CC\u0648 \u0646\u0633\u062E\u0647\u200C\u06CC \u06F3"
    });
    return (_ctx, _cache) => {
      const _component_LandingNavigation = _sfc_main$d;
      const _component_StackPopoverContent = _sfc_main$c;
      const _component_tippy = resolveComponent("tippy");
      const _component_VButton = _sfc_main$e;
      const _component_VButtons = _sfc_main$b;
      const _component_LandingDemos = __unplugin_components_4;
      const _component_LandingComponents = _sfc_main$5;
      const _component_LandingFooter = __unplugin_components_8;
      const _component_MinimalLayout = _sfc_main$3;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_component_MinimalLayout, { theme: "light" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_LandingNavigation),
              _hoisted_3$1,
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("input", {
                        id: "night-toggle--daynight",
                        type: "checkbox",
                        class: "night-toggle--checkbox",
                        checked: !unref(isDark),
                        "aria-label": "Toggle dark mode",
                        onChange: _cache[0] || (_cache[0] = (...args) => unref(toggleDarkModeHandler) && unref(toggleDarkModeHandler)(...args))
                      }, null, 40, _hoisted_8),
                      _hoisted_9
                    ])
                  ]),
                  _hoisted_10,
                  createBaseVNode("h3", _hoisted_11, [
                    _hoisted_12,
                    createBaseVNode("span", _hoisted_13, toDisplayString(unref(packageJson).version), 1)
                  ]),
                  _hoisted_14,
                  _hoisted_15
                ])
              ]),
              _hoisted_16
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "top"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_StackPopoverContent, { stack: {
                        name: "Vue 3",
                        subtitle: "Composition API",
                        logo: "/images/icons/stacks/vuejs.svg",
                        description: "The Progressive JavaScript Framework for building user interfaces.",
                        homepage: "https://v3.vuejs.org/",
                        github: "https://github.com/vuejs/vue-next"
                      } }, null, 8, ["stack"])
                    ]),
                    default: withCtx(() => [
                      _hoisted_20
                    ]),
                    _: 1
                  }),
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "top"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_StackPopoverContent, { stack: {
                        name: "Vite",
                        subtitle: "Next Generation Frontend Tooling",
                        logo: "/images/icons/stacks/vite.svg",
                        description: "Vite is a new breed of frontend build tool that significantly improves the frontend development experience.",
                        homepage: "https://vitejs.dev/",
                        github: "https://github.com/vitejs/vite"
                      } }, null, 8, ["stack"])
                    ]),
                    default: withCtx(() => [
                      _hoisted_21
                    ]),
                    _: 1
                  }),
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "top"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_StackPopoverContent, { stack: {
                        name: "Bulma",
                        subtitle: "The modern CSS framework",
                        logo: "/images/icons/stacks/bulma.svg",
                        description: "Bulma is a free, open source framework that provides ready-to-use frontend components.",
                        homepage: "https://bulma.io/",
                        github: "https://github.com/jgthms/bulma"
                      } }, null, 8, ["stack"])
                    ]),
                    default: withCtx(() => [
                      _hoisted_22
                    ]),
                    _: 1
                  }),
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "top"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_StackPopoverContent, { stack: {
                        name: "Sass",
                        subtitle: "Makes CSS fun again",
                        logo: "/images/icons/stacks/sass.svg",
                        description: "Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.",
                        homepage: "https://sass-lang.com/",
                        github: "https://github.com/sass/sass"
                      } }, null, 8, ["stack"])
                    ]),
                    default: withCtx(() => [
                      _hoisted_23
                    ]),
                    _: 1
                  }),
                  createVNode(_component_tippy, {
                    class: "has-help-cursor",
                    interactive: "",
                    placement: "top"
                  }, {
                    content: withCtx(() => [
                      createVNode(_component_StackPopoverContent, { stack: {
                        name: "Typescript",
                        subtitle: "Javascript enhanced",
                        logo: "/images/icons/stacks/typescript.svg",
                        description: "TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications.",
                        homepage: "https://www.typescriptlang.org/",
                        github: "https://github.com/microsoft/TypeScript"
                      } }, null, 8, ["stack"])
                    ]),
                    default: withCtx(() => [
                      _hoisted_24
                    ]),
                    _: 1
                  })
                ]),
                _hoisted_25,
                _hoisted_26,
                _hoisted_27,
                _hoisted_28,
                _hoisted_29,
                createBaseVNode("div", _hoisted_30, [
                  _hoisted_31,
                  _hoisted_32,
                  createBaseVNode("div", _hoisted_33, [
                    createVNode(_component_VButtons, { align: "centered" }, {
                      default: withCtx(() => [
                        createVNode(_component_VButton, {
                          href: "https://discord.gg/v2WR6ZvkQ4",
                          icon: "fa-brands:discord",
                          "dark-outlined": "",
                          raised: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_34
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode(_component_VButton, {
                          icon: "fa-brands:github",
                          style: { "cursor": "help" },
                          "dark-outlined": "",
                          raised: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_35
                          ]),
                          _: 1
                        }, 512), [
                          [
                            _directive_tooltip,
                            "\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u062F\u0631 \u06AF\u06CC\u062A\u0647\u0627\u0628 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0645\u0627 \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0628\u0641\u0631\u0633\u062A\u06CC\u062F https://support.vuero.ir",
                            void 0,
                            {
                              top: true,
                              rounded: true
                            }
                          ]
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _hoisted_36
              ])
            ]),
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("div", _hoisted_38, [
                _hoisted_39,
                createVNode(_component_LandingDemos)
              ])
            ]),
            _hoisted_40,
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("div", _hoisted_42, [
                _hoisted_43,
                _hoisted_44,
                _hoisted_45,
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    createBaseVNode("div", _hoisted_48, [
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", {
                          class: normalizeClass([activeTab.value === "elements" && "is-active"])
                        }, [
                          createBaseVNode("a", {
                            onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "elements")
                          }, "\u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627")
                        ], 2),
                        createBaseVNode("li", {
                          class: normalizeClass([activeTab.value === "components" && "is-active"])
                        }, [
                          createBaseVNode("a", {
                            onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "components")
                          }, "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627")
                        ], 2),
                        createBaseVNode("li", {
                          class: normalizeClass([activeTab.value === "forms" && "is-active"])
                        }, [
                          createBaseVNode("a", {
                            onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "forms")
                          }, "\u0641\u0631\u0645\u200C\u0647\u0627")
                        ], 2),
                        createBaseVNode("li", {
                          class: normalizeClass([activeTab.value === "plugins" && "is-active"])
                        }, [
                          createBaseVNode("a", {
                            onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "plugins")
                          }, "\u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627")
                        ], 2)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_49, [
                      createVNode(_component_LandingComponents, { "active-tab": activeTab.value }, null, 8, ["active-tab"])
                    ])
                  ])
                ])
              ])
            ]),
            _hoisted_50,
            createVNode(_component_LandingFooter),
            _hoisted_51
          ])
        ]),
        _: 1
      });
    };
  }
});
const routes = [{ "name": "wizard-v1", "path": "/wizard-v1", "component": () => __vitePreload(() => import("./wizard-v1.3fdb7390.js"), true ? ["assets/wizard-v1.3fdb7390.js","assets/wizard-v1.480e0782.css","assets/vuero-1.6816f54f.js","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VFilePond.8a36efa7.js","assets/VFilePond.746fdb72.css","assets/VAvatar.879e77ac.js","assets/VIconButton.809a4ce6.js","assets/VBlock.47e0c633.js","assets/VIconBox.e1985867.js","assets/VLoader.b9c7fe8c.js"] : void 0), "props": true }, { "name": "status", "path": "/status", "component": () => __vitePreload(() => import("./status.c2b6117e.js"), true ? ["assets/status.c2b6117e.js","assets/status.3689e317.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js"] : void 0), "props": true }, { "name": "sidebar-blank-page-7", "path": "/sidebar-blank-page-7", "component": () => __vitePreload(() => import("./sidebar-blank-page-7.fc8ca9e3.js"), true ? ["assets/sidebar-blank-page-7.fc8ca9e3.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "props": true }, { "name": "sidebar-blank-page-6", "path": "/sidebar-blank-page-6", "component": () => __vitePreload(() => import("./sidebar-blank-page-6.b0af669a.js"), true ? ["assets/sidebar-blank-page-6.b0af669a.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "props": true }, { "name": "sidebar-blank-page-5", "path": "/sidebar-blank-page-5", "component": () => __vitePreload(() => import("./sidebar-blank-page-5.9b0bf519.js"), true ? ["assets/sidebar-blank-page-5.9b0bf519.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "props": true }, { "name": "sidebar-blank-page-4", "path": "/sidebar-blank-page-4", "component": () => __vitePreload(() => import("./sidebar-blank-page-4.1e9e37dd.js"), true ? ["assets/sidebar-blank-page-4.1e9e37dd.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "props": true }, { "name": "sidebar-blank-page-3", "path": "/sidebar-blank-page-3", "component": () => __vitePreload(() => import("./sidebar-blank-page-3.9d3ee481.js"), true ? ["assets/sidebar-blank-page-3.9d3ee481.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "props": true }, { "name": "sidebar-blank-page-2", "path": "/sidebar-blank-page-2", "component": () => __vitePreload(() => import("./sidebar-blank-page-2.b53723b6.js"), true ? ["assets/sidebar-blank-page-2.b53723b6.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "props": true }, { "name": "sidebar-blank-page-1", "path": "/sidebar-blank-page-1", "component": () => __vitePreload(() => import("./sidebar-blank-page-1.b4cb19a7.js"), true ? ["assets/sidebar-blank-page-1.b4cb19a7.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "props": true }, { "path": "/sidebar", "component": () => __vitePreload(() => import("./sidebar.3982aac1.js"), true ? ["assets/sidebar.3982aac1.js","assets/vendor.9ec557a4.js"] : void 0), "children": [{ "path": "dashboards", "component": () => __vitePreload(() => import("./dashboards.b369a477.js"), true ? ["assets/dashboards.b369a477.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "children": [{ "name": "sidebar-dashboards-analytics", "path": "analytics", "component": () => __vitePreload(() => import("./analytics.33724919.js"), true ? ["assets/analytics.33724919.js","assets/AnalyticsDashboard.fcb4b9f4.js","assets/AnalyticsDashboard.89986b95.css","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/VProgress.21a77a58.js","assets/ContactWidget.5dbccff2.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarFollowers.a6e79b07.js","assets/VAvatarStack.8507ceb8.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/notificationList.38da1c50.js","assets/VTag.ff081b8f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/followers.d693ba3c.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-banking-1", "path": "banking-1", "component": () => __vitePreload(() => import("./banking-1.cd5ef768.js"), true ? ["assets/banking-1.cd5ef768.js","assets/BankingDashboardV1.06fe2c78.js","assets/BankingDashboardV1.aba86620.css","assets/GraphDropdown.bd15ab94.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/VProgress.21a77a58.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UserPopoverContent.8933a73e.js","assets/vue3-apexcharts.common.236dfc44.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-banking-2", "path": "banking-2", "component": () => __vitePreload(() => import("./banking-2.11673f43.js"), true ? ["assets/banking-2.11673f43.js","assets/BankingDashboardV2.c7afbf10.js","assets/BankingDashboardV2.fc8551cf.css","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/tiny-slider.3c41456c.js","assets/vue3-apexcharts.common.236dfc44.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-banking-3", "path": "banking-3", "component": () => __vitePreload(() => import("./banking-3.87a64af5.js"), true ? ["assets/banking-3.87a64af5.js","assets/BankingDashboardV3.b88d32f1.js","assets/BankingDashboardV3.b60cb0c7.css","assets/VAction.3f8056c0.js","assets/vendor.9ec557a4.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/GraphDropdown.bd15ab94.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/VIconButton.809a4ce6.js","assets/vue3-apexcharts.common.236dfc44.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-charts-apex", "path": "charts-apex", "component": () => __vitePreload(() => import("./charts-apex.5530fd20.js"), true ? ["assets/charts-apex.5530fd20.js","assets/ApexDashboard.86717054.js","assets/dayjs.min.9071635e.js","assets/vendor.9ec557a4.js","assets/apex-formatters.f9949b74.js","assets/vue3-apexcharts.common.236dfc44.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-charts-billboardsjs", "path": "charts-billboardsjs", "component": () => __vitePreload(() => import("./charts-billboardsjs.f3bd6783.js"), true ? ["assets/charts-billboardsjs.f3bd6783.js","assets/BillboardJsDashboard.0d8702d1.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/vendor.9ec557a4.js","assets/splineSimple.1e5809e8.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-company", "path": "company", "component": () => __vitePreload(() => import("./company.9a7a4467.js"), true ? ["assets/company.9a7a4467.js","assets/CompanyDashboard.e9797e63.js","assets/CompanyDashboard.326d1cff.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidget.2cde634f.js","assets/UserPopoverContent.8933a73e.js","assets/VBlock.47e0c633.js","assets/vue3-apexcharts.common.236dfc44.js","assets/personalScoreGauge.e2e4f134.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-course", "path": "course", "component": () => __vitePreload(() => import("./course.a9db2c91.js"), true ? ["assets/course.a9db2c91.js","assets/CourseDashboard.63574194.js","assets/CourseDashboard.b7a03186.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/FileTileDropdown.1f6be241.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-ecommerce-1", "path": "ecommerce-1", "component": () => __vitePreload(() => import("./ecommerce-1.cbb29a7a.js"), true ? ["assets/ecommerce-1.cbb29a7a.js","assets/EcommerceDashboardV1.f5648646.js","assets/EcommerceDashboardV1.cd623fda.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VTag.ff081b8f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/apex-formatters.f9949b74.js","assets/dayjs.min.9071635e.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-flights", "path": "flights", "component": () => __vitePreload(() => import("./flights.d0d61688.js"), true ? ["assets/flights.d0d61688.js","assets/FlightsDashboard.989c75cb.js","assets/FlightsDashboard.bbce573a.css","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/company1.9158e69f.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-food-delivery", "path": "food-delivery", "component": () => __vitePreload(() => import("./food-delivery.f94a7a9f.js"), true ? ["assets/food-delivery.f94a7a9f.js","assets/FoodDeliveryApp.94a1860c.js","assets/FoodDeliveryApp.a15484f2.css","assets/VPlaceholderSection.00317a29.js","assets/vendor.9ec557a4.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/IllustrationWidget.7d59da5f.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/ContactWidget.5dbccff2.js","assets/menuList.b8beb818.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/tiny-slider.3c41456c.js","assets/followers.d693ba3c.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-health", "path": "health", "component": () => __vitePreload(() => import("./health.16703f1b.js"), true ? ["assets/health.16703f1b.js","assets/LifestyleDashboardV3.b4a421b3.js","assets/LifestyleDashboardV3.ae693616.css","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidgetToolbarFollowers.a6e79b07.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vue3-apexcharts.common.236dfc44.js","assets/apex-formatters.f9949b74.js","assets/dayjs.min.9071635e.js","assets/personalScoreGauge.e2e4f134.js","assets/followers.d693ba3c.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-hobbies", "path": "hobbies", "component": () => __vitePreload(() => import("./hobbies.c2ff66cd.js"), true ? ["assets/hobbies.c2ff66cd.js","assets/LifestyleDashboardV2.a7f24ea9.js","assets/LifestyleDashboardV2.8ea741bd.css","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconButton.809a4ce6.js","assets/VBlock.47e0c633.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/ListWidgetSingle.7cc0502b.js","assets/VIconBox.e1985867.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-human-ressources", "path": "human-ressources", "component": () => __vitePreload(() => import("./human-ressources.0a33427d.js"), true ? ["assets/human-ressources.0a33427d.js","assets/HumanRessourcesDashboard.f9653f4c.js","assets/HumanRessourcesDashboard.e3d1ee54.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VTag.ff081b8f.js","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/todoList.5ea85247.js","assets/VAnimatedCheckbox.66f6b6bf.js","assets/VAnimatedCheckbox.6f9cd046.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards", "path": "", "component": () => __vitePreload(() => import("./index.e6505679.js"), true ? ["assets/index.e6505679.js","assets/PersonalDashboardV1.d8c8210a.js","assets/PersonalDashboardV1.ed19ba80.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/vue3-apexcharts.common.236dfc44.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-influencer", "path": "influencer", "component": () => __vitePreload(() => import("./influencer.b48c22e2.js"), true ? ["assets/influencer.b48c22e2.js","assets/LifestyleDashboardV1.f4714dea.js","assets/LifestyleDashboardV1.a9d31c20.css","assets/VTag.ff081b8f.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/having-coffee.dc5ee276.js","assets/having-coffee-dark.c71483cf.js","assets/vue3-apexcharts.common.236dfc44.js","assets/apex-formatters.f9949b74.js","assets/dayjs.min.9071635e.js","assets/useViaPlaceholderError.be9c33a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-jobs", "path": "jobs", "component": () => __vitePreload(() => import("./jobs.a8efba94.js"), true ? ["assets/jobs.a8efba94.js","assets/JobsDashboard.3f1fdb83.js","assets/JobsDashboard.8845cf48.css","assets/VCheckbox.206c9408.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/VTags.e7e39237.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-personal-2", "path": "personal-2", "component": () => __vitePreload(() => import("./personal-2.05873ed0.js"), true ? ["assets/personal-2.05873ed0.js","assets/PersonalDashboardV2.72f079cb.js","assets/PersonalDashboardV2.3d4db901.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/VAnimatedCheckbox.66f6b6bf.js","assets/VAnimatedCheckbox.6f9cd046.css","assets/VPlaceholderSection.00317a29.js","assets/vue3-apexcharts.common.236dfc44.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-personal-3", "path": "personal-3", "component": () => __vitePreload(() => import("./personal-3.b1c0641e.js"), true ? ["assets/personal-3.b1c0641e.js","assets/PersonalDashboardV3.cea7c6c9.js","assets/PersonalDashboardV3.05af209a.css","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidget.2cde634f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-sales", "path": "sales", "component": () => __vitePreload(() => import("./sales.71fb808e.js"), true ? ["assets/sales.71fb808e.js","assets/SalesDashboard.a07e9c17.js","assets/SalesDashboard.03fb9cb3.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidget.2cde634f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/revenueAreaChart.b3c913e6.js","assets/personalScoreGauge.e2e4f134.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-soccer", "path": "soccer", "component": () => __vitePreload(() => import("./soccer.36424916.js"), true ? ["assets/soccer.36424916.js","assets/SoccerDashboard.cc7ad23f.js","assets/SoccerDashboard.e68195e0.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-stocks", "path": "stocks", "component": () => __vitePreload(() => import("./stocks.b50654d7.js"), true ? ["assets/stocks.b50654d7.js","assets/StockDashboard.3abee52f.js","assets/StockDashboard.0be273fe.css","assets/GraphDropdown.bd15ab94.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-video", "path": "video", "component": () => __vitePreload(() => import("./video.039d5551.js"), true ? ["assets/video.039d5551.js","assets/LifestyleDashboardV5.b68415cc.js","assets/LifestyleDashboardV5.0a38291d.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-creative", "path": "widgets-sample-creative", "component": () => __vitePreload(() => import("./widgets-sample-creative.73f37ea3.js"), true ? ["assets/widgets-sample-creative.73f37ea3.js","assets/WidgetsCreative.8c7df8ae.js","assets/WidgetsCreative.15f84c18.css","assets/IllustrationWidget.7d59da5f.js","assets/vendor.9ec557a4.js","assets/ContactWidget.5dbccff2.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/VTag.ff081b8f.js","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/followers.d693ba3c.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-list", "path": "widgets-sample-list", "component": () => __vitePreload(() => import("./widgets-sample-list.0326c781.js"), true ? ["assets/widgets-sample-list.0326c781.js","assets/WidgetsList.484a4efb.js","assets/WidgetsCreative.15f84c18.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/ListWidgetSingle.7cc0502b.js","assets/VIconBox.e1985867.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/todoList.5ea85247.js","assets/VAnimatedCheckbox.66f6b6bf.js","assets/VAnimatedCheckbox.6f9cd046.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-stats", "path": "widgets-sample-stats", "component": () => __vitePreload(() => import("./widgets-sample-stats.c2960104.js"), true ? ["assets/widgets-sample-stats.c2960104.js","assets/WidgetsStats.272ec02a.js","assets/WidgetsStats.b4665c5c.css","assets/vendor.9ec557a4.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VTag.ff081b8f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/revenueAreaChart.b3c913e6.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-ui", "path": "widgets-sample-ui", "component": () => __vitePreload(() => import("./widgets-sample-ui.014a80ee.js"), true ? ["assets/widgets-sample-ui.014a80ee.js","assets/WidgetsUI.89cd9e88.js","assets/WidgetsCreative.15f84c18.css","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarFollowers.a6e79b07.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VTag.ff081b8f.js","assets/menuList.b8beb818.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/notificationList.38da1c50.js","assets/vue3-apexcharts.common.236dfc44.js","assets/personalScoreGauge.e2e4f134.js","assets/followers.d693ba3c.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-writer", "path": "writer", "component": () => __vitePreload(() => import("./writer.0eb2d360.js"), true ? ["assets/writer.0eb2d360.js","assets/LifestyleDashboardV4.9c8953c4.js","assets/LifestyleDashboardV4.c43f5287.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }], "props": true, "meta": { "requiresAuth": true } }, { "name": "sidebar", "path": "", "component": () => __vitePreload(() => import("./index.094aad76.js"), true ? ["assets/index.094aad76.js","assets/vendor.9ec557a4.js"] : void 0), "props": true }, { "path": "layouts", "component": () => __vitePreload(() => import("./layouts.e58dd267.js"), true ? ["assets/layouts.e58dd267.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "children": [{ "name": "sidebar-layouts-action-page-1", "path": "action-page-1", "component": () => __vitePreload(() => import("./action-page-1.1e50dfad.js"), true ? ["assets/action-page-1.1e50dfad.js","assets/ActionPageV1.480f978b.js","assets/ActionPageV1.a516f716.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/sleep.2a252ff4.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-action-page-2", "path": "action-page-2", "component": () => __vitePreload(() => import("./action-page-2.a0549070.js"), true ? ["assets/action-page-2.a0549070.js","assets/ActionPageV2.dd32a9c9.js","assets/ActionPageV1.a516f716.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/VBlock.47e0c633.js","assets/sleep.2a252ff4.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-1", "path": "form-layouts-1", "component": () => __vitePreload(() => import("./form-layouts-1.37dfcc82.js"), true ? ["assets/form-layouts-1.37dfcc82.js","assets/FormLayout.40735d69.js","assets/FormLayout.3dac21c6.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-2", "path": "form-layouts-2", "component": () => __vitePreload(() => import("./form-layouts-2.522f65d6.js"), true ? ["assets/form-layouts-2.522f65d6.js","assets/FormLayoutSplit.ce8ce561.js","assets/FormLayout.3dac21c6.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-3", "path": "form-layouts-3", "component": () => __vitePreload(() => import("./form-layouts-3.1c2d65ed.js"), true ? ["assets/form-layouts-3.1c2d65ed.js","assets/FormLayoutSeparate.7a980fa8.js","assets/FormLayout.3dac21c6.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-4", "path": "form-layouts-4", "component": () => __vitePreload(() => import("./form-layouts-4.a963f2fe.js"), true ? ["assets/form-layouts-4.a963f2fe.js","assets/FormLayoutStacked.1067eaf5.js","assets/FormLayoutStacked.7d27b487.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-5", "path": "form-layouts-5", "component": () => __vitePreload(() => import("./form-layouts-5.04614d2c.js"), true ? ["assets/form-layouts-5.04614d2c.js","assets/FormLayoutStepper.4c55cc38.js","assets/FormLayoutStepper.79935363.css","assets/VSwitchSegment.2477f431.js","assets/vendor.9ec557a4.js","assets/VIconButton.809a4ce6.js","assets/sleep.2a252ff4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-1", "path": "grid-cards-1", "component": () => __vitePreload(() => import("./grid-cards-1.a4719351.js"), true ? ["assets/grid-cards-1.a4719351.js","assets/CardsGridV1.aeb1d5c4.js","assets/CardsGridV1.e678a42c.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VProgress.21a77a58.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-2", "path": "grid-cards-2", "component": () => __vitePreload(() => import("./grid-cards-2.fdc1d7c2.js"), true ? ["assets/grid-cards-2.fdc1d7c2.js","assets/CardsGridV2.f8a01643.js","assets/CardsGridV2.2d867868.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VAvatarStack.8507ceb8.js","assets/search-3-dark.7ce838c0.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-3", "path": "grid-cards-3", "component": () => __vitePreload(() => import("./grid-cards-3.a109f56a.js"), true ? ["assets/grid-cards-3.a109f56a.js","assets/CardsGridV3.198731ab.js","assets/CardsGridV3.5671f874.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/search-3-dark.7ce838c0.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-4", "path": "grid-cards-4", "component": () => __vitePreload(() => import("./grid-cards-4.64749eaf.js"), true ? ["assets/grid-cards-4.64749eaf.js","assets/CardsGridV4.b1f58f74.js","assets/CardsGridV4.e06dfd9b.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-tiles-1", "path": "grid-tiles-1", "component": () => __vitePreload(() => import("./grid-tiles-1.25cc7bac.js"), true ? ["assets/grid-tiles-1.25cc7bac.js","assets/TilesGridV1.720bf03d.js","assets/TilesGridV1.107b1640.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/search-6-dark.b48abad5.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-tiles-2", "path": "grid-tiles-2", "component": () => __vitePreload(() => import("./grid-tiles-2.b6de8a64.js"), true ? ["assets/grid-tiles-2.b6de8a64.js","assets/TilesGridV2.fbb907dd.js","assets/TilesGridV2.49ce79d0.css","assets/FileTileDropdown.1f6be241.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/useViaPlaceholderError.be9c33a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-tiles-3", "path": "grid-tiles-3", "component": () => __vitePreload(() => import("./grid-tiles-3.3a24ec99.js"), true ? ["assets/grid-tiles-3.3a24ec99.js","assets/TilesGridV3.52a5bb4a.js","assets/TilesGridV3.07425eb5.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/search-6-dark.b48abad5.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-1", "path": "grid-users-1", "component": () => __vitePreload(() => import("./grid-users-1.cd585d32.js"), true ? ["assets/grid-users-1.cd585d32.js","assets/UsersGridV1.f848ca8a.js","assets/UsersGridV1.c94aa3a0.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-2", "path": "grid-users-2", "component": () => __vitePreload(() => import("./grid-users-2.995cb3c9.js"), true ? ["assets/grid-users-2.995cb3c9.js","assets/UsersGridV2.cd49f4ce.js","assets/UsersGridV2.0fc705f2.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-3", "path": "grid-users-3", "component": () => __vitePreload(() => import("./grid-users-3.5a0151c9.js"), true ? ["assets/grid-users-3.5a0151c9.js","assets/UsersGridV3.8680a6f9.js","assets/UsersGridV3.bc30fc13.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VPeity.920acf33.js","assets/CircleChart.9d8cea5e.js","assets/search-5-dark.23499973.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-4", "path": "grid-users-4", "component": () => __vitePreload(() => import("./grid-users-4.927541c7.js"), true ? ["assets/grid-users-4.927541c7.js","assets/UsersGridV4.443f22d7.js","assets/UsersGridV4.4a849e6f.css","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/search-5-dark.23499973.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts", "path": "", "component": () => __vitePreload(() => import("./index.66f384e3.js"), true ? ["assets/index.66f384e3.js","assets/ViewListV1.754e7bed.js","assets/ViewListV1.353eae44.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VFlexPagination.440ca280.js","assets/search-1-dark.119fdb96.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-kanban-board", "path": "kanban-board", "component": () => __vitePreload(() => import("./kanban-board.418500e1.js"), true ? ["assets/kanban-board.418500e1.js","assets/KanbanApp.55abd5c2.js","assets/KanbanApp.018e6255.css","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-1", "path": "list-datatable-1", "component": () => __vitePreload(() => import("./list-datatable-1.2f31b63c.js"), true ? ["assets/list-datatable-1.2f31b63c.js","assets/DatatableV1.4c307529.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-2", "path": "list-datatable-2", "component": () => __vitePreload(() => import("./list-datatable-2.6fb38a8b.js"), true ? ["assets/list-datatable-2.6fb38a8b.js","assets/DatatableV2.56880d36.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-3", "path": "list-datatable-3", "component": () => __vitePreload(() => import("./list-datatable-3.d79b4eb4.js"), true ? ["assets/list-datatable-3.d79b4eb4.js","assets/DatatableV3.29b7918a.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/index.31ae2f12.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-4", "path": "list-datatable-4", "component": () => __vitePreload(() => import("./list-datatable-4.ccb65229.js"), true ? ["assets/list-datatable-4.ccb65229.js","assets/DatatableV4.c58aa48e.js","assets/VPlaceholderSection.00317a29.js","assets/vendor.9ec557a4.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/index.31ae2f12.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-flex-1", "path": "list-flex-1", "component": () => __vitePreload(() => import("./list-flex-1.90647d7e.js"), true ? ["assets/list-flex-1.90647d7e.js","assets/FlexListV1.8daae6d1.js","assets/FlexListV1.deed421a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-flex-2", "path": "list-flex-2", "component": () => __vitePreload(() => import("./list-flex-2.46697600.js"), true ? ["assets/list-flex-2.46697600.js","assets/FlexListV2.d1f254c6.js","assets/FlexListV1.deed421a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-flex-3", "path": "list-flex-3", "component": () => __vitePreload(() => import("./list-flex-3.c0057046.js"), true ? ["assets/list-flex-3.c0057046.js","assets/FlexListV3.3830e3ea.js","assets/FlexListV1.deed421a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-view-2", "path": "list-view-2", "component": () => __vitePreload(() => import("./list-view-2.e4ba570f.js"), true ? ["assets/list-view-2.e4ba570f.js","assets/ViewListV2.6dbad6c5.js","assets/ViewListV2.aedfe197.css","assets/VFlexPagination.440ca280.js","assets/vendor.9ec557a4.js","assets/having-coffee.dc5ee276.js","assets/having-coffee-dark.c71483cf.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-view-3", "path": "list-view-3", "component": () => __vitePreload(() => import("./list-view-3.42f92ad0.js"), true ? ["assets/list-view-3.42f92ad0.js","assets/ViewListV3.378a7312.js","assets/ViewListV3.b3e67bcf.css","assets/VIconButton.809a4ce6.js","assets/vendor.9ec557a4.js","assets/VFlexPagination.440ca280.js","assets/search-3-dark.7ce838c0.js","assets/useViaPlaceholderError.be9c33a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-view-4", "path": "list-view-4", "component": () => __vitePreload(() => import("./list-view-4.19b9a988.js"), true ? ["assets/list-view-4.19b9a988.js","assets/ViewListV4.8802922b.js","assets/ViewListV4.d2eaf74a.css","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VFlexPagination.440ca280.js","assets/search-3-dark.7ce838c0.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-1", "path": "onboarding-page-1", "component": () => __vitePreload(() => import("./onboarding-page-1.d14cc2e2.js"), true ? ["assets/onboarding-page-1.d14cc2e2.js","assets/OnboardingV1.325efc4a.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-2", "path": "onboarding-page-2", "component": () => __vitePreload(() => import("./onboarding-page-2.84798184.js"), true ? ["assets/onboarding-page-2.84798184.js","assets/OnboardingV2.63fc6e75.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-3", "path": "onboarding-page-3", "component": () => __vitePreload(() => import("./onboarding-page-3.70f2e48b.js"), true ? ["assets/onboarding-page-3.70f2e48b.js","assets/OnboardingV3.30fa7731.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-4", "path": "onboarding-page-4", "component": () => __vitePreload(() => import("./onboarding-page-4.f8e075f5.js"), true ? ["assets/onboarding-page-4.f8e075f5.js","assets/OnboardingV4.17d09499.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-5", "path": "onboarding-page-5", "component": () => __vitePreload(() => import("./onboarding-page-5.662b7906.js"), true ? ["assets/onboarding-page-5.662b7906.js","assets/OnboardingV5.875594af.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-welcome", "path": "onboarding-welcome", "component": () => __vitePreload(() => import("./onboarding-welcome.dc8a1f2d.js"), true ? ["assets/onboarding-welcome.dc8a1f2d.js","assets/OnboardingStandard.63b5df8a.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-1", "path": "placeload-1", "component": () => __vitePreload(() => import("./placeload-1.90b9092a.js"), true ? ["assets/placeload-1.90b9092a.js","assets/PlaceloadV1.8a999778.js","assets/ViewListV1.353eae44.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/VPlaceloadWrap.70cc96f2.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-2", "path": "placeload-2", "component": () => __vitePreload(() => import("./placeload-2.e9881343.js"), true ? ["assets/placeload-2.e9881343.js","assets/PlaceloadV2.9db882a3.js","assets/ViewListV1.353eae44.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-3", "path": "placeload-3", "component": () => __vitePreload(() => import("./placeload-3.0cad42fb.js"), true ? ["assets/placeload-3.0cad42fb.js","assets/PlaceloadV3.01d4d92c.js","assets/UsersGridV1.c94aa3a0.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-4", "path": "placeload-4", "component": () => __vitePreload(() => import("./placeload-4.4ec67b13.js"), true ? ["assets/placeload-4.4ec67b13.js","assets/PlaceloadV4.090cc7df.js","assets/TilesGridV1.107b1640.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "path": "profile-edit", "component": () => __vitePreload(() => import("./profile-edit.da86ecd9.js"), true ? ["assets/profile-edit.da86ecd9.js","assets/profile-edit.9db27b5b.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js"] : void 0), "children": [{ "name": "sidebar-layouts-profile-edit-experience", "path": "experience", "component": () => __vitePreload(() => import("./experience.0667262b.js"), true ? ["assets/experience.0667262b.js","assets/EditProfileExperience.0d519ff9.js","assets/VFilePond.8a36efa7.js","assets/VFilePond.746fdb72.css","assets/vendor.9ec557a4.js","assets/EditSettingItemDropdown.7e81545e.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/github.42edfd30.js","assets/sleep.2a252ff4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-edit", "path": "", "component": () => __vitePreload(() => import("./index.343a3254.js"), true ? ["assets/index.343a3254.js","assets/EditProfileGeneral.56fe73d1.js","assets/VFilePond.8a36efa7.js","assets/VFilePond.746fdb72.css","assets/vendor.9ec557a4.js","assets/VIconButton.809a4ce6.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vuero-1.6816f54f.js","assets/sleep.2a252ff4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-edit-settings", "path": "settings", "component": () => __vitePreload(() => import("./settings.35115a8d.js"), true ? ["assets/settings.35115a8d.js","assets/EditProfileSettings.c11b5ec1.js","assets/VSwitchBlock.430faaeb.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-edit-skills", "path": "skills", "component": () => __vitePreload(() => import("./skills.79b0b0c8.js"), true ? ["assets/skills.79b0b0c8.js","assets/EditProfileSkills.2a3508db.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/EditSettingItemDropdown.7e81545e.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/sleep.2a252ff4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }], "props": true }, { "name": "sidebar-layouts-profile-notifications", "path": "profile-notifications", "component": () => __vitePreload(() => import("./profile-notifications.8861b84c.js"), true ? ["assets/profile-notifications.8861b84c.js","assets/NotificationPage.6c520231.js","assets/NotificationPage.3aaa2c6a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-settings", "path": "profile-settings", "component": () => __vitePreload(() => import("./profile-settings.3c3fcfab.js"), true ? ["assets/profile-settings.3c3fcfab.js","assets/SettingsProfile.7cd9cb84.js","assets/profile-edit.9db27b5b.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-view", "path": "profile-view", "component": () => __vitePreload(() => import("./profile-view.ba6a9d4d.js"), true ? ["assets/profile-view.ba6a9d4d.js","assets/ViewProfile.325e371c.js","assets/ViewProfile.e2bfb5c3.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VPeity.920acf33.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/github.42edfd30.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-details", "path": "projects-details", "component": () => __vitePreload(() => import("./projects-details.a487fb82.js"), true ? ["assets/projects-details.a487fb82.js","assets/ProjectDetailsV1.e01dc426.js","assets/ProjectDetailsV1.dd33529e.css","assets/VIconButton.809a4ce6.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/video.6a901793.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBlock.47e0c633.js","assets/CircleChart.9d8cea5e.js","assets/activePanelState.9015e2f2.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-projects-1", "path": "projects-projects-1", "component": () => __vitePreload(() => import("./projects-projects-1.6c883631.js"), true ? ["assets/projects-projects-1.6c883631.js","assets/ProjectsViewV1.5ffd672f.js","assets/ProjectsViewV1.9439800c.css","assets/ProjectsToolbar.d79307a9.js","assets/ProjectsToolbar.c64b9b98.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VTag.ff081b8f.js","assets/fastpizza.70124fcb.js","assets/company1.9158e69f.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-projects-2", "path": "projects-projects-2", "component": () => __vitePreload(() => import("./projects-projects-2.7a5e117b.js"), true ? ["assets/projects-projects-2.7a5e117b.js","assets/ProjectsViewV2.a76efdc8.js","assets/ProjectsViewV1.9439800c.css","assets/ProjectsToolbar.d79307a9.js","assets/ProjectsToolbar.c64b9b98.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-projects-3", "path": "projects-projects-3", "component": () => __vitePreload(() => import("./projects-projects-3.2c7f836b.js"), true ? ["assets/projects-projects-3.2c7f836b.js","assets/ProjectsViewV3.d301e4e1.js","assets/ProjectsViewV1.9439800c.css","assets/CircleChart.9d8cea5e.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-saas-billing", "path": "saas-billing", "component": () => __vitePreload(() => import("./saas-billing.5891d3d1.js"), true ? ["assets/saas-billing.5891d3d1.js","assets/SaasBillingApp.6efd4d0b.js","assets/SaasBillingApp.dee371b7.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/VSwitchBlock.430faaeb.js","assets/VCreditCard.8758bfb0.js","assets/VIMaskInput.807d05c1.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-search-empty", "path": "search-empty", "component": () => __vitePreload(() => import("./search-empty.0c7ce648.js"), true ? ["assets/search-empty.0c7ce648.js","assets/EmptySearch.1f0544ed.js","assets/EmptySearch.a5357f35.css","assets/vendor.9ec557a4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-search-results", "path": "search-results", "component": () => __vitePreload(() => import("./search-results.77456a6f.js"), true ? ["assets/search-results.77456a6f.js","assets/FacetSearch.1aa41428.js","assets/EmptySearch.a5357f35.css","assets/VTag.ff081b8f.js","assets/vendor.9ec557a4.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VBlock.47e0c633.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-utility-account-confirm", "path": "utility-account-confirm", "component": () => __vitePreload(() => import("./utility-account-confirm.4a6f1a94.js"), true ? ["assets/utility-account-confirm.4a6f1a94.js","assets/ConfirmAccount.5962896f.js","assets/ConfirmAccount.2867cd5b.css","assets/VLoader.b9c7fe8c.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-utility-invoice", "path": "utility-invoice", "component": () => __vitePreload(() => import("./utility-invoice.714799ba.js"), true ? ["assets/utility-invoice.714799ba.js","assets/Invoice.6fe3fc81.js","assets/Invoice.1e2e9a5a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "sidebar-layouts-utility-promotion", "path": "utility-promotion", "component": () => __vitePreload(() => import("./utility-promotion.3752fb04.js"), true ? ["assets/utility-promotion.3752fb04.js","assets/Promotion.5c27fb04.js","assets/Promotion.9092a726.css","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }], "props": true }, { "name": "sidebar-maps-1", "path": "maps-1", "component": () => __vitePreload(() => import("./maps-1.6a3a5d5e.js"), true ? ["assets/maps-1.6a3a5d5e.js","assets/ToolbarNotification.0ddce444.js","assets/25.ca54486f.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/Toolbar.278fa677.js","assets/activePanelState.9015e2f2.js","assets/MapsDashboard.1e29bbb8.js","assets/MapsDashboard.1a2cfb36.css","assets/VAvatar.879e77ac.js","assets/VBlock.47e0c633.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/fastpizza.70124fcb.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "sidebar-maps-2", "path": "maps-2", "component": () => __vitePreload(() => import("./maps-2.44d1a702.js"), true ? ["assets/maps-2.44d1a702.js","assets/ToolbarNotification.0ddce444.js","assets/25.ca54486f.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/Toolbar.278fa677.js","assets/activePanelState.9015e2f2.js","assets/MapsDashboard.1e29bbb8.js","assets/MapsDashboard.1a2cfb36.css","assets/VAvatar.879e77ac.js","assets/VBlock.47e0c633.js","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/fastpizza.70124fcb.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js"] : void 0), "props": true }], "props": true }, { "name": "navbar-blank-page-8", "path": "/navbar-blank-page-8", "component": () => __vitePreload(() => import("./navbar-blank-page-8.adf3e772.js"), true ? ["assets/navbar-blank-page-8.adf3e772.js","assets/NavbarSearchLayout.0f0a5e0d.js","assets/NavbarSearchLayout.c92d7958.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/VAvatarStack.8507ceb8.js","assets/VIconButton.809a4ce6.js","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "navbar-blank-page-7", "path": "/navbar-blank-page-7", "component": () => __vitePreload(() => import("./navbar-blank-page-7.13ccfeac.js"), true ? ["assets/navbar-blank-page-7.13ccfeac.js","assets/NavbarSearchLayout.0f0a5e0d.js","assets/NavbarSearchLayout.c92d7958.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/VAvatarStack.8507ceb8.js","assets/VIconButton.809a4ce6.js","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "navbar-blank-page-6", "path": "/navbar-blank-page-6", "component": () => __vitePreload(() => import("./navbar-blank-page-6.08216687.js"), true ? ["assets/navbar-blank-page-6.08216687.js","assets/NavbarSearchLayout.0f0a5e0d.js","assets/NavbarSearchLayout.c92d7958.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/VAvatarStack.8507ceb8.js","assets/VIconButton.809a4ce6.js","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "navbar-blank-page-5", "path": "/navbar-blank-page-5", "component": () => __vitePreload(() => import("./navbar-blank-page-5.9e95df47.js"), true ? ["assets/navbar-blank-page-5.9e95df47.js","assets/NavbarDropdownLayout.32e73aa1.js","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/icons-dark.3c15f062.js","assets/Navbar.95418b57.js","assets/Navbar.10be8100.css","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "navbar-blank-page-4", "path": "/navbar-blank-page-4", "component": () => __vitePreload(() => import("./navbar-blank-page-4.f9ff7aa3.js"), true ? ["assets/navbar-blank-page-4.f9ff7aa3.js","assets/NavbarDropdownLayout.32e73aa1.js","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/icons-dark.3c15f062.js","assets/Navbar.95418b57.js","assets/Navbar.10be8100.css","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "navbar-blank-page-3", "path": "/navbar-blank-page-3", "component": () => __vitePreload(() => import("./navbar-blank-page-3.6750232c.js"), true ? ["assets/navbar-blank-page-3.6750232c.js","assets/NavbarLayout.9a8f4a53.js","assets/NavbarLayout.ee47c1cb.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/Navbar.95418b57.js","assets/Navbar.10be8100.css","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "navbar-blank-page-2", "path": "/navbar-blank-page-2", "component": () => __vitePreload(() => import("./navbar-blank-page-2.8d453426.js"), true ? ["assets/navbar-blank-page-2.8d453426.js","assets/NavbarLayout.9a8f4a53.js","assets/NavbarLayout.ee47c1cb.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/Navbar.95418b57.js","assets/Navbar.10be8100.css","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "navbar-blank-page-1", "path": "/navbar-blank-page-1", "component": () => __vitePreload(() => import("./navbar-blank-page-1.241ebbb0.js"), true ? ["assets/navbar-blank-page-1.241ebbb0.js","assets/NavbarLayout.9a8f4a53.js","assets/NavbarLayout.ee47c1cb.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/Navbar.95418b57.js","assets/Navbar.10be8100.css","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "path": "/navbar", "component": () => __vitePreload(() => import("./navbar.92443c28.js"), true ? ["assets/navbar.92443c28.js","assets/vendor.9ec557a4.js"] : void 0), "children": [{ "path": "dashboards", "component": () => __vitePreload(() => import("./dashboards.f021a1af.js"), true ? ["assets/dashboards.f021a1af.js","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "children": [{ "name": "navbar-dashboards-analytics", "path": "analytics", "component": () => __vitePreload(() => import("./analytics.084fe30b.js"), true ? ["assets/analytics.084fe30b.js","assets/AnalyticsDashboard.fcb4b9f4.js","assets/AnalyticsDashboard.89986b95.css","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/VProgress.21a77a58.js","assets/ContactWidget.5dbccff2.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarFollowers.a6e79b07.js","assets/VAvatarStack.8507ceb8.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/notificationList.38da1c50.js","assets/VTag.ff081b8f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/followers.d693ba3c.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-banking-1", "path": "banking-1", "component": () => __vitePreload(() => import("./banking-1.d58b6fb2.js"), true ? ["assets/banking-1.d58b6fb2.js","assets/BankingDashboardV1.06fe2c78.js","assets/BankingDashboardV1.aba86620.css","assets/GraphDropdown.bd15ab94.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/VProgress.21a77a58.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UserPopoverContent.8933a73e.js","assets/vue3-apexcharts.common.236dfc44.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-banking-2", "path": "banking-2", "component": () => __vitePreload(() => import("./banking-2.1cdf2489.js"), true ? ["assets/banking-2.1cdf2489.js","assets/BankingDashboardV2.c7afbf10.js","assets/BankingDashboardV2.fc8551cf.css","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/tiny-slider.3c41456c.js","assets/vue3-apexcharts.common.236dfc44.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-banking-3", "path": "banking-3", "component": () => __vitePreload(() => import("./banking-3.deecf4bf.js"), true ? ["assets/banking-3.deecf4bf.js","assets/BankingDashboardV3.b88d32f1.js","assets/BankingDashboardV3.b60cb0c7.css","assets/VAction.3f8056c0.js","assets/vendor.9ec557a4.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/GraphDropdown.bd15ab94.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/VIconButton.809a4ce6.js","assets/vue3-apexcharts.common.236dfc44.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-charts-apex", "path": "charts-apex", "component": () => __vitePreload(() => import("./charts-apex.c3bf5644.js"), true ? ["assets/charts-apex.c3bf5644.js","assets/ApexDashboard.86717054.js","assets/dayjs.min.9071635e.js","assets/vendor.9ec557a4.js","assets/apex-formatters.f9949b74.js","assets/vue3-apexcharts.common.236dfc44.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-charts-billboardsjs", "path": "charts-billboardsjs", "component": () => __vitePreload(() => import("./charts-billboardsjs.c1392a74.js"), true ? ["assets/charts-billboardsjs.c1392a74.js","assets/BillboardJsDashboard.0d8702d1.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/vendor.9ec557a4.js","assets/splineSimple.1e5809e8.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-company", "path": "company", "component": () => __vitePreload(() => import("./company.fceb64f5.js"), true ? ["assets/company.fceb64f5.js","assets/CompanyDashboard.e9797e63.js","assets/CompanyDashboard.326d1cff.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidget.2cde634f.js","assets/UserPopoverContent.8933a73e.js","assets/VBlock.47e0c633.js","assets/vue3-apexcharts.common.236dfc44.js","assets/personalScoreGauge.e2e4f134.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-course", "path": "course", "component": () => __vitePreload(() => import("./course.469483ef.js"), true ? ["assets/course.469483ef.js","assets/CourseDashboard.63574194.js","assets/CourseDashboard.b7a03186.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/FileTileDropdown.1f6be241.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-ecommerce-1", "path": "ecommerce-1", "component": () => __vitePreload(() => import("./ecommerce-1.3ad9ac5e.js"), true ? ["assets/ecommerce-1.3ad9ac5e.js","assets/EcommerceDashboardV1.f5648646.js","assets/EcommerceDashboardV1.cd623fda.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VTag.ff081b8f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/apex-formatters.f9949b74.js","assets/dayjs.min.9071635e.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-flights", "path": "flights", "component": () => __vitePreload(() => import("./flights.8bcb865e.js"), true ? ["assets/flights.8bcb865e.js","assets/FlightsDashboard.989c75cb.js","assets/FlightsDashboard.bbce573a.css","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/company1.9158e69f.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-food-delivery", "path": "food-delivery", "component": () => __vitePreload(() => import("./food-delivery.53749ef0.js"), true ? ["assets/food-delivery.53749ef0.js","assets/FoodDeliveryApp.94a1860c.js","assets/FoodDeliveryApp.a15484f2.css","assets/VPlaceholderSection.00317a29.js","assets/vendor.9ec557a4.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/IllustrationWidget.7d59da5f.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/ContactWidget.5dbccff2.js","assets/menuList.b8beb818.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/tiny-slider.3c41456c.js","assets/followers.d693ba3c.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-health", "path": "health", "component": () => __vitePreload(() => import("./health.929ba28a.js"), true ? ["assets/health.929ba28a.js","assets/LifestyleDashboardV3.b4a421b3.js","assets/LifestyleDashboardV3.ae693616.css","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidgetToolbarFollowers.a6e79b07.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vue3-apexcharts.common.236dfc44.js","assets/apex-formatters.f9949b74.js","assets/dayjs.min.9071635e.js","assets/personalScoreGauge.e2e4f134.js","assets/followers.d693ba3c.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-hobbies", "path": "hobbies", "component": () => __vitePreload(() => import("./hobbies.e0ac1b41.js"), true ? ["assets/hobbies.e0ac1b41.js","assets/LifestyleDashboardV2.a7f24ea9.js","assets/LifestyleDashboardV2.8ea741bd.css","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconButton.809a4ce6.js","assets/VBlock.47e0c633.js","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/ListWidgetSingle.7cc0502b.js","assets/VIconBox.e1985867.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-human-ressources", "path": "human-ressources", "component": () => __vitePreload(() => import("./human-ressources.f1993885.js"), true ? ["assets/human-ressources.f1993885.js","assets/HumanRessourcesDashboard.f9653f4c.js","assets/HumanRessourcesDashboard.e3d1ee54.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VTag.ff081b8f.js","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/todoList.5ea85247.js","assets/VAnimatedCheckbox.66f6b6bf.js","assets/VAnimatedCheckbox.6f9cd046.css","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards", "path": "", "component": () => __vitePreload(() => import("./index.c1fdd0af.js"), true ? ["assets/index.c1fdd0af.js","assets/PersonalDashboardV1.d8c8210a.js","assets/PersonalDashboardV1.ed19ba80.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/vue3-apexcharts.common.236dfc44.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-influencer", "path": "influencer", "component": () => __vitePreload(() => import("./influencer.d81d56aa.js"), true ? ["assets/influencer.d81d56aa.js","assets/LifestyleDashboardV1.f4714dea.js","assets/LifestyleDashboardV1.a9d31c20.css","assets/VTag.ff081b8f.js","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/having-coffee.dc5ee276.js","assets/having-coffee-dark.c71483cf.js","assets/vue3-apexcharts.common.236dfc44.js","assets/apex-formatters.f9949b74.js","assets/dayjs.min.9071635e.js","assets/useViaPlaceholderError.be9c33a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-jobs", "path": "jobs", "component": () => __vitePreload(() => import("./jobs.3102a094.js"), true ? ["assets/jobs.3102a094.js","assets/JobsDashboard.3f1fdb83.js","assets/JobsDashboard.8845cf48.css","assets/VCheckbox.206c9408.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/VTags.e7e39237.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-personal-2", "path": "personal-2", "component": () => __vitePreload(() => import("./personal-2.b6168e0f.js"), true ? ["assets/personal-2.b6168e0f.js","assets/PersonalDashboardV2.72f079cb.js","assets/PersonalDashboardV2.3d4db901.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/VAnimatedCheckbox.66f6b6bf.js","assets/VAnimatedCheckbox.6f9cd046.css","assets/VPlaceholderSection.00317a29.js","assets/vue3-apexcharts.common.236dfc44.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-personal-3", "path": "personal-3", "component": () => __vitePreload(() => import("./personal-3.4f563d18.js"), true ? ["assets/personal-3.4f563d18.js","assets/PersonalDashboardV3.cea7c6c9.js","assets/PersonalDashboardV3.05af209a.css","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/vendor.9ec557a4.js","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidget.2cde634f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-sales", "path": "sales", "component": () => __vitePreload(() => import("./sales.b2e0e4f3.js"), true ? ["assets/sales.b2e0e4f3.js","assets/SalesDashboard.a07e9c17.js","assets/SalesDashboard.03fb9cb3.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidget.2cde634f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/revenueAreaChart.b3c913e6.js","assets/personalScoreGauge.e2e4f134.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-soccer", "path": "soccer", "component": () => __vitePreload(() => import("./soccer.df637963.js"), true ? ["assets/soccer.df637963.js","assets/SoccerDashboard.cc7ad23f.js","assets/SoccerDashboard.e68195e0.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-stocks", "path": "stocks", "component": () => __vitePreload(() => import("./stocks.6dc94d58.js"), true ? ["assets/stocks.6dc94d58.js","assets/StockDashboard.3abee52f.js","assets/StockDashboard.0be273fe.css","assets/GraphDropdown.bd15ab94.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-video", "path": "video", "component": () => __vitePreload(() => import("./video.efd99b44.js"), true ? ["assets/video.efd99b44.js","assets/LifestyleDashboardV5.b68415cc.js","assets/LifestyleDashboardV5.0a38291d.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-widgets-sample-creative", "path": "widgets-sample-creative", "component": () => __vitePreload(() => import("./widgets-sample-creative.13b83794.js"), true ? ["assets/widgets-sample-creative.13b83794.js","assets/WidgetsCreative.8c7df8ae.js","assets/WidgetsCreative.15f84c18.css","assets/IllustrationWidget.7d59da5f.js","assets/vendor.9ec557a4.js","assets/ContactWidget.5dbccff2.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/UIWidget.2cde634f.js","assets/VTag.ff081b8f.js","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/followers.d693ba3c.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-widgets-sample-list", "path": "widgets-sample-list", "component": () => __vitePreload(() => import("./widgets-sample-list.f77011fa.js"), true ? ["assets/widgets-sample-list.f77011fa.js","assets/WidgetsList.484a4efb.js","assets/WidgetsCreative.15f84c18.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/ListWidgetSingle.7cc0502b.js","assets/VIconBox.e1985867.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/todoList.5ea85247.js","assets/VAnimatedCheckbox.66f6b6bf.js","assets/VAnimatedCheckbox.6f9cd046.css","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-widgets-sample-stats", "path": "widgets-sample-stats", "component": () => __vitePreload(() => import("./widgets-sample-stats.45666e80.js"), true ? ["assets/widgets-sample-stats.45666e80.js","assets/WidgetsStats.272ec02a.js","assets/WidgetsStats.b4665c5c.css","assets/vendor.9ec557a4.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VTag.ff081b8f.js","assets/vue3-apexcharts.common.236dfc44.js","assets/revenueAreaChart.b3c913e6.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-widgets-sample-ui", "path": "widgets-sample-ui", "component": () => __vitePreload(() => import("./widgets-sample-ui.faccfa72.js"), true ? ["assets/widgets-sample-ui.faccfa72.js","assets/WidgetsUI.89cd9e88.js","assets/WidgetsCreative.15f84c18.css","assets/UIWidgetToolbarDropdown.92a1dd6c.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/UIWidget.2cde634f.js","assets/UIWidgetToolbarFollowers.a6e79b07.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VTag.ff081b8f.js","assets/menuList.b8beb818.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/UIWidgetToolbarIcon.bb1978dd.js","assets/notificationList.38da1c50.js","assets/vue3-apexcharts.common.236dfc44.js","assets/personalScoreGauge.e2e4f134.js","assets/followers.d693ba3c.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-dashboards-writer", "path": "writer", "component": () => __vitePreload(() => import("./writer.81ab6a55.js"), true ? ["assets/writer.81ab6a55.js","assets/LifestyleDashboardV4.9c8953c4.js","assets/LifestyleDashboardV4.c43f5287.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }], "props": true, "meta": { "requiresAuth": true } }, { "name": "navbar", "path": "", "component": () => __vitePreload(() => import("./index.42515145.js"), true ? ["assets/index.42515145.js","assets/vendor.9ec557a4.js"] : void 0), "props": true }, { "path": "layouts", "component": () => __vitePreload(() => import("./layouts.0196cc15.js"), true ? ["assets/layouts.0196cc15.js","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "children": [{ "name": "navbar-layouts-action-page-1", "path": "action-page-1", "component": () => __vitePreload(() => import("./action-page-1.578703a7.js"), true ? ["assets/action-page-1.578703a7.js","assets/ActionPageV1.480f978b.js","assets/ActionPageV1.a516f716.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/sleep.2a252ff4.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-action-page-2", "path": "action-page-2", "component": () => __vitePreload(() => import("./action-page-2.fdac201f.js"), true ? ["assets/action-page-2.fdac201f.js","assets/ActionPageV2.dd32a9c9.js","assets/ActionPageV1.a516f716.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/VBlock.47e0c633.js","assets/sleep.2a252ff4.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-form-layouts-1", "path": "form-layouts-1", "component": () => __vitePreload(() => import("./form-layouts-1.fcefb60a.js"), true ? ["assets/form-layouts-1.fcefb60a.js","assets/FormLayout.40735d69.js","assets/FormLayout.3dac21c6.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-form-layouts-2", "path": "form-layouts-2", "component": () => __vitePreload(() => import("./form-layouts-2.cc2e65ec.js"), true ? ["assets/form-layouts-2.cc2e65ec.js","assets/FormLayoutSplit.ce8ce561.js","assets/FormLayout.3dac21c6.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-form-layouts-3", "path": "form-layouts-3", "component": () => __vitePreload(() => import("./form-layouts-3.c63f5ca8.js"), true ? ["assets/form-layouts-3.c63f5ca8.js","assets/FormLayoutSeparate.7a980fa8.js","assets/FormLayout.3dac21c6.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-form-layouts-4", "path": "form-layouts-4", "component": () => __vitePreload(() => import("./form-layouts-4.b604dedf.js"), true ? ["assets/form-layouts-4.b604dedf.js","assets/FormLayoutStacked.1067eaf5.js","assets/FormLayoutStacked.7d27b487.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-form-layouts-5", "path": "form-layouts-5", "component": () => __vitePreload(() => import("./form-layouts-5.af6420e6.js"), true ? ["assets/form-layouts-5.af6420e6.js","assets/FormLayoutStepper.4c55cc38.js","assets/FormLayoutStepper.79935363.css","assets/VSwitchSegment.2477f431.js","assets/vendor.9ec557a4.js","assets/VIconButton.809a4ce6.js","assets/sleep.2a252ff4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-cards-1", "path": "grid-cards-1", "component": () => __vitePreload(() => import("./grid-cards-1.90df73dd.js"), true ? ["assets/grid-cards-1.90df73dd.js","assets/CardsGridV1.aeb1d5c4.js","assets/CardsGridV1.e678a42c.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VProgress.21a77a58.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-cards-2", "path": "grid-cards-2", "component": () => __vitePreload(() => import("./grid-cards-2.4233e10f.js"), true ? ["assets/grid-cards-2.4233e10f.js","assets/CardsGridV2.f8a01643.js","assets/CardsGridV2.2d867868.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VAvatarStack.8507ceb8.js","assets/search-3-dark.7ce838c0.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-cards-3", "path": "grid-cards-3", "component": () => __vitePreload(() => import("./grid-cards-3.59307cf8.js"), true ? ["assets/grid-cards-3.59307cf8.js","assets/CardsGridV3.198731ab.js","assets/CardsGridV3.5671f874.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/search-3-dark.7ce838c0.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-cards-4", "path": "grid-cards-4", "component": () => __vitePreload(() => import("./grid-cards-4.c1ad8c1d.js"), true ? ["assets/grid-cards-4.c1ad8c1d.js","assets/CardsGridV4.b1f58f74.js","assets/CardsGridV4.e06dfd9b.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-tiles-1", "path": "grid-tiles-1", "component": () => __vitePreload(() => import("./grid-tiles-1.d94c96cf.js"), true ? ["assets/grid-tiles-1.d94c96cf.js","assets/TilesGridV1.720bf03d.js","assets/TilesGridV1.107b1640.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/search-6-dark.b48abad5.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-tiles-2", "path": "grid-tiles-2", "component": () => __vitePreload(() => import("./grid-tiles-2.4d76136a.js"), true ? ["assets/grid-tiles-2.4d76136a.js","assets/TilesGridV2.fbb907dd.js","assets/TilesGridV2.49ce79d0.css","assets/FileTileDropdown.1f6be241.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/useViaPlaceholderError.be9c33a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-tiles-3", "path": "grid-tiles-3", "component": () => __vitePreload(() => import("./grid-tiles-3.eef07ce2.js"), true ? ["assets/grid-tiles-3.eef07ce2.js","assets/TilesGridV3.52a5bb4a.js","assets/TilesGridV3.07425eb5.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/search-6-dark.b48abad5.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-users-1", "path": "grid-users-1", "component": () => __vitePreload(() => import("./grid-users-1.932860f8.js"), true ? ["assets/grid-users-1.932860f8.js","assets/UsersGridV1.f848ca8a.js","assets/UsersGridV1.c94aa3a0.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-users-2", "path": "grid-users-2", "component": () => __vitePreload(() => import("./grid-users-2.748c6759.js"), true ? ["assets/grid-users-2.748c6759.js","assets/UsersGridV2.cd49f4ce.js","assets/UsersGridV2.0fc705f2.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-users-3", "path": "grid-users-3", "component": () => __vitePreload(() => import("./grid-users-3.ea5d6b35.js"), true ? ["assets/grid-users-3.ea5d6b35.js","assets/UsersGridV3.8680a6f9.js","assets/UsersGridV3.bc30fc13.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VPeity.920acf33.js","assets/CircleChart.9d8cea5e.js","assets/search-5-dark.23499973.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-grid-users-4", "path": "grid-users-4", "component": () => __vitePreload(() => import("./grid-users-4.d7223fed.js"), true ? ["assets/grid-users-4.d7223fed.js","assets/UsersGridV4.443f22d7.js","assets/UsersGridV4.4a849e6f.css","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/vendor.9ec557a4.js","assets/useDropdown.086619d7.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/search-5-dark.23499973.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts", "path": "", "component": () => __vitePreload(() => import("./index.9d8f29ce.js"), true ? ["assets/index.9d8f29ce.js","assets/ViewListV1.754e7bed.js","assets/ViewListV1.353eae44.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VFlexPagination.440ca280.js","assets/search-1-dark.119fdb96.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-kanban-board", "path": "kanban-board", "component": () => __vitePreload(() => import("./kanban-board.5e8e23dd.js"), true ? ["assets/kanban-board.5e8e23dd.js","assets/KanbanApp.55abd5c2.js","assets/KanbanApp.018e6255.css","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-datatable-1", "path": "list-datatable-1", "component": () => __vitePreload(() => import("./list-datatable-1.e4679a84.js"), true ? ["assets/list-datatable-1.e4679a84.js","assets/DatatableV1.4c307529.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-datatable-2", "path": "list-datatable-2", "component": () => __vitePreload(() => import("./list-datatable-2.06d35bf1.js"), true ? ["assets/list-datatable-2.06d35bf1.js","assets/DatatableV2.56880d36.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-datatable-3", "path": "list-datatable-3", "component": () => __vitePreload(() => import("./list-datatable-3.d068afd6.js"), true ? ["assets/list-datatable-3.d068afd6.js","assets/DatatableV3.29b7918a.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/index.31ae2f12.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-datatable-4", "path": "list-datatable-4", "component": () => __vitePreload(() => import("./list-datatable-4.642f34eb.js"), true ? ["assets/list-datatable-4.642f34eb.js","assets/DatatableV4.c58aa48e.js","assets/VPlaceholderSection.00317a29.js","assets/vendor.9ec557a4.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/index.31ae2f12.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-flex-1", "path": "list-flex-1", "component": () => __vitePreload(() => import("./list-flex-1.e5cf8168.js"), true ? ["assets/list-flex-1.e5cf8168.js","assets/FlexListV1.8daae6d1.js","assets/FlexListV1.deed421a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VFlexPagination.440ca280.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-flex-2", "path": "list-flex-2", "component": () => __vitePreload(() => import("./list-flex-2.a404916c.js"), true ? ["assets/list-flex-2.a404916c.js","assets/FlexListV2.d1f254c6.js","assets/FlexListV1.deed421a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VFlexPagination.440ca280.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-flex-3", "path": "list-flex-3", "component": () => __vitePreload(() => import("./list-flex-3.e8a4ef44.js"), true ? ["assets/list-flex-3.e8a4ef44.js","assets/FlexListV3.3830e3ea.js","assets/FlexListV1.deed421a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VFlexPagination.440ca280.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-view-2", "path": "list-view-2", "component": () => __vitePreload(() => import("./list-view-2.a9fd7ca6.js"), true ? ["assets/list-view-2.a9fd7ca6.js","assets/ViewListV2.6dbad6c5.js","assets/ViewListV2.aedfe197.css","assets/VFlexPagination.440ca280.js","assets/vendor.9ec557a4.js","assets/having-coffee.dc5ee276.js","assets/having-coffee-dark.c71483cf.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-view-3", "path": "list-view-3", "component": () => __vitePreload(() => import("./list-view-3.38bfb10b.js"), true ? ["assets/list-view-3.38bfb10b.js","assets/ViewListV3.378a7312.js","assets/ViewListV3.b3e67bcf.css","assets/VIconButton.809a4ce6.js","assets/vendor.9ec557a4.js","assets/VFlexPagination.440ca280.js","assets/search-3-dark.7ce838c0.js","assets/useViaPlaceholderError.be9c33a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-list-view-4", "path": "list-view-4", "component": () => __vitePreload(() => import("./list-view-4.21e9cdb3.js"), true ? ["assets/list-view-4.21e9cdb3.js","assets/ViewListV4.8802922b.js","assets/ViewListV4.d2eaf74a.css","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VFlexPagination.440ca280.js","assets/search-3-dark.7ce838c0.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-onboarding-page-1", "path": "onboarding-page-1", "component": () => __vitePreload(() => import("./onboarding-page-1.cf732ee6.js"), true ? ["assets/onboarding-page-1.cf732ee6.js","assets/OnboardingV1.325efc4a.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-onboarding-page-2", "path": "onboarding-page-2", "component": () => __vitePreload(() => import("./onboarding-page-2.6d5dfc26.js"), true ? ["assets/onboarding-page-2.6d5dfc26.js","assets/OnboardingV2.63fc6e75.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-onboarding-page-3", "path": "onboarding-page-3", "component": () => __vitePreload(() => import("./onboarding-page-3.741563a0.js"), true ? ["assets/onboarding-page-3.741563a0.js","assets/OnboardingV3.30fa7731.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-onboarding-page-4", "path": "onboarding-page-4", "component": () => __vitePreload(() => import("./onboarding-page-4.0a547af2.js"), true ? ["assets/onboarding-page-4.0a547af2.js","assets/OnboardingV4.17d09499.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-onboarding-page-5", "path": "onboarding-page-5", "component": () => __vitePreload(() => import("./onboarding-page-5.9dd42c36.js"), true ? ["assets/onboarding-page-5.9dd42c36.js","assets/OnboardingV5.875594af.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-onboarding-welcome", "path": "onboarding-welcome", "component": () => __vitePreload(() => import("./onboarding-welcome.17f272e8.js"), true ? ["assets/onboarding-welcome.17f272e8.js","assets/OnboardingStandard.63b5df8a.js","assets/OnboardingV1.ac85c9d0.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-placeload-1", "path": "placeload-1", "component": () => __vitePreload(() => import("./placeload-1.8e77416e.js"), true ? ["assets/placeload-1.8e77416e.js","assets/PlaceloadV1.8a999778.js","assets/ViewListV1.353eae44.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/VPlaceloadWrap.70cc96f2.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-placeload-2", "path": "placeload-2", "component": () => __vitePreload(() => import("./placeload-2.9a36ad31.js"), true ? ["assets/placeload-2.9a36ad31.js","assets/PlaceloadV2.9db882a3.js","assets/ViewListV1.353eae44.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-placeload-3", "path": "placeload-3", "component": () => __vitePreload(() => import("./placeload-3.84a83633.js"), true ? ["assets/placeload-3.84a83633.js","assets/PlaceloadV3.01d4d92c.js","assets/UsersGridV1.c94aa3a0.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-placeload-4", "path": "placeload-4", "component": () => __vitePreload(() => import("./placeload-4.f333033c.js"), true ? ["assets/placeload-4.f333033c.js","assets/PlaceloadV4.090cc7df.js","assets/TilesGridV1.107b1640.css","assets/VPlaceloadAvatar.71bbd4aa.js","assets/vendor.9ec557a4.js","assets/VPlaceloadText.e27d98a5.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "path": "profile-edit", "component": () => __vitePreload(() => import("./profile-edit.0c6c8425.js"), true ? ["assets/profile-edit.0c6c8425.js","assets/profile-edit.9db27b5b.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js"] : void 0), "children": [{ "name": "navbar-layouts-profile-edit-experience", "path": "experience", "component": () => __vitePreload(() => import("./experience.2f2c63c4.js"), true ? ["assets/experience.2f2c63c4.js","assets/EditProfileExperience.0d519ff9.js","assets/VFilePond.8a36efa7.js","assets/VFilePond.746fdb72.css","assets/vendor.9ec557a4.js","assets/EditSettingItemDropdown.7e81545e.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/github.42edfd30.js","assets/sleep.2a252ff4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-profile-edit", "path": "", "component": () => __vitePreload(() => import("./index.eb60e33f.js"), true ? ["assets/index.eb60e33f.js","assets/EditProfileGeneral.56fe73d1.js","assets/VFilePond.8a36efa7.js","assets/VFilePond.746fdb72.css","assets/vendor.9ec557a4.js","assets/VIconButton.809a4ce6.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vuero-1.6816f54f.js","assets/sleep.2a252ff4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-profile-edit-settings", "path": "settings", "component": () => __vitePreload(() => import("./settings.af5f551c.js"), true ? ["assets/settings.af5f551c.js","assets/EditProfileSettings.c11b5ec1.js","assets/VSwitchBlock.430faaeb.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-profile-edit-skills", "path": "skills", "component": () => __vitePreload(() => import("./skills.bddbda44.js"), true ? ["assets/skills.bddbda44.js","assets/EditProfileSkills.2a3508db.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/EditSettingItemDropdown.7e81545e.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/sleep.2a252ff4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }], "props": true }, { "name": "navbar-layouts-profile-notifications", "path": "profile-notifications", "component": () => __vitePreload(() => import("./profile-notifications.99ba3a5e.js"), true ? ["assets/profile-notifications.99ba3a5e.js","assets/NotificationPage.6c520231.js","assets/NotificationPage.3aaa2c6a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-profile-settings", "path": "profile-settings", "component": () => __vitePreload(() => import("./profile-settings.aac3dc1f.js"), true ? ["assets/profile-settings.aac3dc1f.js","assets/SettingsProfile.7cd9cb84.js","assets/profile-edit.9db27b5b.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-profile-view", "path": "profile-view", "component": () => __vitePreload(() => import("./profile-view.c4d30b3a.js"), true ? ["assets/profile-view.c4d30b3a.js","assets/ViewProfile.325e371c.js","assets/ViewProfile.e2bfb5c3.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VPeity.920acf33.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/github.42edfd30.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-projects-details", "path": "projects-details", "component": () => __vitePreload(() => import("./projects-details.4bb6c2ee.js"), true ? ["assets/projects-details.4bb6c2ee.js","assets/ProjectDetailsV1.e01dc426.js","assets/ProjectDetailsV1.dd33529e.css","assets/VIconButton.809a4ce6.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/video.6a901793.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VBlock.47e0c633.js","assets/CircleChart.9d8cea5e.js","assets/activePanelState.9015e2f2.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-projects-projects-1", "path": "projects-projects-1", "component": () => __vitePreload(() => import("./projects-projects-1.5e1ce11d.js"), true ? ["assets/projects-projects-1.5e1ce11d.js","assets/ProjectsViewV1.5ffd672f.js","assets/ProjectsViewV1.9439800c.css","assets/ProjectsToolbar.d79307a9.js","assets/ProjectsToolbar.c64b9b98.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VAvatarStack.8507ceb8.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/VTag.ff081b8f.js","assets/fastpizza.70124fcb.js","assets/company1.9158e69f.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-projects-projects-2", "path": "projects-projects-2", "component": () => __vitePreload(() => import("./projects-projects-2.33b1f59d.js"), true ? ["assets/projects-projects-2.33b1f59d.js","assets/ProjectsViewV2.a76efdc8.js","assets/ProjectsViewV1.9439800c.css","assets/ProjectsToolbar.d79307a9.js","assets/ProjectsToolbar.c64b9b98.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/useDropdown.086619d7.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-projects-projects-3", "path": "projects-projects-3", "component": () => __vitePreload(() => import("./projects-projects-3.9c77989e.js"), true ? ["assets/projects-projects-3.9c77989e.js","assets/ProjectsViewV3.d301e4e1.js","assets/ProjectsViewV1.9439800c.css","assets/CircleChart.9d8cea5e.js","assets/vendor.9ec557a4.js","assets/VTag.ff081b8f.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-saas-billing", "path": "saas-billing", "component": () => __vitePreload(() => import("./saas-billing.fe7b13e5.js"), true ? ["assets/saas-billing.fe7b13e5.js","assets/SaasBillingApp.6efd4d0b.js","assets/SaasBillingApp.dee371b7.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/VSwitchBlock.430faaeb.js","assets/VCreditCard.8758bfb0.js","assets/VIMaskInput.807d05c1.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-search-empty", "path": "search-empty", "component": () => __vitePreload(() => import("./search-empty.03b83ee8.js"), true ? ["assets/search-empty.03b83ee8.js","assets/EmptySearch.1f0544ed.js","assets/EmptySearch.a5357f35.css","assets/vendor.9ec557a4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-search-results", "path": "search-results", "component": () => __vitePreload(() => import("./search-results.3703f391.js"), true ? ["assets/search-results.3703f391.js","assets/FacetSearch.1aa41428.js","assets/EmptySearch.a5357f35.css","assets/VTag.ff081b8f.js","assets/vendor.9ec557a4.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VBlock.47e0c633.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-utility-account-confirm", "path": "utility-account-confirm", "component": () => __vitePreload(() => import("./utility-account-confirm.de14c640.js"), true ? ["assets/utility-account-confirm.de14c640.js","assets/ConfirmAccount.5962896f.js","assets/ConfirmAccount.2867cd5b.css","assets/VLoader.b9c7fe8c.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-utility-invoice", "path": "utility-invoice", "component": () => __vitePreload(() => import("./utility-invoice.368a9204.js"), true ? ["assets/utility-invoice.368a9204.js","assets/Invoice.6fe3fc81.js","assets/Invoice.1e2e9a5a.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-layouts-utility-promotion", "path": "utility-promotion", "component": () => __vitePreload(() => import("./utility-promotion.c0114044.js"), true ? ["assets/utility-promotion.c0114044.js","assets/Promotion.5c27fb04.js","assets/Promotion.9092a726.css","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }], "props": true }, { "name": "navbar-maps-1", "path": "maps-1", "component": () => __vitePreload(() => import("./maps-1.97e080eb.js"), true ? ["assets/maps-1.97e080eb.js","assets/MapsDashboard.1e29bbb8.js","assets/MapsDashboard.1a2cfb36.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }, { "name": "navbar-maps-2", "path": "maps-2", "component": () => __vitePreload(() => import("./maps-2.542d4756.js"), true ? ["assets/maps-2.542d4756.js","assets/MapsDashboard.1e29bbb8.js","assets/MapsDashboard.1a2cfb36.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VBlock.47e0c633.js","assets/navbarLayoutState.822f8a9f.js"] : void 0), "props": true }], "props": true }, { "name": "messaging-v2", "path": "/messaging-v2", "component": () => __vitePreload(() => import("./messaging-v2.7e947e56.js"), true ? ["assets/messaging-v2.7e947e56.js","assets/messaging-v2.0b975716.css","assets/ToolbarNotification.0ddce444.js","assets/25.ca54486f.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/Toolbar.278fa677.js","assets/activePanelState.9015e2f2.js","assets/VAvatar.879e77ac.js","assets/11.27f9c2c8.js","assets/vuero-1.6816f54f.js","assets/18.e0bb6643.js","assets/12.f6cf0ae7.js","assets/5.35997873.js","assets/22.7f9d419d.js"] : void 0), "props": true }, { "name": "messaging-v1", "path": "/messaging-v1", "component": () => __vitePreload(() => import("./messaging-v1.8fda5eb7.js"), true ? ["assets/messaging-v1.8fda5eb7.js","assets/messaging-v1.cf02f619.css","assets/activeSidebarState.93618a64.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VPhotosSwipe.0f23df67.js","assets/VPhotosSwipe.a8419cb4.css","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/25.ca54486f.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/activePanelState.9015e2f2.js","assets/useDropdown.086619d7.js","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/fastpizza.70124fcb.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/12.f6cf0ae7.js","assets/having-coffee.dc5ee276.js","assets/sidebarLayoutState.883cc242.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "marketing-3", "path": "/marketing-3", "component": () => __vitePreload(() => import("./marketing-3.db4cfcd1.js"), true ? ["assets/marketing-3.db4cfcd1.js","assets/marketing-3.2e971e7b.css","assets/app-2-dark.5b882196.js","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/VPlyr.dd032c21.js","assets/VPlyr.a1929074.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js"] : void 0), "props": true }, { "name": "marketing-2", "path": "/marketing-2", "component": () => __vitePreload(() => import("./marketing-2.34a94fa2.js"), true ? ["assets/marketing-2.34a94fa2.js","assets/marketing-3.2e971e7b.css","assets/app-2-dark.5b882196.js","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/VPlyr.dd032c21.js","assets/VPlyr.a1929074.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js"] : void 0), "props": true }, { "name": "marketing-1", "path": "/marketing-1", "component": () => __vitePreload(() => import("./marketing-1.2c4ed929.js"), true ? ["assets/marketing-1.2c4ed929.js","assets/marketing-3.2e971e7b.css","assets/app-2-dark.5b882196.js","assets/VIconBox.e1985867.js","assets/vendor.9ec557a4.js","assets/VPlyr.dd032c21.js","assets/VPlyr.a1929074.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js"] : void 0), "props": true }, { "name": "inbox", "path": "/inbox", "component": () => __vitePreload(() => import("./inbox.543cb49c.js"), true ? ["assets/inbox.543cb49c.js","assets/inbox.d1435fdc.css","assets/vendor.9ec557a4.js","assets/25.ca54486f.js","assets/vuero-1.6816f54f.js","assets/useDropdown.086619d7.js","assets/useViaPlaceholderError.be9c33a4.js","assets/18.e0bb6643.js","assets/11.27f9c2c8.js"] : void 0), "props": true }, { "path": "/error", "component": () => __vitePreload(() => import("./error.1138524e.js"), true ? ["assets/error.1138524e.js","assets/vendor.9ec557a4.js"] : void 0), "children": [{ "name": "error", "path": "", "component": () => __vitePreload(() => import("./index.6c70294b.js"), true ? [] : void 0), "props": true, "redirect": { "name": "error-page-1" } }, { "name": "error-page-1", "path": "page-1", "component": () => __vitePreload(() => import("./page-1.7bbccb92.js"), true ? ["assets/page-1.7bbccb92.js","assets/page-1.0a48f0d7.css","assets/SVGErrorPlaceholder.8da458c3.js","assets/vendor.9ec557a4.js"] : void 0), "props": true }, { "name": "error-page-2", "path": "page-2", "component": () => __vitePreload(() => import("./page-2.d83e960c.js"), true ? ["assets/page-2.d83e960c.js","assets/page-1.0a48f0d7.css","assets/vendor.9ec557a4.js"] : void 0), "props": true }, { "name": "error-page-3", "path": "page-3", "component": () => __vitePreload(() => import("./page-3.d6f06fca.js"), true ? ["assets/page-3.d6f06fca.js","assets/page-1.0a48f0d7.css","assets/vendor.9ec557a4.js"] : void 0), "props": true }, { "name": "error-page-4", "path": "page-4", "component": () => __vitePreload(() => import("./page-4.eeae2886.js"), true ? ["assets/page-4.eeae2886.js","assets/page-1.0a48f0d7.css","assets/vendor.9ec557a4.js"] : void 0), "props": true }, { "name": "error-page-5", "path": "page-5", "component": () => __vitePreload(() => import("./page-5.3a387aa4.js"), true ? ["assets/page-5.3a387aa4.js","assets/page-1.0a48f0d7.css","assets/vendor.9ec557a4.js"] : void 0), "props": true }], "props": true }, { "path": "/elements", "component": () => __vitePreload(() => import("./elements.e1fdcec1.js"), true ? ["assets/elements.e1fdcec1.js","assets/elements.d98ddc8d.css","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "children": [{ "name": "elements-action", "path": "action", "component": () => __vitePreload(() => import("./action.035742c7.js"), true ? ["assets/action.035742c7.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAction.3f8056c0.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-addons-calendar", "path": "addons-calendar", "component": () => __vitePreload(() => import("./addons-calendar.bdae7599.js"), true ? ["assets/addons-calendar.bdae7599.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-addons-ckeditor", "path": "addons-ckeditor", "component": () => __vitePreload(() => import("./addons-ckeditor.15b5030f.js"), true ? ["assets/addons-ckeditor.15b5030f.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-addons-credit-card", "path": "addons-credit-card", "component": () => __vitePreload(() => import("./addons-credit-card.ea9875be.js"), true ? ["assets/addons-credit-card.ea9875be.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VCreditCard.8758bfb0.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-addons-filepond", "path": "addons-filepond", "component": () => __vitePreload(() => import("./addons-filepond.e7f8f537.js"), true ? ["assets/addons-filepond.e7f8f537.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VFilePond.8a36efa7.js","assets/VFilePond.746fdb72.css","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-addons-imask-input", "path": "addons-imask-input", "component": () => __vitePreload(() => import("./addons-imask-input.04d24db7.js"), true ? ["assets/addons-imask-input.04d24db7.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VIMaskInput.807d05c1.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-addons-vueform-multiselect", "path": "addons-vueform-multiselect", "component": () => __vitePreload(() => import("./addons-vueform-multiselect.f13f2834.js"), true ? ["assets/addons-vueform-multiselect.f13f2834.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-addons-vueform-slider", "path": "addons-vueform-slider", "component": () => __vitePreload(() => import("./addons-vueform-slider.215ec959.js"), true ? ["assets/addons-vueform-slider.215ec959.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-animated-checkbox", "path": "animated-checkbox", "component": () => __vitePreload(() => import("./animated-checkbox.47a421ea.js"), true ? ["assets/animated-checkbox.47a421ea.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAnimatedCheckbox.66f6b6bf.js","assets/VAnimatedCheckbox.6f9cd046.css","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-button", "path": "button", "component": () => __vitePreload(() => import("./button.3c09c223.js"), true ? ["assets/button.3c09c223.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-checkbox", "path": "checkbox", "component": () => __vitePreload(() => import("./checkbox.9c9d9eaa.js"), true ? ["assets/checkbox.9c9d9eaa.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VCheckbox.206c9408.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-colors", "path": "colors", "component": () => __vitePreload(() => import("./colors.03492de1.js"), true ? ["assets/colors.03492de1.js","assets/colors.47982185.css","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAction.3f8056c0.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-control", "path": "control", "component": () => __vitePreload(() => import("./control.f05bac82.js"), true ? ["assets/control.f05bac82.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-dropdown", "path": "dropdown", "component": () => __vitePreload(() => import("./dropdown.72a671ca.js"), true ? ["assets/dropdown.72a671ca.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-field", "path": "field", "component": () => __vitePreload(() => import("./field.0920919c.js"), true ? ["assets/field.0920919c.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-forms-addons", "path": "forms-addons", "component": () => __vitePreload(() => import("./forms-addons.b6f1b881.js"), true ? ["assets/forms-addons.b6f1b881.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-forms-file", "path": "forms-file", "component": () => __vitePreload(() => import("./forms-file.e2b241f8.js"), true ? ["assets/forms-file.e2b241f8.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-forms-inputs", "path": "forms-inputs", "component": () => __vitePreload(() => import("./forms-inputs.68c87b9f.js"), true ? ["assets/forms-inputs.68c87b9f.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-forms-selects", "path": "forms-selects", "component": () => __vitePreload(() => import("./forms-selects.3f219479.js"), true ? ["assets/forms-selects.3f219479.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-forms-textarea", "path": "forms-textarea", "component": () => __vitePreload(() => import("./forms-textarea.1f97ce5f.js"), true ? ["assets/forms-textarea.1f97ce5f.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-helpers", "path": "helpers", "component": () => __vitePreload(() => import("./helpers.173e2b19.js"), true ? ["assets/helpers.173e2b19.js","assets/helpers.a267c171.css","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-icon-button", "path": "icon-button", "component": () => __vitePreload(() => import("./icon-button.307a2ba2.js"), true ? ["assets/icon-button.307a2ba2.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VIconButton.809a4ce6.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-icons-fa", "path": "icons-fa", "component": () => __vitePreload(() => import("./icons-fa.5682731d.js"), true ? ["assets/icons-fa.5682731d.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-icons-iconify", "path": "icons-iconify", "component": () => __vitePreload(() => import("./icons-iconify.930887ce.js"), true ? ["assets/icons-iconify.930887ce.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-icons-line-icons-regular", "path": "icons-line-icons-regular", "component": () => __vitePreload(() => import("./icons-line-icons-regular.a1a9a59d.js"), true ? ["assets/icons-line-icons-regular.a1a9a59d.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-icons-line-icons", "path": "icons-line-icons", "component": () => __vitePreload(() => import("./icons-line-icons.0bc3036b.js"), true ? ["assets/icons-line-icons.0bc3036b.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements", "path": "", "component": () => __vitePreload(() => import("./index.bf73a4a2.js"), true ? ["assets/index.bf73a4a2.js","assets/index.624cf1c8.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/HubCard.f3ed9dd1.js","assets/icons-dark.3c15f062.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-loader", "path": "loader", "component": () => __vitePreload(() => import("./loader.51669ae8.js"), true ? ["assets/loader.51669ae8.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VCardAction.1a5f1f27.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VBlock.47e0c633.js","assets/VLoader.b9c7fe8c.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-message", "path": "message", "component": () => __vitePreload(() => import("./message.9f23236a.js"), true ? ["assets/message.9f23236a.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VMessage.2ad1e7cc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-modal", "path": "modal", "component": () => __vitePreload(() => import("./modal.18995170.js"), true ? ["assets/modal.18995170.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/VPlaceholderSection.00317a29.js","assets/VModal.d9bd4cb5.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/22.7f9d419d.js","assets/vuero-1.6816f54f.js","assets/25.ca54486f.js","assets/12.16c4b7ba.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-placeload-avatar", "path": "placeload-avatar", "component": () => __vitePreload(() => import("./placeload-avatar.0a256e4a.js"), true ? ["assets/placeload-avatar.0a256e4a.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VPlaceloadAvatar.71bbd4aa.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-placeload-text", "path": "placeload-text", "component": () => __vitePreload(() => import("./placeload-text.cd7959c5.js"), true ? ["assets/placeload-text.cd7959c5.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VPlaceloadText.e27d98a5.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-placeload", "path": "placeload", "component": () => __vitePreload(() => import("./placeload.bab6e93b.js"), true ? ["assets/placeload.bab6e93b.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VPlaceloadWrap.70cc96f2.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-progress", "path": "progress", "component": () => __vitePreload(() => import("./progress.ebefb9ac.js"), true ? ["assets/progress.ebefb9ac.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VProgress.21a77a58.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-radio", "path": "radio", "component": () => __vitePreload(() => import("./radio.70eaf93c.js"), true ? ["assets/radio.70eaf93c.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-switch-block", "path": "switch-block", "component": () => __vitePreload(() => import("./switch-block.c8ec9736.js"), true ? ["assets/switch-block.c8ec9736.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VSwitchBlock.430faaeb.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-switch-segment", "path": "switch-segment", "component": () => __vitePreload(() => import("./switch-segment.d69b2417.js"), true ? ["assets/switch-segment.d69b2417.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VSwitchSegment.2477f431.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "elements-tooltip", "path": "tooltip", "component": () => __vitePreload(() => import("./tooltip.d546262b.js"), true ? ["assets/tooltip.d546262b.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VTag.ff081b8f.js","assets/VTags.e7e39237.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }], "props": true }, { "path": "/components", "component": () => __vitePreload(() => import("./components.c6b2abc3.js"), true ? ["assets/components.c6b2abc3.js","assets/elements.d98ddc8d.css","assets/SidebarLayout.4372cd3c.js","assets/SidebarLayout.9c66cf85.css","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/vendor.9ec557a4.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/navbarLayoutState.822f8a9f.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/SearchPanel.8d96f71b.js","assets/SearchPanel.733c2148.css","assets/VIconBox.e1985867.js","assets/VBlock.47e0c633.js","assets/UserPopoverContent.8933a73e.js","assets/userPopovers.e00e1803.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js"] : void 0), "children": [{ "name": "components-accordion-image", "path": "accordion-image", "component": () => __vitePreload(() => import("./accordion-image.d7712cf3.js"), true ? ["assets/accordion-image.d7712cf3.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-accordion", "path": "accordion", "component": () => __vitePreload(() => import("./accordion.3ebe0b6d.js"), true ? ["assets/accordion.3ebe0b6d.js","assets/Toolbar.278fa677.js","assets/vendor.9ec557a4.js","assets/activePanelState.9015e2f2.js","assets/useDropdown.086619d7.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/VIcon.85cce7bc.js","assets/activeSidebarState.93618a64.js"] : void 0), "props": true }, { "name": "components-avatar-stack", "path": "avatar-stack", "component": () => __vitePreload(() => import("./avatar-stack.04ffaf85.js"), true ? ["assets/avatar-stack.04ffaf85.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-avatar", "path": "avatar", "component": () => __vitePreload(() => import("./avatar.01b54321.js"), true ? ["assets/avatar.01b54321.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-block", "path": "block", "component": () => __vitePreload(() => import("./block.480a0760.js"), true ? ["assets/block.480a0760.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VBlock.47e0c633.js","assets/VIconBox.e1985867.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-breadcrumb", "path": "breadcrumb", "component": () => __vitePreload(() => import("./breadcrumb.993057a0.js"), true ? ["assets/breadcrumb.993057a0.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-card-action", "path": "card-action", "component": () => __vitePreload(() => import("./card-action.2a478ed5.js"), true ? ["assets/card-action.2a478ed5.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VTag.ff081b8f.js","assets/VCardAction.1a5f1f27.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VBlock.47e0c633.js","assets/VIconButton.809a4ce6.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/VAction.3f8056c0.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-card-advanced", "path": "card-advanced", "component": () => __vitePreload(() => import("./card-advanced.0e37e5e4.js"), true ? ["assets/card-advanced.0e37e5e4.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VBlock.47e0c633.js","assets/VAvatarStack.8507ceb8.js","assets/VTag.ff081b8f.js","assets/WidgetDropdown.f2919a83.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-card-media", "path": "card-media", "component": () => __vitePreload(() => import("./card-media.71868789.js"), true ? ["assets/card-media.71868789.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VBlock.47e0c633.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-card-social", "path": "card-social", "component": () => __vitePreload(() => import("./card-social.4dc5b71e.js"), true ? ["assets/card-social.4dc5b71e.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VBlock.47e0c633.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-card", "path": "card", "component": () => __vitePreload(() => import("./card.059b73cf.js"), true ? ["assets/card.059b73cf.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/UserPopoverContent.8933a73e.js","assets/VBlock.47e0c633.js","assets/UserCardDropdown.e5676968.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js","assets/userPopovers.e00e1803.js"] : void 0), "props": true }, { "name": "components-collapse", "path": "collapse", "component": () => __vitePreload(() => import("./collapse.b6545854.js"), true ? ["assets/collapse.b6545854.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-content", "path": "content", "component": () => __vitePreload(() => import("./content.35de157f.js"), true ? ["assets/content.35de157f.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-flex-pagination", "path": "flex-pagination", "component": () => __vitePreload(() => import("./flex-pagination.5aa744b9.js"), true ? ["assets/flex-pagination.5aa744b9.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-flex-table-advanced", "path": "flex-table-advanced", "component": () => __vitePreload(() => import("./flex-table-advanced.c14a5d16.js"), true ? ["assets/flex-table-advanced.c14a5d16.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VFlexTableRowMedia.33b6516b.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatarStack.8507ceb8.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/table.cf4b29e1.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-flex-table-compact", "path": "flex-table-compact", "component": () => __vitePreload(() => import("./flex-table-compact.08f195da.js"), true ? ["assets/flex-table-compact.08f195da.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VFlexTableRowBase.b9233063.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/table.cf4b29e1.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-flex-table-media", "path": "flex-table-media", "component": () => __vitePreload(() => import("./flex-table-media.409d3057.js"), true ? ["assets/flex-table-media.409d3057.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VFlexTableRowMedia.33b6516b.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatarStack.8507ceb8.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/table.cf4b29e1.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-flex-table", "path": "flex-table", "component": () => __vitePreload(() => import("./flex-table.84ad1131.js"), true ? ["assets/flex-table.84ad1131.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/v-flex-table-base-documentation.6cc779ee.js","assets/VFlexTableRowBase.b9233063.js","assets/VAvatarStack.8507ceb8.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/table.cf4b29e1.js","assets/VFlexPagination.440ca280.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-flex", "path": "flex", "component": () => __vitePreload(() => import("./flex.9be76647.js"), true ? ["assets/flex.9be76647.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-grid", "path": "grid", "component": () => __vitePreload(() => import("./grid.23b57216.js"), true ? ["assets/grid.23b57216.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-icon-box", "path": "icon-box", "component": () => __vitePreload(() => import("./icon-box.eb137ce3.js"), true ? ["assets/icon-box.eb137ce3.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VIconBox.e1985867.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-icon-wrap", "path": "icon-wrap", "component": () => __vitePreload(() => import("./icon-wrap.f203fd1b.js"), true ? ["assets/icon-wrap.f203fd1b.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components", "path": "", "component": () => __vitePreload(() => import("./index.7665cd85.js"), true ? ["assets/index.7665cd85.js","assets/index.624cf1c8.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/HubCard.f3ed9dd1.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-placeholder-page", "path": "placeholder-page", "component": () => __vitePreload(() => import("./placeholder-page.c32b035a.js"), true ? ["assets/placeholder-page.c32b035a.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/search-1-dark.119fdb96.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-placeholder-section", "path": "placeholder-section", "component": () => __vitePreload(() => import("./placeholder-section.4c47fac2.js"), true ? ["assets/placeholder-section.4c47fac2.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VPlaceholderSection.00317a29.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-plugins-billboard-js", "path": "plugins-billboard-js", "component": () => __vitePreload(() => import("./plugins-billboard-js.f75fdcc0.js"), true ? ["assets/plugins-billboard-js.f75fdcc0.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VBillboardJS.ae6ef8a0.js","assets/VBillboardJS.10f7e191.css","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/splineSimple.1e5809e8.js","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-plugins-notif", "path": "plugins-notif", "component": () => __vitePreload(() => import("./plugins-notif.7935b7f3.js"), true ? ["assets/plugins-notif.7935b7f3.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-plugins-photos-swipe", "path": "plugins-photos-swipe", "component": () => __vitePreload(() => import("./plugins-photos-swipe.6f920e3d.js"), true ? ["assets/plugins-photos-swipe.6f920e3d.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VPhotosSwipe.0f23df67.js","assets/VPhotosSwipe.a8419cb4.css","assets/useViaPlaceholderError.be9c33a4.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-plugins-plyr", "path": "plugins-plyr", "component": () => __vitePreload(() => import("./plugins-plyr.424397d0.js"), true ? ["assets/plugins-plyr.424397d0.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VPlyr.dd032c21.js","assets/VPlyr.a1929074.css","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-plugins-simple-datatables", "path": "plugins-simple-datatables", "component": () => __vitePreload(() => import("./plugins-simple-datatables.29b5673b.js"), true ? ["assets/plugins-simple-datatables.29b5673b.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VSimpleDatatables.bde9b4a7.js","assets/VSimpleDatatables.afd8bca8.css","assets/VTag.ff081b8f.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-plugins-tippy", "path": "plugins-tippy", "component": () => __vitePreload(() => import("./plugins-tippy.1c2db5b4.js"), true ? ["assets/plugins-tippy.1c2db5b4.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VIconBox.e1985867.js","assets/UserPopoverContent.8933a73e.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-snack", "path": "snack", "component": () => __vitePreload(() => import("./snack.9b3930d8.js"), true ? ["assets/snack.9b3930d8.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-table-flex", "path": "table-flex", "component": () => __vitePreload(() => import("./table-flex.e8753b02.js"), true ? ["assets/table-flex.e8753b02.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/v-flex-table-base-documentation.6cc779ee.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/VFlexPagination.440ca280.js","assets/25.ca54486f.js","assets/vuero-1.6816f54f.js","assets/13.d1ef5906.js","assets/11.27f9c2c8.js","assets/5.35997873.js","assets/sidebarLayoutState.883cc242.js","assets/useViaPlaceholderError.be9c33a4.js"] : void 0), "props": true }, { "name": "components-table", "path": "table", "component": () => __vitePreload(() => import("./table.46912817.js"), true ? ["assets/table.46912817.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/FlexTableDropdown.4f5be7fe.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/useDropdown.086619d7.js","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-tabs", "path": "tabs", "component": () => __vitePreload(() => import("./tabs.5866843f.js"), true ? ["assets/tabs.5866843f.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VTabs.2e6d271f.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }, { "name": "components-tag", "path": "tag", "component": () => __vitePreload(() => import("./tag.7d7417ea.js"), true ? ["assets/tag.7d7417ea.js","assets/DocumentationItem.6b7c9a35.js","assets/DocumentationItem.ad7fab69.css","assets/vendor.9ec557a4.js","assets/VIcon.85cce7bc.js","assets/VTag.ff081b8f.js","assets/VTags.e7e39237.js","assets/useMarkdownToc.e5a9047c.js","assets/useMarkdownToc.79ef8f2f.css","assets/sidebarLayoutState.883cc242.js"] : void 0), "props": true }], "props": true }, { "path": "/auth", "component": () => __vitePreload(() => import("./auth.334b4aa3.js"), true ? ["assets/auth.334b4aa3.js","assets/auth.e679d544.css","assets/vendor.9ec557a4.js"] : void 0), "children": [{ "name": "auth", "path": "", "component": () => __vitePreload(() => import("./index.34e397f1.js"), true ? [] : void 0), "props": true, "redirect": { "name": "auth-login-1" } }, { "name": "auth-login-1", "path": "login-1", "component": () => __vitePreload(() => import("./login-1.6c9b65f7.js"), true ? ["assets/login-1.6c9b65f7.js","assets/login-1.04045182.css","assets/VMessage.2ad1e7cc.js","assets/vendor.9ec557a4.js","assets/VIconWrap.809aa90c.js","assets/VIconWrap.9a1b83e9.css","assets/useViaPlaceholderError.be9c33a4.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-login-2", "path": "login-2", "component": () => __vitePreload(() => import("./login-2.7b10fa30.js"), true ? ["assets/login-2.7b10fa30.js","assets/vendor.9ec557a4.js","assets/vuero-banking-dark.5abbd6fb.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-login-3", "path": "login-3", "component": () => __vitePreload(() => import("./login-3.5bfea61a.js"), true ? ["assets/login-3.5bfea61a.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-signup-1", "path": "signup-1", "component": () => __vitePreload(() => import("./signup-1.9e6eafff.js"), true ? ["assets/signup-1.9e6eafff.js","assets/signup-1.6ddb85ec.css","assets/VAvatar.879e77ac.js","assets/useViaPlaceholderError.be9c33a4.js","assets/vendor.9ec557a4.js","assets/VModal.d9bd4cb5.js","assets/tiny-slider.3c41456c.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-signup-2", "path": "signup-2", "component": () => __vitePreload(() => import("./signup-2.7f5e3279.js"), true ? ["assets/signup-2.7f5e3279.js","assets/vuero-banking-dark.5abbd6fb.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-signup-3", "path": "signup-3", "component": () => __vitePreload(() => import("./signup-3.e12a2fcd.js"), true ? ["assets/signup-3.e12a2fcd.js","assets/vendor.9ec557a4.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }], "props": true }, { "name": "app", "path": "/app", "component": () => __vitePreload(() => import("./app.763f6bfb.js"), true ? [] : void 0), "props": true, "redirect": { "name": "sidebar-dashboards" } }, { "name": "index", "path": "/", "component": _sfc_main$2, "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => __vitePreload(() => import("./_...all_.c5976ead.js"), true ? ["assets/_...all_.c5976ead.js","assets/page-1.0a48f0d7.css","assets/SVGErrorPlaceholder.8da458c3.js","assets/vendor.9ec557a4.js"] : void 0), "props": true }];
function createRouter() {
  const router = createRouter$1({
    history: createWebHistory(),
    routes
  });
  router.beforeEach(() => {
    nprogress$1.exports.start();
  });
  router.afterEach(() => {
    nprogress$1.exports.done();
  });
  return router;
}
const useUserSession = defineStore("userSession", () => {
  const token = useStorage("token", "");
  const user = ref();
  const loading = ref(true);
  const isLoggedIn = computed(() => token.value !== void 0 && token.value !== "");
  function setUser(newUser) {
    user.value = newUser;
  }
  function setToken(newToken) {
    token.value = newToken;
  }
  function setLoading(newLoading) {
    loading.value = newLoading;
  }
  async function logoutUser() {
    token.value = void 0;
    user.value = void 0;
  }
  return {
    user,
    token,
    isLoggedIn,
    loading,
    logoutUser,
    setUser,
    setToken,
    setLoading
  };
});
const apiSymbol = Symbol();
function provideApi() {
  const api = axios.create({
    baseURL: "http://localhost:1337"
  });
  api.interceptors.request.use((config) => {
    const userSession = useUserSession();
    if (userSession.isLoggedIn) {
      config.headers = __spreadProps(__spreadValues({}, config.headers), {
        Authorization: `Bearer ${userSession.token}`
      });
    }
    return config;
  });
  provide(apiSymbol, api);
  return api;
}
const hslRe = /hsl\(\s*(\d+)((?:deg)|(?:turn)|(?:rad))?\s*,?\s*(\d+(?:\.\d+)?%)\s*,?\s*(\d+(?:\.\d+)?%)\s*\)/;
function HSLToHex(hslCss) {
  if (!hslCss) {
    return "#fff";
  }
  const res = hslRe.exec(hslCss);
  if (res === null) {
    return "#fff";
  }
  const [hueString, hueUnit, saturationString, luminanceString] = res.slice(1);
  if (!hueString || !saturationString || !luminanceString) {
    return "#fff";
  }
  let h2 = 0;
  let s = parseFloat(saturationString != null ? saturationString : "0");
  let l = parseFloat(luminanceString != null ? luminanceString : "0");
  switch (hueUnit) {
    case "deg":
      h2 = parseFloat(hueString.substr(0, hueString.length - 3));
      break;
    case "turn":
      h2 = Math.round(parseFloat(hueString.substr(0, hueString.length - 4)) * 360);
      break;
    case "rad":
      h2 = Math.round(parseFloat(hueString.substr(0, hueString.length - 3)) * (180 / Math.PI));
      break;
    default:
      h2 = parseFloat(hueString);
      break;
  }
  if (h2 >= 360)
    h2 %= 360;
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h2 / 60 % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (0 <= h2 && h2 < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h2 && h2 < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h2 && h2 < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h2 && h2 < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h2 && h2 < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h2 && h2 < 360) {
    r = c;
    g = 0;
    b = x;
  }
  let rString = Math.round((r + m) * 255).toString(16);
  let gString = Math.round((g + m) * 255).toString(16);
  let bString = Math.round((b + m) * 255).toString(16);
  if (rString.length == 1)
    rString = "0" + rString;
  if (gString.length == 1)
    gString = "0" + gString;
  if (bString.length == 1)
    bString = "0" + bString;
  return "#" + rString + gString + bString;
}
const style = getComputedStyle(document.documentElement);
const themeColors = {
  primary: HSLToHex(style.getPropertyValue("--primary")),
  primaryMedium: "#b4e4ce",
  primaryLight: "#f7fcfa",
  secondary: "#ff227d",
  accent: "#797bf2",
  accentMedium: "#d4b3ff",
  accentLight: "#b8ccff",
  success: HSLToHex(style.getPropertyValue("--success")),
  info: HSLToHex(style.getPropertyValue("--info")),
  warning: HSLToHex(style.getPropertyValue("--warning")),
  danger: HSLToHex(style.getPropertyValue("--danger")),
  purple: HSLToHex(style.getPropertyValue("--purple")),
  blue: HSLToHex(style.getPropertyValue("--blue")),
  green: HSLToHex(style.getPropertyValue("--green")),
  yellow: HSLToHex(style.getPropertyValue("--yellow")),
  orange: HSLToHex(style.getPropertyValue("--orange")),
  lightText: "#a2a5b9",
  fadeGrey: "#ededed"
};
const notyf = new Notyf({
  duration: 2e3,
  position: {
    x: "right",
    y: "bottom"
  },
  types: [
    {
      type: "warning",
      background: themeColors.warning,
      icon: {
        className: "fas fa-hand-paper",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "info",
      background: themeColors.info,
      icon: {
        className: "fas fa-info-circle",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "primary",
      background: themeColors.primary,
      icon: {
        className: "fas fa-car-crash",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "accent",
      background: themeColors.accent,
      icon: {
        className: "fas fa-car-crash",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "purple",
      background: themeColors.purple,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "blue",
      background: themeColors.blue,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "green",
      background: themeColors.green,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "orange",
      background: themeColors.orange,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    }
  ]
});
function useNotyf() {
  return {
    dismiss: (notification) => {
      notyf.dismiss(notification);
    },
    dismissAll: () => {
      notyf.dismissAll();
    },
    success: (payload) => {
      return notyf.success(payload);
    },
    error: (payload) => {
      return notyf.error(payload);
    },
    info: (payload) => {
      const options = {
        type: "info"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    warning: (payload) => {
      const options = {
        type: "warning"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    primary: (payload) => {
      const options = {
        type: "primary"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    purple: (payload) => {
      const options = {
        type: "purple"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    blue: (payload) => {
      const options = {
        type: "blue"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    green: (payload) => {
      const options = {
        type: "green"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    orange: (payload) => {
      const options = {
        type: "orange"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    }
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    radius: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    elevated: { type: Boolean, required: false, default: false }
  },
  setup(__props) {
    const props = __props;
    const cardRadius = computed(() => {
      if (props.radius === "smooth") {
        return "s-card";
      } else if (props.radius === "rounded") {
        return "l-card";
      }
      return "r-card";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(cardRadius),
          __props.elevated && "is-raised",
          props.color && `is-${props.color}`
        ])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  let registration;
  const updateServiceWorker = async (reloadPage = true) => {
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      if (registration && registration.waiting) {
        await n(registration.waiting, { type: "SKIP_WAITING" });
      }
    }
  };
  if ("serviceWorker" in navigator) {
    wb = new v("/sw.js", { scope: "/" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        ;
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    {
      const showSkipWaitingPrompt = () => {
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      };
      wb.addEventListener("waiting", showSkipWaitingPrompt);
      wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
    }
    wb.register({ immediate }).then((r) => {
      registration = r;
      onRegistered == null ? void 0 : onRegistered(r);
    }).catch((e) => {
      onRegisterError == null ? void 0 : onRegisterError(e);
    });
  }
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  const needRefresh = ref(false);
  const offlineReady = ref(false);
  const updateServiceWorker = registerSW({
    immediate,
    onNeedRefresh() {
      needRefresh.value = true;
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onOfflineReady() {
      offlineReady.value = true;
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onRegistered,
    onRegisterError
  });
  return {
    updateServiceWorker,
    offlineReady,
    needRefresh
  };
}
var VReloadPrompt_vue_vue_type_style_index_0_lang = "";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " ist bereit, offline zu arbeiten"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Eine neue Version von ", _interpolate(_named("appName")), " ist verf\xFCgbar, klicken Sie auf die Schaltfl\xE4che Neu laden, um sie zu aktualisieren."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Neu laden"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Schlie\xDFen"]);
        }
      },
      "en": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " is ready to work offline"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["A new version of ", _interpolate(_named("appName")), " is available, click on reload button to update."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reload"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Close"]);
        }
      },
      "fa": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " \u0631\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0622\u0641\u0644\u0627\u06CC\u0646 \u0646\u06CC\u0632 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0646\u0645\u0648\u062F."]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u0646\u0633\u062E\u0647\u200C\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0627\u0632 ", _interpolate(_named("appName")), " \u0622\u0645\u0627\u062F\u0647\u200C\u06CC \u0646\u0635\u0628 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F\u060C \u0628\u0631 \u0631\u0648\u06CC \u062F\u06A9\u0645\u0647\u200C\u06CC \u062A\u0627\u0632\u0647\u200C\u0633\u0627\u0632\u06CC \u0628\u0632\u0646\u06CC\u062F \u062A\u0627 \u0646\u0635\u0628 \u06AF\u0631\u062F\u062F."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062A\u0627\u0632\u0647\u200C\u0633\u0627\u0632\u06CC"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0628\u0628\u0646\u062F"]);
        }
      },
      "es-MX": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "es": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "fr": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est pr\xEAt \xE0 \xEAtre utilis\xE9 hors ligne"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Une nouvelle version de ", _interpolate(_named("appName")), " est disponible, cliquez sur le bouton Recharger pour la mettre \xE0 jour."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recharger"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fermer"]);
        }
      },
      "zh-CN": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), "\u5DF2\u51C6\u5907\u597D\u8131\u673A\u5DE5\u4F5C"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u65B0\u7248\u672C\u7684", _interpolate(_named("appName")), "\u5DF2\u7ECF\u53EF\u7528\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D\u6309\u94AE\u6765\u66F4\u65B0\u3002"]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u91CD\u65B0\u52A0\u8F7D"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5173\u95ED"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "pwa-message" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    appName: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const { t } = useI18n();
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      loading.value = false;
      offlineReady.value = false;
      needRefresh.value = false;
    };
    const update = async () => {
      loading.value = true;
      await updateServiceWorker();
      loading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$e;
      const _component_VButtons = _sfc_main$b;
      const _component_VCard = _sfc_main$1;
      return openBlock(), createBlock(Transition, { name: "from-bottom" }, {
        default: withCtx(() => [
          unref(offlineReady) || unref(needRefresh) ? (openBlock(), createBlock(_component_VCard, {
            key: 0,
            class: "pwa-toast",
            role: "alert",
            radius: "smooth"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                unref(offlineReady) ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(t)("offline-ready", { appName: props.appName })), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(t)("need-refresh", { appName: props.appName })), 1))
              ]),
              createVNode(_component_VButtons, { align: "right" }, {
                default: withCtx(() => [
                  unref(needRefresh) ? (openBlock(), createBlock(_component_VButton, {
                    key: 0,
                    color: "primary",
                    icon: "ion:reload-outline",
                    loading: loading.value,
                    onClick: _cache[0] || (_cache[0] = () => update())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("reload-button")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])) : createCommentVNode("", true),
                  createVNode(_component_VButton, {
                    icon: "feather:x",
                    onClick: close
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("close-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
async function createApp({ enhanceApp }) {
  const head = createHead();
  const i18n = createI18n();
  const router = createRouter();
  const pinia = createPinia();
  const app = createApp$1({
    setup() {
      provideApi();
      return () => {
        const defaultSlot = ({ Component: _Component }) => {
          const Component = resolveDynamicComponent(_Component);
          return [
            h(Transition, { name: "fade-slow", mode: "out-in" }, {
              default: () => [h(Component)]
            })
          ];
        };
        return [
          h(RouterView, null, {
            default: defaultSlot
          }),
          h(_sfc_main, { appName: "\u0648\u06CC\u0648\u0626\u0650\u0631\u0648" })
        ];
      };
    }
  });
  router.beforeEach((to, from) => {
    const userSession = useUserSession();
    if (to.meta.requiresAuth && !userSession.isLoggedIn) {
      const notif = useNotyf();
      notif.error({
        message: "\u0628\u0627 \u0639\u0631\u0636 \u067E\u0648\u0632\u0634 \u060C \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0628\u0627\u06CC\u062F \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F (\u0647\u0631 \u0686\u06CC\u0632\u06CC \u06A9\u0627\u0631 \u0645\u06CC \u06A9\u0646\u062F)",
        duration: 7e3
      });
      return {
        name: "auth",
        query: { redirect: to.fullPath }
      };
    }
  });
  app.use(head);
  app.use(router);
  app.use(i18n);
  app.use(pinia);
  if (enhanceApp) {
    await enhanceApp(app);
  }
  return {
    app,
    router,
    head,
    i18n
  };
}
createApp({
  async enhanceApp(app) {
    const VCalendar = (await __vitePreload(() => import("./index.4cb2c95a.js"), true ? ["assets/index.4cb2c95a.js","assets/vendor.9ec557a4.js"] : void 0)).default;
    const VueMultiselect = (await __vitePreload(() => import("./multiselect.a1a402c9.js"), true ? ["assets/multiselect.a1a402c9.js","assets/vendor.9ec557a4.js"] : void 0)).default;
    const VueSlider = (await __vitePreload(() => import("./slider.79c2cb16.js"), true ? ["assets/slider.79c2cb16.js","assets/vendor.9ec557a4.js"] : void 0)).default;
    const VueTippy = (await __vitePreload(() => import("./vue-tippy.esm-bundler.1fd21ace.js"), true ? ["assets/vue-tippy.esm-bundler.1fd21ace.js","assets/vendor.9ec557a4.js"] : void 0)).default;
    const hasNestedRouterLink = (await __vitePreload(() => import("./has-nested-router-link.4fe8dab1.js"), true ? [] : void 0)).default;
    const background = (await __vitePreload(() => import("./background.5bd78b71.js"), true ? [] : void 0)).default;
    const tooltip = (await __vitePreload(() => import("./tooltip.24128ff9.js"), true ? [] : void 0)).default;
    app.use(VCalendar);
    app.use(VueTippy, {
      defaultProps: {
        theme: "light"
      }
    });
    app.component(VueMultiselect.name, VueMultiselect);
    app.component(VueSlider.name, VueSlider);
    app.use((await __vitePreload(() => import("./vendor.9ec557a4.js").then(function(n2) {
      return n2.i;
    }), true ? [] : void 0)).default);
    app.use(Vue3PersianDatetimePicker, {
      name: "DatePicker",
      props: {
        editable: false,
        inputClass: "",
        placeholder: "\u0644\u0637\u0641\u0627 \u062A\u0627\u0631\u06CC\u062E \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
        color: "var(--primary)",
        autoSubmit: true
      }
    });
    app.directive("has-nested-router-link", hasNestedRouterLink);
    app.directive("background", background);
    app.directive("tooltip", tooltip);
  }
}).then(async ({ app, router }) => {
  await router.isReady();
  app.mount("#app");
});
export { _imports_5 as A, isMediumScreen as B, CssUnitRe as C, _sfc_main$8 as D, _sfc_main$1 as E, useUserSession as F, _export_sfc as _, __unplugin_components_0$1 as a, _sfc_main$e as b, __unplugin_components_1 as c, _sfc_main$9 as d, _sfc_main$3 as e, __vitePreload as f, themeColors as g, _sfc_main$b as h, isDark as i, _imports_0$1 as j, _imports_1$1 as k, _sfc_main$7 as l, __unplugin_components_0 as m, _sfc_main$d as n, __unplugin_components_8 as o, _imports_8 as p, _imports_9$1 as q, _imports_10$1 as r, _imports_11$1 as s, toggleDarkModeHandler as t, useNotyf as u, _imports_12$1 as v, _sfc_main$c as w, _imports_2 as x, _imports_3 as y, _imports_4 as z };
